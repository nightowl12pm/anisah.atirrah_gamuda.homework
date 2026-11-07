# example_3.py: ask questions about facts.txt[cite: 1]
import os
from dotenv import load_dotenv
from pymongo import MongoClient
from langchain_mongodb import MongoDBAtlasVectorSearch
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from embeddings import embeddings

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
MONGODB_URI = os.getenv("MONGODB_ATLAS_CLUSTER_URI")

# Initialize the LLM[cite: 1]
llm = ChatGoogleGenerativeAI(model="gemini-3.8-flash", api_key=GEMINI_API_KEY)

client = MongoClient(MONGODB_URI)
DB_NAME = "test_db"
COLLECTION_NAME = "test_collection"
ATLAS_VECTOR_SEARCH_INDEX_NAME = "test-index-1"
MONGODB_COLLECTION = client[DB_NAME][COLLECTION_NAME]

# Vector store and retriever[cite: 2]
# k=3 returns the top 3 most relevant facts[cite: 2]
vector_store = MongoDBAtlasVectorSearch(
    collection=MONGODB_COLLECTION,
    embedding=embeddings,
    index_name=ATLAS_VECTOR_SEARCH_INDEX_NAME,
    relevance_score_fn="cosine",
)
retriever = vector_store.as_retriever(search_kwargs={"k": 3})

# Define the system prompt with instructions for the AI
system_prompt = """
Write your own instructions here.
CONTEXT:\n{context}
"""

prompt = ChatPromptTemplate.from_messages([
    ("system", system_prompt),
    ("human", "{input}"),
])

# Merge the retrieved chunks into one string[cite: 3]
def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

# Prepare the inputs for the prompt[cite: 3]
setup_and_retrieval = {
    "context": retriever | format_docs,
    "input": RunnablePassthrough(),
}

# Retrieve, build the prompt, call the LLM, parse the text[cite: 3]
rag_chain = setup_and_retrieval | prompt | llm | StrOutputParser()

# Execute the query[cite: 3]
print("Querying Vector DB...")
response = rag_chain.invoke("Three facts about animals")
print(f"\nAI Response: {response}")
client.close()