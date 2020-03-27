import sys

from sqlalchemy.exc import DatabaseError

from dao import user_dao
from modal import *


def add_new_user(puid, nickname, avatar, sex, city):
    print('add_new_user：', puid, nickname, avatar, sex, city)
    u = User(puid, nickname, avatar, sex, city)
    try:
        return user_dao.add_user(u)
    except DatabaseError as err:
        print("DatabaseError: {0}".format(err))
    except:
        print("Unexpected error:", sys.exc_info()[0])


def query_user():
    pass


if __name__ == "__main__":
    user_id = add_new_user("1234567890", "kolly🤔", "http://11111.jpg", 'wo', "sz")
    print(user_id)
