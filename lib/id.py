# -*- coding: utf-8 -*-
"""
生成唯一的 id, 16 位数字
"""

import threading
import time

lock = threading.Lock()
count = 0


def next(now: int = 0) -> int:
    """返回唯一的 id, 由当前时间戳(13位数字)+序号(000-999)构成

    Args:
        now: 当前时间戳, 毫秒

    Returns:
        唯一的 id
    """

    global count

    lock.acquire()
    try:
        count += 1
        if count > 999:
            count = 0
    finally:
        lock.release()

    now = now or int(time.time() * 1000)
    return now * 1000 + count
