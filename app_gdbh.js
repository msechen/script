/*
加改汤师爷的,在他的V2P\圈X基础加配置青龙面板

软件名：果冻宝盒

下载链接：http://sd.bhrax.com/inviter/RcEFEs?userid=5806792
------
注册填写邀请码：A523V9
每天0.7元 ，5元提现秒到支付宝

青龙使用方法，抓包搜索关键字coins
# 找到以下相关参数添加环境变量
soy_gdbh_member_id
#在链接上有
soy_gdbh_token
在请求头上有x-token

注意:如果是ios系统需要自行另外添加如下变量

soy_gdbh_device
#请求头上的 x-platform
soy_gdbh_appid
#请求头上的 x-appid
soy_gdbh_UA
#请求头上的 x-agent

V2P使用方法
模板是大佬的模板未做修改,只适合重写,不适合手动添加变量,手动添加请使用青龙面板

代理后
获取ck：点击我的  即可获取ck 

js：
https://raw.githubusercontent.com/wx13069/JD/master/gdbh.js
重写
https://proxy.guodongbaohe.com/income/mymoney
主机名
proxy.guodongbaohe.com

*/




const $ = new Env('果冻宝盒');
let status;
status = (status = ($.getval("gdbhstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
const gdbhhdArr = [],
    gdbhurlArr = [],
    gdbhcount = '',
    app_soy_gdbh_token=[],
    app_soy_gdbh_member_id=[]
let gdbhhd = $.getdata('gdbhhd')
let gdbhurl = $.getdata('gdbhurl')
let b = Math.round(new Date().getTime() / 1000).toString();
let DD = RT(30000, 40000)
let tz = ($.getval('tz') || '1');
let sign = '',
    id = ''
let mm = 'faf78c39388faeaa49c305804bbc1119';
$.message = ''

    !(async () => {
        if ($.isNode()){
            
            if(!process.env.soy_gdbh_member_id){
        console.log(`\n【${$.name}】：未填写相应变量 soy_gdbh_member_id`);
        return;
    }
    if(!process.env.soy_gdbh_token){
        console.log(`\n【${$.name}】：未填写相应变量 soy_gdbh_token`);
        return;
    }
            
            if (process.env.soy_gdbh_member_id && process.env.soy_gdbh_member_id.indexOf('@') > -1) {
        soy_gdbh_member_id = process.env.soy_gdbh_member_id.split('@');
    } else if (process.env.soy_gdbh_member_id && process.env.soy_gdbh_member_id.indexOf('\n') > -1) {
        soy_gdbh_member_id = process.env.soy_gdbh_member_id.split('\n');
    } else if(process.env.soy_gdbh_member_id && process.env.soy_gdbh_member_id.indexOf('#') > -1){
        soy_gdbh_member_id = process.env.soy_gdbh_member_id.split('#');
    }else{
        soy_gdbh_member_id = process.env.soy_gdbh_member_id.split();
    };
    Object.keys(soy_gdbh_member_id).forEach((item) => {
        if (soy_gdbh_member_id[item]) {
            app_soy_gdbh_member_id.push(soy_gdbh_member_id[item]);
        };
    }); 
    
    if (process.env.soy_gdbh_token && process.env.soy_gdbh_token.indexOf('@') > -1) {
        soy_gdbh_token = process.env.soy_gdbh_token.split('@');
    } else if (process.env.soy_gdbh_token && process.env.soy_gdbh_token.indexOf('\n') > -1) {
        soy_gdbh_token = process.env.soy_gdbh_token.split('\n');
    } else if(process.env.soy_gdbh_token && process.env.soy_gdbh_token.indexOf('#') > -1){
        soy_gdbh_token = process.env.soy_gdbh_token.split('#');
    }else{
        soy_gdbh_token = process.env.soy_gdbh_token.split();
    };
    Object.keys(soy_gdbh_token).forEach((item) => {
        if (soy_gdbh_token[item]) {
            app_soy_gdbh_token.push(soy_gdbh_token[item]);
        };
    });
    
    if(!process.env.soy_gdbh_device){
        soy_gdbh_device='android'
        soy_gdbh_appid='2102202714'
        soy_gdbh_UA='JellyBox/3.8.4 (Android, Redmi K20 Pro, 11)'
    }else{
       soy_gdbh_device=process.env.soy_gdbh_device
       soy_gdbh_appid=process.env.soy_gdbh_appid
       soy_gdbh_UA=process.env.soy_gdbh_UA
    }
    
    console.log(`\n\n=== 脚本执行 - 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000).toLocaleString()} ===\n`);
        
    console.log(`=== 共${app_soy_gdbh_member_id.length}个账号 ===\n`)
            for (let i = 0; i < app_soy_gdbh_member_id.length; i++) {
                if (app_soy_gdbh_member_id[i]) {
                    id = app_soy_gdbh_member_id[i];
                    token=app_soy_gdbh_token[i]
                    gdbhhd={"Host":"proxy.guodongbaohe.com","x-userid":id,"x-appid":soy_gdbh_appid,"x-devid":"No-dev","x-nettype":"WIFI","x-agent":soy_gdbh_UA,"x-platform":soy_gdbh_device,"x-devtype":"no","x-token":token,"accept-encoding":"gzip","user-agent":"okhttp/3.14.9"}
                    $.index = i + 1;
                    console.log(`\n【 果冻宝盒 账号${$.index} 】`)


                    await gdbhqd()
                    await $.wait(2000)
                    
                    await gdbhsp()
                    await soy_gdbh_inf()



                }
            }
    
    
        }else{
            if (typeof $request !== "undefined") {
                gdbhck()
                
            } else {
                gdbhhdArr.push($.getdata('gdbhhd'))
                gdbhurlArr.push($.getdata('gdbhurl'))
                
                let gdbhcount = ($.getval('gdbhcount') || '1');
                for (let i = 2; i <= gdbhcount; i++) {
                    gdbhhdArr.push($.getdata(`gdbhhd${i}`))
                    gdbhurlArr.push($.getdata(`gdbhurl${i}`))
                    
                }
                console.log(
                `\n\n=== 脚本执行 - 北京时间(UTC+8)：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
            );
            console.log(`=== 共${gdbhhdArr.length}个账号 ===\n`)
            for (let i = 0; i < gdbhhdArr.length; i++) {
                if (gdbhhdArr[i]) {
                    gdbhhd = gdbhhdArr[i];
                    gdbhurl = gdbhurlArr[i];
                    id = gdbhurl.split('member_id=')[1].split('&')[0]
                    soy_gdbh_device = gdbhurl.split('platform=')[1].split('&')[0]
                    gdbhhd=JSON.parse(gdbhhd)
                    $.index = i + 1;
                    console.log(`\n【 果冻宝盒 账号${$.index} 】`)


                    await gdbhqd()
                    await $.wait(2000)
                    await gdbhsp()
                    await $.wait(2000)
                    await soy_gdbh_inf()




                }
            }
        }
        }
        message()
    })()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())



function gdbhck() {
    if ($request.url.indexOf("member_id") > -1 && $request.url.indexOf("signature") > -1) {
        const gdbhurl = $request.url
        if (gdbhurl) $.setdata(gdbhurl, `gdbhurl${status}`)
        $.log(gdbhurl)

        const gdbhhd = JSON.stringify($request.headers)
        if (gdbhhd) $.setdata(gdbhhd, `gdbhhd${status}`)
        $.log(gdbhhd)



        $.msg($.name, "", `果冻宝盒${status}headers获取成功`)

    }
}


//签到
function gdbhqd(timeout = 0) {
    return new Promise((resolve) => {
        times = Math.round(new Date().getTime()/1000).toString();
        sign = MD5_Encrypt(`member_id=${id}&platform=${soy_gdbh_device}&timestamp=${times}&${mm}`)

        let url = {
            url: `https://proxy.guodongbaohe.com/coins/checkin?member_id=${id}&platform=${soy_gdbh_device}&timestamp=${times}&signature=${sign}&`,
            headers: gdbhhd,
           
        }

        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                
                if (data.status == 0) {

                    console.log(`\n【签到结果】：${data.result}\n`)

                    $.message += `【签到结果】：${data.result}\n`

                } else {

                    console.log('\n' + data.result)
                }

            } catch (e) {

            } finally {
                resolve()
            }
        }, timeout)
    })
}



//视频
function gdbhsp(timeout = 0) {
    return new Promise((resolve) => {
        times = Math.round(new Date().getTime()/1000).toString();

        sign = MD5_Encrypt(`member_id=${id}&platform=${soy_gdbh_device}&timestamp=${times}&${mm}`)

        let url = {
            url: `https://proxy.guodongbaohe.com/coins/award?member_id=${id}&platform=${soy_gdbh_device}&timestamp=${times}&signature=${sign}&`,
            headers: gdbhhd,
        }

        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)

                if (data.status == 0) {
                    console.log(`\n【看视频金币】：${data.result}`)
                    $.message += `\n【看视频金币】：${data.result}`

                    await $.wait(Math.floor(Math.random() * (32000 - 28000 + 1000) + 28000))
                    await gdbhsp()
                } else {

                    console.log('\n' + data.result)
                }

            } catch (e) {

            } finally {
                resolve()
            }
        }, timeout)
    })
}

//用户信息
function soy_gdbh_inf(){
    times = Math.round(new Date().getTime()/1000).toString();
    sign = MD5_Encrypt(`member_id=${id}&platform=${soy_gdbh_device}&timestamp=${times}&${mm}`)
    return new Promise((resolve, reject) => {
        $.get({
            url:`https://proxy.guodongbaohe.com/coins/exchange_info?member_id=${id}&platform=${soy_gdbh_device}&timestamp=${times}&signature=${sign}&`,
            headers:gdbhhd,
            //body:'',
    }, async(error, response, data) => {
           try {
               //console.log(data)
               let result = JSON.parse(data)
               if(result.status==0){
                   credits=result.result.credits;
                   income=result.result.income
                   
                   if(credits>0){
                       await soy_gdbh_exchange()
                       await soy_gdbh_inf()
                   }
                   
                   if(Math.floor(income)>=5){
                       await soy_gdbh_apply()
                   }
               }else{
                  console.log(result.result) 
               }
               
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })
}

//兑换
function soy_gdbh_exchange(){
    times = Math.round(new Date().getTime()/1000).toString();
    sign = MD5_Encrypt(`credits=${credits}&member_id=${id}&platform=${soy_gdbh_device}&timestamp=${times}&${mm}`)
    console.log(credits)
    return new Promise((resolve, reject) => {
        $.get({
            url:`https://proxy.guodongbaohe.com/coins/exchange?credits=${credits}&member_id=${id}&platform=${soy_gdbh_device}&timestamp=${times}&signature=${sign}&`,
            headers:gdbhhd,
    }, async(error, response, data) => {
           try {
               //console.log(data)
               let result = JSON.parse(data)
               if(result.status==0){
                    console.log(`\n【兑换金币】：成功`)
                    $.message += `【兑换金币】：成功`
                   
               }else{
                  console.log(result.result) 
               }
               
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })
}

//提现
function soy_gdbh_apply(){
    times = Math.round(new Date().getTime()/1000).toString();
    sign = MD5_Encrypt(`member_id=${id}&money=${income}&platform=${soy_gdbh_device}&timestamp=${times}&${mm}`)
    return new Promise((resolve, reject) => {
        $.get({
            url:`https://proxy.guodongbaohe.com/wallet/apply?member_id=${id}&money=${income}&platform=${soy_gdbh_device}&timestamp=${times}&signature=${sign}&`,
            headers:gdbhhd,
            //body:'',
    }, async(error, response, data) => {
           try {
               //console.log(data)
               let result = JSON.parse(data)
               if(result.status==0){
                    console.log(`\n【提现】：成功`)
                    $.message += `【提现】：成功`
                   
               }else{
                  console.log(result.result) 
               }
               
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })
}

//MD5加密
function MD5_Encrypt(a) {
    function b(a, b) {
        return a << b | a >>> 32 - b
    }

    function c(a, b) {
        var c, d, e, f, g;
        return e = 2147483648 & a,
            f = 2147483648 & b,
            c = 1073741824 & a,
            d = 1073741824 & b,
            g = (1073741823 & a) + (1073741823 & b),
            c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f :
            g ^ e ^ f
    }

    function d(a, b, c) {
        return a & b | ~a & c
    }

    function e(a, b, c) {
        return a & c | b & ~c
    }

    function f(a, b, c) {
        return a ^ b ^ c
    }

    function g(a, b, c) {
        return b ^ (a | ~c)
    }

    function h(a, e, f, g, h, i, j) {
        return a = c(a, c(c(d(e, f, g), h), j)),
            c(b(a, i), e)
    }

    function i(a, d, f, g, h, i, j) {
        return a = c(a, c(c(e(d, f, g), h), j)),
            c(b(a, i), d)
    }

    function j(a, d, e, g, h, i, j) {
        return a = c(a, c(c(f(d, e, g), h), j)),
            c(b(a, i), d)
    }

    function k(a, d, e, f, h, i, j) {
        return a = c(a, c(c(g(d, e, f), h), j)),
            c(b(a, i), d)
    }

    function l(a) {
        for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i =
                0; c > i;)
            b = (i - i % 4) / 4,
            h = i % 4 * 8,
            g[b] = g[b] | a.charCodeAt(i) << h,
            i++;
        return b = (i - i % 4) / 4,
            h = i % 4 * 8,
            g[b] = g[b] | 128 << h,
            g[f - 2] = c << 3,
            g[f - 1] = c >>> 29,
            g
    }

    function m(a) {
        var b, c, d = "",
            e = "";
        for (c = 0; 3 >= c; c++)
            b = a >>> 8 * c & 255,
            e = "0" + b.toString(16),
            d += e.substr(e.length - 2, 2);
        return d
    }

    function n(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192),
                b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224),
                b += String.fromCharCode(d >> 6 & 63 | 128),
                b += String.fromCharCode(63 & d | 128))
        }
        return b
    }

    var o, p, q, r, s, t, u, v, w, x = [],
        y = 7,
        z = 12,
        A = 17,
        B = 22,
        C = 5,
        D = 9,
        E = 14,
        F = 20,
        G = 4,
        H = 11,
        I = 16,
        J = 23,
        K = 6,
        L = 10,
        M = 15,
        N = 21;
    for (a = n(a),
        x = l(a),
        t = 1732584193,
        u = 4023233417,
        v = 2562383102,
        w = 271733878,
        o = 0; o < x.length; o += 16)
        p = t,
        q = u,
        r = v,
        s = w,
        t = h(t, u, v, w, x[o + 0], y, 3614090360),
        w = h(w, t, u, v, x[o + 1], z, 3905402710),
        v = h(v, w, t, u, x[o + 2], A, 606105819),
        u = h(u, v, w, t, x[o + 3], B, 3250441966),
        t = h(t, u, v, w, x[o + 4], y, 4118548399),
        w = h(w, t, u, v, x[o + 5], z, 1200080426),
        v = h(v, w, t, u, x[o + 6], A, 2821735955),
        u = h(u, v, w, t, x[o + 7], B, 4249261313),
        t = h(t, u, v, w, x[o + 8], y, 1770035416),
        w = h(w, t, u, v, x[o + 9], z, 2336552879),
        v = h(v, w, t, u, x[o + 10], A, 4294925233),
        u = h(u, v, w, t, x[o + 11], B, 2304563134),
        t = h(t, u, v, w, x[o + 12], y, 1804603682),
        w = h(w, t, u, v, x[o + 13], z, 4254626195),
        v = h(v, w, t, u, x[o + 14], A, 2792965006),
        u = h(u, v, w, t, x[o + 15], B, 1236535329),
        t = i(t, u, v, w, x[o + 1], C, 4129170786),
        w = i(w, t, u, v, x[o + 6], D, 3225465664),
        v = i(v, w, t, u, x[o + 11], E, 643717713),
        u = i(u, v, w, t, x[o + 0], F, 3921069994),
        t = i(t, u, v, w, x[o + 5], C, 3593408605),
        w = i(w, t, u, v, x[o + 10], D, 38016083),
        v = i(v, w, t, u, x[o + 15], E, 3634488961),
        u = i(u, v, w, t, x[o + 4], F, 3889429448),
        t = i(t, u, v, w, x[o + 9], C, 568446438),
        w = i(w, t, u, v, x[o + 14], D, 3275163606),
        v = i(v, w, t, u, x[o + 3], E, 4107603335),
        u = i(u, v, w, t, x[o + 8], F, 1163531501),
        t = i(t, u, v, w, x[o + 13], C, 2850285829),
        w = i(w, t, u, v, x[o + 2], D, 4243563512),
        v = i(v, w, t, u, x[o + 7], E, 1735328473),
        u = i(u, v, w, t, x[o + 12], F, 2368359562),
        t = j(t, u, v, w, x[o + 5], G, 4294588738),
        w = j(w, t, u, v, x[o + 8], H, 2272392833),
        v = j(v, w, t, u, x[o + 11], I, 1839030562),
        u = j(u, v, w, t, x[o + 14], J, 4259657740),
        t = j(t, u, v, w, x[o + 1], G, 2763975236),
        w = j(w, t, u, v, x[o + 4], H, 1272893353),
        v = j(v, w, t, u, x[o + 7], I, 4139469664),
        u = j(u, v, w, t, x[o + 10], J, 3200236656),
        t = j(t, u, v, w, x[o + 13], G, 681279174),
        w = j(w, t, u, v, x[o + 0], H, 3936430074),
        v = j(v, w, t, u, x[o + 3], I, 3572445317),
        u = j(u, v, w, t, x[o + 6], J, 76029189),
        t = j(t, u, v, w, x[o + 9], G, 3654602809),
        w = j(w, t, u, v, x[o + 12], H, 3873151461),
        v = j(v, w, t, u, x[o + 15], I, 530742520),
        u = j(u, v, w, t, x[o + 2], J, 3299628645),
        t = k(t, u, v, w, x[o + 0], K, 4096336452),
        w = k(w, t, u, v, x[o + 7], L, 1126891415),
        v = k(v, w, t, u, x[o + 14], M, 2878612391),
        u = k(u, v, w, t, x[o + 5], N, 4237533241),
        t = k(t, u, v, w, x[o + 12], K, 1700485571),
        w = k(w, t, u, v, x[o + 3], L, 2399980690),
        v = k(v, w, t, u, x[o + 10], M, 4293915773),
        u = k(u, v, w, t, x[o + 1], N, 2240044497),
        t = k(t, u, v, w, x[o + 8], K, 1873313359),
        w = k(w, t, u, v, x[o + 15], L, 4264355552),
        v = k(v, w, t, u, x[o + 6], M, 2734768916),
        u = k(u, v, w, t, x[o + 13], N, 1309151649),
        t = k(t, u, v, w, x[o + 4], K, 4149444226),
        w = k(w, t, u, v, x[o + 11], L, 3174756917),
        v = k(v, w, t, u, x[o + 2], M, 718787259),
        u = k(u, v, w, t, x[o + 9], N, 3951481745),
        t = c(t, p),
        u = c(u, q),
        v = c(v, r),
        w = c(w, s);
    var O = m(t) + m(u) + m(v) + m(w);
    return O.toLowerCase()
}


//通知
function message() {
    if (tz == 1) {
        $.msg($.name, "", $.message)
    }
}
//随机
function RT(X, Y) {
    do rt = Math.floor(Math.random() * Y);
    while (rt < X)
    return rt;
}


//时间
function getCurrentDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + date.getHours() + seperator2 + date.getMinutes() +
        seperator2 + date.getSeconds();
    return currentdate;

}

//ENV模块
function Env(name, opts) {
    class Http {
        constructor(env) {
            this.env = env
        }
        send(opts, method = 'GET') {
            opts = typeof opts === 'string' ? {
                url: opts
            } : opts
            let sender = this.get
            if (method === 'POST') {
                sender = this.post
            }
            return new Promise((resolve, reject) => {
                sender.call(this, opts, (err, resp, body) => {
                    if (err) reject(err)
                    else resolve(resp)
                })
            })
        }
        get(opts) {
            return this.send.call(this.env, opts)
        }
        post(opts) {
            return this.send.call(this.env, opts, 'POST')
        }
    }
    return new(class {
        constructor(name, opts) {
            this.name = name
            this.http = new Http(this)
            this.data = null
            this.dataFile = 'box.dat'
            this.logs = []
            this.isMute = false
            this.isNeedRewrite = false
            this.logSeparator = '\n'
            this.startTime = new Date().getTime()
            Object.assign(this, opts)
            this.log('', `🔔${this.name
                }, 开始!`)
        }
        isNode() {
            return 'undefined' !== typeof module && !!module.exports
        }
        isQuanX() {
            return 'undefined' !== typeof $task
        }
        isSurge() {
            return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
        }
        isLoon() {
            return 'undefined' !== typeof $loon
        }
        isShadowrocket() {
            return 'undefined' !== typeof $rocket
        }
        toObj(str, defaultValue = null) {
            try {
                return JSON.parse(str)
            } catch {
                return defaultValue
            }
        }
        toStr(obj, defaultValue = null) {
            try {
                return JSON.stringify(obj)
            } catch {
                return defaultValue
            }
        }
        getjson(key, defaultValue) {
            let json = defaultValue
            const val = this.getdata(key)
            if (val) {
                try {
                    json = JSON.parse(this.getdata(key))
                } catch {}
            }
            return json
        }
        setjson(val, key) {
            try {
                return this.setdata(JSON.stringify(val), key)
            } catch {
                return false
            }
        }
        getScript(url) {
            return new Promise((resolve) => {
                this.get({
                    url
                }, (err, resp, body) => resolve(body))
            })
        }
        runScript(script, runOpts) {
            return new Promise((resolve) => {
                let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
                httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
                let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
                httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
                httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
                const [key, addr] = httpapi.split('@')
                const opts = {
                    url: `http: //${addr}/v1/scripting/evaluate`,
                    body: {
                        script_text: script,
                        mock_type: 'cron',
                        timeout: httpapi_timeout
                    },
                    headers: {
                        'X-Key': key,
                        'Accept': '*/*'
                    }
                }
                this.post(opts, (err, resp, body) => resolve(body))
            }).catch((e) => this.logErr(e))
        }
        loaddata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                if (isCurDirDataFile || isRootDirDataFile) {
                    const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
                    try {
                        return JSON.parse(this.fs.readFileSync(datPath))
                    } catch (e) {
                        return {}
                    }
                } else return {}
            } else return {}
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                const jsondata = JSON.stringify(this.data)
                if (isCurDirDataFile) {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                } else if (isRootDirDataFile) {
                    this.fs.writeFileSync(rootDirDataFilePath, jsondata)
                } else {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                }
            }
        }
        lodash_get(source, path, defaultValue = undefined) {
            const paths = path.replace(/[(d+)]/g, '.$1').split('.')
            let result = source
            for (const p of paths) {
                result = Object(result)[p]
                if (result === undefined) {
                    return defaultValue
                }
            }
            return result
        }
        lodash_set(obj, path, value) {
            if (Object(obj) !== obj) return obj
            if (!Array.isArray(path)) path = path.toString().match(/[^.[]]+/g) || []
            path
                .slice(0, -1)
                .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 ===
                    +path[i + 1] ? [] : {})), obj)[
                    path[path.length - 1]
                    ] = value
            return obj
        }
        getdata(key) {
            let val = this.getval(key)
            // 如果以 @
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?).(.*?)$/.exec(key)
                const objval = objkey ? this.getval(objkey) : ''
                if (objval) {
                    try {
                        const objedval = JSON.parse(objval)
                        val = objedval ? this.lodash_get(objedval, paths, '') : val
                    } catch (e) {
                        val = ''
                    }
                }
            }
            return val
        }
        setdata(val, key) {
            let issuc = false
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?).(.*?)$/.exec(key)
                const objdat = this.getval(objkey)
                const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
                try {
                    const objedval = JSON.parse(objval)
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                } catch (e) {
                    const objedval = {}
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                }
            } else {
                issuc = this.setval(val, key)
            }
            return issuc
        }
        getval(key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.read(key)
            } else if (this.isQuanX()) {
                return $prefs.valueForKey(key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                return this.data[key]
            } else {
                return (this.data && this.data[key]) || null
            }
        }
        setval(val, key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.write(val, key)
            } else if (this.isQuanX()) {
                return $prefs.setValueForKey(val, key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                this.data[key] = val
                this.writedata()
                return true
            } else {
                return (this.data && this.data[key]) || null
            }
        }
        initGotEnv(opts) {
            this.got = this.got ? this.got : require('got')
            this.cktough = this.cktough ? this.cktough : require('tough-cookie')
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
            if (opts) {
                opts.headers = opts.headers ? opts.headers : {}
                if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
                    opts.cookieJar = this.ckjar
                }
            }
        }
        get(opts, callback = () => {}) {
            if (opts.headers) {
                delete opts.headers['Content-Type']
                delete opts.headers['Content-Length']
            }
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient.get(opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                this.got(opts)
                    .on('redirect', (resp, nextOpts) => {
                        try {
                            if (resp.headers['set-cookie']) {
                                const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
                                if (ck) {
                                    this.ckjar.setCookieSync(ck, null)
                                }
                                nextOpts.cookieJar = this.ckjar
                            }
                        } catch (e) {
                            this.logErr(e)
                        }
                        // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
                    })
                    .then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body
                            } = resp
                            callback(null, {
                                status,
                                statusCode,
                                headers,
                                body
                            }, body)
                        },
                        (err) => {
                            const {
                                message: error,
                                response: resp
                            } = err
                            callback(error, resp, resp && resp.body)
                        }
                    )
            }
        }
        post(opts, callback = () => {}) {
            const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
            // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
            if (opts.body && opts.headers && !opts.headers['Content-Type']) {
                opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            }
            if (opts.headers) delete opts.headers['Content-Length']
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient[method](opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                opts.method = method
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                const {
                    url,
                    ..._opts
                } = opts
                this.got[method](url, _opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => {
                        const {
                            message: error,
                            response: resp
                        } = err
                        callback(error, resp, resp && resp.body)
                    }
                )
            }
        }
        /**
         *
         * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
         *    :$.time('yyyyMMddHHmmssS')
         *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
         *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
         * @param {string} fmt 格式化参数
         * @param {number} 可选: 根据指定时间戳返回格式化日期
         *
         */
        time(fmt, ts = null) {
            const date = ts ? new Date(ts) : new Date()
            let o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'H+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            }
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1
                .length))
            for (let k in o)
                if (new RegExp('(' + k + ')').test(fmt))
                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' +
                        o[k]).length))
            return fmt
        }
        /**
         * 系统通知
         *
         * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
         *
         * 示例:
         * $.msg(title, subt, desc, 'twitter://')
         * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         *
         * @param {*} title 标题
         * @param {*} subt 副标题
         * @param {*} desc 通知详情
         * @param {*} opts 通知参数
         *
         */
        msg(title = name, subt = '', desc = '', opts) {
            const toEnvOpts = (rawopts) => {
                if (!rawopts) return rawopts
                if (typeof rawopts === 'string') {
                    if (this.isLoon()) return rawopts
                    else if (this.isQuanX()) return {
                        'open-url': rawopts
                    }
                    else if (this.isSurge()) return {
                        url: rawopts
                    }
                    else return undefined
                } else if (typeof rawopts === 'object') {
                    if (this.isLoon()) {
                        let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
                        let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
                        return {
                            openUrl,
                            mediaUrl
                        }
                    } else if (this.isQuanX()) {
                        let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
                        let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
                        return {
                            'open-url': openUrl,
                            'media-url': mediaUrl
                        }
                    } else if (this.isSurge()) {
                        let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
                        return {
                            url: openUrl
                        }
                    }
                } else {
                    return undefined
                }
            }
            if (!this.isMute) {
                if (this.isSurge() || this.isLoon()) {
                    $notification.post(title, subt, desc, toEnvOpts(opts))
                } else if (this.isQuanX()) {
                    $notify(title, subt, desc, toEnvOpts(opts))
                }
            }
            if (!this.isMuteLog) {
                let logs = ['', '==============📣系统通知📣==============']
                logs.push(title)
                subt ? logs.push(subt) : ''
                desc ? logs.push(desc) : ''
                console.log(logs.join('\n'))
                this.logs = this.logs.concat(logs)
            }
        }
        log(...logs) {
            if (logs.length > 0) {
                this.logs = [...this.logs, ...logs]
            }
            console.log(logs.join(this.logSeparator))
        }
        logErr(err, msg) {
            const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
            if (!isPrintSack) {
                this.log('', `❗️${this.name
                }, 错误!`, err)
            } else {
                this.log('', `❗️${this.name
            }, 错误!`, err.stack)
            }
        }
        wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time))
        }
        done(val = {}) {
            const endTime = new Date().getTime()
            const costTime = (endTime - this.startTime) / 1000
            this.log('', `🔔${this.name
    }, 结束!🕛${costTime}秒`)
            this.log()
            if (this.isSurge() || this.isQuanX() || this.isLoon()) {
                $done(val)
            }
        }
    })(name, opts)
}