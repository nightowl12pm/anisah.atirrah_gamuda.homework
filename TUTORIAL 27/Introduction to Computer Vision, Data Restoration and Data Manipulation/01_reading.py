import cv2
import os

# Dapatkan folder kerja semasa
current_directory = os.getcwd()

# Bina laluan penuh ke imej
image_path = os.path.join(current_directory, "data", "Astronaut.png")

# Baca imej dalam tiga mod berbeza
image1 = cv2.imread(image_path, cv2.IMREAD_COLOR)
image2 = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
image3 = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)

# Semak sama ada imej berjaya dimuatkan
if image1 is None:
    print("Error: Image not found or unable to read.")
else:
    print("Image loaded successfully!")
if image2 is None:
    print("Error: Image not found or unable to read.")
else:
    print("Image loaded successfully!")
if image3 is None:
    print("Error: Image not found or unable to read.")
else:
    print("Image loaded successfully!")

# Paparkan ketiga-tiga imej
cv2.imshow("Color Image", image1)
cv2.imshow("Grayscale Image", image2)
cv2.imshow("Unchanged Image", image3)

# Tunggu tekanan kekunci sebelum menutup tetingkap
cv2.waitKey(0)
cv2.destroyAllWindows()
