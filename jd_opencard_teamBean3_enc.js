/*

第一个账号助力我 其他依次助力CK1
第一个CK失效应该全都会助力我，亲注意一下
入口复制到jd：
24.0复制整段话 Http:/J5XEkJPQyzhN8q 大牌联合送福利，联合开卡得京豆，百万京豆等您抢，数量有限，先到先得！￥y1v3J7mA2b￥大家买买买都→猄栋

更新地址：https://github.com/Tsukasa007/my_script
============Quantumultx===============
[task_local]
#8.11 组队瓜分京豆
44 0,10 * * * jd_opencard_teamBean3_enc.js, tag=8.11 组队瓜分京豆, img-url=https://raw.githubusercontent.com/tsukasa007/icon/master/jd_opencard_teamBean3_enc.png, enabled=true

================Loon==============
[Script]
cron "44 0,10 * * *" script-path=jd_opencard_teamBean3_enc.js,tag=8.11 组队瓜分京豆

===============Surge=================
8.11 组队瓜分京豆 = type=cron,cronexp="44 0,10 * * *",wake-system=1,timeout=3600,script-path=jd_opencard_teamBean3_enc.js

============小火箭=========
8.11 组队瓜分京豆 = type=cron,script-path=jd_opencard_teamBean3_enc.js, cronexpr="44 0,10 * * *", timeout=3600, enable=true
*/
const $ = new Env('8.11 组队瓜分京豆');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
/*
 *Progcessed By JSDec in 1.49s
 *JSDec - JSDec.js.org
 */
let UA = require('./USER_AGENTS.js')['USER_AGENT'];
const notify = $['isNode']() ? require('./sendNotify') : '';
let cookiesArr = [],
    cookie = '';
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x4063e8 => {
        cookiesArr['push'](jdCookieNode[_0x4063e8]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x48b5d1 => _0x48b5d1['cookie'])]['filter'](_0x167ffa => !!_0x167ffa);
}!(async () => {
    var _0x21757d = {
        'jteLN': function(_0x5af951, _0x53ad09) {
            return _0x5af951(_0x53ad09);
        },
        'owZPA': function(_0x4c2c5b, _0x30e700) {
            return _0x4c2c5b === _0x30e700;
        },
        'DuIFY': 'sakPN',
        'jruAY': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'DOjHG': 'https://bean.m.jd.com/',
        'aVeSX': 'lCgqa89RDFhTTgXPyHxpYBZ%2F%2BrKQoggHwKcj3bjOW9WAuJ9EExbqSricnEiBLbnP',
        'NjuOe': 'mseweb',
        'EYpwE': function(_0x7760ce, _0x57c9af) {
            return _0x7760ce < _0x57c9af;
        },
        'jrgPW': 'xfjvC',
        'dlNZs': function(_0x53acce, _0x472858) {
            return _0x53acce + _0x472858;
        },
        'xCbwF': function(_0x5a1ae4, _0x1d9620) {
            return _0x5a1ae4 === _0x1d9620;
        },
        'GPpkb': 'jFAod',
        'ykDsC': 'kRPiR',
        'bTwZE': 'https://bean.m.jd.com/bean/signIndex.action',
        'fzsdf': function(_0x58bb95, _0x269b49) {
            return _0x58bb95 !== _0x269b49;
        },
        'WOkpg': 'iwcde',
        'WdOry': 'plSck',
        'VzEVx': function(_0x1339c0) {
            return _0x1339c0();
        },
        'tOjMz': function(_0x400084, _0x2675e1) {
            return _0x400084 !== _0x2675e1;
        },
        'sjQlj': 'MKISr',
        'zhoYU': 'nDNgH',
        'XaIkG': function(_0x23fd41, _0x49360d) {
            return _0x23fd41 === _0x49360d;
        }
    };
    if (!cookiesArr[0x0]) {
        if (_0x21757d['owZPA'](_0x21757d['DuIFY'], _0x21757d['DuIFY'])) {
            $['msg']($['name'], _0x21757d['jruAY'], _0x21757d['DOjHG'], {
                'open-url': _0x21757d['DOjHG']
            });
            return;
        } else {
            _0x21757d['jteLN'](resolve, data);
        }
    }
    $['inviter'] = _0x21757d['aVeSX'];
    $['DQCK'] = _0x21757d['aVeSX'];
    $['inviterNick'] = _0x21757d['NjuOe'];
    for (let _0x4d5ea9 = 0x0; _0x21757d['EYpwE'](_0x4d5ea9, cookiesArr['length']); _0x4d5ea9++) {
        if (_0x21757d['owZPA'](_0x21757d['jrgPW'], _0x21757d['jrgPW'])) {
            await $['wait'](0x7d0);
            cookie = cookiesArr[_0x4d5ea9];
            if (cookie) {
                $['UserName'] = _0x21757d['jteLN'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0x21757d['dlNZs'](_0x4d5ea9, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                console['log']('\n\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                if (!$['isLogin']) {
                    if (_0x21757d['xCbwF'](_0x21757d['GPpkb'], _0x21757d['ykDsC'])) {
                        if (err) {
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            data = JSON['parse'](data);
                        }
                    } else {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': _0x21757d['bTwZE']
                        });
                        if ($['isNode']()) {
                            if (_0x21757d['fzsdf'](_0x21757d['WOkpg'], _0x21757d['WdOry'])) {
                                await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                            } else {
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        }
                        continue;
                    }
                }
                try {
                    await _0x21757d['VzEVx'](main);
                } catch (_0x1f6650) {
                    if (_0x21757d['tOjMz'](_0x21757d['sjQlj'], _0x21757d['zhoYU'])) {
                        $['logErr'](_0x1f6650, '执行异常！');
                        if (_0x21757d['xCbwF']($['index'], 0x1)) {
                            $['log']('亲先检查CK1，或者与作者取得联系！');
                            break;
                        }
                    } else {
                        $['logErr'](_0x1f6650, resp);
                    }
                }
                if (_0x21757d['XaIkG']($['index'], 0x1) && $['myPingData']) {
                    $['inviter'] = $['myPingData']['secretPin'];
                    $['DQCK'] = $['myPingData']['secretPin'];
                    $['inviterNick'] = $['UserName'];
                }
            }
        } else {
            $['isLogin'] = ![];
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' API请求失败，请检查网路重试');
        }
    }
})()['catch'](_0xaaa792 => $['logErr'](_0xaaa792))['finally'](() => $['done']());
async function main() {
    var _0x57c86e = {
        'NUSnp': function(_0x56e8ea) {
            return _0x56e8ea();
        },
        'CZFWw': 'set-cookie',
        'CHuVT': function(_0x2a5c6c, _0x12ebf2) {
            return _0x2a5c6c + _0x12ebf2;
        },
        'gCHDd': function(_0x352beb, _0x5658c3) {
            return _0x352beb + _0x5658c3;
        },
        'PVymo': function(_0x23d257, _0x451a37) {
            return _0x23d257 === _0x451a37;
        },
        'FLtZH': function(_0x16d4a3, _0x6f6b6) {
            return _0x16d4a3 === _0x6f6b6;
        },
        'WbKki': '400001',
        'lRsJI': '黑号!',
        'YBakX': function(_0x35c362) {
            return _0x35c362();
        },
        'vDolM': function(_0x2d4843) {
            return _0x2d4843();
        },
        'hdeFV': function(_0x3e6302) {
            return _0x3e6302();
        },
        'rtUWm': function(_0x3cb85b, _0x283a1f) {
            return _0x3cb85b !== _0x283a1f;
        },
        'XkaNj': function(_0x331c38, _0xff4770) {
            return _0x331c38 > _0xff4770;
        },
        'EQQxn': '很抱歉，奖品与您擦肩而过了哟',
        'RINzx': function(_0x574ea8, _0xb4a409) {
            return _0x574ea8 > _0xb4a409;
        },
        'RoDtV': '您已经参加了其他队伍',
        'KbLDP': '助力失败跳过！',
        'XFvtA': function(_0x5969a5, _0x145a7f) {
            return _0x5969a5 === _0x145a7f;
        },
        'XMSkS': 'CDZMe',
        'Cbndn': function(_0x27661d, _0x1c22e1) {
            return _0x27661d(_0x1c22e1);
        },
        'ULxRS': function(_0x4e7519, _0x486a30, _0x1bed7e) {
            return _0x4e7519(_0x486a30, _0x1bed7e);
        },
        'tYKXV': '64217',
        'ntQKy': '60069',
        'OLOeh': function(_0x4318b1, _0x9d2f0d, _0x4b546d) {
            return _0x4318b1(_0x9d2f0d, _0x4b546d);
        },
        'NUvat': '655111',
        'GWHjg': '650679'
    };
    $['isvObfuscatorToken'] = await _0x57c86e['NUSnp'](getIsvObfuscatorToken);
    let _0x34c202 = await _0x57c86e['NUSnp'](getHtml);
    let _0x5b7901 = _0x34c202['headers'][_0x57c86e['CZFWw']]['filter'](_0x4f1747 => _0x4f1747['indexOf']('LZ_TOKEN_KEY') > -0x1)[0x0];
    let _0x245021 = _0x34c202['headers'][_0x57c86e['CZFWw']]['filter'](_0x614702 => _0x614702['indexOf']('LZ_TOKEN_VALUE') > -0x1)[0x0];
    _0x5b7901 = _0x5b7901['substr'](_0x57c86e['CHuVT'](_0x5b7901['indexOf']('='), 0x1));
    _0x245021 = _0x245021['substr'](_0x57c86e['gCHDd'](_0x245021['indexOf']('='), 0x1));
    $['LZ_TOKEN_KEY'] = _0x5b7901['substr'](0x0, _0x5b7901['indexOf'](';'));
    $['LZ_TOKEN_VALUE'] = _0x245021['substr'](0x0, _0x245021['indexOf'](';'));
    $['myPingData'] = await _0x57c86e['NUSnp'](getMyPing);
    if (_0x57c86e['PVymo']($['myPingData'], '') || _0x57c86e['FLtZH']($['myPingData'], _0x57c86e['WbKki']) || !$['myPingData'] || !$['myPingData']['secretPin']) {
        $['log'](_0x57c86e['lRsJI']);
        return;
    }
    let _0x4a4a73 = await _0x57c86e['YBakX'](getActivityInfo);
    let _0x25379d = await _0x57c86e['vDolM'](getInviteRecord);
    let _0x2f389c = await _0x57c86e['hdeFV'](getIsInvited);
    await _0x57c86e['hdeFV'](adLog);
    let _0x5c8bbf = await _0x57c86e['hdeFV'](getAcceptInvite);
    if (_0x57c86e['rtUWm']($['index'], 0x1) && (_0x57c86e['XkaNj'](_0x5c8bbf['errorMessage']['indexOf'](_0x57c86e['EQQxn']), -0x1) || _0x57c86e['RINzx'](_0x5c8bbf['errorMessage']['indexOf'](_0x57c86e['RoDtV']), -0x1))) {
        $['log'](_0x57c86e['KbLDP']);
        return;
    }
    for (let _0x298f69 of _0x4a4a73['shopUrl']) {
        if (_0x57c86e['XFvtA'](_0x57c86e['XMSkS'], _0x57c86e['XMSkS'])) {
            let _0xab3026 = _0x298f69['substr'](_0x57c86e['gCHDd'](_0x298f69['indexOf']('='), 0x1));
            $['log']('入会 ' + _0xab3026);
            await _0x57c86e['Cbndn'](join, _0xab3026);
        } else {
            if (err) {
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            } else {
                data = JSON['parse'](data);
            }
        }
    }
    await _0x57c86e['ULxRS'](join2, _0x57c86e['tYKXV'], _0x57c86e['ntQKy']);
    await _0x57c86e['OLOeh'](join2, _0x57c86e['NUvat'], _0x57c86e['GWHjg']);
    await _0x57c86e['hdeFV'](getOpenCardAllStatuesNew);
}

function getActivityInfo() {
    var _0x3d3312 = {
        'zCSSL': function(_0x1d6082, _0x111fda) {
            return _0x1d6082 === _0x111fda;
        },
        'GBrei': 'QHgEy',
        'JOsYy': function(_0xe9381a, _0x4546b6) {
            return _0xe9381a === _0x4546b6;
        },
        'vicHu': 'MlTJA',
        'SaFTd': function(_0x25dee6, _0x281207) {
            return _0x25dee6(_0x281207);
        },
        'pMEbt': function(_0x241515, _0x1e6876, _0x2d9670, _0xedb36d) {
            return _0x241515(_0x1e6876, _0x2d9670, _0xedb36d);
        },
        'VKgWC': '/microDz/invite/activity/wx/getActivityInfo',
        'exPEu': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/getActivityInfo'
    };
    return new Promise(_0x5d40a0 => {
        var _0x76009f = {
            'rjyRG': function(_0xf86ff6, _0x5d9bd4) {
                return _0x3d3312['zCSSL'](_0xf86ff6, _0x5d9bd4);
            },
            'yTOAT': _0x3d3312['GBrei'],
            'iqIVv': function(_0x43de7c, _0x57205a) {
                return _0x3d3312['JOsYy'](_0x43de7c, _0x57205a);
            },
            'NczEy': _0x3d3312['vicHu'],
            'lpOrl': function(_0x3818e0, _0x3dbf61) {
                return _0x3d3312['SaFTd'](_0x3818e0, _0x3dbf61);
            }
        };
        let _0x277733 = 'activityId=e3c59e3f22a64507b3b023be4b016b5f';
        $['post'](_0x3d3312['pMEbt'](taskPostUrl, _0x3d3312['VKgWC'], _0x277733, _0x3d3312['exPEu']), async (_0x14e2cb, _0x337e0a, _0x43678d) => {
            if (_0x76009f['rjyRG'](_0x76009f['yTOAT'], _0x76009f['yTOAT'])) {
                try {
                    if (_0x14e2cb) {
                        if (_0x76009f['iqIVv'](_0x76009f['NczEy'], _0x76009f['NczEy'])) {
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            console['log']('' + JSON['stringify'](_0x14e2cb));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        _0x43678d = JSON['parse'](_0x43678d);
                    }
                } catch (_0x2eba96) {
                    $['logErr'](_0x2eba96, _0x337e0a);
                } finally {
                    _0x76009f['lpOrl'](_0x5d40a0, _0x43678d['data']);
                }
            } else {
                $['logErr'](e, _0x337e0a);
            }
        });
    });
}

function getInviteRecord() {
    var _0x5c8005 = {
        'ikhqF': function(_0x18a555, _0x4d8f2f) {
            return _0x18a555 !== _0x4d8f2f;
        },
        'yykcx': 'TQTIJ',
        'jRutL': 'yGqNO',
        'amAIs': function(_0x1ccbce, _0x44dfc9) {
            return _0x1ccbce === _0x44dfc9;
        },
        'zecFy': 'qTgKx',
        'MhtPw': function(_0x5c6013, _0x1954a6) {
            return _0x5c6013(_0x1954a6);
        },
        'dZNzQ': function(_0x2775da, _0xdbd136, _0x417400, _0x332008) {
            return _0x2775da(_0xdbd136, _0x417400, _0x332008);
        },
        'VbFjL': '/microDz/invite/activity/wx/inviteRecord',
        'ToAwr': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/inviteRecord'
    };
    return new Promise(_0x4be577 => {
        let _0x349652 = 'activityId=e3c59e3f22a64507b3b023be4b016b5f&inviter=' + _0x5c8005['MhtPw'](encodeURIComponent, $['myPingData']['secretPin']) + '&pageNo=1&pageSize=15&type=0';
        $['post'](_0x5c8005['dZNzQ'](taskPostUrl, _0x5c8005['VbFjL'], _0x349652, _0x5c8005['ToAwr']), async (_0x40e905, _0x31c9cc, _0x34786b) => {
            try {
                if (_0x5c8005['ikhqF'](_0x5c8005['yykcx'], _0x5c8005['jRutL'])) {
                    if (_0x40e905) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        _0x34786b = JSON['parse'](_0x34786b);
                    }
                } else {
                    $['logErr'](e, _0x31c9cc);
                }
            } catch (_0x2579d2) {
                if (_0x5c8005['amAIs'](_0x5c8005['zecFy'], _0x5c8005['zecFy'])) {
                    $['logErr'](_0x2579d2, _0x31c9cc);
                } else {
                    _0x34786b = JSON['parse'](_0x34786b);
                }
            } finally {
                _0x5c8005['MhtPw'](_0x4be577, _0x34786b['data']);
            }
        });
    });
}

function getIsInvited() {
    var _0x34ff31 = {
        'gVMWt': function(_0x3de4d4, _0x35477d) {
            return _0x3de4d4 !== _0x35477d;
        },
        'uPUFC': 'ZkFmA',
        'tFzuh': 'etdvl',
        'PSVzT': 'dXRCV',
        'JavMP': function(_0x5c9bb7, _0x23591e) {
            return _0x5c9bb7(_0x23591e);
        },
        'odbcZ': function(_0x47df01, _0x309db6) {
            return _0x47df01 !== _0x309db6;
        },
        'vumqx': 'QLKvh',
        'qHYId': 'mpHlL',
        'Mtdjh': function(_0x5de37c, _0x40e615) {
            return _0x5de37c(_0x40e615);
        },
        'TrEot': function(_0x29bc16, _0x6dc428, _0x2c4303, _0x5191f7) {
            return _0x29bc16(_0x6dc428, _0x2c4303, _0x5191f7);
        },
        'fsAtW': '/microDz/invite/activity/wx/isInvited',
        'zyHiw': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/isInvited'
    };
    return new Promise(_0x2281fe => {
        var _0x567905 = {
            'pXjPQ': function(_0xe152cb, _0x48a1c8) {
                return _0x34ff31['JavMP'](_0xe152cb, _0x48a1c8);
            }
        };
        if (_0x34ff31['odbcZ'](_0x34ff31['vumqx'], _0x34ff31['qHYId'])) {
            let _0x58d666 = 'activityId=e3c59e3f22a64507b3b023be4b016b5f&pin=' + _0x34ff31['Mtdjh'](encodeURIComponent, $['myPingData']['secretPin']);
            $['post'](_0x34ff31['TrEot'](taskPostUrl, _0x34ff31['fsAtW'], _0x58d666, _0x34ff31['zyHiw']), async (_0x559576, _0x1ce712, _0x5c2cf2) => {
                try {
                    if (_0x34ff31['gVMWt'](_0x34ff31['uPUFC'], _0x34ff31['uPUFC'])) {
                        $['logErr'](e, _0x1ce712);
                    } else {
                        if (_0x559576) {
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            _0x5c2cf2 = JSON['parse'](_0x5c2cf2);
                        }
                    }
                } catch (_0x1c1b10) {
                    if (_0x34ff31['gVMWt'](_0x34ff31['tFzuh'], _0x34ff31['PSVzT'])) {
                        $['logErr'](_0x1c1b10, _0x1ce712);
                    } else {
                        $['log'](_0x5c2cf2['message']);
                    }
                } finally {
                    _0x34ff31['JavMP'](_0x2281fe, _0x5c2cf2['data']);
                }
            });
        } else {
            _0x567905['pXjPQ'](_0x2281fe, data['token']);
        }
    });
}

function getAcceptInvite() {
    var _0x5270eb = {
        'IEpgF': function(_0x1493e3, _0x4f8404) {
            return _0x1493e3 === _0x4f8404;
        },
        'vSnzf': 'kIXMM',
        'rZPEJ': 'PVbvS',
        'EeibM': function(_0x29296b, _0x87fd2a) {
            return _0x29296b === _0x87fd2a;
        },
        'hsJbl': 'uHNsB',
        'fZFES': function(_0x408cfd, _0x13e29b) {
            return _0x408cfd !== _0x13e29b;
        },
        'raQqQ': 'IHPQa',
        'fumBe': 'WtcbW',
        'llHdr': function(_0x2c126a, _0x18b903) {
            return _0x2c126a(_0x18b903);
        },
        'CetFX': function(_0x5bd72b, _0x157879) {
            return _0x5bd72b(_0x157879);
        },
        'DIgjo': function(_0x22ec54, _0xe796e7, _0x295568, _0x44c816) {
            return _0x22ec54(_0xe796e7, _0x295568, _0x44c816);
        },
        'bVULl': '/microDz/invite/activity/wx/acceptInvite',
        'Ahomn': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/acceptInvite'
    };
    return new Promise(_0x573483 => {
        let _0x551fc8 = 'activityId=e3c59e3f22a64507b3b023be4b016b5f&inviter=' + _0x5270eb['llHdr'](encodeURIComponent, $['DQCK']) + '&inviterImg=http%3A%2F%2Fstorage.360buyimg.com%2Fi.imageUpload%2F6a645f73495a76594b617266594d5731363237363637373836333031_mid.jpg&inviterNick=' + _0x5270eb['CetFX'](encodeURIComponent, $['inviterNick']) + '&invitee=' + _0x5270eb['CetFX'](encodeURIComponent, $['myPingData']['secretPin']) + '&inviteeImg=https%3A%2F%2Fimg10.360buyimg.com%2Fimgzone%2Fjfs%2Ft1%2F21383%2F2%2F6633%2F3879%2F5c5138d8E0967ccf2%2F91da57c5e2166005.jpg&inviteeNick=' + $['UserName'];
        $['post'](_0x5270eb['DIgjo'](taskPostUrl, _0x5270eb['bVULl'], _0x551fc8, _0x5270eb['Ahomn']), async (_0x39fb95, _0x36c32e, _0x5f344d) => {
            try {
                if (_0x39fb95) {
                    if (_0x5270eb['IEpgF'](_0x5270eb['vSnzf'], _0x5270eb['rZPEJ'])) {
                        $['logErr'](e, _0x36c32e);
                    } else {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                } else {
                    _0x5f344d = JSON['parse'](_0x5f344d);
                    if (_0x5f344d['errorMessage']) {
                        if (_0x5270eb['EeibM'](_0x5270eb['hsJbl'], _0x5270eb['hsJbl'])) {
                            $['log']('' + _0x5f344d['errorMessage']);
                        } else {
                            console['log']('' + JSON['stringify'](_0x39fb95));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    }
                }
            } catch (_0x57f471) {
                $['logErr'](_0x57f471, _0x36c32e);
            } finally {
                if (_0x5270eb['fZFES'](_0x5270eb['raQqQ'], _0x5270eb['fumBe'])) {
                    _0x5270eb['llHdr'](_0x573483, _0x5f344d);
                } else {
                    cookiesArr['push'](jdCookieNode[item]);
                }
            }
        });
    });
}

function getOpenCardAllStatuesNew() {
    var _0x41887e = {
        'XjnuK': function(_0x3936f1, _0x2d59ca) {
            return _0x3936f1 === _0x2d59ca;
        },
        'DYbib': 'gOgHb',
        'Nhcqz': function(_0x1ef279, _0x595d4d) {
            return _0x1ef279 === _0x595d4d;
        },
        'uFFYX': 'wmwTH',
        'iaUXG': function(_0x2b8325, _0x260f56) {
            return _0x2b8325(_0x260f56);
        },
        'WxHMT': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'LKiNe': 'https://bean.m.jd.com/',
        'ssmeA': function(_0x5d2204, _0x537edb) {
            return _0x5d2204 === _0x537edb;
        },
        'dzGhn': 'fjYRv',
        'HfRev': 'iPCjt',
        'yWIXb': function(_0x1b2daf, _0x1546d9) {
            return _0x1b2daf(_0x1546d9);
        },
        'kNfaj': function(_0x174aa8, _0x745e66, _0x468d38, _0x24f704) {
            return _0x174aa8(_0x745e66, _0x468d38, _0x24f704);
        },
        'lqhTt': '/microDz/invite/activity/wx/getOpenCardAllStatuesNew',
        'NLfKv': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/getOpenCardAllStatuesNew'
    };
    return new Promise(_0x13efa7 => {
        var _0x34e858 = {
            'VumVt': _0x41887e['WxHMT'],
            'NFQuB': _0x41887e['LKiNe']
        };
        if (_0x41887e['ssmeA'](_0x41887e['dzGhn'], _0x41887e['HfRev'])) {
            console['log']($['name'] + ' API请求失败，请检查网路重试');
        } else {
            let _0x5a4c18 = 'activityId=e3c59e3f22a64507b3b023be4b016b5f&pin=' + _0x41887e['yWIXb'](encodeURIComponent, $['myPingData']['secretPin']) + '&isInvited=1';
            $['post'](_0x41887e['kNfaj'](taskPostUrl, _0x41887e['lqhTt'], _0x5a4c18, _0x41887e['NLfKv']), async (_0x43e016, _0x5106d1, _0x370554) => {
                try {
                    if (_0x43e016) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x41887e['XjnuK'](_0x41887e['DYbib'], _0x41887e['DYbib'])) {
                            _0x370554 = JSON['parse'](_0x370554);
                            $['log']('isCanJoin: ' + _0x370554['data']['isCanJoin']);
                        } else {
                            if (_0x43e016) {
                                console['log']('' + JSON['stringify'](_0x43e016));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                _0x370554 = JSON['parse'](_0x370554);
                            }
                        }
                    }
                } catch (_0x2c7ec6) {
                    if (_0x41887e['Nhcqz'](_0x41887e['uFFYX'], _0x41887e['uFFYX'])) {
                        $['logErr'](_0x2c7ec6, _0x5106d1);
                    } else {
                        $['msg']($['name'], _0x34e858['VumVt'], _0x34e858['NFQuB'], {
                            'open-url': _0x34e858['NFQuB']
                        });
                        return;
                    }
                } finally {
                    _0x41887e['iaUXG'](_0x13efa7, _0x370554['data']);
                }
            });
        }
    });
}

function join(_0x322df6) {
    var _0x59291a = {
        'jWgCP': 'headers',
        'fRsaK': 'set-cookie',
        'IjdsF': function(_0x1c25f5, _0x447e7d) {
            return _0x1c25f5 + _0x447e7d;
        },
        'CtVub': function(_0x364c70, _0x6d2cea) {
            return _0x364c70 * _0x6d2cea;
        },
        'WsQrG': 'text/plain; Charset=UTF-8',
        'FOKXk': 'https://api.m.jd.com',
        'Glslx': 'api.m.jd.com',
        'YlHhF': '*/*',
        'HzpEj': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
        'BBMPS': 'application/x-www-form-urlencoded',
        'kCpUP': function(_0x3338d9, _0x203f7e) {
            return _0x3338d9 !== _0x203f7e;
        },
        'aEBiG': 'msyTg',
        'eXMtj': 'iwRvI',
        'wJqlW': 'aBLdj',
        'Hirgc': function(_0x2758ee, _0x42392a) {
            return _0x2758ee == _0x42392a;
        },
        'HCWht': 'yDWuc',
        'JToUp': function(_0x1e4a57, _0x150ea4) {
            return _0x1e4a57(_0x150ea4);
        },
        'zoGcB': function(_0x401e2b, _0x43cbe3) {
            return _0x401e2b(_0x43cbe3);
        }
    };
    return new Promise(_0x2e7ed2 => {
        var _0x469105 = {
            'NYGxL': _0x59291a['jWgCP'],
            'gjteH': _0x59291a['fRsaK'],
            'kJzjz': function(_0x452214, _0x5a9aa8) {
                return _0x59291a['IjdsF'](_0x452214, _0x5a9aa8);
            },
            'YKEob': function(_0x4e369f, _0x4bc395) {
                return _0x59291a['CtVub'](_0x4e369f, _0x4bc395);
            },
            'uuotZ': function(_0x42b4e5, _0x5dd5da) {
                return _0x59291a['IjdsF'](_0x42b4e5, _0x5dd5da);
            },
            'wUcEl': _0x59291a['WsQrG'],
            'mVYCQ': _0x59291a['FOKXk'],
            'AglEu': _0x59291a['Glslx'],
            'BhIZJ': _0x59291a['YlHhF'],
            'hKQJg': _0x59291a['HzpEj'],
            'QzqCH': _0x59291a['BBMPS'],
            'xeuLt': function(_0x36959f, _0x107fb2) {
                return _0x59291a['kCpUP'](_0x36959f, _0x107fb2);
            },
            'sJQMy': _0x59291a['aEBiG'],
            'kTROz': function(_0x4b3a4c, _0x74478c) {
                return _0x59291a['kCpUP'](_0x4b3a4c, _0x74478c);
            },
            'DXXUV': _0x59291a['eXMtj'],
            'oKCiU': _0x59291a['wJqlW'],
            'jBHJd': function(_0x3eaaab, _0xbbc6ad) {
                return _0x59291a['Hirgc'](_0x3eaaab, _0xbbc6ad);
            },
            'Onrks': _0x59291a['HCWht'],
            'cMGZs': function(_0x1262fe, _0x4e2b6a) {
                return _0x59291a['JToUp'](_0x1262fe, _0x4e2b6a);
            }
        };
        $['get'](_0x59291a['zoGcB'](ruhui, '' + _0x322df6), async (_0x35198b, _0x4077c8, _0x250e89) => {
            if (_0x469105['xeuLt'](_0x469105['sJQMy'], _0x469105['sJQMy'])) {
                if (_0x35198b) {
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {}
            } else {
                try {
                    if (_0x469105['kTROz'](_0x469105['DXXUV'], _0x469105['oKCiU'])) {
                        _0x250e89 = _0x250e89['match'](/(\{().+\})/)[0x1];
                        _0x250e89 = JSON['parse'](_0x250e89);
                        if (_0x469105['jBHJd'](_0x250e89['success'], !![])) {
                            if (_0x469105['kTROz'](_0x469105['Onrks'], _0x469105['Onrks'])) {
                                _0x250e89 = JSON['parse'](_0x250e89);
                                $['lz_jdpin_token'] = _0x4077c8[_0x469105['NYGxL']][_0x469105['gjteH']]['filter'](_0x27cfc8 => _0x27cfc8['indexOf']('lz_jdpin_token') !== -0x1)[0x0];
                            } else {
                                $['log'](_0x250e89['message']);
                            }
                        } else if (_0x469105['jBHJd'](_0x250e89['success'], ![])) {
                            $['log'](_0x250e89['message']);
                        }
                    } else {
                        return {
                            'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=%7B%22venderId%22%3A%22' + _0x322df6 + '%22%2C%22shopId%22%3A%22' + shopId + '%22%2C%22bindByVerifyCodeFlag%22%3A1%2C%22registerExtend%22%3A%7B%22v_sex%22%3A%22%E6%9C%AA%E7%9F%A5%22%2C%22v_birthday%22%3A%222021-0' + _0x469105['kJzjz'](Math['round'](_0x469105['YKEob'](Math['random'](), 0x8)), 0x1) + '-0' + _0x469105['uuotZ'](Math['round'](_0x469105['YKEob'](Math['random'](), 0x8)), 0x1) + '%22%2C%22v_name%22%3A%22yyy%22%7D%2C%22writeChildFlag%22%3A0%2C%22channel%22%3A8802%7D&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1628345987749_66821',
                            'headers': {
                                'Content-Type': _0x469105['wUcEl'],
                                'Origin': _0x469105['mVYCQ'],
                                'Host': _0x469105['AglEu'],
                                'accept': _0x469105['BhIZJ'],
                                'User-Agent': _0x469105['hKQJg'],
                                'content-type': _0x469105['QzqCH'],
                                'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x322df6 + '&shopId=' + shopId + '&channel=8802&returnUrl=https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/4438790?activityId=e3c59e3f22a64507b3b023be4b016b5f&inviter=' + $['DQCK'] + '&inviterImg=http://storage.360buyimg.com/i.imageUpload/6a645f3639613631633262633231303231363238313235383234363133_mid.jpg&inviterNickName=Tsukasa%E9%B1%BC%E8%9B%8B&shareuserid4minipg=DQCK%2FksVMxxhAtP2wbQfI9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=599119&lng=113.388014&lat=22.510994&sid=09fdc8e908526b5538a4ad4a265f40dw&un_area=19_1657_52093_0',
                                'Cookie': cookie
                            }
                        };
                    }
                } catch (_0x8e6d49) {
                    $['logErr'](_0x8e6d49, _0x4077c8);
                } finally {
                    _0x469105['cMGZs'](_0x2e7ed2, _0x250e89);
                }
            }
        });
    });
}

function ruhui(_0x31a511) {
    var _0x141d9c = {
        'agKQr': function(_0x4364b8, _0x5b1d04) {
            return _0x4364b8 + _0x5b1d04;
        },
        'ldxjN': function(_0x4f122c, _0x354ed3) {
            return _0x4f122c * _0x354ed3;
        },
        'zGENW': function(_0x496ad8, _0x5e38b2) {
            return _0x496ad8 + _0x5e38b2;
        },
        'kjbUE': 'text/plain; Charset=UTF-8',
        'EpZCL': 'https://api.m.jd.com',
        'ANtdP': 'api.m.jd.com',
        'euerV': '*/*',
        'FWgVQ': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
        'ILhME': 'application/x-www-form-urlencoded'
    };
    return {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"' + _0x31a511 + '","shopId":"' + _0x31a511 + '","bindByVerifyCodeFlag":1,"registerExtend":{"v_sex":"未知","v_name":"名称","v_birthday":"2021-0' + _0x141d9c['agKQr'](Math['round'](_0x141d9c['ldxjN'](Math['random'](), 0x8)), 0x1) + '-0' + _0x141d9c['zGENW'](Math['round'](_0x141d9c['ldxjN'](Math['random'](), 0x8)), 0x1) + '"},"writeChildFlag":0,"activityId":1454199,"channel":401}&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1627049995456_46808',
        'headers': {
            'Content-Type': _0x141d9c['kjbUE'],
            'Origin': _0x141d9c['EpZCL'],
            'Host': _0x141d9c['ANtdP'],
            'accept': _0x141d9c['euerV'],
            'User-Agent': _0x141d9c['FWgVQ'],
            'content-type': _0x141d9c['ILhME'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x31a511 + '&shopId=' + _0x31a511 + '&venderType=1&channel=102&returnUrl=https%%3A%%2F%%2Flzdz1-isv.isvjcloud.com%%2Fdingzhi%%2Fdz%%2FopenCard%%2Factivity%%2F7376465%%3FactivityId%%3Dd91d932b9a3d42b9ab77dd1d5e783839%%26shareUuid%%3Ded1873cb52384a6ab42671eb6aac841d',
            'Cookie': cookie
        }
    };
}

function join2(_0x3a9197, _0x2b0b37) {
    var _0xe7e5b0 = {
        'YXghM': function(_0x41295d, _0x1afaa0) {
            return _0x41295d !== _0x1afaa0;
        },
        'hTPOs': 'rdSqW',
        'IRHMu': function(_0x398873, _0x88a482) {
            return _0x398873 == _0x88a482;
        },
        'lhELj': function(_0x2210d, _0x174b3e) {
            return _0x2210d(_0x174b3e);
        },
        'jDYij': function(_0x5a3628, _0x4d5a9c, _0x389b4e) {
            return _0x5a3628(_0x4d5a9c, _0x389b4e);
        }
    };
    return new Promise(_0x436260 => {
        var _0x2075f0 = {
            'NXoGr': function(_0x201057, _0x31b8ac) {
                return _0xe7e5b0['YXghM'](_0x201057, _0x31b8ac);
            },
            'orvpz': _0xe7e5b0['hTPOs'],
            'lWunM': function(_0x747472, _0x3944b8) {
                return _0xe7e5b0['IRHMu'](_0x747472, _0x3944b8);
            },
            'YAmNF': function(_0x597d22, _0x24431f) {
                return _0xe7e5b0['lhELj'](_0x597d22, _0x24431f);
            }
        };
        $['get'](_0xe7e5b0['jDYij'](ruhui2, _0x3a9197, _0x2b0b37), async (_0xf46190, _0x455dc5, _0x1131df) => {
            try {
                if (_0x2075f0['NXoGr'](_0x2075f0['orvpz'], _0x2075f0['orvpz'])) {
                    $['logErr'](e, _0x455dc5);
                } else {
                    _0x1131df = _0x1131df['match'](/(\{().+\})/)[0x1];
                    _0x1131df = JSON['parse'](_0x1131df);
                    if (_0x2075f0['lWunM'](_0x1131df['success'], !![])) {
                        $['log'](_0x1131df['message']);
                    } else if (_0x2075f0['lWunM'](_0x1131df['success'], ![])) {
                        $['log'](_0x1131df['message']);
                    }
                }
            } catch (_0x152794) {
                $['logErr'](_0x152794, _0x455dc5);
            } finally {
                _0x2075f0['YAmNF'](_0x436260, _0x1131df);
            }
        });
    });
}

function ruhui2(_0x300bc0, _0xf56e58) {
    var _0x1b1043 = {
        'bQydr': function(_0x27c871, _0x32fda9) {
            return _0x27c871 + _0x32fda9;
        },
        'jdkKW': function(_0x5d012f, _0x2123ee) {
            return _0x5d012f * _0x2123ee;
        },
        'AtRmS': function(_0x502d50, _0x4a1d72) {
            return _0x502d50 + _0x4a1d72;
        },
        'phkSN': 'text/plain; Charset=UTF-8',
        'kaAlB': 'https://api.m.jd.com',
        'yvYJn': 'api.m.jd.com',
        'BEXRx': '*/*',
        'YAzAH': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
        'IGwyE': 'application/x-www-form-urlencoded'
    };
    return {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=%7B%22venderId%22%3A%22' + _0x300bc0 + '%22%2C%22shopId%22%3A%22' + _0xf56e58 + '%22%2C%22bindByVerifyCodeFlag%22%3A1%2C%22registerExtend%22%3A%7B%22v_sex%22%3A%22%E6%9C%AA%E7%9F%A5%22%2C%22v_birthday%22%3A%222021-0' + _0x1b1043['bQydr'](Math['round'](_0x1b1043['jdkKW'](Math['random'](), 0x8)), 0x1) + '-0' + _0x1b1043['AtRmS'](Math['round'](_0x1b1043['jdkKW'](Math['random'](), 0x8)), 0x1) + '%22%2C%22v_name%22%3A%22yyy%22%7D%2C%22writeChildFlag%22%3A0%2C%22channel%22%3A8802%7D&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1628345987749_66821',
        'headers': {
            'Content-Type': _0x1b1043['phkSN'],
            'Origin': _0x1b1043['kaAlB'],
            'Host': _0x1b1043['yvYJn'],
            'accept': _0x1b1043['BEXRx'],
            'User-Agent': _0x1b1043['YAzAH'],
            'content-type': _0x1b1043['IGwyE'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x300bc0 + '&shopId=' + _0xf56e58 + '&channel=8802&returnUrl=https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/4438790?activityId=e3c59e3f22a64507b3b023be4b016b5f&inviter=' + $['DQCK'] + '&inviterImg=http://storage.360buyimg.com/i.imageUpload/6a645f3639613631633262633231303231363238313235383234363133_mid.jpg&inviterNickName=Tsukasa%E9%B1%BC%E8%9B%8B&shareuserid4minipg=DQCK%2FksVMxxhAtP2wbQfI9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=599119&lng=113.388014&lat=22.510994&sid=09fdc8e908526b5538a4ad4a265f40dw&un_area=19_1657_52093_0',
            'Cookie': cookie
        }
    };
}

function getWxCommonInfoToken() {
    var _0x3dd2d9 = {
        'isTay': function(_0x2ed83a, _0x3f4203) {
            return _0x2ed83a === _0x3f4203;
        },
        'rpVCq': 'ouIBc',
        'qmMdA': function(_0x8eb89d, _0xa71840) {
            return _0x8eb89d !== _0xa71840;
        },
        'tnotM': 'ZVHKW',
        'GbBdQ': 'gsBCC',
        'pqYoh': function(_0x9d0b6d, _0x51af9) {
            return _0x9d0b6d(_0x51af9);
        },
        'akBNJ': 'application/x-www-form-urlencoded',
        'nhhOg': 'lzdz1-isv.isvjcloud.com',
        'RYqom': 'https://lzdz1-isv.isvjcloud.com',
        'tFEEy': 'https://lzdz1-isv.isvjcloud.com/wxCommonInfo/token'
    };
    return new Promise(_0x23e34d => {
        var _0x49ea4c = {
            'PPPaj': function(_0x2a2d11, _0x424599) {
                return _0x3dd2d9['isTay'](_0x2a2d11, _0x424599);
            },
            'ZyVBk': _0x3dd2d9['rpVCq'],
            'VBEjc': function(_0x2999ee, _0x299a8b) {
                return _0x3dd2d9['qmMdA'](_0x2999ee, _0x299a8b);
            },
            'jxXxL': _0x3dd2d9['tnotM'],
            'sVvUP': _0x3dd2d9['GbBdQ'],
            'fybPI': function(_0x2b9d1c, _0x18918c) {
                return _0x3dd2d9['pqYoh'](_0x2b9d1c, _0x18918c);
            }
        };
        $['post']({
            'url': 'https://lzdz1-isv.isvjcloud.com/wxCommonInfo/token',
            'headers': {
                'User-Agent': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
                'Content-Type': _0x3dd2d9['akBNJ'],
                'Host': _0x3dd2d9['nhhOg'],
                'Origin': _0x3dd2d9['RYqom'],
                'Referer': _0x3dd2d9['tFEEy']
            }
        }, async (_0x3e7327, _0x4b9578, _0x34b6b4) => {
            try {
                if (_0x3e7327) {
                    $['isLogin'] = ![];
                    console['log']('' + JSON['stringify'](_0x3e7327));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x49ea4c['PPPaj'](_0x49ea4c['ZyVBk'], _0x49ea4c['ZyVBk'])) {
                        _0x34b6b4 = JSON['parse'](_0x34b6b4);
                    } else {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                }
            } catch (_0x22eea7) {
                $['isLogin'] = ![];
                $['logErr'](_0x22eea7, _0x4b9578);
            } finally {
                if (_0x49ea4c['VBEjc'](_0x49ea4c['jxXxL'], _0x49ea4c['sVvUP'])) {
                    _0x49ea4c['fybPI'](_0x23e34d, _0x34b6b4);
                } else {
                    console['log']('' + JSON['stringify'](_0x3e7327));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                }
            }
        });
    });
}

function getIsvObfuscatorToken() {
    var _0x44fb97 = {
        'rtePE': function(_0x3c3cec, _0x372802) {
            return _0x3c3cec === _0x372802;
        },
        'THEFW': 'bixDv',
        'jgTxK': 'WyjmM',
        'omxuk': 'ZiBrf',
        'VnFNW': 'idqeE',
        'FSWFU': function(_0x688494, _0x117271) {
            return _0x688494(_0x117271);
        },
        'lmlWP': function(_0x58828f, _0x33627b) {
            return _0x58828f !== _0x33627b;
        },
        'yXhPK': 'LCCVk',
        'jJlLc': 'zqljB',
        'VBXyj': 'body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A%2F%2Fcjhydz-isv.isvjcloud.com%22%7D',
        'yZFjJ': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
        'nMOOn': 'application/x-www-form-urlencoded',
        'pwJUO': 'api.m.jd.com',
        'eUhSc': 'https://api.m.jd.com/client.action?functionId=isvObfuscator&clientVersion=10.0.4&build=88641&client=android&d_brand=OPPO&d_model=PCAM00&osVersion=10&screen=2208*1080&partner=oppo&oaid=&openudid=7049442d7e415232&eid=eidAfb0d81231cs3I4yd3GgLRjqcx9qFEcJEmyOMn1BwD8wvLt/pM7ENipVIQXuRiDyQ0FYw2aud9+AhtGqo1Zhp0TsLEgoKZvAWkaXhApgim9hlEyRB&sdkVersion=29&lang=zh_CN&uuid=7049442d7e415232&aid=7049442d7e415232&area=4_48201_54794_0&networkType=wifi&wifiBssid=774de7601b5cddf9aad1ae30f3a3dfc0&uts=zrHR4oLv7fO8bj08KaWkuJrGiAm%2FG6al3p01S3QPkHjEe70KB7DMBdz3cfE%2BRhrQIyj%2B2Jj2QqzA%2BpAdyk9V1ui51eL%2FoBnDH0kFw%2FNynmvOvct2RwpCzR7s0IfLFlCdif1pPkN560QPhIQm8X6wiYfI7PKqHbiI&uemps=0-0&st=1627949552040&sign=545fe280a8a65be83421dc76b0dc0cc8&sv=112'
    };
    return new Promise(_0x46ca8b => {
        var _0x314183 = {
            'rLQim': function(_0x512ad9, _0x4821b8) {
                return _0x44fb97['rtePE'](_0x512ad9, _0x4821b8);
            },
            'wmPpc': _0x44fb97['THEFW'],
            'gnazk': _0x44fb97['jgTxK'],
            'HfbCW': _0x44fb97['omxuk'],
            'DTwxc': _0x44fb97['VnFNW'],
            'ntzCj': function(_0x1c3c23, _0x1e438a) {
                return _0x44fb97['FSWFU'](_0x1c3c23, _0x1e438a);
            }
        };
        if (_0x44fb97['lmlWP'](_0x44fb97['yXhPK'], _0x44fb97['jJlLc'])) {
            $['post']({
                'url': 'https://api.m.jd.com/client.action?functionId=isvObfuscator&clientVersion=10.0.4&build=88641&client=android&d_brand=OPPO&d_model=PCAM00&osVersion=10&screen=2208*1080&partner=oppo&oaid=&openudid=7049442d7e415232&eid=eidAfb0d81231cs3I4yd3GgLRjqcx9qFEcJEmyOMn1BwD8wvLt/pM7ENipVIQXuRiDyQ0FYw2aud9+AhtGqo1Zhp0TsLEgoKZvAWkaXhApgim9hlEyRB&sdkVersion=29&lang=zh_CN&uuid=7049442d7e415232&aid=7049442d7e415232&area=4_48201_54794_0&networkType=wifi&wifiBssid=774de7601b5cddf9aad1ae30f3a3dfc0&uts=zrHR4oLv7fO8bj08KaWkuJrGiAm%2FG6al3p01S3QPkHjEe70KB7DMBdz3cfE%2BRhrQIyj%2B2Jj2QqzA%2BpAdyk9V1ui51eL%2FoBnDH0kFw%2FNynmvOvct2RwpCzR7s0IfLFlCdif1pPkN560QPhIQm8X6wiYfI7PKqHbiI&uemps=0-0&st=1627949552040&sign=545fe280a8a65be83421dc76b0dc0cc8&sv=112',
                'body': _0x44fb97['VBXyj'],
                'headers': {
                    'User-Agent': _0x44fb97['yZFjJ'],
                    'Content-Type': _0x44fb97['nMOOn'],
                    'Host': _0x44fb97['pwJUO'],
                    'Referer': _0x44fb97['eUhSc'],
                    'Cookie': cookie
                }
            }, async (_0x3ec0e3, _0x522093, _0x4f4776) => {
                try {
                    if (_0x314183['rLQim'](_0x314183['wmPpc'], _0x314183['gnazk'])) {
                        if (_0x3ec0e3) {
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            _0x4f4776 = JSON['parse'](_0x4f4776);
                            if (_0x4f4776['errorMessage']) {
                                $['log']('' + _0x4f4776['errorMessage']);
                            }
                        }
                    } else {
                        if (_0x3ec0e3) {
                            console['log']('' + JSON['stringify'](_0x3ec0e3));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x314183['rLQim'](_0x314183['HfbCW'], _0x314183['DTwxc'])) {
                                if (_0x3ec0e3) {
                                    console['log']('' + JSON['stringify'](_0x3ec0e3));
                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                } else {
                                    _0x4f4776 = JSON['parse'](_0x4f4776);
                                }
                            } else {
                                _0x4f4776 = JSON['parse'](_0x4f4776);
                            }
                        }
                    }
                } catch (_0x5c28a2) {
                    $['logErr'](_0x5c28a2, _0x522093);
                } finally {
                    _0x314183['ntzCj'](_0x46ca8b, _0x4f4776['token']);
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function getMyPing() {
    var _0xd0cb9 = {
        'XEMpR': function(_0x4eafbf, _0xbe19df) {
            return _0x4eafbf === _0xbe19df;
        },
        'psjRp': 'MhaAa',
        'sDllS': 'DVZer',
        'PSpOY': 'headers',
        'RySCN': 'set-cookie',
        'AZIzD': function(_0x471df8, _0x27e0c6) {
            return _0x471df8(_0x27e0c6);
        },
        'HFFeO': function(_0x99e84b, _0x2ba10c) {
            return _0x99e84b(_0x2ba10c);
        },
        'xowos': 'fTJIc',
        'oPrjy': 'application/x-www-form-urlencoded',
        'lecQv': 'cjhydz-isv.isvjcloud.com',
        'CZYEJ': 'https://lzdz1-isv.isvjcloud.com/customer/getMyPing'
    };
    return new Promise(_0x353b00 => {
        if (_0xd0cb9['XEMpR'](_0xd0cb9['xowos'], _0xd0cb9['xowos'])) {
            $['post']({
                'url': 'https://cjhydz-isv.isvjcloud.com/customer/getMyPing',
                'body': 'userId=599119&token=' + $['isvObfuscatorToken'] + '&fromType=APP_pointRedeem',
                'headers': {
                    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                    'Content-Type': _0xd0cb9['oPrjy'],
                    'Host': _0xd0cb9['lecQv'],
                    'Referer': _0xd0cb9['CZYEJ'],
                    'Cookie': 'LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + ';'
                }
            }, async (_0x13cc97, _0x4e9b95, _0x5a62eb) => {
                try {
                    if (_0xd0cb9['XEMpR'](_0xd0cb9['psjRp'], _0xd0cb9['sDllS'])) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x13cc97) {
                            console['log']('' + JSON['stringify'](_0x13cc97));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            _0x5a62eb = JSON['parse'](_0x5a62eb);
                            $['lz_jdpin_token'] = _0x4e9b95[_0xd0cb9['PSpOY']][_0xd0cb9['RySCN']]['filter'](_0x2e05cc => _0x2e05cc['indexOf']('lz_jdpin_token') !== -0x1)[0x0];
                        }
                    }
                } catch (_0xe9381f) {
                    $['logErr'](_0xe9381f, _0x4e9b95);
                } finally {
                    _0xd0cb9['AZIzD'](_0x353b00, _0x5a62eb['data']);
                }
            });
        } else {
            _0xd0cb9['HFFeO'](_0x353b00, data['data']);
        }
    });
}

function getHtml() {
    var _0x4f57d9 = {
        'ylSVv': function(_0x42b7ce, _0x416afe) {
            return _0x42b7ce === _0x416afe;
        },
        'igjZv': 'YQLJe',
        'tTcZV': 'jMjfA',
        'jTibk': function(_0x1811af, _0x4423f8) {
            return _0x1811af === _0x4423f8;
        },
        'cutiI': 'fYUUB',
        'BNEkS': function(_0x2247a6, _0x25eea3) {
            return _0x2247a6 !== _0x25eea3;
        },
        'fCbbH': 'LKxnV',
        'zTXSR': 'UXCJh',
        'cSadE': 'OtfAc',
        'ogZub': 'fiWZY',
        'Ssmwn': function(_0x1e2ae0, _0x7338b8) {
            return _0x1e2ae0(_0x7338b8);
        },
        'SJRtx': function(_0x385964, _0x333ed5) {
            return _0x385964 == _0x333ed5;
        },
        'pxKgr': function(_0x5dd7b9, _0xe07684) {
            return _0x5dd7b9(_0xe07684);
        },
        'MibAB': 'SoedP',
        'NVnxl': 'cjhydz-isv.isvjcloud.com'
    };
    return new Promise(_0x391aa6 => {
        var _0x29f1b3 = {
            'ZZCRx': function(_0x15ce7a, _0x27fd82) {
                return _0x4f57d9['SJRtx'](_0x15ce7a, _0x27fd82);
            },
            'UHnNf': function(_0x2f4da5, _0x38248a) {
                return _0x4f57d9['pxKgr'](_0x2f4da5, _0x38248a);
            }
        };
        if (_0x4f57d9['BNEkS'](_0x4f57d9['MibAB'], _0x4f57d9['MibAB'])) {
            $['inviter'] = $['myPingData']['secretPin'];
            $['DQCK'] = $['myPingData']['secretPin'];
            $['inviterNick'] = $['UserName'];
        } else {
            $['get']({
                'url': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/6654989?activityId=e3c59e3f22a64507b3b023be4b016b5f&inviter=' + $['inviter'] + '&inviterImg=http://storage.360buyimg.com/i.imageUpload/6a645f3639613631633262633231303231363238313235383234363133_mid.jpg&inviterNickName=mseweb&shareuserid4minipg=DQCK%2FksVMxxhAtP2wbQfI9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=599119&lng=113.388014&lat=22.510994&sid=09fdc8e908526b5538a4ad4a265f40dw&un_area=19_1657_52093_0',
                'headers': {
                    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                    'Host': _0x4f57d9['NVnxl'],
                    'Referer': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/4438790?activityId=e3c59e3f22a64507b3b023be4b016b5f&inviter=' + $['inviter'] + '&inviterImg=http://storage.360buyimg.com/i.imageUpload/6a645f3639613631633262633231303231363238313235383234363133_mid.jpg&inviterNickName=mseweb&shareuserid4minipg=DQCK%2FksVMxxhAtP2wbQfI9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=599119&lng=113.388014&lat=22.510994&sid=09fdc8e908526b5538a4ad4a265f40dw&un_area=19_1657_52093_0'
                }
            }, async (_0x18834b, _0x31396d, _0x323182) => {
                if (_0x4f57d9['ylSVv'](_0x4f57d9['igjZv'], _0x4f57d9['tTcZV'])) {
                    _0x323182 = _0x323182['match'](/(\{().+\})/)[0x1];
                    _0x323182 = JSON['parse'](_0x323182);
                    if (_0x29f1b3['ZZCRx'](_0x323182['success'], !![])) {
                        $['log'](_0x323182['message']);
                    } else if (_0x29f1b3['ZZCRx'](_0x323182['success'], ![])) {
                        $['log'](_0x323182['message']);
                    }
                } else {
                    try {
                        if (_0x18834b) {
                            if (_0x4f57d9['jTibk'](_0x4f57d9['cutiI'], _0x4f57d9['cutiI'])) {
                                console['log']('' + JSON['stringify'](_0x18834b));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                $['logErr'](e, _0x31396d);
                            }
                        } else {}
                    } catch (_0x4f934b) {
                        if (_0x4f57d9['BNEkS'](_0x4f57d9['fCbbH'], _0x4f57d9['zTXSR'])) {
                            $['logErr'](_0x4f934b, _0x31396d);
                        } else {
                            $['logErr'](_0x4f934b, _0x31396d);
                        }
                    } finally {
                        if (_0x4f57d9['jTibk'](_0x4f57d9['cSadE'], _0x4f57d9['ogZub'])) {
                            _0x29f1b3['UHnNf'](_0x391aa6, _0x323182);
                        } else {
                            _0x4f57d9['Ssmwn'](_0x391aa6, _0x31396d);
                        }
                    }
                }
            });
        }
    });
}

function getSimpleActInfoVo() {
    var _0x54b3b7 = {
        'dwfDy': function(_0x327b24, _0x42e1f5) {
            return _0x327b24 !== _0x42e1f5;
        },
        'Nvnpp': 'gazGV',
        'RXmNU': 'sPlua',
        'spesh': function(_0x1e5280, _0x4326da) {
            return _0x1e5280(_0x4326da);
        },
        'WpQGb': function(_0x5d4ed7, _0x2d539d) {
            return _0x5d4ed7 + _0x2d539d;
        },
        'Ujfeu': function(_0x5de9a9, _0x4eb103) {
            return _0x5de9a9 * _0x4eb103;
        },
        'hQXML': function(_0x435eb4, _0x5eda87) {
            return _0x435eb4 * _0x5eda87;
        },
        'sjvsk': 'text/plain; Charset=UTF-8',
        'iEfUc': 'https://api.m.jd.com',
        'XIWTK': 'api.m.jd.com',
        'xrPpO': '*/*',
        'ByDyL': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
        'TzvBC': 'application/x-www-form-urlencoded',
        'Kiyfs': function(_0x325168, _0x5ef199, _0x5534f5, _0x3a8757) {
            return _0x325168(_0x5ef199, _0x5534f5, _0x3a8757);
        },
        'IHXYw': '/dz/common/getSimpleActInfoVo'
    };
    return new Promise(_0x52a72a => {
        var _0xefa210 = {
            'EttWC': function(_0x3058e0, _0x98fe34) {
                return _0x54b3b7['WpQGb'](_0x3058e0, _0x98fe34);
            },
            'DyZPF': function(_0x58c853, _0x5f3f3c) {
                return _0x54b3b7['Ujfeu'](_0x58c853, _0x5f3f3c);
            },
            'BVtyB': function(_0x281a58, _0x240487) {
                return _0x54b3b7['WpQGb'](_0x281a58, _0x240487);
            },
            'uJScO': function(_0x19b12f, _0x557f7b) {
                return _0x54b3b7['hQXML'](_0x19b12f, _0x557f7b);
            },
            'ZMvsl': _0x54b3b7['sjvsk'],
            'jFgSQ': _0x54b3b7['iEfUc'],
            'InTgV': _0x54b3b7['XIWTK'],
            'UfgKF': _0x54b3b7['xrPpO'],
            'XOeyw': _0x54b3b7['ByDyL'],
            'jAPQT': _0x54b3b7['TzvBC']
        };
        $['post'](_0x54b3b7['Kiyfs'](taskPostUrl, _0x54b3b7['IHXYw'], 'activityId=c225ad5922cf4ac8b4a68fd37f486088', 'https://lzdz1-isv.isvjcloud.com/dz/common/getSimpleActInfoVo'), async (_0x418d9f, _0x395582, _0x168f69) => {
            try {
                if (_0x418d9f) {
                    console['log']('' + JSON['stringify'](_0x418d9f));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    _0x168f69 = JSON['parse'](_0x168f69);
                }
            } catch (_0x3fbbe5) {
                if (_0x54b3b7['dwfDy'](_0x54b3b7['Nvnpp'], _0x54b3b7['Nvnpp'])) {
                    $['log']('' + _0x168f69['errorMessage']);
                } else {
                    $['logErr'](_0x3fbbe5, _0x395582);
                }
            } finally {
                if (_0x54b3b7['dwfDy'](_0x54b3b7['RXmNU'], _0x54b3b7['RXmNU'])) {
                    return {
                        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"' + functionId + '","shopId":"' + functionId + '","bindByVerifyCodeFlag":1,"registerExtend":{"v_sex":"未知","v_name":"名称","v_birthday":"2021-0' + _0xefa210['EttWC'](Math['round'](_0xefa210['DyZPF'](Math['random'](), 0x8)), 0x1) + '-0' + _0xefa210['BVtyB'](Math['round'](_0xefa210['uJScO'](Math['random'](), 0x8)), 0x1) + '"},"writeChildFlag":0,"activityId":1454199,"channel":401}&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1627049995456_46808',
                        'headers': {
                            'Content-Type': _0xefa210['ZMvsl'],
                            'Origin': _0xefa210['jFgSQ'],
                            'Host': _0xefa210['InTgV'],
                            'accept': _0xefa210['UfgKF'],
                            'User-Agent': _0xefa210['XOeyw'],
                            'content-type': _0xefa210['jAPQT'],
                            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + functionId + '&shopId=' + functionId + '&venderType=1&channel=102&returnUrl=https%%3A%%2F%%2Flzdz1-isv.isvjcloud.com%%2Fdingzhi%%2Fdz%%2FopenCard%%2Factivity%%2F7376465%%3FactivityId%%3Dd91d932b9a3d42b9ab77dd1d5e783839%%26shareUuid%%3Ded1873cb52384a6ab42671eb6aac841d',
                            'Cookie': cookie
                        }
                    };
                } else {
                    _0x54b3b7['spesh'](_0x52a72a, _0x168f69);
                }
            }
        });
    });
}

function shopInfo() {
    var _0x4cc175 = {
        'SVCWV': function(_0x50dbb7, _0x36456f) {
            return _0x50dbb7(_0x36456f);
        },
        'mjkmu': function(_0x4643cd, _0x50976e) {
            return _0x4643cd === _0x50976e;
        },
        'cuMEK': 'wQFSY',
        'mgTPC': 'AcdZf',
        'wbpYm': 'Keep-Alive',
        'oJvJg': 'application/x-www-form-urlencoded; Charset=UTF-8',
        'wAqbU': '*/*',
        'QjMFt': 'zh-cn',
        'ednbi': 'https://lzdz1-isv.isvjcloud.com/dingzhi/shop/league/shopInfo',
        'tqeGW': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        'IepxI': 'lzdz1-isv.isvjcloud.com'
    };
    return new Promise(_0x5bcbe4 => {
        var _0x4902bf = {
            'Rpxjq': function(_0x52e82c, _0xb90aad) {
                return _0x4cc175['SVCWV'](_0x52e82c, _0xb90aad);
            },
            'LGhHT': function(_0x31540b, _0x46a00a) {
                return _0x4cc175['mjkmu'](_0x31540b, _0x46a00a);
            },
            'Yxwfc': _0x4cc175['cuMEK'],
            'dHwkM': _0x4cc175['mgTPC']
        };
        let _0x418ab6 = 'activityId=c225ad5922cf4ac8b4a68fd37f486088';
        $['post']({
            'url': 'https://lzdz1-isv.isvjcloud.com/dingzhi/shop/league/shopInfo',
            'body': _0x418ab6,
            'headers': {
                'Connection': _0x4cc175['wbpYm'],
                'Content-Type': _0x4cc175['oJvJg'],
                'Accept': _0x4cc175['wAqbU'],
                'Accept-Language': _0x4cc175['QjMFt'],
                'Referer': _0x4cc175['ednbi'],
                'User-Agent': _0x4cc175['tqeGW'],
                'Host': _0x4cc175['IepxI'],
                'Cookie': 'LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + '; AUTH_C_USER=' + $['myPingData']['secretPin'] + '; ' + $['lz_jdpin_token']
            }
        }, async (_0x136976, _0x571dc0, _0x23a588) => {
            var _0x5dcecb = {
                'lPIFu': function(_0x5c23b6, _0xceef35) {
                    return _0x4902bf['Rpxjq'](_0x5c23b6, _0xceef35);
                }
            };
            try {
                if (_0x4902bf['LGhHT'](_0x4902bf['Yxwfc'], _0x4902bf['dHwkM'])) {
                    _0x5dcecb['lPIFu'](_0x5bcbe4, _0x23a588);
                } else {
                    if (_0x136976) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {}
                }
            } catch (_0x2d4a50) {
                $['logErr'](_0x2d4a50, _0x571dc0);
            } finally {
                _0x4902bf['Rpxjq'](_0x5bcbe4, _0x23a588);
            }
        });
    });
}

function index() {
    var _0xc1767c = {
        'VSBum': function(_0x16a719, _0x14801a) {
            return _0x16a719(_0x14801a);
        },
        'aGEMg': function(_0x2cf1b6, _0x51c440) {
            return _0x2cf1b6 !== _0x51c440;
        },
        'SQVZD': 'NeklT',
        'SbGON': 'fUbmn',
        'HgIQW': function(_0x241037, _0x4cff27) {
            return _0x241037 === _0x4cff27;
        },
        'MTYEq': 'SEwcN',
        'ArTPi': 'QhiTJ',
        'hPNyE': 'gGOqX',
        'sOyFp': 'gLSrC',
        'KsQVz': 'Keep-Alive',
        'VlInW': 'application/x-www-form-urlencoded; Charset=UTF-8',
        'umUfy': '*/*',
        'fVuHm': 'zh-cn',
        'mHkJI': 'https://lzdz1-isv.isvjcloud.com/dingzhi/shop/league/shopInfo',
        'NqEIU': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        'nypUh': 'h5.m.jd.com'
    };
    return new Promise(_0x730858 => {
        if (_0xc1767c['aGEMg'](_0xc1767c['sOyFp'], _0xc1767c['sOyFp'])) {
            _0xc1767c['VSBum'](_0x730858, data);
        } else {
            let _0x1aff7a = 'activityId=c225ad5922cf4ac8b4a68fd37f486088';
            $['get']({
                'url': 'https://h5.m.jd.com/babelDiy/Zeus/2vQWcFpeGVxMqGFiUbGAM3CzqvJS/index.html?1',
                'headers': {
                    'Connection': _0xc1767c['KsQVz'],
                    'Content-Type': _0xc1767c['VlInW'],
                    'Accept': _0xc1767c['umUfy'],
                    'Accept-Language': _0xc1767c['fVuHm'],
                    'Referer': _0xc1767c['mHkJI'],
                    'User-Agent': _0xc1767c['NqEIU'],
                    'Host': _0xc1767c['nypUh'],
                    'Cookie': 'LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + '; AUTH_C_USER=' + $['myPingData']['secretPin'] + '; ' + $['lz_jdpin_token']
                }
            }, async (_0x31e1ce, _0x42ed9b, _0x1985f8) => {
                try {
                    if (_0xc1767c['aGEMg'](_0xc1767c['SQVZD'], _0xc1767c['SbGON'])) {
                        if (_0x31e1ce) {
                            if (_0xc1767c['HgIQW'](_0xc1767c['MTYEq'], _0xc1767c['ArTPi'])) {
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {}
                    } else {
                        _0x1985f8 = JSON['parse'](_0x1985f8);
                        if (_0x1985f8['errorMessage']) {
                            $['log']('' + _0x1985f8['errorMessage']);
                        }
                    }
                } catch (_0x1b8edc) {
                    if (_0xc1767c['aGEMg'](_0xc1767c['hPNyE'], _0xc1767c['hPNyE'])) {
                        _0x1985f8 = JSON['parse'](_0x1985f8);
                    } else {
                        $['logErr'](_0x1b8edc, _0x42ed9b);
                    }
                } finally {
                    _0xc1767c['VSBum'](_0x730858, _0x1985f8);
                }
            });
        }
    });
}

function adLog() {
    var _0x4cbfc1 = {
        'vxPzM': function(_0x192f71, _0x2b3bf6) {
            return _0x192f71 !== _0x2b3bf6;
        },
        'eHyQb': 'Mctnu',
        'gkabf': function(_0x2607b6, _0x3e0e90) {
            return _0x2607b6 !== _0x3e0e90;
        },
        'zIQqw': 'dnQzx',
        'UmXBE': 'UbjCy',
        'EJsyS': function(_0x32446b, _0x2d39cb) {
            return _0x32446b === _0x2d39cb;
        },
        'DxGEF': 'KTadX',
        'Nltml': 'PycVI',
        'FgFJB': function(_0x5818da, _0x1f9fdf) {
            return _0x5818da(_0x1f9fdf);
        },
        'TvpuX': 'CookieJD',
        'sfOfb': 'CookieJD2',
        'dOkac': function(_0x570283, _0x558045) {
            return _0x570283(_0x558045);
        },
        'SzGWT': 'CookiesJD',
        'BeAHv': 'cjhydz-isv.isvjcloud.com',
        'uBqJr': 'application/x-www-form-urlencoded; Charset=UTF-8',
        'MPdBh': 'https://cjhydz-isv.isvjcloud.com/common/accessLog'
    };
    return new Promise(_0x5b9024 => {
        var _0x1b6126 = {
            'ULiRf': _0x4cbfc1['TvpuX'],
            'btLVU': _0x4cbfc1['sfOfb'],
            'kHPYA': function(_0x2291ba, _0x4caae7) {
                return _0x4cbfc1['dOkac'](_0x2291ba, _0x4caae7);
            },
            'lAlTd': _0x4cbfc1['SzGWT']
        };
        $['post']({
            'url': 'https://cjhydz-isv.isvjcloud.com/common/accessLog',
            'body': 'venderId=0&code=99&pin=' + _0x4cbfc1['dOkac'](encodeURIComponent, $['myPingData']['secretPin']) + '&activityId=e3c59e3f22a64507b3b023be4b016b5f&pageUrl=https%3A%2F%2Fcjhydz-isv.isvjcloud.com%2FmicroDz%2Finvite%2Factivity%2Fwx%2Fview%2Findex%2F6654989%3FactivityId%3De3c59e3f22a64507b3b023be4b016b5f%26inviter%3Djzv2jbYRftpJUlB6E7%2Ff3%2FL7ldxmgdCpzmNX2HGi4eBuw30v%2FPoVBgxrRDHHbTlt%26inviterImg%3Dhttp%3A%2F%2Fstorage.360buyimg.com%2Fi.imageUpload%2F6a645f73495a76594b617266594d5731363237363637373836333031%5Fmid.jpg%26inviterNickName%3Dj%5FsIZvYKarfYMW%26shareuserid4minipg%3Djzv2jbYRftpJUlB6E7%252Ff3%252FL7ldxmgdCpzmNX2HGi4eBuw30v%252FPoVBgxrRDHHbTlt%26shopid%3D599119%26lng%3D0.000000%26lat%3D0.000000%26sid%3D5fa6c7778669e4865e2e7e7ba5ea098w%26un%5Farea%3D17%5F1458%5F1463%5F43894&subType=',
            'headers': {
                'User-Agent': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
                'Host': _0x4cbfc1['BeAHv'],
                'Content-Type': _0x4cbfc1['uBqJr'],
                'Referer': _0x4cbfc1['MPdBh'],
                'Cookie': 'LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + '; AUTH_C_USER=' + $['myPingData']['secretPin'] + '; ' + $['lz_jdpin_token']
            }
        }, async (_0x42cf03, _0x26d6b7, _0x3923f8) => {
            try {
                if (_0x4cbfc1['vxPzM'](_0x4cbfc1['eHyQb'], _0x4cbfc1['eHyQb'])) {
                    cookiesArr = [$['getdata'](_0x1b6126['ULiRf']), $['getdata'](_0x1b6126['btLVU']), ..._0x1b6126['kHPYA'](jsonParse, $['getdata'](_0x1b6126['lAlTd']) || '[]')['map'](_0x3b5797 => _0x3b5797['cookie'])]['filter'](_0x1f67bb => !!_0x1f67bb);
                } else {
                    if (_0x42cf03) {
                        if (_0x4cbfc1['gkabf'](_0x4cbfc1['zIQqw'], _0x4cbfc1['UmXBE'])) {
                            console['log']('' + JSON['stringify'](_0x42cf03));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            $['log'](_0x3923f8['message']);
                        }
                    } else {}
                }
            } catch (_0x2a16d2) {
                if (_0x4cbfc1['EJsyS'](_0x4cbfc1['DxGEF'], _0x4cbfc1['Nltml'])) {
                    $['isLogin'] = ![];
                    $['logErr'](_0x2a16d2, _0x26d6b7);
                } else {
                    $['logErr'](_0x2a16d2, _0x26d6b7);
                }
            } finally {
                _0x4cbfc1['FgFJB'](_0x5b9024, _0x3923f8);
            }
        });
    });
}

function taskPostUrl(_0x509d3d, _0xa1ca42, _0x50e5ef) {
    var _0x193173 = {
        'oJTxs': 'cjhydz-isv.isvjcloud.com',
        'xSFIW': 'application/json',
        'NCdxx': 'XMLHttpRequest',
        'qeRYq': 'zh-cn',
        'fwirB': 'gzip, deflate, br',
        'khAlj': 'application/x-www-form-urlencoded; Charset=UTF-8',
        'ngFGb': 'https://cjhydz-isv.isvjcloud.com',
        'xpmJu': 'keep-alive'
    };
    return {
        'url': 'https://cjhydz-isv.isvjcloud.com' + _0x509d3d,
        'body': _0xa1ca42,
        'headers': {
            'Host': _0x193173['oJTxs'],
            'Accept': _0x193173['xSFIW'],
            'X-Requested-With': _0x193173['NCdxx'],
            'Accept-Language': _0x193173['qeRYq'],
            'Accept-Encoding': _0x193173['fwirB'],
            'Content-Type': _0x193173['khAlj'],
            'Origin': _0x193173['ngFGb'],
            'Connection': _0x193173['xpmJu'],
            'Referer': _0x50e5ef ? _0x50e5ef : 'https://lzdz1-isv.isvjcloud.com/lzclient/dz/2021jan/eliminateGame/0713eliminate/?activityId=735c30216dc640638ceb6e63ff6d8b17&shareUuid=' + $['shareUuid'] + '&adsource=&shareuserid4minipg=u%2FcWHIy7%2Fx3Ij%20HjfbnnePkaL5GGqMTUc8u%2Fotw2E%20a7Ak3lgFoFQlZmf45w8Jzw&shopid=0&lng=114.062541&lat=29.541254&sid=57b59835c68ed8959d124d644f61c58w&un_area=4_48201_54794_0',
            'User-Agent': UA,
            'Cookie': cookie + ' LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + '; AUTH_C_USER=' + $['myPingData']['secretPin'] + '; ' + $['lz_jdpin_token']
        }
    };
};
_0xodD = 'jsjiami.com.v6'
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


