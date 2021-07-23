from sqlalchemy import Column, String, Integer, Text
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 Service 对象:
class ZhConfig(Base):
    # 表的名字:
    __tablename__ = 'sys_config'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    config_key = Column(String(256))
    value = Column(Text)
