import logging

import component.mysql_api as mysql_api
from modal import *

logger = logging.getLogger('wx')


# 新增资源
def add_resource(type, content):
    res = Resource(type, content)

    # 创建session对象:
    session = mysql_api.get_session()
    # 添加到session:
    session.add(res)
    # 提交即保存到数据库:
    session.commit()
    # 关闭session:
    session.close()


# 根据用户 ID 查询
def query_res_content_by_type(type, exclude_ids):
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    content = session.query(Resource).filter(Resource.type == type).filter(~Resource.id.in_(exclude_ids)).first()
    # 关闭Session:
    session.close()
    return content


if __name__ == "__main__":
    # add_resource(1, "a joke demo 2")
    print(query_res_content_by_type(1, [2, 3]).content)
    # for item in query_res_content_by_type(1,[2,3]):
    #     print(item.content)
