my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8, 9, 10]]


def test_number():
    assert True if 2 in my_list else False
    assert True if 56 in my_list else False


def test_str():
    assert True if "I" in my_list and "Love" in my_list and "Coding" in my_list else False


def test_upper_str():
    assert True of
    # def test_negative():
    #     assert …  # Should assert if number 6 is no﻿t in﻿ my_list - result should be true
