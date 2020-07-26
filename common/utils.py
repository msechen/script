def str_to_int(x, default_value):
    r = None
    try:
        r = int(x)
    except:
        r = default_value

    return r
