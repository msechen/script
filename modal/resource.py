# 导入:
from sqlalchemy import Column, Integer, Text
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 Resource 对象:
class Resource(Base):
    # 表的名字:
    __tablename__ = 't_resource'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(Integer)
    content = Column(Text)

    def __init__(self, type, content):
        self.type = type
        self.content = content
