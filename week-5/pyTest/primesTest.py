import primes as p


def test_is_three_prime():
    assert p.is_prime(3) == True, "Test failed! value is a prime number"


def test_five_six_seven():
    assert p.are_prime_numbers(
        5, 6, 7) == False, "Test failed! 6 is not a prime number"


def test_one():
    assert p.is_prime(0) == False, "Test failed! 0 is not a prime number"
