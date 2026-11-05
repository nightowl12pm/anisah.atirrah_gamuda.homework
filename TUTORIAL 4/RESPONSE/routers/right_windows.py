from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_right_windows():
    return {"message": "Ini adalah endpoint untuk Right Window"}