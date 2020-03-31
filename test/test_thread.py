# coding:utf-8
import threading
import time


def test(value):
    print('start test')
    time.sleep(3)  # 休息3秒
    print('input %s' % value)


if __name__ == '__main__':
    t = threading.Thread(target=test, args=(u'xxx',))
    t.start()
    print('end input')
