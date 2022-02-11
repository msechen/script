/*

安卓软件名称:快音

项目注册地址:https://landing.kaixinyf.cn/e30aze?invite_code=2S7B4S&_timestamp=1644398479&sign=15c82c2822432391d8402109a0762609&app_name=kuaiyin&device_id=1148692d61103e7c&client_v=5.03.03&platform=Android&platform_brand=blackshark&utm_source=xiaomi&um_from_appkey=5d91d0ed570df3d8ed000cb9&share_from=weixin&share_position=wuren

邀请码:2S7B4S

声明：会有黑号还是黑设备的状态，注册后登录上去自行提现0.3元，如果能提现到账就可以跑脚本，不能你跑了也没啥用，到最后也提现不了

==========================================
账号数据由3部分组成
device-id值&access-token值&refresh_token值
寻找方法:退出登录,开抓包,点微信登录成功后找 https://api.kaixinyf.cn/passport/UnionLogin 链接
注释: device-id值在请求头里面找,access-token值和refresh_token值在登录成功后 响应 里面找
==========================================
在脚本同级目录创建一个文件
文件名:soy_variable_data.js
soy_variable_data.js文件内容如下

//添加账号后需要在后面添加一个逗号(英文输入法的),
//最后一个账号后面是没有逗号的
//变量不能使用单引号引起
module.exports = {"code":200,
"variable_data":{
"kyin":[//这里是脚本标识,下面的 kyin 就是给快音脚本使用的标识
"123456",//这是第一个账号
"123456",//这是第二个账号
"123456"//这是第三个账号
]}
}


cron 0-59/10 * * * *


*/


const $ = new Env('快音');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxd8d3c=["\x63\x72\x79\x70\x74\x6F\x2D\x6A\x73","\x66\x73","\x69\x73\x4E\x6F\x64\x65","\x2E\x2F\x73\x6F\x79\x5F\x76\x61\x72\x69\x61\x62\x6C\x65\x5F\x64\x61\x74\x61\x2E\x6A\x73","","\x63\x6F\x64\x65","\x5C\x6E\u3010\x73\x6F\x79\u811A\u672C\u63D0\u793A\u3011\uFF1A\u8BF7\u52FF\u4E71\u4FEE\u6539\u53D8\u91CF\u6587\u4EF6\u91CC\u9762\u5185\u5BB9","\x6C\x6F\x67","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\x6C\x6F\x67\x45\x72\x72","\x63\x61\x74\x63\x68","\x5C\x6E\x3D\x3D\x3D\x20\u811A\u672C\u6267\u884C\x20\x2D\x20\u5317\u4EAC\u65F6\u95F4\uFF1A","\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x53\x74\x72\x69\x6E\x67","\x67\x65\x74\x54\x69\x6D\x65","\x67\x65\x74\x54\x69\x6D\x65\x7A\x6F\x6E\x65\x4F\x66\x66\x73\x65\x74","\x20\x3D\x3D\x3D\x5C\x6E","\x3D\x3D\x3D\u3010\u5171\x20","\x6C\x65\x6E\x67\x74\x68","\x6B\x79\x69\x6E","\x76\x61\x72\x69\x61\x62\x6C\x65\x5F\x64\x61\x74\x61","\x20\u4E2A\u8D26\u53F7\u3011\x3D\x3D\x3D\x5C\x6E","\x26","\x73\x70\x6C\x69\x74","\x5C\x6E\u3010\x73\x6F\x79\u811A\u672C\u63D0\u793A\u3011\uFF1A\u586B\u5199\u53D8\u91CF\u683C\u5F0F\u4E0D\u89C4\u8303","\x69\x6E\x64\x65\x78","\x5C\x6E\u5F00\u59CB\u3010\u7B2C\x20","\x20\u4E2A\u8D26\u53F7\u4EFB\u52A1\u3011","\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x67\x65\x74\x48\x6F\x75\x72\x73","\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x73\x69\x67\x6E\x5F\x69\x6E\x5F\x61\x70\x70\x5F\x78\x5F\x76\x69\x64\x65\x6F","\u7B7E\u5230","\x73","\x68\x6F\x6D\x65\x2F\x54\x69\x6D\x65\x32\x52\x65\x77\x61\x72\x64","\x74\x3D\x31\x36\x34\x34\x35\x37\x31\x30\x34\x31\x33\x30\x31\x26\x73\x3D\x61\x70\x70\x6C\x65\x25\x37\x43\x31\x45\x31\x33\x32\x44\x31\x36\x38\x35\x42\x35\x30\x37\x35\x42\x43\x36\x39\x41\x36\x38\x43\x39\x37\x41\x34\x44\x36\x37\x31\x42\x39\x41\x43\x34\x46\x31\x36\x37\x35\x46\x38\x46\x39\x33\x41\x34\x39\x45\x31\x45\x32\x43\x43\x44\x45\x39\x45\x39\x42\x37\x36\x30","\x5C\x6E\u3010\x73\x6F\x79\u811A\u672C\u63D0\u793A\x2D\x2D\x2D\u8D26\u53F7\x20","\x20\u6574\u70B9\u7EA2\u5305\u3011\x3A\x20\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\x70\x61\x72\x73\x65","\x20\u6574\u70B9\u7EA2\u5305\u3011\x3A\x20","\x6D\x65\x73\x73\x61\x67\x65","\x70\x6F\x73\x74","\x53\x65\x6E\x64\x43\x6F\x69\x6E","\x6D\x6F\x64\x65\x3D\x6D\x75\x73\x69\x63\x26\x6C\x65\x76\x65\x6C\x3D\x38\x26\x75\x73\x65\x64\x5F\x66\x61\x73\x74\x5F\x74\x69\x6D\x65\x3D\x30\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x41\x6E\x64\x72\x6F\x69\x64\x26\x63\x6C\x69\x65\x6E\x74\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x61\x70\x70\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x74\x3D\x31\x36\x34\x34\x33\x39\x34\x36\x34\x39\x38\x31\x31\x26\x73\x3D\x61\x70\x70\x6C\x65\x25\x37\x43\x43\x30\x32\x38\x35\x32\x38\x33\x46\x33\x31\x38\x36\x41\x43\x42\x30\x46\x35\x30\x43\x31\x38\x46\x39\x34\x45\x34\x37\x34\x39\x32\x32\x31\x37\x42\x44\x45\x42\x38\x35\x37\x45\x38\x41\x37\x42\x30\x44\x43\x42\x36\x34\x39\x32\x36\x45\x31\x45\x44\x39\x36\x41\x39","\x20\u5237\u65F6\u957F\u3011\x3A\x20\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\x20\u5237\u65F6\u957F\u3011\x3A\x20\u83B7\u5F97\x20","\x63\x6F\x69\x6E","\x64\x61\x74\x61","\x20\u91D1\u5E01","\x20\u5237\u65F6\u957F\u3011\x3A\x20","\x70\x61\x73\x73\x70\x6F\x72\x74\x2F\x67\x65\x74\x5F\x74\x6F\x6B\x65\x6E","\x72\x65\x66\x72\x65\x73\x68\x5F\x74\x6F\x6B\x65\x6E\x3D","\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x41\x6E\x64\x72\x6F\x69\x64\x26\x63\x6C\x69\x65\x6E\x74\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x61\x70\x70\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x74\x3D\x31\x36\x34\x34\x34\x32\x34\x31\x39\x37\x35\x33\x33\x26\x73\x3D\x61\x70\x70\x6C\x65\x25\x37\x43\x35\x45\x34\x31\x30\x39\x45\x45\x32\x34\x43\x35\x33\x41\x31\x46\x32\x45\x33\x38\x42\x36\x42\x32\x41\x41\x45\x36\x44\x46\x34\x38\x41\x44\x32\x43\x42\x43\x35\x41\x41\x42\x46\x38\x34\x37\x35\x36\x32\x30\x43\x39\x36\x44\x44\x35\x33\x31\x39\x31\x30\x46\x43\x38","\x20\u66F4\u65B0\x74\x6F\x6B\x65\x6E\u3011\x3A\x20\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\x20\u66F4\u65B0\x74\x6F\x6B\x65\x6E\u3011\x3A\x20\u6210\u529F\x2E\x2E\x2E","\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E","\x72\x65\x66\x72\x65\x73\x68\x5F\x74\x6F\x6B\x65\x6E","\x20\u66F4\u65B0\x74\x6F\x6B\x65\x6E\u3011\x3A\x20","\x77\x65\x6C\x66\x61\x72\x65\x2F\x4D\x79\x57\x65\x6C\x66\x61\x72\x65","\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D","\x26\x75\x74\x6D\x2D\x73\x6F\x75\x72\x63\x65\x3D\x78\x69\x61\x6F\x6D\x69\x26\x61\x70\x70\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x64\x65\x76\x69\x63\x65\x5F\x69\x64\x3D","\x26\x63\x6C\x69\x65\x6E\x74\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x70\x72\x6F\x6A\x3D\x6B\x75\x61\x69\x79\x69\x6E\x5F\x68\x35\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x41\x6E\x64\x72\x6F\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5F\x73\x6F\x75\x72\x63\x65\x3D\x61\x70\x70\x26\x74\x3D\x31\x36\x34\x34\x35\x37\x33\x34\x37\x34\x37\x31\x36\x26\x73\x3D\x6D\x61\x6E\x67\x6F\x25\x37\x43\x31\x30\x44\x41\x37\x39\x45\x42\x43\x37\x37\x35\x44\x33\x35\x46\x31\x46\x36\x44\x36\x31\x35\x39\x39\x38\x37\x45\x44\x34\x46\x30\x31\x44\x33\x30\x32\x38\x35\x45\x31\x41\x42\x36\x41\x44\x41\x38\x46\x32\x45\x31\x44\x30\x31\x46\x43\x39\x37\x46\x38\x41\x36\x34\x0A","\x20\u6211\u7684\u798F\u5229\u72B6\u6001\u3011\x3A\x20\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\x64\x61\x69\x6C\x79\x54\x61\x73\x6B","\x74\x61\x73\x6B\x5F\x6C\x69\x73\x74","\x63\x6F\x6E\x74\x65\x6E\x74","\x74\x61\x73\x6B\x5F\x74\x79\x70\x65","\x63\x6F\x6E\x74\x69\x6E\x75\x65\x5F\x6C\x6F\x67\x5F\x69\x6E\x5F\x34","\x70\x72\x6F\x67\x72\x65\x73\x73\x5F\x73\x74\x61\x74\x75\x73","\x63\x6F\x6E\x74\x69\x6E\x75\x65\x5F\x6C\x6F\x67\x5F\x69\x6E\x5F\x33","\x74\x69\x74\x6C\x65","\x72\x65\x64\x70\x61\x63\x6B\x61\x67\x65\x4C\x6F\x67\x6F\x6E","\x78\x69\x61\x6F\x6D\x61\x6E\x5F\x6A\x69\x61\x6E\x79\x61\x6E\x67\x6D\x61\x6F\x5F\x32","\x20\u6211\u7684\u798F\u5229\u72B6\u6001\u3011\x3A\x20","\x77\x65\x6C\x66\x61\x72\x65\x2F\x47\x65\x74\x57\x65\x6C\x66\x61\x72\x65\x50\x61\x67\x65\x54\x61\x73\x6B","\x70\x61\x67\x65\x3D\x72\x65\x64\x5F\x70\x61\x63\x6B\x61\x67\x65\x26\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D","\x26\x64\x65\x76\x69\x63\x65\x5F\x69\x64\x3D","\x26\x61\x70\x70\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x63\x6C\x69\x65\x6E\x74\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x70\x72\x6F\x6A\x3D\x6B\x75\x61\x69\x79\x69\x6E\x5F\x68\x35\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x41\x6E\x64\x72\x6F\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5F\x73\x6F\x75\x72\x63\x65\x3D\x61\x70\x70\x26\x74\x3D\x31\x36\x34\x34\x34\x32\x36\x31\x36\x39\x32\x37\x30\x26\x73\x3D\x67\x72\x61\x70\x65\x25\x37\x43\x32\x34\x30\x37\x36\x33\x44\x41\x35\x33\x36\x43\x30\x44\x33\x46\x38\x38\x33\x34\x34\x41\x42\x45\x35\x32\x44\x37\x45\x43\x38\x42\x36\x37\x30\x39\x30\x34\x39\x41\x32\x33\x41\x37\x33\x36\x35\x32\x38\x44\x42\x44\x35\x44\x37\x44\x43\x36\x30\x43\x46\x42\x42\x31","\x20\x68\x35\u4EFB\u52A1\u72B6\u6001\u3011\x3A\x20\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\x6C\x69\x73\x74\x65\x6E\x5F\x74\x6F\x5F\x73\x6F\x6E\x67\x73\x5F\x6F\x6E\x65","\x66\x75\x6C\x69\x4D\x75\x73\x69\x63\x4F\x76\x65\x72","\x6C\x69\x73\x74\x65\x6E\x5F\x74\x6F\x5F\x73\x6F\x6E\x67\x73\x5F\x74\x77\x6F","\x6C\x69\x73\x74\x65\x6E\x5F\x74\x6F\x5F\x73\x6F\x6E\x67\x73\x5F\x74\x68\x72\x65\x65","\x6C\x69\x73\x74\x65\x6E\x5F\x6D\x75\x73\x69\x63\x5F\x72\x65\x77\x61\x72\x64","\x73\x70\x65\x63\x69\x61\x6C\x5F\x70\x72\x6F\x67\x72\x65\x73\x73","\x73\x70\x65\x63\x69\x61\x6C","\x73\x74\x61\x74\x75\x73","\x69\x64","\x61\x64\x5F\x76\x69\x64\x65\x6F\x5F\x62\x69\x67","\x76\x69\x64\x65\x6F\x5F\x6E\x6F\x77","\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31","\x77\x65\x6C\x66\x61\x72\x65\x54\x61\x73\x6B\x41\x64\x56\x69\x64\x65\x6F\x42\x69\x67","\x76\x69\x64\x65\x6F\x5F\x62\x69\x67","\x77\x61\x74\x63\x68\x5F\x61\x64\x5F\x76\x69\x64\x65\x6F\x5F\x33","\x77\x65\x6C\x66\x61\x72\x65\x5F\x77\x61\x74\x63\x68\x5F\x76\x69\x64\x65\x6F","\x76","\x66\x75\x6C\x69\x57\x61\x74\x63\x68\x41\x64\x56\x69\x64\x65\x6F\x4F\x76\x65\x72","\x20\x68\x35\u4EFB\u52A1\u72B6\u6001\u3011\x3A\x20","\x77\x65\x6C\x66\x61\x72\x65\x2F\x47\x65\x74\x41\x64\x56\x69\x64\x65\x6F\x42\x69\x67\x52\x65\x77\x61\x72\x64","\x74\x61\x73\x6B\x54\x79\x70\x65\x3D","\x26\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D","\x26\x63\x6C\x69\x65\x6E\x74\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x70\x72\x6F\x6A\x3D\x6B\x75\x61\x69\x79\x69\x6E\x5F\x68\x35\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x41\x6E\x64\x72\x6F\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5F\x73\x6F\x75\x72\x63\x65\x3D\x61\x70\x70\x26\x74\x3D\x31\x36\x34\x34\x34\x32\x38\x30\x31\x35\x39\x37\x39\x26\x73\x3D\x61\x70\x70\x6C\x65\x25\x37\x43\x35\x32\x43\x36\x43\x43\x42\x36\x43\x31\x41\x43\x43\x32\x41\x34\x31\x30\x34\x43\x31\x32\x44\x36\x41\x38\x33\x41\x39\x43\x43\x31\x44\x33\x31\x36\x46\x36\x36\x32\x41\x34\x33\x33\x34\x41\x30\x32\x35\x38\x42\x46\x41\x43\x46\x35\x42\x41\x42\x43\x39\x32\x31\x41","\x20","\u4EFB\u52A1\u5956\u52B1\u3011\x3A\x20\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\u4EFB\u52A1\u5956\u52B1\u3011\x3A\x20\u606D\u559C\u83B7\u5F97\x20","\x72\x65\x77\x61\x72\x64\x5F\x61\x6D\x6F\x75\x6E\x74","\u4EFB\u52A1\u5956\u52B1\u3011\x3A\x20","\x61\x70\x70\x5F\x69\x64\x3D\x31\x26\x61\x64\x5F\x67\x72\x6F\x75\x70\x5F\x69\x64\x3D\x33\x26\x69\x64\x3D\x36\x26\x73\x64\x6B\x5F\x76\x65\x72\x73\x69\x6F\x6E\x3D\x32\x2E\x35\x2E\x30\x26\x65\x78\x74\x5F\x70\x61\x72\x61\x6D\x73\x3D\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x36\x32\x39\x36\x31\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6B\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x77\x65\x6C\x66\x61\x72\x65\x5F\x77\x61\x74\x63\x68\x5F\x76\x69\x64\x65\x6F\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41\x32\x30\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5F\x70\x6F\x73\x69\x74\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31\x25\x32\x32\x25\x37\x44\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x41\x6E\x64\x72\x6F\x69\x64\x26\x63\x6C\x69\x65\x6E\x74\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x61\x70\x70\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x74\x3D\x31\x36\x34\x34\x35\x30\x31\x37\x32\x35\x36\x33\x36\x26\x73\x3D\x6D\x61\x6E\x67\x6F\x25\x37\x43\x34\x39\x41\x42\x30\x33\x44\x31\x32\x44\x45\x36\x41\x31\x38\x36\x37\x33\x38\x33\x36\x32\x42\x39\x36\x32\x42\x34\x34\x41\x33\x39\x37\x45\x37\x44\x33\x30\x35\x37\x34\x45\x39\x34\x36\x39\x42\x45\x45\x33\x41\x39\x36\x38\x42\x37\x35\x43\x39\x38\x45\x44\x44\x34","\x61\x70\x70\x5F\x69\x64\x3D\x31\x26\x61\x64\x5F\x67\x72\x6F\x75\x70\x5F\x69\x64\x3D\x31\x26\x69\x64\x3D\x32\x26\x73\x64\x6B\x5F\x76\x65\x72\x73\x69\x6F\x6E\x3D\x32\x2E\x35\x2E\x30\x26\x65\x78\x74\x5F\x70\x61\x72\x61\x6D\x73\x3D\x25\x37\x42\x25\x32\x32\x74\x61\x73\x6B\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x73\x69\x67\x6E\x5F\x69\x6E\x5F\x61\x70\x70\x5F\x78\x5F\x76\x69\x64\x65\x6F\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x39\x35\x38\x30\x37\x36\x39\x32\x37\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x35\x38\x34\x36\x34\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5F\x70\x6F\x73\x69\x74\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x73\x69\x67\x6E\x5F\x69\x6E\x5F\x61\x70\x70\x5F\x78\x5F\x76\x69\x64\x65\x6F\x25\x32\x32\x25\x37\x44\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x41\x6E\x64\x72\x6F\x69\x64\x26\x63\x6C\x69\x65\x6E\x74\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x61\x70\x70\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x74\x3D\x31\x36\x34\x34\x35\x37\x32\x30\x31\x32\x31\x38\x32\x26\x73\x3D\x61\x70\x70\x6C\x65\x25\x37\x43\x32\x30\x43\x33\x45\x42\x46\x44\x37\x34\x46\x46\x34\x42\x30\x42\x36\x43\x35\x32\x42\x44\x43\x37\x41\x44\x44\x30\x35\x41\x41\x39\x33\x31\x44\x41\x36\x43\x32\x44\x46\x31\x30\x46\x44\x30\x36\x36\x33\x33\x45\x31\x35\x46\x34\x43\x37\x45\x30\x42\x44\x45\x35\x31","\x61\x70\x70\x5F\x69\x64\x3D\x31\x26\x61\x64\x5F\x67\x72\x6F\x75\x70\x5F\x69\x64\x3D\x36\x26\x69\x64\x3D\x33\x26\x73\x64\x6B\x5F\x76\x65\x72\x73\x69\x6F\x6E\x3D\x32\x2E\x35\x2E\x30\x26\x65\x78\x74\x5F\x70\x61\x72\x61\x6D\x73\x3D\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x36\x32\x39\x36\x31\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6B\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32","\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5F\x70\x6F\x73\x69\x74\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32","\x25\x32\x32\x25\x37\x44\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x41\x6E\x64\x72\x6F\x69\x64\x26\x63\x6C\x69\x65\x6E\x74\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x61\x70\x70\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x74\x3D\x31\x36\x34\x34\x35\x30\x32\x34\x33\x34\x30\x33\x38\x26\x73\x3D\x61\x70\x70\x6C\x65\x25\x37\x43\x33\x39\x32\x41\x37\x41\x45\x33\x32\x46\x41\x34\x38\x42\x37\x35\x36\x35\x44\x46\x46\x41\x32\x35\x44\x39\x46\x34\x32\x36\x46\x45\x44\x38\x31\x41\x36\x41\x31\x32\x33\x33\x45\x35\x44\x32\x39\x42\x33\x46\x35\x38\x37\x42\x38\x46\x39\x38\x32\x32\x45\x38\x33\x37","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6B\x61\x69\x78\x69\x6E\x79\x66\x2E\x63\x6E\x2F\x61\x64\x5F\x70\x6C\x61\x74\x66\x6F\x72\x6D\x2F\x63\x61\x6C\x6C\x62\x61\x63\x6B","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x67\x7A\x69\x70","\x6F\x6B\x68\x74\x74\x70\x2F\x33\x2E\x31\x34\x2E\x34","\x41\x6E\x64\x72\x6F\x69\x64","\x35\x2E\x30\x33\x2E\x30\x33","\x6B\x75\x61\x69\x79\x69\x6E\x2F\x35\x2E\x30\x33\x2E\x30\x33\x20\x28\x61\x6E\x64\x72\x6F\x69\x64\x2F\x31\x31\x29\x20\x6F\x6B\x56\x65\x72\x73\x69\x6F\x6E\x2F\x6F\x6B\x68\x74\x74\x70\x2F\x33\x2E\x31\x34\x2E\x34","\u3011\x3A\x20\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\u3011\x3A\x20","\x69\x64\x3D","\x77\x65\x6C\x66\x61\x72\x65\x2F\x47\x65\x74\x52\x65\x77\x61\x72\x64","\u5956\u52B1\u3011\x3A\x20\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\u5956\u52B1\u3011\x3A\x20\u606D\u559C\u83B7\u5F97\x20","\u5956\u52B1\u3011\x3A\x20","\x63\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x52\x65\x77\x61\x72\x64\x4D\x6F\x64\x75\x6C\x65","\x74\x79\x70\x65\x3D\x63\x75\x73\x74\x6F\x6D\x69\x7A\x65\x26\x72\x65\x77\x61\x72\x64\x54\x79\x70\x65\x3D\x63\x6F\x69\x6E\x26\x62\x75\x73\x69\x6E\x65\x73\x73\x4E\x61\x6D\x65\x3D","\x26\x63\x6C\x69\x65\x6E\x74\x5F\x76\x3D\x35\x2E\x30\x33\x2E\x30\x33\x26\x70\x72\x6F\x6A\x3D\x6B\x75\x61\x69\x79\x69\x6E\x5F\x68\x35\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x41\x6E\x64\x72\x6F\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5F\x73\x6F\x75\x72\x63\x65\x3D\x61\x70\x70\x26\x74\x3D\x31\x36\x34\x34\x34\x32\x39\x37\x33\x34\x38\x31\x39\x26\x73\x3D\x6D\x61\x6E\x67\x6F\x25\x37\x43\x37\x33\x43\x43\x46\x33\x43\x44\x39\x36\x43\x36\x36\x32\x42\x30\x33\x30\x44\x39\x37\x34\x42\x37\x44\x38\x39\x33\x31\x37\x30\x33\x41\x38\x32\x42\x39\x38\x31\x30\x33\x42\x33\x43\x41\x32\x30\x45\x42\x43\x37\x32\x35\x35\x43\x41\x33\x30\x34\x38\x43\x39\x37\x30","\u7FFB\u500D\u5956\u52B1\u3011\x3A\x20\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\u7FFB\u500D\u5956\u52B1\u3011\x3A\x20\u606D\u559C\u83B7\u5F97\x20","\x76\x69\x64\x65\x6F\x52\x65\x77\x61\x72\x64","\u7FFB\u500D\u5956\u52B1\u3011\x3A\x20","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x67\x69","\x72\x65\x70\x6C\x61\x63\x65","\x77\x2B","\x77\x72\x69\x74\x65\x46\x69\x6C\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6B\x61\x69\x78\x69\x6E\x79\x66\x2E\x63\x6E\x2F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6B\x61\x69\x78\x69\x6E\x79\x66\x2E\x63\x6E\x2F\x56\x69\x64\x65\x6F\x4D\x75\x73\x69\x63\x2F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x35\x2E\x6B\x61\x69\x78\x69\x6E\x79\x66\x2E\x63\x6E\x2F\x61\x70\x69\x2F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x35\x2E\x6B\x61\x69\x78\x69\x6E\x79\x66\x2E\x63\x6E\x2F\x61\x70\x69\x2F\x77\x65\x6C\x66\x61\x72\x65\x2F\x67\x65\x74\x4C\x69\x73\x74\x65\x6E\x4D\x75\x73\x69\x63\x52\x65\x77\x61\x72\x64","\x55\x74\x66\x38","\x65\x6E\x63","\x45\x43\x42","\x6D\x6F\x64\x65","\x50\x6B\x63\x73\x37","\x70\x61\x64","\x65\x6E\x63\x72\x79\x70\x74","\x41\x45\x53","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const CryptoJS=require(__Oxd8d3c[0x0]);const fs=require(__Oxd8d3c[0x1]);const kyin_variable=$[__Oxd8d3c[0x2]]()?require(__Oxd8d3c[0x3]):__Oxd8d3c[0x4];let app_soy_kyin_data=[],soy_kyin_UA=__Oxd8d3c[0x4],preservation=__Oxd8d3c[0x4];if(kyin_variable[__Oxd8d3c[0x5]]!= 200){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x6]}`);return};!(async ()=>{console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0xc]}${ new Date( new Date()[__Oxd8d3c[0xe]]()+  new Date()[__Oxd8d3c[0xf]]()* 60* 1000+ 8* 60* 60* 1000)[__Oxd8d3c[0xd]]()}${__Oxd8d3c[0x10]}`);console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x11]}${kyin_variable[__Oxd8d3c[0x14]][__Oxd8d3c[0x13]][__Oxd8d3c[0x12]]}${__Oxd8d3c[0x15]}`);subTitle= __Oxd8d3c[0x4];for(i= 0;i< kyin_variable[__Oxd8d3c[0x14]][__Oxd8d3c[0x13]][__Oxd8d3c[0x12]];i++){let _0x7f7ax8=kyin_variable[__Oxd8d3c[0x14]][__Oxd8d3c[0x13]][i][__Oxd8d3c[0x17]](__Oxd8d3c[0x16]);if(_0x7f7ax8[__Oxd8d3c[0x12]]!= 3){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x18]}`);return}else {current= kyin_variable[__Oxd8d3c[0x14]][__Oxd8d3c[0x13]][i];device= _0x7f7ax8[0x0];access_token= _0x7f7ax8[0x1];refresh_token= _0x7f7ax8[0x2]};$[__Oxd8d3c[0x19]]= i+ 1;console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x1a]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x1b]}`); await implement()};if(notify){if(subTitle){ await notify[__Oxd8d3c[0x1d]]($[__Oxd8d3c[0x1c]],subTitle)}}})()[__Oxd8d3c[0xb]]((_0x7f7ax7)=>{return $[__Oxd8d3c[0xa]](_0x7f7ax7)})[__Oxd8d3c[0x9]](()=>{return $[__Oxd8d3c[0x8]]()});async function implement(){ await SendCoin(); await sign(); await GetWelfarePageTask(); await Time2Reward()}async function sign(){if( new Date()[__Oxd8d3c[0x1e]]()== 6&&  new Date()[__Oxd8d3c[0x1f]]()< 30){ await callback(__Oxd8d3c[0x20],__Oxd8d3c[0x20],__Oxd8d3c[0x21],__Oxd8d3c[0x22])}}function Time2Reward(){if( new Date()[__Oxd8d3c[0x1e]]()== 8||  new Date()[__Oxd8d3c[0x1e]]()== 9||  new Date()[__Oxd8d3c[0x1e]]()== 10||  new Date()[__Oxd8d3c[0x1e]]()== 11||  new Date()[__Oxd8d3c[0x1e]]()== 12||  new Date()[__Oxd8d3c[0x1e]]()== 13||  new Date()[__Oxd8d3c[0x1e]]()== 16||  new Date()[__Oxd8d3c[0x1e]]()== 18||  new Date()[__Oxd8d3c[0x1e]]()== 19||  new Date()[__Oxd8d3c[0x1e]]()== 20||  new Date()[__Oxd8d3c[0x1e]]()== 21){let _0x7f7axc=Post_request(`${__Oxd8d3c[0x23]}`,`${__Oxd8d3c[0x24]}`,0);return  new Promise((_0x7f7axd,_0x7f7axe)=>{$[__Oxd8d3c[0x2a]](_0x7f7axc,async (_0x7f7axf,_0x7f7ax10,_0x7f7ax11)=>{try{if(_0x7f7axf){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x26]}`);subTitle+= `${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x26]}`}else {let _0x7f7ax12=JSON[__Oxd8d3c[0x27]](_0x7f7ax11);if(_0x7f7ax12[__Oxd8d3c[0x5]]== 0){}else {console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x28]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}}}catch(e){console[__Oxd8d3c[0x7]](e,_0x7f7ax10)}finally{_0x7f7axd()}})})}}function SendCoin(){let _0x7f7axc=Post_request(`${__Oxd8d3c[0x2b]}`,`${__Oxd8d3c[0x2c]}`,1);return  new Promise((_0x7f7axd,_0x7f7axe)=>{$[__Oxd8d3c[0x2a]](_0x7f7axc,async (_0x7f7axf,_0x7f7ax10,_0x7f7ax11)=>{try{if(_0x7f7axf){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x2d]}`);subTitle+= `${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x2d]}`}else {let _0x7f7ax12=JSON[__Oxd8d3c[0x27]](_0x7f7ax11);if(_0x7f7ax12[__Oxd8d3c[0x5]]== 0){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x2e]}${_0x7f7ax12[__Oxd8d3c[0x30]][__Oxd8d3c[0x2f]]}${__Oxd8d3c[0x31]}`)}else {if(_0x7f7ax12[__Oxd8d3c[0x5]]== 10005){ await get_token()}else {console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x32]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}}}}catch(e){console[__Oxd8d3c[0x7]](e,_0x7f7ax10)}finally{_0x7f7axd()}})})}function get_token(){let _0x7f7axc=Post_request(`${__Oxd8d3c[0x33]}`,`${__Oxd8d3c[0x34]}${refresh_token}${__Oxd8d3c[0x35]}`,0);return  new Promise((_0x7f7axd,_0x7f7axe)=>{$[__Oxd8d3c[0x2a]](_0x7f7axc,async (_0x7f7axf,_0x7f7ax10,_0x7f7ax11)=>{try{if(_0x7f7axf){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x36]}`);subTitle+= `${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x36]}`}else {let _0x7f7ax12=JSON[__Oxd8d3c[0x27]](_0x7f7ax11);if(_0x7f7ax12[__Oxd8d3c[0x5]]== 0){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x37]}`);access_token= _0x7f7ax12[__Oxd8d3c[0x30]][__Oxd8d3c[0x38]];refresh_token= _0x7f7ax12[__Oxd8d3c[0x30]][__Oxd8d3c[0x39]]; await get_variable()}else {console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x3a]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}}}catch(e){console[__Oxd8d3c[0x7]](e,_0x7f7ax10)}finally{_0x7f7axd()}})})}function MyWelfare(){let _0x7f7axc=Post_request_h5(`${__Oxd8d3c[0x3b]}`,`${__Oxd8d3c[0x3c]}${access_token}${__Oxd8d3c[0x3d]}${device}${__Oxd8d3c[0x3e]}`);return  new Promise((_0x7f7axd,_0x7f7axe)=>{$[__Oxd8d3c[0x2a]](_0x7f7axc,async (_0x7f7axf,_0x7f7ax10,_0x7f7ax11)=>{try{if(_0x7f7axf){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x3f]}`);subTitle+= `${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x3f]}`}else {let _0x7f7ax12=JSON[__Oxd8d3c[0x27]](_0x7f7ax11);if(_0x7f7ax12[__Oxd8d3c[0x5]]== 0){for(let _0x7f7ax16 of _0x7f7ax12[__Oxd8d3c[0x30]][__Oxd8d3c[0x42]][0x2][__Oxd8d3c[0x41]][__Oxd8d3c[0x40]]){if(_0x7f7ax16[__Oxd8d3c[0x43]]== __Oxd8d3c[0x44]){if(_0x7f7ax16[__Oxd8d3c[0x45]]== 1){ await GetReward(__Oxd8d3c[0x46],_0x7f7ax16[__Oxd8d3c[0x47]]); await getRewardModule(__Oxd8d3c[0x48],_0x7f7ax16[__Oxd8d3c[0x47]])}};if(_0x7f7ax16[__Oxd8d3c[0x43]]== __Oxd8d3c[0x49]){if(_0x7f7ax16[__Oxd8d3c[0x45]]== 0){ await GetReward(__Oxd8d3c[0x46],_0x7f7ax16[__Oxd8d3c[0x47]]); await getRewardModule(__Oxd8d3c[0x48],_0x7f7ax16[__Oxd8d3c[0x47]])}};if(_0x7f7ax16[__Oxd8d3c[0x45]]== 0){ await GetReward(_0x7f7ax16[__Oxd8d3c[0x43]],_0x7f7ax16[__Oxd8d3c[0x47]])}}}else {console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x4a]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}}}catch(e){console[__Oxd8d3c[0x7]](e,_0x7f7ax10)}finally{_0x7f7axd()}})})}function GetWelfarePageTask(){let _0x7f7axc=Post_request_h5(`${__Oxd8d3c[0x4b]}`,`${__Oxd8d3c[0x4c]}${access_token}${__Oxd8d3c[0x4d]}${device}${__Oxd8d3c[0x4e]}`);return  new Promise((_0x7f7axd,_0x7f7axe)=>{$[__Oxd8d3c[0x2a]](_0x7f7axc,async (_0x7f7axf,_0x7f7ax10,_0x7f7ax11)=>{try{if(_0x7f7axf){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x4f]}`);subTitle+= `${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x4f]}`}else {let _0x7f7ax12=JSON[__Oxd8d3c[0x27]](_0x7f7ax11);if(_0x7f7ax12[__Oxd8d3c[0x5]]== 0){for(let _0x7f7ax16 of _0x7f7ax12[__Oxd8d3c[0x30]][__Oxd8d3c[0x40]]){if(_0x7f7ax16[__Oxd8d3c[0x43]]== __Oxd8d3c[0x46]){if(_0x7f7ax16[__Oxd8d3c[0x45]]== 1){ await GetReward(__Oxd8d3c[0x46],_0x7f7ax16[__Oxd8d3c[0x47]]); await getRewardModule(__Oxd8d3c[0x48],_0x7f7ax16[__Oxd8d3c[0x47]])}};if(_0x7f7ax16[__Oxd8d3c[0x43]]== __Oxd8d3c[0x50]){if(_0x7f7ax16[__Oxd8d3c[0x45]]== 1){ await GetReward(__Oxd8d3c[0x50],_0x7f7ax16[__Oxd8d3c[0x47]]); await getRewardModule(__Oxd8d3c[0x51],_0x7f7ax16[__Oxd8d3c[0x47]])}};if(_0x7f7ax16[__Oxd8d3c[0x43]]== __Oxd8d3c[0x52]){if(_0x7f7ax16[__Oxd8d3c[0x45]]== 1){ await GetReward(__Oxd8d3c[0x52],_0x7f7ax16[__Oxd8d3c[0x47]]); await getRewardModule(__Oxd8d3c[0x51],_0x7f7ax16[__Oxd8d3c[0x47]])}};if(_0x7f7ax16[__Oxd8d3c[0x43]]== __Oxd8d3c[0x53]){if(_0x7f7ax16[__Oxd8d3c[0x45]]== 1){ await GetReward(__Oxd8d3c[0x53],_0x7f7ax16[__Oxd8d3c[0x47]]); await getRewardModule(__Oxd8d3c[0x51],_0x7f7ax16[__Oxd8d3c[0x47]])}};if(_0x7f7ax16[__Oxd8d3c[0x43]]== __Oxd8d3c[0x54]){for(let _0x7f7ax18 of _0x7f7ax16[__Oxd8d3c[0x56]][__Oxd8d3c[0x55]]){if(_0x7f7ax18[__Oxd8d3c[0x57]]== 1){ await GetReward_music(_0x7f7ax18[__Oxd8d3c[0x58]],_0x7f7ax16[__Oxd8d3c[0x47]]); await getRewardModule(__Oxd8d3c[0x51],_0x7f7ax16[__Oxd8d3c[0x47]])}}};if(_0x7f7ax16[__Oxd8d3c[0x43]]== __Oxd8d3c[0x59]){if(_0x7f7ax16[__Oxd8d3c[0x56]][__Oxd8d3c[0x5a]]< 22){ await callback(__Oxd8d3c[0x59],__Oxd8d3c[0x5b],_0x7f7ax16[__Oxd8d3c[0x47]]); await getRewardModule(__Oxd8d3c[0x5c],_0x7f7ax16[__Oxd8d3c[0x47]]);for(let _0x7f7ax18 of _0x7f7ax16[__Oxd8d3c[0x56]][__Oxd8d3c[0x55]]){if(_0x7f7ax18[__Oxd8d3c[0x57]]== 1){ await GetAdVideoBigReward(__Oxd8d3c[0x5d],_0x7f7ax16[__Oxd8d3c[0x47]]); await getRewardModule(__Oxd8d3c[0x5c],_0x7f7ax16[__Oxd8d3c[0x47]])}}}};if(_0x7f7ax16[__Oxd8d3c[0x43]]== __Oxd8d3c[0x5e]){if(_0x7f7ax16[__Oxd8d3c[0x45]]== 0){ await callback(__Oxd8d3c[0x5f],__Oxd8d3c[0x5b],_0x7f7ax16[__Oxd8d3c[0x47]],__Oxd8d3c[0x60])}else {if(_0x7f7ax16[__Oxd8d3c[0x45]]== 1){ await GetReward(__Oxd8d3c[0x5e],_0x7f7ax16[__Oxd8d3c[0x47]]); await getRewardModule(__Oxd8d3c[0x61],_0x7f7ax16[__Oxd8d3c[0x47]])}}}}}else {console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x62]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}}}catch(e){console[__Oxd8d3c[0x7]](e,_0x7f7ax10)}finally{_0x7f7axd()}})})}function GetAdVideoBigReward(_0x7f7ax1a,_0x7f7ax1b){let _0x7f7axc=Post_request_h5(`${__Oxd8d3c[0x63]}`,`${__Oxd8d3c[0x64]}${_0x7f7ax1a}${__Oxd8d3c[0x65]}${access_token}${__Oxd8d3c[0x3d]}${device}${__Oxd8d3c[0x66]}`);return  new Promise((_0x7f7axd,_0x7f7axe)=>{$[__Oxd8d3c[0x2a]](_0x7f7axc,async (_0x7f7axf,_0x7f7ax10,_0x7f7ax11)=>{try{if(_0x7f7axf){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x68]}`);subTitle+= `${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x68]}`}else {let _0x7f7ax12=JSON[__Oxd8d3c[0x27]](_0x7f7ax11);if(_0x7f7ax12[__Oxd8d3c[0x5]]== 0){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x69]}${_0x7f7ax12[__Oxd8d3c[0x30]][__Oxd8d3c[0x6a]]}${__Oxd8d3c[0x31]}`)}else {console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x6b]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}}}catch(e){console[__Oxd8d3c[0x7]](e,_0x7f7ax10)}finally{_0x7f7axd()}})})}function callback(_0x7f7ax1d,_0x7f7ax1e,_0x7f7ax1b,_0x7f7ax1f){let _0x7f7ax20=__Oxd8d3c[0x4];if(_0x7f7ax1f== __Oxd8d3c[0x60]){_0x7f7ax20= `${__Oxd8d3c[0x6c]}`}else {if(_0x7f7ax1f== __Oxd8d3c[0x22]){_0x7f7ax20= `${__Oxd8d3c[0x6d]}`}else {_0x7f7ax20= `${__Oxd8d3c[0x6e]}${_0x7f7ax1d}${__Oxd8d3c[0x6f]}${_0x7f7ax1e}${__Oxd8d3c[0x70]}`}};let _0x7f7axc={url:__Oxd8d3c[0x71],headers:{"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxd8d3c[0x72],"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x6C\x65\x6E\x67\x74\x68":_0x7f7ax20[__Oxd8d3c[0x12]],"\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67":__Oxd8d3c[0x73],"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":__Oxd8d3c[0x74],"\x70\x6C\x61\x74\x66\x6F\x72\x6D":__Oxd8d3c[0x75],"\x63\x6C\x69\x65\x6E\x74\x2D\x76":__Oxd8d3c[0x76],"\x64\x65\x76\x69\x63\x65\x2D\x69\x64":device,"\x61\x63\x63\x65\x73\x73\x2D\x74\x6F\x6B\x65\x6E":access_token,"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":__Oxd8d3c[0x77]},body:_0x7f7ax20};return  new Promise((_0x7f7axd,_0x7f7axe)=>{$[__Oxd8d3c[0x2a]](_0x7f7axc,async (_0x7f7axf,_0x7f7ax10,_0x7f7ax11)=>{try{if(_0x7f7axf){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x78]}`);subTitle+= `${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x78]}`}else {let _0x7f7ax12=JSON[__Oxd8d3c[0x27]](_0x7f7ax11);if(_0x7f7ax12[__Oxd8d3c[0x5]]== 0){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x79]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}else {console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x79]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}}}catch(e){console[__Oxd8d3c[0x7]](e,_0x7f7ax10)}finally{_0x7f7axd()}})})}function GetReward_music(_0x7f7ax1a,_0x7f7ax1b){let _0x7f7axc=Post_request_m(`${__Oxd8d3c[0x7a]}${_0x7f7ax1a}${__Oxd8d3c[0x65]}${access_token}${__Oxd8d3c[0x3d]}${device}${__Oxd8d3c[0x66]}`);return  new Promise((_0x7f7axd,_0x7f7axe)=>{$[__Oxd8d3c[0x2a]](_0x7f7axc,async (_0x7f7axf,_0x7f7ax10,_0x7f7ax11)=>{try{if(_0x7f7axf){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x68]}`);subTitle+= `${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x68]}`}else {let _0x7f7ax12=JSON[__Oxd8d3c[0x27]](_0x7f7ax11);if(_0x7f7ax12[__Oxd8d3c[0x5]]== 0){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x69]}${_0x7f7ax12[__Oxd8d3c[0x30]][__Oxd8d3c[0x6a]]}${__Oxd8d3c[0x31]}`)}else {console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x6b]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}}}catch(e){console[__Oxd8d3c[0x7]](e,_0x7f7ax10)}finally{_0x7f7axd()}})})}function GetReward(_0x7f7ax1a,_0x7f7ax1b){let _0x7f7axc=Post_request_h5(`${__Oxd8d3c[0x7b]}`,`${__Oxd8d3c[0x64]}${_0x7f7ax1a}${__Oxd8d3c[0x65]}${access_token}${__Oxd8d3c[0x3d]}${device}${__Oxd8d3c[0x66]}`);return  new Promise((_0x7f7axd,_0x7f7axe)=>{$[__Oxd8d3c[0x2a]](_0x7f7axc,async (_0x7f7axf,_0x7f7ax10,_0x7f7ax11)=>{try{if(_0x7f7axf){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x7c]}`);subTitle+= `${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x7c]}`}else {let _0x7f7ax12=JSON[__Oxd8d3c[0x27]](_0x7f7ax11);if(_0x7f7ax12[__Oxd8d3c[0x5]]== 0){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x7d]}${_0x7f7ax12[__Oxd8d3c[0x30]][__Oxd8d3c[0x6a]]}${__Oxd8d3c[0x31]}`)}else {console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x7e]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}}}catch(e){console[__Oxd8d3c[0x7]](e,_0x7f7ax10)}finally{_0x7f7axd()}})})}function getRewardModule(_0x7f7ax24,_0x7f7ax1b){let _0x7f7axc=Post_request_h5(`${__Oxd8d3c[0x7f]}`,`${__Oxd8d3c[0x80]}${_0x7f7ax24}${__Oxd8d3c[0x65]}${access_token}${__Oxd8d3c[0x3d]}${device}${__Oxd8d3c[0x81]}`);return  new Promise((_0x7f7axd,_0x7f7axe)=>{$[__Oxd8d3c[0x2a]](_0x7f7axc,async (_0x7f7axf,_0x7f7ax10,_0x7f7ax11)=>{try{if(_0x7f7axf){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x82]}`);subTitle+= `${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x82]}`}else {let _0x7f7ax12=JSON[__Oxd8d3c[0x27]](_0x7f7ax11);if(_0x7f7ax12[__Oxd8d3c[0x5]]== 0){console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x83]}${_0x7f7ax12[__Oxd8d3c[0x30]][__Oxd8d3c[0x84]]}${__Oxd8d3c[0x31]}`)}else {console[__Oxd8d3c[0x7]](`${__Oxd8d3c[0x25]}${$[__Oxd8d3c[0x19]]}${__Oxd8d3c[0x67]}${_0x7f7ax1b}${__Oxd8d3c[0x85]}${_0x7f7ax12[__Oxd8d3c[0x29]]}${__Oxd8d3c[0x4]}`)}}}catch(e){console[__Oxd8d3c[0x7]](e,_0x7f7ax10)}finally{_0x7f7axd()}})})}function get_variable(){let _0x7f7ax26=fs[__Oxd8d3c[0x86]](__Oxd8d3c[0x3]).toString();variable_left= _0x7f7ax26[__Oxd8d3c[0x88]](0,_0x7f7ax26[__Oxd8d3c[0x87]](current));let _0x7f7ax27=_0x7f7ax26[__Oxd8d3c[0x12]]- variable_left[__Oxd8d3c[0x12]]- current[__Oxd8d3c[0x12]];variable_right= _0x7f7ax26[__Oxd8d3c[0x88]](_0x7f7ax26[__Oxd8d3c[0x12]]- _0x7f7ax27,_0x7f7ax26[__Oxd8d3c[0x12]]);let _0x7f7ax28=`${__Oxd8d3c[0x4]}${device}${__Oxd8d3c[0x16]}${access_token}${__Oxd8d3c[0x16]}${refresh_token}${__Oxd8d3c[0x4]}`;let preservation=_0x7f7ax26[__Oxd8d3c[0x8a]]( new RegExp(current,__Oxd8d3c[0x89]),_0x7f7ax28);fs[__Oxd8d3c[0x8c]](__Oxd8d3c[0x3],preservation,{flag:__Oxd8d3c[0x8b]},function(_0x7f7ax29){if(_0x7f7ax29){console[__Oxd8d3c[0x7]](_0x7f7ax29)}})}function Post_request(_0x7f7ax2b,_0x7f7ax2c,_0x7f7ax2d){if(_0x7f7ax2d== 0){host= __Oxd8d3c[0x8d]}else {host= __Oxd8d3c[0x8e]};return {url:`${__Oxd8d3c[0x4]}${host}${__Oxd8d3c[0x4]}${_0x7f7ax2b}${__Oxd8d3c[0x4]}`,headers:{"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxd8d3c[0x72],"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x6C\x65\x6E\x67\x74\x68":_0x7f7ax2c[__Oxd8d3c[0x12]],"\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67":__Oxd8d3c[0x73],"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":__Oxd8d3c[0x74],"\x70\x6C\x61\x74\x66\x6F\x72\x6D":__Oxd8d3c[0x75],"\x63\x6C\x69\x65\x6E\x74\x2D\x76":__Oxd8d3c[0x76],"\x64\x65\x76\x69\x63\x65\x2D\x69\x64":device,"\x61\x63\x63\x65\x73\x73\x2D\x74\x6F\x6B\x65\x6E":access_token,"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":__Oxd8d3c[0x77]},body:_0x7f7ax2c}}function Post_request_h5(_0x7f7ax2b,_0x7f7ax2c){let _0x7f7ax2f=`${__Oxd8d3c[0x8f]}${_0x7f7ax2b}${__Oxd8d3c[0x4]}`;return {url:_0x7f7ax2f,headers:{"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxd8d3c[0x72],"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x6C\x65\x6E\x67\x74\x68":_0x7f7ax2c[__Oxd8d3c[0x12]],"\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67":__Oxd8d3c[0x73],"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":__Oxd8d3c[0x74],"\x70\x6C\x61\x74\x66\x6F\x72\x6D":__Oxd8d3c[0x75],"\x63\x6C\x69\x65\x6E\x74\x2D\x76":__Oxd8d3c[0x76],"\x64\x65\x76\x69\x63\x65\x2D\x69\x64":device,"\x61\x63\x63\x65\x73\x73\x2D\x74\x6F\x6B\x65\x6E":access_token,"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":__Oxd8d3c[0x77]},body:_0x7f7ax2c}}function Post_request_m(_0x7f7ax2c){return {url:__Oxd8d3c[0x90],headers:{"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxd8d3c[0x72],"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x6C\x65\x6E\x67\x74\x68":_0x7f7ax2c[__Oxd8d3c[0x12]],"\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67":__Oxd8d3c[0x73],"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":__Oxd8d3c[0x74],"\x70\x6C\x61\x74\x66\x6F\x72\x6D":__Oxd8d3c[0x75],"\x63\x6C\x69\x65\x6E\x74\x2D\x76":__Oxd8d3c[0x76],"\x64\x65\x76\x69\x63\x65\x2D\x69\x64":device,"\x61\x63\x63\x65\x73\x73\x2D\x74\x6F\x6B\x65\x6E":access_token,"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":__Oxd8d3c[0x77]},body:_0x7f7ax2c}}function AES_Encrypt(_0x7f7ax32,_0x7f7ax33){let _0x7f7ax34=AES_DE[__Oxd8d3c[0x98]][__Oxd8d3c[0x97]](AES_DE[__Oxd8d3c[0x92]][__Oxd8d3c[0x91]][__Oxd8d3c[0x27]](_0x7f7ax32),AES_DE[__Oxd8d3c[0x92]][__Oxd8d3c[0x91]][__Oxd8d3c[0x27]](_0x7f7ax33),{mode:AES_DE[__Oxd8d3c[0x94]][__Oxd8d3c[0x93]],padding:AES_DE[__Oxd8d3c[0x96]][__Oxd8d3c[0x95]]});return _0x7f7ax34.toString()}(function(_0x7f7ax35,_0x7f7ax36,_0x7f7ax37,_0x7f7ax38,_0x7f7ax39,_0x7f7ax3a){_0x7f7ax3a= __Oxd8d3c[0x99];_0x7f7ax38= function(_0x7f7ax3b){if( typeof alert!== _0x7f7ax3a){alert(_0x7f7ax3b)};if( typeof console!== _0x7f7ax3a){console[__Oxd8d3c[0x7]](_0x7f7ax3b)}};_0x7f7ax37= function(_0x7f7ax3c,_0x7f7ax35){return _0x7f7ax3c+ _0x7f7ax35};_0x7f7ax39= _0x7f7ax37(__Oxd8d3c[0x9a],_0x7f7ax37(_0x7f7ax37(__Oxd8d3c[0x9b],__Oxd8d3c[0x9c]),__Oxd8d3c[0x9d]));try{_0x7f7ax35= __encode;if(!( typeof _0x7f7ax35!== _0x7f7ax3a&& _0x7f7ax35=== _0x7f7ax37(__Oxd8d3c[0x9e],__Oxd8d3c[0x9f]))){_0x7f7ax38(_0x7f7ax39)}}catch(e){_0x7f7ax38(_0x7f7ax39)}})({})



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