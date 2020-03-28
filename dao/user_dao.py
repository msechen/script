import logging

import component.mysql_api as mysqlApi
import modal.user as User

logger = logging.getLogger('wx')


def add_user(new_user):
    # 创建session对象:
    session = mysqlApi.get_session()
    # 添加到session:
    session.add(new_user)
    # 提交即保存到数据库:
    session.commit()
    user_id = new_user.id
    # 关闭session:
    session.close()
    logger.info("add user id: {}".format(user_id))
    return user_id


def query_user_by_puid(puid):
    # 创建Session对象:
    session = mysqlApi.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    user = session.query(User).filter(User.puid == puid).one()
    # 关闭Session:
    session.close()
    return user
