import logging

import component.mysql_api as mysql_api
from modal import *
from utils import *

logger = logging.getLogger('wx')


def query_search_list():
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(ZhSearch)\
        .filter(ZhSearch.user_id == 11) \
        .order_by(ZhSearch.rank) \
        .all()
    session.close()
    return rows


def update_search(article_id, rank):
    # 创建Session对象:
    session = mysql_api.get_session()
    session.query(ZhSearch)\
        .filter(ZhSearch.article_id == article_id) \
        .update({"rank": rank,
                 "update_time": get_current_datetime()})
    session.commit()
    session.close()


if __name__ == "__main__":
    for search in query_search_list():
        print(search.article_id)
        # update_search(search.article_id, 2)
