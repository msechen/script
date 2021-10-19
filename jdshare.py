from flask import Flask
from flask import request
import json,random,sqlite3

app = Flask(__name__)


@app.route('/')
def hello():
    print('Hello World!')
    return 'Hello World!'

@app.route('/api/<value>/<int:num>')
def api(value,num):
    conn = sqlite3.connect('jdcode.db')
    c = conn.cursor()
    cursor = c.execute("SELECT * from "+value)
    results = cursor.fetchall()
    try:
        code = random.sample(results, num)
        sharecode=[]
        for i in code:
            sharecode.append(i[0])
        conn.close()
        return json.dumps({"code": 200,"data": sharecode})
    except:
        return json.dumps({"code": 500,"data": "互助码数量不足！"})
@app.route('/api/runTimes')
def getsharecode():
    activityId = request.args.get("activityId")
    sharecode = request.args.get("sharecode")
    conn = sqlite3.connect('jdcode.db')
    c = conn.cursor()
    c.execute("REPLACE INTO "+activityId+"(code,time) VALUES ('%s' ,date());" % (sharecode))
    conn.commit()
    conn.close()
    return "ok"

if __name__ == '__main__':
    conn = sqlite3.connect('jdcode.db')
    try:
        conn.execute("CREATE TABLE farm(code TEXT PRIMARY KEY NOT NULL,time TIME NOT NULL);")
        conn.execute("CREATE TABLE bean(code TEXT PRIMARY KEY NOT NULL,time TIME NOT NULL);")
        conn.execute("CREATE TABLE pet(code TEXT PRIMARY KEY NOT NULL,time TIME NOT NULL);")
        conn.execute("CREATE TABLE sgmh(code TEXT PRIMARY KEY NOT NULL,time TIME NOT NULL);")
        conn.execute("CREATE TABLE cfd(code TEXT PRIMARY KEY NOT NULL,time TIME NOT NULL);")
        conn.execute("CREATE TABLE health(code TEXT PRIMARY KEY NOT NULL,time TIME NOT NULL);")
        conn.execute("CREATE TABLE jxdfactory(code TEXT PRIMARY KEY NOT NULL,time TIME NOT NULL);")
        conn.execute("CREATE TABLE ddfactory(code TEXT PRIMARY KEY NOT NULL,time TIME NOT NULL);")
        conn.execute("CREATE TABLE cfdmoon(code TEXT PRIMARY KEY NOT NULL,time TIME NOT NULL);")
    except:
        print ("Create table failed")
    conn.commit()
    conn.close()
    app.run(host='0.0.0.0',port=80)
    
