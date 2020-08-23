from sqlalchemy import Column, String, Integer, Float
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 Service 对象:
class ZhGoods(Base):
    # 表的名字:
    __tablename__ = 't_zhihu_goods'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    sku_id = Column(String(256))
    sku_name = Column(String(256))
    card_name = Column(String(256))
    price = Column(Float)
    fee = Column(Float)
    fee_rate = Column(Float)
    jd_sale = Column(Integer)
    order_num = Column(Integer)
    cid1 = Column(Integer)
    cid1_name = Column(String(256))
    cid2 = Column(Integer)
    cid2_name = Column(String(256))
    cid3 = Column(Integer)
    cid3_name = Column(String(256))
    flag = Column(Integer)
    update_time = Column(String(256))
