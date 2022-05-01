from common import jd_union
from common import zhihu_spider, web_spider, auto_spider
from dao import zh_answer_dao
from dao import zh_goods_dao
from dao import zh_question_dao
from dao import zh_search_dao
from dao import zh_log_dao
from dao import zh_config_dao
from utils import *


# 查询京粉点击数
def query_article_draft():
    draft_all = auto_spider.get_article_draft_all(zh_config_dao.query_config('dxck').value)

    draft_list = []
    for draft in draft_all:
        if draft['title'].startsWith('Auto-'):
            draft_list.extend(draft)

    result = ''

    for i in draft_list:
        result = result + i['title'] + "-" + i['id']

    return result


if __name__ == "__main__":
    print(query_article_draft)
