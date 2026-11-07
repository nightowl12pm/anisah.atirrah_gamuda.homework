import os
import time
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("human", "{question}")
])

QUESTION = "What is the sum of the first 50 prime numbers?"

for level in ["minimal", "low", "medium", "high"]:
    llm = ChatGoogleGenerativeAI(
        model="gemini-3.5-flash-lite",
        google_api_key=os.getenv("GEMINI_API_KEY"),
        thinking_level=level,
    )
    chain = prompt | llm | StrOutputParser()

    start = time.time()
    response = chain.invoke({"question": QUESTION})
    elapsed = time.time() - start

    print(f"===== {level} ({elapsed:.1f} saat) =====")
    print(response)
    print()