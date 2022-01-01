from .. import chat_id, jdbot, logger
from ..bot.utils import press_event, V4, QL, _ConfigFile, row, split_list
from telethon import events, Button
from asyncio import exceptions
import re


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/tempblockcookie|^/blockcookie'))
async def mytempblockcookie(event):
    try:
        SENDER = event.sender_id
        if QL:
            await jdbot.send_message(chat_id, "青龙用户无法使用临时屏蔽功能")
            return
        message = event.message.raw_text
        ck_num = message.replace("/tempblockcookie","").replace("/blockcookie","")
        goon = True
        if len(ck_num) <= 1:
            async with jdbot.conversation(SENDER, timeout=60) as conv:
                while goon:
                    goon = await tempblockcookie_1(conv, SENDER)
                conv.cancel()
        elif not ck_num.replace(" ","").isdigit():
            await jdbot.send_message(chat_id, "非法输入！参考下面所给实例进行操作！\n/tempblockcookie 1（屏蔽账号1）")
        elif ck_num.replace(" ","").isdigit():
            await tempblockcookie_3(ck_num.replace(" ",""))
    except exceptions.TimeoutError:
        await jdbot.send_message(chat_id, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


async def tempblockcookie_1(conv, SENDER):
    msg = await conv.send_message("请做出您的选择")
    buttons = [
        Button.inline("查询目前屏蔽", data="inquire"),
        Button.inline("指定屏蔽账号", data="designated block"),
        Button.inline("指定取消屏蔽", data="designated unblock"),
        Button.inline("取消所有屏蔽", data="unblock all accounts"),
        Button.inline('取消会话', data='cancel')
    ]
    msg = await jdbot.edit_message(msg, '请做出您的选择：', buttons=split_list(buttons, row))
    convdata = await conv.wait_event(press_event(SENDER))
    res = bytes.decode(convdata.data)
    if res == 'cancel':
        await jdbot.edit_message(msg, '对话已取消')
        conv.cancel()
        return False
    else:
        with open(_ConfigFile, 'r', encoding='utf-8') as f1:
            configs = f1.readlines()
        if res == 'inquire':
            for config in configs:
                i = configs.index(config)
                if config.find("TempBlockCookie") != -1 and config.find("##") == -1 and configs[i + 1].find(";") == -1:
                    result = config.replace("TempBlockCookie", "").replace("=", "").replace('"', '')
                    message = f"目前的屏蔽情况是：\n{result}"
                    return await operate(conv, SENDER, msg, message)
        elif res == 'designated block' or res == 'designated unblock':
            await jdbot.delete_messages(chat_id, msg)
            for config in configs:
                i = configs.index(config)
                if config.find("TempBlockCookie") != -1 and config.find("##") == -1 and configs[i + 1].find(";") == -1:
                    result = config.replace("TempBlockCookie", "").replace("=", "").replace('"', '')
                    msg = await conv.send_message(f"目前的屏蔽情况是：\n{result}\n请输入你需要操作的账号数字：")
                    reply = await conv.get_response()
                    ck_num = reply.raw_text
                    if not ck_num.isdigit():
                        message = "非法输入，输入的是非数字！"
                        return await operate(conv, SENDER, msg, message)
                    Temp = re.findall(r'"([^"]*)"', config)[0]
                    if res == 'designated block':
                        if ck_num in Temp:
                            message = "此账号已经被屏蔽，无需再次屏蔽"
                            return await operate(conv, SENDER, msg, message)
                        else:
                            configs[i] = f'TempBlockCookie="{Temp} {ck_num}"\n'
                            with open(_ConfigFile, 'w', encoding='utf-8') as f2:
                                f2.write(''.join(configs))
                            message = f"指定屏蔽账号{ck_num}成功"
                            return await operate(conv, SENDER, msg, message)
                    elif res == 'designated unblock':
                        if ck_num not in Temp:
                            message = "此账号没有被屏蔽，无需取消屏蔽"
                            return await operate(conv, SENDER, msg, message)
                        else:
                            configs[i] = f'TempBlockCookie="{Temp.replace(ck_num, "")}"\n'
                            with open(_ConfigFile, 'w', encoding='utf-8') as f2:
                                f2.write(''.join(configs))
                            message = f"指定取消屏蔽账号{ck_num}成功"
                            return await operate(conv, SENDER, msg, message)
                elif "AutoDelCron" in config:
                    await jdbot.edit_message(msg, "无法找到 TempBlockCookie 目标字符串，请检查是否使用了标准配置模板")
                    return False
        elif res == 'unblock all accounts':
            for config in configs:
                i = configs.index(config)
                if config.find("TempBlockCookie") != -1 and config.find("##") == -1 and configs[i + 1].find(";") == -1:
                    configs[i] = 'TempBlockCookie=""\n'
                    with open(_ConfigFile, 'w', encoding='utf-8') as f2:
                        f2.write(''.join(configs))
                    message = "取消屏蔽所有账号成功"
                    return await operate(conv, SENDER, msg, message)
                elif "AutoDelCron" in config:
                    await jdbot.edit_message(msg, "无法找到 TempBlockCookie 目标字符串，请检查是否使用了标准配置模板")
                    return False


# async def tempblockcookie_2(conv, SENDER, res, msg, configs):
#     await jdbot.delete_messages(chat_id, msg)
#     msg = await conv.send_message("请输入你需要操作的账号数字")
#     reply = await conv.get_response()
#     ck_num = reply.raw_text
#     if not ck_num.isdigit():
#         await jdbot.edit_message(msg, "非法输入，输入的是非数字！")
#         return False
#     for config in configs:
#         i = configs.index(config)
#         if config.find("TempBlockCookie") != -1 and config.find("##") == -1 and configs[i + 1].find(";") == -1:
#             Temp = re.findall(r'"([^"]*)"', config)[0]
#             if res == 'designated block':
#                 if ck_num in Temp:
#                     message = "此账号已经被屏蔽，无需再次屏蔽"
#                     return await operate(conv, SENDER, msg, message)
#                 else:
#                     configs[i] = f'TempBlockCookie="{Temp} {ck_num}"\n'
#                     with open(_ConfigFile, 'w', encoding='utf-8') as f2:
#                         f2.write(''.join(configs))
#                     message = f"指定屏蔽账号{ck_num}成功"
#                     return await operate(conv, SENDER, msg, message)
#             elif res == 'designated unblock':
#                 if ck_num not in Temp:
#                     message = "此账号没有被屏蔽，无需取消屏蔽"
#                     return await operate(conv, SENDER, msg, message)
#                 else:
#                     configs[i] = f'TempBlockCookie="{Temp.replace(ck_num, "")}"\n'
#                     with open(_ConfigFile, 'w', encoding='utf-8') as f2:
#                         f2.write(''.join(configs))
#                     message = f"指定取消屏蔽账号{ck_num}成功"
#                     return await operate(conv, SENDER, msg, message)
#         elif "AutoDelCron" in config:
#             await jdbot.edit_message(msg, "无法找到 TempBlockCookie 目标字符串，请检查是否使用了标准配置模板")
#             return False


async def operate(conv, SENDER, msg, message):
    buttons = [
        Button.inline("上级菜单", data="upper menu"),
        Button.inline('取消会话', data='cancel')
    ]
    msg = await jdbot.edit_message(msg, message, buttons=split_list(buttons, row))
    convdata = await conv.wait_event(press_event(SENDER))
    res = bytes.decode(convdata.data)
    if res == 'upper menu':
        await jdbot.delete_messages(chat_id, msg)
        return True
    else:
        await jdbot.edit_message(msg, '对话已取消')
        return False


async def tempblockcookie_3(ck_num):
    msg = await jdbot.send_message(chat_id, f"开始屏蔽账号{ck_num}")
    with open(_ConfigFile, 'r', encoding='utf-8') as f1:
        configs = f1.readlines()
    for config in configs:
        i = configs.index(config)
        if config.find("TempBlockCookie") != -1 and config.find("##") == -1 and configs[i + 1].find(";") == -1:
            Temp = re.findall(r'"([^"]*)"', config)[0]
            if ck_num in Temp:
                await jdbot.edit_message(msg, "此账号已经被屏蔽，无需再次屏蔽")
            else:
                configs[i] = f'TempBlockCookie="{Temp} {ck_num}"\n'
                with open(_ConfigFile, 'w', encoding='utf-8') as f2:
                    f2.write(''.join(configs))
                await jdbot.edit_message(msg, f"指定屏蔽账号{ck_num}成功")