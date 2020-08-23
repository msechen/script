import random
import numpy as np
import plotly.io as pio


def init():
    for i in range(1, 101):
        data[i] = 100


def game():
    for i in range(1, 101):
        if data[i] > 0:
            to = choose(i)
            data[i] = data[i] - 1
            data[to] = data[to] + 1


def sort_money():
    money_list = []
    for v in data.values():
        money_list.append(v)
    money_list.sort()
    return money_list


def choose(x):
    rand = random.randint(1, 100)
    if rand == x:
        return choose(x)

    return rand


if __name__ == '__main__':
    data = {}
    init()
    for j in range(20000):
        game()

    fig = dict({
        "data": [{"type": "bar",
                  "x": np.arange(1, 101),
                  "y": sort_money()}],
        "layout": {"title": {"text": "100个人，每人初始100元，每人每天随机给一个人1元钱，玩20000次"}}
    })
    pio.show(fig)
