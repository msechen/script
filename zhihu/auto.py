from common import jd_union
from common import zhihu_spider, web_spider, auto_spider
from dao import zh_answer_dao
from dao import zh_goods_dao
from dao import zh_question_dao
from dao import zh_search_dao
from dao import zh_log_dao
from dao import zh_config_dao
from utils import *


# 查询文章草稿列表
def query_article_draft():
    cookie = zh_config_dao.query_config('dxck').value
    draft_all = auto_spider.get_article_draft_all(cookie)

    result = ''

    for i, item in enumerate(draft_all):
        if item['title'].startswith('Auto-'):
            result = result + item['title'] + "_" + str(item['id']) + '\n'

    return result


# 查询文章草稿内容
def query_article_draft_html(aid_list):
    cookie = zh_config_dao.query_config('dxck').value
    result = ''
    for aid in aid_list:
        draft_content = auto_spider.get_article_draft_html(aid, cookie)
        result += draft_content['content']

    return result


if __name__ == "__main__":
    aid_list = [1651370266, 508000925, 507981653]
    print(query_article_draft_html(aid_list))
