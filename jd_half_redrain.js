/*
半点京豆雨

boxjs订阅地址: https://raw.githubusercontent.com/nianyuguai/longzhuzhu/main/qx/longzhuzhu.boxjs.json

环境变量:
#关闭京豆雨通知
export RAIN_NOTIFY_CONTROL="false"

已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js

[task_local]
#半点京豆雨
30 16-23/1 * * * https://raw.githubusercontent.com/nianyuguai/longzhuzhu/main/qx/jd_half_redrain.js, tag=半点京豆雨, enabled=true

================Loon==============
[Script]
cron "30 16-23/1 * * *" script-path=https://raw.githubusercontent.com/nianyuguai/longzhuzhu/main/qx/jd_half_redrain.js,tag=半点京豆雨

===============Surge=================
 半点京豆雨 = type=cron,cronexp="30 16-23/1 * * *",wake-system=1,timeout=20,script-path=https://raw.githubusercontent.com/nianyuguai/longzhuzhu/main/qx/jd_half_redrain.js

============小火箭=========
 半点京豆雨= type=cron,script-path=https://raw.githubusercontent.com/nianyuguai/longzhuzhu/main/qx/jd_half_redrain.js, cronexpr="30 16-23/1 * * *",timeout=200, enable=true
 */
const $ = new Env('半点京豆雨');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;

/*
 *Progcessed By JSDec in 0.69s
 *JSDec - JSDec.js.org
 */
let _0xbb4a67 = '';
let _0x446bc9 = ![];
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x217481 => {
        cookiesArr['push'](jdCookieNode[_0x217481]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) {
        process['exit'](0x0);
    }
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ..._0x332046($['getdata']('CookiesJD') || '[]')['map'](_0x3bc589 => _0x3bc589['cookie'])]['filter'](_0x567536 => !!_0x567536);
}
const _0x5590e8 = 'https://api.m.jd.com/api';
!(async () => {
    var _0x5e628d = {
        'alouW': function(_0x569fc1, _0x1ac30c) {
            return _0x569fc1 === _0x1ac30c;
        },
        'LrGow': 'false',
        'bVmqF': function(_0x248f05, _0x4be7c3) {
            return _0x248f05 > _0x4be7c3;
        },
        'WaejJ': 'GITHUB',
        'mbQWp': function(_0x381899, _0x8f13b2) {
            return _0x381899 != _0x8f13b2;
        },
        'KJXxO': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'bfaUq': 'https://bean.m.jd.com/',
        'qKYqY': 'HALF_RAIN_RRA',
        'GXXSS': function(_0x8a752f, _0x595395) {
            return _0x8a752f !== _0x595395;
        },
        'Bxsyo': 'TXjPI',
        'Wveyq': 'XgbNt',
        'ohbdY': 'RJjBx',
        'GONLP': 'CSJLm',
        'jRXkh': function(_0x5b02fb) {
            return _0x5b02fb();
        },
        'Pdzbc': function(_0x2c3202, _0x56fbcd) {
            return _0x2c3202(_0x56fbcd);
        },
        'VzJpi': function(_0x3df52f, _0x2e4c9f) {
            return _0x3df52f < _0x2e4c9f;
        },
        'aZqSV': function(_0x146a04, _0x2638c6) {
            return _0x146a04 % _0x2638c6;
        },
        'UKpxu': function(_0x4931a5, _0x2f1db2) {
            return _0x4931a5 + _0x2f1db2;
        },
        'zQriZ': function(_0x19b9e7, _0x1e0237) {
            return _0x19b9e7 === _0x1e0237;
        },
        'cCSCb': 'bOQyc',
        'PjeEV': 'QetUA',
        'FDllQ': 'drPDC',
        'pHeAr': 'bfqRQ',
        'zjdWh': function(_0x58d013, _0x58eb8f) {
            return _0x58d013 !== _0x58eb8f;
        },
        'fPbQg': 'XLFEu',
        'IgbvN': 'voGnQ',
        'lBqPv': function(_0x1dd8ce, _0x120d34) {
            return _0x1dd8ce !== _0x120d34;
        },
        'WUKLV': 'ctVfH',
        'DYjSP': function(_0x34b913, _0x18fd4b) {
            return _0x34b913(_0x18fd4b);
        },
        'BZJVi': function(_0x403684) {
            return _0x403684();
        },
        'xUvCO': 'EIcmH',
        'SMfic': 'rCJdt',
        'MNAPj': function(_0xef9324, _0x3c3fe1) {
            return _0xef9324 / _0x3c3fe1;
        },
        'DQgUl': function(_0x797f95, _0x5bc778, _0x12c728) {
            return _0x797f95(_0x5bc778, _0x12c728);
        },
        'ZLZrt': function(_0x435196, _0x1da6f8) {
            return _0x435196 <= _0x1da6f8;
        },
        'QITcD': function(_0x3970ba, _0x1d8b99, _0x47cd7b) {
            return _0x3970ba(_0x1d8b99, _0x47cd7b);
        },
        'EKMom': function(_0x574823, _0x482681, _0xa5234a) {
            return _0x574823(_0x482681, _0xa5234a);
        },
        'hDZtj': function(_0x189124, _0x226450) {
            return _0x189124(_0x226450);
        },
        'rAfou': function(_0x164410, _0x58f719, _0x2bba09) {
            return _0x164410(_0x58f719, _0x2bba09);
        },
        'hFSRt': function(_0x3e1921) {
            return _0x3e1921();
        },
        'rJGro': 'BRfDl',
        'Gcigb': 'BIfFM'
    };
    console['log']('\x0a');
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x5e628d['KJXxO'], _0x5e628d['bfaUq'], {
            'open-url': _0x5e628d['bfaUq']
        });
        return;
    }
    let _0x59b669 = '';
    if (!$['isNode']() && $['getdata'](_0x5e628d['qKYqY'])) {
        if (_0x5e628d['GXXSS'](_0x5e628d['Bxsyo'], _0x5e628d['Wveyq'])) {
            _0x59b669 = $['getdata'](_0x5e628d['qKYqY']);
            $['log']('本地配置RRA: ' + _0x59b669);
        } else {
            return !![];
        }
    } else {
        if (_0x5e628d['alouW'](_0x5e628d['ohbdY'], _0x5e628d['GONLP'])) {
            return code;
        } else {
            let _0x315c64 = _0x5e628d['jRXkh'](_0x18f0f7);
            console['log']('召唤龙王~');
            _0x59b669 = await _0x5e628d['Pdzbc'](_0xd5e08a, _0x315c64);
            console['log']('召唤完成');
        }
    }
    if (!_0x59b669) {
        $['log']('今日龙王🐲休假，晴空万里☀️，改日再来～\n前往龙王庙祈福求雨: https://t.me/longzhuzhu');
        return;
    }
    let _0x3f5147 = _0x59b669['split'](';');
    _0x3f5147 = _0x3f5147['map'](_0x301d4f => _0x1a043d(_0x301d4f));
    console['log']('龙王就位: ' + _0x3f5147 + '\x0a');
    for (let _0x27f2ea of _0x3f5147) {
        let _0xc92f0 = {};
        for (let _0x259425 = 0x0; _0x5e628d['VzJpi'](_0x259425, 0x18); _0x259425++) {
            _0xc92f0[_0x5e628d['Pdzbc'](String, _0x259425)] = _0x27f2ea;
        }
        let _0x163d13 = _0x5e628d['aZqSV'](_0x5e628d['UKpxu'](new Date()['getUTCHours'](), 0x8), 0x18);
        if (_0x5e628d['alouW'](new Date()['getMinutes'](), 0x3b) && _0x446bc9) {
            await _0x5e628d['Pdzbc'](_0x307112, 0xea60);
        }
        if (_0xc92f0[_0x163d13]) {
            if (_0x5e628d['zQriZ'](_0x5e628d['cCSCb'], _0x5e628d['PjeEV'])) {
                Object['keys'](jdCookieNode)['forEach'](_0xa91bed => {
                    cookiesArr['push'](jdCookieNode[_0xa91bed]);
                });
                if (process['env']['JD_DEBUG'] && _0x5e628d['alouW'](process['env']['JD_DEBUG'], _0x5e628d['LrGow'])) console['log'] = () => {};
                if (_0x5e628d['bVmqF'](JSON['stringify'](process['env'])['indexOf'](_0x5e628d['WaejJ']), -0x1)) {
                    process['exit'](0x0);
                }
            } else {
                $['activityId'] = _0xc92f0[_0x163d13];
                $['log']('RRA: ' + _0x27f2ea + '\x0a');
            }
        } else {
            if (_0x5e628d['zQriZ'](_0x5e628d['FDllQ'], _0x5e628d['pHeAr'])) {
                return _0x5e628d['mbQWp'](process['env']['RAIN_NOTIFY_CONTROL'], _0x5e628d['LrGow']);
            } else {
                $['log']('无法从本地读取配置，请检查运行时间');
                return;
            }
        }
        for (let _0x584794 = 0x0; _0x5e628d['VzJpi'](_0x584794, cookiesArr['length']); _0x584794++) {
            if (_0x5e628d['zjdWh'](_0x5e628d['fPbQg'], _0x5e628d['IgbvN'])) {
                if (cookiesArr[_0x584794]) {
                    if (_0x5e628d['lBqPv'](_0x5e628d['WUKLV'], _0x5e628d['WUKLV'])) {
                        console['log']('京东服务器返回空数据');
                    } else {
                        cookie = cookiesArr[_0x584794];
                        $['UserName'] = _0x5e628d['DYjSP'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                        $['index'] = _0x5e628d['UKpxu'](_0x584794, 0x1);
                        $['isLogin'] = !![];
                        $['nickName'] = '';
                        message = '';
                        await _0x5e628d['BZJVi'](_0x1fbe85);
                        console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                        if (!$['isLogin']) {
                            if (_0x5e628d['lBqPv'](_0x5e628d['xUvCO'], _0x5e628d['SMfic'])) {
                                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/', {
                                    'open-url': _0x5e628d['bfaUq']
                                });
                                if ($['isNode']()) {
                                    await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                                }
                                continue;
                            } else {
                                id = '';
                            }
                        }
                        if (_0x446bc9 && _0x5e628d['bVmqF'](_0x5e628d['MNAPj'](_0x584794, _0x5e628d['DQgUl'](_0x341ba3, 0xf, 0x14)), 0x1) && _0x5e628d['ZLZrt'](_0x5e628d['QITcD'](_0x341ba3, 0x1, 0x64), _0x5e628d['EKMom'](_0x341ba3, 0xa, 0x14))) {
                            _0x5e628d['hDZtj'](_0x307112, _0x5e628d['rAfou'](_0x341ba3, 0xfa, 0x1f4));
                            $['log']('异常：{"msg":"好可惜哦，奖品与你擦肩而过","code":"0","subCode":"5"}');
                            continue;
                        }
                        await _0x5e628d['BZJVi'](_0x2410a9);
                    }
                }
            } else {
                $['log']('今日龙王🐲休假，晴空万里☀️，改日再来～\n前往龙王庙祈福求雨: https://t.me/longzhuzhu');
                return;
            }
        }
    }
    if (_0xbb4a67 && _0x5e628d['hFSRt'](_0x269e3c)) {
        if (_0x5e628d['lBqPv'](_0x5e628d['rJGro'], _0x5e628d['Gcigb'])) {
            if ($['isNode']()) await notify['sendNotify']('' + $['name'], '' + _0xbb4a67);
            $['msg']($['name'], '', _0xbb4a67);
        } else {
            $['logErr'](e, resp);
        }
    }
})()['catch'](_0x507ec7 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x507ec7 + '!', '');
})['finally'](() => {
    $['done']();
});

function _0x307112(_0x4af462) {
    return new Promise(_0x3f876c => setTimeout(_0x3f876c, _0x4af462));
}

function _0x1a043d(_0xcc6b20) {
    var _0x15df47 = {
        'iDihq': function(_0x276535, _0x3ddffc) {
            return _0x276535 != _0x3ddffc;
        },
        'SKTTt': function(_0x14b4ba, _0x54e0d5) {
            return _0x14b4ba < _0x54e0d5;
        },
        'vlADX': function(_0x3fb2b1, _0x4d8dc4) {
            return _0x3fb2b1 + _0x4d8dc4;
        },
        'SMsmT': function(_0x4f5212, _0x59db28, _0x309760) {
            return _0x4f5212(_0x59db28, _0x309760);
        }
    };
    if (_0x15df47['iDihq'](_0xcc6b20['indexOf']('-'), -0x1)) {
        _0x446bc9 = !![];
        let _0x575a72 = _0xcc6b20['trim']()['replace'](/-/g, '');
        var _0x28b1a6 = _0x575a72['split']('')['reverse']()['join']('');
        var _0xa04d18 = _0x28b1a6['length'];
        var _0x44ea34;
        var _0x33da5f = [];
        for (var _0x3a877b = 0x0; _0x15df47['SKTTt'](_0x3a877b, _0xa04d18); _0x3a877b = _0x15df47['vlADX'](_0x3a877b, 0x2)) {
            _0x44ea34 = _0x15df47['SMsmT'](parseInt, _0x28b1a6['substr'](_0x3a877b, 0x2), 0x10);
            _0x33da5f['push'](String['fromCharCode'](_0x44ea34));
        }
        return _0x33da5f['join']('')['replace'](/#/g, '');
    } else {
        return _0xcc6b20;
    }
}

function _0x341ba3(_0x2a4efe, _0x2e4045) {
    var _0x2992f1 = {
        'fIAlr': function(_0x1c337e, _0xa7ffba) {
            return _0x1c337e + _0xa7ffba;
        },
        'asCHD': function(_0x28b0f1, _0x357233) {
            return _0x28b0f1 * _0x357233;
        },
        'Bcsyx': function(_0x1f6c8d, _0x179cb8) {
            return _0x1f6c8d - _0x179cb8;
        }
    };
    return _0x2992f1['fIAlr'](Math['floor'](_0x2992f1['asCHD'](Math['random'](), _0x2992f1['Bcsyx'](_0x2e4045, _0x2a4efe))), _0x2a4efe);
}

function _0x2410a9() {
    var _0x1adb95 = {
        'FzwLe': function(_0x439766, _0x1b5b5b) {
            return _0x439766(_0x1b5b5b);
        },
        'okPpz': function(_0x2c0a4f, _0x632a12) {
            return _0x2c0a4f == _0x632a12;
        },
        'xAAQz': 'object',
        'PIoVl': function(_0x33b4ba, _0x4d9ae0) {
            return _0x33b4ba != _0x4d9ae0;
        },
        'FnoTD': 'false',
        'taZuE': 'RAIN_NOTIFY_CONTROL',
        'LusEm': function(_0x41b058, _0x272b15) {
            return _0x41b058 !== _0x272b15;
        },
        'waPlB': 'eeJqf',
        'DvjTR': 'kwmYY',
        'RGijn': function(_0x810b3c, _0x5c7054) {
            return _0x810b3c === _0x5c7054;
        },
        'NaobN': 'qFuhh',
        'kuuui': 'svAFK',
        'TOvkL': function(_0x490d30, _0x2dd090) {
            return _0x490d30(_0x2dd090);
        },
        'VRgzN': function(_0x2ff3c4, _0x45bcd6) {
            return _0x2ff3c4 === _0x45bcd6;
        },
        'ZAUkX': 'jZWdX',
        'vonlW': 'jmasb',
        'GZUIA': 'JmwJq',
        'YRUSn': function(_0x52364c, _0x33c7af) {
            return _0x52364c !== _0x33c7af;
        },
        'blYkZ': 'Kiopv',
        'CrucZ': 'bwkuy',
        'rnhOI': function(_0x1c268a) {
            return _0x1c268a();
        },
        'LbNyM': function(_0x554f41, _0x3929ae, _0x26901e) {
            return _0x554f41(_0x3929ae, _0x26901e);
        },
        'ajTZb': 'noahRedRainLottery'
    };
    return new Promise(_0x13617a => {
        var _0x301ad8 = {
            'KWNdt': function(_0x371766, _0x914a55) {
                return _0x1adb95['FzwLe'](_0x371766, _0x914a55);
            },
            'kADZh': function(_0x2a2494, _0x2e08fd) {
                return _0x1adb95['okPpz'](_0x2a2494, _0x2e08fd);
            },
            'aUeLg': _0x1adb95['xAAQz'],
            'UskNK': function(_0x26f626, _0x26b7ea) {
                return _0x1adb95['PIoVl'](_0x26f626, _0x26b7ea);
            },
            'tRMud': _0x1adb95['FnoTD'],
            'SAzPN': _0x1adb95['taZuE'],
            'XXlqn': function(_0x3cc189, _0x307b70) {
                return _0x1adb95['LusEm'](_0x3cc189, _0x307b70);
            },
            'wNvNz': _0x1adb95['waPlB'],
            'PwnxS': function(_0x4621c7, _0x57ba37) {
                return _0x1adb95['LusEm'](_0x4621c7, _0x57ba37);
            },
            'lgsMT': _0x1adb95['DvjTR'],
            'cxrKk': function(_0x430477, _0xd6e21d) {
                return _0x1adb95['RGijn'](_0x430477, _0xd6e21d);
            },
            'zDUBq': _0x1adb95['NaobN'],
            'JYSlO': _0x1adb95['kuuui'],
            'ZkBvT': function(_0x473e31, _0x285fca) {
                return _0x1adb95['TOvkL'](_0x473e31, _0x285fca);
            },
            'xFifS': function(_0x489bc8, _0x4add91) {
                return _0x1adb95['VRgzN'](_0x489bc8, _0x4add91);
            },
            'xEpvS': function(_0x2f8070, _0x3939d3) {
                return _0x1adb95['LusEm'](_0x2f8070, _0x3939d3);
            },
            'VPKCo': _0x1adb95['ZAUkX'],
            'rFIcw': _0x1adb95['vonlW'],
            'fWwxe': _0x1adb95['GZUIA'],
            'GUlAW': function(_0x1636a1, _0x106e22) {
                return _0x1adb95['YRUSn'](_0x1636a1, _0x106e22);
            },
            'Qyvok': _0x1adb95['blYkZ'],
            'qspaG': _0x1adb95['CrucZ'],
            'MymJP': function(_0x299030) {
                return _0x1adb95['rnhOI'](_0x299030);
            }
        };
        const _0x128b0c = {
            'actId': $['activityId']
        };
        $['get'](_0x1adb95['LbNyM'](_0x4a7dc3, _0x1adb95['ajTZb'], _0x128b0c), (_0x4a4fc1, _0x3bda54, _0x46fecc) => {
            var _0x2c27bc = {
                'FxIvM': function(_0x226741, _0x2276dc) {
                    return _0x301ad8['KWNdt'](_0x226741, _0x2276dc);
                },
                'ULglZ': function(_0x22f20c, _0x31a381) {
                    return _0x301ad8['kADZh'](_0x22f20c, _0x31a381);
                },
                'WhgWN': _0x301ad8['aUeLg'],
                'mtOVC': function(_0x44ce2d, _0x469f3c) {
                    return _0x301ad8['UskNK'](_0x44ce2d, _0x469f3c);
                },
                'wcIIX': _0x301ad8['tRMud'],
                'PcTmL': _0x301ad8['SAzPN']
            };
            if (_0x301ad8['XXlqn'](_0x301ad8['wNvNz'], _0x301ad8['wNvNz'])) {
                ids[_0x2c27bc['FxIvM'](String, i)] = codeItem;
            } else {
                try {
                    if (_0x301ad8['PwnxS'](_0x301ad8['lgsMT'], _0x301ad8['lgsMT'])) {
                        if (_0x2c27bc['ULglZ'](typeof JSON['parse'](_0x46fecc), _0x2c27bc['WhgWN'])) {
                            return !![];
                        }
                    } else {
                        if (_0x4a4fc1) {
                            console['log']('' + JSON['stringify'](_0x4a4fc1));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x301ad8['cxrKk'](_0x301ad8['zDUBq'], _0x301ad8['JYSlO'])) {
                                if ($['isNode']() && process['env']['RAIN_NOTIFY_CONTROL']) {
                                    return _0x2c27bc['mtOVC'](process['env']['RAIN_NOTIFY_CONTROL'], _0x2c27bc['wcIIX']);
                                } else if ($['getdata'](_0x2c27bc['PcTmL'])) {
                                    return _0x2c27bc['mtOVC']($['getdata'](_0x2c27bc['PcTmL']), _0x2c27bc['wcIIX']);
                                }
                                return !![];
                            } else {
                                if (_0x301ad8['ZkBvT'](_0x2a6b3c, _0x46fecc)) {
                                    _0x46fecc = JSON['parse'](_0x46fecc);
                                    if (_0x301ad8['xFifS'](_0x46fecc['subCode'], '0')) {
                                        console['log']('领取成功，获得' + JSON['stringify'](_0x46fecc['lotteryResult']));
                                        message += '领取成功，获得 ' + _0x46fecc['lotteryResult']['jPeasList'][0x0]['quantity'] + '京豆';
                                        _0xbb4a67 += '京东账号' + $['index'] + '-' + ($['nickName'] || $['UserName']) + '\n领取成功，获得 ' + _0x46fecc['lotteryResult']['jPeasList'][0x0]['quantity'] + '京豆' + (_0x301ad8['xEpvS']($['index'], cookiesArr['length']) ? '\x0a\x0a' : '\x0a\x0a');
                                    } else if (_0x301ad8['xFifS'](_0x46fecc['subCode'], '8')) {
                                        if (_0x301ad8['xFifS'](_0x301ad8['VPKCo'], _0x301ad8['VPKCo'])) {
                                            console['log']('今日次数已满');
                                            message += '领取失败，本场已领过';
                                        } else {
                                            $['nickName'] = $['UserName'];
                                        }
                                    } else {
                                        if (_0x301ad8['xEpvS'](_0x301ad8['rFIcw'], _0x301ad8['fWwxe'])) {
                                            console['log']('异常：' + JSON['stringify'](_0x46fecc));
                                        } else {
                                            console['log'](e);
                                            console['log']('京东服务器访问数据为空，请检查自身设备网络情况');
                                            return ![];
                                        }
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x5e394f) {
                    $['logErr'](_0x5e394f, _0x3bda54);
                } finally {
                    if (_0x301ad8['GUlAW'](_0x301ad8['Qyvok'], _0x301ad8['qspaG'])) {
                        _0x301ad8['MymJP'](_0x13617a);
                    } else {
                        console['log']('' + JSON['stringify'](_0x4a4fc1));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                }
            }
        });
    });
}

function _0xd5e08a(_0x18c5c0) {
    var _0x4732d2 = {
        'KTzQB': function(_0x2d8e5d, _0x5ec218) {
            return _0x2d8e5d !== _0x5ec218;
        },
        'gUSjS': 'CALZy',
        'cxwnQ': function(_0x5164fc, _0x5b2b15) {
            return _0x5164fc == _0x5b2b15;
        },
        'PrhME': function(_0x37ea67, _0x25d211) {
            return _0x37ea67 === _0x25d211;
        },
        'JTEKr': 'RbbfP',
        'GCUJi': 'nrBry',
        'wJZji': function(_0x38a198, _0x5ca717) {
            return _0x38a198(_0x5ca717);
        },
        'AwtCg': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'UCDyI': 'https://bean.m.jd.com/'
    };
    return new Promise(_0x244d32 => {
        var _0x24ad9d = {
            'IekPP': _0x4732d2['AwtCg'],
            'zaKRM': _0x4732d2['UCDyI']
        };
        let _0x1292d3 = '';
        $['get']({
            'url': _0x18c5c0
        }, async (_0x1882ea, _0x5b022e, _0x450df3) => {
            if (_0x4732d2['KTzQB'](_0x4732d2['gUSjS'], _0x4732d2['gUSjS'])) {
                $['msg']($['name'], _0x24ad9d['IekPP'], _0x24ad9d['zaKRM'], {
                    'open-url': _0x24ad9d['zaKRM']
                });
                return;
            } else {
                try {
                    if (_0x1882ea) {
                        if (_0x4732d2['cxwnQ'](_0x5b022e['statusCode'], 0x202)) {
                            console['log']('庙里挤不进去, 请稍后重试~');
                        } else {
                            console['log']('' + JSON['stringify'](_0x1882ea));
                        }
                        _0x1292d3 = '';
                    } else {
                        if (!!_0x450df3) {
                            _0x1292d3 = _0x450df3['replace'](/[\r\n]/g, '');
                        } else {
                            _0x1292d3 = '';
                        }
                    }
                } catch (_0x410488) {
                    if (_0x4732d2['PrhME'](_0x4732d2['JTEKr'], _0x4732d2['GCUJi'])) {
                        return JSON['parse'](str);
                    } else {
                        $['logErr'](_0x410488, _0x5b022e);
                    }
                } finally {
                    _0x4732d2['wJZji'](_0x244d32, _0x1292d3);
                }
            }
        });
    });
}

function _0x18f0f7() {
    var _0x3db101 = {
        'wWfMt': 'https://jd-rra-1255594201.file.myqcloud.com/jd-half-rain.json',
        'qySTa': 'JD_HALF_RRA_URL',
        'aQrZm': function(_0xbeeef, _0xe528be) {
            return _0xbeeef === _0xe528be;
        },
        'ahHAh': 'vJDHN',
        'iOKJJ': 'DvBzd'
    };
    let _0x372a88 = _0x3db101['wWfMt'];
    if ($['isNode']() && process['env']['JD_HALF_RRA_URL']) {
        if (_0x3db101['aQrZm'](_0x3db101['ahHAh'], _0x3db101['iOKJJ'])) {
            let _0x558759 = _0x3db101['wWfMt'];
            if ($['isNode']() && process['env']['JD_HALF_RRA_URL']) {
                _0x558759 = process['env']['JD_HALF_RRA_URL'];
            } else if ($['getdata'](_0x3db101['qySTa'])) {
                _0x558759 = $['getdata'](_0x3db101['qySTa']);
            }
            return _0x558759;
        } else {
            _0x372a88 = process['env']['JD_HALF_RRA_URL'];
        }
    } else if ($['getdata'](_0x3db101['qySTa'])) {
        _0x372a88 = $['getdata'](_0x3db101['qySTa']);
    }
    return _0x372a88;
}

function _0x269e3c() {
    var _0x5268e0 = {
        'XmHBV': function(_0x16b7ff, _0x4c7a9d) {
            return _0x16b7ff(_0x4c7a9d);
        },
        'HkUPH': function(_0x432534, _0x4c68b1) {
            return _0x432534 + _0x4c68b1;
        },
        'vhMMx': function(_0x37731c, _0x31ab00) {
            return _0x37731c + _0x31ab00;
        },
        'CYgEo': function(_0x4b300f, _0x5ccce0) {
            return _0x4b300f * _0x5ccce0;
        },
        'FKavl': function(_0x1154b7, _0x3463ed) {
            return _0x1154b7 * _0x3463ed;
        },
        'OJqVy': function(_0x5d21ea, _0x105eef) {
            return _0x5d21ea * _0x105eef;
        },
        'WnvmA': '*/*',
        'PwaZc': 'gzip, deflate, br',
        'sllAS': 'zh-cn',
        'rMPjD': 'keep-alive',
        'dXsJr': 'application/x-www-form-urlencoded',
        'EDrvi': 'api.m.jd.com',
        'jKYjR': 'JD4iPhone/9.3.5 CFNetwork/1209 Darwin/20.2.0',
        'CmFVb': function(_0xb7507, _0x37262f) {
            return _0xb7507 !== _0x37262f;
        },
        'tQXXT': 'ZgeqZ',
        'FMpqU': function(_0x2c3b84, _0x2dc77b) {
            return _0x2c3b84 != _0x2dc77b;
        },
        'nwZSi': 'false',
        'oSuYL': 'RAIN_NOTIFY_CONTROL',
        'yQNab': function(_0x350a8f, _0x196614) {
            return _0x350a8f != _0x196614;
        }
    };
    if ($['isNode']() && process['env']['RAIN_NOTIFY_CONTROL']) {
        if (_0x5268e0['CmFVb'](_0x5268e0['tQXXT'], _0x5268e0['tQXXT'])) {
            return {
                'url': _0x5590e8 + '?functionId=' + function_id + '&body=' + _0x5268e0['XmHBV'](escape, JSON['stringify'](body)) + '&client=wh5&clientVersion=1.0.0&_=' + _0x5268e0['HkUPH'](_0x5268e0['vhMMx'](new Date()['getTime'](), _0x5268e0['CYgEo'](_0x5268e0['FKavl'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x5268e0['FKavl'](_0x5268e0['OJqVy'](_0x5268e0['OJqVy'](0x8, 0x3c), 0x3c), 0x3e8)),
                'headers': {
                    'Accept': _0x5268e0['WnvmA'],
                    'Accept-Encoding': _0x5268e0['PwaZc'],
                    'Accept-Language': _0x5268e0['sllAS'],
                    'Connection': _0x5268e0['rMPjD'],
                    'Content-Type': _0x5268e0['dXsJr'],
                    'Host': _0x5268e0['EDrvi'],
                    'Referer': 'https://h5.m.jd.com/active/redrain/index.html?id=' + $['activityId'] + '&lng=0.000000&lat=0.000000&sid=&un_area=',
                    'Cookie': cookie,
                    'User-Agent': _0x5268e0['jKYjR']
                }
            };
        } else {
            return _0x5268e0['FMpqU'](process['env']['RAIN_NOTIFY_CONTROL'], _0x5268e0['nwZSi']);
        }
    } else if ($['getdata'](_0x5268e0['oSuYL'])) {
        return _0x5268e0['yQNab']($['getdata'](_0x5268e0['oSuYL']), _0x5268e0['nwZSi']);
    }
    return !![];
}

function _0x4a7dc3(_0x10dfbb, _0x3b1cd3 = {}) {
    var _0x4b4aaf = {
        'XEmwV': function(_0x374038, _0x1ac37f) {
            return _0x374038(_0x1ac37f);
        },
        'Rkkal': function(_0x42af1e, _0x1e22d7) {
            return _0x42af1e + _0x1e22d7;
        },
        'QfODD': function(_0x2bbedf, _0x40c462) {
            return _0x2bbedf * _0x40c462;
        },
        'mqHli': '*/*',
        'cMRsJ': 'gzip, deflate, br',
        'fnokc': 'zh-cn',
        'jbpVp': 'keep-alive',
        'aySwa': 'application/x-www-form-urlencoded',
        'FFZJl': 'api.m.jd.com',
        'QgqnH': 'JD4iPhone/9.3.5 CFNetwork/1209 Darwin/20.2.0'
    };
    return {
        'url': _0x5590e8 + '?functionId=' + _0x10dfbb + '&body=' + _0x4b4aaf['XEmwV'](escape, JSON['stringify'](_0x3b1cd3)) + '&client=wh5&clientVersion=1.0.0&_=' + _0x4b4aaf['Rkkal'](_0x4b4aaf['Rkkal'](new Date()['getTime'](), _0x4b4aaf['QfODD'](_0x4b4aaf['QfODD'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x4b4aaf['QfODD'](_0x4b4aaf['QfODD'](_0x4b4aaf['QfODD'](0x8, 0x3c), 0x3c), 0x3e8)),
        'headers': {
            'Accept': _0x4b4aaf['mqHli'],
            'Accept-Encoding': _0x4b4aaf['cMRsJ'],
            'Accept-Language': _0x4b4aaf['fnokc'],
            'Connection': _0x4b4aaf['jbpVp'],
            'Content-Type': _0x4b4aaf['aySwa'],
            'Host': _0x4b4aaf['FFZJl'],
            'Referer': 'https://h5.m.jd.com/active/redrain/index.html?id=' + $['activityId'] + '&lng=0.000000&lat=0.000000&sid=&un_area=',
            'Cookie': cookie,
            'User-Agent': _0x4b4aaf['QgqnH']
        }
    };
}

function _0x1fbe85() {
    var _0x8c07df = {
        'vPWdK': function(_0x2db937, _0x43ca4f) {
            return _0x2db937 + _0x43ca4f;
        },
        'HIcTc': function(_0x15e1cc, _0x8cb172) {
            return _0x15e1cc * _0x8cb172;
        },
        'ElzPi': function(_0x28449c, _0x306d41) {
            return _0x28449c - _0x306d41;
        },
        'gGGSd': '不要在BoxJS手动复制粘贴修改cookie',
        'ZdyCr': 'JD_HALF_RRA_URL',
        'LqXHJ': function(_0x13b747, _0x37a0e9) {
            return _0x13b747 == _0x37a0e9;
        },
        'vXBFf': function(_0x16c050, _0x5823d6) {
            return _0x16c050 === _0x5823d6;
        },
        'cCiGu': 'xRpTq',
        'LBXSX': function(_0x8dc41b, _0x278bf5) {
            return _0x8dc41b !== _0x278bf5;
        },
        'ULcKR': 'vAJpx',
        'CDFxP': 'retcode',
        'QUDli': 'XJIap',
        'wAbuD': 'JeQNb',
        'ncmBF': 'base',
        'HecNZ': function(_0x3d6373, _0x325c20) {
            return _0x3d6373 === _0x325c20;
        },
        'xGveF': 'SLUwx',
        'rNjLz': 'VNkxf',
        'hpkIo': 'eHoQX',
        'rvFni': 'TZDVv',
        'egWfX': 'eXMEz',
        'OgRZJ': function(_0x57e366) {
            return _0x57e366();
        },
        'iPPrR': 'application/json,text/plain, */*',
        'SSXKB': 'application/x-www-form-urlencoded',
        'GUmra': 'gzip, deflate, br',
        'KhbZV': 'zh-cn',
        'DvOUm': 'keep-alive',
        'hrSNP': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'tNIOS': 'JD4iPhone/9.3.5 CFNetwork/1209 Darwin/20.2.0',
        'EttnX': 'JDUA'
    };
    return new Promise(async _0x48100b => {
        var _0x3d6912 = {
            'Nzfrk': function(_0x4f672a, _0x289f0c) {
                return _0x8c07df['vPWdK'](_0x4f672a, _0x289f0c);
            },
            'hIyeX': function(_0x1b4cb1, _0x266b60) {
                return _0x8c07df['HIcTc'](_0x1b4cb1, _0x266b60);
            },
            'Pfsvv': function(_0x1412d5, _0x23a4c6) {
                return _0x8c07df['ElzPi'](_0x1412d5, _0x23a4c6);
            },
            'CMmlu': _0x8c07df['gGGSd'],
            'hlBoK': _0x8c07df['ZdyCr'],
            'JTHFN': function(_0x2c6bfc, _0x58302f) {
                return _0x8c07df['LqXHJ'](_0x2c6bfc, _0x58302f);
            },
            'oJasE': function(_0x4e6e51, _0x58314e) {
                return _0x8c07df['vXBFf'](_0x4e6e51, _0x58314e);
            },
            'uzgnd': _0x8c07df['cCiGu'],
            'erxqR': function(_0x492cc1, _0x4225e2) {
                return _0x8c07df['LBXSX'](_0x492cc1, _0x4225e2);
            },
            'XuWri': _0x8c07df['ULcKR'],
            'SxTJc': _0x8c07df['CDFxP'],
            'wuYLV': _0x8c07df['QUDli'],
            'gWmrv': _0x8c07df['wAbuD'],
            'LIVrp': _0x8c07df['ncmBF'],
            'DaRND': function(_0x5da8b8, _0x4d83f4) {
                return _0x8c07df['HecNZ'](_0x5da8b8, _0x4d83f4);
            },
            'WMaTe': _0x8c07df['xGveF'],
            'ODTaK': _0x8c07df['rNjLz'],
            'EdFEf': _0x8c07df['hpkIo'],
            'Jxcvm': _0x8c07df['rvFni'],
            'gPWZL': _0x8c07df['egWfX'],
            'nexJM': function(_0x171ad4) {
                return _0x8c07df['OgRZJ'](_0x171ad4);
            }
        };
        const _0x346876 = {
            'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
            'headers': {
                'Accept': _0x8c07df['iPPrR'],
                'Content-Type': _0x8c07df['SSXKB'],
                'Accept-Encoding': _0x8c07df['GUmra'],
                'Accept-Language': _0x8c07df['KhbZV'],
                'Connection': _0x8c07df['DvOUm'],
                'Cookie': cookie,
                'Referer': _0x8c07df['hrSNP'],
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x8c07df['tNIOS'] : $['getdata'](_0x8c07df['EttnX']) ? $['getdata'](_0x8c07df['EttnX']) : _0x8c07df['tNIOS']
            }
        };
        $['post'](_0x346876, (_0x209a68, _0x1ee4e1, _0x492e58) => {
            var _0x46d2d9 = {
                'GtoTi': _0x3d6912['hlBoK'],
                'rUCNQ': function(_0x55bbc0, _0x5e2066) {
                    return _0x3d6912['JTHFN'](_0x55bbc0, _0x5e2066);
                }
            };
            try {
                if (_0x209a68) {
                    if (_0x3d6912['oJasE'](_0x3d6912['uzgnd'], _0x3d6912['uzgnd'])) {
                        console['log']('' + JSON['stringify'](_0x209a68));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        console['log']('庙里挤不进去, 请稍后重试~');
                    }
                } else {
                    if (_0x3d6912['erxqR'](_0x3d6912['XuWri'], _0x3d6912['XuWri'])) {
                        $['isLogin'] = ![];
                        return;
                    } else {
                        if (_0x492e58) {
                            _0x492e58 = JSON['parse'](_0x492e58);
                            if (_0x3d6912['oJasE'](_0x492e58[_0x3d6912['SxTJc']], 0xd)) {
                                $['isLogin'] = ![];
                                return;
                            }
                            if (_0x3d6912['oJasE'](_0x492e58[_0x3d6912['SxTJc']], 0x0)) {
                                if (_0x3d6912['oJasE'](_0x3d6912['wuYLV'], _0x3d6912['gWmrv'])) {
                                    url = $['getdata'](_0x46d2d9['GtoTi']);
                                } else {
                                    $['nickName'] = _0x492e58[_0x3d6912['LIVrp']] && _0x492e58[_0x3d6912['LIVrp']]['nickname'] || $['UserName'];
                                }
                            } else {
                                if (_0x3d6912['DaRND'](_0x3d6912['WMaTe'], _0x3d6912['WMaTe'])) {
                                    $['nickName'] = $['UserName'];
                                } else {
                                    return _0x3d6912['Nzfrk'](Math['floor'](_0x3d6912['hIyeX'](Math['random'](), _0x3d6912['Pfsvv'](max, min))), min);
                                }
                            }
                        } else {
                            if (_0x3d6912['erxqR'](_0x3d6912['ODTaK'], _0x3d6912['EdFEf'])) {
                                console['log']('京东服务器返回空数据');
                            } else {
                                console['log'](e);
                                $['msg']($['name'], '', _0x3d6912['CMmlu']);
                                return [];
                            }
                        }
                    }
                }
            } catch (_0x527be7) {
                if (_0x3d6912['DaRND'](_0x3d6912['Jxcvm'], _0x3d6912['gPWZL'])) {
                    if (_0x46d2d9['rUCNQ'](_0x1ee4e1['statusCode'], 0x202)) {
                        console['log']('庙里挤不进去, 请稍后重试~');
                    } else {
                        console['log']('' + JSON['stringify'](_0x209a68));
                    }
                    id = '';
                } else {
                    $['logErr'](_0x527be7, _0x1ee4e1);
                }
            } finally {
                _0x3d6912['nexJM'](_0x48100b);
            }
        });
    });
}

function _0x2a6b3c(_0x51e159) {
    var _0x5cb75b = {
        'ycJLx': function(_0x586d30, _0x3e0ecf) {
            return _0x586d30 !== _0x3e0ecf;
        },
        'dEiMG': 'FPcfv',
        'AcOml': 'tPgcu',
        'uOwyi': function(_0x19b084, _0x5374d3) {
            return _0x19b084 == _0x5374d3;
        },
        'HjzHK': 'object',
        'gZaDQ': function(_0xad525b, _0x454ead) {
            return _0xad525b === _0x454ead;
        },
        'nFvdX': 'nelQe'
    };
    try {
        if (_0x5cb75b['ycJLx'](_0x5cb75b['dEiMG'], _0x5cb75b['AcOml'])) {
            if (_0x5cb75b['uOwyi'](typeof JSON['parse'](_0x51e159), _0x5cb75b['HjzHK'])) {
                if (_0x5cb75b['gZaDQ'](_0x5cb75b['nFvdX'], _0x5cb75b['nFvdX'])) {
                    return !![];
                } else {
                    console['log']('今日次数已满');
                    message += '领取失败，本场已领过';
                }
            }
        } else {
            console['log']('异常：' + JSON['stringify'](_0x51e159));
        }
    } catch (_0x578775) {
        console['log'](_0x578775);
        console['log']('京东服务器访问数据为空，请检查自身设备网络情况');
        return ![];
    }
}

function _0x332046(_0x1facd2) {
    var _0x163c5b = {
        'EPist': function(_0x5633e1, _0x4b4f07) {
            return _0x5633e1 != _0x4b4f07;
        },
        'YsXeL': function(_0x293050, _0x4a77f8) {
            return _0x293050 < _0x4a77f8;
        },
        'hyRDG': function(_0x3a548b, _0x605e29) {
            return _0x3a548b + _0x605e29;
        },
        'qpkIf': function(_0xfa4a42, _0x1a8fb9, _0x13aee8) {
            return _0xfa4a42(_0x1a8fb9, _0x13aee8);
        },
        'GVNjX': function(_0xa65e11, _0x3f12) {
            return _0xa65e11 == _0x3f12;
        },
        'EItmr': 'string',
        'Ouwol': function(_0x5c2bed, _0x3dd205) {
            return _0x5c2bed === _0x3dd205;
        },
        'QaydQ': 'AmIle',
        'rbVLi': '不要在BoxJS手动复制粘贴修改cookie'
    };
    if (_0x163c5b['GVNjX'](typeof _0x1facd2, _0x163c5b['EItmr'])) {
        if (_0x163c5b['Ouwol'](_0x163c5b['QaydQ'], _0x163c5b['QaydQ'])) {
            try {
                return JSON['parse'](_0x1facd2);
            } catch (_0x546679) {
                console['log'](_0x546679);
                $['msg']($['name'], '', _0x163c5b['rbVLi']);
                return [];
            }
        } else {
            if (_0x163c5b['EPist'](code['indexOf']('-'), -0x1)) {
                _0x446bc9 = !![];
                let _0x39d5e6 = code['trim']()['replace'](/-/g, '');
                var _0x1f2550 = _0x39d5e6['split']('')['reverse']()['join']('');
                var _0x244b6a = _0x1f2550['length'];
                var _0x13eaf3;
                var _0x4289ab = [];
                for (var _0x582123 = 0x0; _0x163c5b['YsXeL'](_0x582123, _0x244b6a); _0x582123 = _0x163c5b['hyRDG'](_0x582123, 0x2)) {
                    _0x13eaf3 = _0x163c5b['qpkIf'](parseInt, _0x1f2550['substr'](_0x582123, 0x2), 0x10);
                    _0x4289ab['push'](String['fromCharCode'](_0x13eaf3));
                }
                return _0x4289ab['join']('')['replace'](/#/g, '');
            } else {
                return code;
            }
        }
    }
};
_0xodW = 'jsjiami.com.v6'
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
