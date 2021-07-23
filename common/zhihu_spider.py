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


# 调知乎 api 查询账户今日佣金
def get_zhihu_earnings(start, end, cookie):
    # 知乎 API
    url = "https://www.zhihu.com/api/v4/mcn/order_stats?begin_date={}&end_date={}".format(start, end)
    header = {
        "cookie": cookie,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    }

    try:
        res = requests.get(url, headers=header)
        res.encoding = 'utf-8'
    except BaseException:
        return "接口异常"

    json = res.json()

    return json['order_count'], json['estimate_income']


if __name__ == "__main__":
    # print(get_question(37963557))

    cookie = '_zap=e57707b8-7a03-4462-a346-bd5da5d02539; d_c0="APCh2_BT2Q-PTigVkv897aqeNSJEQvYc18w=|1565062665"; _xsrf=SrmxfUWg8IEOJrRXM1DcwQQD0iXNzsnN; _ga=GA1.2.1478516503.1565065195; __snaker__id=nk5RnIvDHfQhp4OA; _9755xjdesxxd_=32; __utmz=51854390.1613287518.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); tshl=; __utmc=51854390; __utmv=51854390.100-1|2=registration_date=20150224=1^3=entry_date=20150224=1; oauth_from="/settings/account"; ff_supports_webp=1; q_c1=cf37d6a5119f4336bae212034c8ffa6c|1625147574000|1565065193000; __utma=51854390.1478516503.1565065195.1621049374.1625647467.4; captcha_session_v2="2|1:0|10:1625880570|18:captcha_session_v2|88:aGR5NDFqMEg2TDdIWjZhaXFkd3ZtTkt6KzdSWkREQWN0N2NRQjlGQm9XcmZudWtTMTNxR3V4Tjg0NE1LMU0zcA==|6a630b9a403a645aa1df2ed120893f60f2bd938ba9c9b17c143692db8ada91bc"; gdxidpyhxdE=A4i35N4JADR7P1udbtX7HoovaLIm1%2BDe5tin5%2BZPnd4a5Vp%2BvcKep0ytUc%5CeetneS8NL9aRVgdMpvrlbBe5AvoqKWhCbXHkBX%5CbPpMJWyORspNAqWAlEBSA%5CMJrUBZfGjKIo%5C9EH%2BfVigwqqUet8rnrIxrE0c7m83WR3naEksPD4qkkY%3A1625881471836; YD00517437729195%3AWM_NI=37%2FibvT6PNxetv7eztvFu5WdUTwUIjETZM5ooTRdPk2KpJHjCMH7OG%2FkgvuBVP07yFSThRxeF9qezz99ORd1Yvcr1qeft8l4mO2X8IwUPbL3zcAUV4H0DV8k0l%2FwLt85YWs%3D; YD00517437729195%3AWM_NIKE=9ca17ae2e6ffcda170e2e6eea9ae5eaeefe182f3649b928ab2d55a838e8ebbb5398b8dfcb7e750898bf984d32af0fea7c3b92af1e9e18ae17e98eaa0affb6fb8aaf986f980b69abbd6d670978cb9b6cc62878c96aeb865ad8c9e85d361f295c0abcb62819388d8ce4dedb5a997f84a969000d8fc4e918ca8b3fb6f86e7bf86f972fbe781b3e73b9baaad93b47ba7babcd9ef40af91feb9bb43b58ba083cf39babd8fb6d5408cf08cb7bb61f4b4e198cf80fceb97b8f237e2a3; YD00517437729195%3AWM_TID=8I5LEaWazqtEUQAUAFIqicS4RMWaUuMO; z_c0="2|1:0|10:1625880593|4:z_c0|92:Mi4xLWVEOUFBQUFBQUFBOEtIYjhGUFpEeWNBQUFDRUFsVk5FSVVRWVFDeEk3SUp3QWRIaUt2NElNRmhSVndmdXJvMVBn|6a008e2ee3a62d3de37b8bc3ce7e001708e221e08514b1f723d3cf0c5f08ac0a"; SESSIONID=9BWviT1JQgdFt6qvvnpYstXqXxsEQCnsYtHDLyBkAiO; JOID=VFoQB0njog9o4fGTa-EiUCiFbx553udZGIyhpSC2wWwvk8PmGgZ4-Arh8pVsASvMnT1TUk4qEVpeYD5MZSEF9gA=; osd=VVkXCk_ioQhl5_CQbOwkUSuCYhh43eBUHo2ioi2wwG8onsXnGQF1_gvi9ZhqACjLkDtSUUknF1tdZzNKZCIC-wY=; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1626673041,1626678003,1626678025,1626678030; tst=h; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1626933959; KLBRSID=fe0fceb358d671fa6cc33898c8c48b48|1626968851|1626960877'

    print(get_zhihu_earnings('2021-07-23', '2021-07-23', cookie))
