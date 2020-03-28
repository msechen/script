import logging
import sys

from sqlalchemy.exc import DatabaseError

from dao import user_dao
from modal import *

logger = logging.getLogger('wx')


def add_new_user(puid, nickname, avatar, sex, city):
    logger.info('add_new_user param:{} {} {} {}'.format(puid, nickname, avatar, sex, city))
    u = User(puid, nickname, avatar, sex, city)
    # noinspection PyBroadException
    try:
        return user_dao.add_user(u)
    except DatabaseError as err:
        print("DatabaseError: {0}".format(err))
    except BaseException:
        print("Unexpected error:", sys.exc_info()[0])


def query_user():
    pass


if __name__ == "__main__":
    user_id = add_new_user("abcdefg", "kolly🤔", "http://11111.jpg", 1, "sz")
    logger.info(user_id)
