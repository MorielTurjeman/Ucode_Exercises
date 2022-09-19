# Exercise-1+3:

import numbers
import time


# def calc_time(func):
#     def inner(*args, **kwargs):
#         start = time.time()
#         print("args: ", end=" ")
#         res = func(*args, **kwargs)
#         end = time.time()
#         print("time:", end-start)
#         return res
#     return inner


# @calc_time
# def sum(x, y):
#     time.sleep(3)
#     return x+y


# sum(1, 2)
# sum(2, 3)

# ============================================================
# EX-2:
# def print_info(func):
#     def inner(*args, **kwargs):
#         print("name:", func.__name__)
#         print("args:", args)
#         print("kwargs:", start="age")
#         return
#     return inner


# @print_info
# def sum(x, y, like="text"):

#     return


# sum(1, 2)
# =====================================================
# EX-4


# def call_counter(func):
#

#     def inner(*args, **kwargs):
#         inner.calls += 1
#         print(inner.calls)
#         return func(*args, **kwargs)
#     inner.calls = 0
#     return inner


# @call_counter
# def add(x, y):
#     return x+y


# add(1, 2)
# add(1, 2)
# add(1, 2)
# add(1, 2)


# =======================================================
# EX-5

def cache_decorator(func):
    fibo_dict = {}

    def inner(*args, **kwargs):
        if args in fibo_dict:
            return args
        elif args not in fibo_dict:
            res = func(*args, **kwargs)

            fibo_dict[args] = res
        return res
    return inner


@cache_decorator
def fibonacci(num):
    print("calculating: ", num)
    if num < 0:
        return 0
    elif num == 0:
        return 0
    elif num == 1 or num == 2:
        return 1
    else:
        res = fibonacci(num-2)+fibonacci(num-1)
        return res


print(fibonacci(1))
# print(fibonacci(4))
