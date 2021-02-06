import logging

import component.mysql_api as mysql_api
from modal import *
from utils import *

logger = logging.getLogger('wx')


def add_log(type, event, msg):
    # 创建Session对象:
    session = mysql_api.get_session()
    entity = ZhLog(type, event, msg)
    session.add(entity)
    session.commit()
    session.close()


def query_error_log():
    dateTime = get_last_x_min_ts(10).strftime('%Y-%m-%d %H:%M:%S')
    # dateTime = '2021-02-06 17:00'

    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(ZhLog) \
        .filter(ZhLog.create_time > dateTime) \
        .all()
    session.close()
    return rows


if __name__ == "__main__":
    # add_log(1, "1111", "msg")
    result = '[后台日志]'
    logs =  query_error_log()
    if len(logs) > 0:
        for log in logs:
            result += '\n\n' + '时间：' + str(log.create_time)
            result += '\n' + '消息：' + log.msg
        print(result)
