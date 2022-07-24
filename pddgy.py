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


def push_plus_bot(content,push_token):
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
        "token": push_token,
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
    push_token = os.environ['push_token']
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
            # print('开始集水滴任务')
            # water_droplets(tubetoken, ck[0])
            # time.sleep(random.randint(3, 5))
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
            push_plus_bot(message, push_token)

"""
https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete?ts=1658546147471&pdduid=5343650012

{"page_sn":"11051","mission_type":37119,"extra_query_mission_list":["36287","36288","37113","37119","37120","37341","37349"],"screen_token":"0aqWtqlFF8fPgvvxLhJMo52W0EMff7PYeaFJAzCyr8hKNrOHg3MAbmgEEkLscWM1Hh818WIhJIrW3GkP6wt2fafkos5JTZxgl-f04c2Yp6gi74hWF1gnwVGPVj5F4ZRlGlWxAToTC5BiJRoLFg29XZjSJymrcqk9SoJ4UQSbgNfrXQoafOPaA1jWTyVKsB2JaI9CVloT9mKXEUxgG0SxCuT9jUmVdNHKTgkTGQ4YVC51qI958RGWrl9WxcWXKT5scxRgFaAR_kWAFPUISUd98XckCPPzazVCwtom9SVa6MbR3K9i1R6ERWbkRg7CTWu9tLr0dBTNCa-NuG89leRsTNbTN6EmREesECCM8dSAVwV8HB4JBQ3jibwoBc-4HqaXzLiQNgT8x9NBl0hd7Zc4HyO5iTPkdSFJe2_Dva5Cy4ifkAuPOKRpdaDQWOyYeXUZ0MgpXyOkgR-aLbdg3R7BxPbSPo1AQHp50I2zjkvdkNMuWxgtG_-YBTPdUCZtjXIAT-KQVx6jThrx6g2QXcq3RrdkR4jCCzPz6x5aiwnIL_VvNEGeDzF7fkWvS_Xlk7UMbBDWBzEeUfQxZOTUobvMoxFa25_0wMUaMfw0vWYI2t34wNN1Q2kA0wJeFZPj7P9TT-edD-fqVq8zgE48txstbbEvp7Q67JdrFGwqekMp-Kts_mIqNJswbVs9bIW1WL9sigGdAG9_rGWQNJjgZ3p8p1t7ltzPvOYnNZhYjA-EdvxDUmYuGM8fGcezm620ApuT4xDfhOF4CbjMu5QjQ_Njja_h9-oyUp-FvNd8uKmI3IFG5zua4Tza-VxUzf_cW-uU8wqpvtlYklVO80PN8Q6ovbvRia8-UcO8E6deLaJzJQDk1j8GIT65rwxJJH1CqoT6oi30q3tnObUkBXBT4nkjqePNCHiZIkHtpnCzEjSBiaVHpdZeHAUUzeUoRHPSSRqb1CXsLeRsFbzPBURKqcTRGdoXSSiDMQbb7LOTYlOz8J7HNeOE-i18mE8NMIJrHkmBDsCE7SjDJDJPIrMuDnjegJ82CVX1afhJzTC26OB","use_anti_token":1,"fun_pl":7}

https://mobile.yangkeduo.com/proxy/api/api/manor/water/gain?pdduid=5343650012

{"mission_type":37119,"gain_time":1,"screen_token":"","tubetoken":"ZSoDzSqwr5MeVuDEjsk6XMVpz0EFKhZSWwu4eDGeEL2YF%2F6SNFEpIATEV4WN5LFGHUkVaGGdz1f%2B%0AWhyzhG5davZ1OiOU%2FWqBZdLL4nGL7mJpkd214i7uu3UxoKNb%2FbvdpY2skD8wupd0e98SOiOEdvHS%0AckKSrlGmSPW9n2oz1HJ8jvzSvmDm78uK1ly%2FNO6MecDoCQGB%2FZq9ScuJjYRXz60V7YprMuXB%2Fakj%0AFpCEGUk%3D","fun_pl":7}

'kpn=NEBULA; kpf=ANDROID_PHONE;  c=ALI_CPD%2C778; ver=10.5; appver=10.5.10.3656; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; earphoneMode=1; isp=CMCC; did_tag=2; egid=DFPEFCB91271041E11E4A493CFBB5B6FF172F8A44955761988D8892C8B16EA47; thermal=10000; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_98174c7c627e50ef; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ALI_CPD%2C778; slh=0; country_code=cn; nbh=44; hotfix_ver=; did_gt=1655643125051; keyconfig_state=2; max_memory=192; sid=43e3ef3e-cd42-4427-8c1f-14df8fb16a4d; cold_launch_time_ms=1655643124881; oc=ALI_CPD%2C778; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; is_background=0; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_e286bce2a2559671; sbh=83; darkMode=false; client_key=2ac2a76d; userId=1736121161; ud=1736121161;kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAHnDNjk8t34pAq1nrkXQvL4UIwV_gEV7HB7H8xNc-lrbXnB1litPv4A9d1Lr94Uaua8ybetVN3TO7LFcURcI1eDqw-zD2r7JEDeV1LtKGwGYIMupMGSZTYjoOnRcSxnrw5wI58T67ZAxSfPR48j18FotVXAZiNr5be7_1ZMWyDstGxH0aNSHFYVwmT91TJsLolkFeq0fwz1MIxIYTjXcNlqGhJrNN-fL8lNH4AKLNFPdkh-L7kiIKn4ohvQRbnlAS7ocsmFD5ZFS-VFi47Az_gGODQmybOsKAUwAQ; token=530e3cba4afc41df8bb3087d4e57a050-1711777846; client_key=3c2cd3f3; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKgASRcrdDymnMJeQLEfqv4NypkSNWX61PMn0BTn_YxmKCQvqUzD-jthZcIZyMs9Cl1gdTNSU8lLu7SMIoFdEb4el3AvWsbr6ZPxW7VUnIhQhWQzqSPj7DzrPtW12wCrOwk46_N6N-vEIx3djlamqpkBUxozrV6hvav7U1IoruuLtG4FKxEg3WUh8f7YU9Bqni6KX47nHQ5tORLebD4LEJA9aYaEgiKSSCFO1G6_3XV9G0GJ0X9uyIgkbjLR2T9HVXjykzoLR1FiqREcFyleWCg_xWgPFgSWfAoBTAB; net=WIFI; __NSWJ=iAUJIpv1BeZPUt24h2%2FnOHh1deRltZSIAY75XPWsqhZ2yTIHGNNt%2FWCpMCEFdmqOAAAAAg%3D%3D@did=ANDROID_3513abaac224588b;kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAGPL1Go4-VQXQKu0gT9AK0gWtDTK_yhlSyqF5rnA8lctvAp1ZzG_jsQZgq3o08y1MIjbbK_TmCYEXLwae-OY0eWYpX6FOVPWVNhclo4JmUTVm971PeTR9faXGhWb37j2MozFnF4lhgKQ4ITI92LLCJhUjXzThfa3g7O6XepufFhFeXgpjodp9SUYKqjgHaZKaYmp3fbspReBVdHTwiqF6bUGhK2EeQEuchJ_Ltqw2OKbJffXDwiIOa8VRpxYbvlDAK3M4y5IarOdFxXV7Yl6B5wX82lIgczKAUwAQ; __NSWJ=674MUK1SkExUwb0S2stbcTeENzY4aVzHE5ozlBGmXiadv8D9jjRUXDP%2FOmO43C%2BxAAAAAQ%3D%3D; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKgAYaiv5ZAyXjR7Zkq9vrCdFKh7ZoGUxXNek-HRYjq-PZLH6P5oiLF2AaWNs7ZXfpLPOsdqwWUEjQh7zleMcUSbyP2J7C_zll3ml4-BoFYBvQcIIAimWuyDpZPuIlCRe4m1_IVWmYc6DAfAUKR4mBS9AsIX2qRtub0ESqdOU0C24JV8vMyWsK6_Penq8R1rEcpRgE2zQy-nl1vjiA6nk2o1joaEsWqB5a5TJyssLyVJ6mptlZOSSIgYu8TmwgjS6-r1ys9Q_AE_usH9oF3OXL_w2uPpyz18VooBTAB@kpn=NEBULA; kpf=ANDROID_PHONE;  c=ALI_CPD%2C778; ver=10.5; appver=10.5.10.3656; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; earphoneMode=1; isp=CMCC; did_tag=2; egid=DFPEFCB91271041E11E4A493CFBB5B6FF172F8A44955761988D8892C8B16EA47; thermal=10000; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_98174c7c627e50ef; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ALI_CPD%2C778; slh=0; country_code=cn; nbh=44; hotfix_ver=; did_gt=1655643125051; keyconfig_state=2; max_memory=192; sid=43e3ef3e-cd42-4427-8c1f-14df8fb16a4d; cold_launch_time_ms=1655643124881; oc=ALI_CPD%2C778; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; is_background=0; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_e286bce2a2559671; sbh=83; darkMode=false; client_key=2ac2a76d; userId=1736121171; ud=1736121171; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAHfluDw-kN5RaOFdcDcM-nZ3AHGnfGpWHa_l9G6jLbpD1l_dgZc3EqGz-fX3feP0Hnd2IYvUeOTZDYMLYMT0qSeng3LArcBkfC-jy-JuBZ1wuKa3W3sR9R9FaneVTwOzSUmgcq8Xhyj5Wd10HKSyA-ihVLC0f5dNM2XaZzvbRM5ny2tvGhXGjmOt4fceIiYJeTu9AnkCNFVGgPsoPszE2IYGhLs1J4yL3FOXJxWhbfIVnwvpekiIBUTxgLi9Ok1UkOi9DRbJyi5ce74NdyONA4Y3jOhcpJ4KAUwAQ; token=Cg9rdWFpc2hvdS5hcGkuc3QSoAHfluDw-kN5RaOFdcDcM-nZ3AHGnfGpWHa_l9G6jLbpD1l_dgZc3EqGz-fX3feP0Hnd2IYvUeOTZDYMLYMT0qSeng3LArcBkfC-jy-JuBZ1wuKa3W3sR9R9FaneVTwOzSUmgcq8Xhyj5Wd10HKSyA-ihVLC0f5dNM2XaZzvbRM5ny2tvGhXGjmOt4fceIiYJeTu9AnkCNFVGgPsoPszE2IYGhLs1J4yL3FOXJxWhbfIVnwvpekiIBUTxgLi9Ok1UkOi9DRbJyi5ce74NdyONA4Y3jOhcpJ4KAUwAQ; __NSWJ=%2BvF8UgzRZ%2FJQB9yhGowDl7PNiLzg5%2Bo7qat9IJVIyE4i3zehg8p2c3SJszuObIQMAAAACQ%3D%3D; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAY1xW5pz2RKTdGtDD8AEdAeneOM95G9iDvjyq5w9mxXC8UEAZuu8wuNZd28IDb-YY2lzTikHWVXd0ujhD-qV1IPe_e7YibR4xYbzwgQwuO3_fOYaw6NSim84Er7RkwP8ybs9A95afqT69H7DBAgzxYG9BaUT9RIJLxmbqX7nuvxx5M0GeEVi4Etoj6dKb0TeaRoS8FTyNNFTMuEfRxro_gB3U82AIiCINdnRfUpubX7Keyvcx-sD3LGza9SLW_lMcxixV3HrpigFMAE@kpn=NEBULA; kpf=ANDROID_PHONE; userId=2890379401; c=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; ver=10.5; appver=10.5.20.3765; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; ud=2890379401; did_tag=2; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_98174c7c627e50ef; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; slh=0; country_code=cn; nbh=44; hotfix_ver=; did_gt=1656035390501; keyconfig_state=2; max_memory=192; oc=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_9e323b21758d40fe; sbh=83; darkMode=false; client_key=2ac2a76d; thermal=10000; earphoneMode=1; isp=CMCC; is_background=0; didv=1656045032000; egid=DFP0E9B55E38F65576DC57BEF2ACD880A0719817C30CA6E9CD8C288243B1B7DD; sid=a37e73b0-5544-45f1-a8f1-3bc54679c2dc; cold_launch_time_ms=1656654656459; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSkAHtRyehvLdLgV-QgHI85h9aFa-IFh-jUEvZkHi1bEnD-fEdzG3iIMPfpGo0h4teVeVdldMAZSjt8VDcOaQ31mHhNSPOY8KA5iTPAkOTcDw-0h_F67VP7BTXzqFJWuHnLQPfygbLmMYdhGAHOsaZp1HTOj4Y7Y-rjsEGkIPAN4deeeQLYGOdDSzXl55bE4_n6CIaEjtdMRV0cEiKnHpB4NyanSaUVyIgqgaS_QbLkHv4FQ2rNGFIeiQcFCkrAJ16AyPRhGnjst8oBTAB; token=Cg9rdWFpc2hvdS5hcGkuc3QSkAHtRyehvLdLgV-QgHI85h9aFa-IFh-jUEvZkHi1bEnD-fEdzG3iIMPfpGo0h4teVeVdldMAZSjt8VDcOaQ31mHhNSPOY8KA5iTPAkOTcDw-0h_F67VP7BTXzqFJWuHnLQPfygbLmMYdhGAHOsaZp1HTOj4Y7Y-rjsEGkIPAN4deeeQLYGOdDSzXl55bE4_n6CIaEjtdMRV0cEiKnHpB4NyanSaUVyIgqgaS_QbLkHv4FQ2rNGFIeiQcFCkrAJ16AyPRhGnjst8oBTAB; __NSWJ=oiw%2BTX5wEWCgLFpi269LuNED4p1i06vtLN5IEYcPMRiF4aJGG%2B2SRgn2QWHcu62bAAAAAg%3D%3D; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAWNLEgIGQDu-0TNCGYjlWibmUAPmL5KyWa0mfOV5YkLJGWDZ_TMU2VLrLqmDdKdxAhDkCICdxnnhKYZNqQd0jc05bgRIYk2enYymn-8klocOVP9fVdSNjyxa0S0H6O6pgNGyPaaAia84fAx1BK84lDC2p__767dqumwdOI80cuNRx_83OZEJo2JErVRM8x3V5RoSDT9hc9XCT0hezrbatiD1J7RRIiCwmsGVO4qkwwIIWfxjxgnb7Bv2L3yImnynHSc95MDNJCgFMAE@kpn=NEBULA; kpf=ANDROID_PHONE; userId=2354339122; c=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; ver=10.5; appver=10.5.20.3765; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; earphoneMode=1; isp=CMCC; ud=2354339122; did_tag=7; egid=DFPAF85D438A761EC8C4E7577112B770047380E659D03DCADC3F8D7744268F3C; thermal=10000; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_a8d876dcc364086c; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; slh=0; country_code=cn; nbh=132; hotfix_ver=; did_gt=1656672553369; keyconfig_state=2; max_memory=192; sid=4630ef90-c916-4b2f-aeed-9bc7b1905bd8; cold_launch_time_ms=1656672552696; oc=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; is_background=0; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; ll_client_time=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_8396f3ae78c605f0; sbh=83; darkMode=false; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAH3oOyAMcRsnbhiDOFGjpOFjJp7uJg4yNvSlxGP6E-sfigklInKkXJiv0j8rTmHLmo_aS6zFsWQdUWgI56L4ru-9w9SENsYujs1B5XsowJQ80c2LPsDTP9jlH45XhMp0PEewerdjLKhZcJWKVZV3AuUhDW99UQxrK3j_w1HBAT-LUhs7dS4MsXuXjNIWWiR6xGncC8RdVDgLCsoYPlKbThtGhJrNN-fL8lNH4AKLNFPdkh-L7kiICTktMw772fm5BxMTBkFK6Lm7SNvkrx7UmQkFmiw1rodKAUwAQ; token=Cg9rdWFpc2hvdS5hcGkuc3QSoAH3oOyAMcRsnbhiDOFGjpOFjJp7uJg4yNvSlxGP6E-sfigklInKkXJiv0j8rTmHLmo_aS6zFsWQdUWgI56L4ru-9w9SENsYujs1B5XsowJQ80c2LPsDTP9jlH45XhMp0PEewerdjLKhZcJWKVZV3AuUhDW99UQxrK3j_w1HBAT-LUhs7dS4MsXuXjNIWWiR6xGncC8RdVDgLCsoYPlKbThtGhJrNN-fL8lNH4AKLNFPdkh-L7kiICTktMw772fm5BxMTBkFK6Lm7SNvkrx7UmQkFmiw1rodKAUwAQ; __NSWJ=o5xcqBn%2Bg%2Bw8IZh230sfnZO1WjI9NnefrjLnaroOUiJUkunYTRDcVTrCWNSG31O5AAAAAQ%3D%3D; client_key=2ac2a76d; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAa3lx2jEBRJtRupvJvm0jauPNwJ5ETcHCXeLdrjZLmVsbmubqhi5zVCrGXi0Q0KVCyxEZglemUAdZmOH98P8aTq1p2HmS-xC_WN2VHD4fjDFCI6UG_QoCxwQd4ctqSr80cLjOsOREC0vK2zAS2raILYR8HqMZBwMzFY5iaMms4veai7c37bCsxpDHxzwIhZOohoSvseR5dQouxm0wf6PgQdmNSXIIiCHLoEQIwbMA6697oI46rx5d-_9Ezc7poMbMT7ncbjZGigFMA',
        'kpn=NEBULA; kpf=ANDROID_PHONE; userId=2890379401; c=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; ver=10.5; appver=10.5.20.3765; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; ud=2890379401; did_tag=2; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_98174c7c627e50ef; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; slh=0; country_code=cn; nbh=44; hotfix_ver=; did_gt=1656035390501; keyconfig_state=2; max_memory=192; oc=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_9e323b21758d40fe; sbh=83; darkMode=false; client_key=2ac2a76d; thermal=10000; earphoneMode=1; isp=CMCC; is_background=0; didv=1656045032000; egid=DFP0E9B55E38F65576DC57BEF2ACD880A0719817C30CA6E9CD8C288243B1B7DD; sid=a37e73b0-5544-45f1-a8f1-3bc54679c2dc; cold_launch_time_ms=1656654656459; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSkAHtRyehvLdLgV-QgHI85h9aFa-IFh-jUEvZkHi1bEnD-fEdzG3iIMPfpGo0h4teVeVdldMAZSjt8VDcOaQ31mHhNSPOY8KA5iTPAkOTcDw-0h_F67VP7BTXzqFJWuHnLQPfygbLmMYdhGAHOsaZp1HTOj4Y7Y-rjsEGkIPAN4deeeQLYGOdDSzXl55bE4_n6CIaEjtdMRV0cEiKnHpB4NyanSaUVyIgqgaS_QbLkHv4FQ2rNGFIeiQcFCkrAJ16AyPRhGnjst8oBTAB; token=Cg9rdWFpc2hvdS5hcGkuc3QSkAHtRyehvLdLgV-QgHI85h9aFa-IFh-jUEvZkHi1bEnD-fEdzG3iIMPfpGo0h4teVeVdldMAZSjt8VDcOaQ31mHhNSPOY8KA5iTPAkOTcDw-0h_F67VP7BTXzqFJWuHnLQPfygbLmMYdhGAHOsaZp1HTOj4Y7Y-rjsEGkIPAN4deeeQLYGOdDSzXl55bE4_n6CIaEjtdMRV0cEiKnHpB4NyanSaUVyIgqgaS_QbLkHv4FQ2rNGFIeiQcFCkrAJ16AyPRhGnjst8oBTAB; __NSWJ=oiw%2BTX5wEWCgLFpi269LuNED4p1i06vtLN5IEYcPMRiF4aJGG%2B2SRgn2QWHcu62bAAAAAg%3D%3D; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAWNLEgIGQDu-0TNCGYjlWibmUAPmL5KyWa0mfOV5YkLJGWDZ_TMU2VLrLqmDdKdxAhDkCICdxnnhKYZNqQd0jc05bgRIYk2enYymn-8klocOVP9fVdSNjyxa0S0H6O6pgNGyPaaAia84fAx1BK84lDC2p__767dqumwdOI80cuNRx_83OZEJo2JErVRM8x3V5RoSDT9hc9XCT0hezrbatiD1J7RRIiCwmsGVO4qkwwIIWfxjxgnb7Bv2L3yImnynHSc95MDNJCgFMAE',
         'kpn=NEBULA; kpf=ANDROID_PHONE;  c=ALI_CPD%2C778; ver=10.5; appver=10.5.10.3656; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; earphoneMode=1; isp=CMCC; did_tag=2; egid=DFPEFCB91271041E11E4A493CFBB5B6FF172F8A44955761988D8892C8B16EA47; thermal=10000; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_98174c7c627e50ef; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ALI_CPD%2C778; slh=0; country_code=cn; nbh=44; hotfix_ver=; did_gt=1655643125051; keyconfig_state=2; max_memory=192; sid=43e3ef3e-cd42-4427-8c1f-14df8fb16a4d; cold_launch_time_ms=1655643124881; oc=ALI_CPD%2C778; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; is_background=0; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_e286bce2a2559671; sbh=83; darkMode=false; client_key=2ac2a76d; userId=1736121171; ud=1736121171; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAHfluDw-kN5RaOFdcDcM-nZ3AHGnfGpWHa_l9G6jLbpD1l_dgZc3EqGz-fX3feP0Hnd2IYvUeOTZDYMLYMT0qSeng3LArcBkfC-jy-JuBZ1wuKa3W3sR9R9FaneVTwOzSUmgcq8Xhyj5Wd10HKSyA-ihVLC0f5dNM2XaZzvbRM5ny2tvGhXGjmOt4fceIiYJeTu9AnkCNFVGgPsoPszE2IYGhLs1J4yL3FOXJxWhbfIVnwvpekiIBUTxgLi9Ok1UkOi9DRbJyi5ce74NdyONA4Y3jOhcpJ4KAUwAQ; token=Cg9rdWFpc2hvdS5hcGkuc3QSoAHfluDw-kN5RaOFdcDcM-nZ3AHGnfGpWHa_l9G6jLbpD1l_dgZc3EqGz-fX3feP0Hnd2IYvUeOTZDYMLYMT0qSeng3LArcBkfC-jy-JuBZ1wuKa3W3sR9R9FaneVTwOzSUmgcq8Xhyj5Wd10HKSyA-ihVLC0f5dNM2XaZzvbRM5ny2tvGhXGjmOt4fceIiYJeTu9AnkCNFVGgPsoPszE2IYGhLs1J4yL3FOXJxWhbfIVnwvpekiIBUTxgLi9Ok1UkOi9DRbJyi5ce74NdyONA4Y3jOhcpJ4KAUwAQ; __NSWJ=%2BvF8UgzRZ%2FJQB9yhGowDl7PNiLzg5%2Bo7qat9IJVIyE4i3zehg8p2c3SJszuObIQMAAAACQ%3D%3D; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAY1xW5pz2RKTdGtDD8AEdAeneOM95G9iDvjyq5w9mxXC8UEAZuu8wuNZd28IDb-YY2lzTikHWVXd0ujhD-qV1IPe_e7YibR4xYbzwgQwuO3_fOYaw6NSim84Er7RkwP8ybs9A95afqT69H7DBAgzxYG9BaUT9RIJLxmbqX7nuvxx5M0GeEVi4Etoj6dKb0TeaRoS8FTyNNFTMuEfRxro_gB3U82AIiCINdnRfUpubX7Keyvcx-sD3LGza9SLW_lMcxixV3HrpigFMAE',
         'kpn=NEBULA; kpf=ANDROID_PHONE;  c=ALI_CPD%2C778; ver=10.5; appver=10.5.10.3656; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; earphoneMode=1; isp=CMCC; did_tag=2; egid=DFPEFCB91271041E11E4A493CFBB5B6FF172F8A44955761988D8892C8B16EA47; thermal=10000; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_98174c7c627e50ef; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ALI_CPD%2C778; slh=0; country_code=cn; nbh=44; hotfix_ver=; did_gt=1655643125051; keyconfig_state=2; max_memory=192; sid=43e3ef3e-cd42-4427-8c1f-14df8fb16a4d; cold_launch_time_ms=1655643124881; oc=ALI_CPD%2C778; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; is_background=0; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_e286bce2a2559671; sbh=83; darkMode=false; client_key=2ac2a76d; userId=1736121161; ud=1736121161;kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAHnDNjk8t34pAq1nrkXQvL4UIwV_gEV7HB7H8xNc-lrbXnB1litPv4A9d1Lr94Uaua8ybetVN3TO7LFcURcI1eDqw-zD2r7JEDeV1LtKGwGYIMupMGSZTYjoOnRcSxnrw5wI58T67ZAxSfPR48j18FotVXAZiNr5be7_1ZMWyDstGxH0aNSHFYVwmT91TJsLolkFeq0fwz1MIxIYTjXcNlqGhJrNN-fL8lNH4AKLNFPdkh-L7kiIKn4ohvQRbnlAS7ocsmFD5ZFS-VFi47Az_gGODQmybOsKAUwAQ; token=530e3cba4afc41df8bb3087d4e57a050-1711777846; client_key=3c2cd3f3; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKgASRcrdDymnMJeQLEfqv4NypkSNWX61PMn0BTn_YxmKCQvqUzD-jthZcIZyMs9Cl1gdTNSU8lLu7SMIoFdEb4el3AvWsbr6ZPxW7VUnIhQhWQzqSPj7DzrPtW12wCrOwk46_N6N-vEIx3djlamqpkBUxozrV6hvav7U1IoruuLtG4FKxEg3WUh8f7YU9Bqni6KX47nHQ5tORLebD4LEJA9aYaEgiKSSCFO1G6_3XV9G0GJ0X9uyIgkbjLR2T9HVXjykzoLR1FiqREcFyleWCg_xWgPFgSWfAoBTAB; net=WIFI; __NSWJ=iAUJIpv1BeZPUt24h2%2FnOHh1deRltZSIAY75XPWsqhZ2yTIHGNNt%2FWCpMCEFdmqOAAAAAg%3D%3D@did=ANDROID_3513abaac224588b;kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAGPL1Go4-VQXQKu0gT9AK0gWtDTK_yhlSyqF5rnA8lctvAp1ZzG_jsQZgq3o08y1MIjbbK_TmCYEXLwae-OY0eWYpX6FOVPWVNhclo4JmUTVm971PeTR9faXGhWb37j2MozFnF4lhgKQ4ITI92LLCJhUjXzThfa3g7O6XepufFhFeXgpjodp9SUYKqjgHaZKaYmp3fbspReBVdHTwiqF6bUGhK2EeQEuchJ_Ltqw2OKbJffXDwiIOa8VRpxYbvlDAK3M4y5IarOdFxXV7Yl6B5wX82lIgczKAUwAQ; __NSWJ=674MUK1SkExUwb0S2stbcTeENzY4aVzHE5ozlBGmXiadv8D9jjRUXDP%2FOmO43C%2BxAAAAAQ%3D%3D; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKgAYaiv5ZAyXjR7Zkq9vrCdFKh7ZoGUxXNek-HRYjq-PZLH6P5oiLF2AaWNs7ZXfpLPOsdqwWUEjQh7zleMcUSbyP2J7C_zll3ml4-BoFYBvQcIIAimWuyDpZPuIlCRe4m1_IVWmYc6DAfAUKR4mBS9AsIX2qRtub0ESqdOU0C24JV8vMyWsK6_Penq8R1rEcpRgE2zQy-nl1vjiA6nk2o1joaEsWqB5a5TJyssLyVJ6mptlZOSSIgYu8TmwgjS6-r1ys9Q_AE_usH9oF3OXL_w2uPpyz18VooBTAB'
    

"""
