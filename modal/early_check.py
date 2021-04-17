# 导入:
from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义EarlyCheck对象:
class EarlyCheck(Base):
    # 表的名字:
    __tablename__ = 't_early_check'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_name = Column(String(64))
    date = Column(String(64))
    check_time = Column(String(64))

    def __init__(self, user_name, date, check_time):
        self.user_name = user_name
        self.date = date
        self.check_time = check_time
