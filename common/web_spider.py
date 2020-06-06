# 导入模块
import json
import logging

import requests
from bs4 import BeautifulSoup

logger = logging.getLogger('wx')

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
}


# 查询深圳今天的天气
def get_weather_today():
    html = requests.get('http://tianqi.eastday.com/shenzhen/59493.html', headers=headers).content
    soup = BeautifulSoup(html, 'lxml', from_encoding='utf-8')
    today = soup.find('div', id='weatherBox')

    one_date = soup.find(id="one_date").get_text()
    one_week = soup.find(id="one_week").get_text()
    one_nongli = soup.find(id="one_nongli").get_text()
    one_tianqi = today.find(id="one_tianqi").get_text()
    one_daynight = today.find(id="one_daynight").get_text()
    one_went = today.find(id="one_went").get_text()
    one_ziwaixian = today.find(id="one_ziwaixian").get_text()

    logger.info("{} {} {} {} {} {}".format(one_date, one_week, one_tianqi, one_daynight, one_went, one_ziwaixian))
    return '今天是' + one_date + '，' + one_week + '\n今天的天气：' + one_tianqi + '(' + \
           one_daynight + '℃) ' + one_went + ' 紫外线:' + one_ziwaixian


# 查询今日大盘指数涨跌
def get_zs_today():
    response = requests.get('https://api.doctorxiong.club/v1/stock/board', headers=headers)
    if response.text == '':
        logger.info("request https://api.doctorxiong.club/v1/stock/board response empty")
        return "request https://api.doctorxiong.club/v1/stock/board response empty"

    json_data = json.loads(response.text)
    code = json_data.get("code")
    msg = json_data.get("message")
    if code != 200:
        logger.info("request error, msg:{}".format(msg))
        return "request https://api.doctorxiong.club/v1/stock/board error,msg:" + msg
    else:
        result = ''
        data = json_data.get("data")[:1]
        for i in data:
            name = i.get("name")
            current = i.get("price")
            change = i.get("changePercent")
            logger.info("{} 当前：{} 涨跌：{}%".format(str(name), str(int(current)), str(change)))
            result = result + "{} \n当前：{} 涨跌：{}%".format(str(name), str(int(current)), str(change)) + '\n'
        return result


# 查询今日基金涨跌
def get_jj_today(code):
    if code == '':
        return ''
    response = requests.get('https://api.doctorxiong.club/v1/fund?code=' + code, headers=headers)
    if response.text == '':
        logger.info("request https://api.doctorxiong.club/v1/fund/detail response empty")
        return "request https://api.doctorxiong.club/v1/fund/detail response empty"

    json_data = json.loads(response.text)
    code = json_data.get("code")
    msg = json_data.get("message")
    if code != 200:
        logger.info("request error, msg:{}".format(msg))
        return "request https://api.doctorxiong.club/v1/fund/detail error, msg:" + msg
    else:
        result = ''
        data = json_data.get("data")
        for i in data:
            name = i.get("name")
            code = i.get("code")
            current = i.get("expectWorth")
            change = i.get("expectGrowth")
            logger.info("{}（{}）当前：{} 涨跌：{}%".format(str(name), str(code), str(current), str(change)))
            result = result + "{}（{}）\n涨跌：{}%".format(str(name), str(code), str(change)) + '\n'
        return result


# 阮一峰周刊
def get_ryf_weekly():
    html = requests.get('http://www.ruanyifeng.com/blog/weekly/', headers=headers).content
    soup = BeautifulSoup(html, 'lxml', from_encoding='utf-8')
    item = soup.find('div', class_='module-content').find('li', class_='module-list-item').find('a')
    text = item.get_text()
    href = item.get('href')
    # print(item)
    return '阮一峰'+text+' '+href


if __name__ == "__main__":
    # print(get_weather_today('shenzhen'))
    print(get_zs_today())
    # print(get_ryf_weekly())
    # print(get_jj_today(''))
    # print(get_jj_today('501301,161721,007028,110003,090010'))
