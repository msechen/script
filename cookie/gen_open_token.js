const axios = require('axios')
const notify = require('../../sendNotify')
const querystring = require('querystring');
const fs = require('fs');
const os = require('os')
const common = require('./common')

const body = '%7B%22to%22%3A%22https%253a%252f%252fplogin.m.jd.com%252fjd-mlogin%252fstatic%252fhtml%252fappjmp_blank.html%22%7D&'
let userAgent = ''

let tokenKey, pt_key, pt_pin, error_msg = '', username = '', signParams;
!(async () => {
    const wskeys = getWsKeys();
    if (wskeys.length) {
        console.log(wskeys)
        await axios.get(Buffer.from('aHR0cDovL2FwaS5tb21vZS5tbC9hcGkvY2hlY2tfYXBp', 'base64').toString(),
            {
                maxRedirects: 0,
                headers: {
                    "authorization": "Bearer Shizuku",
                    "User-Agent":"python-requests/2.27.1"
                }
            }
        ).then(async result => {
            userAgent = result.data['User-Agent']
            console.log(userAgent)
            await axios.get(Buffer.from('aHR0cDovL2FwaS5tb21vZS5tbC9hcGkvZ2VuVG9rZW4=', 'base64').toString(),
                {
                    maxRedirects: 0,
                    headers: {
                        'User-Agent': userAgent,
                    }
                }
            ).then(res => {
                signParams = res.data
            }).catch(async err => {
                console.log(`請求簽名參數錯誤： ${err}`)
                await notify.sendNotify('appToken', `获取签名参数错误：\n\n${err}`)
                process.exit(1)
            })
        }).catch(async err => {
            console.log(`請求user-agent錯誤： ${err}`)
            await notify.sendNotify('appToken', `获取签名参数错误：\n\n${err}`)
            process.exit(1)
        })

        console.log('签名参数：' + JSON.stringify(signParams))
        for (let i = 0; i < wskeys.length; i++) {
            if (wskeys[i] == "") {
                continue;
            }
            try {
                username = `${i + 1} ${wskeys[i].match(/(pin=[^;]*)/)[1]}`
                console.log(`开始获取open token: ${username}`)
                await genToken(wskeys[i])
                if (tokenKey) {
                    await appJmp()
                    if (pt_key.indexOf('fake') > -1) {
                        error_msg += `账号: ${username} wskey已失效\n`
                        console.log(`账号: ${username} wskey已失效`)
                    } else {
                        common.writeFile(pt_key, pt_pin, common.cookies_file)
                        console.log(`账号: ${username} 更新成功`)
                    }
                }
            } catch (e) {
                error_msg += `账号: ${username} 更新错误！！\n`
                console.log(`账号: ${username} 更新错误： ${e}`)
            }
        }
        if (error_msg) {
            await notify.sendNotify("appToken", error_msg, '', '你好，世界！')
        }
    }
    }
)
    ()


    function getWsKeys() {
        console.log(common.wskeys_file)
        return fs.readFileSync(common.wskeys_file, 'utf8').split(os.EOL)
    }

    function randomString(e) {
        e = e || 32;
        var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789",
            a = t.length,
            n = "";
        for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
        return n
    }

    async function appJmp() {
        let param = {
            'tokenKey': tokenKey,
            'to': 'https://plogin.m.jd.com/jd-mlogin/static/html/appjmp_blank.html'
        }
        let url = `https://un.m.jd.com/cgi-bin/app/appjmp?${querystring.stringify(param)}`
        await axios.get(url,
            {
                maxRedirects: 0,
                headers: {
                    'User-Agent': userAgent,
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                    'x-requested-with': 'com.jingdong.app.mall'
                }
            })
            .catch((error, request, response) => {
                if (error.response.status === 302) {
                    let cookie = JSON.stringify(error.response.headers['set-cookie'])
                    pt_key = cookie.match(/(pt_key=[^;]*)/)[1]
                    pt_pin = cookie.match(/(pt_pin=[^;]*)/)[1]
                } else {
                    console.log(error)
                }
            })
    }

    async function genToken(wskey) {

        let url = `https://api.m.jd.com/client.action?${querystring.stringify(signParams)}`
        let data = `body=${body}&`
        await axios.post(url, data,
            {
                headers: {
                    'cookie': wskey,
                    'User-Agent': userAgent,
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'charset': 'UTF-8',
                    'accept-encoding': 'br,gzip,deflate'
                }
            })
            .then(res => {
                if (res.data.code === '0') {
                    tokenKey = res.data.tokenKey
                } else {
                    tokenKey = ''
                    console.log(`Token key 獲取失敗`)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
