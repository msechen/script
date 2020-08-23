import logging

import component.mysql_api as mysql_api
from modal import *
from utils import *

logger = logging.getLogger('wx')


def query_goods_list():
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    rows = session.query(ZhGoods) \
        .filter(ZhGoods.flag == 0) \
        .all()
    session.close()
    return rows


def update_goods(sku_id, sku_name, price, fee_rate, fee, jd_sale, order_num, cid1, cid1_name, cid2, cid2_name, cid3,
                 cid3_name):
    # 创建Session对象:
    session = mysql_api.get_session()
    session.query(ZhGoods) \
        .filter(ZhGoods.sku_id == sku_id) \
        .update({"sku_name": sku_name, "price": price, "fee_rate": fee_rate, "fee": fee, "jd_sale": jd_sale,
                 "order_num": order_num,
                 "cid1": cid1, "cid1_name": cid1_name, "cid2": cid2, "cid2_name": cid2_name, "cid3": cid3,
                 "cid3_name": cid3_name,
                 "update_time": get_current_datetime()})
    session.commit()
    session.close()


if __name__ == "__main__":
    for goods in query_goods_list():
        print(goods.sku_id)
        update_goods(66621064236, "hahahaha", 150, 8.1, 14, 1, 234, 111, "111", 222, "222", 333, "333")
