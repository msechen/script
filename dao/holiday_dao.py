import logging
import time

import component.mysql_api as mysql_api
from modal import *

logger = logging.getLogger('wx')


def query_today_holiday():
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(Holiday).filter(Holiday.date == time.strftime("%m-%d", time.localtime())).all()
    # 关闭Session:
    session.close()
    if len(rows) == 0:
        return ''
    else:
        return rows[0].desc


if __name__ == "__main__":
    info = query_today_holiday()
    if info != '':
        print(info)
    else:
        print('今天不是节日哦')
