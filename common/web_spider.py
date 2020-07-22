# 导入模块
import json
import logging

import requests
from bs4 import BeautifulSoup

logger = logging.getLogger('wx')

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/67.0.3396.87 Safari/537.36"
}


# 查询深圳今天的天气
def get_weather_today(city):
    if city == '':
        return ''
    response = requests.get('https://free-api.heweather.net/s6/weather/forecast?location='
                        + city + '&key=1054f5a588184acfb68f7b635f7d74dc', headers=headers)
    if response.text == '':
        logger.info("request https://free-api.heweather.net response empty")
        return "request https://free-api.heweather.net response empty"

    json_data = json.loads(response.text)
    data = json_data.get("HeWeather6")[0]
    status = data.get("status")
    if status != 'ok':
        logger.info("request error, status:{}".format(status))
        return "request https://api.doctorxiong.club/v1/stock/board error,status:" + status
    else:
        result = ''
        daily_forecast = data.get("daily_forecast")[:1]
        for i in daily_forecast:
            date = i.get("date")
            tmp_min = i.get("tmp_min")
            tmp_max = i.get("tmp_max")
            uv_index = i.get("uv_index")
            cond_txt_d = i.get("cond_txt_d")
            cond_txt_n = i.get("cond_txt_n")
            # logger.info("{} 当前：{} 涨跌：{}%".format(str(name), str(int(current)), str(change)))
            result = result + '今天是:{} 白天:{} 晚上:{} 温度:{}-{}℃ 紫外线等级:{}'.format(
                date, cond_txt_d, cond_txt_n, tmp_min, tmp_max, uv_index) + '\n'
        return result


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
            logger.info("{} 当前：{} 涨跌：{}%".format(str(name), str(current), str(change)))
            result = result + "{} \n当前：{} 涨跌：{}%".format(str(name), str(current), str(change)) + '\n'
        return result


# 查询今日基金涨跌
def get_jj_today(code):
    if code == '':
        return ''
    response = requests.get('https://api.doctorxiong.club/v1/fund?code=' + code, headers=headers)
    if response.text == '':
        logger.info("request https://api.doctorxiong.club/v1/fund response empty")
        return "request https://api.doctorxiong.club/v1/fund response empty"

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


# 查询今日股票涨跌
def get_stock_today(code):
    if code == '':
        return ''
    response = requests.get('https://api.doctorxiong.club/v1/stock?code=' + code, headers=headers)
    if response.text == '':
        logger.info("request https://api.doctorxiong.club/v1/stock response empty")
        return "request https://api.doctorxiong.club/v1/stock response empty"

    json_data = json.loads(response.text)
    code = json_data.get("code")
    msg = json_data.get("message")
    if code != 200:
        logger.info("request error, msg:{}".format(msg))
        return "request https://api.doctorxiong.club/v1/stock error, msg:" + msg
    else:
        result = ''
        data = json_data.get("data")
        for i in data:
            name = i.get("name")
            code = i.get("code")
            current = i.get("price")
            change = i.get("changePercent")
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
    print(get_jj_today('501301,161721,007028,110003,004070,090010,519671'))
    print(get_jj_today('004746,007465,005224'))
    # print(get_stock_today('000651,601318'))
