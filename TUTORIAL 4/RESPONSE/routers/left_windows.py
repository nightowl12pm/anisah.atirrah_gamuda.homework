from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_left_windows():
    return {"message": "Ini adalah endpoint untuk Left Window"}