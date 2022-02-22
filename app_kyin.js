/*

安卓软件名称:快音

项目注册地址:https://landing.kaixinyf.cn/e30aze?invite_code=2S7B4S&_timestamp=1644398479&sign=15c82c2822432391d8402109a0762609&app_name=kuaiyin&device_id=1148692d61103e7c&client_v=5.03.03&platform=Android&platform_brand=blackshark&utm_source=xiaomi&um_from_appkey=5d91d0ed570df3d8ed000cb9&share_from=weixin&share_position=wuren

邀请码:2S7B4S或22F8Q3

声明：会有黑号还是黑设备的状态(账号异常)，注册后登录上去自行提现0.3元，如果能提现到账就可以跑脚本，不能你跑了也没啥用，到最后也提现不了

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


cron 0-59/10 6-20 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_kyin.js

*/


const $ = new Env('【快音】版本:22.02.12.0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';

var _0xodA='jsjiami.com.v6',_0xodA_=['_0xodA'],_0x13c0=[_0xodA,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x6f\x79\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x6b\x79\x69\x6e','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u8bf7\u52ff\u4e71\u4fee\u6539\u53d8\u91cf\u6587\u4ef6\u91cc\u9762\u5185\u5bb9','\x73\x70\x6c\x69\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x73\x69\x67\x6e\x5f\x69\x6e\x5f\x61\x70\x70\x5f\x78\x5f\x76\x69\x64\x65\x6f','\x68\x6f\x6d\x65\x2f\x54\x69\x6d\x65\x32\x52\x65\x77\x61\x72\x64','\x74\x3d\x31\x36\x34\x34\x35\x37\x31\x30\x34\x31\x33\x30\x31\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x31\x45\x31\x33\x32\x44\x31\x36\x38\x35\x42\x35\x30\x37\x35\x42\x43\x36\x39\x41\x36\x38\x43\x39\x37\x41\x34\x44\x36\x37\x31\x42\x39\x41\x43\x34\x46\x31\x36\x37\x35\x46\x38\x46\x39\x33\x41\x34\x39\x45\x31\x45\x32\x43\x43\x44\x45\x39\x45\x39\x42\x37\x36\x30','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u6574\u70b9\u7ea2\u5305\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u6574\u70b9\u7ea2\u5305\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x53\x65\x6e\x64\x43\x6f\x69\x6e','\x6d\x6f\x64\x65\x3d\x6d\x75\x73\x69\x63\x26\x6c\x65\x76\x65\x6c\x3d\x33\x35\x26\x75\x73\x65\x64\x5f\x66\x61\x73\x74\x5f\x74\x69\x6d\x65\x3d\x30\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x35\x34\x34\x38\x34\x33\x31\x39\x31\x32\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x33\x35\x44\x46\x38\x39\x42\x45\x31\x34\x30\x35\x43\x34\x41\x36\x36\x43\x34\x46\x41\x30\x46\x46\x44\x41\x35\x42\x38\x45\x30\x34\x39\x37\x39\x39\x35\x36\x34\x38\x31\x39\x45\x39\x33\x42\x30\x46\x43\x33\x42\x44\x36\x39\x31\x31\x38\x45\x45\x41\x32\x35\x46\x35','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x64\x61\x74\x61','\x74\x79\x70\x65','\x67\x6f\x6c\x64\x5f\x65\x67\x67','\u5408\u4e00\u91d1\u86cb','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u83b7\u5f97\x20','\x63\x6f\x69\x6e','\x20\u91d1\u5e01','\x20\u5237\u65f6\u957f\u3011\x3a\x20','\x4f\x70\x65\x6e\x47\x6f\x6c\x64\x45\x67\x67','\x6d\x6f\x64\x65\x3d\x6d\x75\x73\x69\x63\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x35\x34\x34\x37\x32\x36\x32\x30\x32\x34\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x42\x43\x43\x36\x42\x36\x41\x44\x36\x46\x41\x45\x31\x32\x45\x36\x36\x37\x39\x42\x38\x45\x30\x42\x33\x30\x36\x35\x38\x30\x30\x30\x37\x35\x45\x37\x35\x34\x44\x45\x41\x39\x43\x41\x36\x42\x31\x36\x31\x31\x35\x46\x38\x43\x30\x42\x42\x37\x42\x39\x37\x33\x46\x35','\x20\u91d1\u86cb\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x65\x77\x61\x72\x64\x5f\x6c\x69\x73\x74','\x74\x61\x73\x6b\x5f\x69\x64','\x20\u91d1\u86cb\u5956\u52b1\u3011\x3a\x20','\x44\x72\x61\x77\x4c\x6f\x74\x74\x65\x72\x79','\x74\x61\x73\x6b\x5f\x69\x64\x3d','\x26\x74\x79\x70\x65\x3d\x31\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x35\x34\x34\x37\x32\x36\x35\x34\x33\x33\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x32\x32\x44\x41\x42\x38\x30\x45\x45\x39\x36\x35\x36\x38\x32\x45\x35\x30\x34\x44\x33\x38\x35\x30\x35\x44\x46\x30\x42\x32\x39\x34\x32\x34\x35\x33\x31\x44\x31\x37\x42\x33\x39\x42\x34\x45\x32\x37\x42\x34\x43\x45\x42\x38\x39\x41\x38\x37\x45\x37\x42\x42\x46\x32','\x70\x61\x73\x73\x70\x6f\x72\x74\x2f\x67\x65\x74\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x34\x31\x39\x37\x35\x33\x33\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x45\x34\x31\x30\x39\x45\x45\x32\x34\x43\x35\x33\x41\x31\x46\x32\x45\x33\x38\x42\x36\x42\x32\x41\x41\x45\x36\x44\x46\x34\x38\x41\x44\x32\x43\x42\x43\x35\x41\x41\x42\x46\x38\x34\x37\x35\x36\x32\x30\x43\x39\x36\x44\x44\x35\x33\x31\x39\x31\x30\x46\x43\x38','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u6210\u529f\x2e\x2e\x2e','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x53\x69\x67\x6e\x49\x6e','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x75\x74\x6d\x2d\x73\x6f\x75\x72\x63\x65\x3d\x78\x69\x61\x6f\x6d\x69\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x38\x30\x31\x35\x39\x37\x39\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x32\x43\x36\x43\x43\x42\x36\x43\x31\x41\x43\x43\x32\x41\x34\x31\x30\x34\x43\x31\x32\x44\x36\x41\x38\x33\x41\x39\x43\x43\x31\x44\x33\x31\x36\x46\x36\x36\x32\x41\x34\x33\x33\x34\x41\x30\x32\x35\x38\x42\x46\x41\x43\x46\x35\x42\x41\x42\x43\x39\x32\x31\x41','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x72\x65\x77\x61\x72\x64\x5f\x6e\x75\x6d','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x57\x65\x6c\x66\x61\x72\x65\x50\x61\x67\x65\x49\x6e\x66\x6f','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x35\x37\x33\x34\x37\x34\x37\x31\x36\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x31\x30\x44\x41\x37\x39\x45\x42\x43\x37\x37\x35\x44\x33\x35\x46\x31\x46\x36\x44\x36\x31\x35\x39\x39\x38\x37\x45\x44\x34\x46\x30\x31\x44\x33\x30\x32\x38\x35\x45\x31\x41\x42\x36\x41\x44\x41\x38\x46\x32\x45\x31\x44\x30\x31\x46\x43\x39\x37\x46\x38\x41\x36\x34','\x20\u6211\u7684\u798f\u5229\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x73\x69\x67\x6e\x5f\x69\x6e\x66\x6f','\x63\x61\x6e\x5f\x73\x69\x67\x6e','\x74\x61\x73\x6b\x5f\x6c\x69\x73\x74','\x6e\x65\x77\x55\x73\x65\x72\x54\x61\x73\x6b','\x74\x61\x73\x6b\x5f\x74\x79\x70\x65','\x63\x6f\x6e\x74\x69\x6e\x75\x65\x5f\x6c\x6f\x67\x5f\x69\x6e\x5f\x31','\x70\x72\x6f\x67\x72\x65\x73\x73\x5f\x73\x74\x61\x74\x75\x73','\x74\x69\x74\x6c\x65','\x6f\x76\x65\x72\x42\x75\x73\x69\x6e\x65\x73\x73\x4e\x61\x6d\x65','\x77\x61\x74\x63\x68\x5f\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x31','\x77\x65\x6c\x66\x61\x72\x65\x5f\x77\x61\x74\x63\x68\x5f\x76\x69\x64\x65\x6f','\u798f\u5229\u4efb\u52a1\x5f\u89c6\u9891\u4efb\u52a1','\x66\x75\x6c\x69\x57\x61\x74\x63\x68\x41\x64\x56\x69\x64\x65\x6f\x4f\x76\x65\x72','\x64\x61\x69\x6c\x79\x54\x61\x73\x6b','\x20\u6211\u7684\u798f\u5229\u72b6\u6001\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x57\x65\x6c\x66\x61\x72\x65\x50\x61\x67\x65\x54\x61\x73\x6b','\x70\x61\x67\x65\x3d\x72\x65\x64\x5f\x70\x61\x63\x6b\x61\x67\x65\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x36\x31\x36\x39\x32\x37\x30\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x32\x34\x30\x37\x36\x33\x44\x41\x35\x33\x36\x43\x30\x44\x33\x46\x38\x38\x33\x34\x34\x41\x42\x45\x35\x32\x44\x37\x45\x43\x38\x42\x36\x37\x30\x39\x30\x34\x39\x41\x32\x33\x41\x37\x33\x36\x35\x32\x38\x44\x42\x44\x35\x44\x37\x44\x43\x36\x30\x43\x46\x42\x42\x31','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x63\x6f\x6e\x74\x69\x6e\x75\x65\x5f\x6c\x6f\x67\x5f\x69\x6e\x5f\x33','\x72\x65\x64\x70\x61\x63\x6b\x61\x67\x65\x4c\x6f\x67\x6f\x6e','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x6f\x6e\x65','\x66\x75\x6c\x69\x4d\x75\x73\x69\x63\x4f\x76\x65\x72','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x77\x6f','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x68\x72\x65\x65','\x6c\x69\x73\x74\x65\x6e\x5f\x6d\x75\x73\x69\x63\x5f\x72\x65\x77\x61\x72\x64','\x73\x70\x65\x63\x69\x61\x6c','\x73\x70\x65\x63\x69\x61\x6c\x5f\x70\x72\x6f\x67\x72\x65\x73\x73','\x73\x74\x61\x74\x75\x73','\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x76\x69\x64\x65\x6f\x5f\x6e\x6f\x77','\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31','\x77\x65\x6c\x66\x61\x72\x65\x54\x61\x73\x6b\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67','\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x77\x61\x74\x63\x68\x5f\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x33','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67\x52\x65\x77\x61\x72\x64','\x74\x61\x73\x6b\x54\x79\x70\x65\x3d','\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x72\x65\x77\x61\x72\x64\x5f\x61\x6d\x6f\x75\x6e\x74','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x33\x26\x69\x64\x3d\x36\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x36\x32\x39\x36\x31\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x77\x65\x6c\x66\x61\x72\x65\x5f\x77\x61\x74\x63\x68\x5f\x76\x69\x64\x65\x6f\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41\x32\x30\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x35\x30\x31\x37\x32\x35\x36\x33\x36\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x34\x39\x41\x42\x30\x33\x44\x31\x32\x44\x45\x36\x41\x31\x38\x36\x37\x33\x38\x33\x36\x32\x42\x39\x36\x32\x42\x34\x34\x41\x33\x39\x37\x45\x37\x44\x33\x30\x35\x37\x34\x45\x39\x34\x36\x39\x42\x45\x45\x33\x41\x39\x36\x38\x42\x37\x35\x43\x39\x38\x45\x44\x44\x34','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x31\x26\x69\x64\x3d\x32\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x73\x69\x67\x6e\x5f\x69\x6e\x5f\x61\x70\x70\x5f\x78\x5f\x76\x69\x64\x65\x6f\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x39\x35\x38\x30\x37\x36\x39\x32\x37\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x35\x38\x34\x36\x34\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x73\x69\x67\x6e\x5f\x69\x6e\x5f\x61\x70\x70\x5f\x78\x5f\x76\x69\x64\x65\x6f\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x35\x37\x32\x30\x31\x32\x31\x38\x32\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x32\x30\x43\x33\x45\x42\x46\x44\x37\x34\x46\x46\x34\x42\x30\x42\x36\x43\x35\x32\x42\x44\x43\x37\x41\x44\x44\x30\x35\x41\x41\x39\x33\x31\x44\x41\x36\x43\x32\x44\x46\x31\x30\x46\x44\x30\x36\x36\x33\x33\x45\x31\x35\x46\x34\x43\x37\x45\x30\x42\x44\x45\x35\x31','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x36\x26\x69\x64\x3d\x33\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x67\x6f\x6c\x64\x5f\x65\x67\x67\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41\x39\x25\x32\x43\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x36\x32\x30\x32\x35\x36\x38\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x45\x35\x25\x39\x30\x25\x38\x38\x25\x45\x34\x25\x42\x38\x25\x38\x30\x25\x45\x39\x25\x38\x37\x25\x39\x31\x25\x45\x38\x25\x39\x42\x25\x38\x42\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x35\x34\x34\x37\x33\x30\x30\x30\x36\x39\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x35\x34\x45\x43\x38\x38\x37\x36\x45\x42\x45\x36\x38\x32\x34\x41\x44\x38\x39\x41\x37\x31\x34\x37\x32\x43\x46\x37\x30\x34\x42\x42\x43\x46\x42\x35\x35\x36\x34\x45\x39\x44\x43\x45\x41\x33\x39\x34\x37\x38\x37\x37\x35\x30\x38\x32\x37\x38\x37\x32\x31\x38\x30\x33','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x36\x26\x69\x64\x3d\x33\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x36\x32\x39\x36\x31\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x35\x30\x32\x34\x33\x34\x30\x33\x38\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x33\x39\x32\x41\x37\x41\x45\x33\x32\x46\x41\x34\x38\x42\x37\x35\x36\x35\x44\x46\x46\x41\x32\x35\x44\x39\x46\x34\x32\x36\x46\x45\x44\x38\x31\x41\x36\x41\x31\x32\x33\x33\x45\x35\x44\x32\x39\x42\x33\x46\x35\x38\x37\x42\x38\x46\x39\x38\x32\x32\x45\x38\x33\x37','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x64\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x2f\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\x41\x6e\x64\x72\x6f\x69\x64','\x35\x2e\x30\x33\x2e\x30\x33','\x6b\x75\x61\x69\x79\x69\x6e\x2f\x35\x2e\x30\x33\x2e\x30\x33\x20\x28\x61\x6e\x64\x72\x6f\x69\x64\x2f\x31\x31\x29\x20\x6f\x6b\x56\x65\x72\x73\x69\x6f\x6e\x2f\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20','\x69\x64\x3d','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x52\x65\x77\x61\x72\x64','\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\u5956\u52b1\u3011\x3a\x20','\x63\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x52\x65\x77\x61\x72\x64\x4d\x6f\x64\x75\x6c\x65','\x74\x79\x70\x65\x3d\x63\x75\x73\x74\x6f\x6d\x69\x7a\x65\x26\x72\x65\x77\x61\x72\x64\x54\x79\x70\x65\x3d\x63\x6f\x69\x6e\x26\x62\x75\x73\x69\x6e\x65\x73\x73\x4e\x61\x6d\x65\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x39\x37\x33\x34\x38\x31\x39\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x37\x33\x43\x43\x46\x33\x43\x44\x39\x36\x43\x36\x36\x32\x42\x30\x33\x30\x44\x39\x37\x34\x42\x37\x44\x38\x39\x33\x31\x37\x30\x33\x41\x38\x32\x42\x39\x38\x31\x30\x33\x42\x33\x43\x41\x32\x30\x45\x42\x43\x37\x32\x35\x35\x43\x41\x33\x30\x34\x38\x43\x39\x37\x30','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x76\x69\x64\x65\x6f\x52\x65\x77\x61\x72\x64','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x69\x6e\x64\x65\x78\x4f\x66','\x72\x65\x70\x6c\x61\x63\x65','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x56\x69\x64\x65\x6f\x4d\x75\x73\x69\x63\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f\x77\x65\x6c\x66\x61\x72\x65\x2f\x67\x65\x74\x4c\x69\x73\x74\x65\x6e\x4d\x75\x73\x69\x63\x52\x65\x77\x61\x72\x64','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x45\x43\x42','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x6b\x6a\x73\x55\x67\x6e\x6a\x69\x61\x68\x6d\x69\x2e\x57\x63\x74\x46\x64\x4d\x49\x6f\x4f\x6e\x44\x6d\x7a\x2e\x76\x36\x3d\x3d'];function _0x5f1f(_0x751722,_0x3d0bf0){_0x751722=~~'0x'['concat'](_0x751722['slice'](0x0));var _0x5a54cb=_0x13c0[_0x751722];return _0x5a54cb;};(function(_0x5a7072,_0x249833){var _0x53780f=0x0;for(_0x249833=_0x5a7072['shift'](_0x53780f>>0x2);_0x249833&&_0x249833!==(_0x5a7072['pop'](_0x53780f>>0x3)+'')['replace'](/[kUgnhWtFdMIOnDz=]/g,'');_0x53780f++){_0x53780f=_0x53780f^0xd27a5;}}(_0x13c0,_0x5f1f));const CryptoJS=require(_0x5f1f('0'));const fs=require('\x66\x73');const kyin_variable=$[_0x5f1f('1')]()?require(_0x5f1f('2')):'';let app_soy_kyin_data=[],soy_kyin_UA='',preservation='';!(async()=>{console[_0x5f1f('3')](_0x5f1f('4')+new Date(new Date()[_0x5f1f('5')]()+new Date()[_0x5f1f('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5f1f('7')]()+_0x5f1f('8'));console[_0x5f1f('3')](_0x5f1f('9')+kyin_variable[_0x5f1f('a')][_0x5f1f('b')][_0x5f1f('c')]+_0x5f1f('d'));if(kyin_variable[_0x5f1f('e')]!=0xc8){console[_0x5f1f('3')](_0x5f1f('f'));return;}subTitle='';for(i=0x0;i<kyin_variable[_0x5f1f('a')][_0x5f1f('b')][_0x5f1f('c')];i++){let _0x503f79=kyin_variable[_0x5f1f('a')][_0x5f1f('b')][i][_0x5f1f('10')]('\x26');if(_0x503f79[_0x5f1f('c')]!=0x3){console[_0x5f1f('3')](_0x5f1f('11'));return;}else{current=kyin_variable[_0x5f1f('a')][_0x5f1f('b')][i];device=_0x503f79[0x0];access_token=_0x503f79[0x1];refresh_token=_0x503f79[0x2];}$[_0x5f1f('12')]=i+0x1;console[_0x5f1f('3')](_0x5f1f('13')+$[_0x5f1f('12')]+_0x5f1f('14'));await implement();};if(notify){if(subTitle){await notify[_0x5f1f('15')]($[_0x5f1f('16')],subTitle);}}})()[_0x5f1f('17')](_0xa436ef=>$[_0x5f1f('18')](_0xa436ef))[_0x5f1f('19')](()=>$[_0x5f1f('1a')]());async function implement(){await SendCoin();await sign();await GetWelfarePageTask();await Time2Reward();await MyWelfare();}async function sign(){if(new Date()[_0x5f1f('1b')]()==0x6&&new Date()[_0x5f1f('1c')]()<0x1e){await callback(_0x5f1f('1d'),_0x5f1f('1d'),'\u7b7e\u5230','\x73');}}function Time2Reward(){if(new Date()[_0x5f1f('1b')]()==0x8||new Date()[_0x5f1f('1b')]()==0x9||new Date()[_0x5f1f('1b')]()==0xa||new Date()[_0x5f1f('1b')]()==0xb||new Date()[_0x5f1f('1b')]()==0xc||new Date()[_0x5f1f('1b')]()==0xd||new Date()[_0x5f1f('1b')]()==0x10||new Date()[_0x5f1f('1b')]()==0x12||new Date()[_0x5f1f('1b')]()==0x13||new Date()[_0x5f1f('1b')]()==0x14||new Date()[_0x5f1f('1b')]()==0x15){let _0x368edd=Post_request(_0x5f1f('1e'),_0x5f1f('1f'),0x0);return new Promise((_0x5916f6,_0x4254d9)=>{$[_0x5f1f('20')](_0x368edd,async(_0x327c8d,_0x56414d,_0x2a9ee3)=>{try{if(_0x327c8d){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('22'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('22');}else{let _0x1162ef=JSON[_0x5f1f('23')](_0x2a9ee3);if(_0x1162ef[_0x5f1f('e')]==0x0){}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('24')+_0x1162ef[_0x5f1f('25')]);}}}catch(_0x430899){console[_0x5f1f('3')](_0x430899,_0x56414d);}finally{_0x5916f6();}});});}}function SendCoin(){let _0x4e192e=Post_request(_0x5f1f('26'),_0x5f1f('27'),0x1);return new Promise((_0x2719dd,_0x2582f6)=>{$[_0x5f1f('20')](_0x4e192e,async(_0x4c0501,_0x168784,_0x41e21c)=>{try{if(_0x4c0501){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('28'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('28');}else{let _0x31b581=JSON[_0x5f1f('23')](_0x41e21c);if(_0x31b581[_0x5f1f('e')]==0x0){if(_0x31b581[_0x5f1f('29')][_0x5f1f('2a')]==_0x5f1f('2b')){await OpenGoldEgg();await callback('','',_0x5f1f('2c'),'\x65');}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('2d')+_0x31b581[_0x5f1f('29')][_0x5f1f('2e')]+_0x5f1f('2f'));}}else if(_0x31b581[_0x5f1f('e')]==0x2715){await get_token();}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('30')+_0x31b581[_0x5f1f('25')]);}}}catch(_0x5e2813){console[_0x5f1f('3')](_0x5e2813,_0x168784);}finally{_0x2719dd();}});});}function OpenGoldEgg(){let _0xce842b=Post_request(_0x5f1f('31'),_0x5f1f('32'),0x1);return new Promise((_0x34c280,_0x5d99da)=>{$[_0x5f1f('20')](_0xce842b,async(_0x48218e,_0xae1d2f,_0x5580fb)=>{try{if(_0x48218e){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('33'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('33');}else{let _0x3c85e1=JSON[_0x5f1f('23')](_0x5580fb);if(_0x3c85e1[_0x5f1f('e')]==0x0){await DrawLottery(_0x3c85e1[_0x5f1f('29')][_0x5f1f('34')][_0x5f1f('35')]);}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('36')+_0x3c85e1[_0x5f1f('25')]);}}}catch(_0x740a2e){console[_0x5f1f('3')](_0x740a2e,_0xae1d2f);}finally{_0x34c280();}});});}function DrawLottery(_0x3cf7c0){let _0x584d4c=Post_request(_0x5f1f('37'),_0x5f1f('38')+_0x3cf7c0+_0x5f1f('39'),0x1);return new Promise((_0x28fd44,_0x3a114f)=>{$[_0x5f1f('20')](_0x584d4c,async(_0x4d26cf,_0x409335,_0x4004e4)=>{try{if(_0x4d26cf){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('33'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('33');}else{let _0x276d1f=JSON[_0x5f1f('23')](_0x4004e4);if(_0x276d1f[_0x5f1f('e')]==0x0){_0x3cf7c0=_0x276d1f[_0x5f1f('29')][_0x5f1f('34')][_0x5f1f('35')];await callback('','',_0x5f1f('2c'),'\x65');}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('36')+_0x276d1f[_0x5f1f('25')]);}}}catch(_0x23788b){console[_0x5f1f('3')](_0x23788b,_0x409335);}finally{_0x28fd44();}});});}function get_token(){let _0x398c3e=Post_request(_0x5f1f('3a'),_0x5f1f('3b')+refresh_token+_0x5f1f('3c'),0x0);return new Promise((_0xda814,_0x3b1f88)=>{$[_0x5f1f('20')](_0x398c3e,async(_0x5edfa0,_0x4c36c9,_0x3e5a95)=>{try{if(_0x5edfa0){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('3d'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('3d');}else{let _0x32d979=JSON[_0x5f1f('23')](_0x3e5a95);if(_0x32d979[_0x5f1f('e')]==0x0){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('3e'));access_token=_0x32d979[_0x5f1f('29')][_0x5f1f('3f')];refresh_token=_0x32d979[_0x5f1f('29')][_0x5f1f('40')];await get_variable();}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('41')+_0x32d979[_0x5f1f('25')]);}}}catch(_0x1f9446){console[_0x5f1f('3')](_0x1f9446,_0x4c36c9);}finally{_0xda814();}});});}function SignIn(_0x3d3d6d){let _0x56b2fc=Post_request_h5(_0x5f1f('42'),_0x5f1f('43')+access_token+_0x5f1f('44')+device+_0x5f1f('45'));return new Promise((_0x30c223,_0x2f775b)=>{$[_0x5f1f('20')](_0x56b2fc,async(_0x1ab02c,_0x2cd727,_0x3320b0)=>{try{if(_0x1ab02c){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x3d3d6d+_0x5f1f('46'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x3d3d6d+_0x5f1f('46');}else{let _0x45ce6b=JSON[_0x5f1f('23')](_0x3320b0);if(_0x45ce6b[_0x5f1f('e')]==0x0){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x3d3d6d+_0x5f1f('47')+_0x45ce6b[_0x5f1f('29')][_0x5f1f('48')]+_0x5f1f('2f'));}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x3d3d6d+_0x5f1f('49')+_0x45ce6b[_0x5f1f('25')]);}}}catch(_0x1b93fa){console[_0x5f1f('3')](_0x1b93fa,_0x2cd727);}finally{_0x30c223();}});});}function MyWelfare(){let _0x5404de=Post_request_h5(_0x5f1f('4a'),_0x5f1f('43')+access_token+_0x5f1f('44')+device+_0x5f1f('4b'));return new Promise((_0x1d0548,_0x36433f)=>{$[_0x5f1f('20')](_0x5404de,async(_0x30e2b1,_0x7b9f5d,_0x305b31)=>{try{if(_0x30e2b1){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('4c'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('4c');}else{let _0x468c9e=JSON[_0x5f1f('23')](_0x305b31);if(_0x468c9e[_0x5f1f('e')]==0x0){if(_0x468c9e[_0x5f1f('29')][_0x5f1f('4d')][_0x5f1f('4e')]==0x1){await SignIn('\u7b7e\u5230');}for(let _0x5d6827 of _0x468c9e[_0x5f1f('29')][_0x5f1f('4f')][_0x5f1f('50')]){if(_0x5d6827[_0x5f1f('51')]==_0x5f1f('52')){if(_0x5d6827[_0x5f1f('53')]==0x1){await GetReward(_0x5d6827[_0x5f1f('51')],_0x5d6827[_0x5f1f('54')]);await getRewardModule(_0x5d6827[_0x5f1f('55')],_0x5d6827[_0x5f1f('54')]);}}if(new Date()[_0x5f1f('1b')]()>0xb&&new Date()[_0x5f1f('1b')]()<0xd||new Date()[_0x5f1f('1b')]()>0x13&&new Date()[_0x5f1f('1b')]()<0x16){if(_0x5d6827[_0x5f1f('51')]==_0x5f1f('56')){if(_0x5d6827[_0x5f1f('53')]==0x0){await callback(_0x5f1f('57'),_0x5f1f('58'),_0x5d6827[_0x5f1f('54')],'\x76');}else if(_0x5d6827[_0x5f1f('53')]==0x1){await GetReward(_0x5f1f('56'),_0x5d6827[_0x5f1f('54')]);await getRewardModule(_0x5f1f('59'),_0x5d6827[_0x5f1f('54')]);}}}}for(let _0x2eacc8 of _0x468c9e[_0x5f1f('29')][_0x5f1f('4f')][_0x5f1f('5a')]){if(_0x2eacc8[_0x5f1f('53')]==0x1){await GetReward(_0x2eacc8[_0x5f1f('51')],_0x2eacc8[_0x5f1f('54')]);await getRewardModule(_0x2eacc8[_0x5f1f('55')],_0x2eacc8[_0x5f1f('54')]);}}}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('5b')+_0x468c9e[_0x5f1f('25')]);}}}catch(_0x140bf5){console[_0x5f1f('3')](_0x140bf5,_0x7b9f5d);}finally{_0x1d0548();}});});}function GetWelfarePageTask(){let _0x136255=Post_request_h5(_0x5f1f('5c'),_0x5f1f('5d')+access_token+_0x5f1f('5e')+device+_0x5f1f('5f'));return new Promise((_0x28f902,_0x370a04)=>{$[_0x5f1f('20')](_0x136255,async(_0x1070ad,_0x56126f,_0x3d3478)=>{try{if(_0x1070ad){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('60'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('60');}else{let _0x3a9220=JSON[_0x5f1f('23')](_0x3d3478);if(_0x3a9220[_0x5f1f('e')]==0x0){for(let _0x5706df of _0x3a9220[_0x5f1f('29')][_0x5f1f('5a')]){if(_0x5706df[_0x5f1f('51')]==_0x5f1f('61')){if(_0x5706df[_0x5f1f('53')]==0x1){await GetReward(_0x5f1f('61'),_0x5706df[_0x5f1f('54')]);await getRewardModule(_0x5f1f('62'),_0x5706df[_0x5f1f('54')]);}}if(_0x5706df[_0x5f1f('51')]==_0x5f1f('63')){if(_0x5706df[_0x5f1f('53')]==0x1){await GetReward(_0x5f1f('63'),_0x5706df[_0x5f1f('54')]);await getRewardModule(_0x5f1f('64'),_0x5706df[_0x5f1f('54')]);}}if(_0x5706df[_0x5f1f('51')]==_0x5f1f('65')){if(_0x5706df[_0x5f1f('53')]==0x1){await GetReward(_0x5f1f('65'),_0x5706df[_0x5f1f('54')]);await getRewardModule(_0x5f1f('64'),_0x5706df[_0x5f1f('54')]);}}if(_0x5706df[_0x5f1f('51')]==_0x5f1f('66')){if(_0x5706df[_0x5f1f('53')]==0x1){await GetReward(_0x5f1f('66'),_0x5706df[_0x5f1f('54')]);await getRewardModule(_0x5f1f('64'),_0x5706df[_0x5f1f('54')]);}}if(_0x5706df[_0x5f1f('51')]==_0x5f1f('67')){for(let _0x399dff of _0x5706df[_0x5f1f('68')][_0x5f1f('69')]){if(_0x399dff[_0x5f1f('6a')]==0x1){await GetReward_music(_0x399dff['\x69\x64'],_0x5706df[_0x5f1f('54')]);await getRewardModule(_0x5f1f('64'),_0x5706df[_0x5f1f('54')]);}}}if(_0x5706df[_0x5f1f('51')]==_0x5f1f('6b')){if(_0x5706df[_0x5f1f('68')][_0x5f1f('6c')]<0x16){await callback(_0x5f1f('6b'),_0x5f1f('6d'),_0x5706df[_0x5f1f('54')]);await getRewardModule(_0x5f1f('6e'),_0x5706df[_0x5f1f('54')]);for(let _0xb2c9ae of _0x5706df[_0x5f1f('68')][_0x5f1f('69')]){if(_0xb2c9ae[_0x5f1f('6a')]==0x1){await GetAdVideoBigReward(_0x5f1f('6f'),_0x5706df[_0x5f1f('54')]);await getRewardModule(_0x5f1f('6e'),_0x5706df[_0x5f1f('54')]);}}}}if(new Date()[_0x5f1f('1b')]()>0xb&&new Date()[_0x5f1f('1b')]()<0xd||new Date()[_0x5f1f('1b')]()>0x13&&new Date()[_0x5f1f('1b')]()<0x16){if(_0x5706df[_0x5f1f('51')]==_0x5f1f('70')){if(_0x5706df[_0x5f1f('53')]==0x0){await callback(_0x5f1f('57'),_0x5f1f('6d'),_0x5706df[_0x5f1f('54')],'\x76');}else if(_0x5706df[_0x5f1f('53')]==0x1){await GetReward(_0x5f1f('70'),_0x5706df[_0x5f1f('54')]);await getRewardModule(_0x5f1f('59'),_0x5706df[_0x5f1f('54')]);}}}}}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+_0x5f1f('71')+_0x3a9220[_0x5f1f('25')]);}}}catch(_0xe843b6){console[_0x5f1f('3')](_0xe843b6,_0x56126f);}finally{_0x28f902();}});});}function GetAdVideoBigReward(_0x30e9a6,_0x22a059){let _0x493b5c=Post_request_h5(_0x5f1f('72'),_0x5f1f('73')+_0x30e9a6+_0x5f1f('74')+access_token+_0x5f1f('44')+device+_0x5f1f('45'));return new Promise((_0x460e72,_0x558fe0)=>{$[_0x5f1f('20')](_0x493b5c,async(_0x32fe00,_0x4e6984,_0x55367b)=>{try{if(_0x32fe00){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x22a059+_0x5f1f('46'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x22a059+_0x5f1f('46');}else{let _0x20daf2=JSON[_0x5f1f('23')](_0x55367b);if(_0x20daf2[_0x5f1f('e')]==0x0){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x22a059+_0x5f1f('47')+_0x20daf2[_0x5f1f('29')][_0x5f1f('75')]+_0x5f1f('2f'));}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x22a059+_0x5f1f('49')+_0x20daf2[_0x5f1f('25')]);}}}catch(_0x110fae){console[_0x5f1f('3')](_0x110fae,_0x4e6984);}finally{_0x460e72();}});});}function callback(_0x107892,_0x2612c4,_0x1c2829,_0xdae8ba){let _0xb57043='';if(_0xdae8ba=='\x76'){_0xb57043=_0x5f1f('76');}else if(_0xdae8ba=='\x73'){_0xb57043=_0x5f1f('77');}else if(_0xdae8ba=='\x65'){_0xb57043=_0x5f1f('78');}else{_0xb57043=_0x5f1f('79')+_0x107892+_0x5f1f('7a')+_0x2612c4+_0x5f1f('7b');}let _0x133263={'\x75\x72\x6c':_0x5f1f('7c'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x5f1f('7d'),'content-length':_0xb57043[_0x5f1f('c')],'accept-encoding':_0x5f1f('7e'),'user-agent':_0x5f1f('7f'),'platform':_0x5f1f('80'),'client-v':_0x5f1f('81'),'device-id':device,'access-token':access_token,'user-agent':_0x5f1f('82')},'\x62\x6f\x64\x79':_0xb57043};return new Promise((_0x2ddf7d,_0x278821)=>{$[_0x5f1f('20')](_0x133263,async(_0x248bb8,_0x4cc6de,_0x4f3336)=>{try{if(_0x248bb8){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x1c2829+_0x5f1f('83'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x1c2829+_0x5f1f('83');}else{let _0x3d6b7e=JSON[_0x5f1f('23')](_0x4f3336);if(_0x3d6b7e[_0x5f1f('e')]==0x0){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x1c2829+_0x5f1f('84')+_0x3d6b7e[_0x5f1f('25')]);}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x1c2829+_0x5f1f('84')+_0x3d6b7e[_0x5f1f('25')]);}}}catch(_0xca87b0){console[_0x5f1f('3')](_0xca87b0,_0x4cc6de);}finally{_0x2ddf7d();}});});}function GetReward_music(_0x2bcf0d,_0x1d6830){let _0x1fa9e2=Post_request_m(_0x5f1f('85')+_0x2bcf0d+_0x5f1f('74')+access_token+_0x5f1f('44')+device+_0x5f1f('45'));return new Promise((_0xeddd5e,_0x450de5)=>{$[_0x5f1f('20')](_0x1fa9e2,async(_0x4bb51d,_0x13f73c,_0xa7aa93)=>{try{if(_0x4bb51d){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x1d6830+_0x5f1f('46'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x1d6830+_0x5f1f('46');}else{let _0xe040fa=JSON[_0x5f1f('23')](_0xa7aa93);if(_0xe040fa[_0x5f1f('e')]==0x0){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x1d6830+_0x5f1f('47')+_0xe040fa[_0x5f1f('29')][_0x5f1f('75')]+_0x5f1f('2f'));}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x1d6830+_0x5f1f('49')+_0xe040fa[_0x5f1f('25')]);}}}catch(_0x54b29f){console[_0x5f1f('3')](_0x54b29f,_0x13f73c);}finally{_0xeddd5e();}});});}function GetReward(_0xfe8617,_0x505b65){let _0x83abe6=Post_request_h5(_0x5f1f('86'),_0x5f1f('73')+_0xfe8617+_0x5f1f('74')+access_token+_0x5f1f('44')+device+_0x5f1f('45'));return new Promise((_0x4af896,_0x4fe7c3)=>{$[_0x5f1f('20')](_0x83abe6,async(_0x43695b,_0x1188ec,_0x3c6a97)=>{try{if(_0x43695b){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x505b65+_0x5f1f('87'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x505b65+_0x5f1f('87');}else{let _0x2e0d74=JSON[_0x5f1f('23')](_0x3c6a97);if(_0x2e0d74[_0x5f1f('e')]==0x0){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x505b65+_0x5f1f('88')+_0x2e0d74[_0x5f1f('29')][_0x5f1f('75')]+_0x5f1f('2f'));}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x505b65+_0x5f1f('89')+_0x2e0d74[_0x5f1f('25')]);}}}catch(_0x473aed){console[_0x5f1f('3')](_0x473aed,_0x1188ec);}finally{_0x4af896();}});});}function getRewardModule(_0x17f815,_0x2416f3){let _0x46e005=Post_request_h5(_0x5f1f('8a'),_0x5f1f('8b')+_0x17f815+_0x5f1f('74')+access_token+_0x5f1f('44')+device+_0x5f1f('8c'));return new Promise((_0x25cbcd,_0x2e1071)=>{$[_0x5f1f('20')](_0x46e005,async(_0x39c2c9,_0x3a3c45,_0x1f359c)=>{try{if(_0x39c2c9){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x2416f3+_0x5f1f('8d'));subTitle+=_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x2416f3+_0x5f1f('8d');}else{let _0x91bd17=JSON[_0x5f1f('23')](_0x1f359c);if(_0x91bd17[_0x5f1f('e')]==0x0){console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x2416f3+_0x5f1f('8e')+_0x91bd17[_0x5f1f('29')][_0x5f1f('8f')]+_0x5f1f('2f'));}else{console[_0x5f1f('3')](_0x5f1f('21')+$[_0x5f1f('12')]+'\x20'+_0x2416f3+_0x5f1f('90')+_0x91bd17[_0x5f1f('25')]);}}}catch(_0x467854){console[_0x5f1f('3')](_0x467854,_0x3a3c45);}finally{_0x25cbcd();}});});}function get_variable(){let _0xf00488=fs[_0x5f1f('91')](_0x5f1f('2'))[_0x5f1f('92')]();variable_left=_0xf00488[_0x5f1f('93')](0x0,_0xf00488[_0x5f1f('94')](current));let _0x315b7e=_0xf00488[_0x5f1f('c')]-variable_left[_0x5f1f('c')]-current[_0x5f1f('c')];variable_right=_0xf00488[_0x5f1f('93')](_0xf00488[_0x5f1f('c')]-_0x315b7e,_0xf00488[_0x5f1f('c')]);let _0x3e639f=device+'\x26'+access_token+'\x26'+refresh_token;let _0x3f645b=_0xf00488[_0x5f1f('95')](new RegExp(current,'\x67\x69'),_0x3e639f);fs[_0x5f1f('96')](_0x5f1f('2'),_0x3f645b,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x567db5){if(_0x567db5){console[_0x5f1f('3')](_0x567db5);}});}function Post_request(_0x4bb9e3,_0x4ecb9d,_0x3cf96b){if(_0x3cf96b==0x0){host=_0x5f1f('97');}else{host=_0x5f1f('98');}return{'\x75\x72\x6c':''+host+_0x4bb9e3,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x5f1f('7d'),'content-length':_0x4ecb9d[_0x5f1f('c')],'accept-encoding':_0x5f1f('7e'),'user-agent':_0x5f1f('7f'),'platform':_0x5f1f('80'),'client-v':_0x5f1f('81'),'device-id':device,'access-token':access_token,'user-agent':_0x5f1f('82')},'\x62\x6f\x64\x79':_0x4ecb9d};};function Post_request_h5(_0x15b025,_0x35b757){let _0x5563f8=_0x5f1f('99')+_0x15b025;return{'\x75\x72\x6c':_0x5563f8,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x5f1f('7d'),'content-length':_0x35b757[_0x5f1f('c')],'accept-encoding':_0x5f1f('7e'),'user-agent':_0x5f1f('7f'),'platform':_0x5f1f('80'),'client-v':_0x5f1f('81'),'device-id':device,'access-token':access_token,'user-agent':_0x5f1f('82')},'\x62\x6f\x64\x79':_0x35b757};};function Post_request_m(_0x18a466){return{'\x75\x72\x6c':_0x5f1f('9a'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x5f1f('7d'),'content-length':_0x18a466[_0x5f1f('c')],'accept-encoding':_0x5f1f('7e'),'user-agent':_0x5f1f('7f'),'platform':_0x5f1f('80'),'client-v':_0x5f1f('81'),'device-id':device,'access-token':access_token,'user-agent':_0x5f1f('82')},'\x62\x6f\x64\x79':_0x18a466};};function AES_Encrypt(_0x386631,_0x10476d){let _0x3c0709=AES_DE[_0x5f1f('9b')][_0x5f1f('9c')](AES_DE[_0x5f1f('9d')][_0x5f1f('9e')][_0x5f1f('23')](_0x386631),AES_DE[_0x5f1f('9d')][_0x5f1f('9e')][_0x5f1f('23')](_0x10476d),{'\x6d\x6f\x64\x65':AES_DE[_0x5f1f('9f')][_0x5f1f('a0')],'\x70\x61\x64\x64\x69\x6e\x67':AES_DE[_0x5f1f('a1')][_0x5f1f('a2')]});return _0x3c0709[_0x5f1f('92')]();};_0xodA='jsjiami.com.v6';


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