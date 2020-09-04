import datetime


def get_current_datetime():
    return datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')


def get_today_date():
    return datetime.datetime.now().strftime('%Y-%m-%d')


def get_yestoday_date():
    yestoday = datetime.datetime.now() - datetime.timedelta(days=1)
    return yestoday.strftime('%Y-%m-%d')


def get_current_hour():
    return datetime.datetime.now().strftime('%H')


def get_last_min_ts():
    return datetime.datetime.now() - datetime.timedelta(minutes=1)


def get_last_x_min_ts(x):
    return datetime.datetime.now() - datetime.timedelta(minutes=x)


if __name__ == '__main__':
    print(get_current_datetime())
    print(get_today_date())
    print(get_yestoday_date())
    print(get_current_hour())

