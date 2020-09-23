import time

import requests
from dao import zh_log_dao

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
    try:
        res = requests.get(url, headers=headers1)
        res.encoding = 'utf-8'
    except BaseException as e:
        zh_log_dao.add_log(2, 'spider_zh_question_error', '[{}] {}'.format(url, e))
        return None, e

    time.sleep(1)  # 防止被风控

    json = res.json()

    if 'error' in json:
        error_code = json['error']['code']
        error_msg = json['error']['message']
        zh_log_dao.add_log(2, 'spider_zh_question_error', '[{}] [{}]{}'.format(url, error_code, error_msg))
        return None, '[{}]{}'.format(error_code, error_msg)

    return json, None


# 调知乎 api 查询文章的回答内容
def get_answer(qid, offset, with_content):
    # 利用知乎 API 请求 json 数据
    # qid: 知乎问题号
    # offset: 第几页
    # 知乎 API
    url = "https://www.zhihu.com/api/v4/questions/{}/answers?include=voteup_count&limit=20&offset={}&platform=desktop&sort_by=default".format(qid, offset)

    if with_content:
        url = "https://www.zhihu.com/api/v4/questions/{}/answers?include=content,voteup_count&limit=20&offset={}&platform=desktop&sort_by=default".format(qid, offset)

    try:
        res = requests.get(url, headers=headers2)
        res.encoding = 'utf-8'
    except BaseException as e:
        zh_log_dao.add_log(2, 'spider_zh_answer_error', '[{}] {}'.format(url, e))
        return None, e

    time.sleep(1)  # 防止被风控

    json = res.json()

    if 'error' in json:
        error_code = json['error']['code']
        error_msg = json['error']['message']
        zh_log_dao.add_log(2, 'spider_zh_answer_error', '[{}] [{}]{}'.format(url, error_code, error_msg))
        return None, '[{}]{}'.format(error_code, error_msg)

    return json, None


# 调知乎 api 查询文章的回答内容
def get_search_result(keyword, x_zse_86, cookie):
    # 知乎 API
    url = "https://www.zhihu.com/api/v4/search_v3?t=general&q={}&correction=1&offset=0&limit=20&lc_idx=0&show_all_topics=0".format(keyword)
    header = {
        "pragma": "no-cache",
        "cache-control": "no-cache",
        "x-zse-86": x_zse_86,
        "x-zse-83": "3_2.0",
        "referer": "https://www.zhihu.com/search?type=content&q={}".format(keyword),
        "cookie": cookie,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    }

    try:
        res = requests.get(url, headers=header)
        res.encoding = 'utf-8'
    except BaseException as e:
        zh_log_dao.add_log(2, 'spider_zh_search_error', '[{}] {}'.format(url, e))
        return None, e

    time.sleep(1)  # 防止被风控

    json = res.json()

    if 'error' in json:
        error_code = json['error']['code']
        error_msg = json['error']['message']
        zh_log_dao.add_log(2, 'spider_zh_search_error', '[{}] [{}]{}'.format(url, error_code, error_msg))
        return None, '[{}]{}'.format(error_code, error_msg)

    return json, None


# 查询文章的浏览量和回答数
def get_view_and_answer_num(qid):
    # 查询文章基本信息
    data, error_info = get_question(qid)
    if error_info is not None:
        return None, None, None

    return data['title'], data['visit_count'], data['answer_count']


# 获取自己的回答在问题中的排名和赞数
def get_rank_and_like(qid, aid):
    offset = 0
    rank = 0
    while True:
        qid = qid
        # 查询文章的回答内容
        data, error_info = get_answer(qid, offset, False)
        if error_info is not None:
            return None, None

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


def get_article_rank(keyword, x_zse_86, cookie, article_id):
    rank = 0
    data, error_info = get_search_result(keyword, x_zse_86, cookie)
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
    # print(get_question(1))
    print(get_question(37963557))
    # print(get_rank_and_like('287500965', '1332349585'))
    # print(get_view_and_answer_num('287500965'))
    # get_question_answer_goods(35327890)

    # keyword1 = "%E4%B9%B3%E8%83%B6%E6%9E%95"
    # x_zse_861 = "1.0_aR2067HBoLSYoXt0GXNqgvXqc0YxNGYBY_20Hvu0r_2Y"
    # cookie1 = '_zap=121eea9f-f9cf-4d6f-be34-79b95d7059f3; _xsrf=2NWRQicC4Ngc48wc8H3yabdVLMyxlkwb; d_c0="AIBYdVAmjRGPTp9mB2sXH7vMLI7zgfOayCI=|1594310169"; _ga=GA1.2.1594579692.1594310171; z_c0="2|1:0|10:1594310216|4:z_c0|92:Mi4xYm82WkhBQUFBQUFBZ0ZoMVVDYU5FU1lBQUFCZ0FsVk5TSXowWHdDYlphZE8yMV9MV1FPVG1xY3czWDRkbUVUMmZB|fc47693b636b1005f8d1051d3eff7be88dd647d6905ff57464f0a465141d9850"; q_c1=dd666fefcdf140e491395de13794d205|1594310268000|1594310268000; __utma=51854390.1594579692.1594310171.1594310270.1594310270.1; __utmz=51854390.1594310270.1.1.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmv=51854390.100--|2=registration_date=20200709=1^3=entry_date=20200709=1; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1600822242; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1600822242; tst=r; _gid=GA1.2.1138163163.1600822243; _gat_gtag_UA_149949619_1=1; SESSIONID=uk3m7cnoDARiUpItHvs5Ykm1WRlplMf3Bg3vKNVqodc; JOID=UFETCkkxPIcAImS_czoXX0p3STlmT1i7ZhUM3hN1dtpmfBT9CNGn6VQpYL93QuMReo3hFa285EMhh7ydbJV5Nqw=; osd=VVEVC000PIEBJmG_dTsTWkpxSD1jT166YhAM2BJxc9pgfRD4CNem7VEpZr5zR-MXe4nkFau94EYhgb2ZaZV_N6g=; KLBRSID=af132c66e9ed2b57686ff5c489976b91|1600822254|1600822239'
    #
    # print(get_article_rank(keyword1, x_zse_861, cookie1, "165960666"))
