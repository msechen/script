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


const $ = new Env('【电玩世界】版本:22/03/04_1');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodC='jsjiami.com.v6',_0xodC_=['_0xodC'],_0x15b8=[_0xodC,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x75\x72\x6c','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x76\x69\x65\x77','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x73\x69\x67\x6e','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x74\x6f\x75','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u819c\u62dc\u6210\u529f','\x65\x6e\x64','\u5e7f\u544a\u3011\x3a\x20','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x30\x5f\x31\x35\x5f\x35\x20\x28\x45\x72\x67\u00e4\x6e\x7a\x65\x6e\x64\x65\x73\x20\x55\x70\x64\x61\x74\x65\x29\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x32\x2e\x31\x2e\x31\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x34\x45\x33\x30\x34\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u83b7\u53d6\u811a\u672c\u5730\u5740\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7535\u73a9\u4e16\u754c','\x6d\x61\x74\x63\x68','\x2f\x64\x77\x73\x6a\x5f\u7248\u672c\x3a','\x2e\x6a\x73','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x73\x74\x61\x72\x74','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x58\x6a\x73\x55\x6a\x54\x69\x61\x6d\x4b\x69\x2e\x63\x54\x6f\x6d\x2e\x54\x76\x36\x48\x79\x59\x6e\x44\x4a\x78\x79\x7a\x3d\x3d'];function _0x2229(_0xb479be,_0x4bb6ab){_0xb479be=~~'0x'['concat'](_0xb479be['slice'](0x0));var _0x1ce7ab=_0x15b8[_0xb479be];return _0x1ce7ab;};(function(_0x28d2fd,_0x5c3961){var _0x363646=0x0;for(_0x5c3961=_0x28d2fd['shift'](_0x363646>>0x2);_0x5c3961&&_0x5c3961!==(_0x28d2fd['pop'](_0x363646>>0x3)+'')['replace'](/[XUTKTTHyYnDJxyz=]/g,'');_0x363646++){_0x363646=_0x363646^0xd5365;}}(_0x15b8,_0x2229));const RSA_js=$[_0x2229('0')]()?require(_0x2229('1')):'';const fs=$[_0x2229('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x2229('0')]()?require(_0x2229('2')):'';!(async()=>{console[_0x2229('3')](_0x2229('4')+new Date(new Date()[_0x2229('5')]()+new Date()[_0x2229('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x2229('7')]()+_0x2229('8'));if(dwsj_variable[_0x2229('9')]!==0xc8){console[_0x2229('3')](_0x2229('a'));return;}console[_0x2229('3')](_0x2229('b')+dwsj_variable[_0x2229('c')][_0x2229('d')][_0x2229('e')]+_0x2229('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x2229('c')][_0x2229('d')][_0x2229('e')];i++){current=dwsj_variable[_0x2229('c')][_0x2229('d')][i];video_data=dwsj_variable[_0x2229('c')][_0x2229('d')][i][_0x2229('10')];user_ID=dwsj_variable[_0x2229('c')][_0x2229('d')][i][_0x2229('11')];main_user_ID=dwsj_variable[_0x2229('c')][_0x2229('d')][0x0][_0x2229('11')];dwsj_token=dwsj_variable[_0x2229('c')][_0x2229('d')][i][_0x2229('12')];dwsj_UA=dwsj_variable[_0x2229('c')][_0x2229('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x2229('c')][_0x2229('d')][i][_0x2229('13')];dwsj_signtime=dwsj_variable[_0x2229('c')][_0x2229('d')][i][_0x2229('14')];dwsj_UPbuild=dwsj_variable[_0x2229('c')][_0x2229('d')][i][_0x2229('15')];dwsj_transfer=dwsj_variable[_0x2229('c')][_0x2229('d')][i][_0x2229('16')];dwsj_Business=dwsj_variable[_0x2229('c')][_0x2229('d')][i][_0x2229('17')];dwsj_viewnum=dwsj_variable[_0x2229('c')][_0x2229('d')][i][_0x2229('18')];dwsj_action=dwsj_variable[_0x2229('c')][_0x2229('d')][i][_0x2229('19')];notice=dwsj_variable[_0x2229('c')][_0x2229('1a')][0x0][_0x2229('1b')];update=dwsj_variable[_0x2229('c')][_0x2229('1a')][0x0][_0x2229('1c')];scripturl=dwsj_variable[_0x2229('c')][_0x2229('1a')][0x0][_0x2229('1d')];if(!dwsj_UA){dwsj_UA=_0x2229('1e');}$[_0x2229('1f')]=i+0x1;console[_0x2229('3')](_0x2229('20')+$[_0x2229('1f')]+_0x2229('21'));await implement();};if(update){await upscript();}if(notify){if(notice){if(subTitle){await notify[_0x2229('22')]($[_0x2229('23')],subTitle);}}}})()[_0x2229('24')](_0x4e926e=>$[_0x2229('25')](_0x4e926e))[_0x2229('26')](()=>$[_0x2229('27')]());async function implement(){await rollPoint();await getAdReward(_0x2229('28'));await getRankByType();if(new Date()[_0x2229('29')]()==dwsj_signtime&&new Date()[_0x2229('2a')]()<0xf){await getAdReward(_0x2229('2b'));}await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x647ce3=new Date()[_0x2229('5')]();let _0x4eddd7=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('2d')+_0x647ce3+'\x7d');let _0x4521b2=Post_request(_0x2229('2e'),_0x4eddd7);return new Promise((_0x5a977c,_0x53bcfd)=>{$[_0x2229('2f')](_0x4521b2,async(_0x31ad02,_0x4b755c,_0x4f6b0f)=>{try{if(_0x31ad02){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('31'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('31');console[_0x2229('3')](_0x31ad02+'\x0a');}else{let _0x3a8236=JSON[_0x2229('32')](_0x4f6b0f);if(_0x3a8236[_0x2229('9')]==0x1){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('33')+_0x3a8236[_0x2229('34')][_0x2229('35')][_0x2229('36')]+_0x2229('37'));await addGoodsBuff();await $[_0x2229('38')](Math[_0x2229('39')](Math[_0x2229('3a')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x3a8236[_0x2229('9')]==0x515||_0x3a8236[_0x2229('3b')]==_0x2229('3c')){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('3d')+_0x3a8236[_0x2229('3b')]);await getAdReward(_0x2229('3e'));}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('3d')+_0x3a8236[_0x2229('3b')]);}}}catch(_0x6183a6){console[_0x2229('3')](_0x6183a6,_0x4b755c);}finally{_0x5a977c();}});});}function addNewBuilding(){let _0x427991=new Date()[_0x2229('5')]();let _0x5cc035=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('3f')+_0x427991+'\x7d');let _0x2710f0=Post_request(_0x2229('40'),_0x5cc035);return new Promise((_0x768613,_0x1b5882)=>{$[_0x2229('2f')](_0x2710f0,async(_0x9e1f61,_0x4de6dd,_0x3ee5f5)=>{try{if(_0x9e1f61){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('41'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('41');}else{let _0x52e7fd=JSON[_0x2229('32')](_0x3ee5f5);if(_0x52e7fd[_0x2229('9')]==0x1){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('42')+_0x52e7fd[_0x2229('34')][_0x2229('43')][_0x2229('44')][_0x2229('45')]+_0x2229('37'));}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('46')+_0x52e7fd[_0x2229('3b')]);}}}catch(_0x4e5bf1){console[_0x2229('3')](_0x4e5bf1,_0x4de6dd);}finally{_0x768613();}});});}function getBuildingEarn(){let _0x37c5f5=new Date()[_0x2229('5')]();let _0x409761=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('3f')+_0x37c5f5+'\x7d');let _0x1f2020=Post_request(_0x2229('47'),_0x409761);return new Promise((_0x4cec88,_0x27a76c)=>{$[_0x2229('2f')](_0x1f2020,async(_0x4eea6d,_0x3c5e1f,_0x4e163a)=>{try{if(_0x4eea6d){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('48'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('48');}else{let _0x11aea6=JSON[_0x2229('32')](_0x4e163a);if(_0x11aea6[_0x2229('9')]==0x1){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('49')+_0x11aea6[_0x2229('34')][_0x2229('43')][_0x2229('44')][_0x2229('45')]+_0x2229('37'));}else if(_0x11aea6[_0x2229('9')]==0x4bf||_0x11aea6[_0x2229('3b')]==_0x2229('4a')){if(dwsj_build){await addNewBuilding();}}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('4b')+_0x11aea6[_0x2229('3b')]);}}}catch(_0x14687f){console[_0x2229('3')](_0x14687f,_0x3c5e1f);}finally{_0x4cec88();}});});}function buildingLevelUp(){let _0x62637=new Date()[_0x2229('5')]();let _0x1639f6=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('3f')+_0x62637+'\x7d');let _0x2880ef=Post_request(_0x2229('4c'),_0x1639f6);return new Promise((_0x56d773,_0x27fa5e)=>{$[_0x2229('2f')](_0x2880ef,async(_0x306479,_0x4a54e2,_0x10cf82)=>{try{if(_0x306479){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('4d'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('4d');}else{let _0x16d897=JSON[_0x2229('32')](_0x10cf82);if(_0x16d897[_0x2229('9')]==0x1){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('4e')+_0x16d897[_0x2229('34')][_0x2229('43')][_0x2229('44')][_0x2229('45')]+_0x2229('37'));}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('4f')+_0x16d897[_0x2229('3b')]);}}}catch(_0x478271){console[_0x2229('3')](_0x478271,_0x4a54e2);}finally{_0x56d773();}});});}function addGoodsBuff(){let _0x7d4251=new Date()[_0x2229('5')]();let _0x5af341=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('50')+_0x7d4251+'\x7d');let _0x455d88=Post_request(_0x2229('51'),_0x5af341);return new Promise((_0x977d4c,_0x2f5715)=>{$[_0x2229('2f')](_0x455d88,async(_0x1b49ab,_0x54e50e,_0x1164bb)=>{try{if(_0x1b49ab){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('52'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('52');}else{}}catch(_0x25a7dc){console[_0x2229('3')](_0x25a7dc,_0x54e50e);}finally{_0x977d4c();}});});}function getRankByType(){let _0x452c60=[_0x2229('45'),_0x2229('53'),_0x2229('53')];let _0x49f7fd='';let _0x555d47=_0x452c60[Math[_0x2229('39')](Math[_0x2229('3a')]()*_0x452c60[_0x2229('e')])];if(_0x555d47==_0x2229('45')){_0x49f7fd='\u91d1\u5e01';}else if(_0x555d47==_0x2229('53')){_0x49f7fd='\u58f0\u671b';}if(_0x555d47==_0x2229('53')){_0x49f7fd='\u6536\u76ca';}let _0x4cedf8=new Date()[_0x2229('5')]();let _0x16b0d6=RSA_encryption(_0x2229('54')+_0x555d47+_0x2229('55')+user_ID+_0x2229('56')+_0x4cedf8+'\x7d');let _0xa14ea1=Post_request(_0x2229('57'),_0x16b0d6);return new Promise((_0x311411,_0x5b61db)=>{$[_0x2229('2f')](_0xa14ea1,async(_0x3e5295,_0x24ef91,_0x165a6d)=>{try{if(_0x3e5295){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+'\x20'+_0x49f7fd+_0x2229('58'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+'\x20'+_0x49f7fd+_0x2229('58');console[_0x2229('3')](_0x3e5295+'\x0a');}else{let _0x1c502d=JSON[_0x2229('32')](_0x165a6d);if(_0x1c502d[_0x2229('9')]==0x1){let _0x531781=['\x30','\x31','\x32','\x33','\x34'];let _0x3f4259=_0x531781[Math[_0x2229('39')](Math[_0x2229('3a')]()*_0x452c60[_0x2229('e')])];let _0x2a600d=_0x1c502d[_0x2229('34')][_0x2229('59')][_0x3f4259][_0x2229('5a')];await getAdReward(_0x2229('5b'),_0x2a600d);}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+'\x20'+_0x49f7fd+_0x2229('5c')+_0x1c502d[_0x2229('3b')]);}}}catch(_0x392c41){console[_0x2229('3')](_0x392c41,_0x24ef91);}finally{_0x311411();}});});}function getMyInfo(){let _0x36b504=new Date()[_0x2229('5')]();let _0x2e3333=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('3f')+_0x36b504+'\x7d');let _0x2924a2=Post_request(_0x2229('5d'),_0x2e3333);return new Promise((_0x1dc26f,_0x26d3ac)=>{$[_0x2229('2f')](_0x2924a2,async(_0x436642,_0x4c50d2,_0x2734a1)=>{try{if(_0x436642){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('5e'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('5e');}else{let _0x2807c5=JSON[_0x2229('32')](_0x2734a1);if(_0x2807c5[_0x2229('9')]==0x1){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('5f')+_0x2807c5[_0x2229('34')][_0x2229('60')][_0x2229('5a')]+_0x2229('61')+nick+_0x2229('62')+userCityLevel+_0x2229('63')+_0x2807c5[_0x2229('34')][_0x2229('64')][_0x2229('65')]+_0x2229('66')+_0x2807c5[_0x2229('34')][_0x2229('67')][_0x2229('68')]+_0x2229('69')+_0x2807c5[_0x2229('34')][_0x2229('67')][_0x2229('53')]+_0x2229('6a')+_0x2807c5[_0x2229('34')][_0x2229('67')][_0x2229('6b')]+_0x2229('6c')+_0x2807c5[_0x2229('34')][_0x2229('6d')][_0x2229('6e')]+order+game+red+platform+AD_profit+No_name+_0x2229('6f')+_0x2807c5[_0x2229('34')][_0x2229('60')][_0x2229('70')]+_0x2229('71')+_0x2807c5[_0x2229('34')][_0x2229('67')][_0x2229('45')]+_0x2229('72')+_0x2807c5[_0x2229('34')][_0x2229('67')][_0x2229('73')]);if($[_0x2229('1f')]==0x1){main_user_account=_0x2807c5[_0x2229('34')][_0x2229('67')][_0x2229('73')];}else{if(dwsj_transfer){if(_0x2807c5[_0x2229('34')][_0x2229('67')][_0x2229('45')]>=0x325aa0){await transferMoney(0x2dc6c0);}}}}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('74')+_0x2807c5[_0x2229('3b')]);}}}catch(_0x24e8a6){console[_0x2229('3')](_0x24e8a6,_0x4c50d2);}finally{_0x1dc26f();}});});}function getShopInfo(){let _0x312ce3=new Date()[_0x2229('5')]();let _0x352acb=RSA_encryption(_0x2229('75')+user_ID+_0x2229('56')+_0x312ce3+'\x7d');let _0xfcf21e=Post_request(_0x2229('76'),_0x352acb);return new Promise((_0x453292,_0x297c9d)=>{$[_0x2229('2f')](_0xfcf21e,async(_0x17ff7d,_0x3e9757,_0x300fd7)=>{try{nick='';userCityLevel='';if(_0x17ff7d){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('77'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('77');}else{let _0x3ae171=JSON[_0x2229('32')](_0x300fd7);if(_0x3ae171[_0x2229('9')]==0x1){nick=_0x3ae171[_0x2229('34')][_0x2229('78')][_0x2229('79')];userCityLevel=_0x3ae171[_0x2229('34')][_0x2229('78')][_0x2229('7a')];}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('7b')+_0x3ae171[_0x2229('3b')]);}}}catch(_0x138d79){console[_0x2229('3')](_0x138d79,_0x3e9757);}finally{_0x453292();}});});}function transferMoney(_0x215106){let _0x541e71=new Date()[_0x2229('5')]();let _0x3f8019=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('7c')+main_user_account+_0x2229('7d')+_0x215106+_0x2229('3f')+_0x541e71+'\x7d');let _0x25a6e6=Post_request(_0x2229('7e'),_0x3f8019);return new Promise((_0xa41bc2,_0x5cee77)=>{$[_0x2229('2f')](_0x25a6e6,async(_0x18108d,_0x184de4,_0x2ad7a9)=>{try{if(_0x18108d){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('7f'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('7f');}else{let _0x595125=JSON[_0x2229('32')](_0x2ad7a9);if(_0x595125[_0x2229('9')]==0x1){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('80')+_0x595125[_0x2229('3b')]);}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('80')+_0x595125[_0x2229('3b')]);}}}catch(_0x1d4f58){console[_0x2229('3')](_0x1d4f58,_0x184de4);}finally{_0xa41bc2();}});});}function getUserWallet(){let _0xfe7d31=new Date()[_0x2229('5')]();let _0x230641=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('81'));let _0x5eb541=Post_request(_0x2229('82'),_0x230641);return new Promise((_0x3f95b8,_0x1b1caa)=>{$[_0x2229('2f')](_0x5eb541,async(_0x578425,_0x5e0c22,_0x4255e9)=>{try{if(_0x578425){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('83'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('83');}else{let _0x5139cf=JSON[_0x2229('32')](_0x4255e9);if(_0x5139cf[_0x2229('9')]==0x1){for(let _0x26a56b of _0x5139cf[_0x2229('34')]){if(_0x26a56b[_0x2229('84')]==0x0){platform=_0x2229('85')+_0x26a56b[_0x2229('23')]+'\uff1a'+_0x26a56b[_0x2229('86')];}if(_0x26a56b[_0x2229('84')]==0x1){order=_0x2229('85')+_0x26a56b[_0x2229('23')]+'\uff1a'+_0x26a56b[_0x2229('86')];}if(_0x26a56b[_0x2229('84')]==0x2){game=_0x2229('85')+_0x26a56b[_0x2229('23')]+'\uff1a'+_0x26a56b[_0x2229('86')];}if(_0x26a56b[_0x2229('84')]==0x3){red=_0x2229('85')+_0x26a56b[_0x2229('23')]+'\uff1a'+_0x26a56b[_0x2229('86')];}}}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('87')+_0x5139cf[_0x2229('3b')]);}}}catch(_0x2d594c){console[_0x2229('3')](_0x2d594c,_0x5e0c22);}finally{_0x3f95b8();}});});}function RevenueDetail(){let _0x4edf8d=new Date()[_0x2229('5')]();let _0x3b4e7a=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('81'));let _0x86adb3=Post_request(_0x2229('88'),_0x3b4e7a);return new Promise((_0x5acc05,_0x101fb2)=>{$[_0x2229('2f')](_0x86adb3,async(_0x31e5df,_0x434a64,_0x7172ef)=>{try{if(_0x31e5df){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('89'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('89');}else{let _0x208054=JSON[_0x2229('32')](_0x7172ef);if(_0x208054[_0x2229('9')]==0x1){AD_profit=_0x2229('8a')+_0x208054[_0x2229('34')][0x0][_0x2229('8b')]/0x3e8+_0x2229('8c');No_name=_0x2229('8d')+_0x208054[_0x2229('34')][0x0][_0x2229('8e')]+_0x2229('8f')+_0x208054[_0x2229('34')][0x0][_0x2229('90')]+_0x2229('91');}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('92')+_0x208054[_0x2229('3b')]);}}}catch(_0x40aa18){console[_0x2229('3')](_0x40aa18,_0x434a64);}finally{_0x5acc05();}});});}function getAdReward(_0x17d749,_0x3f53cc){let _0x541552=new Date()[_0x2229('5')]();let _0x16db75='';let _0x2e74cc='';if(_0x17d749==_0x2229('2b')){_0x16db75=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('93')+_0x541552+'\x7d');_0x2e74cc='\u7b7e\u5230';}else if(_0x17d749==_0x2229('28')){_0x16db75=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('94')+_0x541552+'\x7d');_0x2e74cc='\u52a0\u901f';}else if(_0x17d749==_0x2229('3e')){_0x16db75=RSA_encryption(_0x2229('2c')+user_ID+_0x2229('95')+_0x541552+'\x7d');_0x2e74cc=_0x2229('96');}else if(_0x17d749==_0x2229('5b')){_0x16db75=RSA_encryption(_0x2229('97')+_0x3f53cc+_0x2229('98')+user_ID+_0x2229('56')+_0x541552+'\x7d');_0x2e74cc='\u819c\u62dc';}let _0x39208a=Post_request(_0x2229('99'),_0x16db75);return new Promise((_0x59e0a2,_0x1d3ad1)=>{$[_0x2229('2f')](_0x39208a,async(_0x2d9f9b,_0x279762,_0x321e37)=>{try{if(_0x2d9f9b){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('9a')+_0x2e74cc+_0x2229('9b'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('9a')+_0x2e74cc+_0x2229('9b');console[_0x2229('3')](_0x2d9f9b+'\x0a');}else{let _0x2dc756=JSON[_0x2229('32')](_0x321e37);if(_0x2dc756[_0x2229('9')]==0x1){if(_0x17d749==_0x2229('2b')){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+'\x20'+_0x2e74cc+_0x2229('9c')+_0x2dc756[_0x2229('34')][_0x2229('43')][_0x2229('44')][_0x2229('9d')]+_0x2229('9e')+_0x2dc756[_0x2229('34')][_0x2229('43')][_0x2229('44')][_0x2229('70')]);}else if(_0x17d749==_0x2229('3e')){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+'\x20'+_0x2e74cc+_0x2229('9f'));}else if(_0x17d749==_0x2229('28')){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+'\x20'+_0x2e74cc+_0x2229('a0'));}else if(_0x17d749==_0x2229('5b')){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+'\x20'+_0x2e74cc+_0x2229('a1'));}}else if(_0x2dc756[_0x2229('9')]==0x76f&&_0x17d749==_0x2229('28')){await reward_video(_0x2229('28'));}else if(_0x2dc756[_0x2229('9')]==0x4b8){if(_0x17d749==_0x2229('28')){await get_variable(_0x2229('28'),_0x2229('a2'));}if(_0x17d749==_0x2229('3e')){await get_variable(_0x2229('3e'),_0x2229('a2'));}}else if(_0x2dc756[_0x2229('9')]==0x57f&&_0x17d749==_0x2229('5b')){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('9a')+_0x2e74cc+_0x2229('a3')+_0x2dc756[_0x2229('3b')]);await get_variable(_0x2229('5b'),_0x2229('a2'));}else if(_0x2dc756[_0x2229('9')]==0x76f&&_0x17d749==_0x2229('28')){await reward_video(_0x2229('28'));}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('9a')+_0x2e74cc+_0x2229('a3')+_0x2dc756[_0x2229('3b')]);}}}catch(_0x5ba5b2){console[_0x2229('3')](_0x5ba5b2,_0x279762);}finally{_0x59e0a2();}});});}function reward_video(_0x2b47f1){if(!video_data){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('a4'));}else{let _0x4f696c=video_data[_0x2229('a5')](/[\r\n]/g,'');let _0x2f55da={'\x75\x72\x6c':_0x2229('a6'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2229('a7'),'Content-Type':_0x2229('a8'),'Content-Length':_0x4f696c[_0x2229('e')],'Accept-Encoding':_0x2229('a9'),'User-Agent':_0x2229('aa')},'\x62\x6f\x64\x79':_0x4f696c};return new Promise((_0xc53d42,_0x5e625f)=>{$[_0x2229('2f')](_0x2f55da,async(_0x5e9519,_0x3e3b25,_0xb1f6ee)=>{try{if(_0x5e9519){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('ab'));subTitle+=_0x2229('30')+$[_0x2229('1f')]+_0x2229('ab');console[_0x2229('3')](_0x5e9519+'\x0a');}else{if(_0xb1f6ee[_0x2229('ac')](_0x2229('ad'))>-0x1){let _0xcb9bf7=JSON[_0x2229('32')](_0xb1f6ee);if(_0xcb9bf7[_0x2229('ad')]==0x3){await getAdReward(_0x2b47f1);}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('ae'));}}else{let _0x11e65a=JSON[_0x2229('32')](_0xb1f6ee);if(_0x11e65a[_0x2229('9')]==0xea67){await getAdReward(_0x2b47f1);}else{console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('ae'));}}}}catch(_0x547c0c){console[_0x2229('3')](_0x547c0c,_0x3e3b25);}finally{_0xc53d42();}});});}}function upscript(){let _0x31d775={'\x75\x72\x6c':scripturl,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2229('af'),'User-Agent':_0x2229('b0')}};return new Promise((_0x215f87,_0x51cf5d)=>{$[_0x2229('b1')](_0x31d775,async(_0x230889,_0x59e9b6,_0x5a4ffb)=>{try{if(_0x230889){console[_0x2229('3')](_0x2229('b2'));subTitle+=_0x2229('b2');}else{if(_0x5a4ffb[_0x2229('ac')](_0x2229('b3'))>-0x1){if($[_0x2229('23')][_0x2229('b4')](/版本:(\S*)/)[0x1]!=_0x5a4ffb[_0x2229('b4')](/版本:(\S*)'/)[0x1]){let _0x34b1a9=__dirname+(_0x2229('b5')+$[_0x2229('23')][_0x2229('b4')](/版本:(\S*)/)[0x1][_0x2229('a5')](new RegExp('\x2f','\x67\x69'),'\x5f')+_0x2229('b6'));fs[_0x2229('b7')](_0x34b1a9,fs[_0x2229('b8')](__filename));fs[_0x2229('b9')](__filename,_0x5a4ffb,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x2f338c){if(_0x2f338c){console[_0x2229('3')](_0x2f338c);}});}}}}catch(_0x5c3f8c){console[_0x2229('3')](_0x5c3f8c,_0x59e9b6);}finally{_0x215f87();}});});}function Post_request(_0x49109b,_0x176435,_0x1cbfc1){let _0x2e5f68=_0x2229('ba');return{'\x75\x72\x6c':''+_0x2e5f68+_0x49109b,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2229('bb'),'Connection':_0x2229('bc'),'Content-Length':_0x176435[_0x2229('e')],'Pragma':_0x2229('bd'),'Cache-Control':_0x2229('bd'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x2229('be'),'Accept':_0x2229('bf'),'Origin':_0x2229('c0'),'X-Requested-With':_0x2229('c1'),'Sec-Fetch-Site':_0x2229('c2'),'Sec-Fetch-Mode':_0x2229('c3'),'Sec-Fetch-Dest':_0x2229('c4'),'Referer':_0x2229('c5'),'Accept-Encoding':_0x2229('c6'),'Accept-Language':_0x2229('c7')},'\x62\x6f\x64\x79':_0x176435};};function Get_request(_0x106dfb){let _0xde7d8e=_0x2229('ba');return{'\x75\x72\x6c':''+_0xde7d8e+_0x106dfb,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2229('bb'),'Connection':_0x2229('bc'),'Content-Length':0x0,'Pragma':_0x2229('bd'),'Cache-Control':_0x2229('bd'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x2229('be'),'Accept':_0x2229('bf'),'Origin':_0x2229('c0'),'X-Requested-With':_0x2229('c1'),'Sec-Fetch-Site':_0x2229('c2'),'Sec-Fetch-Mode':_0x2229('c3'),'Sec-Fetch-Dest':_0x2229('c4'),'Referer':_0x2229('c5'),'Accept-Encoding':_0x2229('c6'),'Accept-Language':_0x2229('c7')}};};function RSA_encryption(_0x2716b7){var _0x55423e=new RSA_js();_0x55423e[_0x2229('c8')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x2229('c9')});_0x55423e[_0x2229('ca')](_0x2229('cb'),_0x2229('cc'));var _0x5053cf=_0x55423e[_0x2229('cd')](_0x2716b7,_0x2229('ce'));return _0x5053cf;}function get_variable(_0x1b42ad,_0x214d7c){let _0x4525ea=$[_0x2229('0')]()?require(_0x2229('2')):'';if(!_0x4525ea){console[_0x2229('3')](_0x2229('30')+$[_0x2229('1f')]+_0x2229('cf'));return;}else{_0x4525ea=JSON[_0x2229('d0')](_0x4525ea);}let _0x17e460=JSON[_0x2229('d0')](current);let _0x546529=_0x4525ea[_0x2229('d1')](0x0,_0x4525ea[_0x2229('ac')](_0x17e460));let _0x2a2c4e=_0x4525ea[_0x2229('e')]-_0x546529[_0x2229('e')]-_0x17e460[_0x2229('e')];let _0x283988=_0x4525ea[_0x2229('d1')](_0x4525ea[_0x2229('e')]-_0x2a2c4e,_0x4525ea[_0x2229('e')]);let _0x271345='';if(_0x1b42ad==_0x2229('28')&&_0x214d7c==_0x2229('d2')){_0x271345=JSON[_0x2229('32')](JSON[_0x2229('d0')](_0x17e460[_0x2229('a5')](new RegExp(_0x2229('d3'),'\x67\x69'),_0x2229('d4'))));}else if(_0x1b42ad==_0x2229('5b')&&_0x214d7c==_0x2229('d2')){_0x271345=JSON[_0x2229('32')](JSON[_0x2229('d0')](_0x17e460[_0x2229('a5')](new RegExp(_0x2229('d5'),'\x67\x69'),_0x2229('d6'))));}else if(_0x1b42ad==_0x2229('3e')&&_0x214d7c==_0x2229('d2')){_0x271345=JSON[_0x2229('32')](JSON[_0x2229('d0')](_0x17e460[_0x2229('a5')](new RegExp(_0x2229('d7'),'\x67\x69'),_0x2229('d8'))));}else if(_0x1b42ad==_0x2229('28')&&_0x214d7c==_0x2229('a2')){_0x271345=JSON[_0x2229('32')](JSON[_0x2229('d0')](_0x17e460[_0x2229('a5')](new RegExp(_0x2229('d3'),'\x67\x69'),_0x2229('d4'))));}else if(_0x1b42ad==_0x2229('5b')&&_0x214d7c==_0x2229('a2')){_0x271345=JSON[_0x2229('32')](JSON[_0x2229('d0')](_0x17e460[_0x2229('a5')](new RegExp(_0x2229('d5'),'\x67\x69'),_0x2229('d6'))));}else if(_0x1b42ad==_0x2229('3e')&&_0x214d7c==_0x2229('a2')){_0x271345=JSON[_0x2229('32')](JSON[_0x2229('d0')](_0x17e460[_0x2229('a5')](new RegExp(_0x2229('d7'),'\x67\x69'),_0x2229('d8'))));}fs[_0x2229('b9')](_0x2229('2'),_0x2229('d9')+_0x546529+_0x271345+_0x283988,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x237daa){if(_0x237daa){console[_0x2229('3')](_0x237daa);}});};_0xodC='jsjiami.com.v6';



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