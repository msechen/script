import datetime
import json
import os
import pprint
import random
import time
import re
import requests

headers = {
    'content-length': '368',
    'accept': 'application/json, text/plain, */*',
    'accesstoken': 'VNWK3BPFZVAFVFXVTPQP53MQUSXYFLHIQZHBOFZSXH64LHOBNRYQ1136713',
    'anti-token': '0aqWtxzvuchyy9vdzItPEOFZ0dIKFK-OnCU_8xG2s-UyZ4gwcovqODDxtlFBPo6uuDcYwfzzH0cIFh8gwPs5MgVBgVpu4hLePljPRWZWRihOiPeR7xWlzA4klhEO1Yq6v8fz668EtQbblGu1gfu3btYBM8X7k_xVwzE1kzfFiWXVFvyr1dYn-Hx-swkE1XiS4xfEHCXUHmgaBYFTfJpG51IcGmHBFG79UEXOomoh4XPUAhiJqAoohrRCPdNYB9O9izdDt1wzmwE5IsmIME1MMMekS4jBirKiU7hDXz1-SRDXoi9FadXhV_2qL6OG9i2-Nv31YBwb4sfDsFpKfBWwklePoWzHIdvyF5_f6aCVOhX9i0lOKpuFiMf4--E83tIVlmKRl_jSKQsHVFeFTMDPb9tqmWvnjMHSe37ivkslVytpZHpK6_kf0qJWrG6A98bm18WisuqVVZ2PWH9omNHQnsXSlnPFJoeO4gHy6V0-N3Yr1Xc-H9-q77YBFDIZ2w0cM4td95zcMbuVPlqcnt4xSMIKHIVzLyaOqhMZrns25Em82c865867k1bRSwx8SUthrQFO4NhqqggFsszmMfWkhsOcGX1_N8C7J04gn6sAySgmXGxb3oPggJK83QUlpHte6daLzoTPgW8raCdOHoOA63JoUugJdblHSRN7MXPNee23FQ29YkFaSDsrN8uV_0W7TV0YLkUxxiYZVnZkOXZAMErAJPnNGg6EJYFYEAPXsmDg',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4254 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001756) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wx32540bd863b27570',
    'content-type': 'application/json;charset=UTF-8',
    'origin': 'https://mobile.yangkeduo.com',
    'x-requested-with': 'com.tencent.mm',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://mobile.yangkeduo.com/cartoon_sub_potato3.html?fun_id=xcx_home_page&refer_idx=4&cartoon_from_my_uid=4559229104999&xcx_trace_id=10984016595561158&xcx_version=v8.1.4.3&xcx_scene_id=1089&xcx_from_page=boottransfer&xcx_open_type=0',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'cookie': 'api_uid=Ck2xeGK6oZFNOQBsRGZxAg==; PDDAccessToken=VNWK3BPFZVAFVFXVTPQP53MQUSXYFLHIQZHBOFZSXH64LHOBNRYQ1136713; pdd_user_id=4559229104999; pdd_user_uin=BBGFR6JX3UNC65QCXP2E7QWIE4_GEXDA; _nano_fp=XpEyn5Xbl0PxnqEqnT_fIpmlN5ZfKqNlJUluEvwx; garden_cache=%7B%22common_config%22%3A%221656301622483%22%7D; pdd_vds=gaLLNIPaoItaPnIntELtONbLGttNQtOGNEiQLOQonaPttbtLoEyEOLoEyQna'

}



# 收水车水滴
def waterwheel_droplets(tubetoken, userid):
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/common/water/gain'
    body = {"type": 15, "mission_type": "", "params": {"15": 30000}, "tubetoken": tubetoken, "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    if response["status"] == 1:
        gain_amount = response['gain_amount']
        print(f'水车水滴收取成功,一共收取{gain_amount / 1000}水滴')
    else:
        print('无水车或者水车水滴不足')





if __name__ == '__main__':
    ck = os.environ['pddck']
    # ck = 
    ck = ck.split('@')
    start_time = datetime.datetime.now().strftime('%H')
    for i in ck:
        ck = i.split('&')
        cookie = f'Ck2xeGK6oZFNOQBsRGZxAg==; PDDAccessToken={ck[1]}; pdd_user_id={ck[0]}; pdd_user_uin=BBGFR6JX3UNC65QCXP2E7QWIE4_GEXDA; _nano_fp=XpEyn5Xbl0PxnqEqnT_fIpmlN5ZfKqNlJUluEvwx; garden_cache=%7B%22common_config%22%3A%221656346837473%22%7D; pdd_vds=gaLLNIPaoItaPnIntELtONbLGttNQtOGNEiQLOQonaPttbtLoEyEOLoEyQna'
        header1 = {'accesstoken': ck[1],
                   'cookie': cookie}
        headers.update(header1)
        tubetoken = ck[1]

        print('收水车水滴')
        waterwheel_droplets(tubetoken, ck[0])



