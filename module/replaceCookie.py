import os


def replaceCookie():
  path = f'{env}/config/config.sh'
    with open(path, 'r', encoding='utf-8') as f1:
      configs = f1.readlines()
      for config in configs:
        if config.find(f'Cookie{m}=') != -1:
          configs[configs.index(config)] = f'Cookie{m}="{new_cookie}"\n'
          with open(path, 'w', encoding='utf-8') as f2:
            print(''.join(configs), file=f2)
            break
        elif config.find('第二区域') != -1:
          break

          
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
    m = '1'
    new_cookie = 'pt_key=.*;pt_pin=.*;'
    replaceCookie()
