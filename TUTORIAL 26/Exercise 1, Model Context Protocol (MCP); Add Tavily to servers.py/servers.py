# servers.py: every MCP server the agent can use
import os
import sys
from dotenv import load_dotenv

load_dotenv()

STDIO = os.path.join(os.path.dirname(os.path.abspath(__file__)), "server", "stdio")

server_configs = {
    # Local server: the client starts it for you
    "random_number": {
        "command": sys.executable,
        "args": [os.path.join(STDIO, "random_number.py")],
        "transport": "stdio",
    },
    # HTTP server: start it yourself first
    "roll_dice": {
        "url": "http://127.0.0.1:8000/mcp",
        "transport": "streamable_http",
    },
    # Remote server: Tavily web search (key goes in a header)
    "tavily": {
        "url": "https://mcp.tavily.com/mcp/",
        "transport": "streamable_http",
        "headers": {"Authorization": f"Bearer {os.getenv('TAVILY_API_KEY')}"},
    },
}