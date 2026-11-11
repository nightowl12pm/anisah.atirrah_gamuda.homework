import os
from skimage import data
import cv2

os.makedirs("data", exist_ok=True)
img = data.astronaut()                          # imej RGB
cv2.imwrite(os.path.join("data", "Astronaut.png"),
            cv2.cvtColor(img, cv2.COLOR_RGB2BGR))   # tukar RGB ke BGR sebelum simpan
print("Astronaut.png siap disimpan dalam folder data")