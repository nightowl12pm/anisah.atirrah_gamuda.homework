from fastapi import FastAPI, Body  # 1. Import FastAPI

app = FastAPI()                    # 2. CIpta pemboleh ubah 'app' INI PENTING!

BOOKS = [                          # 3. Senarai BOOKS
    {"title": "Fourth Wing", "author": "Rebecca Yarros", "published_year": 2023},
    {"title": "On Freedom", "author": "Timothy Snyder", "published_year": 2024},
    {"title": "It Starts with Us", "author": "Colleen Hoover", "published_year": 2022},
    {"title": "The Book of Bill", "author": "Alex Hirsh", "published_year": 2024},
    {"title": "On Tyranny", "author": "Timothy Snyder", "published_year": 2017},
]

@app.get("/")                      # 4. Endpoint root
async def read_root():
    return {"message": "Hello World!"}

@app.get("/books")                 # 5. Endpoint books
async def getAllBooks():
    return BOOKS