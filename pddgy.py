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


# 领登录奖励
def log_reward(tubetoken, userid):
    url = f"https://mobile.yangkeduo.com/proxy/api/api/manor/water/cost?pdduid={userid}"
    body = {"screen_token": "", "atw": "true", "location_auth": "false", "mission_type": 0,
            "can_trigger_random_mission": "true", "fun_id": "xcx_home_page", "product_scene": 0,
            "tubetoken": {"screen_token": "", "atw": "true", "location_auth": "false", "mission_type": 0,
                          "can_trigger_random_mission": "true", "fun_id": "xcx_home_page", "product_scene": 0,
                          "tubetoken": tubetoken, "fun_pl": 7},
            "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    pprint.pprint(response)
    if "status" == 1:
        for i in response["reward_list"]:
            if i["reward_type"] == 1:
                print(f'领取{i["reward_amount"]}水滴')

            elif i["reward_type"] == 3:
                print(f'领取{i["reward_amount"]}化肥')
    else:
        print('登录宝箱已领完')


# 领水滴
def collar_drop(tubetoken, userid):
    try:
        url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete/gain?ts={int(time.time() * 1000)}&pdduid={userid}'

        body = {"mission_type": 36155, "gain_time": 1, "no_reward": "false",
                "tubetoken": tubetoken,
                "fun_pl": 7}
        body = json.dumps(body).encode(encoding='utf-8')
        # headers = {'Content-Type': 'application/json'}
        response = requests.post(url=url, data=body, headers=headers).json()
        pprint.pprint(response)
        if response["result"] == "null":
            print(f'领取{response["gain_amount"]}水滴')

        else:
            print('水滴已领完还没到领取时间')
    except:
        pass


##领三餐水滴
def receive_three_meal(tubetoken, userid):
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete?ts={int(time.time() * 1000)}&pdduid={userid}'

    body = {"mission_type": 37265,
            "tubetoken": tubetoken,
            "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    if response["result"]:
        print(f'领取{response["reward_amount"]}水滴')

    else:
        print('三餐水滴已领完或者还没到领取时间')


##集水滴
def water_droplets(tubetoken, userid):
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/common/apply/activity?pdduid={userid}'

    body = {"type": 18,
            "tubetoken": tubetoken,
            "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    # pprint.pprint(response)
    if response["success"] != "true":
        print(f'目前集水滴打卡第{response["continuous_check_in_to_collect_water_vo"]["finished_count"]}天')


##开宝箱5次
def box(tubetoken, userid):
    for i in range(1, 6):
        url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/withered/open/box?pdduid={userid}'
        body = {"box_order": i,
                "tubetoken": tubetoken,
                "fun_pl": 7}
        # print(body)
        body = json.dumps(body).encode(encoding='utf-8')
        response = requests.post(url=url, data=body, headers=headers).json()
        # pprint.pprint(response)
        if i != 5:
            if response["status"] == 1:
                if response["reward_list"][0]["reward_type"] == 15:
                    print(f'获得{response["reward_list"][0]["reward_amount"]}把水壶')
                elif response["reward_list"][0]["reward_type"] == 1:
                    print(f'获得{response["reward_list"][0]["reward_amount"]}水滴')
                elif response["reward_list"][0]["reward_type"] == 32:
                    print(f'获得{response["reward_list"][0]["reward_amount"]}优惠券')
            else:
                print('可领宝箱不足')
        else:
            if response["status"] == 1:
                if response["reward_list"][0]["reward_type"] == 15:
                    print(f'明日可获得{response["reward_list"][0]["reward_amount"]}把水壶')
                elif response["reward_list"][0]["reward_type"] == 1:
                    print(f'明日可获得{response["reward_list"][0]["reward_amount"]}水滴')
                elif response["reward_list"][0]["reward_type"] == 32:
                    print(f'明日可获得{response["reward_list"][0]["reward_amount"]}优惠券')


##搜索领水滴
def search(tubetoken, userid):
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete?ts={int(time.time() * 1000)}&pdduid={userid}'
    body = {"page_sn": "10015", "mission_type": 36288,
            "screen_token": tubetoken,
            "use_anti_token": 1, "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()

    if response["result"] == "true":
        print(f'搜索获得{response["reward_amount"]}水滴')

    else:
        print('搜索领水滴任务完成')


##养分
def tree_nutrients(tubetoken, userid):
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor-query/health/info?pdduid={userid}'
    body = {
        "tubetoken": tubetoken,
        "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    # pprint.pprint(response)
    if response["restricted_collage"]:
        print(f'目前果树营养为{response["health_degree"]}')

    else:
        print('可能是cookie掉了')


##目前化肥数量
def fertilize(tubetoken, userid):
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/use/backpack/goods?pdduid={userid}'

    body = {"type": 2, "source": 53, "exchange_amount": 1,
            "tubetoken": tubetoken,
            "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    if response["error_code"] != 20002:
        try:
            print(f'目前剩可施肥数量为{response["user_backpack_vo"]["amount"]}袋化肥')
            if int(response["ser_backpack_vo"]["amount"]) >= 1:
                fertilize(tubetoken)
                time.sleep(random.randint(1, 3))
        except:
            pass
    else:
        print('化肥不足')


##打卡领化肥
def open_collar_fertilizer(tubetoken, userid):
    """
    https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete/gain?ts=1657108779254&pdduid=5343650012
    https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete/gain?ts=1656338096260&pdduid=4559229104999
    {"mission_type":36069,"gain_time":1,"no_reward":false,"tubetoken":"Ff5sBc8KFQhkLPzy5aSiZ4Gd7tCm8x7AJe33NU6qGZnTLAgeSJeXJoQjAnzjyettLahz3Ao9mmAm%0ATu1GWZo1JljTdYHJAIvltlfCEkhy6NxGBghMM1NoA79NKjzjhMu%2FJTLnhpwlHUYMsVYBwuJO0xV1%0Ayu%2FRCmpokx2U5hh04dGtqGXUuXjpEuBw6hQPeUrKPRRuAJAa4wFy1nfkdVVbKhjCtUk89oTjhh8X%0A5tL9RMX1%2FNvMcCJP6xi46Y9D6%2FZA","fun_pl":7}
    """
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete?ts={int(time.time() * 1000)}&pdduid={userid}'
    body = {"mission_type": 36069,
            "tubetoken": tubetoken,
            "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    try:
        if response["result"]:
            print(f'打开成功')

        else:
            print('打卡时间未到')
    except:
        pass


# 第二次打卡
def second_open_collar_fertilizer(tubetoken, userid):
    """
    https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete/gain?ts=1657108779254&pdduid=5343650012
    https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete/gain?ts=1656338096260&pdduid=4559229104999
    {"mission_type":36069,"gain_time":1,"no_reward":false,"tubetoken":"Ff5sBc8KFQhkLPzy5aSiZ4Gd7tCm8x7AJe33NU6qGZnTLAgeSJeXJoQjAnzjyettLahz3Ao9mmAm%0ATu1GWZo1JljTdYHJAIvltlfCEkhy6NxGBghMM1NoA79NKjzjhMu%2FJTLnhpwlHUYMsVYBwuJO0xV1%0Ayu%2FRCmpokx2U5hh04dGtqGXUuXjpEuBw6hQPeUrKPRRuAJAa4wFy1nfkdVVbKhjCtUk89oTjhh8X%0A5tL9RMX1%2FNvMcCJP6xi46Y9D6%2FZA","fun_pl":7}
    """
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete/gain?ts={int(time.time() * 1000)}&pdduid={userid}'
    print(url)
    body = {"mission_type": 36069,
            "tubetoken": tubetoken,
            "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    pprint.pprint(response)
    if response["result"]:
        print(f'打开成功')

    else:
        print('打卡时间未到')


##领水瓶水滴
def bottle(tubetoken, userid):
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/gain/accumulate/water/reward?pdduid={userid}'
    body = {"part_id_list": [14],
            "tubetoken": tubetoken,
            "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    # pprint.pprint(response)
    if 'is_from_new_logic' in response:
        print(f'领{response["accumulate_water_vo"]["reward_amount"]}滴水瓶水滴成功')

    else:
        print('可能是COOKies掉了或者领过水瓶水了')


# 获取偷取信息
def steal_water(tubetoken, userid):
    status = []
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor-query/friend/list/page?pdduid={userid}'
    body = {"page_num": 1, "tubetoken": tubetoken, "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    # pprint.pprint(response)
    if len(response["friend_list"]) > 0:
        for i in response['friend_list']:
            try:
                friend_name = i['nickname']
                uid = i['uid']
                bottle_water_status = i['steal_water_status']['status']
                # print(friend_name, uid, bottle_water_status)
                status.append([friend_name, uid, bottle_water_status])
            except:
                pass
    else:
        print('无好友列表退出偷取好友水滴')
    for i in status:
        if i[2] == 2:
            name = i[0]
            uid = i[1]
            steal(tubetoken, uid, name, userid)


# 偷取
def steal(tubetoken, uid, name, userid):
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/steal/water?pdduid={userid}'
    body = {"friend_uid": uid, "steal_type": 1, "tubetoken": tubetoken, "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    pprint.pprint(response)
    if response['error_code'] != 10018:
        if "暂不可偷取，请稍后再试" not in response:
            print(f'偷取好友{name}{response["steal_amount"]}滴水滴')
        else:
            print(response['"error_msg"'])
    else:
        print(response['error_msg'])

    url2 = 'https://mobile.yangkeduo.com/proxy/api/api/manor/steal/water?pdduid=5343650012'
    body = {"friend_uid": uid, "tubetoken": tubetoken, "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url=url2, data=body, headers=headers).json()
    pprint.pprint(response)
    if response['error_code'] != 10018:
        if "暂不可偷取，请稍后再试" not in response:
            print(f'偷取{response["steal_amount"]}')
        else:
            print(response['距离上次偷好友水滴间隔太短'])
    else:
        print(response['error_msg'])


# 收水车水滴
def waterwheel_droplets(tubetoken, userid):
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/common/water/gain?pdduid={userid}'
    body = {"type": 15, "mission_type": "", "params": {"15": 30000}, "tubetoken": tubetoken, "fun_pl": 7}
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    if response["status"] == 1:
        gain_amount =response['gain_amount']
        print(f'水车水滴收取成功,一共收取{gain_amount/1000}水滴')
    else:
        print('无水车或者水车水滴不足')


##浇水
def watering(tubetoken, userid):
    url = f'https://mobile.yangkeduo.com/proxy/api/api/manor/water/cost?pdduid={userid}'

    body = {"screen_token": "", "atw": "false", "location_auth": "false", "mission_type": 0,
            "can_trigger_random_mission": "true", "fun_id": "xcx_home_page", "product_scene": 0, "tubetoken": tubetoken,
            "fun_pl": 7}
    # print(body)
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    if 'error_code' not in response:
        print(f'浇10滴水,水瓶目前还剩{response["now_water_amount"]}水滴')
        if int(response["now_water_amount"]) >= 10:
            watering(tubetoken, userid)
            time.sleep(random.randint(1, 3))
        else:
            print('浇水完成')
    else:
        print(response['error_msg'])


def percent(AccessToken, userid):
    url = f"https://mobile.yangkeduo.com/cartoon_sub_potato3.html?fun_id=xcx_home_page&refer_idx=4&cartoon_from_my_uid={userid}&xcx_trace_id=10984016595561158&xcx_version=v8.1.4.3&xcx_scene_id=1089&xcx_from_page=boottransfer&xcx_open_type=0"
    headers = {
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4254 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001756) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wx32540bd863b27570',
        'cookie': f'CksAZGK7sFYGhgBrPS/3Ag==; PDDAccessToken={AccessToken}; pdd_user_id=4559229104999; pdd_user_uin=BBGFR6JX3UNC65QCXP2E7QWIE4_GEXDA; _nano_fp=XpEyn5Xbl0PxnqEqnT_fIpmlN5ZfKqNlJUluEvwx; garden_cache=%7B%22common_config%22%3A%221656301622483%22%7D; pdd_vds=gaLLNIPaoItaPnIntELtONbLGttNQtOGNEiQLOQonaPttbtLoEyEOLoEyQna'

    }
    response = requests.get(url=url, headers=headers).text
    fruit = re.findall('class="cartoon-taro-text">(.*?)</span>', response)[0].replace('<!-- -->', '')
    print(fruit)
    return f"在浇水{fruit}包邮到家"


def push_plus_bot(content):
    b = content
    headers = {
        "Host": "www.pushplus.plus",
        "Origin": "http://www.pushplus.plus",
        "Referer": "http://www.pushplus.plus/push1.html",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.44",
        "X-Requested-With": "XMLHttpRequest",

    }
    url = 'http://www.pushplus.plus/api/send'
    data = {
        "token": 'f41e605cf752414d9cc832b6c144c302',
        "title": '拼多多果园',
        "content": b,
        "channel": "wechat",
        "template": "html",
        'webhook': ""
    }
    body = json.dumps(data).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    print(response)
    if response['code'] == 200:
        print('推送成功！')
    else:
        print('推送失败！')


if __name__ == '__main__':
    ck = os.environ['pddck']
    # ck = ''
    ck = ck.split('@')
    start_time = datetime.datetime.now().strftime('%H')
    for i in ck:
        ck = i.split('&')
        cookie = f'Ck2xeGK6oZFNOQBsRGZxAg==; PDDAccessToken={ck[1]}; pdd_user_id={ck[0]}; pdd_user_uin=BBGFR6JX3UNC65QCXP2E7QWIE4_GEXDA; _nano_fp=XpEyn5Xbl0PxnqEqnT_fIpmlN5ZfKqNlJUluEvwx; garden_cache=%7B%22common_config%22%3A%221656346837473%22%7D; pdd_vds=gaLLNIPaoItaPnIntELtONbLGttNQtOGNEiQLOQonaPttbtLoEyEOLoEyQna'
        header1 = {'accesstoken': ck[1],
                   'cookie': cookie}
        headers.update(header1)
        tubetoken = ck[1]
        # percent(ck[1])
        if start_time == '07':
            print('开始领早餐水滴')
            receive_three_meal(tubetoken, ck[0])
            time.sleep(random.randint(3, 5))
            print('开始领日常水滴任务')
            collar_drop(tubetoken, ck[0])
            time.sleep(random.randint(3, 5))
            print('开始领搜索领水滴任务')
            search(tubetoken, ck[0])
            time.sleep(random.randint(3, 5))
            print('开始集水滴任务')
            water_droplets(tubetoken, ck[0])
            time.sleep(random.randint(3, 5))
            print('开始领水平水滴任务')
            bottle(tubetoken, ck[0])
            time.sleep(random.randint(3, 5))
            print('收水车水滴')
            waterwheel_droplets(tubetoken, ck[0])
            time.sleep(random.randint(3, 5))
        elif start_time == '12':
            print('开始领午餐水滴')
            receive_three_meal(tubetoken, ck[0])
            time.sleep(7)
            time.sleep(random.randint(3, 5))
            print('收水车水滴')
            waterwheel_droplets(tubetoken, ck[0])
            time.sleep(random.randint(3, 5))
            # print('开始偷好友水滴')
            # steal_water(tubetoken,ck[0])
        elif start_time == '18':
            print('开始领晚餐水滴')
            receive_three_meal(tubetoken, ck[0])
            print('开始浇水')
            watering(tubetoken, ck[0])
            # print('开始领宝箱任务')
            box(tubetoken, ck[0])
            print('开始查询果树营养')
            tree_nutrients(tubetoken, ck[0])
            time.sleep(random.randint(3, 5))
            print('收水车水滴')
            waterwheel_droplets(tubetoken, ck[0])
            time.sleep(random.randint(3, 5))
            print('判断是否施肥')
            # print('开始偷好友水滴')
            # steal_water(tubetoken,ck[0])
            print('开始浇水')
            watering(tubetoken, ck[0])
            message = percent(ck[1], ck[0])
            push_plus_bot(message)

