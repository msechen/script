# 导入:
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# 初始化数据库连接:
engine = create_engine('mysql+mysqlconnector://root:root1234@localhost:3306/wxpy')
# 创建DBSession类型:
DBSession = sessionmaker(bind=engine)


def get_session():
    return DBSession()
