<<<<<<< HEAD
import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
llm = ChatGoogleGenerativeAI(model="gemini-3.5-flash-lite", api_key=GEMINI_API_KEY)

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are a helpful assistant that translates {input_language} to {output_language}. Translate the provided sentence only."
        ),
        (
            "human",
            "{input}"
        ),
    ]
)

chain = prompt | llm | StrOutputParser()

ai_msg = chain.invoke({
    "input_language": "Malay",
    "output_language": "Japanese",
    "input": "Selamat pagi, saya suka belajar."
})

=======
import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
llm = ChatGoogleGenerativeAI(model="gemini-3.5-flash-lite", api_key=GEMINI_API_KEY)

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are a helpful assistant that translates {input_language} to {output_language}. Translate the provided sentence only."
        ),
        (
            "human",
            "{input}"
        ),
    ]
)

chain = prompt | llm | StrOutputParser()

ai_msg = chain.invoke({
    "input_language": "Malay",
    "output_language": "Japanese",
    "input": "Selamat pagi, saya suka belajar."
})

>>>>>>> e3620df5fe990f7786b7b2408cd6bba730ed2132
print(ai_msg)