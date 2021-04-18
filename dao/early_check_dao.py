import logging

import component.mysql_api as mysql_api
from modal import *
import utils.time_utils as time_utils

logger = logging.getLogger('wx')


# 新增用户
def add_early_check(user_name, date, check_time):
    logger.info('add new add_early_check param:{} {} {}'.format(user_name, date, check_time))
    u = EarlyCheck(user_name, date, check_time)
    # 创建session对象:
    session = mysql_api.get_session()
    # 添加到session:
    session.add(u)
    # 提交即保存到数据库:
    session.commit()
    # 关闭session:
    session.close()
    return


# 根据用户 ID 查询
def count_by_user_name(user_name):
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    u = session.query(EarlyCheck).filter(EarlyCheck.user_name == user_name).one()
    # 关闭Session:
    session.close()
    return u


def query_early_check_rows_by_user_name(user_name):
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(EarlyCheck).filter(EarlyCheck.user_name == user_name).all()
    # 关闭Session:
    session.close()
    return rows


def query_early_check_rows_by_user_name_and_date(user_name, date):
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(EarlyCheck).filter(EarlyCheck.user_name == user_name). \
        filter(EarlyCheck.date == date).all()
    # 关闭Session:
    session.close()
    return rows


if __name__ == "__main__":
    # add_early_check('test', time_utils.get_today_date(), time_utils.get_current_time())
    # print(count_by_user_name('kolly').date)
    print(len(query_early_check_rows_by_user_name('kolly')))
    print(len(query_early_check_rows_by_user_name_and_date('test', time_utils.get_today_date())))
