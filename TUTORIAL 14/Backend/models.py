<<<<<<< HEAD
from database import Base
from sqlalchemy import Column, Integer, String

class Books(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    author = Column(String)
    published_year = Column(Integer)
=======
from database import Base
from sqlalchemy import Column, Integer, String

class Books(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    author = Column(String)
    published_year = Column(Integer)
>>>>>>> e3620df5fe990f7786b7b2408cd6bba730ed2132
