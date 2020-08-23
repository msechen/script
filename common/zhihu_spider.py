import time

import requests

headers1 = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 QIHU 360SE'
}

headers2 = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15'
}


# 调知乎 api 查询文章基本信息
def get_question(qid):
    # 利用知乎 API 请求 json 数据
    # qid: 知乎问题号
    # offset: 第几页
    # 知乎 API
    url = "https://www.zhihu.com/api/v4/questions/{}?include=visit_count,answer_count".format(qid)
    res = requests.get(url, headers=headers1)
    res.encoding = 'utf-8'

    time.sleep(1)  # 防止被风控

    return res.json()


# 调知乎 api 查询文章的回答内容
def get_answer(qid, offset):
    # 利用知乎 API 请求 json 数据
    # qid: 知乎问题号
    # offset: 第几页
    # 知乎 API
    url = "https://www.zhihu.com/api/v4/questions/{}/answers?include=voteup_count&limit=20&offset={}&platform=desktop&sort_by=default".format(
        qid, offset)
    res = requests.get(url, headers=headers2)
    res.encoding = 'utf-8'

    time.sleep(1)  # 防止被风控

    return res.json()


# 查询文章的浏览量和回答数
def get_view_and_answer_num(qid):
    # 查询文章基本信息
    data = get_question(qid)
    return data['title'], data['visit_count'], data['answer_count']


# 获取自己的回答在问题中的排名和赞数
def get_rank_and_like(qid, aid):
    offset = 0
    rank = 0
    while True:
        qid = qid
        # 查询文章的回答内容
        data = get_answer(qid, offset)
        # print(data)
        if len(data['data']) == 0:
            return offset, "-1"
        if offset > 100:
            return "100+", "-1"

        # 找对应答案的排名
        for item in data["data"]:
            rank += 1
            answer_id = item["id"]
            voteup_count = item['voteup_count']
            if str(answer_id) == aid or answer_id == aid:
                return rank, voteup_count

        offset += 20


if __name__ == "__main__":
    # print(get_rank_and_like('287500965', '1332349585'))
    print(get_view_and_answer_num('287500965'))
