from sqlalchemy import Column, String, Integer, Text
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 Service 对象:
class ZhSearch(Base):
    # 表的名字:
    __tablename__ = 't_zhihu_search'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer)
    article_id = Column(String(256))
    keyword = Column(String(256))
    remark = Column(String(256))
    rank = Column(Integer)
    update_time = Column(String(256))

