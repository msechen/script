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


if __name__ == "__main__":
    add_log(1, "1111", "msg")
