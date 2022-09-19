import re
from tkinter import W
from fastapi import FastAPI
import uvicorn

from fastapi import Request

app = FastAPI()


word_counter = {
    "dog": 1
}


@app.get('/sanity')
async def get_sanity():
    return "Server is up and running smoothly"


@app.get('/wordCounter/{word}')
async def get_count(word):
    if word in word_counter:
        return {"count": word_counter[word]}
    else:
        return {"count": 0}


@app.post('/wordCounter')
async def word_count(req: Request):
    word = await req.json()
    # saved the actual word(=cat) from the {"word": "cat"}
    req_word = word['word']
    if req_word in word_counter:
        word_counter[req_word] += 1
        return "{} is already in wordCounter".format(req_word)
    else:
        word_counter[req_word] = 1
        return ('Added:{}'.format(req_word), 'currentCount: {}'.format(word_counter[req_word]))


@app.post('/sentenceCount')
async def sentence_count(req: Request):
    numNewWords = 0
    numOldWords = 0
    sentence = await req.json()
    req_sentence = sentence['sentence']
    print(req_sentence)
    words = req_sentence.split()
    words.lower()
    for word in words:
        if word in word_counter:
            word_counter[word] += 1
            numOldWords += 1
        else:
            word_counter[word] = 1
            numNewWords += 1
    return ('Added {} new words'.format(numNewWords), '{} already existed'.format(numOldWords))


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)
