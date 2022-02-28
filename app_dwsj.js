/*

安卓软件名称:电玩世界

项目注册地址(微信打开):http://www.shandw.com/sdwworld/download?sdsj_inviter_id=29999597

邀请码:29999597

cron 0-59/5 0-23 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_dwsj.js
变量配置文件地址:https://gitee.com/soy-tool/app-script/raw/master/dwsj_variable_data.js

注意:

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改


脚本需要 node-rsa 依赖库,自行进依赖管理里面添加,不会就自行使用 ssh 安装 命令如: docker exec -it 你容器容器名称 bash -c "cd scripts && npm install node-rsa -g"
查看容器命令:docker ps -a
或者百度自行安装

*/


const $ = new Env('【电玩世界】版本:22/02/28_1');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodI='jsjiami.com.v6',_0xodI_=['_0xodI'],_0x2cd5=[_0xodI,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x64\x77\x73\x6a\x5f\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x74\x6f\x75','\x73\x74\x61\x72\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u6b64\u65f6\u95f4\u6bb5\u884c\u52a8\u6b21\u6570\u548c\u589e\u52a0\u6b21\u6570\u5df2\u7528\u5c3d','\x73\x69\x67\x6e','\x76\x69\x65\x77','\x20\u52a0\u901f\u3011\x3a\x20\u4eca\u65e5\u52a0\u901f\u6b21\u6570\u5df2\u7528\u5c3d','\x20\u819c\u62dc\u3011\x3a\x20\u4eca\u65e5\u819c\u62dc\u6b21\u6570\u5df2\u7528\u5c3d','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x7d','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65\x3f\x69\x64\x3d','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x67\x65\x74\x4d\x79\x49\x6e\x66\x6f','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x7d','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x7d','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x7d','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64\x3f\x69\x64\x3d','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x65\x6e\x64','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x69\x6e\x64\x65\x78\x4f\x66','\x72\x65\x70\x6c\x61\x63\x65','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x66\x56\x6b\x59\x6a\x51\x73\x5a\x6a\x69\x62\x44\x53\x61\x78\x7a\x52\x7a\x6d\x70\x42\x66\x50\x69\x2e\x63\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x34e4(_0x4ce885,_0x32ea5b){_0x4ce885=~~'0x'['concat'](_0x4ce885['slice'](0x0));var _0x4874ae=_0x2cd5[_0x4ce885];return _0x4874ae;};(function(_0x3c0eea,_0x17ba2d){var _0x1d8cd7=0x0;for(_0x17ba2d=_0x3c0eea['shift'](_0x1d8cd7>>0x2);_0x17ba2d&&_0x17ba2d!==(_0x3c0eea['pop'](_0x1d8cd7>>0x3)+'')['replace'](/[fVkYQZbDSxzRzpBfP=]/g,'');_0x1d8cd7++){_0x1d8cd7=_0x1d8cd7^0xd3f3c;}}(_0x2cd5,_0x34e4));const RSA_js=$[_0x34e4('0')]()?require(_0x34e4('1')):'';const fs=$[_0x34e4('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x34e4('0')]()?require(_0x34e4('2')):'';!(async()=>{console[_0x34e4('3')](_0x34e4('4')+new Date(new Date()[_0x34e4('5')]()+new Date()[_0x34e4('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x34e4('7')]()+_0x34e4('8'));if(dwsj_variable[_0x34e4('9')]!==0xc8){console[_0x34e4('3')](_0x34e4('a'));return;}console[_0x34e4('3')](_0x34e4('b')+dwsj_variable[_0x34e4('c')][_0x34e4('d')][_0x34e4('e')]+_0x34e4('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x34e4('c')][_0x34e4('d')][_0x34e4('e')];i++){current=dwsj_variable[_0x34e4('c')][_0x34e4('d')][i];user_ID=dwsj_variable[_0x34e4('c')][_0x34e4('d')][i][_0x34e4('10')];dwsj_token=dwsj_variable[_0x34e4('c')][_0x34e4('d')][i][_0x34e4('11')];dwsj_UA=dwsj_variable[_0x34e4('c')][_0x34e4('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x34e4('c')][_0x34e4('d')][i][_0x34e4('12')];dwsj_signtime=dwsj_variable[_0x34e4('c')][_0x34e4('d')][i][_0x34e4('13')];dwsj_UPbuild=dwsj_variable[_0x34e4('c')][_0x34e4('d')][i][_0x34e4('14')];dwsj_Business=dwsj_variable[_0x34e4('c')][_0x34e4('d')][i][_0x34e4('15')];dwsj_viewnum=dwsj_variable[_0x34e4('c')][_0x34e4('d')][i][_0x34e4('16')];dwsj_action=dwsj_variable[_0x34e4('c')][_0x34e4('d')][i][_0x34e4('17')];notice=dwsj_variable[_0x34e4('c')][_0x34e4('18')][0x0][_0x34e4('19')];if(!dwsj_UA){dwsj_UA=_0x34e4('1a');}$[_0x34e4('1b')]=i+0x1;console[_0x34e4('3')](_0x34e4('1c')+$[_0x34e4('1b')]+_0x34e4('1d'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x34e4('1e')]($[_0x34e4('1f')],subTitle);}}}})()[_0x34e4('20')](_0x4f386a=>$[_0x34e4('21')](_0x4f386a))[_0x34e4('22')](()=>$[_0x34e4('23')]());async function implement(){if(dwsj_action==0x1){if(new Date()[_0x34e4('24')]()==0x0||new Date()[_0x34e4('24')]()==0xc||new Date()[_0x34e4('24')]()==0x14){if(new Date()[_0x34e4('25')]()<0x1e){await get_variable(_0x34e4('26'),_0x34e4('27'));await rollPoint();}}else{console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('29'));await getBuildingEarn();}}else{await rollPoint();}if(new Date()[_0x34e4('24')]()==dwsj_signtime&&new Date()[_0x34e4('25')]()<0x5){await getAdReward(_0x34e4('2a'));}if(dwsj_viewnum==0x0){await getAdReward(_0x34e4('2b'));}else{console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('2c'));}if(dwsj_Business==0x0){await getRankByType();}else{console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('2d'));}}function rollPoint(){let _0x375512=RSA_encryption(_0x34e4('2e')+user_ID+_0x34e4('2f'));let _0x118866=Post_request(_0x34e4('30'),_0x375512);return new Promise((_0x468f45,_0x465177)=>{$[_0x34e4('31')](_0x118866,async(_0x17eb35,_0x1c29f5,_0x47fb98)=>{try{if(_0x17eb35){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('32'));subTitle+=_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('32');console[_0x34e4('3')](_0x17eb35+'\x0a');}else{let _0x548aab=JSON[_0x34e4('33')](_0x47fb98);if(_0x548aab[_0x34e4('9')]==0x1){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('34')+_0x548aab[_0x34e4('35')][_0x34e4('36')][_0x34e4('37')]+_0x34e4('38'));await addGoodsBuff();await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x548aab[_0x34e4('9')]==0x515||_0x548aab[_0x34e4('39')]==_0x34e4('3a')){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('3b')+_0x548aab[_0x34e4('39')]);await getAdReward(_0x34e4('26'));}else{console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('3b')+_0x548aab[_0x34e4('39')]);}}}catch(_0x18933d){console[_0x34e4('3')](_0x18933d,_0x1c29f5);}finally{_0x468f45();}});});}function addNewBuilding(){let _0x28a7fa=RSA_encryption(_0x34e4('2e')+user_ID+'\x7d');let _0x2d2c4c=Post_request(_0x34e4('3c'),_0x28a7fa);return new Promise((_0x6e9e1e,_0x77bd95)=>{$[_0x34e4('31')](_0x2d2c4c,async(_0x54fc33,_0x5b7e65,_0x33c25b)=>{try{if(_0x54fc33){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('3d'));subTitle+=_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('3d');}else{let _0xf4c673=JSON[_0x34e4('33')](_0x33c25b);if(_0xf4c673[_0x34e4('9')]==0x1){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('3e')+_0xf4c673[_0x34e4('35')][_0x34e4('3f')][_0x34e4('40')][_0x34e4('41')]+_0x34e4('38'));}else{console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('42')+_0xf4c673[_0x34e4('39')]);}}}catch(_0x55cad4){console[_0x34e4('3')](_0x55cad4,_0x5b7e65);}finally{_0x6e9e1e();}});});}function getBuildingEarn(){let _0x1724db=RSA_encryption(_0x34e4('2e')+user_ID+'\x7d');let _0x271f91=Post_request(_0x34e4('43'),_0x1724db);return new Promise((_0x631c55,_0x11ca10)=>{$[_0x34e4('31')](_0x271f91,async(_0x2150c9,_0x451c37,_0x34fac8)=>{try{if(_0x2150c9){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('44'));subTitle+=_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('44');}else{let _0xac235a=JSON[_0x34e4('33')](_0x34fac8);if(_0xac235a[_0x34e4('9')]==0x1){if(_0xac235a[_0x34e4('9')]==0x4bf||_0xac235a[_0x34e4('39')]==_0x34e4('45')){if(dwsj_build){await addNewBuilding();}}else{console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('46')+_0xac235a[_0x34e4('35')][_0x34e4('3f')][_0x34e4('40')][_0x34e4('41')]+_0x34e4('38'));}}else{console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('47')+_0xac235a[_0x34e4('39')]);}}}catch(_0x3159d0){console[_0x34e4('3')](_0x3159d0,_0x451c37);}finally{_0x631c55();}});});}function buildingLevelUp(){let _0x1be781=RSA_encryption(_0x34e4('2e')+user_ID+'\x7d');let _0x86d6f9=Post_request(_0x34e4('48'),_0x1be781);return new Promise((_0x30b27a,_0x580120)=>{$[_0x34e4('31')](_0x86d6f9,async(_0x589e77,_0x29bc67,_0x59ef69)=>{try{if(_0x589e77){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('49'));subTitle+=_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('49');}else{let _0x563e86=JSON[_0x34e4('33')](_0x59ef69);if(_0x563e86[_0x34e4('9')]==0x1){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('4a')+_0x563e86[_0x34e4('35')][_0x34e4('3f')][_0x34e4('40')][_0x34e4('41')]+_0x34e4('38'));}else{console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('4b')+_0x563e86[_0x34e4('39')]);}}}catch(_0x349add){console[_0x34e4('3')](_0x349add,_0x29bc67);}finally{_0x30b27a();}});});}function addGoodsBuff(){let _0x597ab6=RSA_encryption(_0x34e4('2e')+user_ID+'\x7d');let _0x7a0301=Post_request(_0x34e4('4c'),_0x597ab6);return new Promise((_0x7e49c0,_0x5a8007)=>{$[_0x34e4('31')](_0x7a0301,async(_0x1883fd,_0x15c2d3,_0x4b4250)=>{try{if(_0x1883fd){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('4d'));subTitle+=_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('4d');}else{}}catch(_0x2539b4){console[_0x34e4('3')](_0x2539b4,_0x15c2d3);}finally{_0x7e49c0();}});});}function getRankByType(){let _0x480cf3=[_0x34e4('41'),_0x34e4('4e'),_0x34e4('4e')];let _0x4f4761='';let _0x3c1f34=_0x480cf3[Math[_0x34e4('4f')](Math[_0x34e4('50')]()*_0x480cf3[_0x34e4('e')])];if(_0x3c1f34==_0x34e4('41')){_0x4f4761='\u91d1\u5e01';}else if(_0x3c1f34==_0x34e4('4e')){_0x4f4761='\u58f0\u671b';}if(_0x3c1f34==_0x34e4('4e')){_0x4f4761='\u6536\u76ca';}let _0x4b2f31=RSA_encryption(_0x34e4('51')+_0x3c1f34+_0x34e4('52')+user_ID+_0x34e4('53'));let _0x30056b=Post_request(_0x34e4('54')+user_ID,_0x4b2f31);return new Promise((_0x282b99,_0x505419)=>{$[_0x34e4('31')](_0x30056b,async(_0x30caf3,_0x7e0c67,_0x428aa0)=>{try{if(_0x30caf3){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+'\x20'+_0x4f4761+_0x34e4('55'));subTitle+=_0x34e4('28')+$[_0x34e4('1b')]+'\x20'+_0x4f4761+_0x34e4('55');console[_0x34e4('3')](_0x30caf3+'\x0a');}else{let _0x2bea83=JSON[_0x34e4('33')](_0x428aa0);if(_0x2bea83[_0x34e4('9')]==0x1){let _0x31e79d=['\x30','\x31','\x32','\x33','\x34'];let _0x2c8e1c=_0x31e79d[Math[_0x34e4('4f')](Math[_0x34e4('50')]()*_0x480cf3[_0x34e4('e')])];let _0x519531=_0x2bea83[_0x34e4('35')][_0x34e4('56')][_0x2c8e1c][_0x34e4('57')];await getAdReward(_0x34e4('58'),_0x519531);}else{console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+'\x20'+_0x4f4761+_0x34e4('59')+_0x2bea83[_0x34e4('39')]);}}}catch(_0x3139a2){console[_0x34e4('3')](_0x3139a2,_0x7e0c67);}finally{_0x282b99();}});});}function getUserWalletPage(){let _0x511ca4=RSA_encryption(_0x34e4('2e')+user_ID+'\x7d');let _0x254733=Post_request(_0x34e4('5a'),_0x511ca4);return new Promise((_0x389e17,_0x33771e)=>{$[_0x34e4('31')](_0x254733,async(_0x41bbb2,_0x405e98,_0x10fe51)=>{try{if(_0x41bbb2){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('4d'));subTitle+=_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('4d');}else{console[_0x34e4('3')](_0x10fe51);}}catch(_0x2921d4){console[_0x34e4('3')](_0x2921d4,_0x405e98);}finally{_0x389e17();}});});}function getMyInfo(){let _0x210d71=RSA_encryption(_0x34e4('2e')+user_ID+'\x7d');let _0x59d9c7=Post_request(_0x34e4('5b'),_0x210d71);return new Promise((_0x5f48ee,_0x5022fa)=>{$[_0x34e4('31')](_0x59d9c7,async(_0x527621,_0x2cbd28,_0x15cc6d)=>{try{if(_0x527621){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('4d'));subTitle+=_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('4d');}else{console[_0x34e4('3')](_0x15cc6d);}}catch(_0x2d3b21){console[_0x34e4('3')](_0x2d3b21,_0x2cbd28);}finally{_0x5f48ee();}});});}function getAdReward(_0x28cd01,_0x5ab52b){let _0x1c38ba='';let _0x4f2495='';if(_0x28cd01==_0x34e4('2a')){_0x1c38ba=RSA_encryption(_0x34e4('2e')+user_ID+_0x34e4('5c'));_0x4f2495='\u7b7e\u5230';}else if(_0x28cd01==_0x34e4('2b')){_0x1c38ba=RSA_encryption(_0x34e4('2e')+user_ID+_0x34e4('5d'));_0x4f2495='\u52a0\u901f';}else if(_0x28cd01==_0x34e4('26')){_0x1c38ba=RSA_encryption(_0x34e4('2e')+user_ID+_0x34e4('5e'));_0x4f2495=_0x34e4('5f');}else if(_0x28cd01==_0x34e4('58')){_0x1c38ba=RSA_encryption(_0x34e4('60')+_0x5ab52b+_0x34e4('61')+user_ID+_0x34e4('53'));_0x4f2495='\u819c\u62dc';}let _0x423562=Post_request(_0x34e4('62')+user_ID,_0x1c38ba);return new Promise((_0x41c82e,_0x4f8136)=>{$[_0x34e4('31')](_0x423562,async(_0xb94a0d,_0xfdc6e9,_0x2cdd26)=>{try{if(_0xb94a0d){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('63')+_0x4f2495+_0x34e4('64'));subTitle+=_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('63')+_0x4f2495+_0x34e4('64');console[_0x34e4('3')](_0xb94a0d+'\x0a');}else{let _0x510a02=JSON[_0x34e4('33')](_0x2cdd26);if(_0x510a02[_0x34e4('9')]==0x1){if(_0x28cd01==_0x34e4('2a')){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+'\x20'+_0x4f2495+_0x34e4('65')+_0x510a02[_0x34e4('35')][_0x34e4('3f')][_0x34e4('40')][_0x34e4('66')]+_0x34e4('67')+_0x510a02[_0x34e4('35')][_0x34e4('3f')][_0x34e4('40')][_0x34e4('68')]);}else if(_0x28cd01==_0x34e4('26')){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+'\x20'+_0x4f2495+_0x34e4('69'));}else if(_0x28cd01==_0x34e4('2b')){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+'\x20'+_0x4f2495+_0x34e4('6a'));}else if(_0x28cd01==_0x34e4('58')){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+'\x20'+_0x4f2495+_0x34e4('6b'));}}else if(_0x510a02[_0x34e4('9')]==0x4b8){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('63')+_0x4f2495+_0x34e4('6c')+_0x510a02[_0x34e4('39')]);if(_0x28cd01==_0x34e4('2b')){await get_variable(_0x34e4('2b'));}if(_0x28cd01==_0x34e4('26')){await get_variable(_0x34e4('26'),_0x34e4('6d'));}}else if(_0x510a02[_0x34e4('9')]==0x57f&&_0x28cd01==_0x34e4('58')){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('63')+_0x4f2495+_0x34e4('6c')+_0x510a02[_0x34e4('39')]);await get_variable(_0x34e4('58'));}else{console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('63')+_0x4f2495+_0x34e4('6c')+_0x510a02[_0x34e4('39')]);}}}catch(_0x11c215){console[_0x34e4('3')](_0x11c215,_0xfdc6e9);}finally{_0x41c82e();}});});}function Post_request(_0x5b8244,_0x47c63e){return{'\x75\x72\x6c':_0x34e4('6e')+_0x5b8244,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x34e4('6f'),'Connection':_0x34e4('70'),'Content-Length':_0x47c63e[_0x34e4('e')],'Pragma':_0x34e4('71'),'Cache-Control':_0x34e4('71'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x34e4('72'),'Accept':_0x34e4('73'),'Origin':_0x34e4('74'),'X-Requested-With':_0x34e4('75'),'Sec-Fetch-Site':_0x34e4('76'),'Sec-Fetch-Mode':_0x34e4('77'),'Sec-Fetch-Dest':_0x34e4('78'),'Referer':_0x34e4('79'),'Accept-Encoding':_0x34e4('7a'),'Accept-Language':_0x34e4('7b')},'\x62\x6f\x64\x79':_0x47c63e};};function Get_request(_0x4ac0ba){return{'\x75\x72\x6c':_0x34e4('6e')+_0x4ac0ba,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x34e4('6f'),'Connection':_0x34e4('70'),'Content-Length':0x0,'Pragma':_0x34e4('71'),'Cache-Control':_0x34e4('71'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x34e4('72'),'Accept':_0x34e4('73'),'Origin':_0x34e4('74'),'X-Requested-With':_0x34e4('75'),'Sec-Fetch-Site':_0x34e4('76'),'Sec-Fetch-Mode':_0x34e4('77'),'Sec-Fetch-Dest':_0x34e4('78'),'Referer':_0x34e4('79'),'Accept-Encoding':_0x34e4('7a'),'Accept-Language':_0x34e4('7b')}};};function RSA_encryption(_0x19b36a){var _0x5e598d=new RSA_js();_0x5e598d[_0x34e4('7c')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x34e4('7d')});_0x5e598d[_0x34e4('7e')](_0x34e4('7f'),_0x34e4('80'));var _0x415c56=_0x5e598d[_0x34e4('81')](_0x19b36a,_0x34e4('82'));return _0x415c56;}function get_variable(_0x60c931,_0x6079e8){let _0x1d4933=$[_0x34e4('0')]()?require(_0x34e4('2')):'';if(!_0x1d4933){console[_0x34e4('3')](_0x34e4('28')+$[_0x34e4('1b')]+_0x34e4('83'));return;}else{_0x1d4933=JSON[_0x34e4('84')](_0x1d4933);}let _0x3b5ae6=JSON[_0x34e4('84')](current);let _0x5137a0=_0x1d4933[_0x34e4('85')](0x0,_0x1d4933[_0x34e4('86')](_0x3b5ae6));let _0x2a2031=_0x1d4933[_0x34e4('e')]-_0x5137a0[_0x34e4('e')]-_0x3b5ae6[_0x34e4('e')];let _0x295c4b=_0x1d4933[_0x34e4('85')](_0x1d4933[_0x34e4('e')]-_0x2a2031,_0x1d4933[_0x34e4('e')]);let _0x53b624='';if(_0x60c931==_0x34e4('2b')){_0x53b624=JSON[_0x34e4('33')](JSON[_0x34e4('84')](_0x3b5ae6[_0x34e4('87')](new RegExp(_0x34e4('88'),'\x67\x69'),_0x34e4('89'))));}else if(_0x60c931==_0x34e4('58')){_0x53b624=JSON[_0x34e4('33')](JSON[_0x34e4('84')](_0x3b5ae6[_0x34e4('87')](new RegExp(_0x34e4('8a'),'\x67\x69'),_0x34e4('8b'))));}else if(_0x60c931==_0x34e4('26')&&_0x6079e8==_0x34e4('6d')){_0x53b624=JSON[_0x34e4('33')](JSON[_0x34e4('84')](_0x3b5ae6[_0x34e4('87')](new RegExp(_0x34e4('8c'),'\x67\x69'),_0x34e4('8d'))));}else if(_0x60c931==_0x34e4('26')&&_0x6079e8==_0x34e4('27')){_0x53b624=JSON[_0x34e4('33')](JSON[_0x34e4('84')](_0x3b5ae6[_0x34e4('87')](new RegExp(_0x34e4('8d'),'\x67\x69'),_0x34e4('8c'))));}fs[_0x34e4('8e')](_0x34e4('2'),_0x34e4('8f')+_0x5137a0+_0x53b624+_0x295c4b,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x17d972){if(_0x17d972){console[_0x34e4('3')](_0x17d972);}});};_0xodI='jsjiami.com.v6';


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