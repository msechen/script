from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 Service 对象:
class Service(Base):
    # 表的名字:
    __tablename__ = 't_service'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(64))
    year = Column(String(64))
    month = Column(String(64))
    day = Column(String(64))
    day_of_week = Column(String(64))
    hour = Column(String(64))
    minute = Column(String(64))
    second = Column(String(64))
