from dao import user_dao
from modal import *


def add_new_user(puid, nickname, avatar, sex, city):
    print(puid, nickname, avatar, sex, city)
    u = User(puid, nickname, avatar, sex, city)
    return user_dao.add_user(u)


def query_user():
    pass


if __name__ == "__main__":
    user_id = add_new_user("1234567890", "test", "http://11111.jpg", "male", "sz")
    print(user_id)
