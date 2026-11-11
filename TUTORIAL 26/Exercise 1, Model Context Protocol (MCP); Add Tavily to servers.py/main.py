# main.py: the agent (Exercise 1: Remote Search)
import logging
import asyncio
import os
from dotenv import load_dotenv
from langchain.agents import create_agent
from langchain.agents.middleware import ModelRetryMiddleware
from langchain_mcp_adapters.client import MultiServerMCPClient
from langchain_google_genai import ChatGoogleGenerativeAI

load_dotenv()
from servers import server_configs

logging.getLogger("langchain_google_genai._function_utils").setLevel(logging.ERROR)

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise SystemExit("GEMINI_API_KEY is missing. Check your .env file.")

llm = ChatGoogleGenerativeAI(
    model="gemini-3.5-flash-lite",
    google_api_key=api_key,
)

SYSTEM_PROMPT = (
    "You are a helpful assistant. Use your tools when they fit. "
    "If no tool can do the job, say so. Answer in plain sentences."
)

QUESTION = "Search for today's latest AI news and summarise it in 3 sentences, then give me a random number between 1 and 10."


async def main():
    client = MultiServerMCPClient(server_configs)
    tools = await client.get_tools()
    print("Tools Available:", [tool.name for tool in tools])

    agent = create_agent(
        model=llm,
        tools=tools,
        system_prompt=SYSTEM_PROMPT,
        middleware=[ModelRetryMiddleware(max_retries=2)],
    )

    # Retry when Google is busy (503)
    for attempt in range(5):
        try:
            result = await agent.ainvoke(
                {"messages": [{"role": "user", "content": QUESTION}]}
            )
            break
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            await asyncio.sleep(10 * (attempt + 1))
    else:
        raise RuntimeError("All attempts failed")

    used = [m.name for m in result["messages"] if m.type == "tool"]
    print("Tools used:", used)
    print("\nAgent Response:\n", result["messages"][-1].text)


if __name__ == "__main__":
    asyncio.run(main())