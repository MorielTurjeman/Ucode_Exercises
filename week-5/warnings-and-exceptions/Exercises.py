# import math
# # Exercise 1:
# dividend = float(input("Enter the dividend: "))
# divisor = float(input("Enter the divisor: "))
# quotient = dividend/divisor
# print(math.floor(quotient))

# divisor might be 0
# Import warning


# EX-2:

def get_list_element(my_list, index):
    try:
        print(my_list[index])
    except:
        print(IndexError)


my_list = [1, 2, 3, 4]
get_list_element(my_list, 5)

# EX-3


# EX-4
def divide(x, y):
    try:
        print(f'{x}/{y} is {x / y}')
    except ZeroDivisionError as e:
        print(e)
    except TypeError as e:
        print(e)
    except ValueError as e:
        print(e)
