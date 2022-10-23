import time

import requests
from dao import zh_log_dao
from dao import zh_config_dao
from wxpy import *

logger = logging.getLogger('wx')

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


# 调知乎 api 查询今日阅读数据
def get_zhihu_card_data(cookie):
    # 知乎 API
    url = "https://www.zhihu.com/api/v4/creators/analysis/card"
    header = {
        "cookie": cookie,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    }

    try:
        res = requests.get(url, headers=header)
        res.encoding = 'utf-8'
    except BaseException:
        return "接口异常"

    if res.status_code != 200:
        logger.info(res.text)
        return "接口异常"

    json = res.json()

    return '阅读：' + str(json['realtime_card']['today_read_count']) + '(' + str(json['realtime_card']['yesterday_read_count']) + ')' + '\n点赞：' + str(json['realtime_card']['today_upvoted_count']) + '(' + str(json['realtime_card']['yesterday_upvoted_count']) + ')'



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
        return -10, 0

    if res.status_code != 200:
        logger.info(res.text)
        return -10, 0

    json = res.json()

    return json['order_count'], json['estimate_income'], json['payment_amount']


# 调京粉 api 查询账户今日佣金
def get_jingfen_earnings(start, end, cookie):
    # 知乎 API
    url = '''
        https://api.m.jd.com/api?appid=unionpc&body=%7B%22funName%22:%22querySpreadEffectData%22,%22param%22:%7B%22startDate%22:%22{}%22,%22endDate%22:%22{}%22,%22mediaId%22:%22%22,%22proCont%22:%22%22,%22promotionId%22:%22%22,%22sourceEmt%22:%22%22,%22pageNo%22:1,%22pageSize%22:20%7D%7D&functionId=union_report&loginType=3
    '''.format(start, end)
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
        return -1, 0, 0

    json = res.json()

    return json['result']['spreadReportInfoChatList'][0]['orderNum'], json['result']['spreadReportInfoChatList'][0]['cosFee'], json['result']['spreadReportInfoChatList'][0]['cosPrice']


def get_1111_gmv(cookie):
    url = '''
        https://api.m.jd.com/api?functionId=union_data_bi_screen&appid=unionpc&_=1666360227362&loginType=3&body=%7B%22funName%22%3A%22gmv%22%2C%22param%22%3A%7B%22startDate%22%3A%222022-10-20%22%2C%22endDate%22%3A%222022-11-13%22%2C%22roleType%22%3A1%7D%7D
    '''
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
        return 0

    json = res.json()

    return json['result']['amount']


def get_1111_rank(cookie):
    url = '''
        https://api.m.jd.com/api?functionId=union_bonus_api_channel&appid=unionpc&_=1666507893693&loginType=3&body=%7B%22funName%22%3A%22queryActivityBonus%22%2C%22param%22%3A%7B%22activityId%22%3A%226346%22%2C%22sourceType%22%3A1%7D%7D
    '''
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
        return 0, 0

    json = res.json()

    return json['result'][0]['gmv'], json['result'][0]['ranking']

# 调京粉 api 查询点击数
def get_jingfen_click(start, end, cookie):
    # 知乎 API
    url = '''
        https://api.m.jd.com/api?appid=unionpc&body=%7B%22funName%22:%22querySpreadEffectData%22,%22param%22:%7B%22startDate%22:%22{}%22,%22endDate%22:%22{}%22,%22mediaId%22:%22%22,%22proCont%22:%22%22,%22promotionId%22:%22%22,%22sourceEmt%22:%22%22,%22pageNo%22:1,%22pageSize%22:20%7D%7D&functionId=union_report&loginType=3
    '''.format(start, end)
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

    json = res.json()

    return json['result']['spreadReportInfoSum']['clickNum']


# 调京粉 api 查询pop order
def get_jd_order(start, end, cookie):
    pageNo = 1
    pageSize = 20

    list = []
    flag = True
    while (flag):
        pageRet = get_jd_order_by_page(start, end, cookie, pageNo, pageSize)
        if pageRet == -10:
            flag = False
        else:
            json = pageRet.json()
            list.extend(json['result'])
            flag = json['hasNext']
            pageNo += 1

    return list


# 调京粉 api 查询pop order
def get_jd_order_by_page(start, end, cookie, pageNo, pageSize):
    # 知乎 API
    url = '''
        https://api.m.jd.com/api?functionId=listOrderSku&appid=u&_=1651160904745&loginType=3&body=%7B%22funName%22%3A%22listOrderSku%22%2C%22page%22%3A%7B%22pageNo%22%3A{}%2C%22pageSize%22%3A{}%7D%2C%22param%22%3A%7B%22unionRole%22%3A1%2C%22endTime%22%3A%22{}%2023%3A59%3A59%22%2C%22orderStatus%22%3A0%2C%22unionTags%22%3A%5B%220%22%5D%2C%22startTime%22%3A%22{}%2000%3A00%3A00%22%2C%22optType%22%3A1%2C%22spId%22%3A%22%22%7D%7D
    '''.format(pageNo, pageSize, end, start)

    logger.info(url)

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


# 调京粉 api 查询账户今日红包发放
def get_jingfen_redpacket(start, end, cookie):
    # 知乎 API
    url = '''
        https://api.m.jd.com/api?appid=unionpc&body=%7B%22funName%22:%22queryJXRedPacketSumData%22,%22param%22:%7B%22startDate%22:%22{}%22,%22endDate%22:%22{}%22,%22mediaId%22:%22%22,%22proCont%22:%22%22,%22promotionId%22:%22%22,%22sourceEmt%22:%22%22,%22pageNo%22:1,%22pageSize%22:20%7D%7D&functionId=union_report&loginType=3
    '''.format(start, end)

    url = '''
        https://api.m.jd.com/api?appid=unionpc&body=%7B%22funName%22:%22queryJXRedPacketSumData%22,%22param%22:%7B%22actId%22:%22%22,%22promotionId%22:%22%22,%22endTime%22:%22{}%22,%22startTime%22:%22{}%22%7D%7D&functionId=union_report&loginType=3
    '''.format(start, end)
    header = {
        'cookie': cookie,
        'referer': 'https://union.jd.com/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    }

    try:
        res = requests.get(url, headers=header)
        res.encoding = 'utf-8'
    except BaseException as e:
        return "接口异常"

    if 'login' in res.text:
        return 0, -10

    json = res.json()

    return json['result']['jxRedPacketActOrderDetail']['showNum'], json['result']['jxRedPacketActOrderDetail']['giveNum']

# 调知+ api 查询账户今日消耗
def get_zhijia_pay(start, end, cookie):
    # 知+ API
    url = '''
        https://xg.zhihu.com/api/v1/stat/overview?userId=39261&dataType=USER&groupUnit=BY_HOUR&stTms={}&endTms={}
    '''.format(start, end)
    header = {
        'cookie': cookie,
        'referer': 'https://xg.zhihu.com/advertiser/504360/home',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15'
    }

    try:
        res = requests.get(url, headers=header)
        res.encoding = 'utf-8'
    except BaseException as e:
        return "接口异常"

    json = res.json()

    return json['total']['cost']

# 调知+ api 查询账户今日消耗
def get_zhijia_pay_2(start, end, cookie):
    # 知+ API
    url = '''
        https://xg.zhihu.com/api/v1/stat/overview?userId=504360&dataType=USER&groupUnit=BY_HOUR&stTms={}&endTms={}
    '''.format(start, end)
    header = {
        'cookie': cookie,
        'referer': 'https://xg.zhihu.com/advertiser/504360/home',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15'
    }

    try:
        res = requests.get(url, headers=header)
        res.encoding = 'utf-8'
    except BaseException as e:
        return "接口异常"

    json = res.json()

    return '花费:' + str(format(json['total']['cost']/100,'.1f')) + ' 点击：' + str(json['total']['click']) + ' 点击率：' + str(format(json['total']['clickRate']*100,'.1f')) + '%', json['total']['cost']


if __name__ == "__main__":
    today = '2022-04-30'
    cookie = zh_config_dao.query_config('jfck2').value
    print(get_jd_order(today, today, cookie))
