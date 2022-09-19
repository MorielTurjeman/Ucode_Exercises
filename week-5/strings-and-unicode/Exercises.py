# res = ""

# for c in "abc":
#     code = ord(c)
#     incremented_code = code + 1
#     incremented_char = chr(incremented_code)
#     res += incremented_char

# print(res)

# print("".join([chr(ord(c)+1) for c in "abc"]))

# print(chr(ord("C")))
# res = chr(1)
# print(type(res))
# print(ord(c))


# EX-1
from base64 import encode
from multiprocessing import reduction


def to_upper(char):
    if (97 <= ord(char) <= 122):
        return chr(ord(char)-32)
    return char


# print(to_upper("d"))    # "D"
# print(to_upper("Q"))    # "Q" (no change)
# print(to_upper("!"))    # "!" (no change)

# string_lower = []


def to_uppers(mystring):
    string_lower = ""
    for chr in mystring:
        string_lower += to_upper(chr)
    return string_lower


print(to_uppers("bla bla"))


# Exercise-2: Unicode Encryption

def encode(msg):
    copymsg = ""
    for x in msg:
        copymsg += str(ord(x))+" "
    return copymsg


print(encode("Hello"))


def decode(msg):
    copymsg = ""
    splited = msg.split(" ")
    print(splited)
    for x in splited:
        copymsg += (chr(int(x)))
    return copymsg


print(decode("72 101 108 108 111"))

# Exercise-3: Word value


def get_word_value(word):
    newstr = 0
    for i in word:
        newstr += (ord(i)-96)
    return newstr


print(get_word_value("day"))


# EX-4 CYPHER

def encode(msg, n):
    res = ""
    for i in msg:
        res += chr(((ord(i)+n-65) % 26)+65)
    return res


print(encode("ABXYZ", 3))

# ex-5


def string_number_to_int(s):
    rtr = 0
    for c in s:
        rtr = rtr*10 + ord(c) - ord('0')

    return rtr


print(string_number_to_int("10"))       # output: 10
print(string_number_to_int("123"))      # output: 123
print(string_number_to_int("99"))       # output: 99
