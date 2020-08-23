import pandas as pd
import pymysql

sql = '''
    SELECT 
        date,
        qid,
        view_num
    FROM t_zhihu_question_history
    WHERE qid in(20235357, 21061310)
    ORDER BY qid, date desc;
'''

mysql_cn = pymysql.connect(host='120.24.109.181', port=3306, user='kolly', passwd='Kolly@123456', db='wx-robot')
df = pd.read_sql(sql, con=mysql_cn)
mysql_cn.close()
