const axios = require('axios')
const notify = require('../../sendNotify')
const querystring = require('querystring');
const fs = require('fs');
const os = require('os')
const common = require('./common')

const body = '%7B%22action%22%3A%22to%22%2C%22to%22%3A%22https%253A%252F%252Fplogin.m.jd.com%252Fcgi-bin%252Fm%252Fthirdapp_auth_page%253Ftoken%253DAAEAIEijIw6wxF2s3bNKF0bmGsI8xfw6hkQT6Ui2QVP7z1Xg%2526client_type%253Dandroid%2526appid%253D879%2526appup_type%253D1%22%7D'
const clientVersion = '10.1.2'

let sign_params, tokenKey, pt_key, pt_pin, error_msg = '', username = ''
!(async () => {
    const wskeys = getWsKeys();
    if (wskeys.length) {
        console.log(wskeys)
        await getSign();
        if (!sign_params) {
            await notify.sendNotify('Update cookie', `获取签名参数错误：\n\n${e}`)
            process.exit(1)
        }
        console.log('签名参数：' + JSON.stringify(sign_params))
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
                        error_msg += `账号: ${username} wskey已失效`
                        console.log(`账号: ${username} wskey已失效`)
                    } else {
                        common.writeFile(pt_key, pt_pin, common.cookies_file)
                        console.log(`账号: ${username} 更新成功`)
                    }
                }
            } catch (e) {
                error_msg += `账号: ${username} 更新错误！！`
                console.log(`账号: ${username} 更新错误： ${e}`)
            }
        }
        if (error_msg) {
            await notify.sendNotify("appToken", error_msg, '', '你好，世界！')
        }
    }
})()


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

async function getSign() {
    if (process.env.JD_WSKEY_SIGN_URL) {
        await axios.post(process.env.JD_WSKEY_SIGN_URL, {
            uuid: randomString(16),
            functionId: "genToken",
            body: body,
            version: clientVersion
        }).then(res => {
            sign_params = res.data
        }).catch(e => {
            console.log(`获取签名参数错误: ${e}`)
        })
    } 
    if (!sign_params || !process.env.JD_WSKEY_SIGN_URL) {
        await axios.get('https://hellodns.coding.net/p/sign/d/jsign/git/raw/master/sign').then(res => {
            sign_params = res.data
        }).catch(e => {
            console.log(`获取签名参数错误: ${e}`)
        })
    }
}

async function appJmp() {
    let param = {
        'tokenKey': tokenKey,
        'to': 'https://plogin.m.jd.com/cgi-bin/m/thirdapp_auth_page?token=AAEAIEijIw6wxF2s3bNKF0bmGsI8xfw6hkQT6Ui2QVP7z1Xg',
        'client_type': 'android',
        'appid': 879,
        'appup_type': 1,
    }
    let url = `https://un.m.jd.com/cgi-bin/app/appjmp?${querystring.stringify(param)}`
    await axios.get(url,
        {
            maxRedirects: 0,
            headers: {
                'User-Agent': 'okhttp/3.12.1;jdmall;android;version/10.1.2;build/89743;screen/1440x3007;os/11;network/wifi;',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
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
    let param = {
        'functionId': 'genToken',
        'clientVersion': clientVersion,
        'client': 'android',
        'uuid': sign_params.uuid,
        'st': sign_params.st,
        'sign': sign_params.sign,
        'sv': sign_params.sv
    }
    let url = `https://api.m.jd.com/client.action?${querystring.stringify(param)}`
    let data = `body=${body}&`
    await axios.post(url, data,
        {
            headers: {
                'cookie': wskey,
                'User-Agent': 'okhttp/3.12.1;jdmall;android;version/10.1.2;build/89743;screen/1440x3007;os/11;network/wifi;',
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
            }
        })
        .catch(error => {
            console.log(error)
        })
}
