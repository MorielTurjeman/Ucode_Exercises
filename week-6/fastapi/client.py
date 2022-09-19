import requests

name = input("furniture name:")


def furniture_name(name):
    res = requests.get(
        'http://localhost:8000/store/{}'.format(name))
    print(res.json())


furniture_name(name)


to_buy = input("What do you want to buy?")


def buy(to_buy):
    res = requests.get('http://localhost:8000/buy/{}'.format(name))
    print(res.json())


buy(to_buy)


def sale():
    res = requests.get('http://localhost:8000/sale/?admin=True')
    print(res.json())
