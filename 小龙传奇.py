import requests
import os
'''
注册地址
https://s1.328888.xyz/2022/07/29/Dd5kC.jpg
'''
money = '1'       # 提现金额
xlcq = os.environ['xlcqacount'].split('----')

def main():
    print(f"--------共找到{len(xlcq)}个账号--------")
    for i in xlcq:
        print(f"------------正在执行第{xlcq.index(i) + 1}个账号------------")
        phone = i[0]
        pwd = i[1]
        dl(phone, pwd)

def dl(phone, pwd):
    headers={'Host':'xl.qunx.cc:96','Connection':'keep-alive','Content-Length':'33','User-Agent':'Mozilla/5.0 (Linux; Android 12; 2201122C Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.74 Mobile Safari/537.36 Html5Plus/1.0','Content-Type':'application/x-www-form-urlencoded','Origin':'http://xl.qunx.cc:96','X-Requested-With':'nl.yiyou.dragon','Referer':'http://xl.qunx.cc:96/h5/page/login.html','Accept-Encoding':'gzip, deflate','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','Cookie':'PHPSESSID=g19084jhus9lte9fl41sfa1lrm; wx=; qq=; qqq=; token=; mobile=; userid=; nickname=; is_pay=; level=; diamond=; brick=; is_check=; invite_code=; direct_pay=; alipay_name=; alipay_account=; type=; direct=; p_mobile=; p_wx=; p_qq=; p_qqq=; p_nickname=; money=',}
    body={'account':phone,'pwd':pwd,}
    dl = requests.post('http://xl.qunx.cc:96/home/index/login?v=0729695402', headers=headers, data=body).json()
    if 'code' in dl:
        if dl['msg'] == '账号或密码错误':
            print(dl['msg'])
            return
    if 'token' in dl:
        token = dl['token']
        idd = dl['id']
        print(dl['msg'] + 'id:%s' % idd)
        get_yh(token, idd, phone)

def get_yh(token, idd, phone):
    headers={'Host':'xl.qunx.cc:96','Connection':'keep-alive','dragon-id':str(idd),'dragon-token':str(token),'User-Agent':'Mozilla/5.0 (Linux; Android 12; 2201122C Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.74 Mobile Safari/537.36 Html5Plus/1.0','X-Requested-With':'nl.yiyou.dragon','Referer':'http://xl.qunx.cc:96/h5/page/home.html','Accept-Encoding':'gzip, deflate','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','Cookie':f'PHPSESSID=g19084jhus9lte9fl41sfa1lrm;token={token}; mobile=xl{phone}; userid={idd}'}
    qiandao = requests.post('http://xl.qunx.cc:96/home/user/everyDaySignIn?v=0729134915', headers=headers).json()
    if 'msg' in qiandao:
        print(qiandao['msg'])
    tx = requests.post(f'http://xl.qunx.cc:96/home/user/cash?v=0729151207&money={money}', headers=headers).json()
    if 'msg' in tx:
        print(tx['msg'])

if __name__ == '__main__':
    main()
