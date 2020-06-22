from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 Service 对象:
class Holiday(Base):
    # 表的名字:
    __tablename__ = 't_holiday'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(64))
    date = Column(String(64))
    desc = Column(String(512))
