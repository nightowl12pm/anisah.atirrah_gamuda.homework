# servers.py: configuration for registering and managing MCP servers
import os
import sys
from dotenv import load_dotenv

load_dotenv()  # penting: key dibaca semasa fail ini di-import

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
python_executable = sys.executable  # guna Python venv yang sama dengan main.py
STDIO = os.path.join(BASE_DIR, "server", "stdio")

server_configs = {
    # Local server: client yang start untuk anda
    "random-number": {
        "command": python_executable,
        "args": [os.path.join(STDIO, "random_number.py")],
        "transport": "stdio",
    },
    # HTTP server: anda start sendiri dahulu (terminal 1)
    "dice-roller": {
        "url": "http://127.0.0.1:8000/mcp",
        "transport": "streamable_http",
    },
    # Remote server: Tavily web search (key dalam HEADER, bukan URL)
    "tavily": {
        "url": "https://mcp.tavily.com/mcp/",
        "transport": "streamable_http",
        "headers": {"Authorization": f"Bearer {os.getenv('TAVILY_API_KEY')}"},
    },
    # Postgres server: read-only, client yang start
    "postgres": {
        "command": python_executable,
        "args": [os.path.join(STDIO, "postgres_server.py")],
        "transport": "stdio",
    },
}