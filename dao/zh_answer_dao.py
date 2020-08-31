import datetime
import logging

import component.mysql_api as mysql_api
from modal import *

logger = logging.getLogger('wx')


def query_answer_list():
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(ZhAnswer)\
        .filter(ZhAnswer.flag == 0)\
        .all()
    session.close()
    return rows


def update_answer(aid, like_num, rank):
    # 创建Session对象:
    session = mysql_api.get_session()
    session.query(ZhAnswer) \
        .filter(ZhAnswer.aid == aid) \
        .update({"like_num": like_num, "rank": rank, "update_time": datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')})
    session.commit()
    session.close()


def update_answer_yestoday(aid, like_num, rank):
    # 创建Session对象:
    session = mysql_api.get_session()
    session.query(ZhAnswer)\
        .filter(ZhAnswer.aid == aid) \
        .update({"like_num_yestoday": like_num, "rank_yestoday": rank})
    session.commit()
    session.close()


def add_answer_history(qid, aid, date, like_num, rank):
    # 创建Session对象:
    session = mysql_api.get_session()
    entity = ZhAnswerHistory(qid, aid, date, like_num, rank)
    session.add(entity)
    session.commit()
    session.close()


if __name__ == "__main__":
    # for answer in query_answer_list():
    #     print(answer.qid)
    #     update_answer(1, answer.qid, answer.aid, 100, 1)
    add_answer_history(1, 1, "111", 111, 22)
