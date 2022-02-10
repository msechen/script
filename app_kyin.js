/*

安卓软件名称:快音

项目注册地址:https://landing.kaixinyf.cn/e30aze?invite_code=2SUAXR&_timestamp=1644398479&sign=15c82c2822432391d8402109a0762609&app_name=kuaiyin&device_id=1148692d61103e7c&client_v=5.03.03&platform=Android&platform_brand=blackshark&utm_source=xiaomi&um_from_appkey=5d91d0ed570df3d8ed000cb9&share_from=weixin&share_position=wuren

邀请码:2SUAXR (不可以话问其他大佬试试)

声明：会有黑号还是黑设备的状态，注册后登录上去自行提现0.3元，如果能提现到账就可以跑脚本，不能你跑了也没啥用，到最后也提现不了

必要变量:

变量名 soy_kyin_data
变量值示例 export soy_kyin_data="device-id值&access-token值&refresh_token值"

寻找变量方法:退出登录,开抓包,点微信登录成功后找 https://api.kaixinyf.cn/passport/UnionLogin 链接

注释: device-id值在请求头里面找,access-token值和refresh_token值在登录成功后 响应 里面找

注意:变量需要在 【配置文件】 里面填，填之前请备份该文件原有的文件内容
注意,变量需要在 【配置文件】 里面填，填之前请备份该文件原有的文件内容
注意,变量需要在 【配置文件】 里面填，填之前请备份该文件原有的文件内容

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


var _0xod7='jsjiami.com.v6',_0xod7_=['_0xod7'],_0x5e8a=[_0xod7,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x53\x65\x6e\x64\x43\x6f\x69\x6e','\x6d\x6f\x64\x65\x3d\x6d\x75\x73\x69\x63\x26\x6c\x65\x76\x65\x6c\x3d\x34\x37\x26\x75\x73\x65\x64\x5f\x66\x61\x73\x74\x5f\x74\x69\x6d\x65\x3d\x32\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x39\x34\x35\x30\x38\x37\x34\x31\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x37\x37\x41\x39\x32\x32\x45\x34\x41\x31\x46\x35\x37\x33\x34\x39\x39\x43\x36\x41\x36\x34\x35\x36\x45\x36\x38\x39\x42\x38\x32\x42\x41\x41\x30\x41\x44\x36\x41\x46\x35\x42\x45\x32\x33\x43\x32\x46\x38\x35\x30\x46\x41\x41\x44\x43\x34\x39\x39\x44\x38\x39\x35\x32','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x63\x6f\x69\x6e','\x20\u91d1\u5e01','\x20\u5237\u65f6\u957f\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x67\x65\x74\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x34\x31\x39\x37\x35\x33\x33\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x45\x34\x31\x30\x39\x45\x45\x32\x34\x43\x35\x33\x41\x31\x46\x32\x45\x33\x38\x42\x36\x42\x32\x41\x41\x45\x36\x44\x46\x34\x38\x41\x44\x32\x43\x42\x43\x35\x41\x41\x42\x46\x38\x34\x37\x35\x36\x32\x30\x43\x39\x36\x44\x44\x35\x33\x31\x39\x31\x30\x46\x43\x38','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u6210\u529f\x2e\x2e\x2e','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x57\x65\x6c\x66\x61\x72\x65\x50\x61\x67\x65\x54\x61\x73\x6b','\x70\x61\x67\x65\x3d\x72\x65\x64\x5f\x70\x61\x63\x6b\x61\x67\x65\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x36\x31\x36\x39\x32\x37\x30\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x32\x34\x30\x37\x36\x33\x44\x41\x35\x33\x36\x43\x30\x44\x33\x46\x38\x38\x33\x34\x34\x41\x42\x45\x35\x32\x44\x37\x45\x43\x38\x42\x36\x37\x30\x39\x30\x34\x39\x41\x32\x33\x41\x37\x33\x36\x35\x32\x38\x44\x42\x44\x35\x44\x37\x44\x43\x36\x30\x43\x46\x42\x42\x31','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x64\x61\x69\x6c\x79\x54\x61\x73\x6b','\x74\x61\x73\x6b\x5f\x74\x79\x70\x65','\x63\x6f\x6e\x74\x69\x6e\x75\x65\x5f\x6c\x6f\x67\x5f\x69\x6e\x5f\x33','\x70\x72\x6f\x67\x72\x65\x73\x73\x5f\x73\x74\x61\x74\x75\x73','\x74\x69\x74\x6c\x65','\x72\x65\x64\x70\x61\x63\x6b\x61\x67\x65\x4c\x6f\x67\x6f\x6e','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x6f\x6e\x65','\x66\x75\x6c\x69\x4d\x75\x73\x69\x63\x4f\x76\x65\x72','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x77\x6f','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x68\x72\x65\x65','\x6c\x69\x73\x74\x65\x6e\x5f\x6d\x75\x73\x69\x63\x5f\x72\x65\x77\x61\x72\x64','\x73\x70\x65\x63\x69\x61\x6c','\x73\x70\x65\x63\x69\x61\x6c\x5f\x70\x72\x6f\x67\x72\x65\x73\x73','\x73\x74\x61\x74\x75\x73','\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x76\x69\x64\x65\x6f\x5f\x6e\x6f\x77','\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31','\x77\x65\x6c\x66\x61\x72\x65\x54\x61\x73\x6b\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67','\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x77\x61\x74\x63\x68\x5f\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x33','\x77\x65\x6c\x66\x61\x72\x65\x5f\x77\x61\x74\x63\x68\x5f\x76\x69\x64\x65\x6f','\x66\x75\x6c\x69\x57\x61\x74\x63\x68\x41\x64\x56\x69\x64\x65\x6f\x4f\x76\x65\x72','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67\x52\x65\x77\x61\x72\x64','\x74\x61\x73\x6b\x54\x79\x70\x65\x3d','\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x75\x74\x6d\x2d\x73\x6f\x75\x72\x63\x65\x3d\x78\x69\x61\x6f\x6d\x69\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x38\x30\x31\x35\x39\x37\x39\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x32\x43\x36\x43\x43\x42\x36\x43\x31\x41\x43\x43\x32\x41\x34\x31\x30\x34\x43\x31\x32\x44\x36\x41\x38\x33\x41\x39\x43\x43\x31\x44\x33\x31\x36\x46\x36\x36\x32\x41\x34\x33\x33\x34\x41\x30\x32\x35\x38\x42\x46\x41\x43\x46\x35\x42\x41\x42\x43\x39\x32\x31\x41','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x72\x65\x77\x61\x72\x64\x5f\x61\x6d\x6f\x75\x6e\x74','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x36\x26\x69\x64\x3d\x39\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41','\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x39\x32\x36\x30\x31\x36\x36\x39\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x37\x39\x42\x33\x36\x41\x43\x32\x41\x32\x32\x30\x46\x39\x38\x46\x33\x42\x42\x44\x33\x39\x39\x42\x41\x38\x33\x34\x44\x32\x41\x35\x36\x46\x37\x36\x35\x33\x31\x44\x44\x42\x39\x43\x31\x36\x46\x39\x38\x44\x35\x41\x36\x41\x30\x37\x37\x34\x43\x38\x46\x44\x37\x44','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x64\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x2f\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\x41\x6e\x64\x72\x6f\x69\x64','\x35\x2e\x30\x33\x2e\x30\x33','\x6b\x75\x61\x69\x79\x69\x6e\x2f\x35\x2e\x30\x33\x2e\x30\x33\x20\x28\x61\x6e\x64\x72\x6f\x69\x64\x2f\x31\x31\x29\x20\x6f\x6b\x56\x65\x72\x73\x69\x6f\x6e\x2f\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x4d\x79\x57\x65\x6c\x66\x61\x72\x65','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x39\x32\x36\x30\x36\x30\x34\x30\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x42\x42\x31\x30\x36\x35\x38\x34\x44\x33\x43\x42\x36\x32\x43\x46\x43\x38\x45\x37\x30\x41\x37\x32\x46\x31\x44\x45\x36\x31\x31\x39\x42\x43\x42\x41\x43\x36\x42\x34\x34\x37\x35\x37\x46\x34\x45\x36\x35\x35\x35\x30\x42\x38\x35\x31\x34\x35\x30\x35\x37\x42\x39\x38','\x20\u798f\u5229\u4efb\u52a1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x69\x70\x5f\x69\x6e\x66\x6f','\x75\x69\x64','\x20\u798f\u5229\u4efb\u52a1\u3011\x3a\x20','\x69\x64\x3d','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x52\x65\x77\x61\x72\x64','\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\u5956\u52b1\u3011\x3a\x20','\x63\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x52\x65\x77\x61\x72\x64\x4d\x6f\x64\x75\x6c\x65','\x74\x79\x70\x65\x3d\x63\x75\x73\x74\x6f\x6d\x69\x7a\x65\x26\x72\x65\x77\x61\x72\x64\x54\x79\x70\x65\x3d\x63\x6f\x69\x6e\x26\x62\x75\x73\x69\x6e\x65\x73\x73\x4e\x61\x6d\x65\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x39\x37\x33\x34\x38\x31\x39\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x37\x33\x43\x43\x46\x33\x43\x44\x39\x36\x43\x36\x36\x32\x42\x30\x33\x30\x44\x39\x37\x34\x42\x37\x44\x38\x39\x33\x31\x37\x30\x33\x41\x38\x32\x42\x39\x38\x31\x30\x33\x42\x33\x43\x41\x32\x30\x45\x42\x43\x37\x32\x35\x35\x43\x41\x33\x30\x34\x38\x43\x39\x37\x30','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x76\x69\x64\x65\x6f\x52\x65\x77\x61\x72\x64','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20','\x72\x65\x70\x6c\x61\x63\x65','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x2f\x71\x6c\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x73\x68','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x70\x61\x73\x73\x70\x6f\x72\x74\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x56\x69\x64\x65\x6f\x4d\x75\x73\x69\x63\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f\x77\x65\x6c\x66\x61\x72\x65\x2f\x67\x65\x74\x4c\x69\x73\x74\x65\x6e\x4d\x75\x73\x69\x63\x52\x65\x77\x61\x72\x64','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x2f\x71\x6c\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x62\x61\x63\x6b\x75\x70\x2e\x73\x68','\x75\x74\x66\x38','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61\x3d','\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61\x3d\x22','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x45\x43\x42','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x73\x75\x62\x73\x74\x72','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x79\x6a\x73\x6a\x65\x69\x78\x61\x57\x6d\x68\x69\x6b\x2e\x63\x6f\x6d\x4f\x2e\x76\x54\x36\x66\x50\x46\x54\x7a\x57\x50\x6b\x62\x57\x3d\x3d'];function _0x4c64(_0x119b4e,_0xeac865){_0x119b4e=~~'0x'['concat'](_0x119b4e['slice'](0x0));var _0x57ffe4=_0x5e8a[_0x119b4e];return _0x57ffe4;};(function(_0x47de06,_0x3e57c5){var _0x3a0941=0x0;for(_0x3e57c5=_0x47de06['shift'](_0x3a0941>>0x2);_0x3e57c5&&_0x3e57c5!==(_0x47de06['pop'](_0x3a0941>>0x3)+'')['replace'](/[yexWhkOTfPFTzWPkbW=]/g,'');_0x3a0941++){_0x3a0941=_0x3a0941^0xd0058;}}(_0x5e8a,_0x4c64));const CryptoJS=require(_0x4c64('0'));const fs=require('\x66\x73');let app_soy_kyin_data=[],soy_kyin_UA='',preservation='';!(async()=>{if($[_0x4c64('1')]()){if(!process[_0x4c64('2')][_0x4c64('3')]){console[_0x4c64('4')](_0x4c64('5'));return;}if(process[_0x4c64('2')][_0x4c64('3')]&&process[_0x4c64('2')][_0x4c64('3')][_0x4c64('6')]('\x0a')>-0x1){app_soy_kyin_data=process[_0x4c64('2')][_0x4c64('3')][_0x4c64('7')]('\x0a');}else if(process[_0x4c64('2')][_0x4c64('3')]&&process[_0x4c64('2')][_0x4c64('3')][_0x4c64('6')]('\x23')>-0x1){app_soy_kyin_data=process[_0x4c64('2')][_0x4c64('3')][_0x4c64('7')]('\x23');}else if(process[_0x4c64('2')][_0x4c64('3')]&&process[_0x4c64('2')][_0x4c64('3')][_0x4c64('6')]('\x40')>-0x1){app_soy_kyin_data=process[_0x4c64('2')][_0x4c64('3')][_0x4c64('7')]('\x40');}else{app_soy_kyin_data=process[_0x4c64('2')][_0x4c64('3')][_0x4c64('7')]();};}console[_0x4c64('4')](_0x4c64('8')+new Date(new Date()[_0x4c64('9')]()+new Date()[_0x4c64('a')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x4c64('b')]()+_0x4c64('c'));console[_0x4c64('4')](_0x4c64('d')+app_soy_kyin_data[_0x4c64('e')]+_0x4c64('f'));subTitle='';for(i=0x0;i<app_soy_kyin_data[_0x4c64('e')];i++){let _0x4a3586=app_soy_kyin_data[i][_0x4c64('7')]('\x26');if(_0x4a3586[_0x4c64('e')]!=0x3){console[_0x4c64('4')](_0x4c64('10'));}else{current=app_soy_kyin_data[i];whole_whole=process[_0x4c64('2')][_0x4c64('3')];device=_0x4a3586[0x0];access_token=_0x4a3586[0x1];refresh_token=_0x4a3586[0x2];}$[_0x4c64('11')]=i+0x1;console[_0x4c64('4')](_0x4c64('12')+$[_0x4c64('11')]+_0x4c64('13'));await implement();};if(notify){if(subTitle){await notify[_0x4c64('14')]($[_0x4c64('15')],subTitle);}}})()[_0x4c64('16')](_0x51543f=>$[_0x4c64('17')](_0x51543f))[_0x4c64('18')](()=>$[_0x4c64('19')]());async function implement(){await MyWelfare();await SendCoin();await GetWelfarePageTask();}function SendCoin(){let _0x3af59b=Post_request(_0x4c64('1a'),_0x4c64('1b'),0x1);return new Promise((_0x21f4a4,_0x3a5ab8)=>{$[_0x4c64('1c')](_0x3af59b,async(_0x1fd63f,_0x580311,_0x12b13f)=>{try{if(_0x1fd63f){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('1e'));subTitle+=_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('1e');}else{let _0x16162a=JSON[_0x4c64('1f')](_0x12b13f);if(_0x16162a[_0x4c64('20')]==0x0){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('21')+_0x16162a[_0x4c64('22')][_0x4c64('23')]+_0x4c64('24'));}else if(_0x16162a[_0x4c64('20')]==0x2715){await get_token();}else{console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('25')+_0x16162a[_0x4c64('26')]);}}}catch(_0x447720){console[_0x4c64('4')](_0x447720,_0x580311);}finally{_0x21f4a4();}});});}function get_token(){let _0x39de72=Post_request(_0x4c64('27'),_0x4c64('28')+refresh_token+_0x4c64('29'),0x0);return new Promise((_0x5ceb49,_0x274920)=>{$[_0x4c64('1c')](_0x39de72,async(_0xab8b44,_0x26c0f4,_0x18db76)=>{try{if(_0xab8b44){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('2a'));subTitle+=_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('2a');}else{let _0x34a5b9=JSON[_0x4c64('1f')](_0x18db76);if(_0x34a5b9[_0x4c64('20')]==0x0){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('2b'));access_token=_0x34a5b9[_0x4c64('22')][_0x4c64('2c')];refresh_token=_0x34a5b9[_0x4c64('22')][_0x4c64('2d')];await get_preservation();await implement();}else{console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('2e')+_0x34a5b9[_0x4c64('26')]);}}}catch(_0x2a761f){console[_0x4c64('4')](_0x2a761f,_0x26c0f4);}finally{_0x5ceb49();}});});}function GetWelfarePageTask(){let _0x1efecf=Post_request_h5(_0x4c64('2f'),_0x4c64('30')+access_token+_0x4c64('31')+device+_0x4c64('32'));return new Promise((_0x56f73a,_0x1c6025)=>{$[_0x4c64('1c')](_0x1efecf,async(_0x1e20d5,_0xac8139,_0x2f71f5)=>{try{if(_0x1e20d5){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('33'));subTitle+=_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('33');}else{let _0x232e70=JSON[_0x4c64('1f')](_0x2f71f5);if(_0x232e70[_0x4c64('20')]==0x0){for(let _0x587654 of _0x232e70[_0x4c64('22')][_0x4c64('34')]){if(_0x587654[_0x4c64('35')]==_0x4c64('36')){if(_0x587654[_0x4c64('37')]==0x1){await GetReward(_0x4c64('36'),_0x587654[_0x4c64('38')]);await getRewardModule(_0x4c64('39'),_0x587654[_0x4c64('38')]);}}if(_0x587654[_0x4c64('35')]==_0x4c64('3a')){if(_0x587654[_0x4c64('37')]==0x1){await GetReward(_0x4c64('3a'),_0x587654[_0x4c64('38')]);await getRewardModule(_0x4c64('3b'),_0x587654[_0x4c64('38')]);}}if(_0x587654[_0x4c64('35')]==_0x4c64('3c')){if(_0x587654[_0x4c64('37')]==0x1){await GetReward(_0x4c64('3c'),_0x587654[_0x4c64('38')]);await getRewardModule(_0x4c64('3b'),_0x587654[_0x4c64('38')]);}}if(_0x587654[_0x4c64('35')]==_0x4c64('3d')){if(_0x587654[_0x4c64('37')]==0x1){await GetReward(_0x4c64('3d'),_0x587654[_0x4c64('38')]);await getRewardModule(_0x4c64('3b'),_0x587654[_0x4c64('38')]);}}if(_0x587654[_0x4c64('35')]==_0x4c64('3e')){for(let _0x4baf0a of _0x587654[_0x4c64('3f')][_0x4c64('40')]){if(_0x4baf0a[_0x4c64('41')]==0x1){await GetReward_music(_0x4baf0a['\x69\x64'],_0x587654[_0x4c64('38')]);await getRewardModule(_0x4c64('3b'),_0x587654[_0x4c64('38')]);}}}if(_0x587654[_0x4c64('35')]==_0x4c64('42')){if(_0x587654[_0x4c64('3f')][_0x4c64('43')]<0x14){await callback(_0x4c64('42'),_0x4c64('44'),0x7e6,_0x587654[_0x4c64('38')]);await getRewardModule(_0x4c64('45'),_0x587654[_0x4c64('38')]);}else{for(let _0xf31e39 of _0x587654[_0x4c64('3f')][_0x4c64('40')]){if(_0xf31e39[_0x4c64('41')]==0x1){await GetAdVideoBigReward(_0x4c64('46'),_0x587654[_0x4c64('38')]);await getRewardModule(_0x4c64('45'),_0x587654[_0x4c64('38')]);}}}}if(_0x587654[_0x4c64('35')]==_0x4c64('47')){if(_0x587654[_0x4c64('37')]==0x0){await callback(_0x4c64('48'),_0x4c64('44'),0x7e6,_0x587654[_0x4c64('38')]);}else if(_0x587654[_0x4c64('37')]==0x1){await GetReward(_0x4c64('47'),_0x587654[_0x4c64('38')]);await getRewardModule(_0x4c64('49'),_0x587654[_0x4c64('38')]);}}}}else{console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('4a')+_0x232e70[_0x4c64('26')]);}}}catch(_0x1971d5){console[_0x4c64('4')](_0x1971d5,_0xac8139);}finally{_0x56f73a();}});});}function GetAdVideoBigReward(_0x278619,_0x139e1){let _0x1eb219=Post_request_h5(_0x4c64('4b'),_0x4c64('4c')+_0x278619+_0x4c64('4d')+access_token+_0x4c64('4e')+device+_0x4c64('4f'));return new Promise((_0x8000c6,_0x350748)=>{$[_0x4c64('1c')](_0x1eb219,async(_0x1ad26d,_0x257a72,_0x13b5a4)=>{try{if(_0x1ad26d){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x139e1+_0x4c64('50'));subTitle+=_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x139e1+_0x4c64('50');}else{let _0x167fb2=JSON[_0x4c64('1f')](_0x13b5a4);if(_0x167fb2[_0x4c64('20')]==0x0){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x139e1+_0x4c64('51')+_0x167fb2[_0x4c64('22')][_0x4c64('52')]+_0x4c64('24'));}else{console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x139e1+_0x4c64('53')+_0x167fb2[_0x4c64('26')]);}}}catch(_0x396765){console[_0x4c64('4')](_0x396765,_0x257a72);}finally{_0x8000c6();}});});}function callback(_0xcd0ee4,_0x3852dd,_0x2fba41,_0x3cbcdc){let _0x653ea1=_0x4c64('54')+uid+_0x4c64('55')+_0xcd0ee4+_0x4c64('56')+_0x2fba41+_0x4c64('57')+_0x3852dd+_0x4c64('58');let _0x4bdfc0={'\x75\x72\x6c':_0x4c64('59'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x4c64('5a'),'content-length':_0x653ea1[_0x4c64('e')],'accept-encoding':_0x4c64('5b'),'user-agent':_0x4c64('5c'),'platform':_0x4c64('5d'),'client-v':_0x4c64('5e'),'device-id':device,'access-token':access_token,'user-agent':_0x4c64('5f')},'\x62\x6f\x64\x79':_0x653ea1};return new Promise((_0xa61a33,_0x337db6)=>{$[_0x4c64('1c')](_0x4bdfc0,async(_0x31be73,_0x1560e2,_0x3aa9c4)=>{try{if(_0x31be73){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x3cbcdc+_0x4c64('60'));subTitle+=_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x3cbcdc+_0x4c64('60');}else{let _0x32403a=JSON[_0x4c64('1f')](_0x3aa9c4);if(_0x32403a[_0x4c64('20')]==0x0){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x3cbcdc+_0x4c64('61')+_0x32403a[_0x4c64('26')]);}else{console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x3cbcdc+_0x4c64('61')+_0x32403a[_0x4c64('26')]);}}}catch(_0x3f8442){console[_0x4c64('4')](_0x3f8442,_0x1560e2);}finally{_0xa61a33();}});});}function MyWelfare(){let _0x4c9acc=Post_request_h5(_0x4c64('62'),_0x4c64('63')+access_token+_0x4c64('4e')+device+_0x4c64('64'));return new Promise((_0x2ff243,_0x1a4209)=>{$[_0x4c64('1c')](_0x4c9acc,async(_0x32d050,_0xf69b98,_0x420c6d)=>{try{if(_0x32d050){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('65'));subTitle+=_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('65');}else{let _0x43c61a=JSON[_0x4c64('1f')](_0x420c6d);if(_0x43c61a[_0x4c64('20')]==0x0){uid=_0x43c61a[_0x4c64('22')][_0x4c64('66')][_0x4c64('67')];}else{console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+_0x4c64('68')+_0x43c61a[_0x4c64('26')]);}}}catch(_0x4cfe5d){console[_0x4c64('4')](_0x4cfe5d,_0xf69b98);}finally{_0x2ff243();}});});}function GetReward_music(_0x3dbf74,_0x3eab84){let _0x9dfb92=Post_request_m(_0x4c64('69')+_0x3dbf74+_0x4c64('4d')+access_token+_0x4c64('4e')+device+_0x4c64('4f'));return new Promise((_0x235d15,_0x51681c)=>{$[_0x4c64('1c')](_0x9dfb92,async(_0x4ec2be,_0x52e39a,_0x29b73a)=>{try{if(_0x4ec2be){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x3eab84+_0x4c64('50'));subTitle+=_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x3eab84+_0x4c64('50');}else{let _0x2432b5=JSON[_0x4c64('1f')](_0x29b73a);if(_0x2432b5[_0x4c64('20')]==0x0){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x3eab84+_0x4c64('51')+_0x2432b5[_0x4c64('22')][_0x4c64('52')]+_0x4c64('24'));}else{console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x3eab84+_0x4c64('53')+_0x2432b5[_0x4c64('26')]);}}}catch(_0x4d3ad3){console[_0x4c64('4')](_0x4d3ad3,_0x52e39a);}finally{_0x235d15();}});});}function GetReward(_0x5dada5,_0x276634){let _0x4c7417=Post_request_h5(_0x4c64('6a'),_0x4c64('4c')+_0x5dada5+_0x4c64('4d')+access_token+_0x4c64('4e')+device+_0x4c64('4f'));return new Promise((_0xd6afc3,_0x190edc)=>{$[_0x4c64('1c')](_0x4c7417,async(_0x5ca209,_0xe29178,_0x395162)=>{try{if(_0x5ca209){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x276634+_0x4c64('6b'));subTitle+=_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x276634+_0x4c64('6b');}else{let _0x220fef=JSON[_0x4c64('1f')](_0x395162);if(_0x220fef[_0x4c64('20')]==0x0){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x276634+_0x4c64('6c')+_0x220fef[_0x4c64('22')][_0x4c64('52')]+_0x4c64('24'));}else{console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x276634+_0x4c64('6d')+_0x220fef[_0x4c64('26')]);}}}catch(_0x9ef5eb){console[_0x4c64('4')](_0x9ef5eb,_0xe29178);}finally{_0xd6afc3();}});});}function getRewardModule(_0x1c3a73,_0x1bca55){let _0x5b21b2=Post_request_h5(_0x4c64('6e'),_0x4c64('6f')+_0x1c3a73+_0x4c64('4d')+access_token+_0x4c64('4e')+device+_0x4c64('70'));return new Promise((_0x58d0ab,_0x155aa6)=>{$[_0x4c64('1c')](_0x5b21b2,async(_0x5f469a,_0x540904,_0x3c975c)=>{try{if(_0x5f469a){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x1bca55+_0x4c64('71'));subTitle+=_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x1bca55+_0x4c64('71');}else{let _0x4cdaa5=JSON[_0x4c64('1f')](_0x3c975c);if(_0x4cdaa5[_0x4c64('20')]==0x0){console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x1bca55+_0x4c64('72')+_0x4cdaa5[_0x4c64('22')][_0x4c64('73')]+_0x4c64('24'));}else{console[_0x4c64('4')](_0x4c64('1d')+$[_0x4c64('11')]+'\x20'+_0x1bca55+_0x4c64('74')+_0x4cdaa5[_0x4c64('26')]);}}}catch(_0x6017b2){console[_0x4c64('4')](_0x6017b2,_0x540904);}finally{_0x58d0ab();}});});}async function get_preservation(){await get_variable();let _0xf2da55=device+'\x26'+access_token+'\x26'+refresh_token;preservation=Global_variable[_0x4c64('75')](new RegExp(current,'\x67\x69'),_0xf2da55);fs[_0x4c64('76')](_0x4c64('77'),variable_left+preservation+variable_right,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0xc49b40){if(_0xc49b40){console[_0x4c64('4')](_0xc49b40);}});}function Post_request(_0x19d079,_0x9e923c,_0x43588c){if(_0x43588c==0x0){host=_0x4c64('78');}else{host=_0x4c64('79');}return{'\x75\x72\x6c':''+host+_0x19d079,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x4c64('5a'),'content-length':_0x9e923c[_0x4c64('e')],'accept-encoding':_0x4c64('5b'),'user-agent':_0x4c64('5c'),'platform':_0x4c64('5d'),'client-v':_0x4c64('5e'),'device-id':device,'access-token':access_token,'user-agent':_0x4c64('5f')},'\x62\x6f\x64\x79':_0x9e923c};};function Post_request_h5(_0x1aef89,_0x509280){let _0x349fb4=_0x4c64('7a')+_0x1aef89;return{'\x75\x72\x6c':_0x349fb4,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x4c64('5a'),'content-length':_0x509280[_0x4c64('e')],'accept-encoding':_0x4c64('5b'),'user-agent':_0x4c64('5c'),'platform':_0x4c64('5d'),'client-v':_0x4c64('5e'),'device-id':device,'access-token':access_token,'user-agent':_0x4c64('5f')},'\x62\x6f\x64\x79':_0x509280};};function Post_request_m(_0x471900){return{'\x75\x72\x6c':_0x4c64('7b'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x4c64('5a'),'content-length':_0x471900[_0x4c64('e')],'accept-encoding':_0x4c64('5b'),'user-agent':_0x4c64('5c'),'platform':_0x4c64('5d'),'client-v':_0x4c64('5e'),'device-id':device,'access-token':access_token,'user-agent':_0x4c64('5f')},'\x62\x6f\x64\x79':_0x471900};};function get_variable(){let _0x43702e=fs[_0x4c64('7c')](_0x4c64('77'))[_0x4c64('7d')]();fs[_0x4c64('7e')](_0x4c64('7f'),_0x43702e,_0x4c64('80'));variable_left=_0x43702e[_0x4c64('81')](0x0,_0x43702e[_0x4c64('6')](_0x4c64('82')))+_0x4c64('83');let _0x2a99ae=_0x43702e[_0x4c64('e')]-variable_left[_0x4c64('e')]-process[_0x4c64('2')][_0x4c64('3')][_0x4c64('e')];variable_right=_0x43702e[_0x4c64('81')](_0x43702e[_0x4c64('e')]-_0x2a99ae,_0x43702e[_0x4c64('e')]);Global_variable=_0x43702e[_0x4c64('81')](_0x43702e[_0x4c64('6')](variable_left)+variable_left[_0x4c64('e')],_0x43702e[_0x4c64('6')](variable_right));}function AES_Encrypt(_0x293a20,_0x1a7ba5){let _0x581d0f=AES_DE[_0x4c64('84')][_0x4c64('85')](AES_DE[_0x4c64('86')][_0x4c64('87')][_0x4c64('1f')](_0x293a20),AES_DE[_0x4c64('86')][_0x4c64('87')][_0x4c64('1f')](_0x1a7ba5),{'\x6d\x6f\x64\x65':AES_DE[_0x4c64('88')][_0x4c64('89')],'\x70\x61\x64\x64\x69\x6e\x67':AES_DE[_0x4c64('8a')][_0x4c64('8b')]});return _0x581d0f[_0x4c64('7d')]();}function MD5_Encrypt(_0x3a7174){function _0x1c2797(_0x3a7174,_0x1c2797){return _0x3a7174<<_0x1c2797|_0x3a7174>>>0x20-_0x1c2797;}function _0x1c8aed(_0x3a7174,_0x1c2797){var _0x1c8aed,_0x13e390,_0x54983d,_0x5690ba,_0x4fbab0;return _0x54983d=0x80000000&_0x3a7174,_0x5690ba=0x80000000&_0x1c2797,_0x1c8aed=0x40000000&_0x3a7174,_0x13e390=0x40000000&_0x1c2797,_0x4fbab0=(0x3fffffff&_0x3a7174)+(0x3fffffff&_0x1c2797),_0x1c8aed&_0x13e390?0x80000000^_0x4fbab0^_0x54983d^_0x5690ba:_0x1c8aed|_0x13e390?0x40000000&_0x4fbab0?0xc0000000^_0x4fbab0^_0x54983d^_0x5690ba:0x40000000^_0x4fbab0^_0x54983d^_0x5690ba:_0x4fbab0^_0x54983d^_0x5690ba;}function _0x3b35b4(_0x3a7174,_0x1c2797,_0x1c8aed){return _0x3a7174&_0x1c2797|~_0x3a7174&_0x1c8aed;}function _0x536dfb(_0x3a7174,_0x1c2797,_0x1c8aed){return _0x3a7174&_0x1c8aed|_0x1c2797&~_0x1c8aed;}function _0x3aaddf(_0x3a7174,_0x1c2797,_0x1c8aed){return _0x3a7174^_0x1c2797^_0x1c8aed;}function _0x562755(_0x3a7174,_0x1c2797,_0x1c8aed){return _0x1c2797^(_0x3a7174|~_0x1c8aed);}function _0x35e3e3(_0x3a7174,_0x536dfb,_0x3aaddf,_0x562755,_0x35e3e3,_0x313e60,_0x2a65fa){return _0x3a7174=_0x1c8aed(_0x3a7174,_0x1c8aed(_0x1c8aed(_0x3b35b4(_0x536dfb,_0x3aaddf,_0x562755),_0x35e3e3),_0x2a65fa)),_0x1c8aed(_0x1c2797(_0x3a7174,_0x313e60),_0x536dfb);}function _0x4fc528(_0x3a7174,_0x3b35b4,_0x3aaddf,_0x562755,_0x35e3e3,_0x4fc528,_0x3583db){return _0x3a7174=_0x1c8aed(_0x3a7174,_0x1c8aed(_0x1c8aed(_0x536dfb(_0x3b35b4,_0x3aaddf,_0x562755),_0x35e3e3),_0x3583db)),_0x1c8aed(_0x1c2797(_0x3a7174,_0x4fc528),_0x3b35b4);}function _0x36d206(_0x3a7174,_0x3b35b4,_0x536dfb,_0x562755,_0x35e3e3,_0x4fc528,_0x36d206){return _0x3a7174=_0x1c8aed(_0x3a7174,_0x1c8aed(_0x1c8aed(_0x3aaddf(_0x3b35b4,_0x536dfb,_0x562755),_0x35e3e3),_0x36d206)),_0x1c8aed(_0x1c2797(_0x3a7174,_0x4fc528),_0x3b35b4);}function _0x4268aa(_0x3a7174,_0x3b35b4,_0x536dfb,_0x3aaddf,_0x35e3e3,_0x4fc528,_0x36d206){return _0x3a7174=_0x1c8aed(_0x3a7174,_0x1c8aed(_0x1c8aed(_0x562755(_0x3b35b4,_0x536dfb,_0x3aaddf),_0x35e3e3),_0x36d206)),_0x1c8aed(_0x1c2797(_0x3a7174,_0x4fc528),_0x3b35b4);}function _0x34e5e6(_0x3a7174){for(var _0x1c2797,_0x1c8aed=_0x3a7174[_0x4c64('e')],_0x3b35b4=_0x1c8aed+0x8,_0x536dfb=(_0x3b35b4-_0x3b35b4%0x40)/0x40,_0x3aaddf=0x10*(_0x536dfb+0x1),_0x562755=new Array(_0x3aaddf-0x1),_0x35e3e3=0x0,_0x4fc528=0x0;_0x1c8aed>_0x4fc528;)_0x1c2797=(_0x4fc528-_0x4fc528%0x4)/0x4,_0x35e3e3=_0x4fc528%0x4*0x8,_0x562755[_0x1c2797]=_0x562755[_0x1c2797]|_0x3a7174[_0x4c64('8c')](_0x4fc528)<<_0x35e3e3,_0x4fc528++;return _0x1c2797=(_0x4fc528-_0x4fc528%0x4)/0x4,_0x35e3e3=_0x4fc528%0x4*0x8,_0x562755[_0x1c2797]=_0x562755[_0x1c2797]|0x80<<_0x35e3e3,_0x562755[_0x3aaddf-0x2]=_0x1c8aed<<0x3,_0x562755[_0x3aaddf-0x1]=_0x1c8aed>>>0x1d,_0x562755;}function _0x282b55(_0x3a7174){var _0x1c2797,_0x1c8aed,_0x3b35b4='',_0x536dfb='';for(_0x1c8aed=0x0;0x3>=_0x1c8aed;_0x1c8aed++)_0x1c2797=_0x3a7174>>>0x8*_0x1c8aed&0xff,_0x536dfb='\x30'+_0x1c2797[_0x4c64('7d')](0x10),_0x3b35b4+=_0x536dfb[_0x4c64('8d')](_0x536dfb[_0x4c64('e')]-0x2,0x2);return _0x3b35b4;}function _0x2002e8(_0x3a7174){_0x3a7174=_0x3a7174[_0x4c64('75')](/\r\n/g,'\x0a');for(var _0x1c2797='',_0x1c8aed=0x0;_0x1c8aed<_0x3a7174[_0x4c64('e')];_0x1c8aed++){var _0x3b35b4=_0x3a7174[_0x4c64('8c')](_0x1c8aed);0x80>_0x3b35b4?_0x1c2797+=String[_0x4c64('8e')](_0x3b35b4):_0x3b35b4>0x7f&&0x800>_0x3b35b4?(_0x1c2797+=String[_0x4c64('8e')](_0x3b35b4>>0x6|0xc0),_0x1c2797+=String[_0x4c64('8e')](0x3f&_0x3b35b4|0x80)):(_0x1c2797+=String[_0x4c64('8e')](_0x3b35b4>>0xc|0xe0),_0x1c2797+=String[_0x4c64('8e')](_0x3b35b4>>0x6&0x3f|0x80),_0x1c2797+=String[_0x4c64('8e')](0x3f&_0x3b35b4|0x80));}return _0x1c2797;}var _0x4e9fbe,_0x48069e,_0x4fb663,_0x533a57,_0x499a5d,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b=[],_0x592345=0x7,_0x48636c=0xc,_0x51b9f5=0x11,_0x44d8b3=0x16,_0x221725=0x5,_0x25751f=0x9,_0x21c662=0xe,_0x1fce97=0x14,_0x566d09=0x4,_0x2ccde1=0xb,_0x357689=0x10,_0x325762=0x17,_0x1ce809=0x6,_0x15dfeb=0xa,_0x280343=0xf,_0x3d933e=0x15;for(_0x3a7174=_0x2002e8(_0x3a7174),_0x43965b=_0x34e5e6(_0x3a7174),_0x4bce8a=0x67452301,_0x1c9cb3=0xefcdab89,_0x356be4=0x98badcfe,_0x3f3b08=0x10325476,_0x4e9fbe=0x0;_0x4e9fbe<_0x43965b[_0x4c64('e')];_0x4e9fbe+=0x10)_0x48069e=_0x4bce8a,_0x4fb663=_0x1c9cb3,_0x533a57=_0x356be4,_0x499a5d=_0x3f3b08,_0x4bce8a=_0x35e3e3(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x0],_0x592345,0xd76aa478),_0x3f3b08=_0x35e3e3(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0x1],_0x48636c,0xe8c7b756),_0x356be4=_0x35e3e3(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0x2],_0x51b9f5,0x242070db),_0x1c9cb3=_0x35e3e3(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0x3],_0x44d8b3,0xc1bdceee),_0x4bce8a=_0x35e3e3(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x4],_0x592345,0xf57c0faf),_0x3f3b08=_0x35e3e3(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0x5],_0x48636c,0x4787c62a),_0x356be4=_0x35e3e3(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0x6],_0x51b9f5,0xa8304613),_0x1c9cb3=_0x35e3e3(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0x7],_0x44d8b3,0xfd469501),_0x4bce8a=_0x35e3e3(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x8],_0x592345,0x698098d8),_0x3f3b08=_0x35e3e3(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0x9],_0x48636c,0x8b44f7af),_0x356be4=_0x35e3e3(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0xa],_0x51b9f5,0xffff5bb1),_0x1c9cb3=_0x35e3e3(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0xb],_0x44d8b3,0x895cd7be),_0x4bce8a=_0x35e3e3(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0xc],_0x592345,0x6b901122),_0x3f3b08=_0x35e3e3(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0xd],_0x48636c,0xfd987193),_0x356be4=_0x35e3e3(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0xe],_0x51b9f5,0xa679438e),_0x1c9cb3=_0x35e3e3(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0xf],_0x44d8b3,0x49b40821),_0x4bce8a=_0x4fc528(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x1],_0x221725,0xf61e2562),_0x3f3b08=_0x4fc528(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0x6],_0x25751f,0xc040b340),_0x356be4=_0x4fc528(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0xb],_0x21c662,0x265e5a51),_0x1c9cb3=_0x4fc528(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0x0],_0x1fce97,0xe9b6c7aa),_0x4bce8a=_0x4fc528(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x5],_0x221725,0xd62f105d),_0x3f3b08=_0x4fc528(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0xa],_0x25751f,0x2441453),_0x356be4=_0x4fc528(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0xf],_0x21c662,0xd8a1e681),_0x1c9cb3=_0x4fc528(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0x4],_0x1fce97,0xe7d3fbc8),_0x4bce8a=_0x4fc528(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x9],_0x221725,0x21e1cde6),_0x3f3b08=_0x4fc528(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0xe],_0x25751f,0xc33707d6),_0x356be4=_0x4fc528(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0x3],_0x21c662,0xf4d50d87),_0x1c9cb3=_0x4fc528(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0x8],_0x1fce97,0x455a14ed),_0x4bce8a=_0x4fc528(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0xd],_0x221725,0xa9e3e905),_0x3f3b08=_0x4fc528(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0x2],_0x25751f,0xfcefa3f8),_0x356be4=_0x4fc528(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0x7],_0x21c662,0x676f02d9),_0x1c9cb3=_0x4fc528(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0xc],_0x1fce97,0x8d2a4c8a),_0x4bce8a=_0x36d206(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x5],_0x566d09,0xfffa3942),_0x3f3b08=_0x36d206(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0x8],_0x2ccde1,0x8771f681),_0x356be4=_0x36d206(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0xb],_0x357689,0x6d9d6122),_0x1c9cb3=_0x36d206(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0xe],_0x325762,0xfde5380c),_0x4bce8a=_0x36d206(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x1],_0x566d09,0xa4beea44),_0x3f3b08=_0x36d206(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0x4],_0x2ccde1,0x4bdecfa9),_0x356be4=_0x36d206(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0x7],_0x357689,0xf6bb4b60),_0x1c9cb3=_0x36d206(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0xa],_0x325762,0xbebfbc70),_0x4bce8a=_0x36d206(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0xd],_0x566d09,0x289b7ec6),_0x3f3b08=_0x36d206(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0x0],_0x2ccde1,0xeaa127fa),_0x356be4=_0x36d206(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0x3],_0x357689,0xd4ef3085),_0x1c9cb3=_0x36d206(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0x6],_0x325762,0x4881d05),_0x4bce8a=_0x36d206(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x9],_0x566d09,0xd9d4d039),_0x3f3b08=_0x36d206(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0xc],_0x2ccde1,0xe6db99e5),_0x356be4=_0x36d206(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0xf],_0x357689,0x1fa27cf8),_0x1c9cb3=_0x36d206(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0x2],_0x325762,0xc4ac5665),_0x4bce8a=_0x4268aa(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x0],_0x1ce809,0xf4292244),_0x3f3b08=_0x4268aa(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0x7],_0x15dfeb,0x432aff97),_0x356be4=_0x4268aa(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0xe],_0x280343,0xab9423a7),_0x1c9cb3=_0x4268aa(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0x5],_0x3d933e,0xfc93a039),_0x4bce8a=_0x4268aa(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0xc],_0x1ce809,0x655b59c3),_0x3f3b08=_0x4268aa(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0x3],_0x15dfeb,0x8f0ccc92),_0x356be4=_0x4268aa(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0xa],_0x280343,0xffeff47d),_0x1c9cb3=_0x4268aa(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0x1],_0x3d933e,0x85845dd1),_0x4bce8a=_0x4268aa(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x8],_0x1ce809,0x6fa87e4f),_0x3f3b08=_0x4268aa(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0xf],_0x15dfeb,0xfe2ce6e0),_0x356be4=_0x4268aa(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0x6],_0x280343,0xa3014314),_0x1c9cb3=_0x4268aa(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0xd],_0x3d933e,0x4e0811a1),_0x4bce8a=_0x4268aa(_0x4bce8a,_0x1c9cb3,_0x356be4,_0x3f3b08,_0x43965b[_0x4e9fbe+0x4],_0x1ce809,0xf7537e82),_0x3f3b08=_0x4268aa(_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x356be4,_0x43965b[_0x4e9fbe+0xb],_0x15dfeb,0xbd3af235),_0x356be4=_0x4268aa(_0x356be4,_0x3f3b08,_0x4bce8a,_0x1c9cb3,_0x43965b[_0x4e9fbe+0x2],_0x280343,0x2ad7d2bb),_0x1c9cb3=_0x4268aa(_0x1c9cb3,_0x356be4,_0x3f3b08,_0x4bce8a,_0x43965b[_0x4e9fbe+0x9],_0x3d933e,0xeb86d391),_0x4bce8a=_0x1c8aed(_0x4bce8a,_0x48069e),_0x1c9cb3=_0x1c8aed(_0x1c9cb3,_0x4fb663),_0x356be4=_0x1c8aed(_0x356be4,_0x533a57),_0x3f3b08=_0x1c8aed(_0x3f3b08,_0x499a5d);var _0x299d7b=_0x282b55(_0x4bce8a)+_0x282b55(_0x1c9cb3)+_0x282b55(_0x356be4)+_0x282b55(_0x3f3b08);return _0x299d7b[_0x4c64('8f')]();};_0xod7='jsjiami.com.v6';



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