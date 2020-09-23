from sqlalchemy import Column, String, Integer, Text
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 Service 对象:
class ZhLog(Base):
    # 表的名字:
    __tablename__ = 't_zhihu_log'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(Integer)
    event = Column(String(256))
    msg = Column(Text)

    def __init__(self, type, event, msg):
        self.type = type
        self.event = event
        self.msg = msg
