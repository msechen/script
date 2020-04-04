# 导入:
from sqlalchemy import Column, Integer
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 ResourceLog 对象:
class ResourceLog(Base):
    # 表的名字:
    __tablename__ = 'resource_log'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer)
    resource_id = Column(Integer)
    resource_type = Column(Integer)

    def __init__(self, user_id, resource_id, resource_type):
        self.user_id = user_id
        self.resource_id = resource_id
        self.resource_type = resource_type
