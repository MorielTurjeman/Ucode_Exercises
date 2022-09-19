
def is_prime(number):
    if number == 0 or number < 0:
        return False
    for i in range(2, number):
        if (number % i) == 0:
            return False
    return True


def are_prime_numbers(*args):
    for x in args:
        if not is_prime(x):
            return False
    return True


print(are_prime_numbers(1, 2, 3, 4))
