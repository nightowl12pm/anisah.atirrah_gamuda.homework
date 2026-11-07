import os
from dotenv import load_dotenv
from pypdf import PdfReader
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

llm = ChatGoogleGenerativeAI(
    model="gemini-3.5-flash-lite",
    google_api_key=os.getenv("GEMINI_API_KEY"),
)

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant that summarizes documents."),
    ("human", "Write a concise summary of the following:\n\n{text}\n\nCONCISE SUMMARY:")
])

chain = prompt | llm | StrOutputParser()

# 1. Baca teks daripada PDF
reader = PdfReader("sample.pdf")
text = "\n".join(page.extract_text() or "" for page in reader.pages)

if not text.strip():
    print("Tiada teks dijumpai dalam PDF ini.")
else:
    # 2. Hantar ke Gemini dan cetak ringkasan
    summary = chain.invoke({"text": text})
    print(summary)