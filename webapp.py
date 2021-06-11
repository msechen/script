# -*- coding: utf-8 -*-

import logging

from flask import Flask, render_template

from lib import logging_config

from jd.web import jda, jdt
from surl.web import surl
from wx.web import wxa

from sche.tasks import start_sche

app = Flask(__name__)
app.register_blueprint(jdt)
app.register_blueprint(jda)
app.register_blueprint(wxa)
app.register_blueprint(surl)

start_sche(app)


log = logging.getLogger('refusea.webapp')


@app.route('/')
def index():
    return render_template('welcome.jinja2')


if __name__ == '__main__':

    log.debug('webapp start...')
    app.run(port=8080, debug=True)
