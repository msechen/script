# -*- coding: utf-8 -*-

from surl.entity import Surl
from surl.dao import SurlDao

from typing import Dict


class SurlCache(object):

    def __init__(self) -> None:

        # id 为 key
        self.id_cache: Dict[str, Surl] = {}
        # url 为 key
        self.url_cache: Dict[str, Surl] = {}

    def load(self) -> None:
        surls = SurlDao.list()

        id_dict = {}
        url_dict = {}

        if surls:
            for surl in surls:
                id_dict[surl.id] = surl
                url_dict[surl.original_url] = surl

        self.id_cache = id_dict
        self.url_cache = url_dict

    def cache(self, surl: Surl) -> None:
        self.id_cache[surl.id] = surl
        self.url_cache[surl.original_url] = surl


cache = SurlCache()
cache.load()
