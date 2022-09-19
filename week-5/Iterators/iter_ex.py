# EX-1
import math
from imghdr import tests


# def my_enumerate(arr, start):
#     count = start
#     for elem in arr:
#         yield count, elem
#         count += 1

# tests:
# for index, elem in my_enumerate([10, 20, 30, 40], 0):
#     print(index, elem)

# for index, elem in my_enumerate([10, 20, 30, 40], 10):
#     print(index, elem)


# EX-2
# def my_accumulate(arr_num):
#     count = 0
#     for elem in arr_num:
#         yield count
#         count += elem


# # test
# for elem in my_accumulate([1, 2, 3, 4, 5]):
#     print(elem)


# EX-3


def get_prime_factors_generator(num):
    while num % 2 == 0:
        yield 2
        num = num/2
