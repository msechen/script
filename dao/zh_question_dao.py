import logging

import component.mysql_api as mysql_api
from modal import *

logger = logging.getLogger('wx')


def query_question_list():
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(ZhQuestion)\
        .filter(ZhQuestion.flag == 0)\
        .all()
    session.close()
    return rows


def update_question(qid, title, view_num, answer_num):
    # 创建Session对象:
    session = mysql_api.get_session()
    session.query(ZhQuestion)\
        .filter(ZhQuestion.qid == qid) \
        .update({"title": title, "view_total": view_num, "answer_total": answer_num})
    session.commit()
    session.close()


def update_question_yestoday(qid, view_num, answer_num):
    # 创建Session对象:
    session = mysql_api.get_session()
    session.query(ZhQuestion)\
        .filter(ZhQuestion.qid == qid) \
        .update({"view_before_today": view_num, "answer_before_today": answer_num})
    session.commit()
    session.close()


def add_question_history(qid, date, view_num, answer_num):
    # 创建Session对象:
    session = mysql_api.get_session()
    entity = ZhQuestionHistory(qid, date, view_num, answer_num)
    session.add(entity)
    session.commit()
    session.close()


if __name__ == "__main__":
    # for question in query_question_list():
    #     print(question.qid)
    #     update_question(question.qid)
    add_question_history(1, "1111", 111, 222)
