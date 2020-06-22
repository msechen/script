# 导入:
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 ServiceSubscribe 对象:
class ServiceSubscribe(Base):
    # 表的名字:
    __tablename__ = 't_service_subscribe'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer)
    service_id = Column(Integer)
    param = Column(String(64))
    flag = Column(Integer)
