<<<<<<< HEAD
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_right_windows():
=======
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_right_windows():
>>>>>>> 3fb8f47cd519f63427761b9b4acbafaebe93efa0
    return {"message": "Ini adalah endpoint untuk Right Window"}