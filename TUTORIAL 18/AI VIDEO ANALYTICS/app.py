import os
from dotenv import load_dotenv
from google import genai

# Load environment variables
load_dotenv()

# Initialize GenAI client
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Path to your video file (downloaded locally or a local sample)
video_file_path = "sample_video.mp4"

print("Uploading video to Gemini File API...")
video_file = client.files.upload(file=video_file_path)
print(f"Uploaded as: {video_file.name}")

# Generate content using the uploaded file reference
response = client.models.generate_content(
    model="gemini-3.5-flash-lite",
    contents=[
        video_file,
        "Describe what's happening in this video."
    ]
)

print("\nAnalysis completed:")
print(response.text)