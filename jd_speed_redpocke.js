/*
京东极速版红包
自动提现微信现金

活动时间：2021-4-6至2021-5-5
活动地址：https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html
活动入口：京东极速版-领红包
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京东极速版红包
0 0 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js, tag=京东极速版红包, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

================Loon==============
[Script]
cron "0 0 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js,tag=京东极速版红包

===============Surge=================
京东极速版红包 = type=cron,cronexp="0 0 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js

============小火箭=========
京东极速版红包 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js, cronexpr="0 0 * * *", timeout=3600, enable=true
*/

const $ = new Env('京东极速版红包');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let cookiesArr = [], cookie = '', message;
const linkId = "AkOULcXbUA_8EAPbYLLMgg";



/*
 *Progcessed By JSDec in 0.61s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x150e95 => {
        cookiesArr['push'](jdCookieNode[_0x150e95]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x5bbcb3 => _0x5bbcb3['cookie'])]['filter'](_0x450b86 => !!_0x450b86);
}!(async () => {
    var _0xef74b8 = {
        'oLUra': '获得优惠券',
        'MdIDO': function(_0x29b9f2, _0x4db13f) {
            return _0x29b9f2 !== _0x4db13f;
        },
        'JQVzv': 'GgHZf',
        'SztuS': 'fjdNY',
        'vMwsj': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'qDGbl': 'https://bean.m.jd.com/bean/signIndex.action',
        'cfHSQ': function(_0xfc6a41, _0x467255) {
            return _0xfc6a41 < _0x467255;
        },
        'TmSOF': function(_0x1c5074, _0x18f4ca) {
            return _0x1c5074 !== _0x18f4ca;
        },
        'AxMVz': 'xfocT',
        'gjrUE': function(_0x146d2e, _0x3456a0) {
            return _0x146d2e(_0x3456a0);
        },
        'wiipQ': function(_0x8eb154, _0x324cd6) {
            return _0x8eb154 + _0x324cd6;
        },
        'fTmeu': function(_0x3bd866) {
            return _0x3bd866();
        },
        'vGWYi': function(_0x5da2b2) {
            return _0x5da2b2();
        }
    };
    if (!cookiesArr[0x0]) {
        if (_0xef74b8['MdIDO'](_0xef74b8['JQVzv'], _0xef74b8['SztuS'])) {
            $['msg']($['name'], _0xef74b8['vMwsj'], _0xef74b8['qDGbl'], {
                'open-url': _0xef74b8['qDGbl']
            });
            return;
        } else {
            console['log']('提现成功！');
            message += '提现成功！';
        }
    }
    for (let _0x3d5526 = 0x0; _0xef74b8['cfHSQ'](_0x3d5526, cookiesArr['length']); _0x3d5526++) {
        if (_0xef74b8['TmSOF'](_0xef74b8['AxMVz'], _0xef74b8['AxMVz'])) {
            console['log'](_0xef74b8['oLUra']);
        } else {
            if (cookiesArr[_0x3d5526]) {
                console['log']('\n如提示活动火爆,可再执行一次尝试\n');
                cookie = cookiesArr[_0x3d5526];
                $['UserName'] = _0xef74b8['gjrUE'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0xef74b8['wiipQ'](_0x3d5526, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                message = '';
                await _0xef74b8['fTmeu'](TotalBean);
                console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                if (!$['isLogin']) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0xef74b8['qDGbl']
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    }
                    continue;
                }
                await _0xef74b8['vGWYi'](jsRedPacket);
            }
        }
    }
})()['catch'](_0x1d9c23 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x1d9c23 + '!', '');
})['finally'](() => {
    $['done']();
});
async function jsRedPacket() {
    var _0x4a0613 = {
        'kuXDh': function(_0x2e5e3c, _0x2b4a81) {
            return _0x2e5e3c(_0x2b4a81);
        },
        'RfMhk': function(_0x18a0c5, _0x422e92) {
            return _0x18a0c5 !== _0x422e92;
        },
        'NwpXn': 'LxPsB',
        'NKbiB': function(_0x217e9c) {
            return _0x217e9c();
        },
        'pWQWt': function(_0x4d2b39, _0xebf2cf) {
            return _0x4d2b39 < _0xebf2cf;
        },
        'TDgcw': function(_0x180c1d) {
            return _0x180c1d();
        }
    };
    try {
        if (_0x4a0613['RfMhk'](_0x4a0613['NwpXn'], _0x4a0613['NwpXn'])) {
            _0x4a0613['kuXDh'](resolve, data);
        } else {
            await _0x4a0613['NKbiB'](invite);
            for (let _0x357ac4 = 0x0; _0x4a0613['pWQWt'](_0x357ac4, 0x3); ++_0x357ac4) {
                await _0x4a0613['TDgcw'](redPacket);
                await $['wait'](0x1f4);
            }
            await _0x4a0613['TDgcw'](getPacketList);
            await _0x4a0613['TDgcw'](showMsg);
        }
    } catch (_0x6007aa) {
        $['logErr'](_0x6007aa);
    }
}

function showMsg() {
    var _0x54bdb7 = {
        'ATwSE': function(_0x146671) {
            return _0x146671();
        }
    };
    return new Promise(_0x211626 => {
        if (message) $['msg']($['name'], '', '京东账号' + $['index'] + $['nickName'] + '\x0a' + message);
        _0x54bdb7['ATwSE'](_0x211626);
    });
}
async function redPacket() {
    var _0x165e7e = {
        'OuztT': function(_0x547dd9, _0x3a3d92) {
            return _0x547dd9(_0x3a3d92);
        },
        'onXvb': 'api.m.jd.com',
        'qEVKm': '*/*',
        'yhXWX': 'keep-alive',
        'mOfHW': './JS_USER_AGENTS',
        'BwAaT': 'JSUA',
        'FevmP': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'NVNaC': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'kgzAQ': 'gzip, deflate, br',
        'HyAmx': 'application/x-www-form-urlencoded',
        'gQded': 'https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html',
        'KWkVo': function(_0x21f81b, _0x273e24) {
            return _0x21f81b !== _0x273e24;
        },
        'wAVHz': 'tMMpB',
        'NeveD': 'XyhdQ',
        'FgPoa': function(_0x3e9c24, _0x2b37d5) {
            return _0x3e9c24(_0x2b37d5);
        },
        'mgnTu': function(_0x3fd2df, _0x5b36c0) {
            return _0x3fd2df === _0x5b36c0;
        },
        'ntIvO': 'aCbVR',
        'RqUCC': '获得优惠券',
        'KHQCx': 'WYCgw',
        'zvJPj': 'uISws',
        'Xjfaj': function(_0x18af8f, _0x3df35c) {
            return _0x18af8f(_0x3df35c);
        },
        'tMMCX': function(_0x265eef, _0x23a238, _0x48d210) {
            return _0x265eef(_0x23a238, _0x48d210);
        },
        'HAhJL': 'spring_reward_receive',
        'BVAbG': 'QjbG7npj44R73JIjks18BQ',
        'LOpTk': 'cm56tNtI6Wp-BMwsuR6FyXjHnoIMIapaw7Ql0pR0zus',
        'wYwhw': function(_0x1f26f1, _0x381e99) {
            return _0x1f26f1 * _0x381e99;
        }
    };
    return new Promise(_0x2bfda7 => {
        var _0x101694 = {
            'WRKtO': function(_0x276c77, _0xe2341b) {
                return _0x165e7e['OuztT'](_0x276c77, _0xe2341b);
            },
            'npxaa': _0x165e7e['onXvb'],
            'WHrXR': _0x165e7e['qEVKm'],
            'UuCLg': _0x165e7e['yhXWX'],
            'ELPgh': _0x165e7e['mOfHW'],
            'xNPro': _0x165e7e['BwAaT'],
            'scKkt': _0x165e7e['FevmP'],
            'neFYb': _0x165e7e['NVNaC'],
            'ShsTG': _0x165e7e['kgzAQ'],
            'IUmlG': _0x165e7e['HyAmx'],
            'SaKMv': _0x165e7e['gQded'],
            'jyBJd': function(_0x4f83a2, _0x4db746) {
                return _0x165e7e['KWkVo'](_0x4f83a2, _0x4db746);
            },
            'VXGYK': _0x165e7e['wAVHz'],
            'pukrm': _0x165e7e['NeveD'],
            'xsFfF': function(_0x411d1e, _0x2651ef) {
                return _0x165e7e['FgPoa'](_0x411d1e, _0x2651ef);
            },
            'jiRbT': function(_0x4c092f, _0x39b7de) {
                return _0x165e7e['mgnTu'](_0x4c092f, _0x39b7de);
            },
            'HWhdX': _0x165e7e['ntIvO'],
            'yjLml': function(_0x539ead, _0x3c7c1a) {
                return _0x165e7e['mgnTu'](_0x539ead, _0x3c7c1a);
            },
            'mlxDD': function(_0x22928b, _0x2ee878) {
                return _0x165e7e['KWkVo'](_0x22928b, _0x2ee878);
            },
            'yAfal': _0x165e7e['RqUCC'],
            'eWTnU': _0x165e7e['KHQCx'],
            'qpmXX': _0x165e7e['zvJPj'],
            'PEIRk': function(_0x39e0ea, _0x34638e) {
                return _0x165e7e['Xjfaj'](_0x39e0ea, _0x34638e);
            }
        };
        $['get'](_0x165e7e['tMMCX'](taskGetUrl, _0x165e7e['HAhJL'], {
            'inviter': [_0x165e7e['BVAbG'], _0x165e7e['LOpTk']][Math['floor'](_0x165e7e['wYwhw'](Math['random'](), 0x2))],
            'linkId': linkId
        }), async (_0x3aba0b, _0x31b987, _0xad438f) => {
            if (_0x101694['jyBJd'](_0x101694['VXGYK'], _0x101694['pukrm'])) {
                try {
                    if (_0x3aba0b) {
                        console['log']('' + JSON['stringify'](_0x3aba0b));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x101694['xsFfF'](safeGet, _0xad438f)) {
                            if (_0x101694['jiRbT'](_0x101694['HWhdX'], _0x101694['HWhdX'])) {
                                _0xad438f = JSON['parse'](_0xad438f);
                                if (_0x101694['yjLml'](_0xad438f['code'], 0x0)) {
                                    if (_0x101694['mlxDD'](_0xad438f['data']['received']['prizeType'], 0x1)) {
                                        message += '获得' + _0xad438f['data']['received']['prizeDesc'] + '\x0a';
                                        console['log']('获得' + _0xad438f['data']['received']['prizeDesc']);
                                    } else {
                                        console['log'](_0x101694['yAfal']);
                                    }
                                } else {
                                    console['log'](_0xad438f['errMsg']);
                                }
                            } else {
                                $['done']();
                            }
                        }
                    }
                } catch (_0x1a2810) {
                    if (_0x101694['yjLml'](_0x101694['eWTnU'], _0x101694['qpmXX'])) {
                        return {
                            'url': 'https://api.m.jd.com/?appid=activities_platform&functionId=' + function_id + '&body=' + _0x101694['WRKtO'](escape, JSON['stringify'](body)) + '&t=' + +new Date(),
                            'headers': {
                                'Cookie': cookie,
                                'Host': _0x101694['npxaa'],
                                'Accept': _0x101694['WHrXR'],
                                'Connection': _0x101694['UuCLg'],
                                'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x101694['WRKtO'](require, _0x101694['ELPgh'])['USER_AGENT'] : $['getdata'](_0x101694['xNPro']) ? $['getdata'](_0x101694['xNPro']) : _0x101694['scKkt'],
                                'Accept-Language': _0x101694['neFYb'],
                                'Accept-Encoding': _0x101694['ShsTG'],
                                'Content-Type': _0x101694['IUmlG'],
                                'referer': _0x101694['SaKMv']
                            }
                        };
                    } else {
                        $['logErr'](_0x1a2810, _0x31b987);
                    }
                } finally {
                    _0x101694['PEIRk'](_0x2bfda7, _0xad438f);
                }
            } else {
                $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + e + '!', '');
            }
        });
    });
}

function getPacketList() {
    var _0x2c51a0 = {
        'vAgud': function(_0x3fdf04) {
            return _0x3fdf04();
        },
        'sQFKp': function(_0x450ff3, _0x298997) {
            return _0x450ff3(_0x298997);
        },
        'FDijG': 'data',
        'PTwYE': 'message',
        'ILZBG': 'CookieJD',
        'EmqSm': 'CookieJD2',
        'UKIBu': 'CookiesJD',
        'oZSEp': function(_0x5539b4, _0x5b1fbd) {
            return _0x5539b4 === _0x5b1fbd;
        },
        'Udkbk': 'jXTAH',
        'CnXwB': 'MlCHd',
        'soWTT': 'ApHIT',
        'LuwHb': function(_0x552564, _0x11844b) {
            return _0x552564 !== _0x11844b;
        },
        'lkKct': 'aMupm',
        'TsCWi': 'KszTG',
        'HDicr': function(_0xedebb3, _0x1b7ae1) {
            return _0xedebb3 === _0x1b7ae1;
        },
        'ghXkB': 'NWlqB',
        'iKkBD': 'dkrWv',
        'PWggd': function(_0x4fbebf, _0x491a9b) {
            return _0x4fbebf === _0x491a9b;
        },
        'PVblT': 'XbBXn',
        'tLYMk': function(_0x45bd3e, _0x9429a5, _0x1f7752, _0x2cb5dc, _0x2158c7) {
            return _0x45bd3e(_0x9429a5, _0x1f7752, _0x2cb5dc, _0x2158c7);
        },
        'saUws': 'VERGa',
        'xJcOY': 'qqxFJ',
        'FgQVm': 'QJrLt',
        'ruBQF': 'QcvVb',
        'KybBq': function(_0x4a71de, _0x1aa6f2) {
            return _0x4a71de(_0x1aa6f2);
        },
        'SezdA': 'OzxRH',
        'PyNbb': function(_0x234eb3, _0x803735, _0x4dadc7) {
            return _0x234eb3(_0x803735, _0x4dadc7);
        },
        'vrNRM': 'spring_reward_list'
    };
    return new Promise(_0x4954d3 => {
        var _0x187b87 = {
            'VEEkg': function(_0x423a32) {
                return _0x2c51a0['vAgud'](_0x423a32);
            },
            'ZCeXr': function(_0x24feb7, _0x13fe5f) {
                return _0x2c51a0['sQFKp'](_0x24feb7, _0x13fe5f);
            },
            'xEakS': _0x2c51a0['FDijG'],
            'POPFT': _0x2c51a0['PTwYE'],
            'HZnNP': _0x2c51a0['ILZBG'],
            'CHghx': _0x2c51a0['EmqSm'],
            'otYer': _0x2c51a0['UKIBu'],
            'CjReV': function(_0x250970, _0x1314bf) {
                return _0x2c51a0['oZSEp'](_0x250970, _0x1314bf);
            },
            'dkAZn': _0x2c51a0['Udkbk'],
            'ojHYb': _0x2c51a0['CnXwB'],
            'WaeLU': _0x2c51a0['soWTT'],
            'OJicY': function(_0x3d974d, _0x3f9fcd) {
                return _0x2c51a0['LuwHb'](_0x3d974d, _0x3f9fcd);
            },
            'rjrMw': _0x2c51a0['lkKct'],
            'ijfrX': _0x2c51a0['TsCWi'],
            'KBalg': function(_0xe048fa, _0x3b0a35) {
                return _0x2c51a0['HDicr'](_0xe048fa, _0x3b0a35);
            },
            'rOaXg': _0x2c51a0['ghXkB'],
            'cwPlQ': _0x2c51a0['iKkBD'],
            'Gykxt': function(_0x31bad3, _0x2d45e8) {
                return _0x2c51a0['PWggd'](_0x31bad3, _0x2d45e8);
            },
            'gVlbw': _0x2c51a0['PVblT'],
            'ocOfE': function(_0x20a0fb, _0x1d55c0, _0x44e1b2, _0x4b020e, _0x56414d) {
                return _0x2c51a0['tLYMk'](_0x20a0fb, _0x1d55c0, _0x44e1b2, _0x4b020e, _0x56414d);
            },
            'iKdsw': function(_0x3cd8a1, _0x7d3408) {
                return _0x2c51a0['LuwHb'](_0x3cd8a1, _0x7d3408);
            },
            'ZKFmX': _0x2c51a0['saUws'],
            'orIec': _0x2c51a0['xJcOY'],
            'xNyqD': _0x2c51a0['FgQVm'],
            'HucTy': _0x2c51a0['ruBQF'],
            'LSXfI': function(_0x465260, _0x4ff310) {
                return _0x2c51a0['KybBq'](_0x465260, _0x4ff310);
            }
        };
        if (_0x2c51a0['LuwHb'](_0x2c51a0['SezdA'], _0x2c51a0['SezdA'])) {
            if (message) $['msg']($['name'], '', '京东账号' + $['index'] + $['nickName'] + '\x0a' + message);
            _0x187b87['VEEkg'](_0x4954d3);
        } else {
            $['get'](_0x2c51a0['PyNbb'](taskGetUrl, _0x2c51a0['vrNRM'], {
                'pageNum': 0x1,
                'pageSize': 0x64,
                'linkId': linkId,
                'inviter': ''
            }), async (_0x552fe0, _0x9bf4ac, _0x5c0bb4) => {
                try {
                    if (_0x552fe0) {
                        if (_0x187b87['CjReV'](_0x187b87['dkAZn'], _0x187b87['ojHYb'])) {
                            console['log']('' + JSON['stringify'](_0x552fe0));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            console['log']('' + JSON['stringify'](_0x552fe0));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        if (_0x187b87['CjReV'](_0x187b87['WaeLU'], _0x187b87['WaeLU'])) {
                            if (_0x187b87['ZCeXr'](safeGet, _0x5c0bb4)) {
                                if (_0x187b87['OJicY'](_0x187b87['rjrMw'], _0x187b87['ijfrX'])) {
                                    _0x5c0bb4 = JSON['parse'](_0x5c0bb4);
                                    if (_0x187b87['KBalg'](_0x5c0bb4['code'], 0x0)) {
                                        if (_0x187b87['OJicY'](_0x187b87['rOaXg'], _0x187b87['cwPlQ'])) {
                                            for (let _0x4babc9 of _0x5c0bb4['data']['items']['filter'](_0x1fbc3c => _0x1fbc3c['prizeType'] === 0x4)) {
                                                if (_0x187b87['Gykxt'](_0x187b87['gVlbw'], _0x187b87['gVlbw'])) {
                                                    if (_0x187b87['Gykxt'](_0x4babc9['state'], 0x0)) {
                                                        console['log']('去提现' + _0x4babc9['amount'] + '微信现金');
                                                        message += '提现' + _0x4babc9['amount'] + '微信现金，';
                                                        await _0x187b87['ocOfE'](cashOut, _0x4babc9['id'], _0x4babc9['poolBaseId'], _0x4babc9['prizeGroupId'], _0x4babc9['prizeBaseId']);
                                                    }
                                                } else {
                                                    _0x187b87['ZCeXr'](_0x4954d3, _0x5c0bb4);
                                                }
                                            }
                                        } else {
                                            console['log']('提现失败：' + _0x5c0bb4[_0x187b87['xEakS']][_0x187b87['POPFT']]);
                                            message += '提现失败：' + _0x5c0bb4[_0x187b87['xEakS']][_0x187b87['POPFT']];
                                        }
                                    } else {
                                        if (_0x187b87['iKdsw'](_0x187b87['ZKFmX'], _0x187b87['orIec'])) {
                                            console['log'](_0x5c0bb4['errMsg']);
                                        } else {
                                            $['logErr'](e, _0x9bf4ac);
                                        }
                                    }
                                } else {
                                    cookiesArr = [$['getdata'](_0x187b87['HZnNP']), $['getdata'](_0x187b87['CHghx']), ..._0x187b87['ZCeXr'](jsonParse, $['getdata'](_0x187b87['otYer']) || '[]')['map'](_0x35e91d => _0x35e91d['cookie'])]['filter'](_0x3aa305 => !!_0x3aa305);
                                }
                            }
                        } else {
                            cookiesArr['push'](jdCookieNode[item]);
                        }
                    }
                } catch (_0x4c6c82) {
                    if (_0x187b87['Gykxt'](_0x187b87['xNyqD'], _0x187b87['HucTy'])) {
                        console['log'](_0x5c0bb4['errMsg']);
                    } else {
                        $['logErr'](_0x4c6c82, _0x9bf4ac);
                    }
                } finally {
                    _0x187b87['LSXfI'](_0x4954d3, _0x5c0bb4);
                }
            });
        }
    });
}

function cashOut(_0x3d281c, _0x2184ff, _0x4056d1, _0x1a2cfe) {
    var _0x1945e0 = {
        'jjozS': function(_0x561641, _0x39a9dd) {
            return _0x561641 !== _0x39a9dd;
        },
        'iCYgN': '获得优惠券',
        'mTnoh': function(_0x3cea2d, _0x134f17) {
            return _0x3cea2d === _0x134f17;
        },
        'rjGJT': 'ggcak',
        'TUvPR': 'IpEhM',
        'VYeRQ': function(_0x41dccd, _0x1d1da0) {
            return _0x41dccd === _0x1d1da0;
        },
        'lMyxJ': 'toyKo',
        'TDFxR': 'SHjvd',
        'MdRlg': function(_0x5c9df2, _0x520026) {
            return _0x5c9df2(_0x520026);
        },
        'rFLUc': function(_0x547bc2, _0x2503ee) {
            return _0x547bc2 !== _0x2503ee;
        },
        'bnbGW': 'nkMYT',
        'QuBTT': 'data',
        'oydBQ': 'status',
        'TMDHP': '310',
        'mVyuv': 'hUfaz',
        'wCkBS': 'vSPOe',
        'RmBMU': 'message',
        'vJICV': 'errMsg',
        'qtmTB': function(_0x41d552, _0x2cd132) {
            return _0x41d552 !== _0x2cd132;
        },
        'zCXkY': 'WByhe',
        'RWjvf': 'false',
        'QXgcz': function(_0x3e9c1e, _0x4d8880) {
            return _0x3e9c1e > _0x4d8880;
        },
        'hnhEs': 'GITHUB',
        'JNqFy': function(_0x40b168, _0x2ca933) {
            return _0x40b168 === _0x2ca933;
        },
        'QRXch': 'DFdjA',
        'TdmPf': function(_0x10af9b, _0x214839, _0x46f2a1) {
            return _0x10af9b(_0x214839, _0x46f2a1);
        },
        'ZZGQZ': 'apCashWithDraw',
        'yMfHg': 'SPRING_FESTIVAL_RED_ENVELOPE'
    };
    let _0x18ebcb = {
        'businessSource': _0x1945e0['yMfHg'],
        'base': {
            'id': _0x3d281c,
            'business': null,
            'poolBaseId': _0x2184ff,
            'prizeGroupId': _0x4056d1,
            'prizeBaseId': _0x1a2cfe,
            'prizeType': 0x4
        },
        'linkId': linkId,
        'inviter': ''
    };
    return new Promise(_0x28c662 => {
        var _0x1ed5ff = {
            'OUfhG': function(_0x4fdc12, _0x4b0f04) {
                return _0x1945e0['VYeRQ'](_0x4fdc12, _0x4b0f04);
            },
            'cYFka': _0x1945e0['QuBTT'],
            'pUEle': _0x1945e0['oydBQ'],
            'hWHGc': _0x1945e0['TMDHP'],
            'pPBJo': _0x1945e0['RmBMU'],
            'qWgOv': function(_0x5498ca, _0x2a4f48) {
                return _0x1945e0['MdRlg'](_0x5498ca, _0x2a4f48);
            },
            'aAZOi': _0x1945e0['RWjvf'],
            'kjIFy': function(_0x34b9d9, _0x4471c7) {
                return _0x1945e0['QXgcz'](_0x34b9d9, _0x4471c7);
            },
            'wIoVP': _0x1945e0['hnhEs']
        };
        if (_0x1945e0['JNqFy'](_0x1945e0['QRXch'], _0x1945e0['QRXch'])) {
            $['post'](_0x1945e0['TdmPf'](taskPostUrl, _0x1945e0['ZZGQZ'], _0x18ebcb), async (_0x533310, _0xb69073, _0x364a1a) => {
                var _0x1c545a = {
                    'nNdPB': function(_0x43f529, _0x139b58) {
                        return _0x1945e0['jjozS'](_0x43f529, _0x139b58);
                    },
                    'DYPua': _0x1945e0['iCYgN']
                };
                try {
                    if (_0x533310) {
                        if (_0x1945e0['mTnoh'](_0x1945e0['rjGJT'], _0x1945e0['TUvPR'])) {
                            if (_0x1ed5ff['OUfhG'](_0x364a1a[_0x1ed5ff['cYFka']][_0x1ed5ff['pUEle']], _0x1ed5ff['hWHGc'])) {
                                console['log']('提现成功！');
                                message += '提现成功！';
                            } else {
                                console['log']('提现失败：' + _0x364a1a[_0x1ed5ff['cYFka']][_0x1ed5ff['pPBJo']]);
                                message += '提现失败：' + _0x364a1a[_0x1ed5ff['cYFka']][_0x1ed5ff['pPBJo']];
                            }
                        } else {
                            console['log']('' + JSON['stringify'](_0x533310));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        if (_0x1945e0['VYeRQ'](_0x1945e0['lMyxJ'], _0x1945e0['TDFxR'])) {
                            _0x1ed5ff['qWgOv'](_0x28c662, _0x364a1a);
                        } else {
                            if (_0x1945e0['MdRlg'](safeGet, _0x364a1a)) {
                                if (_0x1945e0['rFLUc'](_0x1945e0['bnbGW'], _0x1945e0['bnbGW'])) {
                                    if (_0x1c545a['nNdPB'](_0x364a1a['data']['received']['prizeType'], 0x1)) {
                                        message += '获得' + _0x364a1a['data']['received']['prizeDesc'] + '\x0a';
                                        console['log']('获得' + _0x364a1a['data']['received']['prizeDesc']);
                                    } else {
                                        console['log'](_0x1c545a['DYPua']);
                                    }
                                } else {
                                    console['log']('提现零钱结果：' + _0x364a1a);
                                    _0x364a1a = JSON['parse'](_0x364a1a);
                                    if (_0x1945e0['VYeRQ'](_0x364a1a['code'], 0x0)) {
                                        if (_0x1945e0['VYeRQ'](_0x364a1a[_0x1945e0['QuBTT']][_0x1945e0['oydBQ']], _0x1945e0['TMDHP'])) {
                                            if (_0x1945e0['rFLUc'](_0x1945e0['mVyuv'], _0x1945e0['mVyuv'])) {
                                                console['log']('' + JSON['stringify'](_0x533310));
                                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                                            } else {
                                                console['log']('提现成功！');
                                                message += '提现成功！';
                                            }
                                        } else {
                                            if (_0x1945e0['rFLUc'](_0x1945e0['wCkBS'], _0x1945e0['wCkBS'])) {
                                                console['log']('' + JSON['stringify'](_0x533310));
                                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                                            } else {
                                                console['log']('提现失败：' + _0x364a1a[_0x1945e0['QuBTT']][_0x1945e0['RmBMU']]);
                                                message += '提现失败：' + _0x364a1a[_0x1945e0['QuBTT']][_0x1945e0['RmBMU']];
                                            }
                                        }
                                    } else {
                                        console['log']('提现异常：' + _0x364a1a[_0x1945e0['vJICV']]);
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x3d7e7b) {
                    if (_0x1945e0['qtmTB'](_0x1945e0['zCXkY'], _0x1945e0['zCXkY'])) {
                        Object['keys'](jdCookieNode)['forEach'](_0x41113f => {
                            cookiesArr['push'](jdCookieNode[_0x41113f]);
                        });
                        if (process['env']['JD_DEBUG'] && _0x1ed5ff['OUfhG'](process['env']['JD_DEBUG'], _0x1ed5ff['aAZOi'])) console['log'] = () => {};
                        if (_0x1ed5ff['kjIFy'](JSON['stringify'](process['env'])['indexOf'](_0x1ed5ff['wIoVP']), -0x1)) process['exit'](0x0);
                    } else {
                        $['logErr'](_0x3d7e7b, _0xb69073);
                    }
                } finally {
                    _0x1945e0['MdRlg'](_0x28c662, _0x364a1a);
                }
            });
        } else {
            message += '获得' + data['data']['received']['prizeDesc'] + '\x0a';
            console['log']('获得' + data['data']['received']['prizeDesc']);
        }
    });
}

function invite() {
    var _0x4678f7 = {
        'WOhOb': 'sMWcZ7TKaEBlU//QsVkItw==',
        'KneHi': 'sMWcZ7TKaEBlU%2F%2FQsVkItw%3D%3D',
        'ZsJlt': 'X6BLtZKxx%2BikABCqvZBocS5IRQlTziSkNyv4iNJVUFI%3D',
        'bQQVF': 'X6BLtZKxx%2BikABCqvZBocS5IRQlTziSkNyv4iNJVUFI%3D',
        'ULrsi': 'X6BLtZKxx+ikABCqvZBocS5IRQlTziSkNyv4iNJVUFI=',
        'dGiHQ': 'sMWcZ7TKaEBlU//QsVkItw==',
        'irVez': function(_0x5586da, _0x48479f) {
            return _0x5586da * _0x48479f;
        },
        'XXHTo': 'api.m.jd.com',
        'chFwY': 'application/json, text/plain, */*',
        'STemN': 'application/x-www-form-urlencoded',
        'bbTtj': 'https://invite-reward.jd.com',
        'EGTns': 'zh-cn',
        'MPuGU': function(_0x17dd1e, _0x26595c) {
            return _0x17dd1e(_0x26595c);
        },
        'OCBHx': './JS_USER_AGENTS',
        'YmfAU': 'JSUA',
        'GNlcp': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'eNBZY': 'https://invite-reward.jd.com/'
    };
    let _0xe3e101 = +new Date();
    let _0x4dda6b = [_0x4678f7['WOhOb'], _0x4678f7['KneHi'], _0x4678f7['ZsJlt'], _0x4678f7['bQQVF'], _0x4678f7['ULrsi'], _0x4678f7['dGiHQ']][Math['floor'](_0x4678f7['irVez'](Math['random'](), 0x6))];
    var _0x123525 = {
        'Host': _0x4678f7['XXHTo'],
        'accept': _0x4678f7['chFwY'],
        'content-type': _0x4678f7['STemN'],
        'origin': _0x4678f7['bbTtj'],
        'accept-language': _0x4678f7['EGTns'],
        'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x4678f7['MPuGU'](require, _0x4678f7['OCBHx'])['USER_AGENT'] : $['getdata'](_0x4678f7['YmfAU']) ? $['getdata'](_0x4678f7['YmfAU']) : _0x4678f7['GNlcp'],
        'referer': _0x4678f7['eNBZY'],
        'Cookie': cookie
    };
    var _0x58bf30 = 'functionId=InviteFriendApiService&body={"method":"attendInviteActivity","data":{"inviterPin":"' + _0x4678f7['MPuGU'](encodeURIComponent, _0x4dda6b) + '","channel":1,"token":"","frontendInitStatus":""}}&referer=-1&eid=eidIf3dd8121b7sdmiBLGdxRR46OlWyh62kFAZogTJFnYqqRkwgr63%2BdGmMlcv7EQJ5v0HBic81xHXzXLwKM6fh3i963zIa7Ym2v5ehnwo2B7uDN92Q0&aid=&client=ios&clientVersion=14.4&networkType=wifi&fp=-1&appid=market-task-h5&_t=' + _0xe3e101;
    var _0x2866b3 = {
        'url': 'https://api.m.jd.com/?t=' + +new Date(),
        'headers': _0x123525,
        'body': _0x58bf30
    };
    $['post'](_0x2866b3, (_0x2bed6f, _0xbe08d4, _0x43a12c) => {});
}

function taskPostUrl(_0x42d8f2, _0x4acb4e) {
    var _0x49bff8 = {
        'iaCVp': function(_0x25740a, _0x2790e3) {
            return _0x25740a(_0x2790e3);
        },
        'isLSh': 'api.m.jd.com',
        'RxCpO': '*/*',
        'sHYrX': 'keep-alive',
        'huWME': 'jdltapp;iPhone;3.3.2;14.3;b488010ad24c40885d846e66931abaf532ed26a5;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/2005183373;hasOCPay/0;appBuild/1049;supportBestPay/0;pv/220.46;apprpd/;ref/JDLTSubMainPageViewController;psq/0;ads/;psn/b488010ad24c40885d846e66931abaf532ed26a5|520;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1618673222002|1618673227;adk/;app_device/IOS;pap/JA2020_3112531|3.3.2|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1 ',
        'QGcsY': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'kmIwc': 'gzip, deflate, br',
        'SWwgw': 'application/x-www-form-urlencoded',
        'inKlE': 'https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html'
    };
    return {
        'url': 'https://api.m.jd.com/',
        'body': 'appid=activities_platform&functionId=' + _0x42d8f2 + '&body=' + _0x49bff8['iaCVp'](escape, JSON['stringify'](_0x4acb4e)) + '&t=' + +new Date(),
        'headers': {
            'Cookie': cookie,
            'Host': _0x49bff8['isLSh'],
            'Accept': _0x49bff8['RxCpO'],
            'Connection': _0x49bff8['sHYrX'],
            'user-agent': _0x49bff8['huWME'],
            'Accept-Language': _0x49bff8['QGcsY'],
            'Accept-Encoding': _0x49bff8['kmIwc'],
            'Content-Type': _0x49bff8['SWwgw'],
            'referer': _0x49bff8['inKlE']
        }
    };
}

function taskGetUrl(_0x29184a, _0x3674d2) {
    var _0x30b57b = {
        'TycHD': function(_0x32b0f4, _0x1ddcd7) {
            return _0x32b0f4(_0x1ddcd7);
        },
        'AUWKa': 'api.m.jd.com',
        'nGIKy': '*/*',
        'ilcWo': 'keep-alive',
        'foQPE': './JS_USER_AGENTS',
        'RAfED': 'JSUA',
        'CshqR': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'Dnfsd': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'qsvdy': 'gzip, deflate, br',
        'NRJCk': 'application/x-www-form-urlencoded',
        'JuoDZ': 'https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html'
    };
    return {
        'url': 'https://api.m.jd.com/?appid=activities_platform&functionId=' + _0x29184a + '&body=' + _0x30b57b['TycHD'](escape, JSON['stringify'](_0x3674d2)) + '&t=' + +new Date(),
        'headers': {
            'Cookie': cookie,
            'Host': _0x30b57b['AUWKa'],
            'Accept': _0x30b57b['nGIKy'],
            'Connection': _0x30b57b['ilcWo'],
            'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x30b57b['TycHD'](require, _0x30b57b['foQPE'])['USER_AGENT'] : $['getdata'](_0x30b57b['RAfED']) ? $['getdata'](_0x30b57b['RAfED']) : _0x30b57b['CshqR'],
            'Accept-Language': _0x30b57b['Dnfsd'],
            'Accept-Encoding': _0x30b57b['qsvdy'],
            'Content-Type': _0x30b57b['NRJCk'],
            'referer': _0x30b57b['JuoDZ']
        }
    };
};
_0xodY = 'jsjiami.com.v6'



function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            if (data['retcode'] === 0) {
              $.nickName = (data['base'] && data['base'].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName
            }
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
