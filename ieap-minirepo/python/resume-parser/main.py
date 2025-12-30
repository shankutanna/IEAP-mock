from fastapi import FastAPI
app = FastAPI()
@app.get('/health')
def health():
    return {'status':'ok','service':'resume-parser'}
@app.post('/parse')
def parse(text: dict):
    # dummy parsing
    return {'parsed_name': text.get('name', 'unknown'), 'confidence': 0.92}
