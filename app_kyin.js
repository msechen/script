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

var _0xodU='jsjiami.com.v6',_0xodU_=['_0xodU'],_0x3ef5=[_0xodU,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x53\x65\x6e\x64\x43\x6f\x69\x6e','\x6d\x6f\x64\x65\x3d\x6d\x75\x73\x69\x63\x26\x6c\x65\x76\x65\x6c\x3d\x34\x37\x26\x75\x73\x65\x64\x5f\x66\x61\x73\x74\x5f\x74\x69\x6d\x65\x3d\x32\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x39\x34\x35\x30\x38\x37\x34\x31\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x37\x37\x41\x39\x32\x32\x45\x34\x41\x31\x46\x35\x37\x33\x34\x39\x39\x43\x36\x41\x36\x34\x35\x36\x45\x36\x38\x39\x42\x38\x32\x42\x41\x41\x30\x41\x44\x36\x41\x46\x35\x42\x45\x32\x33\x43\x32\x46\x38\x35\x30\x46\x41\x41\x44\x43\x34\x39\x39\x44\x38\x39\x35\x32','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x63\x6f\x69\x6e','\x20\u91d1\u5e01','\x20\u5237\u65f6\u957f\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x67\x65\x74\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x34\x31\x39\x37\x35\x33\x33\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x45\x34\x31\x30\x39\x45\x45\x32\x34\x43\x35\x33\x41\x31\x46\x32\x45\x33\x38\x42\x36\x42\x32\x41\x41\x45\x36\x44\x46\x34\x38\x41\x44\x32\x43\x42\x43\x35\x41\x41\x42\x46\x38\x34\x37\x35\x36\x32\x30\x43\x39\x36\x44\x44\x35\x33\x31\x39\x31\x30\x46\x43\x38','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u6210\u529f\x2e\x2e\x2e','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x57\x65\x6c\x66\x61\x72\x65\x50\x61\x67\x65\x54\x61\x73\x6b','\x70\x61\x67\x65\x3d\x72\x65\x64\x5f\x70\x61\x63\x6b\x61\x67\x65\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x36\x31\x36\x39\x32\x37\x30\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x32\x34\x30\x37\x36\x33\x44\x41\x35\x33\x36\x43\x30\x44\x33\x46\x38\x38\x33\x34\x34\x41\x42\x45\x35\x32\x44\x37\x45\x43\x38\x42\x36\x37\x30\x39\x30\x34\x39\x41\x32\x33\x41\x37\x33\x36\x35\x32\x38\x44\x42\x44\x35\x44\x37\x44\x43\x36\x30\x43\x46\x42\x42\x31','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x64\x61\x69\x6c\x79\x54\x61\x73\x6b','\x74\x61\x73\x6b\x5f\x74\x79\x70\x65','\x63\x6f\x6e\x74\x69\x6e\x75\x65\x5f\x6c\x6f\x67\x5f\x69\x6e\x5f\x33','\x70\x72\x6f\x67\x72\x65\x73\x73\x5f\x73\x74\x61\x74\x75\x73','\x74\x69\x74\x6c\x65','\x72\x65\x64\x70\x61\x63\x6b\x61\x67\x65\x4c\x6f\x67\x6f\x6e','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x6f\x6e\x65','\x66\x75\x6c\x69\x4d\x75\x73\x69\x63\x4f\x76\x65\x72','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x77\x6f','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x68\x72\x65\x65','\x6c\x69\x73\x74\x65\x6e\x5f\x6d\x75\x73\x69\x63\x5f\x72\x65\x77\x61\x72\x64','\x73\x70\x65\x63\x69\x61\x6c','\x73\x70\x65\x63\x69\x61\x6c\x5f\x70\x72\x6f\x67\x72\x65\x73\x73','\x73\x74\x61\x74\x75\x73','\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x76\x69\x64\x65\x6f\x5f\x6e\x6f\x77','\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31','\x77\x65\x6c\x66\x61\x72\x65\x54\x61\x73\x6b\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67','\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x77\x61\x74\x63\x68\x5f\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x33','\x77\x65\x6c\x66\x61\x72\x65\x5f\x77\x61\x74\x63\x68\x5f\x76\x69\x64\x65\x6f','\x66\x75\x6c\x69\x57\x61\x74\x63\x68\x41\x64\x56\x69\x64\x65\x6f\x4f\x76\x65\x72','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67\x52\x65\x77\x61\x72\x64','\x74\x61\x73\x6b\x54\x79\x70\x65\x3d','\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x75\x74\x6d\x2d\x73\x6f\x75\x72\x63\x65\x3d\x78\x69\x61\x6f\x6d\x69\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x38\x30\x31\x35\x39\x37\x39\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x32\x43\x36\x43\x43\x42\x36\x43\x31\x41\x43\x43\x32\x41\x34\x31\x30\x34\x43\x31\x32\x44\x36\x41\x38\x33\x41\x39\x43\x43\x31\x44\x33\x31\x36\x46\x36\x36\x32\x41\x34\x33\x33\x34\x41\x30\x32\x35\x38\x42\x46\x41\x43\x46\x35\x42\x41\x42\x43\x39\x32\x31\x41','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x72\x65\x77\x61\x72\x64\x5f\x61\x6d\x6f\x75\x6e\x74','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x36\x26\x69\x64\x3d\x39\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41','\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x39\x32\x36\x30\x31\x36\x36\x39\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x37\x39\x42\x33\x36\x41\x43\x32\x41\x32\x32\x30\x46\x39\x38\x46\x33\x42\x42\x44\x33\x39\x39\x42\x41\x38\x33\x34\x44\x32\x41\x35\x36\x46\x37\x36\x35\x33\x31\x44\x44\x42\x39\x43\x31\x36\x46\x39\x38\x44\x35\x41\x36\x41\x30\x37\x37\x34\x43\x38\x46\x44\x37\x44','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x64\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x2f\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\x41\x6e\x64\x72\x6f\x69\x64','\x35\x2e\x30\x33\x2e\x30\x33','\x6b\x75\x61\x69\x79\x69\x6e\x2f\x35\x2e\x30\x33\x2e\x30\x33\x20\x28\x61\x6e\x64\x72\x6f\x69\x64\x2f\x31\x31\x29\x20\x6f\x6b\x56\x65\x72\x73\x69\x6f\x6e\x2f\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x4d\x79\x57\x65\x6c\x66\x61\x72\x65','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x39\x32\x36\x30\x36\x30\x34\x30\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x42\x42\x31\x30\x36\x35\x38\x34\x44\x33\x43\x42\x36\x32\x43\x46\x43\x38\x45\x37\x30\x41\x37\x32\x46\x31\x44\x45\x36\x31\x31\x39\x42\x43\x42\x41\x43\x36\x42\x34\x34\x37\x35\x37\x46\x34\x45\x36\x35\x35\x35\x30\x42\x38\x35\x31\x34\x35\x30\x35\x37\x42\x39\x38','\x20\u798f\u5229\u4efb\u52a1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x69\x70\x5f\x69\x6e\x66\x6f','\x75\x69\x64','\x20\u798f\u5229\u4efb\u52a1\u3011\x3a\x20','\x69\x64\x3d','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x52\x65\x77\x61\x72\x64','\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\u5956\u52b1\u3011\x3a\x20','\x63\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x52\x65\x77\x61\x72\x64\x4d\x6f\x64\x75\x6c\x65','\x74\x79\x70\x65\x3d\x63\x75\x73\x74\x6f\x6d\x69\x7a\x65\x26\x72\x65\x77\x61\x72\x64\x54\x79\x70\x65\x3d\x63\x6f\x69\x6e\x26\x62\x75\x73\x69\x6e\x65\x73\x73\x4e\x61\x6d\x65\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x39\x37\x33\x34\x38\x31\x39\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x37\x33\x43\x43\x46\x33\x43\x44\x39\x36\x43\x36\x36\x32\x42\x30\x33\x30\x44\x39\x37\x34\x42\x37\x44\x38\x39\x33\x31\x37\x30\x33\x41\x38\x32\x42\x39\x38\x31\x30\x33\x42\x33\x43\x41\x32\x30\x45\x42\x43\x37\x32\x35\x35\x43\x41\x33\x30\x34\x38\x43\x39\x37\x30','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x76\x69\x64\x65\x6f\x52\x65\x77\x61\x72\x64','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20','\x72\x65\x70\x6c\x61\x63\x65','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x2f\x71\x6c\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x73\x68','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x70\x61\x73\x73\x70\x6f\x72\x74\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x56\x69\x64\x65\x6f\x4d\x75\x73\x69\x63\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f\x77\x65\x6c\x66\x61\x72\x65\x2f\x67\x65\x74\x4c\x69\x73\x74\x65\x6e\x4d\x75\x73\x69\x63\x52\x65\x77\x61\x72\x64','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61\x3d','\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61\x3d\x22','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x45\x43\x42','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x73\x75\x62\x73\x74\x72','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x6a\x73\x47\x67\x57\x6a\x78\x69\x48\x61\x45\x6d\x50\x44\x69\x2e\x46\x74\x63\x6f\x52\x6d\x47\x2e\x76\x36\x6c\x3d\x3d'];function _0xc16a(_0x5ca2d2,_0x4c37af){_0x5ca2d2=~~'0x'['concat'](_0x5ca2d2['slice'](0x0));var _0x1df2d6=_0x3ef5[_0x5ca2d2];return _0x1df2d6;};(function(_0x264e74,_0x5b628c){var _0x5cf89b=0x0;for(_0x5b628c=_0x264e74['shift'](_0x5cf89b>>0x2);_0x5b628c&&_0x5b628c!==(_0x264e74['pop'](_0x5cf89b>>0x3)+'')['replace'](/[GgWxHEPDFtRGl=]/g,'');_0x5cf89b++){_0x5cf89b=_0x5cf89b^0xd004a;}}(_0x3ef5,_0xc16a));const CryptoJS=require(_0xc16a('0'));const fs=require('\x66\x73');let app_soy_kyin_data=[],soy_kyin_UA='',preservation='';!(async()=>{if($[_0xc16a('1')]()){if(!process[_0xc16a('2')][_0xc16a('3')]){console[_0xc16a('4')](_0xc16a('5'));return;}if(process[_0xc16a('2')][_0xc16a('3')]&&process[_0xc16a('2')][_0xc16a('3')][_0xc16a('6')]('\x0a')>-0x1){app_soy_kyin_data=process[_0xc16a('2')][_0xc16a('3')][_0xc16a('7')]('\x0a');}else if(process[_0xc16a('2')][_0xc16a('3')]&&process[_0xc16a('2')][_0xc16a('3')][_0xc16a('6')]('\x23')>-0x1){app_soy_kyin_data=process[_0xc16a('2')][_0xc16a('3')][_0xc16a('7')]('\x23');}else if(process[_0xc16a('2')][_0xc16a('3')]&&process[_0xc16a('2')][_0xc16a('3')][_0xc16a('6')]('\x40')>-0x1){app_soy_kyin_data=process[_0xc16a('2')][_0xc16a('3')][_0xc16a('7')]('\x40');}else{app_soy_kyin_data=process[_0xc16a('2')][_0xc16a('3')][_0xc16a('7')]();};}console[_0xc16a('4')](_0xc16a('8')+new Date(new Date()[_0xc16a('9')]()+new Date()[_0xc16a('a')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0xc16a('b')]()+_0xc16a('c'));console[_0xc16a('4')](_0xc16a('d')+app_soy_kyin_data[_0xc16a('e')]+_0xc16a('f'));subTitle='';for(i=0x0;i<app_soy_kyin_data[_0xc16a('e')];i++){let _0x4e7a18=app_soy_kyin_data[i][_0xc16a('7')]('\x26');if(_0x4e7a18[_0xc16a('e')]!=0x3){console[_0xc16a('4')](_0xc16a('10'));}else{current=app_soy_kyin_data[i];whole_whole=process[_0xc16a('2')][_0xc16a('3')];device=_0x4e7a18[0x0];access_token=_0x4e7a18[0x1];refresh_token=_0x4e7a18[0x2];}$[_0xc16a('11')]=i+0x1;console[_0xc16a('4')](_0xc16a('12')+$[_0xc16a('11')]+_0xc16a('13'));await implement();};if(notify){if(subTitle){await notify[_0xc16a('14')]($[_0xc16a('15')],subTitle);}}})()[_0xc16a('16')](_0x13e55d=>$[_0xc16a('17')](_0x13e55d))[_0xc16a('18')](()=>$[_0xc16a('19')]());async function implement(){await MyWelfare();await SendCoin();await GetWelfarePageTask();}function SendCoin(){let _0x5a13d1=Post_request(_0xc16a('1a'),_0xc16a('1b'),0x1);return new Promise((_0x5af3f1,_0x57919f)=>{$[_0xc16a('1c')](_0x5a13d1,async(_0x394a18,_0x1e779,_0x28de71)=>{try{if(_0x394a18){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('1e'));subTitle+=_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('1e');}else{let _0x3c99a8=JSON[_0xc16a('1f')](_0x28de71);if(_0x3c99a8[_0xc16a('20')]==0x0){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('21')+_0x3c99a8[_0xc16a('22')][_0xc16a('23')]+_0xc16a('24'));}else if(_0x3c99a8[_0xc16a('20')]==0x2715){await get_token();}else{console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('25')+_0x3c99a8[_0xc16a('26')]);}}}catch(_0x57642b){console[_0xc16a('4')](_0x57642b,_0x1e779);}finally{_0x5af3f1();}});});}function get_token(){let _0x2bad90=Post_request(_0xc16a('27'),_0xc16a('28')+refresh_token+_0xc16a('29'),0x0);return new Promise((_0x555070,_0x58c8be)=>{$[_0xc16a('1c')](_0x2bad90,async(_0x42e605,_0x11a5c7,_0x5e2040)=>{try{if(_0x42e605){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('2a'));subTitle+=_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('2a');}else{let _0x234d62=JSON[_0xc16a('1f')](_0x5e2040);if(_0x234d62[_0xc16a('20')]==0x0){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('2b'));access_token=_0x234d62[_0xc16a('22')][_0xc16a('2c')];refresh_token=_0x234d62[_0xc16a('22')][_0xc16a('2d')];await get_preservation();await implement();}else{console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('2e')+_0x234d62[_0xc16a('26')]);}}}catch(_0x38616b){console[_0xc16a('4')](_0x38616b,_0x11a5c7);}finally{_0x555070();}});});}function GetWelfarePageTask(){let _0x496157=Post_request_h5(_0xc16a('2f'),_0xc16a('30')+access_token+_0xc16a('31')+device+_0xc16a('32'));return new Promise((_0x58d7d5,_0x2eea59)=>{$[_0xc16a('1c')](_0x496157,async(_0x179ed6,_0x520550,_0x80bcff)=>{try{if(_0x179ed6){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('33'));subTitle+=_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('33');}else{let _0x38b0c0=JSON[_0xc16a('1f')](_0x80bcff);if(_0x38b0c0[_0xc16a('20')]==0x0){for(let _0x106216 of _0x38b0c0[_0xc16a('22')][_0xc16a('34')]){if(_0x106216[_0xc16a('35')]==_0xc16a('36')){if(_0x106216[_0xc16a('37')]==0x1){await GetReward(_0xc16a('36'),_0x106216[_0xc16a('38')]);await getRewardModule(_0xc16a('39'),_0x106216[_0xc16a('38')]);}}if(_0x106216[_0xc16a('35')]==_0xc16a('3a')){if(_0x106216[_0xc16a('37')]==0x1){await GetReward(_0xc16a('3a'),_0x106216[_0xc16a('38')]);await getRewardModule(_0xc16a('3b'),_0x106216[_0xc16a('38')]);}}if(_0x106216[_0xc16a('35')]==_0xc16a('3c')){if(_0x106216[_0xc16a('37')]==0x1){await GetReward(_0xc16a('3c'),_0x106216[_0xc16a('38')]);await getRewardModule(_0xc16a('3b'),_0x106216[_0xc16a('38')]);}}if(_0x106216[_0xc16a('35')]==_0xc16a('3d')){if(_0x106216[_0xc16a('37')]==0x1){await GetReward(_0xc16a('3d'),_0x106216[_0xc16a('38')]);await getRewardModule(_0xc16a('3b'),_0x106216[_0xc16a('38')]);}}if(_0x106216[_0xc16a('35')]==_0xc16a('3e')){for(let _0x496766 of _0x106216[_0xc16a('3f')][_0xc16a('40')]){if(_0x496766[_0xc16a('41')]==0x1){await GetReward_music(_0x496766['\x69\x64'],_0x106216[_0xc16a('38')]);await getRewardModule(_0xc16a('3b'),_0x106216[_0xc16a('38')]);}}}if(_0x106216[_0xc16a('35')]==_0xc16a('42')){if(_0x106216[_0xc16a('3f')][_0xc16a('43')]<0x14){await callback(_0xc16a('42'),_0xc16a('44'),0x7e6,_0x106216[_0xc16a('38')]);await getRewardModule(_0xc16a('45'),_0x106216[_0xc16a('38')]);}else{for(let _0x228344 of _0x106216[_0xc16a('3f')][_0xc16a('40')]){if(_0x228344[_0xc16a('41')]==0x1){await GetAdVideoBigReward(_0xc16a('46'),_0x106216[_0xc16a('38')]);await getRewardModule(_0xc16a('45'),_0x106216[_0xc16a('38')]);}}}}if(_0x106216[_0xc16a('35')]==_0xc16a('47')){if(_0x106216[_0xc16a('37')]==0x0){await callback(_0xc16a('48'),_0xc16a('44'),0x7e6,_0x106216[_0xc16a('38')]);}else if(_0x106216[_0xc16a('37')]==0x1){await GetReward(_0xc16a('47'),_0x106216[_0xc16a('38')]);await getRewardModule(_0xc16a('49'),_0x106216[_0xc16a('38')]);}}}}else{console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('4a')+_0x38b0c0[_0xc16a('26')]);}}}catch(_0x354889){console[_0xc16a('4')](_0x354889,_0x520550);}finally{_0x58d7d5();}});});}function GetAdVideoBigReward(_0x44e24f,_0x56a7d4){let _0x1ef15c=Post_request_h5(_0xc16a('4b'),_0xc16a('4c')+_0x44e24f+_0xc16a('4d')+access_token+_0xc16a('4e')+device+_0xc16a('4f'));return new Promise((_0x4e737b,_0x5c6156)=>{$[_0xc16a('1c')](_0x1ef15c,async(_0x5073e5,_0xe3725b,_0x5749d5)=>{try{if(_0x5073e5){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x56a7d4+_0xc16a('50'));subTitle+=_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x56a7d4+_0xc16a('50');}else{let _0x348779=JSON[_0xc16a('1f')](_0x5749d5);if(_0x348779[_0xc16a('20')]==0x0){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x56a7d4+_0xc16a('51')+_0x348779[_0xc16a('22')][_0xc16a('52')]+_0xc16a('24'));}else{console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x56a7d4+_0xc16a('53')+_0x348779[_0xc16a('26')]);}}}catch(_0x1a0a3d){console[_0xc16a('4')](_0x1a0a3d,_0xe3725b);}finally{_0x4e737b();}});});}function callback(_0x14dbab,_0x27b94d,_0x174751,_0x1eef16){let _0x4fa989=_0xc16a('54')+uid+_0xc16a('55')+_0x14dbab+_0xc16a('56')+_0x174751+_0xc16a('57')+_0x27b94d+_0xc16a('58');let _0x2cfc5b={'\x75\x72\x6c':_0xc16a('59'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0xc16a('5a'),'content-length':_0x4fa989[_0xc16a('e')],'accept-encoding':_0xc16a('5b'),'user-agent':_0xc16a('5c'),'platform':_0xc16a('5d'),'client-v':_0xc16a('5e'),'device-id':device,'access-token':access_token,'user-agent':_0xc16a('5f')},'\x62\x6f\x64\x79':_0x4fa989};return new Promise((_0x167f38,_0x12189d)=>{$[_0xc16a('1c')](_0x2cfc5b,async(_0x56dad5,_0x4e9089,_0x35f2dd)=>{try{if(_0x56dad5){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x1eef16+_0xc16a('60'));subTitle+=_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x1eef16+_0xc16a('60');}else{let _0x7cd68b=JSON[_0xc16a('1f')](_0x35f2dd);if(_0x7cd68b[_0xc16a('20')]==0x0){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x1eef16+_0xc16a('61')+_0x7cd68b[_0xc16a('26')]);}else{console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x1eef16+_0xc16a('61')+_0x7cd68b[_0xc16a('26')]);}}}catch(_0x301a86){console[_0xc16a('4')](_0x301a86,_0x4e9089);}finally{_0x167f38();}});});}function MyWelfare(){let _0x5c6bbe=Post_request_h5(_0xc16a('62'),_0xc16a('63')+access_token+_0xc16a('4e')+device+_0xc16a('64'));return new Promise((_0x301e60,_0x3f4afd)=>{$[_0xc16a('1c')](_0x5c6bbe,async(_0x4fd101,_0x20b372,_0x120e74)=>{try{if(_0x4fd101){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('65'));subTitle+=_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('65');}else{let _0x4767df=JSON[_0xc16a('1f')](_0x120e74);if(_0x4767df[_0xc16a('20')]==0x0){uid=_0x4767df[_0xc16a('22')][_0xc16a('66')][_0xc16a('67')];}else{console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+_0xc16a('68')+_0x4767df[_0xc16a('26')]);}}}catch(_0x45878a){console[_0xc16a('4')](_0x45878a,_0x20b372);}finally{_0x301e60();}});});}function GetReward_music(_0x29a1e3,_0x1c0be5){let _0x21b837=Post_request_m(_0xc16a('69')+_0x29a1e3+_0xc16a('4d')+access_token+_0xc16a('4e')+device+_0xc16a('4f'));return new Promise((_0x59be50,_0x326175)=>{$[_0xc16a('1c')](_0x21b837,async(_0x21efb1,_0xe5e07e,_0x511107)=>{try{if(_0x21efb1){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x1c0be5+_0xc16a('50'));subTitle+=_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x1c0be5+_0xc16a('50');}else{let _0xcc7cf6=JSON[_0xc16a('1f')](_0x511107);if(_0xcc7cf6[_0xc16a('20')]==0x0){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x1c0be5+_0xc16a('51')+_0xcc7cf6[_0xc16a('22')][_0xc16a('52')]+_0xc16a('24'));}else{console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x1c0be5+_0xc16a('53')+_0xcc7cf6[_0xc16a('26')]);}}}catch(_0x5db60b){console[_0xc16a('4')](_0x5db60b,_0xe5e07e);}finally{_0x59be50();}});});}function GetReward(_0x379326,_0x238123){let _0x5e315c=Post_request_h5(_0xc16a('6a'),_0xc16a('4c')+_0x379326+_0xc16a('4d')+access_token+_0xc16a('4e')+device+_0xc16a('4f'));return new Promise((_0x287ec3,_0x4f83da)=>{$[_0xc16a('1c')](_0x5e315c,async(_0x206a08,_0x50ada9,_0x4f7fc8)=>{try{if(_0x206a08){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x238123+_0xc16a('6b'));subTitle+=_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x238123+_0xc16a('6b');}else{let _0x177b45=JSON[_0xc16a('1f')](_0x4f7fc8);if(_0x177b45[_0xc16a('20')]==0x0){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x238123+_0xc16a('6c')+_0x177b45[_0xc16a('22')][_0xc16a('52')]+_0xc16a('24'));}else{console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x238123+_0xc16a('6d')+_0x177b45[_0xc16a('26')]);}}}catch(_0x2b2349){console[_0xc16a('4')](_0x2b2349,_0x50ada9);}finally{_0x287ec3();}});});}function getRewardModule(_0x34a9f1,_0x27b5b6){let _0x3ea01a=Post_request_h5(_0xc16a('6e'),_0xc16a('6f')+_0x34a9f1+_0xc16a('4d')+access_token+_0xc16a('4e')+device+_0xc16a('70'));return new Promise((_0x595ecb,_0x5604bc)=>{$[_0xc16a('1c')](_0x3ea01a,async(_0x262143,_0x3f98d9,_0x57fc3b)=>{try{if(_0x262143){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x27b5b6+_0xc16a('71'));subTitle+=_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x27b5b6+_0xc16a('71');}else{let _0x1eca7d=JSON[_0xc16a('1f')](_0x57fc3b);if(_0x1eca7d[_0xc16a('20')]==0x0){console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x27b5b6+_0xc16a('72')+_0x1eca7d[_0xc16a('22')][_0xc16a('73')]+_0xc16a('24'));}else{console[_0xc16a('4')](_0xc16a('1d')+$[_0xc16a('11')]+'\x20'+_0x27b5b6+_0xc16a('74')+_0x1eca7d[_0xc16a('26')]);}}}catch(_0xb6255d){console[_0xc16a('4')](_0xb6255d,_0x3f98d9);}finally{_0x595ecb();}});});}async function get_preservation(){await get_variable();let _0x39b79f=device+'\x26'+access_token+'\x26'+refresh_token;preservation=Global_variable[_0xc16a('75')](new RegExp(current,'\x67\x69'),_0x39b79f);fs[_0xc16a('76')](_0xc16a('77'),variable_left+preservation+variable_right,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x30499e){if(_0x30499e){console[_0xc16a('4')](_0x30499e);}});}function Post_request(_0x562c2c,_0x3fd1c3,_0x28b042){if(_0x28b042==0x0){host=_0xc16a('78');}else{host=_0xc16a('79');}return{'\x75\x72\x6c':''+host+_0x562c2c,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0xc16a('5a'),'content-length':_0x3fd1c3[_0xc16a('e')],'accept-encoding':_0xc16a('5b'),'user-agent':_0xc16a('5c'),'platform':_0xc16a('5d'),'client-v':_0xc16a('5e'),'device-id':device,'access-token':access_token,'user-agent':_0xc16a('5f')},'\x62\x6f\x64\x79':_0x3fd1c3};};function Post_request_h5(_0x184c06,_0x25e52b){let _0x2d76d9=_0xc16a('7a')+_0x184c06;return{'\x75\x72\x6c':_0x2d76d9,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0xc16a('5a'),'content-length':_0x25e52b[_0xc16a('e')],'accept-encoding':_0xc16a('5b'),'user-agent':_0xc16a('5c'),'platform':_0xc16a('5d'),'client-v':_0xc16a('5e'),'device-id':device,'access-token':access_token,'user-agent':_0xc16a('5f')},'\x62\x6f\x64\x79':_0x25e52b};};function Post_request_m(_0x347d1b){return{'\x75\x72\x6c':_0xc16a('7b'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0xc16a('5a'),'content-length':_0x347d1b[_0xc16a('e')],'accept-encoding':_0xc16a('5b'),'user-agent':_0xc16a('5c'),'platform':_0xc16a('5d'),'client-v':_0xc16a('5e'),'device-id':device,'access-token':access_token,'user-agent':_0xc16a('5f')},'\x62\x6f\x64\x79':_0x347d1b};};function get_variable(){let _0x2c1241=fs[_0xc16a('7c')](_0xc16a('77'))[_0xc16a('7d')]();variable_left=_0x2c1241[_0xc16a('7e')](0x0,_0x2c1241[_0xc16a('6')](_0xc16a('7f')))+_0xc16a('80');let _0x52409b=_0x2c1241[_0xc16a('e')]-variable_left[_0xc16a('e')]-process[_0xc16a('2')][_0xc16a('3')][_0xc16a('e')];variable_right=_0x2c1241[_0xc16a('7e')](_0x2c1241[_0xc16a('e')]-_0x52409b,_0x2c1241[_0xc16a('e')]);Global_variable=_0x2c1241[_0xc16a('7e')](_0x2c1241[_0xc16a('6')](variable_left)+variable_left[_0xc16a('e')],_0x2c1241[_0xc16a('6')](variable_right));}function AES_Encrypt(_0x3517b6,_0x1d753b){let _0x46dd2f=AES_DE[_0xc16a('81')][_0xc16a('82')](AES_DE[_0xc16a('83')][_0xc16a('84')][_0xc16a('1f')](_0x3517b6),AES_DE[_0xc16a('83')][_0xc16a('84')][_0xc16a('1f')](_0x1d753b),{'\x6d\x6f\x64\x65':AES_DE[_0xc16a('85')][_0xc16a('86')],'\x70\x61\x64\x64\x69\x6e\x67':AES_DE[_0xc16a('87')][_0xc16a('88')]});return _0x46dd2f[_0xc16a('7d')]();}function MD5_Encrypt(_0xf20171){function _0x3f6539(_0xf20171,_0x3f6539){return _0xf20171<<_0x3f6539|_0xf20171>>>0x20-_0x3f6539;}function _0x3b2a5e(_0xf20171,_0x3f6539){var _0x3b2a5e,_0xca60bf,_0x4170ad,_0x18f5f6,_0x273d5d;return _0x4170ad=0x80000000&_0xf20171,_0x18f5f6=0x80000000&_0x3f6539,_0x3b2a5e=0x40000000&_0xf20171,_0xca60bf=0x40000000&_0x3f6539,_0x273d5d=(0x3fffffff&_0xf20171)+(0x3fffffff&_0x3f6539),_0x3b2a5e&_0xca60bf?0x80000000^_0x273d5d^_0x4170ad^_0x18f5f6:_0x3b2a5e|_0xca60bf?0x40000000&_0x273d5d?0xc0000000^_0x273d5d^_0x4170ad^_0x18f5f6:0x40000000^_0x273d5d^_0x4170ad^_0x18f5f6:_0x273d5d^_0x4170ad^_0x18f5f6;}function _0x3cc841(_0xf20171,_0x3f6539,_0x3b2a5e){return _0xf20171&_0x3f6539|~_0xf20171&_0x3b2a5e;}function _0x12524e(_0xf20171,_0x3f6539,_0x3b2a5e){return _0xf20171&_0x3b2a5e|_0x3f6539&~_0x3b2a5e;}function _0x180784(_0xf20171,_0x3f6539,_0x3b2a5e){return _0xf20171^_0x3f6539^_0x3b2a5e;}function _0x26a063(_0xf20171,_0x3f6539,_0x3b2a5e){return _0x3f6539^(_0xf20171|~_0x3b2a5e);}function _0x3ea834(_0xf20171,_0x12524e,_0x180784,_0x26a063,_0x3ea834,_0xc52031,_0x89b886){return _0xf20171=_0x3b2a5e(_0xf20171,_0x3b2a5e(_0x3b2a5e(_0x3cc841(_0x12524e,_0x180784,_0x26a063),_0x3ea834),_0x89b886)),_0x3b2a5e(_0x3f6539(_0xf20171,_0xc52031),_0x12524e);}function _0x366007(_0xf20171,_0x3cc841,_0x180784,_0x26a063,_0x3ea834,_0x366007,_0x309c38){return _0xf20171=_0x3b2a5e(_0xf20171,_0x3b2a5e(_0x3b2a5e(_0x12524e(_0x3cc841,_0x180784,_0x26a063),_0x3ea834),_0x309c38)),_0x3b2a5e(_0x3f6539(_0xf20171,_0x366007),_0x3cc841);}function _0x51cdf1(_0xf20171,_0x3cc841,_0x12524e,_0x26a063,_0x3ea834,_0x366007,_0x51cdf1){return _0xf20171=_0x3b2a5e(_0xf20171,_0x3b2a5e(_0x3b2a5e(_0x180784(_0x3cc841,_0x12524e,_0x26a063),_0x3ea834),_0x51cdf1)),_0x3b2a5e(_0x3f6539(_0xf20171,_0x366007),_0x3cc841);}function _0x28e47f(_0xf20171,_0x3cc841,_0x12524e,_0x180784,_0x3ea834,_0x366007,_0x51cdf1){return _0xf20171=_0x3b2a5e(_0xf20171,_0x3b2a5e(_0x3b2a5e(_0x26a063(_0x3cc841,_0x12524e,_0x180784),_0x3ea834),_0x51cdf1)),_0x3b2a5e(_0x3f6539(_0xf20171,_0x366007),_0x3cc841);}function _0x2a98f9(_0xf20171){for(var _0x3f6539,_0x3b2a5e=_0xf20171[_0xc16a('e')],_0x3cc841=_0x3b2a5e+0x8,_0x12524e=(_0x3cc841-_0x3cc841%0x40)/0x40,_0x180784=0x10*(_0x12524e+0x1),_0x26a063=new Array(_0x180784-0x1),_0x3ea834=0x0,_0x366007=0x0;_0x3b2a5e>_0x366007;)_0x3f6539=(_0x366007-_0x366007%0x4)/0x4,_0x3ea834=_0x366007%0x4*0x8,_0x26a063[_0x3f6539]=_0x26a063[_0x3f6539]|_0xf20171[_0xc16a('89')](_0x366007)<<_0x3ea834,_0x366007++;return _0x3f6539=(_0x366007-_0x366007%0x4)/0x4,_0x3ea834=_0x366007%0x4*0x8,_0x26a063[_0x3f6539]=_0x26a063[_0x3f6539]|0x80<<_0x3ea834,_0x26a063[_0x180784-0x2]=_0x3b2a5e<<0x3,_0x26a063[_0x180784-0x1]=_0x3b2a5e>>>0x1d,_0x26a063;}function _0x2ea8a5(_0xf20171){var _0x3f6539,_0x3b2a5e,_0x3cc841='',_0x12524e='';for(_0x3b2a5e=0x0;0x3>=_0x3b2a5e;_0x3b2a5e++)_0x3f6539=_0xf20171>>>0x8*_0x3b2a5e&0xff,_0x12524e='\x30'+_0x3f6539[_0xc16a('7d')](0x10),_0x3cc841+=_0x12524e[_0xc16a('8a')](_0x12524e[_0xc16a('e')]-0x2,0x2);return _0x3cc841;}function _0x361294(_0xf20171){_0xf20171=_0xf20171[_0xc16a('75')](/\r\n/g,'\x0a');for(var _0x3f6539='',_0x3b2a5e=0x0;_0x3b2a5e<_0xf20171[_0xc16a('e')];_0x3b2a5e++){var _0x3cc841=_0xf20171[_0xc16a('89')](_0x3b2a5e);0x80>_0x3cc841?_0x3f6539+=String[_0xc16a('8b')](_0x3cc841):_0x3cc841>0x7f&&0x800>_0x3cc841?(_0x3f6539+=String[_0xc16a('8b')](_0x3cc841>>0x6|0xc0),_0x3f6539+=String[_0xc16a('8b')](0x3f&_0x3cc841|0x80)):(_0x3f6539+=String[_0xc16a('8b')](_0x3cc841>>0xc|0xe0),_0x3f6539+=String[_0xc16a('8b')](_0x3cc841>>0x6&0x3f|0x80),_0x3f6539+=String[_0xc16a('8b')](0x3f&_0x3cc841|0x80));}return _0x3f6539;}var _0x2d5d88,_0x4298e7,_0x195714,_0x19e06a,_0x5e4be7,_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1=[],_0xe5b188=0x7,_0x436150=0xc,_0x1de3a9=0x11,_0x269c74=0x16,_0xd03025=0x5,_0x495687=0x9,_0x4af835=0xe,_0x5b997d=0x14,_0x104f2a=0x4,_0x30f17a=0xb,_0x16c205=0x10,_0x150def=0x17,_0x18e274=0x6,_0x40167f=0xa,_0x525045=0xf,_0x1e5888=0x15;for(_0xf20171=_0x361294(_0xf20171),_0x29a5c1=_0x2a98f9(_0xf20171),_0x427fc7=0x67452301,_0x3d1211=0xefcdab89,_0x48eb3c=0x98badcfe,_0x481ac4=0x10325476,_0x2d5d88=0x0;_0x2d5d88<_0x29a5c1[_0xc16a('e')];_0x2d5d88+=0x10)_0x4298e7=_0x427fc7,_0x195714=_0x3d1211,_0x19e06a=_0x48eb3c,_0x5e4be7=_0x481ac4,_0x427fc7=_0x3ea834(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x0],_0xe5b188,0xd76aa478),_0x481ac4=_0x3ea834(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0x1],_0x436150,0xe8c7b756),_0x48eb3c=_0x3ea834(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0x2],_0x1de3a9,0x242070db),_0x3d1211=_0x3ea834(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0x3],_0x269c74,0xc1bdceee),_0x427fc7=_0x3ea834(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x4],_0xe5b188,0xf57c0faf),_0x481ac4=_0x3ea834(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0x5],_0x436150,0x4787c62a),_0x48eb3c=_0x3ea834(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0x6],_0x1de3a9,0xa8304613),_0x3d1211=_0x3ea834(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0x7],_0x269c74,0xfd469501),_0x427fc7=_0x3ea834(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x8],_0xe5b188,0x698098d8),_0x481ac4=_0x3ea834(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0x9],_0x436150,0x8b44f7af),_0x48eb3c=_0x3ea834(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0xa],_0x1de3a9,0xffff5bb1),_0x3d1211=_0x3ea834(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0xb],_0x269c74,0x895cd7be),_0x427fc7=_0x3ea834(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0xc],_0xe5b188,0x6b901122),_0x481ac4=_0x3ea834(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0xd],_0x436150,0xfd987193),_0x48eb3c=_0x3ea834(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0xe],_0x1de3a9,0xa679438e),_0x3d1211=_0x3ea834(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0xf],_0x269c74,0x49b40821),_0x427fc7=_0x366007(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x1],_0xd03025,0xf61e2562),_0x481ac4=_0x366007(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0x6],_0x495687,0xc040b340),_0x48eb3c=_0x366007(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0xb],_0x4af835,0x265e5a51),_0x3d1211=_0x366007(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0x0],_0x5b997d,0xe9b6c7aa),_0x427fc7=_0x366007(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x5],_0xd03025,0xd62f105d),_0x481ac4=_0x366007(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0xa],_0x495687,0x2441453),_0x48eb3c=_0x366007(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0xf],_0x4af835,0xd8a1e681),_0x3d1211=_0x366007(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0x4],_0x5b997d,0xe7d3fbc8),_0x427fc7=_0x366007(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x9],_0xd03025,0x21e1cde6),_0x481ac4=_0x366007(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0xe],_0x495687,0xc33707d6),_0x48eb3c=_0x366007(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0x3],_0x4af835,0xf4d50d87),_0x3d1211=_0x366007(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0x8],_0x5b997d,0x455a14ed),_0x427fc7=_0x366007(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0xd],_0xd03025,0xa9e3e905),_0x481ac4=_0x366007(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0x2],_0x495687,0xfcefa3f8),_0x48eb3c=_0x366007(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0x7],_0x4af835,0x676f02d9),_0x3d1211=_0x366007(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0xc],_0x5b997d,0x8d2a4c8a),_0x427fc7=_0x51cdf1(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x5],_0x104f2a,0xfffa3942),_0x481ac4=_0x51cdf1(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0x8],_0x30f17a,0x8771f681),_0x48eb3c=_0x51cdf1(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0xb],_0x16c205,0x6d9d6122),_0x3d1211=_0x51cdf1(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0xe],_0x150def,0xfde5380c),_0x427fc7=_0x51cdf1(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x1],_0x104f2a,0xa4beea44),_0x481ac4=_0x51cdf1(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0x4],_0x30f17a,0x4bdecfa9),_0x48eb3c=_0x51cdf1(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0x7],_0x16c205,0xf6bb4b60),_0x3d1211=_0x51cdf1(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0xa],_0x150def,0xbebfbc70),_0x427fc7=_0x51cdf1(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0xd],_0x104f2a,0x289b7ec6),_0x481ac4=_0x51cdf1(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0x0],_0x30f17a,0xeaa127fa),_0x48eb3c=_0x51cdf1(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0x3],_0x16c205,0xd4ef3085),_0x3d1211=_0x51cdf1(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0x6],_0x150def,0x4881d05),_0x427fc7=_0x51cdf1(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x9],_0x104f2a,0xd9d4d039),_0x481ac4=_0x51cdf1(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0xc],_0x30f17a,0xe6db99e5),_0x48eb3c=_0x51cdf1(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0xf],_0x16c205,0x1fa27cf8),_0x3d1211=_0x51cdf1(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0x2],_0x150def,0xc4ac5665),_0x427fc7=_0x28e47f(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x0],_0x18e274,0xf4292244),_0x481ac4=_0x28e47f(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0x7],_0x40167f,0x432aff97),_0x48eb3c=_0x28e47f(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0xe],_0x525045,0xab9423a7),_0x3d1211=_0x28e47f(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0x5],_0x1e5888,0xfc93a039),_0x427fc7=_0x28e47f(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0xc],_0x18e274,0x655b59c3),_0x481ac4=_0x28e47f(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0x3],_0x40167f,0x8f0ccc92),_0x48eb3c=_0x28e47f(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0xa],_0x525045,0xffeff47d),_0x3d1211=_0x28e47f(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0x1],_0x1e5888,0x85845dd1),_0x427fc7=_0x28e47f(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x8],_0x18e274,0x6fa87e4f),_0x481ac4=_0x28e47f(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0xf],_0x40167f,0xfe2ce6e0),_0x48eb3c=_0x28e47f(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0x6],_0x525045,0xa3014314),_0x3d1211=_0x28e47f(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0xd],_0x1e5888,0x4e0811a1),_0x427fc7=_0x28e47f(_0x427fc7,_0x3d1211,_0x48eb3c,_0x481ac4,_0x29a5c1[_0x2d5d88+0x4],_0x18e274,0xf7537e82),_0x481ac4=_0x28e47f(_0x481ac4,_0x427fc7,_0x3d1211,_0x48eb3c,_0x29a5c1[_0x2d5d88+0xb],_0x40167f,0xbd3af235),_0x48eb3c=_0x28e47f(_0x48eb3c,_0x481ac4,_0x427fc7,_0x3d1211,_0x29a5c1[_0x2d5d88+0x2],_0x525045,0x2ad7d2bb),_0x3d1211=_0x28e47f(_0x3d1211,_0x48eb3c,_0x481ac4,_0x427fc7,_0x29a5c1[_0x2d5d88+0x9],_0x1e5888,0xeb86d391),_0x427fc7=_0x3b2a5e(_0x427fc7,_0x4298e7),_0x3d1211=_0x3b2a5e(_0x3d1211,_0x195714),_0x48eb3c=_0x3b2a5e(_0x48eb3c,_0x19e06a),_0x481ac4=_0x3b2a5e(_0x481ac4,_0x5e4be7);var _0x2db001=_0x2ea8a5(_0x427fc7)+_0x2ea8a5(_0x3d1211)+_0x2ea8a5(_0x48eb3c)+_0x2ea8a5(_0x481ac4);return _0x2db001[_0xc16a('8c')]();};_0xodU='jsjiami.com.v6';


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