from fastapi import FastAPI
import uvicorn

from fastapi import Request

app = FastAPI()

wonders = [
    {
        "ID": 1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]


@app.get('/')
def root():
    return {"message": "Server is up and running"}


@app.get('/wonders/{id}')
async def get_wonder(id):
    for item in wonders:
        if item['ID'] == int(id):
            return item
        else:
            return "None"


@app.post('/wonders')
async def create_wonder():
    print("Someone's trying to make a post request")
    return "Created"


@app.post('/wonders', status_code=201)
async def create_wonder(request: Request):
    new_wonder = await request.json()
    global id_counter
    id_counter += 1
    new_wonder["ID"] = id_counter
    wonders.append(new_wonder)
    return "Created"

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)
