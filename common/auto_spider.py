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
    url = "https://zhuanlan.zhihu.com/api/articles/{}/draft".format(aid)

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

    content = res.json()['content']

    # var content = res.content

    # 替换京东卡片
    # var re = /<p>(<b>)*【(<\/b>)*(<b>)*\d+?(<\/b>)*(<b>)*】(<\/b>)*<\/p>/g;
    # var matchResult = content.match(re);  // 识别商品卡片
    # if (matchResult == null) {
    #     // console.log('当前 content 中没有商品可替换')
    # } else {
    #     console.log(matchResult)

    #     // 自动生成商品卡片代码
    #     for (let i in matchResult) {
    #     console.log(matchResult[i])
    #     var tmp = matchResult[i].replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('<p>【', '').replaceAll('】</p>', '') // skuid
    #     console.log('skuid:' + tmp)

    #     var card_html = ''

    #     // search goods
    #     var url1 = 'https://www.zhihu.com/api/v4/mcn/search?source=jingdong&keyword=' + tmp
    #     const res1 = await getUrl(url1)
    #     console.log(res1)

    #     if (res1 === null) {
    #         console.log('查询商品 detail 接口异常')
    #     } else {
    #         var goods = res1.data[0]
    #         console.log(goods)

    #         // linkcard
    #         var url2 = 'https://www.zhihu.com/api/v4/mcn/linkcard'
    #         const res2 = await postUrl(url2, goods)
    #         console.log(res2)

    #         if (res2 === null) {
    #         console.log('linkcard 接口异常')
    #         } else {
    #         var card_id = res2.data.id
    #         card_html = '<a data-draft-node=\"block\" data-draft-type=\"mcn-link-card\" data-mcn-id=\"' + card_id + '\"></a>'
    #         }
    #     }

    #     // console.log('skuid:' + tmp + '，card_html:' + card_html)
    #     content = content.replace(matchResult[i], card_html)
    #     // console.log(content)
    #     }
    # }

    return res.json()


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
    print(get_article_draft_html(337273132, cookie))