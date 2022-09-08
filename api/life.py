from requests import request
from bs4 import BeautifulSoup
import re
from utils.vars import province_pinyin_dict


def get_province_oil(province):
    header = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.79 Safari/537.36'
    }
    if province in province_pinyin_dict:
        response = request('GET', 'http://www.qiyoujiage.com/' + province_pinyin_dict[province] + '.shtml', headers=header)
        response.encoding = 'utf-8'
        soup = BeautifulSoup(response.text, "lxml")
        dls = soup.select("#youjia > dl")
        info = "汽油 油价\n"
        for dl in dls:
            k = re.search("\d+", dl.select('dt')[0].text).group()
            j = dl.select('dd')[0].text
            if k == "0":
                info += k + '       ' + j + '\n'
            else:
                info += k + '    ' + j + '\n'
        print(info)
        return info
    else:
        return "请输入正确的省份名称(城市名称无效)"
