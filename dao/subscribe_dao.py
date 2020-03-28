import logging

import component.mysql_api as mysql_api
import modal.subscribe as subscribe

logger = logging.getLogger('wx')


def query_subscribe_by_service_id(service_id):
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(subscribe.Subscribe).filter_by(service_id=service_id).all()
    # 关闭Session:
    session.close()
    return rows


if __name__ == "__main__":
    for item in query_subscribe_by_service_id(1):
        print(item.user_id)
