/*
9.8-9.16 9.9大聚惠 [jd_opencarddjh.js]
新增开卡脚本 (脚本已加密
一次性脚本

第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

默认脚本不执行
如需执行脚本请设置环境变量

export guaopencard_All="true"
export guaopencard_addSku_All="true"
export guaopencardRun_All="true"
export guaopencard_draw="true"

————————————————
入口：[ 9.8-9.16 9.9大聚惠 (https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=f7e4d75f22c84cdeba92bf594b02b910&shareUuid=5a614db47f7a464888ebebed9c39b46e)]

请求太频繁会被黑ip
过10分钟再执行

*/
let guaopencard_addSku = "true"
let guaopencard = "true"


/*
 *Progcessed By JSDec in 8.28s
 *JSDec - JSDec.js.org
 */
const $ = new Env('9.8-9.16 9.9大聚惠');
const jdCookieNode = $['isNode']() ? require('./jdCookie.js') : '';
const notify = $['isNode']() ? require('./sendNotify') : '';
let cookiesArr = [],
    cookie = '';
let activityCookie = '';
let lz_jdpin_token = '';
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x259d9c => {
        cookiesArr['push'](jdCookieNode[_0x259d9c]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x29f547 => _0x29f547['cookie'])]['filter'](_0x10f875 => !!_0x10f875);
}
guaopencard_addSku = $['isNode']() ? process['env']['guaopencard_addSku26'] ? process['env']['guaopencard_addSku26'] : '' + guaopencard_addSku : $['getdata']('guaopencard_addSku26') ? $['getdata']('guaopencard_addSku26') : '' + guaopencard_addSku;
guaopencard_addSku = $['isNode']() ? process['env']['guaopencard_addSku_All'] ? process['env']['guaopencard_addSku_All'] : '' + guaopencard_addSku : $['getdata']('guaopencard_addSku_All') ? $['getdata']('guaopencard_addSku_All') : '' + guaopencard_addSku;
guaopencard = $['isNode']() ? process['env']['guaopencard26'] ? process['env']['guaopencard26'] : '' + guaopencard : $['getdata']('guaopencard26') ? $['getdata']('guaopencard26') : '' + guaopencard;
guaopencard = $['isNode']() ? process['env']['guaopencard_All'] ? process['env']['guaopencard_All'] : '' + guaopencard : $['getdata']('guaopencard_All') ? $['getdata']('guaopencard_All') : '' + guaopencard;
message = '';
$['outFlag'] = ![];
!(async () => {
    var _0x3ca86b = {
        'GWymp': function(_0x3f77fe, _0x1053fd) {
            return _0x3f77fe == _0x1053fd;
        },
        'qaDXv': 'string',
        'gJupF': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'adFFK': function(_0x246856) {
            return _0x246856();
        },
        'Nlail': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'IELmD': 'https://bean.m.jd.com/',
        'WOCIX': function(_0x39d6a1, _0x1e8735) {
            return _0x39d6a1 !== _0x1e8735;
        },
        'HtjOr': 'CPoLl',
        'iNEBR': 'Jzute',
        'eAoml': function(_0x9ee927, _0x5abbee) {
            return _0x9ee927 != _0x5abbee;
        },
        'mQvue': function(_0x7bbdb7, _0x1ff411) {
            return _0x7bbdb7 + _0x1ff411;
        },
        'yxHoT': 'true',
        'aPqcC': function(_0x5defbd, _0x305968) {
            return _0x5defbd === _0x305968;
        },
        'nYXHV': 'QMiAT',
        'hKpeU': '如需执行脚本请设置环境变量[guaopencard26]为"true"',
        'hgZBG': function(_0x3add61, _0xf73814) {
            return _0x3add61 != _0xf73814;
        },
        'ChpFS': function(_0x326faf, _0x5c89bc) {
            return _0x326faf + _0x5c89bc;
        },
        'mpsph': 'UaLWx',
        'mqsSw': '5a614db47f7a464888ebebed9c39b46e',
        'heKwc': 'f7e4d75f22c84cdeba92bf594b02b910',
        'oaQqx': function(_0x129931, _0x256942) {
            return _0x129931 < _0x256942;
        },
        'DUDoM': function(_0x440243, _0x39d938) {
            return _0x440243(_0x39d938);
        },
        'tXXkn': function(_0x1645d7, _0x230284) {
            return _0x1645d7 + _0x230284;
        },
        'QmaNv': function(_0xb999ce) {
            return _0xb999ce();
        },
        'nVFaT': function(_0x10c28a, _0x117583) {
            return _0x10c28a == _0x117583;
        },
        'eYNgd': '此ip已被限制，请过10分钟后再执行脚本'
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x3ca86b['Nlail'], _0x3ca86b['IELmD'], {
            'open-url': _0x3ca86b['IELmD']
        });
        return;
    }
    if ($['isNode']()) {
        if (_0x3ca86b['WOCIX'](_0x3ca86b['HtjOr'], _0x3ca86b['iNEBR'])) {
            if (_0x3ca86b['eAoml'](_0x3ca86b['mQvue'](guaopencard, ''), _0x3ca86b['yxHoT'])) {
                if (_0x3ca86b['aPqcC'](_0x3ca86b['nYXHV'], _0x3ca86b['nYXHV'])) {
                    console['log'](_0x3ca86b['hKpeU']);
                } else {
                    if (_0x3ca86b['GWymp'](typeof str, _0x3ca86b['qaDXv'])) {
                        try {
                            return JSON['parse'](str);
                        } catch (_0x3bc3da) {
                            console['log'](_0x3bc3da);
                            $['msg']($['name'], '', _0x3ca86b['gJupF']);
                            return [];
                        }
                    }
                }
            }
            if (_0x3ca86b['hgZBG'](_0x3ca86b['ChpFS'](guaopencard, ''), _0x3ca86b['yxHoT'])) {
                if (_0x3ca86b['aPqcC'](_0x3ca86b['mpsph'], _0x3ca86b['mpsph'])) {
                    return;
                } else {
                    console['log'](data);
                }
            }
        } else {
            _0x3ca86b['adFFK'](resolve);
        }
    }
    $['shareUuid'] = _0x3ca86b['mqsSw'];
    $['activityId'] = _0x3ca86b['heKwc'];
    console['log']('入口:\nhttps://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid']);
    for (let _0x2f3bf4 = 0x0; _0x3ca86b['oaQqx'](_0x2f3bf4, cookiesArr['length']); _0x2f3bf4++) {
        cookie = cookiesArr[_0x2f3bf4];
        if (cookie) {
            $['UserName'] = _0x3ca86b['DUDoM'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $['index'] = _0x3ca86b['tXXkn'](_0x2f3bf4, 0x1);
            _0x3ca86b['QmaNv'](getUA);
            console['log']('\n\n******开始【京东账号' + $['index'] + '】' + $['UserName'] + '*********\n');
            await _0x3ca86b['QmaNv'](run);
            if (_0x3ca86b['nVFaT'](_0x2f3bf4, 0x0) && !$['actorUuid']) break;
            if ($['outFlag']) break;
        }
    }
    if ($['outFlag']) {
        let _0x5ed0fc = _0x3ca86b['eYNgd'];
        $['msg']($['name'], '', '' + _0x5ed0fc);
        if ($['isNode']()) await notify['sendNotify']('' + $['name']['replace'](/-/g, '/'), '' + _0x5ed0fc);
    }
})()['catch'](_0x34090c => $['logErr'](_0x34090c))['finally'](() => $['done']());
async function run() {
    var _0x2b59c4 = {
        'srclx': function(_0x29f106) {
            return _0x29f106();
        },
        'QGYYY': function(_0x4f8e7c, _0x35f292) {
            return _0x4f8e7c === _0x35f292;
        },
        'fiSQo': 'false',
        'CvxFr': function(_0x503a86, _0x386d85) {
            return _0x503a86 != _0x386d85;
        },
        'DuimC': 'object',
        'uPEuD': function(_0x426d67, _0xaa137b) {
            return _0x426d67 > _0xaa137b;
        },
        'VvhWE': 'LZ_TOKEN_KEY=',
        'aIVKC': function(_0x4bbfa4, _0x10fda9) {
            return _0x4bbfa4 + _0x10fda9;
        },
        'vascE': 'LZ_TOKEN_VALUE=',
        'FayXf': function(_0x53021c, _0x4e293b) {
            return _0x53021c + _0x4e293b;
        },
        'ZtlmB': function(_0x493f63) {
            return _0x493f63();
        },
        'pahlL': function(_0x38245e, _0x19cae3) {
            return _0x38245e == _0x19cae3;
        },
        'AwqHr': '此ip已被限制，请过10分钟后再执行脚本\n',
        'HqMgD': function(_0x5c7eb6, _0x121db2) {
            return _0x5c7eb6 == _0x121db2;
        },
        'ZKWUy': '获取[token]失败！',
        'zFEDz': function(_0x391063) {
            return _0x391063();
        },
        'BRByz': function(_0x2aaaa4, _0x287ec5) {
            return _0x2aaaa4 == _0x287ec5;
        },
        'XPhRN': 'undefined',
        'wXPPL': function(_0x15f688, _0x2744a4) {
            return _0x15f688 === _0x2744a4;
        },
        'Mfgkb': 'bmDfj',
        'KmeLI': 'lJaCV',
        'bXpcc': '获取活动信息失败！',
        'cUfFY': function(_0x14bee3) {
            return _0x14bee3();
        },
        'Sroiq': 'https://img10.360buyimg.com/imgzone/jfs/t1/151712/34/15817/45445/600bae4bE4163dad8/c182821a5670cc0d.png',
        'bGHFd': function(_0x1b8e4c) {
            return _0x1b8e4c();
        },
        'nhjZM': function(_0x48ea00, _0x1fcb7c) {
            return _0x48ea00 !== _0x1fcb7c;
        },
        'bwHZu': 'HXfUi',
        'eAysm': '获取不到[actorUuid]退出执行，请重新执行',
        'vYAfz': 'RIIcc',
        'lyGuw': 'gyOAY',
        'jShiC': 'qTjfq',
        'ZVRNd': 'uiQqr',
        'nPVxF': '0|1|4|3|5|2',
        'lgTKY': function(_0x37a182) {
            return _0x37a182();
        },
        'UyRHr': function(_0x3556b3, _0x21e8d3) {
            return _0x3556b3(_0x21e8d3);
        },
        'LhuRW': function(_0x55eaa7, _0xfbc34a, _0x443c19) {
            return _0x55eaa7(_0xfbc34a, _0x443c19);
        },
        'BiZxD': function(_0x513d4d, _0x3f771b) {
            return _0x513d4d + _0x3f771b;
        },
        'jgRCA': function(_0x1e9f97, _0x463518) {
            return _0x1e9f97 * _0x463518;
        },
        'dwSHg': '0|4|2|5|1|3',
        'whuKp': function(_0x4d57cd, _0x76f843) {
            return _0x4d57cd + _0x76f843;
        },
        'XMRYW': function(_0x1d8458) {
            return _0x1d8458();
        },
        'UCTYW': function(_0x2eed26, _0x165c3) {
            return _0x2eed26(_0x165c3);
        },
        'DEXiR': function(_0xab8640) {
            return _0xab8640();
        },
        'eRQQZ': function(_0x3e42fb, _0xc11a89) {
            return _0x3e42fb == _0xc11a89;
        },
        'zKlmf': function(_0x1eb160, _0x4e205b) {
            return _0x1eb160 + _0x4e205b;
        },
        'OGOjq': '关注: ',
        'ucvIo': function(_0x57a830) {
            return _0x57a830();
        },
        'BJpTu': function(_0x2c717d, _0x368e0e) {
            return _0x2c717d * _0x368e0e;
        },
        'rnEzt': function(_0x4b2d17, _0x16b2e1) {
            return _0x4b2d17 + _0x16b2e1;
        },
        'cOEBy': '加购: ',
        'ruodw': function(_0x23848b, _0x549876) {
            return _0x23848b + _0x549876;
        },
        'LXUuR': 'true',
        'yRPBQ': '如需加购请设置环境变量[guaopencard_addSku26]为"true"',
        'xXnuw': function(_0x3154d7, _0xadf233) {
            return _0x3154d7 == _0xadf233;
        },
        'KVzAO': function(_0xaa4195, _0xe56ce2) {
            return _0xaa4195 == _0xe56ce2;
        },
        'PcMcF': function(_0x4be255, _0x4bcdfc, _0x46fdcd) {
            return _0x4be255(_0x4bcdfc, _0x46fdcd);
        },
        'oBGxD': function(_0x3cdee0, _0x5157fe) {
            return _0x3cdee0 * _0x5157fe;
        },
        'hZnRY': function(_0x48b6c3) {
            return _0x48b6c3();
        },
        'SzEOK': function(_0x251d71, _0x4b5a76) {
            return _0x251d71 === _0x4b5a76;
        },
        'QpMdZ': function(_0x1a6727, _0x4a6b83) {
            return _0x1a6727 !== _0x4a6b83;
        },
        'LgQhj': 'FNUBa',
        'UiPyV': 'vJzBP',
        'IhQDO': function(_0x4019d5, _0x15b6f5) {
            return _0x4019d5 === _0x15b6f5;
        },
        'ELTjo': 'Sfmdw',
        'jyzos': 'UuBfB',
        'gVjxR': '账号1获取不到[shareUuid]退出执行，请重新执行',
        'xCofh': function(_0x48be8a, _0x5993d2, _0x72f2ff) {
            return _0x48be8a(_0x5993d2, _0x72f2ff);
        },
        'vkmfB': function(_0x4edf81, _0x5a5ec1) {
            return _0x4edf81 + _0x5a5ec1;
        },
        'qPXBB': function(_0x247256, _0x47e76b, _0x1c6f1c) {
            return _0x247256(_0x47e76b, _0x1c6f1c);
        },
        'vvdXW': function(_0x259b39, _0x176df5) {
            return _0x259b39 * _0x176df5;
        },
        'rlPeb': 'oJfjw',
        'xVDjY': 'hsJLi'
    };
    try {
        lz_jdpin_token = '';
        $['Token'] = '';
        $['Pin'] = '';
        await _0x2b59c4['ZtlmB'](getCk);
        if (_0x2b59c4['pahlL'](activityCookie, '')) {
            console['log']('获取cookie失败');
            return;
        }
        if ($['outFlag']) {
            console['log'](_0x2b59c4['AwqHr']);
            return;
        }
        await _0x2b59c4['ZtlmB'](getToken);
        if (_0x2b59c4['HqMgD']($['Token'], '')) {
            console['log'](_0x2b59c4['ZKWUy']);
            return;
        }
        await _0x2b59c4['ZtlmB'](getSimpleActInfoVo);
        $['nickname'] = '';
        await _0x2b59c4['zFEDz'](getMyPing);
        if (_0x2b59c4['QGYYY']($['Pin'], '') || _0x2b59c4['BRByz'](typeof $['shopId'], _0x2b59c4['XPhRN']) || _0x2b59c4['BRByz'](typeof $['venderId'], _0x2b59c4['XPhRN'])) {
            if (_0x2b59c4['wXPPL'](_0x2b59c4['Mfgkb'], _0x2b59c4['KmeLI'])) {
                _0x2b59c4['srclx'](resolve);
            } else {
                $['log'](_0x2b59c4['bXpcc']);
                return;
            }
        }
        await _0x2b59c4['cUfFY'](accessLogWithAD);
        $['attrTouXiang'] = _0x2b59c4['Sroiq'];
        await _0x2b59c4['cUfFY'](getUserInfo);
        $['actorUuid'] = '';
        await _0x2b59c4['bGHFd'](getActorUuid);
        if (!$['actorUuid']) {
            if (_0x2b59c4['nhjZM'](_0x2b59c4['bwHZu'], _0x2b59c4['bwHZu'])) {
                Object['keys'](jdCookieNode)['forEach'](_0x53e432 => {
                    cookiesArr['push'](jdCookieNode[_0x53e432]);
                });
                if (process['env']['JD_DEBUG'] && _0x2b59c4['QGYYY'](process['env']['JD_DEBUG'], _0x2b59c4['fiSQo'])) console['log'] = () => {};
            } else {
                console['log'](_0x2b59c4['eAysm']);
                return;
            }
        }
        await _0x2b59c4['bGHFd'](drawContent);
        await $['wait'](0x3e8);
        let _0x3ea9e6 = await _0x2b59c4['bGHFd'](checkOpenCard);
        if (_0x3ea9e6 && !_0x3ea9e6['allOpenCard'] && !$['outFlag']) {
            if (_0x2b59c4['wXPPL'](_0x2b59c4['vYAfz'], _0x2b59c4['lyGuw'])) {
                _0x2b59c4['srclx'](resolve);
            } else {
                let _0x568787 = !![];
                for (let _0x18b2be of _0x3ea9e6['cardList1'] && _0x3ea9e6['cardList1'] || []) {
                    if (_0x2b59c4['wXPPL'](_0x2b59c4['jShiC'], _0x2b59c4['jShiC'])) {
                        if (_0x2b59c4['BRByz'](_0x18b2be['status'], 0x0)) {
                            if (_0x2b59c4['nhjZM'](_0x2b59c4['ZVRNd'], _0x2b59c4['ZVRNd'])) {
                                $['logErr'](e, resp);
                            } else {
                                var _0x4897b3 = _0x2b59c4['nPVxF']['split']('|'),
                                    _0xc1a636 = 0x0;
                                while (!![]) {
                                    switch (_0x4897b3[_0xc1a636++]) {
                                        case '0':
                                            if (_0x568787) console['log']('组1');
                                            continue;
                                        case '1':
                                            if (_0x568787) _0x568787 = ![];
                                            continue;
                                        case '2':
                                            await _0x2b59c4['lgTKY'](drawContent);
                                            continue;
                                        case '3':
                                            await _0x2b59c4['UyRHr'](join, _0x18b2be['value']);
                                            continue;
                                        case '4':
                                            console['log'](_0x18b2be['name']);
                                            continue;
                                        case '5':
                                            await $['wait'](_0x2b59c4['LhuRW'](parseInt, _0x2b59c4['BiZxD'](_0x2b59c4['jgRCA'](Math['random'](), 0x3e8), 0x1388), 0xa));
                                            continue;
                                    }
                                    break;
                                }
                            }
                        }
                    } else {
                        console['log'](data);
                    }
                }
                _0x568787 = !![];
                for (let _0x1314ad of _0x3ea9e6['cardList2'] && _0x3ea9e6['cardList2'] || []) {
                    if (_0x2b59c4['BRByz'](_0x1314ad['status'], 0x0)) {
                        var _0x1de9ed = _0x2b59c4['dwSHg']['split']('|'),
                            _0x50f570 = 0x0;
                        while (!![]) {
                            switch (_0x1de9ed[_0x50f570++]) {
                                case '0':
                                    if (_0x568787) console['log']('组2');
                                    continue;
                                case '1':
                                    await $['wait'](_0x2b59c4['LhuRW'](parseInt, _0x2b59c4['whuKp'](_0x2b59c4['jgRCA'](Math['random'](), 0x3e8), 0x1388), 0xa));
                                    continue;
                                case '2':
                                    console['log'](_0x1314ad['name']);
                                    continue;
                                case '3':
                                    await _0x2b59c4['XMRYW'](drawContent);
                                    continue;
                                case '4':
                                    if (_0x568787) _0x568787 = ![];
                                    continue;
                                case '5':
                                    await _0x2b59c4['UCTYW'](join, _0x1314ad['value']);
                                    continue;
                            }
                            break;
                        }
                    }
                }
                await $['wait'](0x3e8);
                await _0x2b59c4['DEXiR'](drawContent);
                _0x3ea9e6 = await _0x2b59c4['DEXiR'](checkOpenCard);
                await $['wait'](0x3e8);
            }
        }
        if (_0x3ea9e6 && _0x2b59c4['BRByz'](_0x3ea9e6['score1'], 0x1) && !$['outFlag']) await _0x2b59c4['UCTYW'](startDraw, 0x1);
        if (_0x3ea9e6 && _0x2b59c4['eRQQZ'](_0x3ea9e6['score2'], 0x1) && !$['outFlag']) await _0x2b59c4['UCTYW'](startDraw, 0x2);
        $['log'](_0x2b59c4['zKlmf'](_0x2b59c4['OGOjq'], $['followShop']));
        if (!$['followShop'] && !$['outFlag']) await _0x2b59c4['ucvIo'](followShop);
        if (!$['followShop'] && !$['outFlag']) await $['wait'](_0x2b59c4['LhuRW'](parseInt, _0x2b59c4['zKlmf'](_0x2b59c4['BJpTu'](Math['random'](), 0x3e8), 0x1388), 0xa));
        $['log'](_0x2b59c4['rnEzt'](_0x2b59c4['cOEBy'], $['addSku']));
        if (!$['addSku'] && _0x2b59c4['CvxFr'](_0x2b59c4['ruodw'](guaopencard_addSku, ''), _0x2b59c4['LXUuR'])) console['log'](_0x2b59c4['yRPBQ']);
        if (!$['addSku'] && _0x2b59c4['xXnuw'](guaopencard_addSku, _0x2b59c4['LXUuR']) && !$['outFlag']) await _0x2b59c4['ucvIo'](addSku);
        if (!$['addSku'] && _0x2b59c4['KVzAO'](guaopencard_addSku, _0x2b59c4['LXUuR']) && !$['outFlag']) await $['wait'](_0x2b59c4['PcMcF'](parseInt, _0x2b59c4['ruodw'](_0x2b59c4['oBGxD'](Math['random'](), 0x3e8), 0x1388), 0xa));
        await _0x2b59c4['hZnRY'](getDrawRecordHasCoupon);
        await $['wait'](0x3e8);
        await _0x2b59c4['hZnRY'](getShareRecord);
        $['log']($['shareUuid']);
        if (_0x2b59c4['SzEOK']($['index'], 0x1)) {
            if ($['actorUuid']) {
                if (_0x2b59c4['QpMdZ'](_0x2b59c4['LgQhj'], _0x2b59c4['UiPyV'])) {
                    $['shareUuid'] = $['actorUuid'];
                    console['log']('后面的号都会助力:' + $['shareUuid']);
                } else {
                    console['log']('isvObfuscator ' + (res['message'] || ''));
                }
            } else {
                if (_0x2b59c4['IhQDO'](_0x2b59c4['ELTjo'], _0x2b59c4['jyzos'])) {
                    msg = res['data']['addBeanNum'] + '京豆';
                } else {
                    console['log'](_0x2b59c4['gVjxR']);
                    return;
                }
            }
        }
        await $['wait'](_0x2b59c4['xCofh'](parseInt, _0x2b59c4['vkmfB'](_0x2b59c4['oBGxD'](Math['random'](), 0x3e8), 0x3e8), 0xa));
        if (!$['followShop']) await $['wait'](_0x2b59c4['qPXBB'](parseInt, _0x2b59c4['vkmfB'](_0x2b59c4['vvdXW'](Math['random'](), 0x3e8), 0x2710), 0xa));
    } catch (_0x24636d) {
        if (_0x2b59c4['QpMdZ'](_0x2b59c4['rlPeb'], _0x2b59c4['xVDjY'])) {
            console['log'](_0x24636d);
        } else {
            if (_0x2b59c4['CvxFr'](typeof setcookies, _0x2b59c4['DuimC'])) {
                setcookie = setcookies['split'](',');
            } else setcookie = setcookies;
            for (let _0x561e83 of setcookie) {
                let _0x5bfde8 = _0x561e83['split'](';')[0x0]['trim']();
                if (_0x5bfde8['split']('=')[0x1]) {
                    if (_0x2b59c4['uPEuD'](_0x5bfde8['indexOf'](_0x2b59c4['VvhWE']), -0x1)) LZ_TOKEN_KEY = _0x2b59c4['aIVKC'](_0x5bfde8['replace'](/ /g, ''), ';');
                    if (_0x2b59c4['uPEuD'](_0x5bfde8['indexOf'](_0x2b59c4['vascE']), -0x1)) LZ_TOKEN_VALUE = _0x2b59c4['FayXf'](_0x5bfde8['replace'](/ /g, ''), ';');
                }
            }
        }
    }
}

function getDrawRecordHasCoupon() {
    var _0x2cedb8 = {
        'tOLlz': function(_0x481409, _0x2414ec) {
            return _0x481409 != _0x2414ec;
        },
        'SYMvV': 'undefined',
        'bmtws': function(_0xd77c86, _0x10a796) {
            return _0xd77c86 != _0x10a796;
        },
        'vefXx': function(_0x2fc520) {
            return _0x2fc520();
        },
        'KSrKz': function(_0x249dee, _0x10130b) {
            return _0x249dee === _0x10130b;
        },
        'pjaHZ': '空气💨',
        'wcitV': function(_0x441b4b, _0x2feddc) {
            return _0x441b4b == _0x2feddc;
        },
        'Sftln': 'object',
        'zsKLO': '此ip已被限制，请过10分钟后再执行脚本\n',
        'niGci': function(_0x4b919b, _0x1b4485) {
            return _0x4b919b > _0x1b4485;
        },
        'xkcwj': 'lz_jdpin_token=',
        'Vxzqf': function(_0xc48c82, _0x2c0366) {
            return _0xc48c82 + _0x2c0366;
        },
        'DiHpG': 'LZ_TOKEN_KEY=',
        'hEnpG': 'LZ_TOKEN_VALUE=',
        'WZPsh': function(_0xa9f1aa, _0xcd580d) {
            return _0xa9f1aa !== _0xcd580d;
        },
        'bfhkd': 'wzjGw',
        'CBlKZ': 'XVial',
        'WFQgc': function(_0x25466f, _0x2a59ae) {
            return _0x25466f !== _0x2a59ae;
        },
        'NpVbv': 'zcsLa',
        'uvApU': 'HDckB',
        'vlIGB': function(_0x14e96e, _0x325e83) {
            return _0x14e96e === _0x325e83;
        },
        'bXWoV': 'LkPre',
        'HeJpP': 'raoTs',
        'zxICy': 'wmBEU',
        'KhkBb': 'VvAUh',
        'YSVvg': function(_0x24f1a6, _0x1071b9) {
            return _0x24f1a6 == _0x1071b9;
        },
        'mROoD': '邀请好友',
        'lmAOk': function(_0x12e3a4, _0x4ff68a) {
            return _0x12e3a4 == _0x4ff68a;
        },
        'aLKFW': function(_0x4a40a3, _0x110218) {
            return _0x4a40a3 != _0x110218;
        },
        'wNtIR': function(_0x26cc1f, _0x809660) {
            return _0x26cc1f + _0x809660;
        },
        'myDfG': function(_0x23d501, _0x3648ac) {
            return _0x23d501 > _0x3648ac;
        },
        'gtPcg': function(_0x47e895, _0x4ec62d) {
            return _0x47e895 * _0x4ec62d;
        },
        'Cphua': function(_0x1cf66c, _0x35596c, _0x8a41b0) {
            return _0x1cf66c(_0x35596c, _0x8a41b0);
        },
        'KGKtn': 'Eapoq',
        'pSjFr': 'ObmKK',
        'Mhxvl': function(_0x332e8e, _0x5e58db) {
            return _0x332e8e(_0x5e58db);
        },
        'wmAkQ': '/dingzhi/taskact/openCardcommon/getDrawRecordHasCoupon'
    };
    return new Promise(_0xc2c27 => {
        var _0x3d143b = {
            'kaXxt': function(_0x1246e3, _0x5f0761) {
                return _0x2cedb8['tOLlz'](_0x1246e3, _0x5f0761);
            },
            'yGSGE': _0x2cedb8['SYMvV'],
            'lOITr': function(_0x1d870f, _0x56532f) {
                return _0x2cedb8['bmtws'](_0x1d870f, _0x56532f);
            },
            'horqw': function(_0x3cfdf2) {
                return _0x2cedb8['vefXx'](_0x3cfdf2);
            },
            'dQghd': function(_0x3b9491, _0x13f347) {
                return _0x2cedb8['KSrKz'](_0x3b9491, _0x13f347);
            },
            'fRaHZ': _0x2cedb8['pjaHZ'],
            'eRvZa': function(_0x504afa, _0x13119d) {
                return _0x2cedb8['wcitV'](_0x504afa, _0x13119d);
            },
            'QkCgV': _0x2cedb8['Sftln'],
            'fTyKm': _0x2cedb8['zsKLO'],
            'dTmxj': function(_0x3183dc, _0x1f8a24) {
                return _0x2cedb8['niGci'](_0x3183dc, _0x1f8a24);
            },
            'YbAhF': _0x2cedb8['xkcwj'],
            'wmpJO': function(_0x4ef1a8, _0x797ba) {
                return _0x2cedb8['Vxzqf'](_0x4ef1a8, _0x797ba);
            },
            'SQvyZ': _0x2cedb8['DiHpG'],
            'bvhvF': _0x2cedb8['hEnpG'],
            'IIgsl': function(_0x4006d4, _0x366667) {
                return _0x2cedb8['WZPsh'](_0x4006d4, _0x366667);
            },
            'rSidS': _0x2cedb8['bfhkd'],
            'xtSdP': _0x2cedb8['CBlKZ'],
            'GMUmt': function(_0x42563b, _0x2154c7) {
                return _0x2cedb8['WFQgc'](_0x42563b, _0x2154c7);
            },
            'OAHJY': _0x2cedb8['NpVbv'],
            'xtSMF': _0x2cedb8['uvApU'],
            'OGeCW': function(_0x4b1b73, _0x5701d2) {
                return _0x2cedb8['vlIGB'](_0x4b1b73, _0x5701d2);
            },
            'lGIsJ': _0x2cedb8['bXWoV'],
            'sPWUp': _0x2cedb8['HeJpP'],
            'fENbv': function(_0x4ad9a1, _0x4332d1) {
                return _0x2cedb8['WFQgc'](_0x4ad9a1, _0x4332d1);
            },
            'fMJZD': _0x2cedb8['zxICy'],
            'pINQs': _0x2cedb8['KhkBb'],
            'vPTWC': function(_0x5e2e0c, _0xfe55a6) {
                return _0x2cedb8['YSVvg'](_0x5e2e0c, _0xfe55a6);
            },
            'YHZBf': _0x2cedb8['mROoD'],
            'MLuLu': function(_0x21468a, _0x2dabdf) {
                return _0x2cedb8['lmAOk'](_0x21468a, _0x2dabdf);
            },
            'mjeBC': function(_0x30f192, _0x295a1f) {
                return _0x2cedb8['aLKFW'](_0x30f192, _0x295a1f);
            },
            'VvDQE': function(_0x1a2fcf, _0x48a287) {
                return _0x2cedb8['aLKFW'](_0x1a2fcf, _0x48a287);
            },
            'qosLh': function(_0x57f71a, _0x1d58e7) {
                return _0x2cedb8['wNtIR'](_0x57f71a, _0x1d58e7);
            },
            'TMGYE': function(_0x4702a7, _0x38fbf4) {
                return _0x2cedb8['myDfG'](_0x4702a7, _0x38fbf4);
            },
            'IXfYC': function(_0x5ebf1e, _0x28f032) {
                return _0x2cedb8['gtPcg'](_0x5ebf1e, _0x28f032);
            },
            'HaUsm': function(_0x414c44, _0x5767d8, _0x20acf1) {
                return _0x2cedb8['Cphua'](_0x414c44, _0x5767d8, _0x20acf1);
            },
            'KIFxp': function(_0x50b2cd, _0x16231d) {
                return _0x2cedb8['lmAOk'](_0x50b2cd, _0x16231d);
            },
            'CeEdg': _0x2cedb8['KGKtn'],
            'Hwwpo': function(_0x56fd7e, _0x504cce) {
                return _0x2cedb8['vlIGB'](_0x56fd7e, _0x504cce);
            },
            'vSKjt': _0x2cedb8['pSjFr']
        };
        let _0x462ac8 = 'activityId=' + $['activityId'] + '&actorUuid=' + $['actorUuid'] + '&pin=' + _0x2cedb8['Mhxvl'](encodeURIComponent, $['Pin']) + '&num=0&sortSuatus=1';
        $['post'](_0x2cedb8['Cphua'](taskPostUrl, _0x2cedb8['wmAkQ'], _0x462ac8), async (_0x201f11, _0xbccd98, _0x5788a5) => {
            var _0x4d0070 = {
                'LhCAG': function(_0xb93f0a, _0x3b6efe) {
                    return _0x3d143b['dQghd'](_0xb93f0a, _0x3b6efe);
                },
                'KYvyE': _0x3d143b['fRaHZ'],
                'qmDdL': function(_0x4f3f13, _0x2dc635) {
                    return _0x3d143b['eRvZa'](_0x4f3f13, _0x2dc635);
                },
                'YjWEV': _0x3d143b['QkCgV'],
                'rJkgY': _0x3d143b['fTyKm'],
                'THsOt': function(_0x184d6e, _0x36381c) {
                    return _0x3d143b['dTmxj'](_0x184d6e, _0x36381c);
                },
                'dbeos': _0x3d143b['YbAhF'],
                'NsbPg': function(_0x557e5b, _0x5116f6) {
                    return _0x3d143b['wmpJO'](_0x557e5b, _0x5116f6);
                },
                'PvGGF': function(_0x242c90, _0x2192db) {
                    return _0x3d143b['dTmxj'](_0x242c90, _0x2192db);
                },
                'YmLyL': _0x3d143b['SQvyZ'],
                'PbODB': _0x3d143b['bvhvF']
            };
            try {
                if (_0x201f11) {
                    if (_0x3d143b['IIgsl'](_0x3d143b['rSidS'], _0x3d143b['xtSdP'])) {
                        console['log']('' + $['toStr'](_0x201f11));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x3d143b['kaXxt'](typeof res['data']['followShop']['allStatus'], _0x3d143b['yGSGE'])) $['followShop'] = res['data']['followShop']['allStatus'];
                        if (_0x3d143b['kaXxt'](typeof res['data']['addSku']['allStatus'], _0x3d143b['yGSGE'])) $['addSku'] = res['data']['addSku']['allStatus'];
                        if (_0x3d143b['lOITr'](typeof res['data']['actorUuid'], _0x3d143b['yGSGE'])) $['actorUuid'] = res['data']['actorUuid'];
                    }
                } else {
                    if (_0x3d143b['GMUmt'](_0x3d143b['OAHJY'], _0x3d143b['xtSMF'])) {
                        res = $['toObj'](_0x5788a5);
                        if (_0x3d143b['eRvZa'](typeof res, _0x3d143b['QkCgV'])) {
                            if (_0x3d143b['OGeCW'](res['result'], !![]) && res['data']) {
                                if (_0x3d143b['OGeCW'](_0x3d143b['lGIsJ'], _0x3d143b['sPWUp'])) {
                                    _0x3d143b['horqw'](_0xc2c27);
                                } else {
                                    console['log']('我的奖品：');
                                    let _0x2566c3 = 0x0;
                                    let _0x2abed4 = 0x0;
                                    for (let _0x29dd2 in res['data']) {
                                        if (_0x3d143b['fENbv'](_0x3d143b['fMJZD'], _0x3d143b['pINQs'])) {
                                            let _0x4e7658 = res['data'][_0x29dd2];
                                            if (_0x3d143b['vPTWC'](_0x4e7658['value'], _0x3d143b['YHZBf'])) _0x2566c3++;
                                            if (_0x3d143b['MLuLu'](_0x4e7658['value'], _0x3d143b['YHZBf'])) _0x2abed4 = _0x4e7658['infoName']['replace']('京豆', '');
                                            if (_0x3d143b['mjeBC'](_0x4e7658['value'], _0x3d143b['YHZBf'])) console['log']('' + (_0x3d143b['VvDQE'](_0x4e7658['infoType'], 0xa) && _0x3d143b['qosLh'](_0x4e7658['value'], ':') || '') + _0x4e7658['infoName']);
                                        } else {
                                            if (_0x4d0070['LhCAG'](res['result'], !![]) && res['data']) {
                                                console['log']('抽奖获得：' + (res['data']['drawOk'] && res['data']['name'] || _0x4d0070['KYvyE']));
                                            } else if (_0x4d0070['qmDdL'](typeof res, _0x4d0070['YjWEV']) && res['errorMessage']) {
                                                console['log']('抽奖 ' + (res['errorMessage'] || ''));
                                            } else {
                                                console['log'](_0x5788a5);
                                            }
                                        }
                                    }
                                    if (_0x3d143b['TMGYE'](_0x2566c3, 0x0)) console['log']('邀请好友(' + _0x2566c3 + '):' + (_0x3d143b['IXfYC'](_0x2566c3, _0x3d143b['HaUsm'](parseInt, _0x2abed4, 0xa)) || 0x1e) + '京豆');
                                }
                            } else if (_0x3d143b['KIFxp'](typeof res, _0x3d143b['QkCgV']) && res['errorMessage']) {
                                if (_0x3d143b['fENbv'](_0x3d143b['CeEdg'], _0x3d143b['CeEdg'])) {
                                    console['log'](_0x4d0070['rJkgY']);
                                    $['outFlag'] = !![];
                                } else {
                                    console['log']('我的奖品 ' + (res['errorMessage'] || ''));
                                }
                            } else {
                                if (_0x3d143b['Hwwpo'](_0x3d143b['vSKjt'], _0x3d143b['vSKjt'])) {
                                    console['log'](_0x5788a5);
                                } else {
                                    let _0x12bdd0 = ck['split'](';')[0x0]['trim']();
                                    if (_0x12bdd0['split']('=')[0x1]) {
                                        if (_0x4d0070['THsOt'](_0x12bdd0['indexOf'](_0x4d0070['dbeos']), -0x1)) lz_jdpin_token = _0x4d0070['NsbPg'](_0x12bdd0['replace'](/ /g, ''), ';');
                                        if (_0x4d0070['PvGGF'](_0x12bdd0['indexOf'](_0x4d0070['YmLyL']), -0x1)) LZ_TOKEN_KEY = _0x4d0070['NsbPg'](_0x12bdd0['replace'](/ /g, ''), ';');
                                        if (_0x4d0070['PvGGF'](_0x12bdd0['indexOf'](_0x4d0070['PbODB']), -0x1)) LZ_TOKEN_VALUE = _0x4d0070['NsbPg'](_0x12bdd0['replace'](/ /g, ''), ';');
                                    }
                                }
                            }
                        } else {
                            console['log'](_0x5788a5);
                        }
                    } else {
                        console['log'](_0x5788a5);
                    }
                }
            } catch (_0x510a4f) {
                $['logErr'](_0x510a4f, _0xbccd98);
            } finally {
                _0x3d143b['horqw'](_0xc2c27);
            }
        });
    });
}

function getShareRecord() {
    var _0x42c4da = {
        'eodxK': function(_0x1fe545) {
            return _0x1fe545();
        },
        'gLNsg': function(_0x49b1eb, _0x280dde) {
            return _0x49b1eb || _0x280dde;
        },
        'ZsySx': 'abcdef0123456789',
        'SFwwJ': function(_0xc36b20, _0x397d04) {
            return _0xc36b20 < _0x397d04;
        },
        'wMnok': function(_0x47235d, _0x342191) {
            return _0x47235d * _0x342191;
        },
        'wztjR': function(_0x51f639, _0x2258fb) {
            return _0x51f639 !== _0x2258fb;
        },
        'HCVnL': 'wvAHd',
        'vXulG': 'LvbNu',
        'KFvGP': 'BuFxb',
        'GEGKN': function(_0x134173, _0x5470ef) {
            return _0x134173 == _0x5470ef;
        },
        'zxsmq': 'object',
        'GiebC': function(_0x4eadfc, _0x1d4b4a) {
            return _0x4eadfc === _0x1d4b4a;
        },
        'tQSUo': 'LlbFN',
        'SUwZL': 'QBBBG',
        'wcgpy': function(_0xa69b40, _0xe53ef5) {
            return _0xa69b40(_0xe53ef5);
        },
        'OFdrs': function(_0x1e2bc7, _0x1da70e, _0x2d26fc) {
            return _0x1e2bc7(_0x1da70e, _0x2d26fc);
        },
        'voRtK': '/dingzhi/taskact/openCardcommon/getShareRecord'
    };
    return new Promise(_0x265ac4 => {
        var _0x5985d2 = {
            'uRIhe': function(_0x6ef97e) {
                return _0x42c4da['eodxK'](_0x6ef97e);
            },
            'GySuM': function(_0x18ca6d, _0x29d792) {
                return _0x42c4da['gLNsg'](_0x18ca6d, _0x29d792);
            },
            'htDcf': _0x42c4da['ZsySx'],
            'lsBdw': function(_0x1626cc, _0x2f7908) {
                return _0x42c4da['SFwwJ'](_0x1626cc, _0x2f7908);
            },
            'fKOIH': function(_0x1eec38, _0x58795b) {
                return _0x42c4da['wMnok'](_0x1eec38, _0x58795b);
            },
            'bDXsN': function(_0x1ffd66, _0x1d7caf) {
                return _0x42c4da['wztjR'](_0x1ffd66, _0x1d7caf);
            },
            'YVsGZ': _0x42c4da['HCVnL'],
            'kwibZ': function(_0x1cc172, _0x3e5b74) {
                return _0x42c4da['wztjR'](_0x1cc172, _0x3e5b74);
            },
            'WGvaR': _0x42c4da['vXulG'],
            'OmmzB': _0x42c4da['KFvGP'],
            'PPCNm': function(_0x47c638, _0x5aed67) {
                return _0x42c4da['GEGKN'](_0x47c638, _0x5aed67);
            },
            'kpoTr': _0x42c4da['zxsmq'],
            'setja': function(_0x546230, _0x33b20b) {
                return _0x42c4da['GiebC'](_0x546230, _0x33b20b);
            },
            'KnWGg': _0x42c4da['tQSUo'],
            'IUfGK': _0x42c4da['SUwZL']
        };
        let _0x2e81ae = 'activityId=' + $['activityId'] + '&actorUuid=' + $['actorUuid'] + '&pin=' + _0x42c4da['wcgpy'](encodeURIComponent, $['Pin']) + '&num=0&sortSuatus=1';
        $['post'](_0x42c4da['OFdrs'](taskPostUrl, _0x42c4da['voRtK'], _0x2e81ae), async (_0x30e377, _0x4eb0f9, _0x115bde) => {
            var _0x41422a = {
                'bTLUB': function(_0x156855, _0x4363bf) {
                    return _0x5985d2['GySuM'](_0x156855, _0x4363bf);
                },
                'dBgqs': _0x5985d2['htDcf'],
                'aakIr': function(_0x1bcb32, _0x1b5e35) {
                    return _0x5985d2['lsBdw'](_0x1bcb32, _0x1b5e35);
                },
                'KRdkg': function(_0x4b7682, _0x4fb1df) {
                    return _0x5985d2['fKOIH'](_0x4b7682, _0x4fb1df);
                }
            };
            try {
                if (_0x5985d2['bDXsN'](_0x5985d2['YVsGZ'], _0x5985d2['YVsGZ'])) {
                    _0x5985d2['uRIhe'](_0x265ac4);
                } else {
                    if (_0x30e377) {
                        console['log']('' + $['toStr'](_0x30e377));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x5985d2['kwibZ'](_0x5985d2['WGvaR'], _0x5985d2['OmmzB'])) {
                            res = $['toObj'](_0x115bde);
                            if (_0x5985d2['PPCNm'](typeof res, _0x5985d2['kpoTr'])) {
                                if (_0x5985d2['setja'](res['result'], !![]) && res['data']) {
                                    $['log']('=========== 你邀请了:' + res['data']['length'] + '个');
                                } else if (_0x5985d2['PPCNm'](typeof res, _0x5985d2['kpoTr']) && res['errorMessage']) {
                                    console['log']('' + (res['errorMessage'] || ''));
                                } else {
                                    console['log'](_0x115bde);
                                }
                            } else {
                                if (_0x5985d2['setja'](_0x5985d2['KnWGg'], _0x5985d2['IUfGK'])) {
                                    e = _0x41422a['bTLUB'](e, 0x20);
                                    let _0x212583 = _0x41422a['dBgqs'],
                                        _0x4d423a = _0x212583['length'],
                                        _0x25128b = '';
                                    for (i = 0x0; _0x41422a['aakIr'](i, e); i++) _0x25128b += _0x212583['charAt'](Math['floor'](_0x41422a['KRdkg'](Math['random'](), _0x4d423a)));
                                    return _0x25128b;
                                } else {
                                    console['log'](_0x115bde);
                                }
                            }
                        } else {
                            $['logErr'](e, _0x4eb0f9);
                        }
                    }
                }
            } catch (_0x4a8f81) {
                $['logErr'](_0x4a8f81, _0x4eb0f9);
            } finally {
                _0x5985d2['uRIhe'](_0x265ac4);
            }
        });
    });
}

function addSku() {
    var _0x4bd9d5 = {
        'wCakH': function(_0x2663f1, _0x47b2d6) {
            return _0x2663f1 != _0x47b2d6;
        },
        'IcMKJ': 'undefined',
        'jLEvG': 'https://img10.360buyimg.com/imgzone/jfs/t1/151712/34/15817/45445/600bae4bE4163dad8/c182821a5670cc0d.png',
        'ELLnQ': '此ip已被限制，请过10分钟后再执行脚本\n',
        'SWMLX': function(_0x254f21) {
            return _0x254f21();
        },
        'ijldF': function(_0x476fab, _0x22a6a4) {
            return _0x476fab !== _0x22a6a4;
        },
        'fdIBc': 'object',
        'LpxJm': function(_0x2474e1, _0x46e963) {
            return _0x2474e1 == _0x46e963;
        },
        'Ihexn': function(_0x238306, _0xc96dda) {
            return _0x238306 === _0xc96dda;
        },
        'ROeAe': 'thpYo',
        'rBufi': 'KCGbZ',
        'SShkJ': 'dyLiu',
        'KRNTJ': 'gbpLE',
        'DnLMa': 'hvxMr',
        'NxLOO': 'VQdMN',
        'eWOIJ': function(_0x83f580, _0x5af0a8) {
            return _0x83f580 || _0x5af0a8;
        },
        'Sncxp': '空气💨',
        'KJSxi': function(_0x4193a2, _0x448ac5) {
            return _0x4193a2 === _0x448ac5;
        },
        'GQFbP': 'DjwNw',
        'oXjPZ': function(_0x34511f, _0x22a5e3) {
            return _0x34511f === _0x22a5e3;
        },
        'goCvh': 'JVESr',
        'btIKn': 'SNoMp',
        'Vjacf': function(_0x2cc7f4, _0x5c405d) {
            return _0x2cc7f4(_0x5c405d);
        },
        'pcSdQ': function(_0x38f1ee, _0x466dd9, _0x10170c) {
            return _0x38f1ee(_0x466dd9, _0x10170c);
        },
        'mBYjK': '/dingzhi/dz/openCard/saveTask'
    };
    return new Promise(_0x59748a => {
        var _0x4afe2d = {
            'BdNOd': function(_0x3d6580, _0x4b12dc) {
                return _0x4bd9d5['wCakH'](_0x3d6580, _0x4b12dc);
            },
            'mlMon': _0x4bd9d5['IcMKJ'],
            'RoYoX': _0x4bd9d5['jLEvG'],
            'NhXXH': _0x4bd9d5['ELLnQ'],
            'wrCZV': function(_0x408c50) {
                return _0x4bd9d5['SWMLX'](_0x408c50);
            },
            'hVFdq': function(_0x3fe301, _0xe21ec7) {
                return _0x4bd9d5['ijldF'](_0x3fe301, _0xe21ec7);
            },
            'HIOVX': _0x4bd9d5['fdIBc'],
            'pGSxs': function(_0x3f75f1, _0x3f973c) {
                return _0x4bd9d5['LpxJm'](_0x3f75f1, _0x3f973c);
            },
            'nqmsA': function(_0x55618a, _0xbd2d82) {
                return _0x4bd9d5['Ihexn'](_0x55618a, _0xbd2d82);
            },
            'gGldK': _0x4bd9d5['ROeAe'],
            'hQOiE': _0x4bd9d5['rBufi'],
            'UpBUF': _0x4bd9d5['SShkJ'],
            'LXnqZ': function(_0x19f0b0, _0x271d71) {
                return _0x4bd9d5['ijldF'](_0x19f0b0, _0x271d71);
            },
            'PJpKV': _0x4bd9d5['KRNTJ'],
            'UVcAi': _0x4bd9d5['DnLMa'],
            'vacmm': _0x4bd9d5['NxLOO'],
            'pRbkH': function(_0x56ffc3, _0x4d2a50) {
                return _0x4bd9d5['eWOIJ'](_0x56ffc3, _0x4d2a50);
            },
            'uuQZx': _0x4bd9d5['Sncxp'],
            'SbgDJ': function(_0x519a91, _0x56e1d8) {
                return _0x4bd9d5['KJSxi'](_0x519a91, _0x56e1d8);
            },
            'ISYJF': _0x4bd9d5['GQFbP']
        };
        if (_0x4bd9d5['oXjPZ'](_0x4bd9d5['goCvh'], _0x4bd9d5['btIKn'])) {
            $['logErr'](e, resp);
        } else {
            let _0x342bfe = 'activityId=' + $['activityId'] + '&pin=' + _0x4bd9d5['Vjacf'](encodeURIComponent, $['Pin']) + '&actorUuid=' + $['actorUuid'] + '&taskType=2&taskValue=100021377684';
            $['post'](_0x4bd9d5['pcSdQ'](taskPostUrl, _0x4bd9d5['mBYjK'], _0x342bfe), async (_0x58bcea, _0x434105, _0x12b0d7) => {
                var _0x415a59 = {
                    'BKnbm': function(_0x2b2ee5, _0x579722) {
                        return _0x4afe2d['hVFdq'](_0x2b2ee5, _0x579722);
                    },
                    'OBBMA': _0x4afe2d['HIOVX'],
                    'aMinI': function(_0x33e7ab, _0x58117d) {
                        return _0x4afe2d['pGSxs'](_0x33e7ab, _0x58117d);
                    },
                    'PMmHR': _0x4afe2d['NhXXH']
                };
                try {
                    if (_0x58bcea) {
                        if (_0x4afe2d['nqmsA'](_0x4afe2d['gGldK'], _0x4afe2d['gGldK'])) {
                            if (_0x434105['statusCode'] && _0x4afe2d['pGSxs'](_0x434105['statusCode'], 0x1ed)) {
                                if (_0x4afe2d['nqmsA'](_0x4afe2d['hQOiE'], _0x4afe2d['UpBUF'])) {
                                    if (res['data'] && _0x4afe2d['BdNOd'](typeof res['data']['yunMidImageUrl'], _0x4afe2d['mlMon'])) $['attrTouXiang'] = res['data']['yunMidImageUrl'] || _0x4afe2d['RoYoX'];
                                } else {
                                    console['log'](_0x4afe2d['NhXXH']);
                                    $['outFlag'] = !![];
                                }
                            }
                            console['log']('' + $['toStr'](_0x58bcea));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            res = $['toObj'](_0x12b0d7);
                            if (_0x415a59['BKnbm'](typeof res, _0x415a59['OBBMA'])) {
                                console['log'](_0x12b0d7);
                            }
                        }
                    } else {
                        res = $['toObj'](_0x12b0d7);
                        if (_0x4afe2d['pGSxs'](typeof res, _0x4afe2d['HIOVX'])) {
                            if (_0x4afe2d['LXnqZ'](_0x4afe2d['PJpKV'], _0x4afe2d['UVcAi'])) {
                                if (_0x4afe2d['nqmsA'](res['result'], !![]) && res['data']) {
                                    if (_0x4afe2d['LXnqZ'](_0x4afe2d['vacmm'], _0x4afe2d['vacmm'])) {
                                        console['log'](_0x4afe2d['NhXXH']);
                                        return;
                                    } else {
                                        let _0x41fc5f = '';
                                        if (res['data']['addBeanNum']) {
                                            _0x41fc5f = res['data']['addBeanNum'] + '京豆';
                                        }
                                        console['log']('加购获得：' + _0x4afe2d['pRbkH'](_0x41fc5f, _0x4afe2d['uuQZx']));
                                    }
                                } else if (_0x4afe2d['pGSxs'](typeof res, _0x4afe2d['HIOVX']) && res['errorMessage']) {
                                    console['log']('加购 ' + (res['errorMessage'] || ''));
                                } else {
                                    console['log'](_0x12b0d7);
                                }
                            } else {
                                if (_0x434105['statusCode'] && _0x415a59['aMinI'](_0x434105['statusCode'], 0x1ed)) {
                                    console['log'](_0x415a59['PMmHR']);
                                    $['outFlag'] = !![];
                                }
                                console['log']('' + $['toStr'](_0x58bcea));
                                console['log']($['name'] + ' cookie API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x4afe2d['SbgDJ'](_0x4afe2d['ISYJF'], _0x4afe2d['ISYJF'])) {
                                console['log'](_0x12b0d7);
                            } else {
                                _0x4afe2d['wrCZV'](_0x59748a);
                            }
                        }
                    }
                } catch (_0x201ab7) {
                    $['logErr'](_0x201ab7, _0x434105);
                } finally {
                    _0x4afe2d['wrCZV'](_0x59748a);
                }
            });
        }
    });
}

function followShop() {
    var _0xc0b668 = {
        'xmkcE': function(_0x301e55, _0x27a022) {
            return _0x301e55 || _0x27a022;
        },
        'zQKSV': '空气💨',
        'kBIVk': function(_0x4a47d8) {
            return _0x4a47d8();
        },
        'ZELVV': function(_0x2fc0ad, _0x302fab) {
            return _0x2fc0ad === _0x302fab;
        },
        'hwsBd': 'ZKUsl',
        'IExGI': function(_0x5705ac, _0x4818f3) {
            return _0x5705ac == _0x4818f3;
        },
        'BimKg': '此ip已被限制，请过10分钟后再执行脚本\n',
        'lrnoq': 'evYWx',
        'YQamH': 'gPNrn',
        'TfCdf': 'object',
        'TQoEe': function(_0x49e93c, _0x4bd241) {
            return _0x49e93c == _0x4bd241;
        },
        'hnNdY': function(_0x10a58a, _0x5c2968) {
            return _0x10a58a !== _0x5c2968;
        },
        'YzrBz': 'kQBhd',
        'Mhooo': 'bytRU',
        'duFJq': function(_0x4979b4) {
            return _0x4979b4();
        },
        'NLksO': 'ilCNR',
        'hriFu': function(_0x47e852, _0x5f0ec5) {
            return _0x47e852(_0x5f0ec5);
        },
        'IbzZi': function(_0x1b83af, _0x36acae, _0x5f4ae5) {
            return _0x1b83af(_0x36acae, _0x5f4ae5);
        },
        'UhKng': '/dingzhi/dz/openCard/followShop'
    };
    return new Promise(_0x59f19d => {
        var _0x24e158 = {
            'OchKy': function(_0x422769, _0x32a342) {
                return _0xc0b668['xmkcE'](_0x422769, _0x32a342);
            },
            'hmwFK': _0xc0b668['zQKSV'],
            'lVrBr': function(_0x5b0366) {
                return _0xc0b668['kBIVk'](_0x5b0366);
            },
            'vKoNy': function(_0x40b375, _0x48c249) {
                return _0xc0b668['ZELVV'](_0x40b375, _0x48c249);
            },
            'fkjfn': _0xc0b668['hwsBd'],
            'JgMmd': function(_0x11de72, _0x104ce2) {
                return _0xc0b668['IExGI'](_0x11de72, _0x104ce2);
            },
            'VPERx': _0xc0b668['BimKg'],
            'AUgQN': _0xc0b668['lrnoq'],
            'ckDKq': _0xc0b668['YQamH'],
            'Moipm': _0xc0b668['TfCdf'],
            'JaFcw': function(_0x4abed0, _0x18a7cb) {
                return _0xc0b668['ZELVV'](_0x4abed0, _0x18a7cb);
            },
            'Whhzl': function(_0x2908ba, _0x2cbaf2) {
                return _0xc0b668['TQoEe'](_0x2908ba, _0x2cbaf2);
            },
            'ZtjMc': function(_0x6fb109, _0x5f0525) {
                return _0xc0b668['hnNdY'](_0x6fb109, _0x5f0525);
            },
            'XmGBb': _0xc0b668['YzrBz'],
            'VHTmy': _0xc0b668['Mhooo'],
            'ExjAR': function(_0x2136e5) {
                return _0xc0b668['duFJq'](_0x2136e5);
            }
        };
        if (_0xc0b668['ZELVV'](_0xc0b668['NLksO'], _0xc0b668['NLksO'])) {
            let _0x43f91d = 'activityId=' + $['activityId'] + '&pin=' + _0xc0b668['hriFu'](encodeURIComponent, $['Pin']) + '&actorUuid=' + $['actorUuid'] + '&shareUuid=' + $['shareUuid'] + '&taskType=23&taskValue=1000091863';
            $['post'](_0xc0b668['IbzZi'](taskPostUrl, _0xc0b668['UhKng'], _0x43f91d), async (_0x755214, _0x593013, _0x7dc2e4) => {
                var _0x402546 = {
                    'fhTFv': function(_0x5a8b0c) {
                        return _0x24e158['lVrBr'](_0x5a8b0c);
                    }
                };
                try {
                    if (_0x24e158['vKoNy'](_0x24e158['fkjfn'], _0x24e158['fkjfn'])) {
                        if (_0x755214) {
                            if (_0x593013['statusCode'] && _0x24e158['JgMmd'](_0x593013['statusCode'], 0x1ed)) {
                                console['log'](_0x24e158['VPERx']);
                                $['outFlag'] = !![];
                            }
                            console['log']('' + $['toStr'](_0x755214));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x24e158['vKoNy'](_0x24e158['AUgQN'], _0x24e158['ckDKq'])) {
                                console['log']('我的奖品 ' + (res['errorMessage'] || ''));
                            } else {
                                res = $['toObj'](_0x7dc2e4);
                                if (_0x24e158['JgMmd'](typeof res, _0x24e158['Moipm'])) {
                                    if (_0x24e158['JaFcw'](res['result'], !![]) && res['data']) {
                                        let _0x52dbc4 = '';
                                        if (res['data']['addBeanNum']) {
                                            _0x52dbc4 = res['data']['addBeanNum'] + '京豆';
                                        }
                                        if (res['data']['beanNumMember'] && res['data']['assistSendStatus']) {
                                            _0x52dbc4 += ' 额外获得:' + res['data']['beanNumMember'] + '京豆';
                                        }
                                        console['log']('关注获得：' + _0x24e158['OchKy'](_0x52dbc4, _0x24e158['hmwFK']));
                                    } else if (_0x24e158['Whhzl'](typeof res, _0x24e158['Moipm']) && res['errorMessage']) {
                                        if (_0x24e158['ZtjMc'](_0x24e158['XmGBb'], _0x24e158['XmGBb'])) {
                                            let _0x4b585b = '';
                                            if (res['data']['addBeanNum']) {
                                                _0x4b585b = res['data']['addBeanNum'] + '京豆';
                                            }
                                            console['log']('加购获得：' + _0x24e158['OchKy'](_0x4b585b, _0x24e158['hmwFK']));
                                        } else {
                                            console['log']('关注 ' + (res['errorMessage'] || ''));
                                        }
                                    } else {
                                        console['log'](_0x7dc2e4);
                                    }
                                } else {
                                    console['log'](_0x7dc2e4);
                                }
                            }
                        }
                    } else {
                        console['log']('获取cookie失败');
                        return;
                    }
                } catch (_0x350af1) {
                    if (_0x24e158['ZtjMc'](_0x24e158['VHTmy'], _0x24e158['VHTmy'])) {
                        _0x402546['fhTFv'](_0x59f19d);
                    } else {
                        $['logErr'](_0x350af1, _0x593013);
                    }
                } finally {
                    _0x24e158['ExjAR'](_0x59f19d);
                }
            });
        } else {
            $['shareUuid'] = $['actorUuid'];
            console['log']('后面的号都会助力:' + $['shareUuid']);
        }
    });
}

function getshopactivityId(_0x2cb628) {
    var _0x51abe0 = {
        'PmRCb': function(_0x7958d9, _0x347de0) {
            return _0x7958d9 == _0x347de0;
        },
        'nOJJm': 'object',
        'TKbVM': function(_0x2d846b, _0x44cd3b) {
            return _0x2d846b === _0x44cd3b;
        },
        'TItAy': function(_0x45f444, _0x3816e1) {
            return _0x45f444 != _0x3816e1;
        },
        'gvXiv': 'undefined',
        'wxeEJ': 'KzyXT',
        'hliDP': 'DCzeK',
        'ifcDe': 'BXuvr',
        'HvzHZ': 'jhgGX',
        'WokdU': 'vmEql',
        'DqBjw': 'GMDKm',
        'lHUQJ': function(_0x40b014) {
            return _0x40b014();
        },
        'GNrZz': function(_0x3d5b14, _0x5cfde4) {
            return _0x3d5b14(_0x5cfde4);
        }
    };
    return new Promise(_0x16908 => {
        $['get'](_0x51abe0['GNrZz'](shopactivityId, '' + _0x2cb628), async (_0x35f817, _0x952b6b, _0x32c96b) => {
            var _0x2b428e = {
                'zjdSJ': function(_0x4f967c, _0x159e39) {
                    return _0x51abe0['PmRCb'](_0x4f967c, _0x159e39);
                },
                'pLWzi': _0x51abe0['nOJJm'],
                'VZbFj': function(_0x66f76b, _0xcb9578) {
                    return _0x51abe0['TKbVM'](_0x66f76b, _0xcb9578);
                },
                'EriGq': function(_0x36f811, _0xe032f6) {
                    return _0x51abe0['TItAy'](_0x36f811, _0xe032f6);
                },
                'auGHb': _0x51abe0['gvXiv'],
                'CSLZy': function(_0x5a551a, _0x200a55) {
                    return _0x51abe0['TItAy'](_0x5a551a, _0x200a55);
                }
            };
            if (_0x51abe0['TKbVM'](_0x51abe0['wxeEJ'], _0x51abe0['hliDP'])) {
                console['log']('' + $['toStr'](_0x35f817));
                console['log']($['name'] + ' getUserInfo API请求失败，请检查网路重试');
            } else {
                try {
                    _0x32c96b = JSON['parse'](_0x32c96b);
                    if (_0x51abe0['PmRCb'](_0x32c96b['success'], !![])) {
                        $['shopactivityId'] = _0x32c96b['result']['interestsRuleList'] && _0x32c96b['result']['interestsRuleList'][0x0] && _0x32c96b['result']['interestsRuleList'][0x0]['interestsInfo'] && _0x32c96b['result']['interestsRuleList'][0x0]['interestsInfo']['activityId'] || '';
                    }
                } catch (_0x29f1be) {
                    if (_0x51abe0['TKbVM'](_0x51abe0['ifcDe'], _0x51abe0['HvzHZ'])) {
                        res = $['toObj'](_0x32c96b);
                        if (_0x2b428e['zjdSJ'](typeof res, _0x2b428e['pLWzi']) && res['result'] && _0x2b428e['VZbFj'](res['result'], !![])) {
                            if (_0x2b428e['EriGq'](typeof res['data']['shopId'], _0x2b428e['auGHb'])) $['shopId'] = res['data']['shopId'];
                            if (_0x2b428e['CSLZy'](typeof res['data']['venderId'], _0x2b428e['auGHb'])) $['venderId'] = res['data']['venderId'];
                        } else if (_0x2b428e['zjdSJ'](typeof res, _0x2b428e['pLWzi']) && res['errorMessage']) {
                            console['log']('getSimpleActInfoVo ' + (res['errorMessage'] || ''));
                        } else {
                            console['log'](_0x32c96b);
                        }
                    } else {
                        $['logErr'](_0x29f1be, _0x952b6b);
                    }
                } finally {
                    if (_0x51abe0['TKbVM'](_0x51abe0['WokdU'], _0x51abe0['DqBjw'])) {
                        $['logErr'](e, _0x952b6b);
                    } else {
                        _0x51abe0['lHUQJ'](_0x16908);
                    }
                }
            }
        });
    });
}

function shopactivityId(_0x5b2f5e) {
    var _0x1aecc3 = {
        'phxEn': 'text/plain; Charset=UTF-8',
        'rHAQf': 'https://api.m.jd.com',
        'VEZhI': 'api.m.jd.com',
        'vlwNw': '*/*',
        'LYoeV': 'application/x-www-form-urlencoded'
    };
    return {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=%7B%22venderId%22%3A%22' + _0x5b2f5e + '%22%2C%22channel%22%3A401%7D&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Content-Type': _0x1aecc3['phxEn'],
            'Origin': _0x1aecc3['rHAQf'],
            'Host': _0x1aecc3['VEZhI'],
            'accept': _0x1aecc3['vlwNw'],
            'User-Agent': $['UA'],
            'content-type': _0x1aecc3['LYoeV'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x5b2f5e + '&shopId=' + _0x5b2f5e + '&venderType=5&channel=401&returnUrl=https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'],
            'Cookie': cookie
        }
    };
}

function join(_0x36f0d3) {
    var _0x1297fa = {
        'ONFZV': '空气💨',
        'ztnUc': function(_0x2d572d, _0x541fed) {
            return _0x2d572d == _0x541fed;
        },
        'XGNQd': '此ip已被限制，请过10分钟后再执行脚本\n',
        'fKHEM': function(_0x8f23eb, _0x112f06) {
            return _0x8f23eb(_0x112f06);
        },
        'IULZg': function(_0x4dde92) {
            return _0x4dde92();
        },
        'CfYIR': function(_0x1123a9, _0x4ed40b) {
            return _0x1123a9 !== _0x4ed40b;
        },
        'AwUVb': 'qrVlh',
        'LTzvF': function(_0xcd715a, _0xd05ea1) {
            return _0xcd715a === _0xd05ea1;
        },
        'yqXWP': 'mAbpw',
        'ZWVpr': 'OnWMf',
        'AJxxU': 'object',
        'gyTFO': 'HQuvN',
        'MUFNN': 'QunPd',
        'hpACz': function(_0xf86d94, _0x44fe6f) {
            return _0xf86d94 === _0x44fe6f;
        },
        'WLSUU': 'FwHXA',
        'RlJlw': 'pmMAW',
        'KtNeT': 'xtViU',
        'FsgAp': function(_0x8bb4b1, _0x459436) {
            return _0x8bb4b1 === _0x459436;
        },
        'wdyEO': 'BrqDW',
        'RKjkt': function(_0x2fe606, _0x39495f) {
            return _0x2fe606(_0x39495f);
        }
    };
    return new Promise(async _0x1d1058 => {
        var _0x2601e6 = {
            'FBXyx': function(_0x1dd710, _0x18c9fa) {
                return _0x1297fa['ztnUc'](_0x1dd710, _0x18c9fa);
            },
            'plmEZ': _0x1297fa['XGNQd'],
            'wMzPq': function(_0x57ba98, _0x4df98e) {
                return _0x1297fa['fKHEM'](_0x57ba98, _0x4df98e);
            },
            'zcTXU': function(_0x2a924a) {
                return _0x1297fa['IULZg'](_0x2a924a);
            },
            'LHabh': function(_0x1433ad, _0x18c1eb) {
                return _0x1297fa['CfYIR'](_0x1433ad, _0x18c1eb);
            },
            'naAme': _0x1297fa['AwUVb'],
            'nQUrX': function(_0x16ab07, _0x122e14) {
                return _0x1297fa['LTzvF'](_0x16ab07, _0x122e14);
            },
            'XIHRd': _0x1297fa['yqXWP'],
            'Ccsry': _0x1297fa['ZWVpr'],
            'Ltujw': function(_0x2efeb5, _0x26491e) {
                return _0x1297fa['ztnUc'](_0x2efeb5, _0x26491e);
            },
            'oVqbn': _0x1297fa['AJxxU'],
            'SUXFf': function(_0x253cc5, _0x2d327c) {
                return _0x1297fa['LTzvF'](_0x253cc5, _0x2d327c);
            },
            'efXVA': _0x1297fa['gyTFO'],
            'DSnSg': _0x1297fa['MUFNN'],
            'VAovD': function(_0x40c1e2, _0x3bff16) {
                return _0x1297fa['LTzvF'](_0x40c1e2, _0x3bff16);
            },
            'agnKr': function(_0x3ced8b, _0x5cba1d) {
                return _0x1297fa['hpACz'](_0x3ced8b, _0x5cba1d);
            },
            'zDEfv': _0x1297fa['WLSUU'],
            'zQkUl': function(_0x5366b0, _0x23ef09) {
                return _0x1297fa['hpACz'](_0x5366b0, _0x23ef09);
            },
            'JLToX': _0x1297fa['RlJlw'],
            'NSGel': _0x1297fa['KtNeT']
        };
        if (_0x1297fa['FsgAp'](_0x1297fa['wdyEO'], _0x1297fa['wdyEO'])) {
            $['shopactivityId'] = '';
            await $['wait'](0x3e8);
            await _0x1297fa['RKjkt'](getshopactivityId, _0x36f0d3);
            $['get'](_0x1297fa['RKjkt'](ruhui, '' + _0x36f0d3), async (_0x364473, _0x15a5f5, _0x3abd61) => {
                var _0x93aae3 = {
                    'pCvut': function(_0xe4f52d, _0xad0f86) {
                        return _0x2601e6['wMzPq'](_0xe4f52d, _0xad0f86);
                    },
                    'UxklC': function(_0x3c481d) {
                        return _0x2601e6['zcTXU'](_0x3c481d);
                    }
                };
                if (_0x2601e6['LHabh'](_0x2601e6['naAme'], _0x2601e6['naAme'])) {
                    console['log'](_0x3abd61);
                } else {
                    try {
                        if (_0x2601e6['nQUrX'](_0x2601e6['XIHRd'], _0x2601e6['Ccsry'])) {
                            _0x93aae3['pCvut'](_0x1d1058, res && res['data'] || '');
                        } else {
                            let _0x4d70c8 = $['toObj'](_0x3abd61);
                            if (_0x2601e6['Ltujw'](typeof _0x4d70c8, _0x2601e6['oVqbn'])) {
                                if (_0x2601e6['SUXFf'](_0x2601e6['efXVA'], _0x2601e6['DSnSg'])) {
                                    if (_0x15a5f5['statusCode'] && _0x2601e6['FBXyx'](_0x15a5f5['statusCode'], 0x1ed)) {
                                        console['log'](_0x2601e6['plmEZ']);
                                        $['outFlag'] = !![];
                                    }
                                    console['log']('' + $['toStr'](_0x364473));
                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                } else {
                                    if (_0x2601e6['VAovD'](_0x4d70c8['success'], !![])) {
                                        if (_0x2601e6['agnKr'](_0x2601e6['zDEfv'], _0x2601e6['zDEfv'])) {
                                            console['log'](_0x4d70c8['message']);
                                            if (_0x4d70c8['result'] && _0x4d70c8['result']['giftInfo']) {
                                                for (let _0x50b917 of _0x4d70c8['result']['giftInfo']['giftList']) {
                                                    console['log']('入会获得:' + _0x50b917['discountString'] + _0x50b917['prizeName'] + _0x50b917['secondLineDesc']);
                                                }
                                            }
                                        } else {
                                            _0x93aae3['UxklC'](_0x1d1058);
                                        }
                                    } else if (_0x2601e6['Ltujw'](typeof _0x4d70c8, _0x2601e6['oVqbn']) && _0x4d70c8['message']) {
                                        console['log']('' + (_0x4d70c8['message'] || ''));
                                    } else {
                                        if (_0x2601e6['zQkUl'](_0x2601e6['JLToX'], _0x2601e6['NSGel'])) {
                                            $['logErr'](e, _0x15a5f5);
                                        } else {
                                            console['log'](_0x3abd61);
                                        }
                                    }
                                }
                            } else {
                                console['log'](_0x3abd61);
                            }
                        }
                    } catch (_0x5e7d2d) {
                        $['logErr'](_0x5e7d2d, _0x15a5f5);
                    } finally {
                        _0x2601e6['zcTXU'](_0x1d1058);
                    }
                }
            });
        } else {
            console['log']('抽奖获得：' + (res['data']['drawOk'] && res['data']['name'] || _0x1297fa['ONFZV']));
        }
    });
}

function ruhui(_0x3d72e3) {
    var _0x4003aa = {
        'JSBDo': 'text/plain; Charset=UTF-8',
        'LlUQu': 'https://api.m.jd.com',
        'SSWjo': 'api.m.jd.com',
        'WTTDc': '*/*',
        'aNtaD': 'application/x-www-form-urlencoded'
    };
    let _0x1576b1 = '';
    if ($['shopactivityId']) _0x1576b1 = ',"activityId":' + $['shopactivityId'];
    return {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"' + _0x3d72e3 + '","shopId":"' + _0x3d72e3 + '","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0' + _0x1576b1 + ',"channel":401}&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Content-Type': _0x4003aa['JSBDo'],
            'Origin': _0x4003aa['LlUQu'],
            'Host': _0x4003aa['SSWjo'],
            'accept': _0x4003aa['WTTDc'],
            'User-Agent': $['UA'],
            'content-type': _0x4003aa['aNtaD'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x3d72e3 + '&shopId=' + _0x3d72e3 + '&venderType=5&channel=401&returnUrl=https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'],
            'Cookie': cookie
        }
    };
}

function startDraw(_0x378627) {
    var _0x29cc86 = {
        'AYuZV': function(_0xfdcdc0, _0x7a6c60) {
            return _0xfdcdc0 != _0x7a6c60;
        },
        'UZuXP': function(_0x138ce9, _0x1bb5bd) {
            return _0x138ce9 + _0x1bb5bd;
        },
        'ecOrj': 'true',
        'GxURX': '如需执行脚本请设置环境变量[guaopencard26]为"true"',
        'qmaPl': function(_0x11157c, _0x4394ef) {
            return _0x11157c == _0x4394ef;
        },
        'UUvst': 'object',
        'OopYs': function(_0x36464f, _0x54afb2) {
            return _0x36464f === _0x54afb2;
        },
        'FmldX': '空气💨',
        'SvErs': 'zIsDn',
        'YAaYv': function(_0x59d320, _0x49d6e0) {
            return _0x59d320 !== _0x49d6e0;
        },
        'Sfwdu': 'JYwRx',
        'cplma': 'UHMWR',
        'laOEw': function(_0x322f5b) {
            return _0x322f5b();
        },
        'SFING': function(_0x45b71e, _0x188e7c) {
            return _0x45b71e === _0x188e7c;
        },
        'maiOj': 'GYuSi',
        'OwAOM': 'Fnbdi',
        'ATTUP': function(_0x7a7fb6, _0x16ad85) {
            return _0x7a7fb6(_0x16ad85);
        },
        'knCxx': function(_0x43048c, _0x468e66, _0x45a31e) {
            return _0x43048c(_0x468e66, _0x45a31e);
        },
        'CeVTr': '/dingzhi/dz/openCard/startDraw'
    };
    return new Promise(_0x43f321 => {
        var _0x3aae6d = {
            'AyhSy': function(_0x3a5325, _0x4d67b4) {
                return _0x29cc86['AYuZV'](_0x3a5325, _0x4d67b4);
            },
            'kXpKf': function(_0x300b99, _0x17469b) {
                return _0x29cc86['UZuXP'](_0x300b99, _0x17469b);
            },
            'klvSS': _0x29cc86['ecOrj'],
            'lwyXi': _0x29cc86['GxURX'],
            'Xvfji': function(_0x57b9a8, _0x56cbfc) {
                return _0x29cc86['qmaPl'](_0x57b9a8, _0x56cbfc);
            },
            'PbNld': _0x29cc86['UUvst'],
            'ntArl': function(_0x1299df, _0x52bdf6) {
                return _0x29cc86['OopYs'](_0x1299df, _0x52bdf6);
            },
            'jEVYZ': _0x29cc86['FmldX'],
            'XpHnA': function(_0x3c6860, _0x134ad3) {
                return _0x29cc86['OopYs'](_0x3c6860, _0x134ad3);
            },
            'dweCK': _0x29cc86['SvErs'],
            'yCGAL': function(_0x533d9f, _0x20185b) {
                return _0x29cc86['YAaYv'](_0x533d9f, _0x20185b);
            },
            'urIhM': _0x29cc86['Sfwdu'],
            'jvjvg': _0x29cc86['cplma'],
            'vCcig': function(_0x46cb5d) {
                return _0x29cc86['laOEw'](_0x46cb5d);
            }
        };
        if (_0x29cc86['SFING'](_0x29cc86['maiOj'], _0x29cc86['OwAOM'])) {
            msg += ' 额外获得:' + res['data']['beanNumMember'] + '京豆';
        } else {
            let _0x1d4f0c = 'activityId=' + $['activityId'] + '&actorUuid=' + $['actorUuid'] + '&pin=' + _0x29cc86['ATTUP'](encodeURIComponent, $['Pin']) + '&type=' + _0x378627;
            $['post'](_0x29cc86['knCxx'](taskPostUrl, _0x29cc86['CeVTr'], _0x1d4f0c), async (_0x5aceb6, _0x21fb18, _0x93f0b5) => {
                var _0x6826a7 = {
                    'LLYFg': function(_0x257cb1, _0xcf7e59) {
                        return _0x3aae6d['AyhSy'](_0x257cb1, _0xcf7e59);
                    },
                    'dxANi': function(_0x3bf0ef, _0x11f95b) {
                        return _0x3aae6d['kXpKf'](_0x3bf0ef, _0x11f95b);
                    },
                    'EDpEU': _0x3aae6d['klvSS'],
                    'OalvR': _0x3aae6d['lwyXi'],
                    'RYmvp': function(_0x1cad32, _0x169dac) {
                        return _0x3aae6d['AyhSy'](_0x1cad32, _0x169dac);
                    }
                };
                try {
                    if (_0x5aceb6) {
                        console['log']('' + $['toStr'](_0x5aceb6));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        res = $['toObj'](_0x93f0b5);
                        if (_0x3aae6d['Xvfji'](typeof res, _0x3aae6d['PbNld'])) {
                            if (_0x3aae6d['ntArl'](res['result'], !![]) && res['data']) {
                                console['log']('抽奖获得：' + (res['data']['drawOk'] && res['data']['name'] || _0x3aae6d['jEVYZ']));
                            } else if (_0x3aae6d['Xvfji'](typeof res, _0x3aae6d['PbNld']) && res['errorMessage']) {
                                if (_0x3aae6d['XpHnA'](_0x3aae6d['dweCK'], _0x3aae6d['dweCK'])) {
                                    console['log']('抽奖 ' + (res['errorMessage'] || ''));
                                } else {
                                    setcookie = setcookies['split'](',');
                                }
                            } else {
                                if (_0x3aae6d['yCGAL'](_0x3aae6d['urIhM'], _0x3aae6d['jvjvg'])) {
                                    console['log'](_0x93f0b5);
                                } else {
                                    if (_0x6826a7['LLYFg'](_0x6826a7['dxANi'](guaopencard, ''), _0x6826a7['EDpEU'])) {
                                        console['log'](_0x6826a7['OalvR']);
                                    }
                                    if (_0x6826a7['RYmvp'](_0x6826a7['dxANi'](guaopencard, ''), _0x6826a7['EDpEU'])) {
                                        return;
                                    }
                                }
                            }
                        } else {
                            console['log'](_0x93f0b5);
                        }
                    }
                } catch (_0x4d535b) {
                    $['logErr'](_0x4d535b, _0x21fb18);
                } finally {
                    _0x3aae6d['vCcig'](_0x43f321);
                }
            });
        }
    });
}

function checkOpenCard() {
    var _0x49ca87 = {
        'hhvrR': function(_0x68b383, _0x5c63bb) {
            return _0x68b383 != _0x5c63bb;
        },
        'TnaGX': 'undefined',
        'rcELX': function(_0x4fe322, _0x1ec3c0) {
            return _0x4fe322 !== _0x1ec3c0;
        },
        'AnksI': 'MgSiC',
        'pHupg': 'pTnPB',
        'yqPEu': function(_0xc9bea2, _0x4285e5) {
            return _0xc9bea2 !== _0x4285e5;
        },
        'EeMZE': 'object',
        'OQHUq': function(_0x50adb8, _0x132889) {
            return _0x50adb8 === _0x132889;
        },
        'YwouK': 'oFexo',
        'DSjOX': 'wTAGH',
        'vdrla': function(_0x2d08e7, _0x32d05d) {
            return _0x2d08e7(_0x32d05d);
        },
        'sJDHx': 'tiCUC',
        'SfBTt': function(_0x23342f, _0x24a6aa) {
            return _0x23342f(_0x24a6aa);
        },
        'ufNYj': function(_0x3ca328, _0x1901bc, _0x14fac5) {
            return _0x3ca328(_0x1901bc, _0x14fac5);
        },
        'MBzxd': '/dingzhi/dz/openCard/checkOpenCard'
    };
    return new Promise(_0x3ff1b5 => {
        var _0x1b8879 = {
            'dVVJB': function(_0x21e0c1, _0x53337c) {
                return _0x49ca87['hhvrR'](_0x21e0c1, _0x53337c);
            },
            'rNbZs': _0x49ca87['TnaGX'],
            'BOeWl': function(_0x3c3f80, _0x4247c0) {
                return _0x49ca87['rcELX'](_0x3c3f80, _0x4247c0);
            },
            'nZXXf': _0x49ca87['AnksI'],
            'xAVYq': function(_0xf01fb, _0x55fd01) {
                return _0x49ca87['rcELX'](_0xf01fb, _0x55fd01);
            },
            'nSglS': _0x49ca87['pHupg'],
            'cKtbR': function(_0x451e72, _0x4dda18) {
                return _0x49ca87['yqPEu'](_0x451e72, _0x4dda18);
            },
            'FMSfj': _0x49ca87['EeMZE'],
            'DTCkL': function(_0x2835c6, _0x25326a) {
                return _0x49ca87['OQHUq'](_0x2835c6, _0x25326a);
            },
            'rGeUH': _0x49ca87['YwouK'],
            'GwxGX': _0x49ca87['DSjOX'],
            'VQSiX': function(_0x46f381, _0x353ec4) {
                return _0x49ca87['vdrla'](_0x46f381, _0x353ec4);
            }
        };
        if (_0x49ca87['yqPEu'](_0x49ca87['sJDHx'], _0x49ca87['sJDHx'])) {
            $['logErr'](e, resp);
        } else {
            let _0x575afa = 'activityId=' + $['activityId'] + '&pin=' + _0x49ca87['SfBTt'](encodeURIComponent, $['Pin']) + '&actorUuid=' + $['actorUuid'] + '&shareUuid=' + $['shareUuid'];
            $['post'](_0x49ca87['ufNYj'](taskPostUrl, _0x49ca87['MBzxd'], _0x575afa), async (_0x5f0edc, _0x479f0b, _0x4d544a) => {
                try {
                    if (_0x1b8879['BOeWl'](_0x1b8879['nZXXf'], _0x1b8879['nZXXf'])) {
                        if (_0x1b8879['dVVJB'](typeof res['data']['shopId'], _0x1b8879['rNbZs'])) $['shopId'] = res['data']['shopId'];
                        if (_0x1b8879['dVVJB'](typeof res['data']['venderId'], _0x1b8879['rNbZs'])) $['venderId'] = res['data']['venderId'];
                    } else {
                        if (_0x5f0edc) {
                            console['log']('' + $['toStr'](_0x5f0edc));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x1b8879['xAVYq'](_0x1b8879['nSglS'], _0x1b8879['nSglS'])) {
                                return JSON['parse'](str);
                            } else {
                                res = $['toObj'](_0x4d544a);
                                if (_0x1b8879['cKtbR'](typeof res, _0x1b8879['FMSfj'])) {
                                    if (_0x1b8879['DTCkL'](_0x1b8879['rGeUH'], _0x1b8879['GwxGX'])) {
                                        console['log']('getUserInfo ' + (res['errorMessage'] || ''));
                                    } else {
                                        console['log'](_0x4d544a);
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x4e0efa) {
                    $['logErr'](_0x4e0efa, _0x479f0b);
                } finally {
                    _0x1b8879['VQSiX'](_0x3ff1b5, res && res['data'] || '');
                }
            });
        }
    });
}

function drawContent() {
    var _0x259e18 = {
        'EfqCl': function(_0x337c12, _0x416751) {
            return _0x337c12 != _0x416751;
        },
        'ZcbQu': 'object',
        'zEdVX': function(_0x5a1d16, _0x3bcc5e) {
            return _0x5a1d16 > _0x3bcc5e;
        },
        'NsAKo': 'lz_jdpin_token=',
        'kaKkd': function(_0x3e950e, _0x545c88) {
            return _0x3e950e + _0x545c88;
        },
        'TanBW': 'LZ_TOKEN_KEY=',
        'UMWHM': 'LZ_TOKEN_VALUE=',
        'gEZVF': function(_0x42a1a6, _0x4c5062) {
            return _0x42a1a6 !== _0x4c5062;
        },
        'LTsGx': 'XdJEy',
        'wqexu': function(_0xf3a2bc) {
            return _0xf3a2bc();
        },
        'Gdrrb': function(_0x18963e, _0x11ae18) {
            return _0x18963e(_0x11ae18);
        },
        'IMhUm': function(_0x5b964f, _0x12004e, _0x41b2b0) {
            return _0x5b964f(_0x12004e, _0x41b2b0);
        },
        'HwmVK': '/dingzhi/taskact/openCardcommon/drawContent'
    };
    return new Promise(_0x578032 => {
        let _0x4dc5c7 = 'activityId=' + $['activityId'] + '&pin=' + _0x259e18['Gdrrb'](encodeURIComponent, $['Pin']);
        $['post'](_0x259e18['IMhUm'](taskPostUrl, _0x259e18['HwmVK'], _0x4dc5c7), async (_0xa8f750, _0x48f494, _0x42f09a) => {
            var _0x5e5379 = {
                'Twjkc': function(_0x3d941e, _0x1ca20b) {
                    return _0x259e18['EfqCl'](_0x3d941e, _0x1ca20b);
                },
                'QiNLF': _0x259e18['ZcbQu'],
                'hzrtD': function(_0x5e28cc, _0xfc1d1b) {
                    return _0x259e18['zEdVX'](_0x5e28cc, _0xfc1d1b);
                },
                'KUvVX': _0x259e18['NsAKo'],
                'dbSBB': function(_0x5062ff, _0x450265) {
                    return _0x259e18['kaKkd'](_0x5062ff, _0x450265);
                },
                'WQngx': _0x259e18['TanBW'],
                'qmJHN': function(_0x586a8b, _0x1c7633) {
                    return _0x259e18['kaKkd'](_0x586a8b, _0x1c7633);
                },
                'OkQSI': _0x259e18['UMWHM'],
                'ESWlv': function(_0x10663a, _0x4183c3) {
                    return _0x259e18['kaKkd'](_0x10663a, _0x4183c3);
                }
            };
            try {
                if (_0xa8f750) {
                    console['log']('' + $['toStr'](_0xa8f750));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {}
            } catch (_0xffedc6) {
                if (_0x259e18['gEZVF'](_0x259e18['LTsGx'], _0x259e18['LTsGx'])) {
                    if (_0x5e5379['Twjkc'](typeof setcookies, _0x5e5379['QiNLF'])) {
                        setcookie = setcookies['split'](',');
                    } else setcookie = setcookies;
                    for (let _0x1c4144 of setcookie) {
                        let _0x97314d = _0x1c4144['split'](';')[0x0]['trim']();
                        if (_0x97314d['split']('=')[0x1]) {
                            if (_0x5e5379['hzrtD'](_0x97314d['indexOf'](_0x5e5379['KUvVX']), -0x1)) lz_jdpin_token = _0x5e5379['dbSBB'](_0x97314d['replace'](/ /g, ''), ';');
                            if (_0x5e5379['hzrtD'](_0x97314d['indexOf'](_0x5e5379['WQngx']), -0x1)) LZ_TOKEN_KEY = _0x5e5379['qmJHN'](_0x97314d['replace'](/ /g, ''), ';');
                            if (_0x5e5379['hzrtD'](_0x97314d['indexOf'](_0x5e5379['OkQSI']), -0x1)) LZ_TOKEN_VALUE = _0x5e5379['ESWlv'](_0x97314d['replace'](/ /g, ''), ';');
                        }
                    }
                } else {
                    $['logErr'](_0xffedc6, _0x48f494);
                }
            } finally {
                _0x259e18['wqexu'](_0x578032);
            }
        });
    });
}

function getActorUuid() {
    var _0x2c0cc6 = {
        'BjwIm': function(_0x2b5ae9, _0x344aec) {
            return _0x2b5ae9 == _0x344aec;
        },
        'cGSBI': 'object',
        'uKVJU': function(_0x3a3e42, _0x5605a3) {
            return _0x3a3e42 === _0x5605a3;
        },
        'sOpnA': function(_0x2d7456, _0x2e232b) {
            return _0x2d7456 != _0x2e232b;
        },
        'RTFsR': 'undefined',
        'DEKwH': function(_0x43dd31, _0x36118b) {
            return _0x43dd31 != _0x36118b;
        },
        'YclmM': function(_0x272e62, _0x3b48a8) {
            return _0x272e62 == _0x3b48a8;
        },
        'qPCMj': function(_0x55eb76) {
            return _0x55eb76();
        },
        'ZeeTT': 'IWyqO',
        'ZzTHg': 'FNIoH',
        'YaXkB': 'ofmWu',
        'IgRZx': '此ip已被限制，请过10分钟后再执行脚本\n',
        'jEXlK': function(_0x559aab, _0x5ea491) {
            return _0x559aab !== _0x5ea491;
        },
        'fagKJ': 'rSLSB',
        'FhjiC': 'KSZHG',
        'NkonU': function(_0x4c95f3, _0x37037d) {
            return _0x4c95f3 !== _0x37037d;
        },
        'oRJob': 'dEOXm',
        'VHgZh': 'MvBDl',
        'wbDeh': function(_0x722994, _0x2d9143) {
            return _0x722994(_0x2d9143);
        },
        'XhGRu': function(_0x1334a5, _0x558a81, _0x4bea7d) {
            return _0x1334a5(_0x558a81, _0x4bea7d);
        },
        'dtMsD': '/dingzhi/dz/openCard/activityContent'
    };
    return new Promise(_0x249793 => {
        var _0x1cd4d8 = {
            'UNgbc': function(_0x51b2fd, _0x3624a9) {
                return _0x2c0cc6['BjwIm'](_0x51b2fd, _0x3624a9);
            },
            'CRKpH': _0x2c0cc6['cGSBI'],
            'cChld': function(_0x58f081, _0x51e6ee) {
                return _0x2c0cc6['uKVJU'](_0x58f081, _0x51e6ee);
            },
            'MKhyZ': function(_0x4ed083, _0x30830a) {
                return _0x2c0cc6['sOpnA'](_0x4ed083, _0x30830a);
            },
            'RdfdM': _0x2c0cc6['RTFsR'],
            'sYFed': function(_0x3821be, _0x3bfcea) {
                return _0x2c0cc6['sOpnA'](_0x3821be, _0x3bfcea);
            },
            'ygqtH': function(_0x526215, _0x15b712) {
                return _0x2c0cc6['DEKwH'](_0x526215, _0x15b712);
            },
            'HuvoI': function(_0x29797a, _0x226883) {
                return _0x2c0cc6['YclmM'](_0x29797a, _0x226883);
            },
            'yXuNb': function(_0xc809b5) {
                return _0x2c0cc6['qPCMj'](_0xc809b5);
            },
            'cjqIl': function(_0x4c266d, _0x223a75) {
                return _0x2c0cc6['uKVJU'](_0x4c266d, _0x223a75);
            },
            'LuThf': _0x2c0cc6['ZeeTT'],
            'RtblZ': _0x2c0cc6['ZzTHg'],
            'HMamZ': _0x2c0cc6['YaXkB'],
            'BNolb': function(_0x5e9dd1, _0x4743f7) {
                return _0x2c0cc6['YclmM'](_0x5e9dd1, _0x4743f7);
            },
            'hkzSq': _0x2c0cc6['IgRZx'],
            'CKffk': function(_0x319d7f, _0x1a1b5e) {
                return _0x2c0cc6['jEXlK'](_0x319d7f, _0x1a1b5e);
            },
            'hFuwW': _0x2c0cc6['fagKJ'],
            'tKgry': function(_0xfd1882, _0x5e86f5) {
                return _0x2c0cc6['uKVJU'](_0xfd1882, _0x5e86f5);
            },
            'eHrzw': _0x2c0cc6['FhjiC'],
            'qXJCr': function(_0xc807d1, _0x462a6f) {
                return _0x2c0cc6['DEKwH'](_0xc807d1, _0x462a6f);
            },
            'LSxnT': function(_0x15ebe1, _0x343429) {
                return _0x2c0cc6['NkonU'](_0x15ebe1, _0x343429);
            },
            'jYGmH': _0x2c0cc6['oRJob'],
            'wkmuE': _0x2c0cc6['VHgZh']
        };
        let _0x50f771 = 'activityId=' + $['activityId'] + '&pin=' + _0x2c0cc6['wbDeh'](encodeURIComponent, $['Pin']) + '&pinImg=' + _0x2c0cc6['wbDeh'](encodeURIComponent, $['attrTouXiang']) + '&nick=' + _0x2c0cc6['wbDeh'](encodeURIComponent, $['nickname']) + '&cjyxPin=&cjhyPin=&shareUuid=' + $['shareUuid'];
        $['post'](_0x2c0cc6['XhGRu'](taskPostUrl, _0x2c0cc6['dtMsD'], _0x50f771), async (_0x3842c3, _0x2d562f, _0x556b63) => {
            var _0x1057d0 = {
                'XQqJe': function(_0x330020) {
                    return _0x1cd4d8['yXuNb'](_0x330020);
                }
            };
            try {
                if (_0x1cd4d8['cjqIl'](_0x1cd4d8['LuThf'], _0x1cd4d8['RtblZ'])) {
                    _0x1057d0['XQqJe'](_0x249793);
                } else {
                    if (_0x3842c3) {
                        if (_0x1cd4d8['cjqIl'](_0x1cd4d8['HMamZ'], _0x1cd4d8['HMamZ'])) {
                            if (_0x2d562f['statusCode'] && _0x1cd4d8['BNolb'](_0x2d562f['statusCode'], 0x1ed)) {
                                console['log'](_0x1cd4d8['hkzSq']);
                                $['outFlag'] = !![];
                            }
                            console['log']('' + $['toStr'](_0x3842c3));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            res = $['toObj'](_0x556b63);
                            if (_0x1cd4d8['UNgbc'](typeof res, _0x1cd4d8['CRKpH']) && res['result'] && _0x1cd4d8['cChld'](res['result'], !![])) {
                                if (_0x1cd4d8['MKhyZ'](typeof res['data']['followShop']['allStatus'], _0x1cd4d8['RdfdM'])) $['followShop'] = res['data']['followShop']['allStatus'];
                                if (_0x1cd4d8['sYFed'](typeof res['data']['addSku']['allStatus'], _0x1cd4d8['RdfdM'])) $['addSku'] = res['data']['addSku']['allStatus'];
                                if (_0x1cd4d8['ygqtH'](typeof res['data']['actorUuid'], _0x1cd4d8['RdfdM'])) $['actorUuid'] = res['data']['actorUuid'];
                            } else if (_0x1cd4d8['HuvoI'](typeof res, _0x1cd4d8['CRKpH']) && res['errorMessage']) {
                                console['log']('activityContent ' + (res['errorMessage'] || ''));
                            } else {
                                console['log'](_0x556b63);
                            }
                        }
                    } else {
                        if (_0x1cd4d8['CKffk'](_0x1cd4d8['hFuwW'], _0x1cd4d8['hFuwW'])) {
                            console['log'](_0x556b63);
                        } else {
                            res = $['toObj'](_0x556b63);
                            if (_0x1cd4d8['BNolb'](typeof res, _0x1cd4d8['CRKpH']) && res['result'] && _0x1cd4d8['tKgry'](res['result'], !![])) {
                                if (_0x1cd4d8['tKgry'](_0x1cd4d8['eHrzw'], _0x1cd4d8['eHrzw'])) {
                                    if (_0x1cd4d8['ygqtH'](typeof res['data']['followShop']['allStatus'], _0x1cd4d8['RdfdM'])) $['followShop'] = res['data']['followShop']['allStatus'];
                                    if (_0x1cd4d8['ygqtH'](typeof res['data']['addSku']['allStatus'], _0x1cd4d8['RdfdM'])) $['addSku'] = res['data']['addSku']['allStatus'];
                                    if (_0x1cd4d8['qXJCr'](typeof res['data']['actorUuid'], _0x1cd4d8['RdfdM'])) $['actorUuid'] = res['data']['actorUuid'];
                                } else {
                                    console['log']('' + (res['message'] || ''));
                                }
                            } else if (_0x1cd4d8['BNolb'](typeof res, _0x1cd4d8['CRKpH']) && res['errorMessage']) {
                                console['log']('activityContent ' + (res['errorMessage'] || ''));
                            } else {
                                console['log'](_0x556b63);
                            }
                        }
                    }
                }
            } catch (_0x286c64) {
                if (_0x1cd4d8['LSxnT'](_0x1cd4d8['jYGmH'], _0x1cd4d8['wkmuE'])) {
                    $['logErr'](_0x286c64, _0x2d562f);
                } else {
                    console['log']('加购 ' + (res['errorMessage'] || ''));
                }
            } finally {
                _0x1cd4d8['yXuNb'](_0x249793);
            }
        });
    });
}

function getUserInfo() {
    var _0x1b49f6 = {
        'xlODh': function(_0x6b2c18, _0x300d38) {
            return _0x6b2c18 == _0x300d38;
        },
        'Zzltu': 'object',
        'Ntqnf': function(_0x51fc95, _0x2284b6) {
            return _0x51fc95 === _0x2284b6;
        },
        'svnKL': function(_0x200de4, _0x25949e) {
            return _0x200de4 != _0x25949e;
        },
        'gBkaV': 'undefined',
        'TICRu': 'https://img10.360buyimg.com/imgzone/jfs/t1/151712/34/15817/45445/600bae4bE4163dad8/c182821a5670cc0d.png',
        'oUgZt': function(_0x4c95d2, _0x41abc5) {
            return _0x4c95d2 !== _0x41abc5;
        },
        'rOQPk': 'uPdva',
        'eIgAy': 'JUPGr',
        'QXOOl': function(_0x16b0c9, _0x49df56) {
            return _0x16b0c9 === _0x49df56;
        },
        'caaqT': 'TatOu',
        'Ezcat': 'PtSdB',
        'Emgiz': function(_0x3c0f69, _0x134376) {
            return _0x3c0f69 != _0x134376;
        },
        'xqFjR': function(_0x5bcf1b, _0x40652d) {
            return _0x5bcf1b === _0x40652d;
        },
        'tadGI': 'XaTDE',
        'SFjaO': function(_0x5c4fc5, _0x55e79b) {
            return _0x5c4fc5 !== _0x55e79b;
        },
        'OGpaJ': 'FYVwS',
        'TSCLI': function(_0x12230c) {
            return _0x12230c();
        },
        'qtqDj': function(_0x41b5de, _0x24c13c) {
            return _0x41b5de(_0x24c13c);
        },
        'XhMke': function(_0x34571b, _0x467cc5, _0x2f7c84) {
            return _0x34571b(_0x467cc5, _0x2f7c84);
        },
        'RddKI': '/wxActionCommon/getUserInfo'
    };
    return new Promise(_0x204ae9 => {
        var _0x5baceb = {
            'WpkKE': function(_0x359df2, _0x52ef15) {
                return _0x1b49f6['xlODh'](_0x359df2, _0x52ef15);
            },
            'fWwTH': _0x1b49f6['Zzltu'],
            'JWsGb': function(_0x4f236b, _0x2859a4) {
                return _0x1b49f6['Ntqnf'](_0x4f236b, _0x2859a4);
            },
            'duzqP': function(_0x56ca86, _0x39d0a5) {
                return _0x1b49f6['svnKL'](_0x56ca86, _0x39d0a5);
            },
            'EiOQj': _0x1b49f6['gBkaV'],
            'uFztG': _0x1b49f6['TICRu'],
            'UblgD': function(_0x3f486, _0x168448) {
                return _0x1b49f6['oUgZt'](_0x3f486, _0x168448);
            },
            'bzkvQ': _0x1b49f6['rOQPk'],
            'oGAAF': _0x1b49f6['eIgAy'],
            'MsJHH': function(_0x1b566d, _0x3f3108) {
                return _0x1b49f6['QXOOl'](_0x1b566d, _0x3f3108);
            },
            'NXVqB': _0x1b49f6['caaqT'],
            'nPKBd': _0x1b49f6['Ezcat'],
            'wWkaW': function(_0x9baecc, _0x456d39) {
                return _0x1b49f6['xlODh'](_0x9baecc, _0x456d39);
            },
            'yRgEB': function(_0xba6b14, _0x41b996) {
                return _0x1b49f6['QXOOl'](_0xba6b14, _0x41b996);
            },
            'HVVij': function(_0x17b45c, _0x166d80) {
                return _0x1b49f6['Emgiz'](_0x17b45c, _0x166d80);
            },
            'ZmFqe': function(_0x1a283c, _0x32f34f) {
                return _0x1b49f6['xqFjR'](_0x1a283c, _0x32f34f);
            },
            'bUgkX': _0x1b49f6['tadGI'],
            'yBkEa': function(_0x444eac, _0x269659) {
                return _0x1b49f6['SFjaO'](_0x444eac, _0x269659);
            },
            'qaLAx': _0x1b49f6['OGpaJ'],
            'TTslf': function(_0x58ca33) {
                return _0x1b49f6['TSCLI'](_0x58ca33);
            }
        };
        let _0x4e1082 = 'pin=' + _0x1b49f6['qtqDj'](encodeURIComponent, $['Pin']);
        $['post'](_0x1b49f6['XhMke'](taskPostUrl, _0x1b49f6['RddKI'], _0x4e1082), async (_0x128b33, _0x531b03, _0x45681a) => {
            var _0x1320db = {
                'tZGFQ': function(_0x4c9832, _0x43aa58) {
                    return _0x5baceb['WpkKE'](_0x4c9832, _0x43aa58);
                },
                'GEvjX': _0x5baceb['fWwTH'],
                'VNZyX': function(_0x15a06f, _0x447707) {
                    return _0x5baceb['JWsGb'](_0x15a06f, _0x447707);
                },
                'tHtpo': function(_0x1b8f7f, _0x3b71f0) {
                    return _0x5baceb['duzqP'](_0x1b8f7f, _0x3b71f0);
                },
                'GkHFb': _0x5baceb['EiOQj'],
                'aLAug': _0x5baceb['uFztG'],
                'IikMB': function(_0x48b57c, _0x145402) {
                    return _0x5baceb['WpkKE'](_0x48b57c, _0x145402);
                }
            };
            if (_0x5baceb['UblgD'](_0x5baceb['bzkvQ'], _0x5baceb['oGAAF'])) {
                try {
                    if (_0x128b33) {
                        if (_0x5baceb['MsJHH'](_0x5baceb['NXVqB'], _0x5baceb['NXVqB'])) {
                            console['log']('' + $['toStr'](_0x128b33));
                            console['log']($['name'] + ' getUserInfo API请求失败，请检查网路重试');
                        } else {
                            setcookie = setcookies['split'](',');
                        }
                    } else {
                        if (_0x5baceb['UblgD'](_0x5baceb['nPKBd'], _0x5baceb['nPKBd'])) {
                            msg = res['data']['addBeanNum'] + '京豆';
                        } else {
                            res = $['toObj'](_0x45681a);
                            if (_0x5baceb['wWkaW'](typeof res, _0x5baceb['fWwTH']) && res['result'] && _0x5baceb['yRgEB'](res['result'], !![])) {
                                if (res['data'] && _0x5baceb['HVVij'](typeof res['data']['yunMidImageUrl'], _0x5baceb['EiOQj'])) $['attrTouXiang'] = res['data']['yunMidImageUrl'] || _0x5baceb['uFztG'];
                            } else if (_0x5baceb['wWkaW'](typeof res, _0x5baceb['fWwTH']) && res['errorMessage']) {
                                if (_0x5baceb['ZmFqe'](_0x5baceb['bUgkX'], _0x5baceb['bUgkX'])) {
                                    console['log']('getUserInfo ' + (res['errorMessage'] || ''));
                                } else {
                                    $['logErr'](e, _0x531b03);
                                }
                            } else {
                                console['log'](_0x45681a);
                            }
                        }
                    }
                } catch (_0x405f2f) {
                    $['logErr'](_0x405f2f, _0x531b03);
                } finally {
                    if (_0x5baceb['yBkEa'](_0x5baceb['qaLAx'], _0x5baceb['qaLAx'])) {
                        res = $['toObj'](_0x45681a);
                        if (_0x1320db['tZGFQ'](typeof res, _0x1320db['GEvjX']) && res['result'] && _0x1320db['VNZyX'](res['result'], !![])) {
                            if (res['data'] && _0x1320db['tHtpo'](typeof res['data']['yunMidImageUrl'], _0x1320db['GkHFb'])) $['attrTouXiang'] = res['data']['yunMidImageUrl'] || _0x1320db['aLAug'];
                        } else if (_0x1320db['IikMB'](typeof res, _0x1320db['GEvjX']) && res['errorMessage']) {
                            console['log']('getUserInfo ' + (res['errorMessage'] || ''));
                        } else {
                            console['log'](_0x45681a);
                        }
                    } else {
                        _0x5baceb['TTslf'](_0x204ae9);
                    }
                }
            } else {
                for (let _0x52fc8e of res['result']['giftInfo']['giftList']) {
                    console['log']('入会获得:' + _0x52fc8e['discountString'] + _0x52fc8e['prizeName'] + _0x52fc8e['secondLineDesc']);
                }
            }
        });
    });
}

function accessLogWithAD() {
    var _0x4f5f67 = {
        'oINVY': function(_0x53fd78, _0x5f0288) {
            return _0x53fd78 == _0x5f0288;
        },
        'qARUh': '邀请好友',
        'cammY': function(_0x4b6b9d, _0x38b511) {
            return _0x4b6b9d != _0x38b511;
        },
        'LXWlr': function(_0xc3549e, _0x3a33bd) {
            return _0xc3549e + _0x3a33bd;
        },
        'qffAV': function(_0x17a341) {
            return _0x17a341();
        },
        'EDrZO': function(_0x13beff, _0x7adf6f) {
            return _0x13beff === _0x7adf6f;
        },
        'GtwdU': 'VLsDK',
        'LOqIp': function(_0x24a4d0, _0x5ecf13) {
            return _0x24a4d0 !== _0x5ecf13;
        },
        'aqpId': 'KRBNO',
        'RePom': 'OOEEg',
        'PJIbw': 'bonxE',
        'CxOpp': 'WjbPT',
        'ncxHD': 'headers',
        'sBlOs': 'set-cookie',
        'RqymP': 'Set-Cookie',
        'mbVRw': function(_0x5c8e4e, _0x14bd39) {
            return _0x5c8e4e === _0x14bd39;
        },
        'CUIbu': 'tTmPm',
        'TcmBo': 'tdUtj',
        'pRpyr': 'object',
        'atzfJ': 'kuVOm',
        'qbwKn': 'Ilalh',
        'Tfnbm': function(_0x4b4ef8, _0x4d0f09) {
            return _0x4b4ef8 > _0x4d0f09;
        },
        'iRARR': 'LZ_TOKEN_KEY=',
        'DQSIh': function(_0x27a4d9, _0x35e5c7) {
            return _0x27a4d9 + _0x35e5c7;
        },
        'TfIPC': 'LZ_TOKEN_VALUE=',
        'tIRnr': function(_0x4e07be, _0x10dded) {
            return _0x4e07be && _0x10dded;
        },
        'AIFGv': 'zReIS',
        'UjRTm': 'aetjD',
        'CHxHI': 'ZhGGh',
        'PNtGm': 'SLxCN',
        'qJOYH': function(_0x28bb6c) {
            return _0x28bb6c();
        },
        'Ewzoq': function(_0x151c7b) {
            return _0x151c7b();
        },
        'DGPRk': function(_0x410a88, _0x4dc450) {
            return _0x410a88 > _0x4dc450;
        },
        'CUwAx': function(_0x35cf55, _0x59e39d) {
            return _0x35cf55(_0x59e39d);
        },
        'RfPnw': function(_0x100084, _0x2cba29) {
            return _0x100084(_0x2cba29);
        },
        'pTqyD': function(_0x15e98c, _0x46397c, _0x3481ab) {
            return _0x15e98c(_0x46397c, _0x3481ab);
        },
        'ZvRlM': '/common/accessLogWithAD'
    };
    return new Promise(_0x2b5319 => {
        var _0x1ff415 = {
            'hPlhJ': function(_0x3a4ce1) {
                return _0x4f5f67['Ewzoq'](_0x3a4ce1);
            },
            'Lagqb': function(_0x39fde6, _0x2cee3f) {
                return _0x4f5f67['Tfnbm'](_0x39fde6, _0x2cee3f);
            },
            'ZEkwk': _0x4f5f67['iRARR'],
            'WqtAi': function(_0x42afa8, _0x224208) {
                return _0x4f5f67['DQSIh'](_0x42afa8, _0x224208);
            },
            'MePNu': function(_0x2ddc15, _0x420a5d) {
                return _0x4f5f67['DGPRk'](_0x2ddc15, _0x420a5d);
            },
            'GYGup': _0x4f5f67['TfIPC'],
            'woCqD': function(_0x159982, _0x3adaf6) {
                return _0x4f5f67['DQSIh'](_0x159982, _0x3adaf6);
            }
        };
        let _0x258456 = 'https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'];
        let _0x325d9c = 'venderId=' + ($['shopId'] || $['venderId']) + '&code=99&pin=' + _0x4f5f67['CUwAx'](encodeURIComponent, $['Pin']) + '&activityId=' + $['activityId'] + '&pageUrl=' + _0x4f5f67['RfPnw'](encodeURIComponent, _0x258456) + '&subType=APP&adSource=null';
        $['post'](_0x4f5f67['pTqyD'](taskPostUrl, _0x4f5f67['ZvRlM'], _0x325d9c), async (_0x46faac, _0x3251a7, _0x5543ca) => {
            var _0x4b0eea = {
                'GOxtT': function(_0x24d2d1, _0x1fbf8a) {
                    return _0x4f5f67['oINVY'](_0x24d2d1, _0x1fbf8a);
                },
                'roBgc': _0x4f5f67['qARUh'],
                'qNBHC': function(_0x31e4e3, _0x34f64d) {
                    return _0x4f5f67['oINVY'](_0x31e4e3, _0x34f64d);
                },
                'ZXvDc': function(_0xdc4bb, _0x318961) {
                    return _0x4f5f67['cammY'](_0xdc4bb, _0x318961);
                },
                'ihEOn': function(_0x13e068, _0x1c1701) {
                    return _0x4f5f67['cammY'](_0x13e068, _0x1c1701);
                },
                'rvXRw': function(_0x2bd0f8, _0x2d604f) {
                    return _0x4f5f67['LXWlr'](_0x2bd0f8, _0x2d604f);
                },
                'RdYsN': function(_0x570e3f) {
                    return _0x4f5f67['qffAV'](_0x570e3f);
                }
            };
            if (_0x4f5f67['EDrZO'](_0x4f5f67['GtwdU'], _0x4f5f67['GtwdU'])) {
                try {
                    if (_0x46faac) {
                        if (_0x4f5f67['LOqIp'](_0x4f5f67['aqpId'], _0x4f5f67['RePom'])) {
                            console['log']('' + $['toStr'](_0x46faac));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            console['log'](_0x5543ca);
                        }
                    } else {
                        if (_0x4f5f67['LOqIp'](_0x4f5f67['PJIbw'], _0x4f5f67['CxOpp'])) {
                            let _0x2438aa = '';
                            let _0x28d982 = '';
                            let _0x410ed7 = _0x3251a7[_0x4f5f67['ncxHD']][_0x4f5f67['sBlOs']] || _0x3251a7[_0x4f5f67['ncxHD']][_0x4f5f67['RqymP']] || '';
                            let _0x2940ae = '';
                            if (_0x410ed7) {
                                if (_0x4f5f67['mbVRw'](_0x4f5f67['CUIbu'], _0x4f5f67['TcmBo'])) {
                                    let _0x219468 = res['data'][i];
                                    if (_0x4b0eea['GOxtT'](_0x219468['value'], _0x4b0eea['roBgc'])) num++;
                                    if (_0x4b0eea['qNBHC'](_0x219468['value'], _0x4b0eea['roBgc'])) value = _0x219468['infoName']['replace']('京豆', '');
                                    if (_0x4b0eea['ZXvDc'](_0x219468['value'], _0x4b0eea['roBgc'])) console['log']('' + (_0x4b0eea['ihEOn'](_0x219468['infoType'], 0xa) && _0x4b0eea['rvXRw'](_0x219468['value'], ':') || '') + _0x219468['infoName']);
                                } else {
                                    if (_0x4f5f67['cammY'](typeof _0x410ed7, _0x4f5f67['pRpyr'])) {
                                        if (_0x4f5f67['mbVRw'](_0x4f5f67['atzfJ'], _0x4f5f67['qbwKn'])) {
                                            console['log']('' + $['toStr'](_0x46faac));
                                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                                        } else {
                                            _0x2940ae = _0x410ed7['split'](',');
                                        }
                                    } else _0x2940ae = _0x410ed7;
                                    for (let _0x2511af of _0x2940ae) {
                                        let _0x29d1ea = _0x2511af['split'](';')[0x0]['trim']();
                                        if (_0x29d1ea['split']('=')[0x1]) {
                                            if (_0x4f5f67['Tfnbm'](_0x29d1ea['indexOf'](_0x4f5f67['iRARR']), -0x1)) _0x2438aa = _0x4f5f67['DQSIh'](_0x29d1ea['replace'](/ /g, ''), ';');
                                            if (_0x4f5f67['Tfnbm'](_0x29d1ea['indexOf'](_0x4f5f67['TfIPC']), -0x1)) _0x28d982 = _0x4f5f67['DQSIh'](_0x29d1ea['replace'](/ /g, ''), ';');
                                        }
                                    }
                                }
                            }
                            if (_0x4f5f67['tIRnr'](_0x2438aa, _0x28d982)) activityCookie = _0x2438aa + ' ' + _0x28d982;
                        } else {
                            $['logErr'](e, _0x3251a7);
                        }
                    }
                } catch (_0x300773) {
                    if (_0x4f5f67['LOqIp'](_0x4f5f67['AIFGv'], _0x4f5f67['UjRTm'])) {
                        $['logErr'](_0x300773, _0x3251a7);
                    } else {
                        _0x1ff415['hPlhJ'](_0x2b5319);
                    }
                } finally {
                    if (_0x4f5f67['mbVRw'](_0x4f5f67['CHxHI'], _0x4f5f67['PNtGm'])) {
                        _0x4b0eea['RdYsN'](_0x2b5319);
                    } else {
                        _0x4f5f67['qJOYH'](_0x2b5319);
                    }
                }
            } else {
                if (_0x1ff415['Lagqb'](name['indexOf'](_0x1ff415['ZEkwk']), -0x1)) LZ_TOKEN_KEY = _0x1ff415['WqtAi'](name['replace'](/ /g, ''), ';');
                if (_0x1ff415['MePNu'](name['indexOf'](_0x1ff415['GYGup']), -0x1)) LZ_TOKEN_VALUE = _0x1ff415['woCqD'](name['replace'](/ /g, ''), ';');
            }
        });
    });
}

function getMyPing() {
    var _0x72247c = {
        'gIByQ': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'yFRnu': function(_0x3d89b4, _0x5c91a2) {
            return _0x3d89b4 === _0x5c91a2;
        },
        'QSmlR': 'piAMm',
        'XnxrL': 'jfZJH',
        'OUYHL': function(_0x78adf3, _0x31ff99) {
            return _0x78adf3 == _0x31ff99;
        },
        'TodiQ': '此ip已被限制，请过10分钟后再执行脚本\n',
        'CSNFq': 'headers',
        'ePfxp': 'set-cookie',
        'KxwHI': 'Set-Cookie',
        'lrEIM': function(_0x3894f4, _0x55e038) {
            return _0x3894f4 !== _0x55e038;
        },
        'xoCSu': 'AdsfS',
        'sKyZR': function(_0x1f862f, _0x362111) {
            return _0x1f862f != _0x362111;
        },
        'XyTQv': 'object',
        'HPKeU': function(_0x2eccb3, _0x365fbf) {
            return _0x2eccb3 > _0x365fbf;
        },
        'MSZsC': 'lz_jdpin_token=',
        'dIKEk': function(_0x1fe522, _0x1e5453) {
            return _0x1fe522 + _0x1e5453;
        },
        'xoHvg': function(_0x59ff2b, _0x84d3bd) {
            return _0x59ff2b > _0x84d3bd;
        },
        'yKNrR': 'LZ_TOKEN_KEY=',
        'ARrZA': 'LZ_TOKEN_VALUE=',
        'GmHlt': function(_0x19ff41, _0x55e38a) {
            return _0x19ff41 && _0x55e38a;
        },
        'ysrdZ': function(_0x26ee5d, _0x41974e) {
            return _0x26ee5d === _0x41974e;
        },
        'tqDHf': 'undefined',
        'MQkTf': function(_0x4cfaa5, _0x402f61) {
            return _0x4cfaa5 != _0x402f61;
        },
        'BhOSY': 'nkvtc',
        'ltzaP': function(_0x385d3f) {
            return _0x385d3f();
        },
        'JSGuF': function(_0x283ff4, _0x19e919, _0x9b4d25) {
            return _0x283ff4(_0x19e919, _0x9b4d25);
        },
        'vuXgM': '/customer/getMyPing'
    };
    return new Promise(_0x2bb0d4 => {
        var _0x1cd3b2 = {
            'kJfdM': _0x72247c['gIByQ'],
            'sccbB': function(_0x258e82, _0x28d1cd) {
                return _0x72247c['yFRnu'](_0x258e82, _0x28d1cd);
            },
            'YFgOj': _0x72247c['QSmlR'],
            'vKZhA': _0x72247c['XnxrL'],
            'LEsZo': function(_0x2cc7c5, _0x537c8a) {
                return _0x72247c['OUYHL'](_0x2cc7c5, _0x537c8a);
            },
            'SfPXc': _0x72247c['TodiQ'],
            'odazn': _0x72247c['CSNFq'],
            'RVFkr': _0x72247c['ePfxp'],
            'Vzywv': _0x72247c['KxwHI'],
            'JhPLq': function(_0x49b606, _0x460dab) {
                return _0x72247c['lrEIM'](_0x49b606, _0x460dab);
            },
            'RLmub': _0x72247c['xoCSu'],
            'XWSUd': function(_0x50307f, _0x1aac46) {
                return _0x72247c['sKyZR'](_0x50307f, _0x1aac46);
            },
            'oXirC': _0x72247c['XyTQv'],
            'xzJKv': function(_0x4df43a, _0x22e227) {
                return _0x72247c['HPKeU'](_0x4df43a, _0x22e227);
            },
            'FqpDX': _0x72247c['MSZsC'],
            'ATYEg': function(_0x4ff758, _0x403eb8) {
                return _0x72247c['dIKEk'](_0x4ff758, _0x403eb8);
            },
            'DAdWe': function(_0x39659d, _0x48ee78) {
                return _0x72247c['xoHvg'](_0x39659d, _0x48ee78);
            },
            'TuOof': _0x72247c['yKNrR'],
            'jTYjX': _0x72247c['ARrZA'],
            'KjAFd': function(_0x54fade, _0x309206) {
                return _0x72247c['GmHlt'](_0x54fade, _0x309206);
            },
            'qxeEK': function(_0x52963b, _0x456e2e) {
                return _0x72247c['OUYHL'](_0x52963b, _0x456e2e);
            },
            'bhFmd': function(_0x25f86e, _0x5ee199) {
                return _0x72247c['ysrdZ'](_0x25f86e, _0x5ee199);
            },
            'IPVJN': _0x72247c['tqDHf'],
            'BsTXq': function(_0x20792d, _0x4231ac) {
                return _0x72247c['MQkTf'](_0x20792d, _0x4231ac);
            },
            'OMVbx': _0x72247c['BhOSY'],
            'AsZuY': function(_0x3cc733) {
                return _0x72247c['ltzaP'](_0x3cc733);
            }
        };
        let _0x432d8c = 'userId=' + ($['shopId'] || $['venderId']) + '&token=' + $['Token'] + '&fromType=APP';
        $['post'](_0x72247c['JSGuF'](taskPostUrl, _0x72247c['vuXgM'], _0x432d8c), async (_0x2b8331, _0x3da73a, _0x404f30) => {
            try {
                if (_0x2b8331) {
                    if (_0x1cd3b2['sccbB'](_0x1cd3b2['YFgOj'], _0x1cd3b2['vKZhA'])) {
                        setcookie = setcookies['split'](',');
                    } else {
                        if (_0x3da73a['statusCode'] && _0x1cd3b2['LEsZo'](_0x3da73a['statusCode'], 0x1ed)) {
                            console['log'](_0x1cd3b2['SfPXc']);
                            $['outFlag'] = !![];
                        }
                        console['log']('' + $['toStr'](_0x2b8331));
                        console['log']($['name'] + ' getMyPing API请求失败，请检查网路重试');
                    }
                } else {
                    let _0x366254 = '';
                    let _0x52a3ea = '';
                    let _0x4c7401 = _0x3da73a[_0x1cd3b2['odazn']][_0x1cd3b2['RVFkr']] || _0x3da73a[_0x1cd3b2['odazn']][_0x1cd3b2['Vzywv']] || '';
                    let _0x14d913 = '';
                    if (_0x4c7401) {
                        if (_0x1cd3b2['JhPLq'](_0x1cd3b2['RLmub'], _0x1cd3b2['RLmub'])) {
                            try {
                                return JSON['parse'](str);
                            } catch (_0x27f85b) {
                                console['log'](_0x27f85b);
                                $['msg']($['name'], '', _0x1cd3b2['kJfdM']);
                                return [];
                            }
                        } else {
                            if (_0x1cd3b2['XWSUd'](typeof _0x4c7401, _0x1cd3b2['oXirC'])) {
                                _0x14d913 = _0x4c7401['split'](',');
                            } else _0x14d913 = _0x4c7401;
                            for (let _0x2acef0 of _0x14d913) {
                                let _0x1bd2b6 = _0x2acef0['split'](';')[0x0]['trim']();
                                if (_0x1bd2b6['split']('=')[0x1]) {
                                    if (_0x1cd3b2['xzJKv'](_0x1bd2b6['indexOf'](_0x1cd3b2['FqpDX']), -0x1)) lz_jdpin_token = _0x1cd3b2['ATYEg'](_0x1bd2b6['replace'](/ /g, ''), ';');
                                    if (_0x1cd3b2['DAdWe'](_0x1bd2b6['indexOf'](_0x1cd3b2['TuOof']), -0x1)) _0x366254 = _0x1cd3b2['ATYEg'](_0x1bd2b6['replace'](/ /g, ''), ';');
                                    if (_0x1cd3b2['DAdWe'](_0x1bd2b6['indexOf'](_0x1cd3b2['jTYjX']), -0x1)) _0x52a3ea = _0x1cd3b2['ATYEg'](_0x1bd2b6['replace'](/ /g, ''), ';');
                                }
                            }
                        }
                    }
                    if (_0x1cd3b2['KjAFd'](_0x366254, _0x52a3ea)) activityCookie = _0x366254 + ' ' + _0x52a3ea;
                    let _0x5e7ffa = $['toObj'](_0x404f30);
                    if (_0x1cd3b2['qxeEK'](typeof _0x5e7ffa, _0x1cd3b2['oXirC']) && _0x5e7ffa['result'] && _0x1cd3b2['bhFmd'](_0x5e7ffa['result'], !![])) {
                        if (_0x5e7ffa['data'] && _0x1cd3b2['XWSUd'](typeof _0x5e7ffa['data']['secretPin'], _0x1cd3b2['IPVJN'])) $['Pin'] = _0x5e7ffa['data']['secretPin'];
                        if (_0x5e7ffa['data'] && _0x1cd3b2['BsTXq'](typeof _0x5e7ffa['data']['nickname'], _0x1cd3b2['IPVJN'])) $['nickname'] = _0x5e7ffa['data']['nickname'];
                    } else if (_0x1cd3b2['qxeEK'](typeof _0x5e7ffa, _0x1cd3b2['oXirC']) && _0x5e7ffa['errorMessage']) {
                        console['log']('getMyPing ' + (_0x5e7ffa['errorMessage'] || ''));
                    } else {
                        console['log'](_0x404f30);
                    }
                }
            } catch (_0x3fa982) {
                $['logErr'](_0x3fa982, _0x3da73a);
            } finally {
                if (_0x1cd3b2['JhPLq'](_0x1cd3b2['OMVbx'], _0x1cd3b2['OMVbx'])) {
                    console['log'](_0x404f30);
                } else {
                    _0x1cd3b2['AsZuY'](_0x2bb0d4);
                }
            }
        });
    });
}

function getSimpleActInfoVo() {
    var _0xab4cc1 = {
        'asUza': '如需执行脚本请设置环境变量[guaopencard26]为"true"',
        'RGfWo': '此ip已被限制，请过10分钟后再执行脚本\n',
        'SIGqs': '获取活动信息失败！',
        'wsONi': function(_0x309ec4, _0x42add8) {
            return _0x309ec4 === _0x42add8;
        },
        'JwJCV': 'MjTxC',
        'GmSFd': 'YoyJn',
        'ZyKxp': function(_0x1c5749, _0xcc8c62) {
            return _0x1c5749 !== _0xcc8c62;
        },
        'tLqYq': 'yGYlk',
        'QMlfV': function(_0x39cfd9, _0x22f00c) {
            return _0x39cfd9 == _0x22f00c;
        },
        'wdwWy': 'object',
        'tbVtu': 'wrjzc',
        'gMlPn': function(_0x385f7f, _0x133109) {
            return _0x385f7f != _0x133109;
        },
        'kEGdU': 'undefined',
        'RbbtX': function(_0xf0ebbc, _0x1f1abf) {
            return _0xf0ebbc === _0x1f1abf;
        },
        'JLkLL': 'JYJsr',
        'NFvoF': function(_0x44020e, _0x26d551) {
            return _0x44020e === _0x26d551;
        },
        'eZfEE': 'gnyeT',
        'dWgaw': 'tyMQs',
        'PMeKd': function(_0x49b559, _0x3a75ad) {
            return _0x49b559 !== _0x3a75ad;
        },
        'iRjKe': 'exgDL',
        'wkNAf': function(_0x43b1a8) {
            return _0x43b1a8();
        },
        'RagVT': function(_0x3cffba, _0x148480) {
            return _0x3cffba !== _0x148480;
        },
        'kWnPz': 'abSPr',
        'vHLJQ': function(_0x473d57, _0x19652f, _0x417672) {
            return _0x473d57(_0x19652f, _0x417672);
        },
        'YUerO': '/dz/common/getSimpleActInfoVo'
    };
    return new Promise(_0x9debb6 => {
        var _0x4f12e0 = {
            'utRDv': _0xab4cc1['asUza'],
            'BOeIG': _0xab4cc1['RGfWo'],
            'iCOER': _0xab4cc1['SIGqs'],
            'HNcHr': function(_0x77e04a, _0x29c54b) {
                return _0xab4cc1['wsONi'](_0x77e04a, _0x29c54b);
            },
            'aKfry': _0xab4cc1['JwJCV'],
            'PKCZV': _0xab4cc1['GmSFd'],
            'wqSXQ': function(_0x131447, _0x1c6a73) {
                return _0xab4cc1['ZyKxp'](_0x131447, _0x1c6a73);
            },
            'nuEUr': _0xab4cc1['tLqYq'],
            'ncRuG': function(_0x571cef, _0x16539e) {
                return _0xab4cc1['QMlfV'](_0x571cef, _0x16539e);
            },
            'AUHpD': _0xab4cc1['wdwWy'],
            'ehQAq': _0xab4cc1['tbVtu'],
            'QSKZy': function(_0x5543d4, _0x150f0c) {
                return _0xab4cc1['gMlPn'](_0x5543d4, _0x150f0c);
            },
            'OiPgB': _0xab4cc1['kEGdU'],
            'jbGSu': function(_0x5a0d8f, _0x270ce2) {
                return _0xab4cc1['gMlPn'](_0x5a0d8f, _0x270ce2);
            },
            'iMmdQ': function(_0x452a1b, _0x348102) {
                return _0xab4cc1['RbbtX'](_0x452a1b, _0x348102);
            },
            'JNApk': _0xab4cc1['JLkLL'],
            'stywJ': function(_0x3b2248, _0x124bf2) {
                return _0xab4cc1['NFvoF'](_0x3b2248, _0x124bf2);
            },
            'CBHRO': _0xab4cc1['eZfEE'],
            'gNVWf': _0xab4cc1['dWgaw'],
            'mdVCX': function(_0x4ae436, _0x23c4cd) {
                return _0xab4cc1['PMeKd'](_0x4ae436, _0x23c4cd);
            },
            'sRFMU': _0xab4cc1['iRjKe'],
            'wasad': function(_0x4b7f28) {
                return _0xab4cc1['wkNAf'](_0x4b7f28);
            }
        };
        if (_0xab4cc1['RagVT'](_0xab4cc1['kWnPz'], _0xab4cc1['kWnPz'])) {
            $['logErr'](e, resp);
        } else {
            let _0x2b8ace = 'activityId=' + $['activityId'];
            $['post'](_0xab4cc1['vHLJQ'](taskPostUrl, _0xab4cc1['YUerO'], _0x2b8ace), async (_0x15ee71, _0x6bf5be, _0x247169) => {
                var _0x201997 = {
                    'PCyXo': _0x4f12e0['BOeIG'],
                    'MnVnA': _0x4f12e0['iCOER']
                };
                if (_0x4f12e0['HNcHr'](_0x4f12e0['aKfry'], _0x4f12e0['PKCZV'])) {
                    $['logErr'](e, _0x6bf5be);
                } else {
                    try {
                        if (_0x4f12e0['wqSXQ'](_0x4f12e0['nuEUr'], _0x4f12e0['nuEUr'])) {
                            console['log'](_0x201997['PCyXo']);
                            $['outFlag'] = !![];
                        } else {
                            if (_0x15ee71) {
                                if (_0x6bf5be['statusCode'] && _0x4f12e0['ncRuG'](_0x6bf5be['statusCode'], 0x1ed)) {
                                    console['log'](_0x4f12e0['BOeIG']);
                                    $['outFlag'] = !![];
                                }
                                console['log']('' + JSON['stringify'](_0x15ee71));
                                console['log']($['name'] + ' getSimpleActInfoVo API请求失败，请检查网路重试');
                            } else {
                                res = $['toObj'](_0x247169);
                                if (_0x4f12e0['ncRuG'](typeof res, _0x4f12e0['AUHpD']) && res['result'] && _0x4f12e0['HNcHr'](res['result'], !![])) {
                                    if (_0x4f12e0['wqSXQ'](_0x4f12e0['ehQAq'], _0x4f12e0['ehQAq'])) {
                                        $['log'](_0x201997['MnVnA']);
                                        return;
                                    } else {
                                        if (_0x4f12e0['QSKZy'](typeof res['data']['shopId'], _0x4f12e0['OiPgB'])) $['shopId'] = res['data']['shopId'];
                                        if (_0x4f12e0['jbGSu'](typeof res['data']['venderId'], _0x4f12e0['OiPgB'])) $['venderId'] = res['data']['venderId'];
                                    }
                                } else if (_0x4f12e0['ncRuG'](typeof res, _0x4f12e0['AUHpD']) && res['errorMessage']) {
                                    if (_0x4f12e0['iMmdQ'](_0x4f12e0['JNApk'], _0x4f12e0['JNApk'])) {
                                        console['log']('getSimpleActInfoVo ' + (res['errorMessage'] || ''));
                                    } else {
                                        console['log'](_0x201997['PCyXo']);
                                        $['outFlag'] = !![];
                                    }
                                } else {
                                    if (_0x4f12e0['stywJ'](_0x4f12e0['CBHRO'], _0x4f12e0['gNVWf'])) {
                                        console['log'](_0x4f12e0['utRDv']);
                                    } else {
                                        console['log'](_0x247169);
                                    }
                                }
                            }
                        }
                    } catch (_0x879297) {
                        if (_0x4f12e0['mdVCX'](_0x4f12e0['sRFMU'], _0x4f12e0['sRFMU'])) {
                            console['log'](_0x247169);
                        } else {
                            $['logErr'](_0x879297, _0x6bf5be);
                        }
                    } finally {
                        _0x4f12e0['wasad'](_0x9debb6);
                    }
                }
            });
        }
    });
}

function getToken() {
    var _0x548fe8 = {
        'QGlOt': 'CookieJD',
        'yVXbA': 'CookieJD2',
        'JVyZV': function(_0x541cfb, _0x2ddb19) {
            return _0x541cfb(_0x2ddb19);
        },
        'OePUq': 'CookiesJD',
        'yYUZu': '此ip已被限制，请过10分钟后再执行脚本\n',
        'bDtty': function(_0x36eb82, _0x93a857) {
            return _0x36eb82 === _0x93a857;
        },
        'IbGPB': function(_0x8e39ac, _0x31496e) {
            return _0x8e39ac == _0x31496e;
        },
        'xvyCG': 'object',
        'CJpWJ': function(_0x22f8d8, _0x214277) {
            return _0x22f8d8(_0x214277);
        },
        'zyhsF': function(_0x4c9701, _0x5e2989) {
            return _0x4c9701 === _0x5e2989;
        },
        'PMzHd': 'WAAeR',
        'FcXHq': 'sBOpa',
        'QMVhG': function(_0x23d49f, _0x3092c8) {
            return _0x23d49f !== _0x3092c8;
        },
        'hZAsL': 'wwnvi',
        'saitS': 'lYHCZ',
        'adrhD': function(_0x3cd8a0, _0x496a4b) {
            return _0x3cd8a0 == _0x496a4b;
        },
        'PmviB': function(_0x157bad, _0x1755ba) {
            return _0x157bad != _0x1755ba;
        },
        'cYGrW': 'undefined',
        'OHRwS': 'kVTMd',
        'FlOAu': 'rCSNf',
        'wkvBX': function(_0x1eeeb1, _0x581153) {
            return _0x1eeeb1 !== _0x581153;
        },
        'GkMWI': 'EmyOh',
        'SsUVv': function(_0x55cced) {
            return _0x55cced();
        },
        'xXSip': 'area=16_1315_1316_53522&body=%7B%22url%22%3A%22https%3A%5C/%5C/lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&build=167802&client=apple&clientVersion=10.1.2&d_brand=apple&d_model=iPhone7%2C2&eid=eidI13258122dbs3szjEQkIVRuicODq/DNSsBLM4xbeI7LNrNf8zvCtu948vnQHSeBaeMmtuHNvBma5F1VoqXfFMLqEtAszoFJXeC632wmimZO2HdLk3&isBackground=N&joycious=61&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=1eb906a32940752b5097959b87bf7790cf72dd05&osVersion=12.4&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=1204348b019c16d2bc1001b54f9c922d&st=1631084298055&sv=121&uemps=0-0&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJJkTluvprA2edkf45Qnr%2BheZhZqYI0le8rfLv8piR0CH37aNbwkG6lFSiZc2/iiJ7N%2BepeAskIT6jJxHnR30UuxTlrxYEIdvneIT%2B15qeOuZzgAwIqKaea5BdItrTMPZr8VkRq/f3OY4mhwo3RSo4YBzPREVZLYzL4FXOUUil078ud4ftSPCJTg%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=796606e8e181aa5865ec20728a27238b',
        'EAQnH': 'application/x-www-form-urlencoded',
        'mynZn': 'api.m.jd.com'
    };
    return new Promise(_0x1f88a8 => {
        $['post']({
            'url': 'https://api.m.jd.com/client.action?functionId=isvObfuscator',
            'body': _0x548fe8['xXSip'],
            'headers': {
                'Content-Type': _0x548fe8['EAQnH'],
                'Cookie': cookie,
                'Host': _0x548fe8['mynZn'],
                'User-Agent': 'JD4iPhone/167802 (iPhone; iOS 14.3; Scale/2.00)'
            }
        }, async (_0x3d293e, _0x24f53e, _0x2af2d1) => {
            var _0x4ab3e3 = {
                'OIrjl': _0x548fe8['QGlOt'],
                'VWdEJ': _0x548fe8['yVXbA'],
                'jwoxa': function(_0xee1d54, _0xa3e94a) {
                    return _0x548fe8['JVyZV'](_0xee1d54, _0xa3e94a);
                },
                'KvSqb': _0x548fe8['OePUq'],
                'vfJEs': _0x548fe8['yYUZu'],
                'NfMqw': function(_0x21bf60, _0x176d29) {
                    return _0x548fe8['bDtty'](_0x21bf60, _0x176d29);
                },
                'GzCND': function(_0x28cabf, _0x136166) {
                    return _0x548fe8['IbGPB'](_0x28cabf, _0x136166);
                },
                'rGSHi': _0x548fe8['xvyCG'],
                'uQKCb': function(_0x2c01a2, _0x2831e5) {
                    return _0x548fe8['CJpWJ'](_0x2c01a2, _0x2831e5);
                }
            };
            if (_0x548fe8['zyhsF'](_0x548fe8['PMzHd'], _0x548fe8['PMzHd'])) {
                try {
                    if (_0x548fe8['zyhsF'](_0x548fe8['FcXHq'], _0x548fe8['FcXHq'])) {
                        if (_0x3d293e) {
                            if (_0x548fe8['QMVhG'](_0x548fe8['hZAsL'], _0x548fe8['saitS'])) {
                                console['log']('' + $['toStr'](_0x3d293e));
                                console['log']($['name'] + ' isvObfuscator API请求失败，请检查网路重试');
                            } else {
                                if (_0x3d293e) {
                                    console['log']('' + $['toStr'](_0x3d293e));
                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                } else {}
                            }
                        } else {
                            let _0x21e30b = $['toObj'](_0x2af2d1);
                            if (_0x548fe8['IbGPB'](typeof _0x21e30b, _0x548fe8['xvyCG']) && _0x548fe8['adrhD'](_0x21e30b['errcode'], 0x0)) {
                                if (_0x548fe8['PmviB'](typeof _0x21e30b['token'], _0x548fe8['cYGrW'])) $['Token'] = _0x21e30b['token'];
                            } else if (_0x548fe8['adrhD'](typeof _0x21e30b, _0x548fe8['xvyCG']) && _0x21e30b['message']) {
                                if (_0x548fe8['zyhsF'](_0x548fe8['OHRwS'], _0x548fe8['OHRwS'])) {
                                    console['log']('isvObfuscator ' + (_0x21e30b['message'] || ''));
                                } else {
                                    cookiesArr = [$['getdata'](_0x4ab3e3['OIrjl']), $['getdata'](_0x4ab3e3['VWdEJ']), ..._0x4ab3e3['jwoxa'](jsonParse, $['getdata'](_0x4ab3e3['KvSqb']) || '[]')['map'](_0x1f3926 => _0x1f3926['cookie'])]['filter'](_0x5a6c52 => !!_0x5a6c52);
                                }
                            } else {
                                console['log'](_0x2af2d1);
                            }
                        }
                    } else {
                        console['log'](_0x4ab3e3['vfJEs']);
                        $['outFlag'] = !![];
                    }
                } catch (_0xbf0db5) {
                    if (_0x548fe8['QMVhG'](_0x548fe8['FlOAu'], _0x548fe8['FlOAu'])) {
                        if (_0x4ab3e3['NfMqw'](res['result'], !![]) && res['data']) {
                            $['log']('=========== 你邀请了:' + res['data']['length'] + '个');
                        } else if (_0x4ab3e3['GzCND'](typeof res, _0x4ab3e3['rGSHi']) && res['errorMessage']) {
                            console['log']('' + (res['errorMessage'] || ''));
                        } else {
                            console['log'](_0x2af2d1);
                        }
                    } else {
                        $['logErr'](_0xbf0db5, _0x24f53e);
                    }
                } finally {
                    if (_0x548fe8['wkvBX'](_0x548fe8['GkMWI'], _0x548fe8['GkMWI'])) {
                        $['UA'] = 'jdapp;iPhone;10.1.2;14.3;' + _0x4ab3e3['uQKCb'](randomString, 0x28) + ';network/wifi;model/iPhone12,1;addressid/4199175193;appBuild/167802;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
                    } else {
                        _0x548fe8['SsUVv'](_0x1f88a8);
                    }
                }
            } else {
                $['logErr'](e, _0x24f53e);
            }
        });
    });
}

function getCk() {
    var _0x5ac1e3 = {
        'auile': function(_0x50ec4d, _0x2cf48a) {
            return _0x50ec4d > _0x2cf48a;
        },
        'yrUOd': 'lz_jdpin_token=',
        'aVmbA': function(_0x355a2c, _0x330d67) {
            return _0x355a2c + _0x330d67;
        },
        'iBsfZ': 'LZ_TOKEN_KEY=',
        'zwbtk': function(_0x261c2d, _0x2e3153) {
            return _0x261c2d > _0x2e3153;
        },
        'yfTIc': 'LZ_TOKEN_VALUE=',
        'SYbfE': function(_0x48712a, _0x2bba22) {
            return _0x48712a === _0x2bba22;
        },
        'fVKCB': 'dRvCB',
        'uHKuE': 'CyHkz',
        'ZJryt': function(_0x254e27, _0x39f50a) {
            return _0x254e27 == _0x39f50a;
        },
        'sOVph': '此ip已被限制，请过10分钟后再执行脚本\n',
        'utihz': 'headers',
        'lqFgq': 'set-cookie',
        'DbAnq': 'Set-Cookie',
        'gPCJE': function(_0x15bd5f, _0x4b59c2) {
            return _0x15bd5f != _0x4b59c2;
        },
        'YLvIx': 'object',
        'etWXh': function(_0x3d7c1c, _0x2f391e) {
            return _0x3d7c1c !== _0x2f391e;
        },
        'yOmGR': 'cWRUy',
        'IzJnH': 'FUUSL',
        'TDPLK': function(_0x3ae6b1, _0x33aabe) {
            return _0x3ae6b1 && _0x33aabe;
        },
        'wkfqc': function(_0x50e44f, _0x43d553) {
            return _0x50e44f === _0x43d553;
        },
        'gVcYi': 'lsATq',
        'CJwsh': function(_0x5375a1) {
            return _0x5375a1();
        }
    };
    return new Promise(_0xaa5da9 => {
        var _0x28ec81 = {
            'qzBOO': function(_0x2fe3f7, _0x287946) {
                return _0x5ac1e3['auile'](_0x2fe3f7, _0x287946);
            },
            'tUSJu': _0x5ac1e3['yrUOd'],
            'sjchR': function(_0x599098, _0x55f364) {
                return _0x5ac1e3['aVmbA'](_0x599098, _0x55f364);
            },
            'TvVuf': _0x5ac1e3['iBsfZ'],
            'LpbGO': function(_0x2f7b4d, _0x4e05bf) {
                return _0x5ac1e3['aVmbA'](_0x2f7b4d, _0x4e05bf);
            },
            'Cdrwm': function(_0x59ac22, _0x2848b3) {
                return _0x5ac1e3['zwbtk'](_0x59ac22, _0x2848b3);
            },
            'YEcZJ': _0x5ac1e3['yfTIc'],
            'NXfbT': function(_0x1fc720, _0x23cdd2) {
                return _0x5ac1e3['SYbfE'](_0x1fc720, _0x23cdd2);
            },
            'MJLcD': _0x5ac1e3['fVKCB'],
            'Ovadh': _0x5ac1e3['uHKuE'],
            'BUqLn': function(_0x47b17c, _0x135c0a) {
                return _0x5ac1e3['ZJryt'](_0x47b17c, _0x135c0a);
            },
            'dRhLp': _0x5ac1e3['sOVph'],
            'lHExv': _0x5ac1e3['utihz'],
            'LSFEb': _0x5ac1e3['lqFgq'],
            'uPzMF': _0x5ac1e3['DbAnq'],
            'zqamr': function(_0x2ebc06, _0xfb005b) {
                return _0x5ac1e3['gPCJE'](_0x2ebc06, _0xfb005b);
            },
            'tHUvu': _0x5ac1e3['YLvIx'],
            'DheGW': function(_0x4da251, _0xed39bd) {
                return _0x5ac1e3['etWXh'](_0x4da251, _0xed39bd);
            },
            'LAFQD': _0x5ac1e3['yOmGR'],
            'dpRpY': function(_0x1d4e92, _0x2f43f0) {
                return _0x5ac1e3['etWXh'](_0x1d4e92, _0x2f43f0);
            },
            'kCCUz': _0x5ac1e3['IzJnH'],
            'NLwis': function(_0x56bea4, _0x2614e2) {
                return _0x5ac1e3['zwbtk'](_0x56bea4, _0x2614e2);
            },
            'pXCmG': function(_0xfe6bb4, _0x24c025) {
                return _0x5ac1e3['zwbtk'](_0xfe6bb4, _0x24c025);
            },
            'XWxlX': function(_0x2db7aa, _0x439381) {
                return _0x5ac1e3['TDPLK'](_0x2db7aa, _0x439381);
            },
            'JYoeR': function(_0x26c4bb, _0x119436) {
                return _0x5ac1e3['wkfqc'](_0x26c4bb, _0x119436);
            },
            'uIBFX': _0x5ac1e3['gVcYi'],
            'feYTV': function(_0x35c698) {
                return _0x5ac1e3['CJwsh'](_0x35c698);
            }
        };
        let _0x40341c = {
            'url': 'https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'],
            'followRedirect': ![],
            'headers': {
                'User-Agent': $['UA']
            }
        };
        $['get'](_0x40341c, async (_0x130a81, _0x329e36, _0x1f8e36) => {
            try {
                if (_0x130a81) {
                    if (_0x28ec81['NXfbT'](_0x28ec81['MJLcD'], _0x28ec81['Ovadh'])) {
                        $['shopactivityId'] = _0x1f8e36['result']['interestsRuleList'] && _0x1f8e36['result']['interestsRuleList'][0x0] && _0x1f8e36['result']['interestsRuleList'][0x0]['interestsInfo'] && _0x1f8e36['result']['interestsRuleList'][0x0]['interestsInfo']['activityId'] || '';
                    } else {
                        if (_0x329e36['statusCode'] && _0x28ec81['BUqLn'](_0x329e36['statusCode'], 0x1ed)) {
                            console['log'](_0x28ec81['dRhLp']);
                            $['outFlag'] = !![];
                        }
                        console['log']('' + $['toStr'](_0x130a81));
                        console['log']($['name'] + ' cookie API请求失败，请检查网路重试');
                    }
                } else {
                    let _0x235c14 = '';
                    let _0x108bd9 = '';
                    let _0x22ba46 = _0x329e36[_0x28ec81['lHExv']][_0x28ec81['LSFEb']] || _0x329e36[_0x28ec81['lHExv']][_0x28ec81['uPzMF']] || '';
                    let _0x4ef3cb = '';
                    if (_0x22ba46) {
                        if (_0x28ec81['zqamr'](typeof _0x22ba46, _0x28ec81['tHUvu'])) {
                            _0x4ef3cb = _0x22ba46['split'](',');
                        } else _0x4ef3cb = _0x22ba46;
                        for (let _0x327bd8 of _0x4ef3cb) {
                            if (_0x28ec81['DheGW'](_0x28ec81['LAFQD'], _0x28ec81['LAFQD'])) {
                                if (_0x28ec81['qzBOO'](name['indexOf'](_0x28ec81['tUSJu']), -0x1)) lz_jdpin_token = _0x28ec81['sjchR'](name['replace'](/ /g, ''), ';');
                                if (_0x28ec81['qzBOO'](name['indexOf'](_0x28ec81['TvVuf']), -0x1)) _0x235c14 = _0x28ec81['LpbGO'](name['replace'](/ /g, ''), ';');
                                if (_0x28ec81['Cdrwm'](name['indexOf'](_0x28ec81['YEcZJ']), -0x1)) _0x108bd9 = _0x28ec81['LpbGO'](name['replace'](/ /g, ''), ';');
                            } else {
                                let _0x4ebda8 = _0x327bd8['split'](';')[0x0]['trim']();
                                if (_0x4ebda8['split']('=')[0x1]) {
                                    if (_0x28ec81['dpRpY'](_0x28ec81['kCCUz'], _0x28ec81['kCCUz'])) {
                                        console['log']('' + $['toStr'](_0x130a81));
                                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                                    } else {
                                        if (_0x28ec81['NLwis'](_0x4ebda8['indexOf'](_0x28ec81['TvVuf']), -0x1)) _0x235c14 = _0x28ec81['LpbGO'](_0x4ebda8['replace'](/ /g, ''), ';');
                                        if (_0x28ec81['pXCmG'](_0x4ebda8['indexOf'](_0x28ec81['YEcZJ']), -0x1)) _0x108bd9 = _0x28ec81['LpbGO'](_0x4ebda8['replace'](/ /g, ''), ';');
                                    }
                                }
                            }
                        }
                    }
                    if (_0x28ec81['XWxlX'](_0x235c14, _0x108bd9)) activityCookie = _0x235c14 + ' ' + _0x108bd9;
                }
            } catch (_0x3fb3ab) {
                $['logErr'](_0x3fb3ab, _0x329e36);
            } finally {
                if (_0x28ec81['JYoeR'](_0x28ec81['uIBFX'], _0x28ec81['uIBFX'])) {
                    _0x28ec81['feYTV'](_0xaa5da9);
                } else {
                    console['log'](_0x1f8e36);
                }
            }
        });
    });
}

function taskPostUrl(_0x31d13d, _0x3b40b0) {
    var _0x15238b = {
        'XnWzK': 'application/json',
        'Dqjyb': 'zh-cn',
        'cbQCL': 'gzip, deflate, br',
        'nlOlh': 'keep-alive',
        'CGild': 'application/x-www-form-urlencoded',
        'pRafQ': function(_0xd1825c, _0x5e7113) {
            return _0xd1825c + _0x5e7113;
        },
        'tpBUK': function(_0x2e1a5c, _0x15b77f) {
            return _0x2e1a5c + _0x15b77f;
        },
        'GqJrw': 'AUTH_C_USER=',
        'qFJUJ': 'lzdz1-isv.isvjcloud.com',
        'haHYH': 'https://lzdz1-isv.isvjcloud.com',
        'zDCGs': 'XMLHttpRequest'
    };
    return {
        'url': 'https://lzdz1-isv.isvjcloud.com' + _0x31d13d,
        'body': _0x3b40b0,
        'headers': {
            'Accept': _0x15238b['XnWzK'],
            'Accept-Language': _0x15238b['Dqjyb'],
            'Accept-Encoding': _0x15238b['cbQCL'],
            'Connection': _0x15238b['nlOlh'],
            'Content-Type': _0x15238b['CGild'],
            'Cookie': '' + activityCookie + ($['Pin'] && _0x15238b['pRafQ'](_0x15238b['tpBUK'](_0x15238b['GqJrw'], $['Pin']), ';') || '') + lz_jdpin_token,
            'Host': _0x15238b['qFJUJ'],
            'Origin': _0x15238b['haHYH'],
            'X-Requested-With': _0x15238b['zDCGs'],
            'Referer': 'https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'],
            'User-Agent': $['UA']
        }
    };
}

function getUA() {
    var _0x5694d0 = {
        'FciFb': function(_0x1be93d, _0xe29ae9) {
            return _0x1be93d(_0xe29ae9);
        }
    };
    $['UA'] = 'jdapp;iPhone;10.1.2;14.3;' + _0x5694d0['FciFb'](randomString, 0x28) + ';network/wifi;model/iPhone12,1;addressid/4199175193;appBuild/167802;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}

function randomString(_0x1485ee) {
    var _0x1abd24 = {
        'PNlIh': function(_0x3b93b8, _0xc353ec) {
            return _0x3b93b8 || _0xc353ec;
        },
        'PDeOb': 'abcdef0123456789',
        'fitXu': function(_0x18a0d2, _0x4011f2) {
            return _0x18a0d2 < _0x4011f2;
        },
        'CoGKu': function(_0x35530d, _0x3d5427) {
            return _0x35530d * _0x3d5427;
        }
    };
    _0x1485ee = _0x1abd24['PNlIh'](_0x1485ee, 0x20);
    let _0x5eecd9 = _0x1abd24['PDeOb'],
        _0x5e0298 = _0x5eecd9['length'],
        _0x1177d7 = '';
    for (i = 0x0; _0x1abd24['fitXu'](i, _0x1485ee); i++) _0x1177d7 += _0x5eecd9['charAt'](Math['floor'](_0x1abd24['CoGKu'](Math['random'](), _0x5e0298)));
    return _0x1177d7;
}

function jsonParse(_0x31b26e) {
    var _0x48d49d = {
        'vbGHi': '获取不到[actorUuid]退出执行，请重新执行',
        'YiosX': function(_0xedca4, _0x1ea277) {
            return _0xedca4 == _0x1ea277;
        },
        'jJBOR': 'string',
        'wXyQB': function(_0x573c9e, _0xde6c82) {
            return _0x573c9e !== _0xde6c82;
        },
        'gCUgu': 'udmvO',
        'SlHTo': 'ZIftO',
        'wbpst': function(_0x173477, _0x5929f0) {
            return _0x173477 !== _0x5929f0;
        },
        'Syfqs': 'EUATJ',
        'DsUYG': 'TAkJz',
        'LklaR': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x48d49d['YiosX'](typeof _0x31b26e, _0x48d49d['jJBOR'])) {
        try {
            if (_0x48d49d['wXyQB'](_0x48d49d['gCUgu'], _0x48d49d['SlHTo'])) {
                return JSON['parse'](_0x31b26e);
            } else {
                console['log'](_0x48d49d['vbGHi']);
                return;
            }
        } catch (_0x5a1277) {
            if (_0x48d49d['wbpst'](_0x48d49d['Syfqs'], _0x48d49d['DsUYG'])) {
                console['log'](_0x5a1277);
                $['msg']($['name'], '', _0x48d49d['LklaR']);
                return [];
            } else {
                console['log']('activityContent ' + (res['errorMessage'] || ''));
            }
        }
    }
};
_0xodB = 'jsjiami.com.v6'

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}


