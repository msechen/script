import time

import requests
from dao import zh_log_dao
from utils import *


# 调知乎 api 查询今日阅读数据
def get_article_draft_by_page(cookie, offset, limit):
    # 知乎 API
    url = "https://www.zhihu.com/api/v4/articles/my_drafts?offset={}&limit={}&include=data%5B*%5D.schedule".format(
        offset, limit)

    header = {
        "cookie": cookie,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    }

    try:
        res = requests.get(url, headers=header)
        res.encoding = 'utf-8'
    except BaseException:
        return "接口异常"

    if 'error' in res.text:
        return "接口报错"

    return res


# 调京粉 api 查询pop order
def get_article_draft_all(cookie):
    offset = 0
    limit = 10

    list = []
    flag = True
    while (flag):
        pageRet = get_article_draft_by_page(cookie, offset, limit)
        if pageRet == "接口报错":
            flag = False
        else:
            json = pageRet.json()
            list.extend(json['data'])
            flag = json['is_end']
            offset += 10

    return list


# 调京粉 api 查询pop order
def get_pop_order_by_page(start, end, cookie, pageNo, pageSize):
    # 知乎 API
    url = '''
        https://api.m.jd.com/api?functionId=listOrderSku&appid=u&_=1651160904745&loginType=3&body=%7B%22funName%22%3A%22listOrderSku%22%2C%22page%22%3A%7B%22pageNo%22%3A{}%2C%22pageSize%22%3A{}%7D%2C%22param%22%3A%7B%22unionRole%22%3A1%2C%22endTime%22%3A%22{}%2023%3A59%3A59%22%2C%22orderStatus%22%3A0%2C%22unionTags%22%3A%5B%220%22%5D%2C%22startTime%22%3A%22{}%2000%3A00%3A00%22%2C%22optType%22%3A1%2C%22spId%22%3A3004398015%7D%7D
    '''.format(pageNo, pageSize, end, start)
    header = {
        'cookie': cookie,
        'referer': 'https://union.jd.com/report',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    }

    try:
        res = requests.get(url, headers=header)
        res.encoding = 'utf-8'
    except BaseException as e:
        return "接口异常"

    if 'login' in res.text:
        return -10

    return res


if __name__ == "__main__":
    cookie = ''
    print(get_article_draft_all(cookie))
