# 导入:
from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义User对象:
class User(Base):
    # 表的名字:
    __tablename__ = 'user'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    puid = Column(String(64))
    nickname = Column(String(64))
    avatar = Column(String(64))
    sex = Column(String(64))
    city = Column(String(64))

    def __init__(self, puid, nickname, avatar, sex, city):
        self.puid = puid
        self.nickname = nickname
        self.avatar = avatar
        self.sex = sex
        self.city = city

def foo():
    return