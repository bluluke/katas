def digitize(n):
    str_n = str(n)
    str_list = []
    for char in str_n[::-1]:
        str_list.append(int(char))
    return str_list
print(digitize(12345))