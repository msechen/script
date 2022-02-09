/*

安卓软件名称:快音

项目注册地址:https://landing.kaixinyf.cn/e30aze?invite_code=2S7B4S&_timestamp=1644398479&sign=15c82c2822432391d8402109a0762609&app_name=kuaiyin&device_id=1148692d61103e7c&client_v=5.03.03&platform=Android&platform_brand=blackshark&utm_source=xiaomi&um_from_appkey=5d91d0ed570df3d8ed000cb9&share_from=weixin&share_position=wuren

声明：会有黑号还是黑设备的状态，注册后登录上去自行提现0.3元，如果能提现到账就可以跑脚本，不能你跑了也没啥用，到最后也提现不了

必要变量:

变量名 soy_kyin_data
变量值示例 export soy_kyin_data="device-id值&access-token值&refresh_token值"

寻找变量方法:退出登录,开抓包,点微信登录成功后找 https://api.kaixinyf.cn/passport/UnionLogin 链接

注释: device-id值在请求头里面找,access-token值和refresh_token值在登录成功后 响应 里面找

注意:变量阅读要在配置文件里面填
注意,变量阅读要在配置文件里面填
注意,变量阅读要在配置文件里面填

多个号用 # 或 @ 或 换行 隔开

cron 0-59/10 * * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_kyin.js
注意:脚本只适配青龙面板,往后也是
注意:脚本只适配青龙面板,往后也是
注意:脚本只适配青龙面板,往后也是
*/


const $ = new Env('快音');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodx='jsjiami.com.v6',_0xodx_=['_0xodx'],_0x4c59=[_0xodx,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x53\x65\x6e\x64\x43\x6f\x69\x6e','\x6d\x6f\x64\x65\x3d\x6d\x75\x73\x69\x63\x26\x6c\x65\x76\x65\x6c\x3d\x38\x26\x75\x73\x65\x64\x5f\x66\x61\x73\x74\x5f\x74\x69\x6d\x65\x3d\x30\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x33\x39\x34\x36\x34\x39\x38\x31\x31\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x43\x30\x32\x38\x35\x32\x38\x33\x46\x33\x31\x38\x36\x41\x43\x42\x30\x46\x35\x30\x43\x31\x38\x46\x39\x34\x45\x34\x37\x34\x39\x32\x32\x31\x37\x42\x44\x45\x42\x38\x35\x37\x45\x38\x41\x37\x42\x30\x44\x43\x42\x36\x34\x39\x32\x36\x45\x31\x45\x44\x39\x36\x41\x39','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x63\x6f\x69\x6e','\x20\u91d1\u5e01','\x20\u5237\u65f6\u957f\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x67\x65\x74\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x34\x31\x39\x37\x35\x33\x33\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x45\x34\x31\x30\x39\x45\x45\x32\x34\x43\x35\x33\x41\x31\x46\x32\x45\x33\x38\x42\x36\x42\x32\x41\x41\x45\x36\x44\x46\x34\x38\x41\x44\x32\x43\x42\x43\x35\x41\x41\x42\x46\x38\x34\x37\x35\x36\x32\x30\x43\x39\x36\x44\x44\x35\x33\x31\x39\x31\x30\x46\x43\x38','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u6210\u529f\x2e\x2e\x2e','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x57\x65\x6c\x66\x61\x72\x65\x50\x61\x67\x65\x54\x61\x73\x6b','\x70\x61\x67\x65\x3d\x72\x65\x64\x5f\x70\x61\x63\x6b\x61\x67\x65\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x36\x31\x36\x39\x32\x37\x30\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x32\x34\x30\x37\x36\x33\x44\x41\x35\x33\x36\x43\x30\x44\x33\x46\x38\x38\x33\x34\x34\x41\x42\x45\x35\x32\x44\x37\x45\x43\x38\x42\x36\x37\x30\x39\x30\x34\x39\x41\x32\x33\x41\x37\x33\x36\x35\x32\x38\x44\x42\x44\x35\x44\x37\x44\x43\x36\x30\x43\x46\x42\x42\x31','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x64\x61\x69\x6c\x79\x54\x61\x73\x6b','\x74\x61\x73\x6b\x5f\x74\x79\x70\x65','\x63\x6f\x6e\x74\x69\x6e\x75\x65\x5f\x6c\x6f\x67\x5f\x69\x6e\x5f\x33','\x70\x72\x6f\x67\x72\x65\x73\x73\x5f\x73\x74\x61\x74\x75\x73','\x74\x69\x74\x6c\x65','\x72\x65\x64\x70\x61\x63\x6b\x61\x67\x65\x4c\x6f\x67\x6f\x6e','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x6f\x6e\x65','\x66\x75\x6c\x69\x4d\x75\x73\x69\x63\x4f\x76\x65\x72','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x77\x6f','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x68\x72\x65\x65','\x6c\x69\x73\x74\x65\x6e\x5f\x6d\x75\x73\x69\x63\x5f\x72\x65\x77\x61\x72\x64','\x73\x70\x65\x63\x69\x61\x6c','\x73\x70\x65\x63\x69\x61\x6c\x5f\x70\x72\x6f\x67\x72\x65\x73\x73','\x73\x74\x61\x74\x75\x73','\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x76\x69\x64\x65\x6f\x5f\x6e\x6f\x77','\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31','\x77\x65\x6c\x66\x61\x72\x65\x54\x61\x73\x6b\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67','\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x77\x61\x74\x63\x68\x5f\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x33','\x77\x65\x6c\x66\x61\x72\x65\x5f\x77\x61\x74\x63\x68\x5f\x76\x69\x64\x65\x6f','\x25\x45\x36\x25\x38\x31\x25\x41\x44\x25\x45\x35\x25\x39\x36\x25\x39\x43\x25\x45\x38\x25\x38\x45\x25\x42\x37\x25\x45\x35\x25\x42\x45\x25\x39\x37\x5f\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31\x25\x33\x42\x72\x65\x64\x70\x61\x63\x6b\x61\x67\x65\x41\x64\x56\x69\x64\x65\x6f','\x72\x65\x77\x61\x72\x64\x5f\x6d\x6f\x64\x75\x6c\x65\x5f\x64\x6f\x75\x62\x6c\x65','\x66\x75\x6c\x69\x57\x61\x74\x63\x68\x41\x64\x56\x69\x64\x65\x6f\x4f\x76\x65\x72','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67\x52\x65\x77\x61\x72\x64','\x74\x61\x73\x6b\x54\x79\x70\x65\x3d','\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x75\x74\x6d\x2d\x73\x6f\x75\x72\x63\x65\x3d\x78\x69\x61\x6f\x6d\x69\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x38\x30\x31\x35\x39\x37\x39\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x32\x43\x36\x43\x43\x42\x36\x43\x31\x41\x43\x43\x32\x41\x34\x31\x30\x34\x43\x31\x32\x44\x36\x41\x38\x33\x41\x39\x43\x43\x31\x44\x33\x31\x36\x46\x36\x36\x32\x41\x34\x33\x33\x34\x41\x30\x32\x35\x38\x42\x46\x41\x43\x46\x35\x42\x41\x42\x43\x39\x32\x31\x41','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x72\x65\x77\x61\x72\x64\x5f\x61\x6d\x6f\x75\x6e\x74','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x36\x26\x69\x64\x3d\x33\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x35\x38\x34\x36\x34\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x33\x32\x36\x35\x34\x32\x30\x39\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x31\x34\x38\x35\x45\x32\x44\x41\x36\x32\x42\x34\x39\x44\x42\x31\x44\x36\x45\x31\x37\x36\x36\x37\x37\x41\x44\x41\x44\x45\x36\x39\x31\x45\x35\x39\x45\x33\x37\x35\x42\x38\x32\x32\x31\x36\x43\x41\x31\x35\x36\x30\x34\x44\x32\x39\x33\x32\x37\x37\x45\x39\x42\x41','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x64\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x2f\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\x41\x6e\x64\x72\x6f\x69\x64','\x35\x2e\x30\x33\x2e\x30\x33','\x6b\x75\x61\x69\x79\x69\x6e\x2f\x35\x2e\x30\x33\x2e\x30\x33\x20\x28\x61\x6e\x64\x72\x6f\x69\x64\x2f\x31\x31\x29\x20\x6f\x6b\x56\x65\x72\x73\x69\x6f\x6e\x2f\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\x69\x64\x3d','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x52\x65\x77\x61\x72\x64','\x63\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x52\x65\x77\x61\x72\x64\x4d\x6f\x64\x75\x6c\x65','\x74\x79\x70\x65\x3d\x63\x75\x73\x74\x6f\x6d\x69\x7a\x65\x26\x72\x65\x77\x61\x72\x64\x54\x79\x70\x65\x3d\x63\x6f\x69\x6e\x26\x62\x75\x73\x69\x6e\x65\x73\x73\x4e\x61\x6d\x65\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x39\x37\x33\x34\x38\x31\x39\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x37\x33\x43\x43\x46\x33\x43\x44\x39\x36\x43\x36\x36\x32\x42\x30\x33\x30\x44\x39\x37\x34\x42\x37\x44\x38\x39\x33\x31\x37\x30\x33\x41\x38\x32\x42\x39\x38\x31\x30\x33\x42\x33\x43\x41\x32\x30\x45\x42\x43\x37\x32\x35\x35\x43\x41\x33\x30\x34\x38\x43\x39\x37\x30','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x76\x69\x64\x65\x6f\x52\x65\x77\x61\x72\x64','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x70\x61\x73\x73\x70\x6f\x72\x74\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x56\x69\x64\x65\x6f\x4d\x75\x73\x69\x63\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f\x77\x65\x6c\x66\x61\x72\x65\x2f\x67\x65\x74\x4c\x69\x73\x74\x65\x6e\x4d\x75\x73\x69\x63\x52\x65\x77\x61\x72\x64','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x2f\x71\x6c\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x73\x68','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61\x3d','\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61\x3d\x22','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x45\x43\x42','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x6a\x73\x6a\x69\x49\x49\x66\x6b\x53\x75\x61\x56\x6d\x69\x7a\x2e\x63\x75\x6f\x6c\x6d\x58\x2e\x76\x36\x59\x65\x4c\x43\x6c\x4f\x3d\x3d'];function _0x46ec(_0x264ea9,_0x3eeffb){_0x264ea9=~~'0x'['concat'](_0x264ea9['slice'](0x0));var _0xff2a12=_0x4c59[_0x264ea9];return _0xff2a12;};(function(_0x1ac321,_0x3cb69d){var _0x9d5ae7=0x0;for(_0x3cb69d=_0x1ac321['shift'](_0x9d5ae7>>0x2);_0x3cb69d&&_0x3cb69d!==(_0x1ac321['pop'](_0x9d5ae7>>0x3)+'')['replace'](/[IIfkSuVzulXYeLClO=]/g,'');_0x9d5ae7++){_0x9d5ae7=_0x9d5ae7^0xcfe57;}}(_0x4c59,_0x46ec));const CryptoJS=require(_0x46ec('0'));const fs=require('\x66\x73');let app_soy_kyin_data=[],soy_kyin_UA='';!(async()=>{if($[_0x46ec('1')]()){if(!process[_0x46ec('2')][_0x46ec('3')]){console[_0x46ec('4')](_0x46ec('5'));return;}if(process[_0x46ec('2')][_0x46ec('3')]&&process[_0x46ec('2')][_0x46ec('3')][_0x46ec('6')]('\x0a')>-0x1){app_soy_kyin_data=process[_0x46ec('2')][_0x46ec('3')][_0x46ec('7')]('\x0a');}else if(process[_0x46ec('2')][_0x46ec('3')]&&process[_0x46ec('2')][_0x46ec('3')][_0x46ec('6')]('\x23')>-0x1){app_soy_kyin_data=process[_0x46ec('2')][_0x46ec('3')][_0x46ec('7')]('\x23');}else if(process[_0x46ec('2')][_0x46ec('3')]&&process[_0x46ec('2')][_0x46ec('3')][_0x46ec('6')]('\x40')>-0x1){app_soy_kyin_data=process[_0x46ec('2')][_0x46ec('3')][_0x46ec('7')]('\x40');}else{app_soy_kyin_data=process[_0x46ec('2')][_0x46ec('3')][_0x46ec('7')]();};}console[_0x46ec('4')](_0x46ec('8')+new Date(new Date()[_0x46ec('9')]()+new Date()[_0x46ec('a')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x46ec('b')]()+_0x46ec('c'));console[_0x46ec('4')](_0x46ec('d')+app_soy_kyin_data[_0x46ec('e')]+_0x46ec('f'));subTitle='';for(i=0x0;i<app_soy_kyin_data[_0x46ec('e')];i++){let _0x20878d=app_soy_kyin_data[i][_0x46ec('7')]('\x26');if(_0x20878d[_0x46ec('e')]!=0x3){console[_0x46ec('4')](_0x46ec('10'));}else{device=_0x20878d[0x0];access_token=_0x20878d[0x1];refresh_token=_0x20878d[0x2];}$[_0x46ec('11')]=i+0x1;console[_0x46ec('4')](_0x46ec('12')+$[_0x46ec('11')]+_0x46ec('13'));await implement();};if(notify){if(subTitle){await notify[_0x46ec('14')]($[_0x46ec('15')],subTitle);}}})()[_0x46ec('16')](_0x19c0d1=>$[_0x46ec('17')](_0x19c0d1))[_0x46ec('18')](()=>$[_0x46ec('19')]());async function implement(){await SendCoin();await GetWelfarePageTask();}function SendCoin(){let _0x8a522e=Post_request(_0x46ec('1a'),_0x46ec('1b'),0x1);return new Promise((_0x261c6c,_0x15333b)=>{$[_0x46ec('1c')](_0x8a522e,async(_0x164016,_0x2d4ebb,_0x3b550e)=>{try{if(_0x164016){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('1e'));subTitle+=_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('1e');}else{let _0x2cfe2b=JSON[_0x46ec('1f')](_0x3b550e);if(_0x2cfe2b[_0x46ec('20')]==0x0){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('21')+_0x2cfe2b[_0x46ec('22')][_0x46ec('23')]+_0x46ec('24'));}else if(_0x2cfe2b[_0x46ec('20')]==0x2715){await get_token();}else{console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('25')+_0x2cfe2b[_0x46ec('26')]);}}}catch(_0x5009e1){console[_0x46ec('4')](_0x5009e1,_0x2d4ebb);}finally{_0x261c6c();}});});}function get_token(){let _0xe06e42=Post_request(_0x46ec('27'),_0x46ec('28')+refresh_token+_0x46ec('29'),0x0);return new Promise((_0x443179,_0x1166e6)=>{$[_0x46ec('1c')](_0xe06e42,async(_0x4df8cf,_0x398e7a,_0x4b9f6a)=>{try{if(_0x4df8cf){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('2a'));subTitle+=_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('2a');}else{let _0x5112d2=JSON[_0x46ec('1f')](_0x4b9f6a);if(_0x5112d2[_0x46ec('20')]==0x0){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('2b'));access_token=_0x5112d2[_0x46ec('22')][_0x46ec('2c')];refresh_token=_0x5112d2[_0x46ec('22')][_0x46ec('2d')];await get_variable();await get_preservation();await implement();}else{console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('2e')+_0x5112d2[_0x46ec('26')]);}}}catch(_0x495756){console[_0x46ec('4')](_0x495756,_0x398e7a);}finally{_0x443179();}});});}function GetWelfarePageTask(){let _0x2467f4=Post_request_h5(_0x46ec('2f'),_0x46ec('30')+access_token+_0x46ec('31')+device+_0x46ec('32'));return new Promise((_0x3f4547,_0x30d037)=>{$[_0x46ec('1c')](_0x2467f4,async(_0x45fedc,_0x40a8db,_0x168d25)=>{try{if(_0x45fedc){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('33'));subTitle+=_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('33');}else{let _0x1920c8=JSON[_0x46ec('1f')](_0x168d25);if(_0x1920c8[_0x46ec('20')]==0x0){for(let _0x595efb of _0x1920c8[_0x46ec('22')][_0x46ec('34')]){if(_0x595efb[_0x46ec('35')]==_0x46ec('36')){if(_0x595efb[_0x46ec('37')]==0x1){await GetReward(_0x46ec('36'),_0x595efb[_0x46ec('38')]);await getRewardModule(_0x46ec('39'),_0x595efb[_0x46ec('38')]);}}if(_0x595efb[_0x46ec('35')]==_0x46ec('3a')){if(_0x595efb[_0x46ec('37')]==0x1){await GetReward(_0x46ec('3a'),_0x595efb[_0x46ec('38')]);await getRewardModule(_0x46ec('3b'),_0x595efb[_0x46ec('38')]);}}if(_0x595efb[_0x46ec('35')]==_0x46ec('3c')){if(_0x595efb[_0x46ec('37')]==0x1){await GetReward(_0x46ec('3c'),_0x595efb[_0x46ec('38')]);await getRewardModule(_0x46ec('3b'),_0x595efb[_0x46ec('38')]);}}if(_0x595efb[_0x46ec('35')]==_0x46ec('3d')){if(_0x595efb[_0x46ec('37')]==0x1){await GetReward(_0x46ec('3d'),_0x595efb[_0x46ec('38')]);await getRewardModule(_0x46ec('3b'),_0x595efb[_0x46ec('38')]);}}if(_0x595efb[_0x46ec('35')]==_0x46ec('3e')){for(let _0x5b7354 of _0x595efb[_0x46ec('3f')][_0x46ec('40')]){if(_0x5b7354[_0x46ec('41')]==0x1){await GetReward_music(_0x5b7354['\x69\x64'],_0x595efb[_0x46ec('38')]);await getRewardModule(_0x46ec('3b'),_0x595efb[_0x46ec('38')]);}}}if(_0x595efb[_0x46ec('35')]==_0x46ec('42')){if(_0x595efb[_0x46ec('3f')][_0x46ec('43')]<0x14){await callback(_0x46ec('42'),_0x46ec('44'),_0x595efb[_0x46ec('38')]);await getRewardModule(_0x46ec('45'),_0x595efb[_0x46ec('38')]);}else{for(let _0x360af9 of _0x595efb[_0x46ec('3f')][_0x46ec('40')]){if(_0x360af9[_0x46ec('41')]==0x1){await GetAdVideoBigReward(_0x46ec('46'),_0x595efb[_0x46ec('38')]);await getRewardModule(_0x46ec('45'),_0x595efb[_0x46ec('38')]);}}}}if(_0x595efb[_0x46ec('35')]==_0x46ec('47')){if(_0x595efb[_0x46ec('37')]==0x0){await callback(_0x46ec('48'),_0x46ec('49'),_0x595efb[_0x46ec('38')]);}else if(_0x595efb[_0x46ec('37')]==0x1){await callback(_0x46ec('4a'),_0x46ec('49'),_0x595efb[_0x46ec('38')]);await getRewardModule(_0x46ec('4b'),_0x595efb[_0x46ec('38')]);}}}}else{console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+_0x46ec('4c')+_0x1920c8[_0x46ec('26')]);}}}catch(_0x10a766){console[_0x46ec('4')](_0x10a766,_0x40a8db);}finally{_0x3f4547();}});});}function GetAdVideoBigReward(_0x3428f4,_0x372ce6){let _0x49b2e8=Post_request_h5(_0x46ec('4d'),_0x46ec('4e')+_0x3428f4+_0x46ec('4f')+access_token+_0x46ec('50')+device+_0x46ec('51'));return new Promise((_0x2d1382,_0x4458c8)=>{$[_0x46ec('1c')](_0x49b2e8,async(_0xa7d256,_0x17cea5,_0x47df98)=>{try{if(_0xa7d256){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x372ce6+_0x46ec('52'));subTitle+=_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x372ce6+_0x46ec('52');}else{let _0x3f81b8=JSON[_0x46ec('1f')](_0x47df98);if(_0x3f81b8[_0x46ec('20')]==0x0){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x372ce6+_0x46ec('53')+_0x3f81b8[_0x46ec('22')][_0x46ec('54')]+_0x46ec('24'));}else{console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x372ce6+_0x46ec('55')+_0x3f81b8[_0x46ec('26')]);}}}catch(_0x29bd06){console[_0x46ec('4')](_0x29bd06,_0x17cea5);}finally{_0x2d1382();}});});}function callback(_0x15c91b,_0x575a13,_0x3a49a4){let _0x12d901=_0x46ec('56')+_0x15c91b+_0x46ec('57')+_0x575a13+_0x46ec('58');let _0x10bebb={'\x75\x72\x6c':_0x46ec('59'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x46ec('5a'),'content-length':_0x12d901[_0x46ec('e')],'accept-encoding':_0x46ec('5b'),'user-agent':_0x46ec('5c'),'platform':_0x46ec('5d'),'client-v':_0x46ec('5e'),'device-id':device,'access-token':access_token,'user-agent':_0x46ec('5f')},'\x62\x6f\x64\x79':_0x12d901};return new Promise((_0x1515ea,_0x5bba72)=>{$[_0x46ec('1c')](_0x10bebb,async(_0x36d321,_0x27a620,_0x1ff92d)=>{try{if(_0x36d321){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x3a49a4+_0x46ec('52'));subTitle+=_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x3a49a4+_0x46ec('52');}else{let _0x47dd5a=JSON[_0x46ec('1f')](_0x1ff92d);if(_0x47dd5a[_0x46ec('20')]==0x0){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x3a49a4+_0x46ec('55')+_0x47dd5a[_0x46ec('26')]);}else{console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x3a49a4+_0x46ec('55')+_0x47dd5a[_0x46ec('26')]);}}}catch(_0x41c46c){console[_0x46ec('4')](_0x41c46c,_0x27a620);}finally{_0x1515ea();}});});}function GetReward_music(_0x4ae0d4,_0x5ea1da){let _0x3c0aa1=Post_request_m(_0x46ec('60')+_0x4ae0d4+_0x46ec('4f')+access_token+_0x46ec('50')+device+_0x46ec('51'));return new Promise((_0x5f5dad,_0x32b390)=>{$[_0x46ec('1c')](_0x3c0aa1,async(_0x26bab2,_0x4274da,_0x5fcd58)=>{try{if(_0x26bab2){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x5ea1da+_0x46ec('52'));subTitle+=_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x5ea1da+_0x46ec('52');}else{let _0x1ae133=JSON[_0x46ec('1f')](_0x5fcd58);if(_0x1ae133[_0x46ec('20')]==0x0){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x5ea1da+_0x46ec('53')+_0x1ae133[_0x46ec('22')][_0x46ec('54')]+_0x46ec('24'));}else{console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x5ea1da+_0x46ec('55')+_0x1ae133[_0x46ec('26')]);}}}catch(_0x259c89){console[_0x46ec('4')](_0x259c89,_0x4274da);}finally{_0x5f5dad();}});});}function GetReward(_0x2cb0c3,_0x1b43d3){let _0x391825=Post_request_h5(_0x46ec('61'),_0x46ec('4e')+_0x2cb0c3+_0x46ec('4f')+access_token+_0x46ec('50')+device+_0x46ec('51'));return new Promise((_0x3b0214,_0x37ac78)=>{$[_0x46ec('1c')](_0x391825,async(_0x247d99,_0x160ca3,_0x3581ab)=>{try{if(_0x247d99){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x1b43d3+_0x46ec('52'));subTitle+=_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x1b43d3+_0x46ec('52');}else{let _0x235a6b=JSON[_0x46ec('1f')](_0x3581ab);if(_0x235a6b[_0x46ec('20')]==0x0){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x1b43d3+_0x46ec('53')+_0x235a6b[_0x46ec('22')][_0x46ec('54')]+_0x46ec('24'));}else{console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x1b43d3+_0x46ec('55')+_0x235a6b[_0x46ec('26')]);}}}catch(_0x15f6cb){console[_0x46ec('4')](_0x15f6cb,_0x160ca3);}finally{_0x3b0214();}});});}function getRewardModule(_0x3f3dc2,_0x4d2609){let _0xdd851e=Post_request_h5(_0x46ec('62'),_0x46ec('63')+_0x3f3dc2+_0x46ec('4f')+access_token+_0x46ec('50')+device+_0x46ec('64'));return new Promise((_0x51638a,_0x1020a0)=>{$[_0x46ec('1c')](_0xdd851e,async(_0x1beae7,_0x35559d,_0x548d63)=>{try{if(_0x1beae7){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x4d2609+_0x46ec('65'));subTitle+=_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x4d2609+_0x46ec('65');}else{let _0x4f3195=JSON[_0x46ec('1f')](_0x548d63);if(_0x4f3195[_0x46ec('20')]==0x0){console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x4d2609+_0x46ec('66')+_0x4f3195[_0x46ec('22')][_0x46ec('67')]+_0x46ec('24'));}else{console[_0x46ec('4')](_0x46ec('1d')+$[_0x46ec('11')]+'\x20'+_0x4d2609+_0x46ec('68')+_0x4f3195[_0x46ec('26')]);}}}catch(_0x584d2d){console[_0x46ec('4')](_0x584d2d,_0x35559d);}finally{_0x51638a();}});});}function Post_request(_0x5ba256,_0x354c33,_0x5bfdbb){if(_0x5bfdbb==0x0){host=_0x46ec('69');}else{host=_0x46ec('6a');}return{'\x75\x72\x6c':''+host+_0x5ba256,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x46ec('5a'),'content-length':_0x354c33[_0x46ec('e')],'accept-encoding':_0x46ec('5b'),'user-agent':_0x46ec('5c'),'platform':_0x46ec('5d'),'client-v':_0x46ec('5e'),'device-id':device,'access-token':access_token,'user-agent':_0x46ec('5f')},'\x62\x6f\x64\x79':_0x354c33};};function Post_request_h5(_0x2cd553,_0x576c27){let _0x38976f=_0x46ec('6b')+_0x2cd553;return{'\x75\x72\x6c':_0x38976f,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x46ec('5a'),'content-length':_0x576c27[_0x46ec('e')],'accept-encoding':_0x46ec('5b'),'user-agent':_0x46ec('5c'),'platform':_0x46ec('5d'),'client-v':_0x46ec('5e'),'device-id':device,'access-token':access_token,'user-agent':_0x46ec('5f')},'\x62\x6f\x64\x79':_0x576c27};};function Post_request_m(_0x3cc2c7){return{'\x75\x72\x6c':_0x46ec('6c'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x46ec('5a'),'content-length':_0x3cc2c7[_0x46ec('e')],'accept-encoding':_0x46ec('5b'),'user-agent':_0x46ec('5c'),'platform':_0x46ec('5d'),'client-v':_0x46ec('5e'),'device-id':device,'access-token':access_token,'user-agent':_0x46ec('5f')},'\x62\x6f\x64\x79':_0x3cc2c7};};function get_variable(){let _0x5afe77=fs[_0x46ec('6d')](_0x46ec('6e'))[_0x46ec('6f')]();variable_left=_0x5afe77[_0x46ec('70')](0x0,_0x5afe77[_0x46ec('6')](_0x46ec('71')))+_0x46ec('72');let _0x48e337=_0x5afe77[_0x46ec('e')]-_0x5afe77[_0x46ec('6')](''+app_soy_kyin_data[i])-app_soy_kyin_data[i][_0x46ec('e')];variable_right=_0x5afe77[_0x46ec('70')](_0x5afe77[_0x46ec('e')]-_0x48e337,_0x5afe77[_0x46ec('e')]);}function get_preservation(){fs[_0x46ec('73')](_0x46ec('6e'),''+variable_left+device+'\x26'+access_token+'\x26'+refresh_token+variable_right,{'\x66\x6c\x61\x67':'\x77'},function(_0x3971f7){if(_0x3971f7){return console[_0x46ec('4')](_0x3971f7);}});}function AES_Encrypt(_0x4d03cd,_0x4a5483){let _0x3774f9=AES_DE[_0x46ec('74')][_0x46ec('75')](AES_DE[_0x46ec('76')][_0x46ec('77')][_0x46ec('1f')](_0x4d03cd),AES_DE[_0x46ec('76')][_0x46ec('77')][_0x46ec('1f')](_0x4a5483),{'\x6d\x6f\x64\x65':AES_DE[_0x46ec('78')][_0x46ec('79')],'\x70\x61\x64\x64\x69\x6e\x67':AES_DE[_0x46ec('7a')][_0x46ec('7b')]});return _0x3774f9[_0x46ec('6f')]();}function MD5_Encrypt(_0x1c0ffc){function _0x581902(_0x1c0ffc,_0x581902){return _0x1c0ffc<<_0x581902|_0x1c0ffc>>>0x20-_0x581902;}function _0x1b7422(_0x1c0ffc,_0x581902){var _0x1b7422,_0xef325b,_0xa704d,_0x405116,_0x4e4916;return _0xa704d=0x80000000&_0x1c0ffc,_0x405116=0x80000000&_0x581902,_0x1b7422=0x40000000&_0x1c0ffc,_0xef325b=0x40000000&_0x581902,_0x4e4916=(0x3fffffff&_0x1c0ffc)+(0x3fffffff&_0x581902),_0x1b7422&_0xef325b?0x80000000^_0x4e4916^_0xa704d^_0x405116:_0x1b7422|_0xef325b?0x40000000&_0x4e4916?0xc0000000^_0x4e4916^_0xa704d^_0x405116:0x40000000^_0x4e4916^_0xa704d^_0x405116:_0x4e4916^_0xa704d^_0x405116;}function _0x32d2c1(_0x1c0ffc,_0x581902,_0x1b7422){return _0x1c0ffc&_0x581902|~_0x1c0ffc&_0x1b7422;}function _0x8e2b73(_0x1c0ffc,_0x581902,_0x1b7422){return _0x1c0ffc&_0x1b7422|_0x581902&~_0x1b7422;}function _0x390185(_0x1c0ffc,_0x581902,_0x1b7422){return _0x1c0ffc^_0x581902^_0x1b7422;}function _0x110e32(_0x1c0ffc,_0x581902,_0x1b7422){return _0x581902^(_0x1c0ffc|~_0x1b7422);}function _0x21fc8d(_0x1c0ffc,_0x8e2b73,_0x390185,_0x110e32,_0x21fc8d,_0xa90198,_0x182730){return _0x1c0ffc=_0x1b7422(_0x1c0ffc,_0x1b7422(_0x1b7422(_0x32d2c1(_0x8e2b73,_0x390185,_0x110e32),_0x21fc8d),_0x182730)),_0x1b7422(_0x581902(_0x1c0ffc,_0xa90198),_0x8e2b73);}function _0x621e78(_0x1c0ffc,_0x32d2c1,_0x390185,_0x110e32,_0x21fc8d,_0x621e78,_0x3c7016){return _0x1c0ffc=_0x1b7422(_0x1c0ffc,_0x1b7422(_0x1b7422(_0x8e2b73(_0x32d2c1,_0x390185,_0x110e32),_0x21fc8d),_0x3c7016)),_0x1b7422(_0x581902(_0x1c0ffc,_0x621e78),_0x32d2c1);}function _0x3fe278(_0x1c0ffc,_0x32d2c1,_0x8e2b73,_0x110e32,_0x21fc8d,_0x621e78,_0x3fe278){return _0x1c0ffc=_0x1b7422(_0x1c0ffc,_0x1b7422(_0x1b7422(_0x390185(_0x32d2c1,_0x8e2b73,_0x110e32),_0x21fc8d),_0x3fe278)),_0x1b7422(_0x581902(_0x1c0ffc,_0x621e78),_0x32d2c1);}function _0x4213b3(_0x1c0ffc,_0x32d2c1,_0x8e2b73,_0x390185,_0x21fc8d,_0x621e78,_0x3fe278){return _0x1c0ffc=_0x1b7422(_0x1c0ffc,_0x1b7422(_0x1b7422(_0x110e32(_0x32d2c1,_0x8e2b73,_0x390185),_0x21fc8d),_0x3fe278)),_0x1b7422(_0x581902(_0x1c0ffc,_0x621e78),_0x32d2c1);}function _0x5852d0(_0x1c0ffc){for(var _0x581902,_0x1b7422=_0x1c0ffc[_0x46ec('e')],_0x32d2c1=_0x1b7422+0x8,_0x8e2b73=(_0x32d2c1-_0x32d2c1%0x40)/0x40,_0x390185=0x10*(_0x8e2b73+0x1),_0x110e32=new Array(_0x390185-0x1),_0x21fc8d=0x0,_0x621e78=0x0;_0x1b7422>_0x621e78;)_0x581902=(_0x621e78-_0x621e78%0x4)/0x4,_0x21fc8d=_0x621e78%0x4*0x8,_0x110e32[_0x581902]=_0x110e32[_0x581902]|_0x1c0ffc[_0x46ec('7c')](_0x621e78)<<_0x21fc8d,_0x621e78++;return _0x581902=(_0x621e78-_0x621e78%0x4)/0x4,_0x21fc8d=_0x621e78%0x4*0x8,_0x110e32[_0x581902]=_0x110e32[_0x581902]|0x80<<_0x21fc8d,_0x110e32[_0x390185-0x2]=_0x1b7422<<0x3,_0x110e32[_0x390185-0x1]=_0x1b7422>>>0x1d,_0x110e32;}function _0x17df31(_0x1c0ffc){var _0x581902,_0x1b7422,_0x32d2c1='',_0x8e2b73='';for(_0x1b7422=0x0;0x3>=_0x1b7422;_0x1b7422++)_0x581902=_0x1c0ffc>>>0x8*_0x1b7422&0xff,_0x8e2b73='\x30'+_0x581902[_0x46ec('6f')](0x10),_0x32d2c1+=_0x8e2b73[_0x46ec('7d')](_0x8e2b73[_0x46ec('e')]-0x2,0x2);return _0x32d2c1;}function _0x140510(_0x1c0ffc){_0x1c0ffc=_0x1c0ffc[_0x46ec('7e')](/\r\n/g,'\x0a');for(var _0x581902='',_0x1b7422=0x0;_0x1b7422<_0x1c0ffc[_0x46ec('e')];_0x1b7422++){var _0x32d2c1=_0x1c0ffc[_0x46ec('7c')](_0x1b7422);0x80>_0x32d2c1?_0x581902+=String[_0x46ec('7f')](_0x32d2c1):_0x32d2c1>0x7f&&0x800>_0x32d2c1?(_0x581902+=String[_0x46ec('7f')](_0x32d2c1>>0x6|0xc0),_0x581902+=String[_0x46ec('7f')](0x3f&_0x32d2c1|0x80)):(_0x581902+=String[_0x46ec('7f')](_0x32d2c1>>0xc|0xe0),_0x581902+=String[_0x46ec('7f')](_0x32d2c1>>0x6&0x3f|0x80),_0x581902+=String[_0x46ec('7f')](0x3f&_0x32d2c1|0x80));}return _0x581902;}var _0xd98c07,_0x441bdf,_0x22ac40,_0x38ae83,_0x5b6aab,_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878=[],_0x398fae=0x7,_0x3f8010=0xc,_0xfa4fd5=0x11,_0x2c10e0=0x16,_0x845f4a=0x5,_0x29202d=0x9,_0x388e49=0xe,_0x3635c1=0x14,_0xd938fd=0x4,_0x52f713=0xb,_0x37c8e6=0x10,_0x5a7b03=0x17,_0x41e475=0x6,_0x132b1b=0xa,_0xb9b1c7=0xf,_0x69e664=0x15;for(_0x1c0ffc=_0x140510(_0x1c0ffc),_0x4ce878=_0x5852d0(_0x1c0ffc),_0x350cbd=0x67452301,_0x500c0d=0xefcdab89,_0x441f1c=0x98badcfe,_0x3a80a5=0x10325476,_0xd98c07=0x0;_0xd98c07<_0x4ce878[_0x46ec('e')];_0xd98c07+=0x10)_0x441bdf=_0x350cbd,_0x22ac40=_0x500c0d,_0x38ae83=_0x441f1c,_0x5b6aab=_0x3a80a5,_0x350cbd=_0x21fc8d(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x0],_0x398fae,0xd76aa478),_0x3a80a5=_0x21fc8d(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0x1],_0x3f8010,0xe8c7b756),_0x441f1c=_0x21fc8d(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0x2],_0xfa4fd5,0x242070db),_0x500c0d=_0x21fc8d(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0x3],_0x2c10e0,0xc1bdceee),_0x350cbd=_0x21fc8d(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x4],_0x398fae,0xf57c0faf),_0x3a80a5=_0x21fc8d(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0x5],_0x3f8010,0x4787c62a),_0x441f1c=_0x21fc8d(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0x6],_0xfa4fd5,0xa8304613),_0x500c0d=_0x21fc8d(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0x7],_0x2c10e0,0xfd469501),_0x350cbd=_0x21fc8d(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x8],_0x398fae,0x698098d8),_0x3a80a5=_0x21fc8d(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0x9],_0x3f8010,0x8b44f7af),_0x441f1c=_0x21fc8d(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0xa],_0xfa4fd5,0xffff5bb1),_0x500c0d=_0x21fc8d(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0xb],_0x2c10e0,0x895cd7be),_0x350cbd=_0x21fc8d(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0xc],_0x398fae,0x6b901122),_0x3a80a5=_0x21fc8d(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0xd],_0x3f8010,0xfd987193),_0x441f1c=_0x21fc8d(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0xe],_0xfa4fd5,0xa679438e),_0x500c0d=_0x21fc8d(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0xf],_0x2c10e0,0x49b40821),_0x350cbd=_0x621e78(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x1],_0x845f4a,0xf61e2562),_0x3a80a5=_0x621e78(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0x6],_0x29202d,0xc040b340),_0x441f1c=_0x621e78(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0xb],_0x388e49,0x265e5a51),_0x500c0d=_0x621e78(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0x0],_0x3635c1,0xe9b6c7aa),_0x350cbd=_0x621e78(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x5],_0x845f4a,0xd62f105d),_0x3a80a5=_0x621e78(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0xa],_0x29202d,0x2441453),_0x441f1c=_0x621e78(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0xf],_0x388e49,0xd8a1e681),_0x500c0d=_0x621e78(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0x4],_0x3635c1,0xe7d3fbc8),_0x350cbd=_0x621e78(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x9],_0x845f4a,0x21e1cde6),_0x3a80a5=_0x621e78(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0xe],_0x29202d,0xc33707d6),_0x441f1c=_0x621e78(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0x3],_0x388e49,0xf4d50d87),_0x500c0d=_0x621e78(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0x8],_0x3635c1,0x455a14ed),_0x350cbd=_0x621e78(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0xd],_0x845f4a,0xa9e3e905),_0x3a80a5=_0x621e78(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0x2],_0x29202d,0xfcefa3f8),_0x441f1c=_0x621e78(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0x7],_0x388e49,0x676f02d9),_0x500c0d=_0x621e78(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0xc],_0x3635c1,0x8d2a4c8a),_0x350cbd=_0x3fe278(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x5],_0xd938fd,0xfffa3942),_0x3a80a5=_0x3fe278(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0x8],_0x52f713,0x8771f681),_0x441f1c=_0x3fe278(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0xb],_0x37c8e6,0x6d9d6122),_0x500c0d=_0x3fe278(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0xe],_0x5a7b03,0xfde5380c),_0x350cbd=_0x3fe278(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x1],_0xd938fd,0xa4beea44),_0x3a80a5=_0x3fe278(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0x4],_0x52f713,0x4bdecfa9),_0x441f1c=_0x3fe278(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0x7],_0x37c8e6,0xf6bb4b60),_0x500c0d=_0x3fe278(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0xa],_0x5a7b03,0xbebfbc70),_0x350cbd=_0x3fe278(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0xd],_0xd938fd,0x289b7ec6),_0x3a80a5=_0x3fe278(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0x0],_0x52f713,0xeaa127fa),_0x441f1c=_0x3fe278(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0x3],_0x37c8e6,0xd4ef3085),_0x500c0d=_0x3fe278(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0x6],_0x5a7b03,0x4881d05),_0x350cbd=_0x3fe278(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x9],_0xd938fd,0xd9d4d039),_0x3a80a5=_0x3fe278(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0xc],_0x52f713,0xe6db99e5),_0x441f1c=_0x3fe278(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0xf],_0x37c8e6,0x1fa27cf8),_0x500c0d=_0x3fe278(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0x2],_0x5a7b03,0xc4ac5665),_0x350cbd=_0x4213b3(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x0],_0x41e475,0xf4292244),_0x3a80a5=_0x4213b3(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0x7],_0x132b1b,0x432aff97),_0x441f1c=_0x4213b3(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0xe],_0xb9b1c7,0xab9423a7),_0x500c0d=_0x4213b3(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0x5],_0x69e664,0xfc93a039),_0x350cbd=_0x4213b3(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0xc],_0x41e475,0x655b59c3),_0x3a80a5=_0x4213b3(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0x3],_0x132b1b,0x8f0ccc92),_0x441f1c=_0x4213b3(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0xa],_0xb9b1c7,0xffeff47d),_0x500c0d=_0x4213b3(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0x1],_0x69e664,0x85845dd1),_0x350cbd=_0x4213b3(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x8],_0x41e475,0x6fa87e4f),_0x3a80a5=_0x4213b3(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0xf],_0x132b1b,0xfe2ce6e0),_0x441f1c=_0x4213b3(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0x6],_0xb9b1c7,0xa3014314),_0x500c0d=_0x4213b3(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0xd],_0x69e664,0x4e0811a1),_0x350cbd=_0x4213b3(_0x350cbd,_0x500c0d,_0x441f1c,_0x3a80a5,_0x4ce878[_0xd98c07+0x4],_0x41e475,0xf7537e82),_0x3a80a5=_0x4213b3(_0x3a80a5,_0x350cbd,_0x500c0d,_0x441f1c,_0x4ce878[_0xd98c07+0xb],_0x132b1b,0xbd3af235),_0x441f1c=_0x4213b3(_0x441f1c,_0x3a80a5,_0x350cbd,_0x500c0d,_0x4ce878[_0xd98c07+0x2],_0xb9b1c7,0x2ad7d2bb),_0x500c0d=_0x4213b3(_0x500c0d,_0x441f1c,_0x3a80a5,_0x350cbd,_0x4ce878[_0xd98c07+0x9],_0x69e664,0xeb86d391),_0x350cbd=_0x1b7422(_0x350cbd,_0x441bdf),_0x500c0d=_0x1b7422(_0x500c0d,_0x22ac40),_0x441f1c=_0x1b7422(_0x441f1c,_0x38ae83),_0x3a80a5=_0x1b7422(_0x3a80a5,_0x5b6aab);var _0x147d9b=_0x17df31(_0x350cbd)+_0x17df31(_0x500c0d)+_0x17df31(_0x441f1c)+_0x17df31(_0x3a80a5);return _0x147d9b[_0x46ec('80')]();};_0xodx='jsjiami.com.v6';


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
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
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
        i = i ? i.replace(/\n/g, "").trim() : i;
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
      }).catch(t => this.logErr(t))
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
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
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
      })), $task.fetch(t).then(t => {
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
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
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
      })), $task.fetch(t).then(t => {
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
        this.got.post(s, i).then(t => {
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
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
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
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}