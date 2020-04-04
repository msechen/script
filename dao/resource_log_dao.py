import logging

import component.mysql_api as mysql_api
from modal import *

logger = logging.getLogger('wx')


# 新增记录
def add_resource_log(user_id, resource_id, resource_type):
    res_log = ResourceLog(user_id, resource_id, resource_type)

    # 创建session对象:
    session = mysql_api.get_session()
    # 添加到session:
    session.add(res_log)
    # 提交即保存到数据库:
    session.commit()
    # 关闭session:
    session.close()


def query_res_log_by_type(user_id, res_type):
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(ResourceLog).filter(ResourceLog.user_id == user_id).filter(
        ResourceLog.resource_type == res_type).all()
    # 关闭Session:
    session.close()
    return rows


if __name__ == "__main__":
    for item in query_res_log_by_type(1, 1):
        print(item.resource_id)
