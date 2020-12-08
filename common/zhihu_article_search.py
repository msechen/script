import time
import execjs

import requests
from urllib.parse import quote
import hashlib


# 调知乎 api 查询文章的回答内容
def get_search_result(keyword):
    d_c0 = "ALDf8QMiORKPTrORVVR-bJd2FeLjPQYRE58=|1605851767"

    url = "/api/v4/search_v3?t=general&q={}&correction=1&offset=0&limit=20&lc_idx=0&show_all_topics=0".format(
        quote(keyword))

    referer = "https://www.zhihu.com/search?type=content&q={}".format(quote(keyword))

    f = "+".join(["3_2.0", url, referer, '"%s"' % d_c0])

    fmd5 = hashlib.new('md5', f.encode()).hexdigest()

    with open('/Users/kolly/workspace-demo/wx-robot/common/g_encrypt.js', 'r') as f:
        ctx1 = execjs.compile(f.read(), cwd=r'/Users/kolly/workspace-demo/wx-robot/common/node_modules')
    encrypt_str = ctx1.call('b', fmd5)

    headers = {
        "referer": referer,
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        "cookie": 'd_c0="%s";' % d_c0,
        "x-api-version": "3.0.91",
        "x-zse-83": "3_2.0",
        "x-zse-86": "1.0_%s" % encrypt_str,
    }

    # print(headers)

    try:
        res = requests.get("https://www.zhihu.com" + url, headers=headers)
        res.encoding = 'utf-8'
    except BaseException as e:
        return None, e

    time.sleep(1)  # 防止被风控

    json = res.json()
    # print(json)

    if 'error' in json:
        error_code = json['error']['code']
        error_msg = json['error']['message']
        return None, '[{}]{}'.format(error_code, error_msg)

    return json, None


def get_article_rank(keyword, article_id):
    rank = 0
    data, error_info = get_search_result(keyword)
    if error_info is not None:
        return None

    for item in data["data"]:
        types = item["type"]
        if types == 'search_result':
            rank += 1
            typess = item["object"]["type"]
            if typess == 'article':
                id = item["object"]["id"]
                if id == article_id:
                    return rank

    return 100


if __name__ == "__main__":
    data = {
    }
    for key in data.keys():
        rank = get_article_rank(key, data[key])
        print(key, rank)