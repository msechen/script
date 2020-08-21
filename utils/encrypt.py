import hashlib


def md5(origin_str):
    hl = hashlib.md5()
    hl.update(origin_str.encode(encoding='utf-8'))
    return hl.hexdigest().upper()


if __name__ == '__main__':
    print(md5("12345678"))
