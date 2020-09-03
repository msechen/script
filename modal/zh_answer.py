from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 Service 对象:
class ZhAnswer(Base):
    # 表的名字:
    __tablename__ = 't_zhihu_answer'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    qid = Column(Integer)
    aid = Column(Integer)
    like_num = Column(Integer)
    rank = Column(String(256))
    like_num_yestoday = Column(Integer)
    rank_yestoday = Column(String(256))
    update_time = Column(String(256))
    flag = Column(Integer)


class ZhAnswerHistory(Base):
    # 表的名字:
    __tablename__ = 't_zhihu_answer_history'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    qid = Column(Integer)
    aid = Column(Integer)
    date = Column(String(256))
    like_num = Column(Integer)
    rank = Column(String(256))

    def __init__(self, qid, aid, date, like_num, rank):
        self.qid = qid
        self.aid = aid
        self.date = date
        self.like_num = like_num
        self.rank = rank
