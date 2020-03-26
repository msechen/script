# 导入:
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# 初始化数据库连接:
engine = create_engine('mysql+mysqlconnector://kolly:Kolly@123456@120.24.109.181:3306/wx-robot')
# 创建DBSession类型:
DBSession = sessionmaker(bind=engine)


def get_session():
    return DBSession()
