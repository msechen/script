import logging

import component.mysql_api as mysql_api
import modal.user as user

logger = logging.getLogger('wx')


# 新增用户
def add_user(new_user):
    # 创建session对象:
    session = mysql_api.get_session()
    # 添加到session:
    session.add(new_user)
    # 提交即保存到数据库:
    session.commit()
    user_id = new_user.id
    # 关闭session:
    session.close()
    logger.info("add user id: {}".format(user_id))
    return user_id


# 根据用户 ID 查询
def query_user_by_id(user_id):
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    u = session.query(user.User).filter_by(id=user_id).one()
    # 关闭Session:
    session.close()
    return u


if __name__ == "__main__":
    print(query_user_by_id(1).nickname)
