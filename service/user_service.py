from modal import *
from dao import user_dao


def addNewUser(puid, nickname, avatar, sex, city):
    u = User(puid, nickname, avatar, sex, city)
    user_dao.addUser(u)


def queryUser():
    pass
