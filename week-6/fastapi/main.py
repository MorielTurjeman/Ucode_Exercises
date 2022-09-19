from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI
import requests
from fastapi.responses import FileResponse
from store import store as store
import uvicorn

app = FastAPI()

# app.mount("/static", StaticFiles(directory="static"), name="static")


# # @app.get('/')
# # def root():
# #     return FileResponse('./static/download.jpeg')


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


# @app.get('/shoobi')
# def shoobi():
#     return "This here is the shoobi *route*"


# @app.get("/optionalParameters/")
# async def query_params(name):
#     return {"message": "Hi there {}".format(name)}


# @app.get("/book/{name}")
# async def get_book(name):
#     return name


# @app.get("/book/{name}")
# async def get_book(name):
#     res = requests.get(
#         'https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
#     return res.json()

# ==================================================================================
# EX-1
@app.get("/sanity")
def sanity():
    return "Server is up and running smoothly"


app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get('/')
def root():
    return FileResponse('./static/download.jpeg')


@app.get('/')
def root():
    return FileResponse('./static/puppy.mp3.wav')


# ====================================================================================
# EX-2

@app.get('/store/{name}')
async def get_item(name):
    for item in store:
        if item['name'] == name:
            return {"price": item["price"]}
    return {"price": 'None'}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)


# =========================================================================================
# EX-4
@app.get('/buy/{name}')
async def buy_item(name):
    for item in store:
        if item['name'] == name:
            item["inventory"] -= 1
            return {"inventory": item["inventory"]}


@app.get('/sale/')
async def make_sale(admin):
    if admin == 'True':
        for item in store:
            if item['inventory'] > 10:
                item['price'] = item['price']/2
    return store

    # for item in store:
    #     if item['name'] == name:
    #         item["inventory"] -= 1
    #         return {"inventory": item["inventory"]}
