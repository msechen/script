import logging

import component.mysql_api as mysql_api
import modal.service as service

logger = logging.getLogger('wx')


def query_service_by_id(service_id):
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(service.Service).filter_by(id=service_id).one()
    # 关闭Session:
    session.close()
    return rows


if __name__ == "__main__":
    for item in query_service_by_id(1):
        print(item.name)
