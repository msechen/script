import asyncio
import datetime
import os
import re
import urllib.parse

from pyrogram import Client, filters

# 0. pip3 install -U pyrogram
# 1. 自行配置 my_id my_bot_id open_proxy base_path变量参数
# 2. 复制magic.py到/jd/config/目录
# 3. python3 /jd/scripts/magic.py 登录
# 4. 给bot发送 在吗 有反应即可
# 5. pm2 start /jd/scripts/magic.py -x --interpreter python3
# 6. 挂起bot到后台 查看状态 pm2 l
# 7. 后续添加变量后 pm2 restart magic 即可重启

# my.telegram.org申请到的api_id,api_hash
api_id = 3741
api_hash = 'f81a30b8'
# 你自己的id
my_id = 95130
# 你bot的id bot_token冒号之前的那部分 16575:AAGO7sxIVvhdSHr5it_k_0u_C1w7U
my_bot_id = 16575
# v4 配置文件
_ConfigSH = '/jd/config/config.sh'
# 你的脚本路径 例如在v4 /jd/scripts下
base_path = '/jd/scripts'
# 需要代理吗? 需要填1 不需要填2
open_proxy = 1
if open_proxy == 1:
    proxy = {
        'hostname': '127.0.0.1',  # 改成自己的
        'port': 7890}
    app = Client('magic', api_id, api_hash, proxy=proxy)
else:
    app = Client('magic', api_id, api_hash)

# 监控的自动车
monitor_cars = -1001582579150
monitor_flag = 'https://i.walle.com/api?data='

# 你的脚本配置
car_config = [
    {'name': 'M加购有礼', 'env': 'M_WX_ADD_CART_URL', 'js': 'm_jd_wx_addCart.js', 'cmd': 'now'},
    {'name': 'M幸运抽奖', 'env': 'M_WX_LUCK_DRAW_URL', 'js': 'm_jd_wx_luckDraw.js', 'cmd': 'now'},
    {'name': 'M集卡抽奖', 'env': 'M_WX_COLLECT_CARD_URL', 'js': 'm_jd_wx_collectCard.js', 'cmd': 'now'},
    {'name': 'M关注有礼', 'env': 'M_FOLLOW_SHOP_ARGV', 'js': 'm_jd_follow_shop.js', 'cmd': 'now'},
]


@app.on_message(filters.chat(my_bot_id) & filters.regex("在吗"))
async def handler(client, message):
    await message.reply("老板啥事！")


@app.on_message(filters.chat(monitor_cars) & filters.text)
async def handler(client, message):
    try:
        if message.entities is None:
            return
        text = message.entities[0]['url']
        text = urllib.parse.unquote(text.replace(monitor_flag, ''))
        name = ''
        js = ''
        command = ''
        for v in car_config:
            if v['env'] in text:
                name = v['name']
                js = v['js']
                command = v['cmd']
                break
        if len(name) == 0:
            await client.send_message(my_bot_id, f'未知变量`{text}`')
            return
        messages = text.split("\n")
        change = ""
        for message in messages:
            if "export " not in message:
                continue
            kv = message.replace("export ", "")
            key = kv.split("=")[0]
            value = re.findall(r'"([^"]*)"', kv)[0]
            configs = rwcon("str")
            if kv in configs:
                continue
            if key in configs:
                configs = re.sub(f'{key}=("|\').*("|\')', kv, configs)
                change += f"【替换】 `{name}` 环境变量成功\n`{kv}\n`"
            else:
                end_line = 0
                configs = rwcon("list")
                for config in configs:
                    if "第五区域" in config and "↑" in config:
                        end_line = configs.index(config) - 1
                        break
                configs.insert(end_line, f'export {key}="{value}"\n')
                change += f"【新增】 `{name}` 环境变量成功\n`{kv}\n`"
                await client.send_message(my_bot_id, change)
            rwcon(configs)
        if len(change) == 0:
            await client.send_message(my_bot_id, f'【取消】{name}环境变量无需改动')
            return
        await client.send_message(my_bot_id, change)
        if len(js) > 0:
            await cmd(client, f'jtask {base_path}/{js} {command}')
        else:
            await client.send_message(my_bot_id, f'无需执行')
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        await client.send_message(my_bot_id, f'{title}-{name}-{str(e)}')


async def cmd(client, cmdtext):
    '''定义执行cmd命令'''
    try:
        p = await asyncio.create_subprocess_shell(
            cmdtext, stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE)
        res_bytes, res_err = await p.communicate()
        res = res_bytes.decode('utf-8')
        if len(res) > 0:
            tmp_log = f'/jd/log/bot/{cmdtext.split("/")[-1].split(".js")[0]}-{datetime.datetime.now().strftime("%H-%M-%S.%f")}.log'
            with open(tmp_log, 'w+', encoding='utf-8') as f:
                f.write(res)
            await client.send_document(my_id, tmp_log)
            os.remove(tmp_log)
    except Exception as e:
        await client.send_message(my_bot_id,
                                  f'something wrong,I\'m sorry\n{str(e)}')


# 读写config.sh
def rwcon(arg):
    if arg == "str":
        with open(_ConfigSH, 'r', encoding='utf-8') as f1:
            configs = f1.read()
        return configs
    elif arg == "list":
        with open(_ConfigSH, 'r', encoding='utf-8') as f1:
            configs = f1.readlines()
        return configs
    elif isinstance(arg, str):
        with open(_ConfigSH, 'w', encoding='utf-8') as f1:
            f1.write(arg)
    elif isinstance(arg, list):
        with open(_ConfigSH, 'w', encoding='utf-8') as f1:
            f1.write("".join(arg))


app.run()
