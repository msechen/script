/*

软件名称:莹石云视频

偷改大佬的,

项目注册地址:各大应用商城搜索 莹石云视频 再不会就百度下载

变量需求,有可能抓不到,我v2p代理都抓百度东西,不知道证书问题还是啥

====第一种填法
必填变量

soy_ysysp_sesionid
#抓包请求头sesionid

soy_ysysp_cookie
#抓包请求头cookie

选填变量
soy_ysysp_featurecode
#抓包请求头中featurecode

====第二种填法
整个请求头

变量
soy_ysysp_headers

格式如: {"Host": "api.ys7.com","sessionid": ***,......}

如此格式

建议第一种

关于v2p重写不知道
[rewrite]
https://api.ys7.com/v3/integral/yd/getUserOpenBoxCd  对应脚本 
[MITM]
api.ys7.com

不一定行

多号用 @ 或 # 或 换行 隔开

cron 0 11,20 * * *

*/
const $ = new Env('莹石云视频');
//加载推送消息模块
const notify = $.isNode() ? require('./sendNotify') : '';
status = (status = ($.getval("ysystatus") || "1")) > 1 ? `${status}` : "";
let ysycount = ''
const app_soy_ysysp_sesionid = [],
    app_soy_ysysp_featurecode = [],
    app_soy_ysysp_cookie = [],
    app_soy_ysysp_headers = []
let qd_state = 0,
    sc_state = 0,
    pl_state = 0,
    ad_state = 0

    !(async () => {


        if ($.isNode()) {
            if (!process.env.soy_ysysp_sesionid) {
                console.log(`\n【${$.name}】：未提供登录账号`);
                return;
            }

            if (!process.env.soy_ysysp_cookie) {
                console.log(`\n【${$.name}】：未提供登录密码`);
                return;
            }


            if (process.env.soy_ysysp_sesionid && process.env.soy_ysysp_sesionid.indexOf('@') > -1) {
                soy_ysysp_sesionid = process.env.soy_ysysp_sesionid.split('@');
            } else if (process.env.soy_ysysp_sesionid && process.env.soy_ysysp_sesionid.indexOf('\n') > -1) {
                soy_ysysp_sesionid = process.env.soy_ysysp_sesionid.split('\n');
            } else if (process.env.soy_ysysp_sesionid && process.env.soy_ysysp_sesionid.indexOf('#') > -1) {
                soy_ysysp_sesionid = process.env.soy_ysysp_sesionid.split('#');
            } else {
                soy_ysysp_sesionid = process.env.soy_ysysp_sesionid.split();
            };

            if (process.env.soy_ysysp_cookie && process.env.soy_ysysp_cookie.indexOf('@') > -1) {
                soy_ysysp_cookie = process.env.soy_ysysp_cookie.split('@');
            } else if (process.env.soy_ysysp_cookie && process.env.soy_ysysp_cookie.indexOf('\n') > -1) {
                soy_ysysp_cookie = process.env.soy_ysysp_cookie.split('\n');
            } else if (process.env.soy_ysysp_cookie && process.env.soy_ysysp_cookie.indexOf('#') > -1) {
                soy_ysysp_cookie = process.env.soy_ysysp_cookie.split('#');
            } else {
                soy_ysysp_cookie = process.env.soy_ysysp_cookie.split();
            };

            if (!process.env.soy_ysysp_featurecode) {
                //soy_ysysp_featurecode='e336d512fd6a3a030e8d460de08454c2'
                console.log(`\n【${$.name}】：未提供变量 soy_ysysp_featurecode ,将默认分配`);
            } else {
                if (process.env.soy_ysysp_featurecode && process.env.soy_ysysp_featurecode.indexOf('@') > -1) {
                    soy_ysysp_featurecode = process.env.soy_ysysp_featurecode.split('@');
                } else if (process.env.soy_ysysp_featurecode && process.env.soy_ysysp_featurecode.indexOf('\n') > -1) {
                    soy_ysysp_featurecode = process.env.soy_ysysp_featurecode.split('\n');
                } else if (process.env.soy_ysysp_featurecode && process.env.soy_ysysp_featurecode.indexOf('#') > -1) {
                    soy_ysysp_featurecode = process.env.soy_ysysp_featurecode.split('#');
                } else {
                    soy_ysysp_featurecode = process.env.soy_ysysp_featurecode.split();
                };
                Object.keys(soy_ysysp_featurecode)
                    .forEach((item) => {
                        if (soy_ysysp_featurecode[item]) {
                            app_soy_ysysp_featurecode.push(soy_ysysp_featurecode[item]);
                        };
                    });

            }

            if (!process.env.soy_ysysp_headers) {
                //soy_ysysp_featurecode='e336d512fd6a3a030e8d460de08454c2'
                console.log(`\n【${$.name}】：未提供变量 soy_ysysp_featurecode ,将默认分配`);
            } else {
                if (process.env.soy_ysysp_headers && process.env.soy_ysysp_headers.indexOf('@') > -1) {
                    soy_ysysp_headers = process.env.soy_ysysp_headers.split('@');
                } else if (process.env.soy_ysysp_headers && process.env.soy_ysysp_headers.indexOf('\n') > -1) {
                    soy_ysysp_headers = process.env.soy_ysysp_headers.split('\n');
                } else if (process.env.soy_ysysp_headers && process.env.soy_ysysp_headers.indexOf('#') > -1) {
                    soy_ysysp_headers = process.env.soy_ysysp_headers.split('#');
                } else {
                    soy_ysysp_headers = process.env.soy_ysysp_headers.split();
                };
                Object.keys(soy_ysysp_headers)
                    .forEach((item) => {
                        if (soy_ysysp_headers[item]) {
                            app_soy_ysysp_headers.push(soy_ysysp_headers[item]);
                        };
                    });

            }


        } else {

            if (typeof $request !== "undefined") {
                await ysysp_data()
            } else {

                if (!$.getdata('soy_ysysp_sesionid')) {
                    console.log(`\n【${$.name}】：未提供登录账号`);
                    return;
                }

                if (!$.getdata('soy_ysysp_featurecode')) {
                    console.log(`\n【${$.name}】：未提供登录密码`);
                    return;
                }

                if ($.getdata('soy_ysysp_sesionid') && $.getdata('soy_ysysp_sesionid')
                    .indexOf('@') > -1) {
                    soy_ysysp_sesionid = $.getdata('soy_ysysp_sesionid').split('@');
                } else if ($.getdata('soy_ysysp_sesionid') && $.getdata('soy_ysysp_sesionid').indexOf('\n') > -1) {
                    soy_ysysp_sesionid = $.getdata('soy_ysysp_sesionid').split('\n');
                } else if ($.getdata('soy_ysysp_sesionid') && $.getdata('soy_ysysp_sesionid')
                    .indexOf('#') > -1) {
                    soy_ysysp_sesionid = $.getdata('soy_ysysp_sesionid')
                        .split('#');
                } else {
                    soy_ysysp_sesionid = $.getdata('soy_ysysp_sesionid')
                        .split();
                };

                if ($.getdata('soy_ysysp_cookie') && $.getdata('soy_ysysp_cookie')
                    .indexOf('@') > -1) {
                    soy_ysysp_cookie = $.getdata('soy_ysysp_cookie')
                        .split('@');
                } else if ($.getdata('soy_ysysp_cookie') && $.getdata('soy_ysysp_cookie')
                    .indexOf('\n') > -1) {
                    soy_ysysp_cookie = $.getdata('soy_ysysp_cookie')
                        .split('\n');
                } else if ($.getdata('soy_ysysp_cookie') && $.getdata('soy_ysysp_cookie')
                    .indexOf('#') > -1) {
                    soy_ysysp_cookie = $.getdata('soy_ysysp_cookie')
                        .split('#');
                } else {
                    soy_ysysp_cookie = $.getdata('soy_ysysp_cookie')
                        .split();
                };

                if (!$.getdata('soy_ysysp_featurecode')) {
                    //soy_ysysp_featurecode='e336d512fd6a3a030e8d460de08454c2'
                    console.log(`\n【${$.name}】：未提供变量 soy_ysysp_featurecode ,将默认分配`);
                } else {
                    if ($.getdata('soy_ysysp_featurecode') && $.getdata('soy_ysysp_featurecode').indexOf('@') > -1) {
                        soy_ysysp_featurecode = $.getdata('soy_ysysp_featurecode').split('@');
                    } else if ($.getdata('soy_ysysp_featurecode') && $.getdata('soy_ysysp_featurecode').indexOf('\n') > -1) {
                        soy_ysysp_featurecode = $.getdata('soy_ysysp_featurecode').split('\n');
                    } else if ($.getdata('soy_ysysp_featurecode') && $.getdata('soy_ysysp_featurecode').indexOf('#') > -1) {
                        soy_ysysp_featurecode = $.getdata('soy_ysysp_featurecode').split('#');
                    } else {
                        soy_ysysp_featurecode = $.getdata('soy_ysysp_featurecode').split();
                    };
                    Object.keys(soy_ysysp_featurecode)
                        .forEach((item) => {
                            if (soy_ysysp_featurecode[item]) {
                                app_soy_ysysp_featurecode.push(soy_ysysp_featurecode[item]);
                            };
                        });

                }

                if (!$.getdata('soy_ysysp_headers')) {
                    //soy_ysysp_featurecode='e336d512fd6a3a030e8d460de08454c2'
                    console.log(`\n【${$.name}】：未提供变量 soy_ysysp_headers ,将默认分配`);
                } else {
                    if ($.getdata('soy_ysysp_headers') && $.getdata('soy_ysysp_headers').indexOf('@') > -1) {
                        soy_ysysp_headers = $.getdata('soy_ysysp_headers').split('@');
                    } else if ($.getdata('soy_ysysp_headers') && $.getdata('soy_ysysp_headers').indexOf('\n') > -1) {
                        soy_ysysp_headers = $.getdata('soy_ysysp_headers').split('\n');
                    } else if ($.getdata('soy_ysysp_headers') && $.getdata('soy_ysysp_headers').indexOf('#') > -1) {
                        soy_ysysp_headers = $.getdata('soy_ysysp_headers').split('#');
                    } else {
                        soy_ysysp_headers = $.getdata('soy_ysysp_headers').split();
                    };
                    Object.keys(soy_ysysp_headers)
                        .forEach((item) => {
                            if (soy_ysysp_headers[item]) {
                                app_soy_ysysp_headers.push(soy_ysysp_headers[item]);
                            };
                        });

                }

            }
        }



        Object.keys(soy_ysysp_sesionid)
            .forEach((item) => {
                if (soy_ysysp_sesionid[item]) {
                    app_soy_ysysp_sesionid.push(soy_ysysp_sesionid[item]);
                };
            });

        Object.keys(soy_ysysp_cookie)
            .forEach((item) => {
                if (soy_ysysp_cookie[item]) {
                    app_soy_ysysp_cookie.push(soy_ysysp_cookie[item]);
                };
            });

        app_soy_ysysp_headers.push($.getdata('soy_ysysp_headers'))
        let ysycount = ($.getval('ysycount') || '1');
        for (let i = 2; i <= ysycount; i++) {
            app_soy_ysysp_headers.push($.getdata(`soy_ysysp_headers${i}`))

        }

        console.log(
            `\n=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
        );
        console.log(`===【共 ${app_soy_ysysp_sesionid.length} 个账号】===\n`);


        for (i = 0; i < app_soy_ysysp_sesionid.length; i++) {
            soy_ysysp_sesionid = app_soy_ysysp_sesionid[i]
            soy_ysysp_cookie = app_soy_ysysp_cookie[i]

            if ($.isNode()) {
                if (!process.env.soy_ysysp_featurecode) {
                    soy_ysysp_featurecode = 'e336d512fd6a3a030e8d460de08454c2'
                } else {
                    soy_ysysp_featurecode = app_soy_ysysp_featurecode[i]
                }

                if (!process.env.soy_ysysp_headers) {
                    soy_ysysp_headers = {
                        "Host": "api.ys7.com",
                        "sessionid": soy_ysysp_sesionid,
                        "clienttype": "3",
                        "clientversion": "6.1.0.210927",
                        "nettype": "WIFI",
                        "clientno": "undefined",
                        "featurecode": soy_ysysp_featurecode,
                        "language": "undefined",
                        "appid": "ys",
                        "content-type": "application/x-www-form-urlencoded",
                        "accept-encoding": "gzip",
                        "cookie": soy_ysysp_cookie,
                        "user-agent": "okhttp/3.14.7"
                    }
                } else {
                    soy_ysysp_headers = app_soy_ysysp_headers[i]
                }


            } else {

                if (!$.getdata('soy_ysysp_featurecode')) {
                    soy_ysysp_featurecode = 'e336d512fd6a3a030e8d460de08454c2'
                } else {
                    soy_ysysp_featurecode = app_soy_ysysp_featurecode[i]
                }

                if (!$.getdata('soy_ysysp_headers')) {
                    soy_ysysp_headers = {
                        "Host": "api.ys7.com",
                        "sessionid": soy_ysysp_sesionid,
                        "clienttype": "3",
                        "clientversion": "6.1.0.210927",
                        "nettype": "WIFI",
                        "clientno": "undefined",
                        "featurecode": soy_ysysp_featurecode,
                        "language": "undefined",
                        "appid": "ys",
                        "content-type": "application/x-www-form-urlencoded",
                        "accept-encoding": "gzip",
                        "cookie": soy_ysysp_cookie,
                        "user-agent": "okhttp/3.14.7"
                    }
                } else {
                    soy_ysysp_headers = app_soy_ysysp_headers[i]
                }

            }

            $.index = i + 1;

            console.log(`\n开始【第 ${$.index} 个账号任务】`);
            await soy_ysysp_list()

            if (qd_state == 1) {
                await soy_ysysp_check_in()
            }

            for (let cs = 0; cs < sc_state; cs++) {
                await soy_ysysp_scvideo()
                await $.wait(Math.floor(Math.random() * (20000 - 10000 + 1000) + 10000))
            }

            for (let cs = 0; cs < pl_state; cs++) {
                await soy_ysysp_plvideo()
                await $.wait(Math.floor(Math.random() * (20000 - 10000 + 1000) + 10000))
            }

            await soy_ysysp_BoxCd()

            for (let cs = 0; cs < 10; cs++) {
                await soy_ysysp_boxvideo()
                await $.wait(Math.floor(Math.random() * (30000 - 20000 + 1000) + 20000))
            }
        };


        //if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};


    })()
    .catch((e) => $.logErr(e))
    .finally(() => $.done());


function ysysp_data() {
    if ($request.url.indexOf("getUserOpenBoxCd") > -1) {

        const soy_ysysp_headers = JSON.stringify($request.headers)
        if (soy_ysysp_headers) $.setdata(soy_ysysp_headers, `soy_ysysp_headers${status}`)
        $.log(soy_ysysp_headers)

        $.msg($.name, "", `萤石云${status}获取headers成功`)

    }
}


function soy_ysysp_BoxCd() {
    return new Promise((resolve, reject) => {
        $.get({
            url: `https://api.ys7.com/v3/integral/yd/getUserOpenBoxCd`,
            headers: soy_ysysp_headers,
            //body : "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code = 200) {
                if (result.expireTime == 0) {
                    await soy_ysysp_openBox()

                } else {
                    console.log(`\n【${$.name}---账号 ${$.index} 宝箱冷却时间】: 还剩下 ${result.expireTime} 秒后才能开启`)
                }
            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 宝箱冷却时间】: ${result.meta.message}`)
            }


            resolve()
        })
    })
}

function soy_ysysp_openBox() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/yd/openYdBox`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {

                console.log(`\n【${$.name}---账号 ${$.index} 开宝箱】: ${result.meta.message},获得莹豆 ${result.ydValue} 个`)

            } else if (result.meta.code == 10361) {
                console.log(`\n【${$.name}---账号 ${$.index} 开宝箱】：${result.meta.message}\n`)
                await soy_ysysp_boxvideo()

            } else if (result.meta.code == 10362) {
                console.log(`\n【${$.name}---账号 ${$.index} 开宝箱】：${result.meta.message}\n`)
                await soy_ysysp_boxvideo()

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 开宝箱】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_ysysp_boxvideo() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete`,
            headers: soy_ysysp_headers,
            body: `eventkey=1013&filterParam=12345`,
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {
                console.log(`\n【${$.name}---账号 ${$.index} 广告视频激励奖】: ${result.meta.message},获得莹豆 ${result.taskIntegral} 个`)


            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 广告视频激励奖】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_ysysp_plvideo() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1008&filterParam=video`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {

                console.log(`\n【${$.name}---账号 ${$.index} 评论短视频】: ${result.meta.message},获得莹豆 ${result.taskIntegral} 个`)

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 评论短视频】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_ysysp_scvideo() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1007&filterParam=video`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {

                console.log(`\n【${$.name}---账号 ${$.index} 上传短视频】: ${result.meta.message},获得莹豆 ${result.taskIntegral} 个`)

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 上传短视频】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_ysysp_check_in() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/videoclips/user/check_in`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {
                console.log(`\n【${$.name}---账号 ${$.index} 签到】: ${result.meta.message},获得莹豆 ${result.data.score} 个`)

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 签到】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_ysysp_list() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/list`,
            headers: soy_ysysp_headers,
            body: "pageNum=0&pageSize=20&vipId=5832bb930b104af09cc3986e923d2519",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {
                console.log(`\n【${$.name}---账号 ${$.index} 任务列表】: 读取到当前任务状态:`)
                task_sl = result.taskList.length
                for (let sl = 0; sl < task_sl; sl++) {

                    if (sl == 0) {
                        if (result.taskList[sl].taskCompleteNum == 0) {
                            console.log(`${result.taskList[sl].taskName}：今天未签到`)
                            qd_state = 1

                        } else {
                            console.log(`${result.taskList[sl].taskName}：今天已签到`)

                        }

                    }

                    if (sl == 1) {
                        if (result.taskList[sl].taskCompleteNum == 3) {
                            console.log(`${result.taskList[sl].taskName}：已完成`)

                        } else {
                            console.log(`${result.taskList[sl].taskName}：${result.taskList[sl].taskCompleteNum}/${result.taskList[sl].taskNum}`)
                            sc_state = result.taskList[sl].taskCompleteNum - result.taskList[sl].taskNum

                        }

                    }

                    if (sl == 2) {
                        if (result.taskList[sl].taskCompleteNum == 6) {
                            console.log(`${result.taskList[sl].taskName}：已完成`)

                        } else {
                            console.log(`${result.taskList[sl].taskName}：${result.taskList[sl].taskCompleteNum}/${result.taskList[sl].taskNum}`)
                            pl_state = result.taskList[sl].taskCompleteNum - result.taskList[sl].taskNum

                        }

                    }

                    /*if(sl==3){
					   if(result.taskList[sl].taskCompleteNum==1){
					    console.log(`${result.taskList[sl].taskName}：已完成`)
					    
					}else{
					    console.log(`${result.taskList[sl].taskName}：${result.taskList[sl].taskCompleteNum}/${result.taskList[sl].taskNum}`)
					    ad_state=result.taskList[sl].taskNum
					    
					}  
					    
					}*/


                }




            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 任务列表】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}




function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date)
                .getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                    let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                    i = i ? i.replace(/\n/g, "")
                        .trim() : i;
                    let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                    r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                    const [o, h] = i.split("@"), a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                    this.post(a, (t, e, i) => s(i))
                })
                .catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1")
                .split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString()
                    .match(/[^.[\]]+/g) || []), e.slice(0, -1)
                .reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t)
                .then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t)
                .on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse)
                                .toString();
                            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                })
                .then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t)
                .then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i)
                    .then(t => {
                        const {
                            statusCode: s,
                            statusCode: i,
                            headers: r,
                            body: o
                        } = t;
                        e(null, {
                            status: s,
                            statusCode: i,
                            headers: r,
                            body: o
                        }, o)
                    }, t => {
                        const {
                            message: s,
                            response: i
                        } = t;
                        e(s, i, i && i.body)
                    })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date)
                    .getMonth() + 1,
                "d+": (new Date)
                    .getDate(),
                "H+": (new Date)
                    .getHours(),
                "m+": (new Date)
                    .getMinutes(),
                "s+": (new Date)
                    .getSeconds(),
                "q+": Math.floor(((new Date)
                    .getMonth() + 3) / 3),
                S: (new Date)
                    .getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date)
                    .getFullYear() + "")
                .substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")")
                .test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s])
                    .substr(("" + e[s])
                        .length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date)
                .getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}