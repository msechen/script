# -*- coding: utf-8 -*-
def find_min_and_max(array):
    if array == []:
        return None, None
    min = max = array[0]
    for x in array:
        if min > x:
            min = x
        if max < x:
            max = x
    return min, max


if __name__ == "__main__":
    # 测试
    if find_min_and_max([]) != (None, None):
        print('测试失败!')
    elif find_min_and_max([7]) != (7, 7):
        print('测试失败!')
    elif find_min_and_max([7, 1]) != (1, 7):
        print('测试失败!')
    elif find_min_and_max([7, 1, 3, 9, 5]) != (1, 9):
        print('测试失败!')
    else:
        print('测试成功!')
