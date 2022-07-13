# !/bin/env python3
# -*- coding: utf-8 -*
"""
    link: https://raw.githubusercontent.com/yml2213/Python/master/sbr/sbr.py
    new Env("苏泊尔")
    Name: 苏泊尔  小程序    种大米,换实物
    Author: yml
    Date: 2022.7.12
    cron: 19 7,12 * * *    sbr.py

    7.13    完成 签到, 偷大米, 浏览菜谱 任务
    ================== 青龙--配置文件 ==================
    变量格式: export sbr_data=" token & cookie @ token & cookie "   ,多账号用 换行 或 @ 分割

    token 抓 https://growrice.supor.com/rice/backend/public/index.php/api/login/auto-login  的包 , url 后面就是token
    cookie 抓 https://growrice.supor.com/rice/backend/public/index.php/api/users/get-user-info  的包 , header 中有cookie
"""
# ================================= 以下代码不懂不要随便乱动 ====================================
try:
    import requests
    import json
    import sys
    import os
    import re
    import time
    import random
except Exception as e:
    print(e)
requests.packages.urllib3.disable_warnings()
# --------------------------------------------------------------------------------------------
Script_Name = "苏泊尔"
# Name_Pinyin = "sbr"
Script_Change = "完成 签到, 偷大米, 浏览菜谱 任务"
Script_Version = "0.0.2"


# --------------------------------------------------------------------------------------------
def start():
    global _ck_state
    _ck_state = 1
    for inx, data in enumerate(ckArr):
        msg("=============== 开始第" + str(inx + 1) + "个账号 ===============")
        ck = data.split("&")
        sbr = Script(ck[0], ck[1])
        sbr.login()
        sbr.user_info("用户信息")
        if _ck_state:
            sbr.sign_info("签到信息")
            sbr.task_list("任务列表")
            sbr.get_index_info("获取可收取大米信息")


class Script:
    def __init__(self, token, cookie):
        self.token = token
        self.cookie = cookie

    # noinspection PyMethodMayBeStatic
    def url(self, name):
        url = f"https://growrice.supor.com/rice/backend/public/index.php/api/{name}"
        return url

    def headers(self):
        headers = {
            'Host': 'growrice.supor.com',
            'Cookie': self.cookie,
            'content-type': 'application/x-www-form-urlencoded'
        }
        return headers

    def login(self):  # 登录刷新
        url_login = f"https://growrice.supor.com/rice/backend/public/index.php/api/login/auto-login?token={self.token}"
        try:
            requests.get(url=url_login, headers=self.headers(), verify=False)
        except Exception as err:
            print(err)

    def user_info(self, name):  # 用户信息
        global _ck_state
        try:
            response = requests.get(url=self.url("users/get-user-info"), headers=self.headers(), verify=False)
            result = response.json()
            # print(result)
            if result['code'] == 1:
                msg(f"{name}: {result['msg']}, 欢迎 {result['data']['nickname']}")
                time.sleep(2)
            elif result['code'] == 0:
                msg(f"{name}: {result['msg']}")
                _ck_state = 0
                return _ck_state
            else:
                msg(f"{name}: 失败, 请稍后再试!")
                print(result)
                _ck_state = 0
                return _ck_state
        except Exception as err:
            print(err)

    def sign_info(self, name):  # 签到信息查询
        try:
            response = requests.get(url=self.url("signIn/sign-list"), headers=self.headers(), verify=False)
            result = response.json()
            # print(result)
            if not result['data']['is_sign']:
                msg(f"{name}: 未签到 ,去签到喽!")
                self.do_sign("签到")
            elif result['data']['is_sign']:
                msg(f"{name}: 已签到, 明天再来吧!")
            else:
                msg(f"{name}: 失败, 请稍后再试!")
                print(result)
        except Exception as err:
            print(err)

    def do_sign(self, name):  # 执行签到
        try:
            payload = "https://growrice.supor.com/rice/backend/public/index.php/api/signIn/sign"
            response = requests.post(url=self.url("signIn/sign"), headers=self.headers(), data=payload, verify=False)
            result = response.json()
            if result['code'] == 1:
                msg(f"{name}: {result['msg']}, 获得 {result['data']['get_rice_num']} 大米")
                time.sleep(3)
                self.browse_recipes("浏览菜谱")
            elif result['code'] == 0:
                msg(f"{name}: {result['msg']}")
            else:
                msg(f"{name}: 失败, 请稍后再试!")
                print(result)
        except Exception as err:
            print(err)

    def task_list(self, name):  # 任务列表
        try:
            response = requests.get(url=self.url("task/index"), headers=self.headers(), verify=False)
            result = response.json()
            # print(result)
            if result['code'] == 1:
                print(f"{name}: {result['msg']}")
                task_list = result['data']
                for task in task_list:
                    if task['id'] != 8:
                        _id, name, is_finish = task['id'], task['name'], task['is_finish']
                        if _id == 6 and is_finish is False:
                            self.get_rice("偷大米")
                        elif _id == 6 and is_finish is True:
                            msg("今天无法偷大米了, 明天再来吧!")
                            pass

            elif result['code'] == 0:
                msg(f"{name}: {result['msg']}")
            else:
                msg(f"{name}: 失败, 请稍后再试!")
                print(result)
        except Exception as err:
            print(err)

    def get_rice(self, name):  # 偷好友大米
        try:
            _id_list = self.get_city_list("获取好友大米id")
            for _id in _id_list:
                payload = f"&friend_id={_id}"
                response = requests.post(url=self.url("users/get-rice"), headers=self.headers(), data=payload)
                result = response.json()
                # print(result)
                if result['code'] == 1:
                    msg(f"{name}: {result['msg']},当前已有大米 {result['data']['sign_rice_num']}")
                    time.sleep(5)
                elif result['code'] == 0:
                    msg(f"{name}: {result['msg']}")
                else:
                    msg(f"{name}: 失败, 请稍后再试!")
                    print(result)

        except Exception as err:
            print(err)

    def get_city_list(self, name):  # 获取好友大米id
        try:
            response = requests.get(url=self.url("users/same-city-list"), headers=self.headers(), verify=False)
            result = response.json()
            if result['code'] == 1:
                _list = result['data']
                # print(_list)
                random_list = random.sample(range(1, 10), 3)
                _id_list = []
                for i in random_list:
                    _id = _list[i]['id']
                    _id_list.append(_id)
                return _id_list

            elif result['code'] == 0:
                msg(f"{name}: 获取列表失败!")
            else:
                msg(f"{name}: 失败, 请稍后再试!")
                print(result)
        except Exception as err:
            print(err)

    def browse_recipes(self, name):  # 浏览菜谱
        try:
            payload = "&id=8&other_id=3"
            response = requests.post(url=self.url("task/link-task"), headers=self.headers(), data=payload)
            result = response.json()
            # print(result)
            if result['code'] == 1:
                msg(f"{name}: {result['msg']}")
                time.sleep(3)
            else:
                msg(f"{name}: 失败, 请稍后再试!")
                msg(result)
        except Exception as err:
            print(err)

    def get_index_info(self, name):  # 获取可收取大米信息
        try:
            response = requests.get(url=self.url("index/index"), headers=self.headers(), verify=False)
            result = response.json()
            # print(result)
            rice_list = result['data']['rice_list']
            if result['code'] == 1 and len(rice_list) > 0:
                for i in range(len(rice_list)):
                    _id, num, collect_name = rice_list[i]["id"], rice_list[i]["num"], rice_list[i]["name"]
                    # print(_id, num, _name)
                    self.collect_rice("收大米", _id, num, collect_name)
            elif result['code'] == 1 and len(rice_list) == 0:
                msg(f"{name}: 没有可以收获的大米")

            elif result['code'] == 2:
                msg(f"{name}: {result['msg']}, 请自己先打开一次小程序,种大米后在执行脚本!")
            else:
                msg(f"{name}: 失败, 请稍后再试!")
                msg(result)
        except Exception as err:
            print(err)

    def collect_rice(self, name, _id, num, collect_name):  # 收大米
        try:
            payload = f"&id={_id}"
            response = requests.post(url=self.url("index/collect-rice"), headers=self.headers(), data=payload)
            result = response.json()
            # print(result)
            if result['code'] == 1:
                msg(f"{name}: 收取 {collect_name} {num} 大米, {result['msg']}")
                time.sleep(5)
            elif result['code'] == 0:
                msg(f"{name}: {result['msg']}")
            else:
                msg(f"{name}: 失败, 请稍后再试!")
                msg(result)
        except Exception as err:
            print(err)


# ====================================================================


def main():
    pass


def last_version(name, mold):
    url = ''
    if mold == 1:
        url = f"https://raw.gh.fakev.cn/yml2213/Python/master/{name}/{name}.py"

    elif mold == 2:
        url = f"http://yml-gitea.ml:2233/yml/Python/raw/branch/master/{name}.py"
    try:
        _url = url
        _headers = {}
        response = requests.get(url=_url, headers=_headers, verify=False)
        result = response.text
        r = re.compile(r'Script_Version = "(.*?)"')
        _data = r.findall(result)
        if not _data:
            return "出现未知错误 ,请稍后重试!"
        else:
            return _data[0]
    except Exception as err:
        print(err)


def mac_env(name):
    global ckArr
    pwd = os.path.dirname(os.path.abspath(__file__)) + os.sep
    path = pwd + ".env"
    with open(path, "r+") as f:
        env = f.read()
        if name in env:
            r = re.compile(r'sbr_data="(.*?)"', re.M | re.S | re.I)
            result = r.findall(env)
            # print(data[0])
            if "@" in result[0]:
                _ck = result[0].split("@")
                ckArr = _ck
            elif "\n" in result[0]:
                _ck = result[0].splitlines()
                ckArr = _ck
            else:
                ckArr = result
        else:
            print(f"检查变量 {name} 是否已填写")


def ql_env(name):
    global ckArr
    if name in os.environ:
        ckArr = []
        _data = os.environ[name]
        if "@" in _data:
            _ck = _data.split("@")
            ckArr = _ck
        elif "\n" in _data:
            _ck = _data.splitlines()
            ckArr = _ck
        else:
            ckArr = _data.split("@")


# 通知服务
class Msg(object):
    def __init__(self, m=''):
        self.str_msg = m
        self.message()

    # noinspection PyMethodMayBeStatic
    def get_sendnotify(self):
        if not os.path.exists("sendNotify.py"):
            cur_path = os.getcwd()
            print(f"未找到通知依赖文件,将于脚本执行目录({cur_path})新建:sendNotify.py ")
            try:
                url = 'https://raw.gh.fakev.cn/yml2213/Python/master/sendNotify.py'
                response = requests.get(url)
                with open('sendNotify.py', "w+", encoding="utf-8") as f:
                    f.write(response.text)
            except Exception as err:
                print(err)
        else:
            print("文件已存在,跳过")
            pass
        pass

    def message(self):
        global msg_info
        print(self.str_msg)
        try:
            # msg_info = ''
            msg_info = f"{msg_info}\n{self.str_msg}"
        except Exception as err:
            print(err)
            msg_info = "{}".format(self.str_msg)
        sys.stdout.flush()
        # 这代码的作用就是刷新缓冲区。
        # 当我们打印一些字符时 ,并不是调用print函数后就立即打印的。一般会先将字符送到缓冲区 ,然后再打印。
        # 这就存在一个问题 ,如果你想等时间间隔的打印一些字符 ,但由于缓冲区没满 ,不会打印。就需要采取一些手段。如每次打印后强行刷新缓冲区。

    def main(self):
        global send
        cur_path = os.getcwd()
        # print(cur_path)
        if os.path.exists(cur_path + "/sendNotify.py"):
            # noinspection PyBroadException
            try:
                from sendNotify import send
            except Exception as err:
                self.get_sendnotify()
                print(err)
                try:
                    from sendNotify import send
                except Exception as err:
                    print(err)
                    print("加载通知服务失败~")
        else:
            self.get_sendnotify()
            try:
                from sendNotify import send
            except Exception as err:
                print(err)
                print("加载通知服务失败~")


Msg().main()


def msg(data):
    Msg(data)


# mac_env(f"{Name_Pinyin}_data")
ql_env(f"{Name_Pinyin}_data")


def tip():
    print("================ 脚本只支持青龙新版 =================")
    print("============ 具体教程以请自行查看顶部教程 =============\n")
    msg(f"🔔 {Script_Name} ,开始! ")
    origin_version = last_version(Name_Pinyin, 1)
    msg(f"📌 本地脚本: {Script_Version}      远程仓库版本: V {origin_version}")
    msg(f"📌 🆙 更新内容: {Script_Change}")
    msg(f"共发现 {str(len(ckArr))} 个账号")


if __name__ == "__main__":
    global ckArr, msg_info, send, _ck_state
    tip()
    start()
    send(f"{Script_Name}", msg_info)
