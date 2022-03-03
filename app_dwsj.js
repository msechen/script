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


const $ = new Env('【电玩世界】版本:22/03/03_1');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodq='jsjiami.com.v6',_0xodq_=['_0xodq'],_0x28ea=[_0xodq,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x75\x72\x6c','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x76\x69\x65\x77','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x74\x6f\x75','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x63\x65\x69\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x73\x69\x67\x6e','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x30\x5f\x31\x35\x5f\x35\x20\x28\x45\x72\x67\u00e4\x6e\x7a\x65\x6e\x64\x65\x73\x20\x55\x70\x64\x61\x74\x65\x29\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x32\x2e\x31\x2e\x31\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x34\x45\x33\x30\x34\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u83b7\u53d6\u811a\u672c\u5730\u5740\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7535\u73a9\u4e16\u754c','\x2f\x64\x77\x73\x6a\x5f\u7248\u672c\x3a','\x6d\x61\x74\x63\x68','\x2e\x6a\x73','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x46\x48\x6a\x73\x6e\x68\x6a\x44\x68\x77\x62\x67\x71\x69\x61\x74\x6d\x69\x2e\x43\x63\x6f\x6d\x2e\x70\x76\x36\x46\x3d\x3d'];function _0x370c(_0xcd4d3f,_0x193c99){_0xcd4d3f=~~'0x'['concat'](_0xcd4d3f['slice'](0x0));var _0xaac938=_0x28ea[_0xcd4d3f];return _0xaac938;};(function(_0xdac304,_0x5b225){var _0x2d4d21=0x0;for(_0x5b225=_0xdac304['shift'](_0x2d4d21>>0x2);_0x5b225&&_0x5b225!==(_0xdac304['pop'](_0x2d4d21>>0x3)+'')['replace'](/[FHnhDhwbgqtCpF=]/g,'');_0x2d4d21++){_0x2d4d21=_0x2d4d21^0xd4b02;}}(_0x28ea,_0x370c));const RSA_js=$[_0x370c('0')]()?require(_0x370c('1')):'';const fs=$[_0x370c('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x370c('0')]()?require(_0x370c('2')):'';!(async()=>{console[_0x370c('3')](_0x370c('4')+new Date(new Date()[_0x370c('5')]()+new Date()[_0x370c('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x370c('7')]()+_0x370c('8'));if(dwsj_variable[_0x370c('9')]!==0xc8){console[_0x370c('3')](_0x370c('a'));return;}console[_0x370c('3')](_0x370c('b')+dwsj_variable[_0x370c('c')][_0x370c('d')][_0x370c('e')]+_0x370c('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x370c('c')][_0x370c('d')][_0x370c('e')];i++){current=dwsj_variable[_0x370c('c')][_0x370c('d')][i];video_data=dwsj_variable[_0x370c('c')][_0x370c('d')][i][_0x370c('10')];user_ID=dwsj_variable[_0x370c('c')][_0x370c('d')][i][_0x370c('11')];main_user_ID=dwsj_variable[_0x370c('c')][_0x370c('d')][0x0][_0x370c('11')];dwsj_token=dwsj_variable[_0x370c('c')][_0x370c('d')][i][_0x370c('12')];dwsj_UA=dwsj_variable[_0x370c('c')][_0x370c('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x370c('c')][_0x370c('d')][i][_0x370c('13')];dwsj_signtime=dwsj_variable[_0x370c('c')][_0x370c('d')][i][_0x370c('14')];dwsj_UPbuild=dwsj_variable[_0x370c('c')][_0x370c('d')][i][_0x370c('15')];dwsj_transfer=dwsj_variable[_0x370c('c')][_0x370c('d')][i][_0x370c('16')];dwsj_Business=dwsj_variable[_0x370c('c')][_0x370c('d')][i][_0x370c('17')];dwsj_viewnum=dwsj_variable[_0x370c('c')][_0x370c('d')][i][_0x370c('18')];dwsj_action=dwsj_variable[_0x370c('c')][_0x370c('d')][i][_0x370c('19')];notice=dwsj_variable[_0x370c('c')][_0x370c('1a')][0x0][_0x370c('1b')];update=dwsj_variable[_0x370c('c')][_0x370c('1a')][0x0][_0x370c('1c')];scripturl=dwsj_variable[_0x370c('c')][_0x370c('1a')][0x0][_0x370c('1d')];if(!dwsj_UA){dwsj_UA=_0x370c('1e');}$[_0x370c('1f')]=i+0x1;console[_0x370c('3')](_0x370c('20')+$[_0x370c('1f')]+_0x370c('21'));await implement();};if(update){await upscript();}if(notify){if(notice){if(subTitle){await notify[_0x370c('22')]($[_0x370c('23')],subTitle);}}}})()[_0x370c('24')](_0x12e67a=>$[_0x370c('25')](_0x12e67a))[_0x370c('26')](()=>$[_0x370c('27')]());async function implement(){await rollPoint();await getAdReward(_0x370c('28'));await getRankByType();await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x36299f=new Date()[_0x370c('5')]();let _0x12c14=RSA_encryption(_0x370c('29')+user_ID+_0x370c('2a')+_0x36299f+'\x7d');let _0x38b267=Post_request(_0x370c('2b'),_0x12c14);return new Promise((_0x1a4c75,_0x3e2b29)=>{$[_0x370c('2c')](_0x38b267,async(_0x199b9b,_0x2d5314,_0x5450a4)=>{try{if(_0x199b9b){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('2e'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('2e');console[_0x370c('3')](_0x199b9b+'\x0a');}else{let _0x15895a=JSON[_0x370c('2f')](_0x5450a4);if(_0x15895a[_0x370c('9')]==0x1){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('30')+_0x15895a[_0x370c('31')][_0x370c('32')][_0x370c('33')]+_0x370c('34'));await addGoodsBuff();await $[_0x370c('35')](Math[_0x370c('36')](Math[_0x370c('37')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x15895a[_0x370c('9')]==0x515||_0x15895a[_0x370c('38')]==_0x370c('39')){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('3a')+_0x15895a[_0x370c('38')]);await getAdReward(_0x370c('3b'));}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('3a')+_0x15895a[_0x370c('38')]);}}}catch(_0x52bf64){console[_0x370c('3')](_0x52bf64,_0x2d5314);}finally{_0x1a4c75();}});});}function addNewBuilding(){let _0x41814c=new Date()[_0x370c('5')]();let _0x495392=RSA_encryption(_0x370c('29')+user_ID+_0x370c('3c')+_0x41814c+'\x7d');let _0x13e523=Post_request(_0x370c('3d'),_0x495392);return new Promise((_0x204a4d,_0x400cf4)=>{$[_0x370c('2c')](_0x13e523,async(_0x2af6b0,_0x3db4f3,_0x52dffb)=>{try{if(_0x2af6b0){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('3e'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('3e');}else{let _0x1b0391=JSON[_0x370c('2f')](_0x52dffb);if(_0x1b0391[_0x370c('9')]==0x1){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('3f')+_0x1b0391[_0x370c('31')][_0x370c('40')][_0x370c('41')][_0x370c('42')]+_0x370c('34'));}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('43')+_0x1b0391[_0x370c('38')]);}}}catch(_0xed9f15){console[_0x370c('3')](_0xed9f15,_0x3db4f3);}finally{_0x204a4d();}});});}function getBuildingEarn(){let _0x5d7d88=new Date()[_0x370c('5')]();let _0x57a95b=RSA_encryption(_0x370c('29')+user_ID+_0x370c('3c')+_0x5d7d88+'\x7d');let _0x3a50d4=Post_request(_0x370c('44'),_0x57a95b);return new Promise((_0x5f4727,_0x2ce90a)=>{$[_0x370c('2c')](_0x3a50d4,async(_0x494c01,_0x3f3706,_0x40a1d4)=>{try{if(_0x494c01){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('45'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('45');}else{let _0x1aaa7b=JSON[_0x370c('2f')](_0x40a1d4);if(_0x1aaa7b[_0x370c('9')]==0x1){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('46')+_0x1aaa7b[_0x370c('31')][_0x370c('40')][_0x370c('41')][_0x370c('42')]+_0x370c('34'));}else if(_0x1aaa7b[_0x370c('9')]==0x4bf||_0x1aaa7b[_0x370c('38')]==_0x370c('47')){if(dwsj_build){await addNewBuilding();}}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('48')+_0x1aaa7b[_0x370c('38')]);}}}catch(_0x398dda){console[_0x370c('3')](_0x398dda,_0x3f3706);}finally{_0x5f4727();}});});}function buildingLevelUp(){let _0x59c50a=new Date()[_0x370c('5')]();let _0x356b1d=RSA_encryption(_0x370c('29')+user_ID+_0x370c('3c')+_0x59c50a+'\x7d');let _0x451b79=Post_request(_0x370c('49'),_0x356b1d);return new Promise((_0xd67dc6,_0x1d2140)=>{$[_0x370c('2c')](_0x451b79,async(_0x182ea6,_0xc6e1db,_0x5f0ded)=>{try{if(_0x182ea6){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('4a'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('4a');}else{let _0x2b6c52=JSON[_0x370c('2f')](_0x5f0ded);if(_0x2b6c52[_0x370c('9')]==0x1){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('4b')+_0x2b6c52[_0x370c('31')][_0x370c('40')][_0x370c('41')][_0x370c('42')]+_0x370c('34'));}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('4c')+_0x2b6c52[_0x370c('38')]);}}}catch(_0x16eb71){console[_0x370c('3')](_0x16eb71,_0xc6e1db);}finally{_0xd67dc6();}});});}function addGoodsBuff(){let _0x67bfe7=new Date()[_0x370c('5')]();let _0x587563=RSA_encryption(_0x370c('29')+user_ID+_0x370c('4d')+_0x67bfe7+'\x7d');let _0x518de7=Post_request(_0x370c('4e'),_0x587563);return new Promise((_0x50401d,_0x1f258b)=>{$[_0x370c('2c')](_0x518de7,async(_0x1d7875,_0x2c5e5a,_0x39a140)=>{try{if(_0x1d7875){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('4f'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('4f');}else{}}catch(_0x280871){console[_0x370c('3')](_0x280871,_0x2c5e5a);}finally{_0x50401d();}});});}function getRankByType(){let _0x2b0373=[_0x370c('42'),_0x370c('50'),_0x370c('50')];let _0xfea6be='';let _0x15d63c=_0x2b0373[Math[_0x370c('36')](Math[_0x370c('37')]()*_0x2b0373[_0x370c('e')])];if(_0x15d63c==_0x370c('42')){_0xfea6be='\u91d1\u5e01';}else if(_0x15d63c==_0x370c('50')){_0xfea6be='\u58f0\u671b';}if(_0x15d63c==_0x370c('50')){_0xfea6be='\u6536\u76ca';}let _0x2004a6=new Date()[_0x370c('5')]();let _0x5269a2=RSA_encryption(_0x370c('51')+_0x15d63c+_0x370c('52')+user_ID+_0x370c('53')+_0x2004a6+'\x7d');let _0xf71465=Post_request(_0x370c('54'),_0x5269a2);return new Promise((_0x12a731,_0x16e506)=>{$[_0x370c('2c')](_0xf71465,async(_0x1d7175,_0x169c7a,_0x534e63)=>{try{if(_0x1d7175){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+'\x20'+_0xfea6be+_0x370c('55'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+'\x20'+_0xfea6be+_0x370c('55');console[_0x370c('3')](_0x1d7175+'\x0a');}else{let _0x24b97e=JSON[_0x370c('2f')](_0x534e63);if(_0x24b97e[_0x370c('9')]==0x1){let _0x2e7241=['\x30','\x31','\x32','\x33','\x34'];let _0x2f10f4=_0x2e7241[Math[_0x370c('36')](Math[_0x370c('37')]()*_0x2b0373[_0x370c('e')])];let _0x51e859=_0x24b97e[_0x370c('31')][_0x370c('56')][_0x2f10f4][_0x370c('57')];await getAdReward(_0x370c('58'),_0x51e859);}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+'\x20'+_0xfea6be+_0x370c('59')+_0x24b97e[_0x370c('38')]);}}}catch(_0x45d1af){console[_0x370c('3')](_0x45d1af,_0x169c7a);}finally{_0x12a731();}});});}function getMyInfo(){let _0x3eec31=new Date()[_0x370c('5')]();let _0x4a0667=RSA_encryption(_0x370c('29')+user_ID+_0x370c('3c')+_0x3eec31+'\x7d');let _0x57e612=Post_request(_0x370c('5a'),_0x4a0667);return new Promise((_0xcb9d77,_0x454903)=>{$[_0x370c('2c')](_0x57e612,async(_0x236746,_0x43df6e,_0x3897bf)=>{try{if(_0x236746){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('5b'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('5b');}else{let _0x361f5d=JSON[_0x370c('2f')](_0x3897bf);if(_0x361f5d[_0x370c('9')]==0x1){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('5c')+_0x361f5d[_0x370c('31')][_0x370c('5d')][_0x370c('57')]+_0x370c('5e')+nick+_0x370c('5f')+userCityLevel+_0x370c('60')+_0x361f5d[_0x370c('31')][_0x370c('61')][_0x370c('62')]+_0x370c('63')+_0x361f5d[_0x370c('31')][_0x370c('64')][_0x370c('65')]+_0x370c('66')+_0x361f5d[_0x370c('31')][_0x370c('64')][_0x370c('50')]+_0x370c('67')+_0x361f5d[_0x370c('31')][_0x370c('64')][_0x370c('68')]+_0x370c('69')+_0x361f5d[_0x370c('31')][_0x370c('6a')][_0x370c('6b')]+order+game+red+platform+AD_profit+No_name+_0x370c('6c')+_0x361f5d[_0x370c('31')][_0x370c('5d')][_0x370c('6d')]+_0x370c('6e')+_0x361f5d[_0x370c('31')][_0x370c('64')][_0x370c('42')]+_0x370c('6f')+_0x361f5d[_0x370c('31')][_0x370c('64')][_0x370c('70')]);if($[_0x370c('1f')]==0x1){main_user_account=_0x361f5d[_0x370c('31')][_0x370c('64')][_0x370c('70')];}else{if(dwsj_transfer){await transferMoney(''+(_0x361f5d[_0x370c('31')][_0x370c('64')][_0x370c('42')]-Math[_0x370c('71')](_0x361f5d[_0x370c('31')][_0x370c('64')][_0x370c('42')]*0.1)));}}}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('72')+_0x361f5d[_0x370c('38')]);}}}catch(_0x184ab2){console[_0x370c('3')](_0x184ab2,_0x43df6e);}finally{_0xcb9d77();}});});}function getShopInfo(){let _0x767dbb=new Date()[_0x370c('5')]();let _0x35439f=RSA_encryption(_0x370c('73')+user_ID+_0x370c('53')+_0x767dbb+'\x7d');let _0x485974=Post_request(_0x370c('74'),_0x35439f);return new Promise((_0x49150d,_0xc80ecf)=>{$[_0x370c('2c')](_0x485974,async(_0x41914b,_0x57a710,_0x1f4f3b)=>{try{nick='';userCityLevel='';if(_0x41914b){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('75'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('75');}else{let _0x249432=JSON[_0x370c('2f')](_0x1f4f3b);if(_0x249432[_0x370c('9')]==0x1){nick=_0x249432[_0x370c('31')][_0x370c('76')][_0x370c('77')];userCityLevel=_0x249432[_0x370c('31')][_0x370c('76')][_0x370c('78')];}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('79')+_0x249432[_0x370c('38')]);}}}catch(_0x4d2fdc){console[_0x370c('3')](_0x4d2fdc,_0x57a710);}finally{_0x49150d();}});});}function transferMoney(_0x197df2){let _0x50ca37=new Date()[_0x370c('5')]();let _0x4c3b6e=RSA_encryption(_0x370c('29')+user_ID+_0x370c('7a')+main_user_account+_0x370c('7b')+_0x197df2+_0x370c('3c')+_0x50ca37+'\x7d');let _0x45fa17=Post_request(_0x370c('7c'),_0x4c3b6e);return new Promise((_0x433a53,_0x676f16)=>{$[_0x370c('2c')](_0x45fa17,async(_0x52adda,_0x141d9a,_0x165c47)=>{try{if(_0x52adda){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('7d'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('7d');}else{let _0x552e96=JSON[_0x370c('2f')](_0x165c47);if(_0x552e96[_0x370c('9')]==0x1){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('7e')+_0x552e96[_0x370c('38')]);}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('7e')+_0x552e96[_0x370c('38')]);}}}catch(_0x58eb90){console[_0x370c('3')](_0x58eb90,_0x141d9a);}finally{_0x433a53();}});});}function getUserWallet(){let _0x2f778b=new Date()[_0x370c('5')]();let _0x255786=RSA_encryption(_0x370c('29')+user_ID+_0x370c('7f'));let _0x484c5a=Post_request(_0x370c('80'),_0x255786);return new Promise((_0x736366,_0x258d06)=>{$[_0x370c('2c')](_0x484c5a,async(_0x52f8ae,_0x4e8008,_0x13086f)=>{try{if(_0x52f8ae){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('81'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('81');}else{let _0x4d7163=JSON[_0x370c('2f')](_0x13086f);if(_0x4d7163[_0x370c('9')]==0x1){for(let _0x4a0995 of _0x4d7163[_0x370c('31')]){if(_0x4a0995[_0x370c('82')]==0x0){platform=_0x370c('83')+_0x4a0995[_0x370c('23')]+'\uff1a'+_0x4a0995[_0x370c('84')];}if(_0x4a0995[_0x370c('82')]==0x1){order=_0x370c('83')+_0x4a0995[_0x370c('23')]+'\uff1a'+_0x4a0995[_0x370c('84')];}if(_0x4a0995[_0x370c('82')]==0x2){game=_0x370c('83')+_0x4a0995[_0x370c('23')]+'\uff1a'+_0x4a0995[_0x370c('84')];}if(_0x4a0995[_0x370c('82')]==0x3){red=_0x370c('83')+_0x4a0995[_0x370c('23')]+'\uff1a'+_0x4a0995[_0x370c('84')];}}}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('85')+_0x4d7163[_0x370c('38')]);}}}catch(_0x4c72cb){console[_0x370c('3')](_0x4c72cb,_0x4e8008);}finally{_0x736366();}});});}function RevenueDetail(){let _0x1a61af=new Date()[_0x370c('5')]();let _0x2b0816=RSA_encryption(_0x370c('29')+user_ID+_0x370c('7f'));let _0x38e6a6=Post_request(_0x370c('86'),_0x2b0816);return new Promise((_0x12f684,_0x19d165)=>{$[_0x370c('2c')](_0x38e6a6,async(_0x4fc25b,_0xc1f72,_0x117c75)=>{try{if(_0x4fc25b){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('87'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('87');}else{let _0x441da6=JSON[_0x370c('2f')](_0x117c75);if(_0x441da6[_0x370c('9')]==0x1){AD_profit=_0x370c('88')+_0x441da6[_0x370c('31')][0x0][_0x370c('89')]/0x3e8+_0x370c('8a');No_name=_0x370c('8b')+_0x441da6[_0x370c('31')][0x0][_0x370c('8c')]+_0x370c('8d')+_0x441da6[_0x370c('31')][0x0][_0x370c('8e')]+_0x370c('8f');}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('90')+_0x441da6[_0x370c('38')]);}}}catch(_0x4fcc61){console[_0x370c('3')](_0x4fcc61,_0xc1f72);}finally{_0x12f684();}});});}function getAdReward(_0x4e9725,_0x731164){let _0x219f07=new Date()[_0x370c('5')]();let _0xd4ca3a='';let _0x17e997='';if(_0x4e9725==_0x370c('91')){_0xd4ca3a=RSA_encryption(_0x370c('29')+user_ID+_0x370c('92')+_0x219f07+'\x7d');_0x17e997='\u7b7e\u5230';}else if(_0x4e9725==_0x370c('28')){_0xd4ca3a=RSA_encryption(_0x370c('29')+user_ID+_0x370c('93')+_0x219f07+'\x7d');_0x17e997='\u52a0\u901f';}else if(_0x4e9725==_0x370c('3b')){_0xd4ca3a=RSA_encryption(_0x370c('29')+user_ID+_0x370c('94')+_0x219f07+'\x7d');_0x17e997=_0x370c('95');}else if(_0x4e9725==_0x370c('58')){_0xd4ca3a=RSA_encryption(_0x370c('96')+_0x731164+_0x370c('97')+user_ID+_0x370c('53')+_0x219f07+'\x7d');_0x17e997='\u819c\u62dc';}let _0x1cac13=Post_request(_0x370c('98'),_0xd4ca3a);return new Promise((_0x26c546,_0x5d0332)=>{$[_0x370c('2c')](_0x1cac13,async(_0x6615bd,_0x485a7d,_0x55fbff)=>{try{if(_0x6615bd){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('99')+_0x17e997+_0x370c('9a'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('99')+_0x17e997+_0x370c('9a');console[_0x370c('3')](_0x6615bd+'\x0a');}else{let _0x4d00ec=JSON[_0x370c('2f')](_0x55fbff);if(_0x4d00ec[_0x370c('9')]==0x1){if(_0x4e9725==_0x370c('91')){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+'\x20'+_0x17e997+_0x370c('9b')+_0x4d00ec[_0x370c('31')][_0x370c('40')][_0x370c('41')][_0x370c('9c')]+_0x370c('9d')+_0x4d00ec[_0x370c('31')][_0x370c('40')][_0x370c('41')][_0x370c('6d')]);}else if(_0x4e9725==_0x370c('3b')){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+'\x20'+_0x17e997+_0x370c('9e'));}else if(_0x4e9725==_0x370c('28')){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+'\x20'+_0x17e997+_0x370c('9f'));}else if(_0x4e9725==_0x370c('58')){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+'\x20'+_0x17e997+_0x370c('a0'));}}else if(_0x4d00ec[_0x370c('9')]==0x76f&&_0x4e9725==_0x370c('28')){await reward_video(_0x370c('28'));}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('99')+_0x17e997+_0x370c('a1')+_0x4d00ec[_0x370c('38')]);}}}catch(_0x1e42dd){console[_0x370c('3')](_0x1e42dd,_0x485a7d);}finally{_0x26c546();}});});}function reward_video(_0xa13741){if(!video_data){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('a2'));}else{let _0x402992=video_data[_0x370c('a3')](/[\r\n]/g,'');let _0x202398={'\x75\x72\x6c':_0x370c('a4'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x370c('a5'),'Content-Type':_0x370c('a6'),'Content-Length':_0x402992[_0x370c('e')],'Accept-Encoding':_0x370c('a7'),'User-Agent':_0x370c('a8')},'\x62\x6f\x64\x79':_0x402992};return new Promise((_0x9bb5c2,_0x1cc9b1)=>{$[_0x370c('2c')](_0x202398,async(_0x522dc2,_0x5f2089,_0x34ec24)=>{try{if(_0x522dc2){console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('a9'));subTitle+=_0x370c('2d')+$[_0x370c('1f')]+_0x370c('a9');console[_0x370c('3')](_0x522dc2+'\x0a');}else{if(_0x34ec24[_0x370c('aa')](_0x370c('ab'))>-0x1){let _0x2d3f12=JSON[_0x370c('2f')](_0x34ec24);if(_0x2d3f12[_0x370c('ab')]==0x3){await getAdReward(_0xa13741);}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('ac'));}}else{let _0x5dc41a=JSON[_0x370c('2f')](_0x34ec24);if(_0x5dc41a[_0x370c('9')]==0xea67){await getAdReward(_0xa13741);}else{console[_0x370c('3')](_0x370c('2d')+$[_0x370c('1f')]+_0x370c('ac'));}}}}catch(_0x26ba7c){console[_0x370c('3')](_0x26ba7c,_0x5f2089);}finally{_0x9bb5c2();}});});}}function upscript(){let _0x3a6365={'\x75\x72\x6c':scripturl,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x370c('ad'),'User-Agent':_0x370c('ae')}};return new Promise((_0x2ce6e0,_0x12b831)=>{$[_0x370c('af')](_0x3a6365,async(_0x5a4ab7,_0x25e6f3,_0x5bc351)=>{try{if(_0x5a4ab7){console[_0x370c('3')](_0x370c('b0'));subTitle+=_0x370c('b0');}else{if(_0x5bc351[_0x370c('aa')](_0x370c('b1'))>-0x1){let _0x5d79d8=__dirname+(_0x370c('b2')+$[_0x370c('23')][_0x370c('b3')](/版本:(\S*)/)[0x1][_0x370c('a3')](new RegExp('\x2f','\x67\x69'),'\x5f')+_0x370c('b4'));fs[_0x370c('b5')](_0x5d79d8,fs[_0x370c('b6')](__filename));fs[_0x370c('b7')](__filename,_0x5bc351,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x2007b9){if(_0x2007b9){console[_0x370c('3')](_0x2007b9);}});}}}catch(_0x5690e3){console[_0x370c('3')](_0x5690e3,_0x25e6f3);}finally{_0x2ce6e0();}});});}function Post_request(_0x20b362,_0x2fef17){return{'\x75\x72\x6c':_0x370c('b8')+_0x20b362,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x370c('b9'),'Connection':_0x370c('ba'),'Content-Length':_0x2fef17[_0x370c('e')],'Pragma':_0x370c('bb'),'Cache-Control':_0x370c('bb'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x370c('bc'),'Accept':_0x370c('bd'),'Origin':_0x370c('be'),'X-Requested-With':_0x370c('bf'),'Sec-Fetch-Site':_0x370c('c0'),'Sec-Fetch-Mode':_0x370c('c1'),'Sec-Fetch-Dest':_0x370c('c2'),'Referer':_0x370c('c3'),'Accept-Encoding':_0x370c('c4'),'Accept-Language':_0x370c('c5')},'\x62\x6f\x64\x79':_0x2fef17};};function Get_request(_0x1b5389){return{'\x75\x72\x6c':_0x370c('b8')+_0x1b5389,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x370c('b9'),'Connection':_0x370c('ba'),'Content-Length':0x0,'Pragma':_0x370c('bb'),'Cache-Control':_0x370c('bb'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x370c('bc'),'Accept':_0x370c('bd'),'Origin':_0x370c('be'),'X-Requested-With':_0x370c('bf'),'Sec-Fetch-Site':_0x370c('c0'),'Sec-Fetch-Mode':_0x370c('c1'),'Sec-Fetch-Dest':_0x370c('c2'),'Referer':_0x370c('c3'),'Accept-Encoding':_0x370c('c4'),'Accept-Language':_0x370c('c5')}};};function RSA_encryption(_0x993b26){var _0x452b12=new RSA_js();_0x452b12[_0x370c('c6')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x370c('c7')});_0x452b12[_0x370c('c8')](_0x370c('c9'),_0x370c('ca'));var _0xb44b=_0x452b12[_0x370c('cb')](_0x993b26,_0x370c('cc'));return _0xb44b;};_0xodq='jsjiami.com.v6';


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