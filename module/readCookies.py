import os, re



def readCookies():
    """
    读取 Cookie
    """
    if isv4:
        config = f'{env}/config/config.sh'
    else:
        config = f'{env}/config/cookie.sh' # 青龙
    with open(config, 'r', encoding='utf-8') as f:
        config = ''.join(f.readlines())
    cookie = re.findall(r"pt_key=.*;pt_pin=.*;", config)
    illegal_cookie = 'pt_key=xxxxxxxxxx;pt_pin=xxxx;'
    if illegal_cookie in cookie:
        m = cookie.index(illegal_cookie)
        del(cookie[m])
    return cookie


# 开始执行主程序
if __name__ == '__main__':
    path_list = os.path.realpath(__file__).split('/')[1:]
    env = '/' + '/'.join(path_list[:-2])
    if os.path.isfile('/ql/config/cookie.sh') or os.path.isfile(f'{env}/config/cookie.sh'): # 青龙
        isv4 = False
        if not os.path.isfile(f'{env}/config/cookie.sh'): # 青龙容器内
            env = '/ql'
    else: # v4-bot
        isv4 = True
        if not os.path.isfile(f'{env}/config/config.sh'): # v4-bot 容器内
            env = '/jd'
    readCookies()
