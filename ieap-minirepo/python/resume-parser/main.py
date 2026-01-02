from fastapi import FastAPI

app = FastAPI()

@app.get("/parser/health")
def health():
    return {
        "service": "python-parser",
        "status": "UP"
    }

