"""
cron: 39 */2 * * *
new Env('芒果果园收水滴');

"""

import urllib.request
import urllib.parse
import json
import time
import os





openid = os.environ['openid']
ticket = os.environ['ticket']
nickName = os.environ['nickName']
did = os.environ['did']
# pbid = os.environ['pbid']



#url 访问 返回响应体
def wangye_fangwen(fangfa,cr_url,cr_data,cr_headers):
    tijiao_url = cr_url
    data = cr_data
    data = urllib.parse.urlencode(data).encode('utf-8')
    headers = cr_headers
    if fangfa == 'post' :
        # 执行
        request = urllib.request.Request(url=tijiao_url, headers=headers, data=data)
        response = urllib.request.urlopen(request)
        content = response.read().decode('utf-8')

    elif fangfa == 'get' :
        data = urllib.parse.urlencode(data)
        url = cr_url + data
        request = urllib.request.Request(url=url, headers=headers)
        response = urllib.request.urlopen(request)
        content = response.read().decode('utf‐8')
    else:
        content = "先输入请求方式"
    return content






if __name__ == '__main__':



    #登入
    cr_url = 'https://api-farm.game.mgtv.com/api/login'
    cr_data = {
        'openid' : openid,
        'ticket' : ticket,
        'nickName' : nickName,
        'did' : did,
        'pbid' : 'android'
    }
    cr_headers = {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ImgoTV-iphone/7.1.2.2206302110'
    }
    fanhuizhi = wangye_fangwen('post',cr_url,cr_data,cr_headers)

    fanhuizhi_josn = json.loads(fanhuizhi )
    if fanhuizhi_josn['code'] == 200 :

        token = fanhuizhi_josn.get('data').get('token','未获取到')

        if token == '未获取到' :
            print('!!!!!!未获取到token!!!!!')
        else:
            print('******获取到token******')
    else:
        print('******URL登陆失败******')
        token = '访问失败'
        #获取信息
    sg_sfcs = fanhuizhi_josn['data']['userdata']['hasSeed'] #是否成熟
    sg_level = fanhuizhi_josn['data']['userdata']['level'] #等级

    #设置表头
    z_headers = {
        'Usere; -Agent': 'Mozilla/5.0 (iPhonCPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ImgoTV-iphone/7.1.2.2206302110',
        'autohrization':token
    }

    time.sleep(5)



    #领取水桶
    cr_url = 'https://api-farm.game.mgtv.com/api/collectBucket'

    cr_data = {}
    shoujishuit = wangye_fangwen('post', cr_url, cr_data, z_headers)

    shoujishuit_josn = json.loads(shoujishuit)
    stjg = shoujishuit_josn.get('data').get('errmsg','成功')

    if stjg == "成功" :
        sdz= shoujishuit_josn.get('data').get('gainaward').get('value')
        print('******领取到：' + str (sdz) + '滴*****')

    elif stjg == "too least drips to collect" :
        print('******滴水太少而无法收集*****')
    elif stjg == "重复请求" :
        print('******重复请求！*****')
    elif stjg == "time is no up" :
        print('******时间还没有到！*****')
    else:
        print('↓↓↓↓↓水桶其他情况↓↓↓↓↓')
        print(stjg)

