#!/user/bin/env python
#coding=utf-8
'''
@project : spider
@introduction: xxxxx
@author  : koc
#@file   : zhihu_search.py
#@ide    : PyCharm
#@time   : 2020-08-17 19:00:59
'''
import requests
import string
import pandas as pd

def get_url(keyword):
    header = {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'
    }
    url = 'https://www.zhihu.com/api/v4/search/suggest'
    pandas_data = []
    for i in string.ascii_lowercase:
        params = {'q': keyword + i}
        res = requests.get(url, params=params, headers=header)
        data_json = res.json()
        suggest = data_json['suggest']
        if suggest:
            for j in suggest:
                suggess_keyword = j['query']
                new_data = {}
                new_data['相关搜索词'] = suggess_keyword
                new_data['关键词'] = keyword + i
                pandas_data.append(new_data)
                print(new_data)

    df = pd.DataFrame(pandas_data)
    df.to_csv('{}_zhihu_keyword.csv'.format(keyword))

if __name__ == '__main__':
    get_url('电风扇')