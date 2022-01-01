import os


if __name__ == '__main__':
    path_list = os.path.realpath(__file__).split('/')[1:]
    env = '/' + '/'.join(path_list[:-2]) # 容器外路径
    if os.path.isfile('/ql/config/cookie.sh') or os.path.isfile(f'{env}/config/cookie.sh'): # 青龙
        isv4 = False
        if not os.path.isfile(f'{env}/config/cookie.sh'): # 青龙容器内
            env = '/ql'
    else: # v4-bot
        isv4 = True
        if not os.path.isfile(f'{env}/config/config.sh'): # v4-bot 容器内
            env = '/jd'
    print(env)
