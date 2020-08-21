import datetime


def get_current_datetime():
    return datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')


def get_current_date():
    return datetime.datetime.now().strftime('%Y-%m-%d')


def get_current_hour():
    return datetime.datetime.now().strftime('%H')


def get_last_min_ts():
    return datetime.datetime.now() - datetime.timedelta(minutes=1)


if __name__ == '__main__':
    print(get_current_datetime())
    print(get_current_date())
    print(get_current_hour())

