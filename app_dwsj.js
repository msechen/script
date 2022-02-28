/*

安卓软件名称:电玩世界

项目注册地址(微信打开):http://www.shandw.com/sdwworld/download?sdsj_inviter_id=29999597

邀请码:29999597

cron 0-59/10 1-23 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_dwsj.js
变量配置文件地址:https://gitee.com/soy-tool/app-script/raw/master/dwsj_variable_data.js

注意:

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

注意:
脚本需要 node-rsa 依赖库,自行使用 ssh 安装
命令如: docker exec -it 你容器容器名称 bash -c "cd scripts && npm install node-rsa -g"
查看容器命令:docker ps -a
或者百度自行安装

脚本需要 node-rsa 依赖库,自行使用 ssh 安装
命令如: docker exec -it 你容器容器名称 bash -c "cd scripts && npm install node-rsa -g"
查看容器命令:docker ps -a
或者百度自行安装

脚本需要 node-rsa 依赖库,自行使用 ssh 安装
命令如: docker exec -it 你容器容器名称 bash -c "cd scripts && npm install node-rsa -g"
查看容器命令:docker ps -a
或者百度自行安装

*/


const $ = new Env('【电玩世界】版本:22/02/28_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodI='jsjiami.com.v6',_0xodI_=['_0xodI'],_0x5f52=[_0xodI,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x64\x77\x73\x6a\x5f\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x76\x69\x65\x77','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x7d','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x75\x73\x65\x72','\x73\x69\x67\x6e\x49\x6e\x54\x79\x70\x65','\x73\x69\x67\x6e','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x74\x6f\x75','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65\x3f\x69\x64\x3d','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x67\x65\x74\x4d\x79\x49\x6e\x66\x6f','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x7d','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x7d','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x7d','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64\x3f\x69\x64\x3d','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x69\x6e\x64\x65\x78\x4f\x66','\x72\x65\x70\x6c\x61\x63\x65','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x2e\x2f\x64\x77\x73\x6a\x5f\x63\x73\x2e\x6a\x73','\x6e\x6a\x77\x73\x4b\x6a\x69\x65\x54\x61\x6e\x6d\x43\x59\x69\x7a\x2e\x63\x46\x51\x67\x6f\x7a\x6d\x2e\x43\x52\x76\x36\x4e\x3d\x3d'];function _0x44c0(_0x46fd71,_0x1a1c3a){_0x46fd71=~~'0x'['concat'](_0x46fd71['slice'](0x0));var _0x55c84b=_0x5f52[_0x46fd71];return _0x55c84b;};(function(_0x5a8528,_0x5564b0){var _0x493542=0x0;for(_0x5564b0=_0x5a8528['shift'](_0x493542>>0x2);_0x5564b0&&_0x5564b0!==(_0x5a8528['pop'](_0x493542>>0x3)+'')['replace'](/[nwKeTnCYzFQgzCRN=]/g,'');_0x493542++){_0x493542=_0x493542^0xd3cb4;}}(_0x5f52,_0x44c0));const RSA_js=$[_0x44c0('0')]()?require(_0x44c0('1')):'';const fs=$[_0x44c0('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x44c0('0')]()?require(_0x44c0('2')):'';!(async()=>{console[_0x44c0('3')](_0x44c0('4')+new Date(new Date()[_0x44c0('5')]()+new Date()[_0x44c0('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x44c0('7')]()+_0x44c0('8'));if(dwsj_variable[_0x44c0('9')]!==0xc8){console[_0x44c0('3')](_0x44c0('a'));return;}console[_0x44c0('3')](_0x44c0('b')+dwsj_variable[_0x44c0('c')][_0x44c0('d')][_0x44c0('e')]+_0x44c0('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x44c0('c')][_0x44c0('d')][_0x44c0('e')];i++){current=dwsj_variable[_0x44c0('c')][_0x44c0('d')][i];user_ID=dwsj_variable[_0x44c0('c')][_0x44c0('d')][i][_0x44c0('10')];dwsj_token=dwsj_variable[_0x44c0('c')][_0x44c0('d')][i][_0x44c0('11')];dwsj_UA=dwsj_variable[_0x44c0('c')][_0x44c0('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x44c0('c')][_0x44c0('d')][i][_0x44c0('12')];dwsj_signtime=dwsj_variable[_0x44c0('c')][_0x44c0('d')][i][_0x44c0('13')];dwsj_UPbuild=dwsj_variable[_0x44c0('c')][_0x44c0('d')][i][_0x44c0('14')];dwsj_Business=dwsj_variable[_0x44c0('c')][_0x44c0('d')][i][_0x44c0('15')];dwsj_viewnum=dwsj_variable[_0x44c0('c')][_0x44c0('d')][i][_0x44c0('16')];notice=dwsj_variable[_0x44c0('c')][_0x44c0('17')][0x0][_0x44c0('18')];if(!dwsj_UA){dwsj_UA=_0x44c0('19');}$[_0x44c0('1a')]=i+0x1;console[_0x44c0('3')](_0x44c0('1b')+$[_0x44c0('1a')]+_0x44c0('1c'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x44c0('1d')]($[_0x44c0('1e')],subTitle);}}}})()[_0x44c0('1f')](_0x1b6dd2=>$[_0x44c0('20')](_0x1b6dd2))[_0x44c0('21')](()=>$[_0x44c0('22')]());async function implement(){await rollPoint();if(dwsj_Business==0x0){await getAdReward(_0x44c0('23'));}if(dwsj_viewnum==0x0){await getRankByType();}}function rollPoint(){let _0x11f702=RSA_encryption(_0x44c0('24')+user_ID+_0x44c0('25'));let _0x28e097=Post_request(_0x44c0('26'),_0x11f702);return new Promise((_0x3ee69,_0x3cf5ea)=>{$[_0x44c0('27')](_0x28e097,async(_0x1bf655,_0x56acc5,_0x34706d)=>{try{if(_0x1bf655){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('29'));subTitle+=_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('29');console[_0x44c0('3')](_0x1bf655+'\x0a');}else{let _0x39e44a=JSON[_0x44c0('2a')](_0x34706d);if(_0x39e44a[_0x44c0('9')]==0x1){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('2b')+_0x39e44a[_0x44c0('2c')][_0x44c0('2d')][_0x44c0('2e')]+_0x44c0('2f'));if(_0x39e44a[_0x44c0('2c')][_0x44c0('30')][_0x44c0('31')]==0x1){await reward_video(_0x44c0('32'));}await addGoodsBuff();await $[_0x44c0('33')](Math[_0x44c0('34')](Math[_0x44c0('35')]()*(0x4268-0x3a98+0x3e8)+0x3a98));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x39e44a[_0x44c0('9')]==0x515||_0x39e44a[_0x44c0('36')]==_0x44c0('37')){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('38')+_0x39e44a[_0x44c0('36')]);await getAdReward(_0x44c0('39'));}else{console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('38')+_0x39e44a[_0x44c0('36')]);}}}catch(_0x5027ab){console[_0x44c0('3')](_0x5027ab,_0x56acc5);}finally{_0x3ee69();}});});}function addNewBuilding(){let _0x29571b=RSA_encryption(_0x44c0('24')+user_ID+'\x7d');let _0x17394a=Post_request(_0x44c0('3a'),_0x29571b);return new Promise((_0x1b381e,_0x54c0c8)=>{$[_0x44c0('27')](_0x17394a,async(_0x2f4778,_0x4e19cb,_0xb744b9)=>{try{if(_0x2f4778){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('3b'));subTitle+=_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('3b');}else{let _0x2ac089=JSON[_0x44c0('2a')](_0xb744b9);if(_0x2ac089[_0x44c0('9')]==0x1){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('3c')+_0x2ac089[_0x44c0('2c')][_0x44c0('3d')][_0x44c0('3e')][_0x44c0('3f')]+_0x44c0('2f'));}else{console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('40')+_0x2ac089[_0x44c0('36')]);}}}catch(_0x3930fb){console[_0x44c0('3')](_0x3930fb,_0x4e19cb);}finally{_0x1b381e();}});});}function getBuildingEarn(){let _0x2e3cca=RSA_encryption(_0x44c0('24')+user_ID+'\x7d');let _0x5a98d7=Post_request(_0x44c0('41'),_0x2e3cca);return new Promise((_0x46ad4a,_0x20eb74)=>{$[_0x44c0('27')](_0x5a98d7,async(_0x41447f,_0x4f7f80,_0x9da533)=>{try{if(_0x41447f){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('42'));subTitle+=_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('42');}else{let _0x35f738=JSON[_0x44c0('2a')](_0x9da533);if(_0x35f738[_0x44c0('9')]==0x1){if(_0x35f738[_0x44c0('9')]==0x4bf||_0x35f738[_0x44c0('36')]==_0x44c0('43')){if(dwsj_build){await addNewBuilding();}}else{console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('44')+_0x35f738[_0x44c0('2c')][_0x44c0('3d')][_0x44c0('3e')][_0x44c0('3f')]+_0x44c0('2f'));}}else{console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('45')+_0x35f738[_0x44c0('36')]);}}}catch(_0x462ea3){console[_0x44c0('3')](_0x462ea3,_0x4f7f80);}finally{_0x46ad4a();}});});}function buildingLevelUp(){let _0x574f24=RSA_encryption(_0x44c0('24')+user_ID+'\x7d');let _0x34792f=Post_request(_0x44c0('46'),_0x574f24);return new Promise((_0x4a8e39,_0x509dbc)=>{$[_0x44c0('27')](_0x34792f,async(_0x76d21b,_0x2ad13c,_0x4c8d8e)=>{try{if(_0x76d21b){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('47'));subTitle+=_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('47');}else{let _0x212e90=JSON[_0x44c0('2a')](_0x4c8d8e);if(_0x212e90[_0x44c0('9')]==0x1){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('48')+_0x212e90[_0x44c0('2c')][_0x44c0('3d')][_0x44c0('3e')][_0x44c0('3f')]+_0x44c0('2f'));}else{console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('49')+_0x212e90[_0x44c0('36')]);}}}catch(_0x3e89e8){console[_0x44c0('3')](_0x3e89e8,_0x2ad13c);}finally{_0x4a8e39();}});});}function addGoodsBuff(){let _0x1c1497=RSA_encryption(_0x44c0('24')+user_ID+'\x7d');let _0x12124d=Post_request(_0x44c0('4a'),_0x1c1497);return new Promise((_0xf638ff,_0x297f07)=>{$[_0x44c0('27')](_0x12124d,async(_0x35dece,_0x33ec29,_0x45db9a)=>{try{if(_0x35dece){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('4b'));subTitle+=_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('4b');}else{}}catch(_0x27c472){console[_0x44c0('3')](_0x27c472,_0x33ec29);}finally{_0xf638ff();}});});}function getRankByType(){let _0x14aa81=[_0x44c0('3f'),_0x44c0('4c'),_0x44c0('4c')];let _0x2cbd9d='';let _0x5d9120=_0x14aa81[Math[_0x44c0('34')](Math[_0x44c0('35')]()*_0x14aa81[_0x44c0('e')])];if(_0x5d9120==_0x44c0('3f')){_0x2cbd9d='\u91d1\u5e01';}else if(_0x5d9120==_0x44c0('4c')){_0x2cbd9d='\u58f0\u671b';}if(_0x5d9120==_0x44c0('4c')){_0x2cbd9d='\u6536\u76ca';}let _0x2b782f=RSA_encryption(_0x44c0('4d')+_0x5d9120+_0x44c0('4e')+user_ID+_0x44c0('4f'));let _0x3dc0c4=Post_request(_0x44c0('50')+user_ID,_0x2b782f);return new Promise((_0x22b645,_0xe0ce7f)=>{$[_0x44c0('27')](_0x3dc0c4,async(_0x41b1c7,_0x5d0db0,_0x4e7f1d)=>{try{if(_0x41b1c7){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+'\x20'+_0x2cbd9d+_0x44c0('51'));subTitle+=_0x44c0('28')+$[_0x44c0('1a')]+'\x20'+_0x2cbd9d+_0x44c0('51');console[_0x44c0('3')](_0x41b1c7+'\x0a');}else{let _0x73c9f1=JSON[_0x44c0('2a')](_0x4e7f1d);if(_0x73c9f1[_0x44c0('9')]==0x1){let _0x59e8ef=['\x30','\x31','\x32','\x33','\x34'];let _0x330730=_0x59e8ef[Math[_0x44c0('34')](Math[_0x44c0('35')]()*_0x14aa81[_0x44c0('e')])];let _0x21b0d3=_0x73c9f1[_0x44c0('2c')][_0x44c0('52')][_0x330730][_0x44c0('53')];await getAdReward(_0x44c0('54'),_0x21b0d3);}else{console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+'\x20'+_0x2cbd9d+_0x44c0('55')+_0x73c9f1[_0x44c0('36')]);}}}catch(_0x28cce5){console[_0x44c0('3')](_0x28cce5,_0x5d0db0);}finally{_0x22b645();}});});}function getUserWalletPage(){let _0x4afa4d=RSA_encryption(_0x44c0('24')+user_ID+'\x7d');let _0x756f1f=Post_request(_0x44c0('56'),_0x4afa4d);return new Promise((_0xa39c65,_0x1f1916)=>{$[_0x44c0('27')](_0x756f1f,async(_0x3f0579,_0xa4c0be,_0x2a8f6d)=>{try{if(_0x3f0579){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('4b'));subTitle+=_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('4b');}else{console[_0x44c0('3')](_0x2a8f6d);}}catch(_0x2cbe1e){console[_0x44c0('3')](_0x2cbe1e,_0xa4c0be);}finally{_0xa39c65();}});});}function getMyInfo(){let _0x2e6f5d=RSA_encryption(_0x44c0('24')+user_ID+'\x7d');let _0x9f210e=Post_request(_0x44c0('57'),_0x2e6f5d);return new Promise((_0xda8dda,_0xacd80)=>{$[_0x44c0('27')](_0x9f210e,async(_0x212639,_0x2c5733,_0x5359b5)=>{try{if(_0x212639){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('4b'));subTitle+=_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('4b');}else{console[_0x44c0('3')](_0x5359b5);}}catch(_0x123b93){console[_0x44c0('3')](_0x123b93,_0x2c5733);}finally{_0xda8dda();}});});}function getAdReward(_0x15d0c2,_0x3a53f2){let _0x1ec682='';let _0x18c41f='';if(_0x15d0c2==_0x44c0('32')){_0x1ec682=RSA_encryption(_0x44c0('24')+user_ID+_0x44c0('58'));_0x18c41f='\u7b7e\u5230';}else if(_0x15d0c2==_0x44c0('23')){_0x1ec682=RSA_encryption(_0x44c0('24')+user_ID+_0x44c0('59'));_0x18c41f='\u52a0\u901f';}else if(_0x15d0c2==_0x44c0('39')){_0x1ec682=RSA_encryption(_0x44c0('24')+user_ID+_0x44c0('5a'));_0x18c41f=_0x44c0('5b');}else if(_0x15d0c2==_0x44c0('54')){_0x1ec682=RSA_encryption(_0x44c0('5c')+_0x3a53f2+_0x44c0('5d')+user_ID+_0x44c0('4f'));_0x18c41f='\u819c\u62dc';}let _0x363b34=Post_request(_0x44c0('5e')+user_ID,_0x1ec682);return new Promise((_0xa0c139,_0x138c55)=>{$[_0x44c0('27')](_0x363b34,async(_0x4bd113,_0x3e821c,_0x21c107)=>{try{if(_0x4bd113){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('5f')+_0x18c41f+_0x44c0('60'));subTitle+=_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('5f')+_0x18c41f+_0x44c0('60');console[_0x44c0('3')](_0x4bd113+'\x0a');}else{let _0x377aad=JSON[_0x44c0('2a')](_0x21c107);if(_0x377aad[_0x44c0('9')]==0x1){if(_0x15d0c2==_0x44c0('32')){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+'\x20'+_0x18c41f+_0x44c0('61')+_0x377aad[_0x44c0('2c')][_0x44c0('3d')][_0x44c0('3e')][_0x44c0('62')]+_0x44c0('63')+_0x377aad[_0x44c0('2c')][_0x44c0('3d')][_0x44c0('3e')][_0x44c0('64')]);}else if(_0x15d0c2==_0x44c0('39')){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+'\x20'+_0x18c41f+_0x44c0('65'));}else if(_0x15d0c2==_0x44c0('23')){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+'\x20'+_0x18c41f+_0x44c0('66'));}else if(_0x15d0c2==_0x44c0('54')){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+'\x20'+_0x18c41f+_0x44c0('67'));}}else if(_0x377aad[_0x44c0('9')]==0x4b8&&_0x15d0c2==_0x44c0('23')){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('5f')+_0x18c41f+_0x44c0('68')+_0x377aad[_0x44c0('36')]);}else if(_0x377aad[_0x44c0('9')]==0x57f&&_0x15d0c2==_0x44c0('54')){console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('5f')+_0x18c41f+_0x44c0('68')+_0x377aad[_0x44c0('36')]);}else{console[_0x44c0('3')](_0x44c0('28')+$[_0x44c0('1a')]+_0x44c0('5f')+_0x18c41f+_0x44c0('68')+_0x377aad[_0x44c0('36')]);}}}catch(_0xe3ea1e){console[_0x44c0('3')](_0xe3ea1e,_0x3e821c);}finally{_0xa0c139();}});});}function Post_request(_0x5a2f9f,_0x16048e){return{'\x75\x72\x6c':_0x44c0('69')+_0x5a2f9f,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x44c0('6a'),'Connection':_0x44c0('6b'),'Content-Length':_0x16048e[_0x44c0('e')],'Pragma':_0x44c0('6c'),'Cache-Control':_0x44c0('6c'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x44c0('6d'),'Accept':_0x44c0('6e'),'Origin':_0x44c0('6f'),'X-Requested-With':_0x44c0('70'),'Sec-Fetch-Site':_0x44c0('71'),'Sec-Fetch-Mode':_0x44c0('72'),'Sec-Fetch-Dest':_0x44c0('73'),'Referer':_0x44c0('74'),'Accept-Encoding':_0x44c0('75'),'Accept-Language':_0x44c0('76')},'\x62\x6f\x64\x79':_0x16048e};};function Get_request(_0x1ba503){return{'\x75\x72\x6c':_0x44c0('69')+_0x1ba503,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x44c0('6a'),'Connection':_0x44c0('6b'),'Content-Length':0x0,'Pragma':_0x44c0('6c'),'Cache-Control':_0x44c0('6c'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x44c0('6d'),'Accept':_0x44c0('6e'),'Origin':_0x44c0('6f'),'X-Requested-With':_0x44c0('70'),'Sec-Fetch-Site':_0x44c0('71'),'Sec-Fetch-Mode':_0x44c0('72'),'Sec-Fetch-Dest':_0x44c0('73'),'Referer':_0x44c0('74'),'Accept-Encoding':_0x44c0('75'),'Accept-Language':_0x44c0('76')}};};function RSA_encryption(_0x38675d){var _0x57b50f=new RSA_js();_0x57b50f[_0x44c0('77')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x44c0('78')});_0x57b50f[_0x44c0('79')](_0x44c0('7a'),_0x44c0('7b'));var _0x161890=_0x57b50f[_0x44c0('7c')](_0x38675d,_0x44c0('7d'));return _0x161890;}function get_variable(_0x375bc9){let _0x145d4d=JSON[_0x44c0('7e')](current);let _0x5dc63f=JSON[_0x44c0('7e')](dwsj_variable);let _0x2fb1a6=_0x5dc63f[_0x44c0('7f')](0x0,_0x5dc63f[_0x44c0('80')](_0x145d4d));let _0x186fdd=_0x5dc63f[_0x44c0('e')]-_0x2fb1a6[_0x44c0('e')]-_0x145d4d[_0x44c0('e')];let _0x274aa3=_0x5dc63f[_0x44c0('7f')](_0x5dc63f[_0x44c0('e')]-_0x186fdd,_0x5dc63f[_0x44c0('e')]);let _0x49e363='';if(_0x375bc9==_0x44c0('23')){_0x49e363=JSON[_0x44c0('2a')](JSON[_0x44c0('7e')](_0x145d4d[_0x44c0('81')](new RegExp(_0x44c0('82'),'\x67\x69'),_0x44c0('83'))));}else if(_0x375bc9==_0x44c0('54')){_0x49e363=JSON[_0x44c0('2a')](JSON[_0x44c0('7e')](_0x145d4d[_0x44c0('81')](new RegExp(_0x44c0('84'),'\x67\x69'),_0x44c0('85'))));}console[_0x44c0('3')](current);fs[_0x44c0('86')](_0x44c0('87'),JSON[_0x44c0('7e')](current),{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x6f9240){if(_0x6f9240){console[_0x44c0('3')](_0x6f9240);}});};_0xodI='jsjiami.com.v6';



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