# main.py: main entry point for the AI agent using MCP servers
import logging
import asyncio
import os
from dotenv import load_dotenv
from langchain.agents import create_agent
from langchain.agents.middleware import ModelRetryMiddleware
from langchain_mcp_adapters.client import MultiServerMCPClient
from langchain_google_genai import ChatGoogleGenerativeAI

load_dotenv()  # mesti sebelum import servers
from servers import server_configs

# Senyapkan amaran bising yang tidak berbahaya
logging.getLogger("langchain_google_genai._function_utils").setLevel(logging.ERROR)

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise SystemExit("GEMINI_API_KEY is missing. Check your .env file.")

llm = ChatGoogleGenerativeAI(
    model="gemini-3.5-flash",
    google_api_key=api_key,
    temperature=0,
)

SYSTEM_PROMPT = (
    "You are a helpful assistant. Use your tools when they fit. "
    "You are a helpful assistant. Use your tools when they fit. "
    "For any question about books or the database, always call list_tables "
    "and run_query first. If no tool can do the job, say so. "
    "Answer in plain sentences."
)

QUESTION = "How many books are there in books_db, and who wrote the first one?"


async def main():
    # Connect to every server and collect their tools
    client = MultiServerMCPClient(server_configs)
    tools = await client.get_tools()
    print("Tools Available:", [tool.name for tool in tools])

    agent = create_agent(
        model=llm,
        tools=tools,
        system_prompt=SYSTEM_PROMPT,
        middleware=[ModelRetryMiddleware(max_retries=2)],
    )

    # Cuba semula bila Google beri ralat 503 (sesak)
    for attempt in range(5):
        try:
            result = await agent.ainvoke(
                {"messages": [{"role": "user", "content": QUESTION}]}
            )
            break
        except Exception as e:
            print(f"Percubaan {attempt + 1} gagal: {e}")
            await asyncio.sleep(10 * (attempt + 1))
    else:
        raise RuntimeError("Semua percubaan gagal")

    # Show which tools ran, then the answer
    used = [m.name for m in result["messages"] if m.type == "tool"]
    print("Tools used:", used)
    print("\nAgent Response:\n", result["messages"][-1].text)


if __name__ == "__main__":
    asyncio.run(main())