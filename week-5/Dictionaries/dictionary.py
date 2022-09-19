

# fridge = {
#     "milk": 1,
#     "bananas": 4,
#     "juice": 2
# }

# if (fridge["milk"] == 1):
#     print("There are " + str(fridge["milk"]) + " bottles of milk left")

# else:
#     print("No milk at the fridge")


# values_to_add = {"1": 'complete number', "0.5": 'half', "0.25": 'quarter'}
# numbers = {'pi': 3.14159265359, 'phi': 1.6180339887, "1": 'complete'}


# numbers.update(values_to_add)
# print(numbers)

from asyncio import constants


closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}
print(closet["shirts"]["white"])
print(closet["pants"]["shorts"]["flamingo-pink"])
closet["pants"]["jeans"]["organic"] = 7
print(closet["pants"]["jeans"]["organic"])
closet["pants"]["jeans"]["denim"] += 4
print(closet["pants"]["jeans"]["denim"])


shorts = closet["pants"]["shorts"]["flamingo-pink"]
shirts = closet["shirts"]["flamingo-pink"]
if (shirts > shorts):
    print("top")
else:
    print("bottom")


# nums = [2, 4, 6]
# numbers = {str(value): value for value in nums}
# print(numbers)

# names = ["koko", "momo", "bobo"]
# result = {"name" + str(i): v for i, v in enumerate(names)}
# print(result)

    # {'n1': 'mimi', 'n3': 'fifi'}


names = ["koko", "mimi", "bobo", "fifi"]

res = {"n" + str(i): names[i] for i in range(len(names)) if names[i][1] == "i"}
print(res)


def get_squares_dictionary(num):
    return {x: x ** 2 for x in range(1, num + 1)}


print(get_squares_dictionary(5))


# EX-1
state = "France"

heads_of_states = {
    "Italy": {
        "president": "Sergio Mattarella",
        "prime minister": "Giuseppe Conte"
    },
    "India": {
        "president": "Ram Nath Kovind",
        "prime minister": "Narendra Modi"
    },
    "France": {
        "president": "Emmanuel Macron",
        "prime minister": "Edouard Philippe"
    }
}

print("The president of", state, "is", heads_of_states[state]["president"],
      "and the prime minister is", heads_of_states[state]["prime minister"])

# print("The president of", state, + "and its president is", heads_of_states["state"]["president"], +
#       "and the prime minister is", state is heads_of_states["state"]["prime minister"])
# =======================================================================================
# EX-2
user_id = 3058
bonus_months = 3

user_months = {
    1552: 18,
    7021: 2,
    532: 12,
    3058: 9,
    1102: 4
}

user_months[user_id] += bonus_months
print(user_months[user_id])

# print("Giving user " + str(user_id) + " an extra " +
#       str(bonus_months) + " month bonus")
# =======================================================================================
# EX-3

country_populations = {}

country_populations["Ghana"] = 28
country_populations["Brazil"] = 209
country_populations["Mongolia "] = 3

country = "Brazil"

if (country_populations[country] < 50):
    print(state+"is a Small country")
else:
    print(state+"is a Big country")


# print(country, "is a big country") if country_populations[country] >= BIG_COUNTRY else print(country, "is a small country")

 # =======================================================================================
# EX-4

tomato = "Tomato Soup"
onion = "Onion Soup"
carrot = "Carrot Soup"

user_preferences = {
    "Sarah": tomato,
    "Sheila": carrot,
    "Fernando": tomato,
    "Jovan": onion,
    "Simona": carrot
}

soup_recipes = {
    tomato: "Get a bunch of tomatoes, cut them up, and throw them in boiling water",
    onion: "Be prepared to cry",
    carrot: "Find a rabbit, ask him how to make a carrot soup"
}

user = "Jovan"

print("Be prepared to cry")

print(soup_recipes[user_preferences[user]])


x = {
    "a": 1,
    "b": 2,
    1: "b",
    2: "a"
}

print(x[x[1]])

movies = {
    "Endgame": 2019,
    "Potter": 2001,
    "King": 1994,
    "Rings": 2001
}

books = movies
books["Potter"] = 1997
books["Rings"] = 1954

print(books["Rings"])
print(movies["Rings"])
