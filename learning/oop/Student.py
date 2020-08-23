class Student(object):

    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def __str__(self):
        return 'Student object (name: %s score: %d)' % (self.__name,self.__score)

    __repr__ = __str__

    def print_score(self):
        print('%s: %s' % (self.__name, self.__score))

    def get_name(self):
        return self.__name

    def get_score(self):
        return self.__score

    def set_name(self, name):
        self.__name = name

    def set_score(self, score):
        self.__score = score

