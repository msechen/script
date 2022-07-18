import re
import requests, json
from dao import zh_config_dao
from wxpy import *

logger = logging.getLogger('wx')

# 调知乎 api 查询今日阅读数据
def get_article_draft_by_page(cookie, offset, limit):
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

    if res.status_code != 200:
        logger.info(res.text)
        return "接口异常"

    return res

# 调京粉 api 查询pop order
def get_article_draft_all(cookie):
    offset = 0
    limit = 10

    list = []
    isEnd = False
    while (not isEnd):
        pageRet = get_article_draft_by_page(cookie, offset, limit)
        if pageRet == "接口异常":
            isEnd = True
        else:
            json = pageRet.json()
            list.extend(json['data'])
            isEnd = json['paging']['is_end']
            offset += 10

    return list


def get_article_draft_html(aid, cookie):
    # content = '<h3>▎<b>OPPO K10</b></h3><p><b>亮点</b></p><ul><li><b>性能</b>：天玑 8000-MAX 处理器，性能足功耗低</li><li><b>屏幕：</b>LCD 屏幕、120Hz 刷新率、240Hz 触控采样率</li><li><b>续航</b>：5000mAH 电池+67W 快充，续航非常不错</li><li><b>其他</b>：双扬声器、X 轴马达、NFC、VC 液冷散热</li></ul><p><b>选购建议</b></p><p>OPPO K10 是一款比较全能的机型， 在 2000 元价位<b>兼顾性能、续航、护眼，</b>OPPO 的拍照算法表现在同价位也不错，LCD 屏幕虽然很多中高端机型都弃用了，但是对于屏闪敏感用户或者追求护眼的群体还是非常实用的</p><p>【100021537031】</p>'

    header = {
        "cookie": cookie,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    }

    url = "https://zhuanlan.zhihu.com/api/articles/{}/draft".format(aid)

    try:
        res = requests.get(url, headers=header)
        res.encoding = 'utf-8'
    except BaseException:
        return "articles/draft 接口异常"

    if res.status_code != 200:
        print(res.text)
        return "articles/draft 接口异常"

    content = res.json()['content']

    # reg = "/<p>(<b>)*【(<\/b>)*(<b>)*\d+?(<\/b>)*(<b>)*】(<\/b>)*<\/p>/g"
    reg = "<p>【\d+?】</p>"
    pattern = re.compile(reg)
    match_result = re.findall(pattern, content)

    if len(match_result) == 0:
        print('没有识别到商品 ID')

    for item in match_result:
        sku_id = item.replace('<p>【', '')
        sku_id = sku_id.replace('】</p>', '')
        print(sku_id)

        # search goods
        url = "https://www.zhihu.com/api/v4/mcn/search?source=jingdong&keyword={}".format(sku_id)

        try:
            res = requests.get(url, headers=header)
            res.encoding = 'utf-8'
        except BaseException:
            return "mcn/search 接口异常"

        if res.status_code != 200:
            print(res.text)
            return "articles/draft 接口异常"

        goods = res.json()['data'][0]
        print(goods)

        # linkcard
        url = 'https://www.zhihu.com/api/v4/mcn/linkcard'

        try:
            res = requests.post(url, data=json.dumps(goods), headers=header)
            res.encoding = 'utf-8'
        except BaseException:
            return "linkcard 接口异常"

        if res.status_code != 200:
            print(res.text)
            return "linkcard 接口异常"

        card_id = res.json()['data']['id']
        card_html = '<a data-draft-node=\"block\" data-draft-type=\"mcn-link-card\" data-mcn-id=\"' + card_id + '\"></a>'

        content = content.replace(item, card_html)

    return content


def get_question_draft_html(qid, cookie):
    url = "https://www.zhihu.com/api/v4/questions/{}/draft?include=question%2Cschedule".format(qid)

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

    return res.json()


def post_question_draft(qid, content, cookie):
    url = "https://www.zhihu.com/api/v4/questions/{}/draft".format(qid)

    header = {
        "cookie": cookie,
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
        'referer': "https://www.zhihu.com/question/{}/?write".format(qid),
        'content-type': 'application/json',
    }

    body = {
        "content": content,
        "delta_time": 3,
        "draft_type": "normal",
    }

    try:
        res = requests.post(url, data=json.dumps(body), headers=header)
        res.encoding = 'utf-8'
    except BaseException:
        return "接口异常"

    if res.status_code != 200:
        logger.info(res.text)
        return "接口异常"

    logger.info("保存回答草稿成功，qid:{}".format(qid))

    return res.json()


if __name__ == "__main__":
    cookie = zh_config_dao.query_config('dxck').value
    print(get_article_draft_html(508568552, cookie))
