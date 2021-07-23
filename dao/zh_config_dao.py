import logging

import component.mysql_api as mysql_api
from modal import *
from utils import *

logger = logging.getLogger('wx')


def update_config(config_key, value):
    # 创建Session对象:
    session = mysql_api.get_session()
    session.query(ZhConfig) \
        .filter(ZhConfig.config_key == config_key) \
        .update({"value": value})
    session.commit()
    session.close()


def query_config(config_key):
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    value = session.query(ZhConfig).filter(ZhConfig.config_key == config_key).one()
    # 关闭Session:
    session.close()
    return value


if __name__ == "__main__":
    print(query_config('jfck').value)
