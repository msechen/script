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


const $ = new Env('【电玩世界】版本:22/03/03_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodL='jsjiami.com.v6',_0xodL_=['_0xodL'],_0xa1e2=[_0xodL,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x76\x69\x65\x77','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x74\x6f\x75','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x63\x65\x69\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x73\x69\x67\x6e','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x50\x78\x6a\x73\x4b\x6a\x68\x69\x61\x75\x77\x6d\x55\x69\x2e\x62\x78\x63\x6f\x4b\x6d\x74\x2e\x67\x76\x43\x36\x67\x71\x3d\x3d'];function _0x1b94(_0x25f6e2,_0x4998f0){_0x25f6e2=~~'0x'['concat'](_0x25f6e2['slice'](0x0));var _0x391e92=_0xa1e2[_0x25f6e2];return _0x391e92;};(function(_0x562627,_0x5740ca){var _0xfddcc2=0x0;for(_0x5740ca=_0x562627['shift'](_0xfddcc2>>0x2);_0x5740ca&&_0x5740ca!==(_0x562627['pop'](_0xfddcc2>>0x3)+'')['replace'](/[PxKhuwUbxKtgCgq=]/g,'');_0xfddcc2++){_0xfddcc2=_0xfddcc2^0xd4abf;}}(_0xa1e2,_0x1b94));const RSA_js=$[_0x1b94('0')]()?require(_0x1b94('1')):'';const fs=$[_0x1b94('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x1b94('0')]()?require(_0x1b94('2')):'';!(async()=>{console[_0x1b94('3')](_0x1b94('4')+new Date(new Date()[_0x1b94('5')]()+new Date()[_0x1b94('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1b94('7')]()+_0x1b94('8'));if(dwsj_variable[_0x1b94('9')]!==0xc8){console[_0x1b94('3')](_0x1b94('a'));return;}console[_0x1b94('3')](_0x1b94('b')+dwsj_variable[_0x1b94('c')][_0x1b94('d')][_0x1b94('e')]+_0x1b94('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x1b94('c')][_0x1b94('d')][_0x1b94('e')];i++){current=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i];video_data=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i][_0x1b94('10')];user_ID=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i][_0x1b94('11')];main_user_ID=dwsj_variable[_0x1b94('c')][_0x1b94('d')][0x0][_0x1b94('11')];dwsj_token=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i][_0x1b94('12')];dwsj_UA=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i][_0x1b94('13')];dwsj_signtime=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i][_0x1b94('14')];dwsj_UPbuild=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i][_0x1b94('15')];dwsj_transfer=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i][_0x1b94('16')];dwsj_Business=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i][_0x1b94('17')];dwsj_viewnum=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i][_0x1b94('18')];dwsj_action=dwsj_variable[_0x1b94('c')][_0x1b94('d')][i][_0x1b94('19')];notice=dwsj_variable[_0x1b94('c')][_0x1b94('1a')][0x0][_0x1b94('1b')];update=dwsj_variable[_0x1b94('c')][_0x1b94('1a')][0x0][_0x1b94('1c')];if(!dwsj_UA){dwsj_UA=_0x1b94('1d');}$[_0x1b94('1e')]=i+0x1;console[_0x1b94('3')](_0x1b94('1f')+$[_0x1b94('1e')]+_0x1b94('20'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x1b94('21')]($[_0x1b94('22')],subTitle);}}}})()[_0x1b94('23')](_0x4a49e9=>$[_0x1b94('24')](_0x4a49e9))[_0x1b94('25')](()=>$[_0x1b94('26')]());async function implement(){await reward_video(_0x1b94('27'));}function rollPoint(){let _0x329620=new Date()[_0x1b94('5')]();let _0x38f677=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('29')+_0x329620+'\x7d');let _0x10f875=Post_request(_0x1b94('2a'),_0x38f677);return new Promise((_0x1082cc,_0x300c66)=>{$[_0x1b94('2b')](_0x10f875,async(_0x4702f,_0x33f9f3,_0x41642c)=>{try{if(_0x4702f){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('2d'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('2d');console[_0x1b94('3')](_0x4702f+'\x0a');}else{let _0x3ddc19=JSON[_0x1b94('2e')](_0x41642c);if(_0x3ddc19[_0x1b94('9')]==0x1){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('2f')+_0x3ddc19[_0x1b94('30')][_0x1b94('31')][_0x1b94('32')]+_0x1b94('33'));await addGoodsBuff();await $[_0x1b94('34')](Math[_0x1b94('35')](Math[_0x1b94('36')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x3ddc19[_0x1b94('9')]==0x515||_0x3ddc19[_0x1b94('37')]==_0x1b94('38')){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('39')+_0x3ddc19[_0x1b94('37')]);await getAdReward(_0x1b94('3a'));}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('39')+_0x3ddc19[_0x1b94('37')]);}}}catch(_0x1cb0e1){console[_0x1b94('3')](_0x1cb0e1,_0x33f9f3);}finally{_0x1082cc();}});});}function addNewBuilding(){let _0x3d4e04=new Date()[_0x1b94('5')]();let _0xf53f36=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('3b')+_0x3d4e04+'\x7d');let _0x57048e=Post_request(_0x1b94('3c'),_0xf53f36);return new Promise((_0x2388a7,_0x7335e6)=>{$[_0x1b94('2b')](_0x57048e,async(_0xf29971,_0xd36860,_0x2a64d5)=>{try{if(_0xf29971){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('3d'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('3d');}else{let _0x2533a9=JSON[_0x1b94('2e')](_0x2a64d5);if(_0x2533a9[_0x1b94('9')]==0x1){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('3e')+_0x2533a9[_0x1b94('30')][_0x1b94('3f')][_0x1b94('40')][_0x1b94('41')]+_0x1b94('33'));}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('42')+_0x2533a9[_0x1b94('37')]);}}}catch(_0x44deb8){console[_0x1b94('3')](_0x44deb8,_0xd36860);}finally{_0x2388a7();}});});}function getBuildingEarn(){let _0x1ec4bb=new Date()[_0x1b94('5')]();let _0x2427a8=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('3b')+_0x1ec4bb+'\x7d');let _0x3becf9=Post_request(_0x1b94('43'),_0x2427a8);return new Promise((_0x265b81,_0x56ce38)=>{$[_0x1b94('2b')](_0x3becf9,async(_0x266cae,_0x5b39a4,_0x482583)=>{try{if(_0x266cae){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('44'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('44');}else{let _0x184519=JSON[_0x1b94('2e')](_0x482583);if(_0x184519[_0x1b94('9')]==0x1){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('45')+_0x184519[_0x1b94('30')][_0x1b94('3f')][_0x1b94('40')][_0x1b94('41')]+_0x1b94('33'));}else if(_0x184519[_0x1b94('9')]==0x4bf||_0x184519[_0x1b94('37')]==_0x1b94('46')){if(dwsj_build){await addNewBuilding();}}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('47')+_0x184519[_0x1b94('37')]);}}}catch(_0x4842f9){console[_0x1b94('3')](_0x4842f9,_0x5b39a4);}finally{_0x265b81();}});});}function buildingLevelUp(){let _0x2c729d=new Date()[_0x1b94('5')]();let _0x1a5d2b=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('3b')+_0x2c729d+'\x7d');let _0x585b87=Post_request(_0x1b94('48'),_0x1a5d2b);return new Promise((_0x72d332,_0x26aa19)=>{$[_0x1b94('2b')](_0x585b87,async(_0x351a89,_0x557431,_0x5abbb4)=>{try{if(_0x351a89){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('49'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('49');}else{let _0x5c306f=JSON[_0x1b94('2e')](_0x5abbb4);if(_0x5c306f[_0x1b94('9')]==0x1){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('4a')+_0x5c306f[_0x1b94('30')][_0x1b94('3f')][_0x1b94('40')][_0x1b94('41')]+_0x1b94('33'));}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('4b')+_0x5c306f[_0x1b94('37')]);}}}catch(_0x12794a){console[_0x1b94('3')](_0x12794a,_0x557431);}finally{_0x72d332();}});});}function addGoodsBuff(){let _0x5e710d=new Date()[_0x1b94('5')]();let _0x4bbcb4=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('4c')+_0x5e710d+'\x7d');let _0x15c007=Post_request(_0x1b94('4d'),_0x4bbcb4);return new Promise((_0x477a99,_0x4caeed)=>{$[_0x1b94('2b')](_0x15c007,async(_0x1f118a,_0x103c30,_0xee5a83)=>{try{if(_0x1f118a){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('4e'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('4e');}else{}}catch(_0x4c6f07){console[_0x1b94('3')](_0x4c6f07,_0x103c30);}finally{_0x477a99();}});});}function getRankByType(){let _0x707dc6=[_0x1b94('41'),_0x1b94('4f'),_0x1b94('4f')];let _0xf1ee30='';let _0x1f8490=_0x707dc6[Math[_0x1b94('35')](Math[_0x1b94('36')]()*_0x707dc6[_0x1b94('e')])];if(_0x1f8490==_0x1b94('41')){_0xf1ee30='\u91d1\u5e01';}else if(_0x1f8490==_0x1b94('4f')){_0xf1ee30='\u58f0\u671b';}if(_0x1f8490==_0x1b94('4f')){_0xf1ee30='\u6536\u76ca';}let _0x45b0f6=new Date()[_0x1b94('5')]();let _0x5ddebb=RSA_encryption(_0x1b94('50')+_0x1f8490+_0x1b94('51')+user_ID+_0x1b94('52')+_0x45b0f6+'\x7d');let _0x3caf7d=Post_request(_0x1b94('53'),_0x5ddebb);return new Promise((_0x24ada9,_0x2bae5c)=>{$[_0x1b94('2b')](_0x3caf7d,async(_0x402ab4,_0xd5298e,_0x4fbd8a)=>{try{if(_0x402ab4){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+'\x20'+_0xf1ee30+_0x1b94('54'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+'\x20'+_0xf1ee30+_0x1b94('54');console[_0x1b94('3')](_0x402ab4+'\x0a');}else{let _0x3ee5e2=JSON[_0x1b94('2e')](_0x4fbd8a);if(_0x3ee5e2[_0x1b94('9')]==0x1){let _0x88b035=['\x30','\x31','\x32','\x33','\x34'];let _0x4dd7be=_0x88b035[Math[_0x1b94('35')](Math[_0x1b94('36')]()*_0x707dc6[_0x1b94('e')])];let _0x35d58d=_0x3ee5e2[_0x1b94('30')][_0x1b94('55')][_0x4dd7be][_0x1b94('56')];await getAdReward(_0x1b94('57'),_0x35d58d);}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+'\x20'+_0xf1ee30+_0x1b94('58')+_0x3ee5e2[_0x1b94('37')]);}}}catch(_0x5e50ad){console[_0x1b94('3')](_0x5e50ad,_0xd5298e);}finally{_0x24ada9();}});});}function getMyInfo(){let _0x46d795=new Date()[_0x1b94('5')]();let _0x5b21a2=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('3b')+_0x46d795+'\x7d');let _0x214e7e=Post_request(_0x1b94('59'),_0x5b21a2);return new Promise((_0x918a48,_0x58fa48)=>{$[_0x1b94('2b')](_0x214e7e,async(_0x7e8719,_0x29d3d3,_0x4db35e)=>{try{if(_0x7e8719){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('5a'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('5a');}else{let _0x1cddaa=JSON[_0x1b94('2e')](_0x4db35e);if(_0x1cddaa[_0x1b94('9')]==0x1){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('5b')+_0x1cddaa[_0x1b94('30')][_0x1b94('5c')][_0x1b94('56')]+_0x1b94('5d')+nick+_0x1b94('5e')+userCityLevel+_0x1b94('5f')+_0x1cddaa[_0x1b94('30')][_0x1b94('60')][_0x1b94('61')]+_0x1b94('62')+_0x1cddaa[_0x1b94('30')][_0x1b94('63')][_0x1b94('64')]+_0x1b94('65')+_0x1cddaa[_0x1b94('30')][_0x1b94('63')][_0x1b94('4f')]+_0x1b94('66')+_0x1cddaa[_0x1b94('30')][_0x1b94('63')][_0x1b94('67')]+_0x1b94('68')+_0x1cddaa[_0x1b94('30')][_0x1b94('69')][_0x1b94('6a')]+order+game+red+platform+AD_profit+No_name+_0x1b94('6b')+_0x1cddaa[_0x1b94('30')][_0x1b94('5c')][_0x1b94('6c')]+_0x1b94('6d')+_0x1cddaa[_0x1b94('30')][_0x1b94('63')][_0x1b94('41')]+_0x1b94('6e')+_0x1cddaa[_0x1b94('30')][_0x1b94('63')][_0x1b94('6f')]);if($[_0x1b94('1e')]==0x1){main_user_account=_0x1cddaa[_0x1b94('30')][_0x1b94('63')][_0x1b94('6f')];}else{if(dwsj_transfer){await transferMoney(''+(_0x1cddaa[_0x1b94('30')][_0x1b94('63')][_0x1b94('41')]-Math[_0x1b94('70')](_0x1cddaa[_0x1b94('30')][_0x1b94('63')][_0x1b94('41')]*0.1)));}}}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('71')+_0x1cddaa[_0x1b94('37')]);}}}catch(_0x3c8f3d){console[_0x1b94('3')](_0x3c8f3d,_0x29d3d3);}finally{_0x918a48();}});});}function getShopInfo(){let _0x771b3f=new Date()[_0x1b94('5')]();let _0x7fe767=RSA_encryption(_0x1b94('72')+user_ID+_0x1b94('52')+_0x771b3f+'\x7d');let _0xb447e5=Post_request(_0x1b94('73'),_0x7fe767);return new Promise((_0xdf2e73,_0x5ca842)=>{$[_0x1b94('2b')](_0xb447e5,async(_0xd8c436,_0x5a20cd,_0x1e4a62)=>{try{nick='';userCityLevel='';if(_0xd8c436){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('74'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('74');}else{let _0x4258ea=JSON[_0x1b94('2e')](_0x1e4a62);if(_0x4258ea[_0x1b94('9')]==0x1){nick=_0x4258ea[_0x1b94('30')][_0x1b94('75')][_0x1b94('76')];userCityLevel=_0x4258ea[_0x1b94('30')][_0x1b94('75')][_0x1b94('77')];}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('78')+_0x4258ea[_0x1b94('37')]);}}}catch(_0x328072){console[_0x1b94('3')](_0x328072,_0x5a20cd);}finally{_0xdf2e73();}});});}function transferMoney(_0x1e2337){let _0x38f26d=new Date()[_0x1b94('5')]();let _0x347dd9=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('79')+main_user_account+_0x1b94('7a')+_0x1e2337+_0x1b94('3b')+_0x38f26d+'\x7d');let _0x2732e5=Post_request(_0x1b94('7b'),_0x347dd9);return new Promise((_0x51a0d9,_0x21350f)=>{$[_0x1b94('2b')](_0x2732e5,async(_0x527640,_0x40569e,_0x4ec4b1)=>{try{if(_0x527640){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('7c'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('7c');}else{let _0x25f07f=JSON[_0x1b94('2e')](_0x4ec4b1);if(_0x25f07f[_0x1b94('9')]==0x1){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('7d')+_0x25f07f[_0x1b94('37')]);}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('7d')+_0x25f07f[_0x1b94('37')]);}}}catch(_0x35b5a1){console[_0x1b94('3')](_0x35b5a1,_0x40569e);}finally{_0x51a0d9();}});});}function getUserWallet(){let _0x48e0c4=new Date()[_0x1b94('5')]();let _0x34308d=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('7e'));let _0x137d52=Post_request(_0x1b94('7f'),_0x34308d);return new Promise((_0xf23a6d,_0x1f9d5f)=>{$[_0x1b94('2b')](_0x137d52,async(_0x45e0ed,_0x5217d4,_0x543659)=>{try{if(_0x45e0ed){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('80'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('80');}else{let _0xf57ab4=JSON[_0x1b94('2e')](_0x543659);if(_0xf57ab4[_0x1b94('9')]==0x1){for(let _0x64fe54 of _0xf57ab4[_0x1b94('30')]){if(_0x64fe54[_0x1b94('81')]==0x0){platform=_0x1b94('82')+_0x64fe54[_0x1b94('22')]+'\uff1a'+_0x64fe54[_0x1b94('83')];}if(_0x64fe54[_0x1b94('81')]==0x1){order=_0x1b94('82')+_0x64fe54[_0x1b94('22')]+'\uff1a'+_0x64fe54[_0x1b94('83')];}if(_0x64fe54[_0x1b94('81')]==0x2){game=_0x1b94('82')+_0x64fe54[_0x1b94('22')]+'\uff1a'+_0x64fe54[_0x1b94('83')];}if(_0x64fe54[_0x1b94('81')]==0x3){red=_0x1b94('82')+_0x64fe54[_0x1b94('22')]+'\uff1a'+_0x64fe54[_0x1b94('83')];}}}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('84')+_0xf57ab4[_0x1b94('37')]);}}}catch(_0x27f2fe){console[_0x1b94('3')](_0x27f2fe,_0x5217d4);}finally{_0xf23a6d();}});});}function RevenueDetail(){let _0x57292b=new Date()[_0x1b94('5')]();let _0x1eeb9c=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('7e'));let _0x335733=Post_request(_0x1b94('85'),_0x1eeb9c);return new Promise((_0x2c9a1f,_0x50189a)=>{$[_0x1b94('2b')](_0x335733,async(_0x57a4e1,_0x5ce022,_0x5c1810)=>{try{if(_0x57a4e1){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('86'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('86');}else{let _0x49b945=JSON[_0x1b94('2e')](_0x5c1810);if(_0x49b945[_0x1b94('9')]==0x1){AD_profit=_0x1b94('87')+_0x49b945[_0x1b94('30')][0x0][_0x1b94('88')]/0x3e8+_0x1b94('89');No_name=_0x1b94('8a')+_0x49b945[_0x1b94('30')][0x0][_0x1b94('8b')]+_0x1b94('8c')+_0x49b945[_0x1b94('30')][0x0][_0x1b94('8d')]+_0x1b94('8e');}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('8f')+_0x49b945[_0x1b94('37')]);}}}catch(_0x3ae32e){console[_0x1b94('3')](_0x3ae32e,_0x5ce022);}finally{_0x2c9a1f();}});});}function getAdReward(_0x565d7a,_0x47cf9c){let _0x147d9a=new Date()[_0x1b94('5')]();let _0x56938b='';let _0x44a674='';if(_0x565d7a==_0x1b94('90')){_0x56938b=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('91')+_0x147d9a+'\x7d');_0x44a674='\u7b7e\u5230';}else if(_0x565d7a==_0x1b94('27')){_0x56938b=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('92')+_0x147d9a+'\x7d');_0x44a674='\u52a0\u901f';}else if(_0x565d7a==_0x1b94('3a')){_0x56938b=RSA_encryption(_0x1b94('28')+user_ID+_0x1b94('93')+_0x147d9a+'\x7d');_0x44a674=_0x1b94('94');}else if(_0x565d7a==_0x1b94('57')){_0x56938b=RSA_encryption(_0x1b94('95')+_0x47cf9c+_0x1b94('96')+user_ID+_0x1b94('52')+_0x147d9a+'\x7d');_0x44a674='\u819c\u62dc';}let _0x876674=Post_request(_0x1b94('97'),_0x56938b);return new Promise((_0x3d0bb1,_0x358e4d)=>{$[_0x1b94('2b')](_0x876674,async(_0x50fa6a,_0x4c5cb0,_0x55217a)=>{try{if(_0x50fa6a){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('98')+_0x44a674+_0x1b94('99'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('98')+_0x44a674+_0x1b94('99');console[_0x1b94('3')](_0x50fa6a+'\x0a');}else{let _0x4aa13d=JSON[_0x1b94('2e')](_0x55217a);if(_0x4aa13d[_0x1b94('9')]==0x1){if(_0x565d7a==_0x1b94('90')){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+'\x20'+_0x44a674+_0x1b94('9a')+_0x4aa13d[_0x1b94('30')][_0x1b94('3f')][_0x1b94('40')][_0x1b94('9b')]+_0x1b94('9c')+_0x4aa13d[_0x1b94('30')][_0x1b94('3f')][_0x1b94('40')][_0x1b94('6c')]);}else if(_0x565d7a==_0x1b94('3a')){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+'\x20'+_0x44a674+_0x1b94('9d'));}else if(_0x565d7a==_0x1b94('27')){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+'\x20'+_0x44a674+_0x1b94('9e'));}else if(_0x565d7a==_0x1b94('57')){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+'\x20'+_0x44a674+_0x1b94('9f'));}}else if(_0x4aa13d[_0x1b94('9')]==0x76f&&_0x565d7a==_0x1b94('27')){await reward_video(_0x1b94('27'));}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('98')+_0x44a674+_0x1b94('a0')+_0x4aa13d[_0x1b94('37')]);}}}catch(_0x4d34c9){console[_0x1b94('3')](_0x4d34c9,_0x4c5cb0);}finally{_0x3d0bb1();}});});}function reward_video(_0x3b8936){if(!video_data){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('a1'));}else{let _0x455735=video_data[_0x1b94('a2')](/[\r\n]/g,'');let _0x206f87={'\x75\x72\x6c':_0x1b94('a3'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x1b94('a4'),'Content-Type':_0x1b94('a5'),'Content-Length':_0x455735[_0x1b94('e')],'Accept-Encoding':_0x1b94('a6'),'User-Agent':_0x1b94('a7')},'\x62\x6f\x64\x79':_0x455735};return new Promise((_0x5173be,_0x24e81f)=>{$[_0x1b94('2b')](_0x206f87,async(_0x473111,_0x3d15e1,_0x34b9e0)=>{try{if(_0x473111){console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('a8'));subTitle+=_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('a8');console[_0x1b94('3')](_0x473111+'\x0a');}else{if(_0x34b9e0[_0x1b94('a9')](_0x1b94('aa'))>-0x1){let _0x1a5642=JSON[_0x1b94('2e')](_0x34b9e0);if(_0x1a5642[_0x1b94('aa')]==0x3){await getAdReward(_0x3b8936);}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('ab'));}}else{let _0x25996a=JSON[_0x1b94('2e')](_0x34b9e0);if(_0x25996a[_0x1b94('9')]==0xea67){await getAdReward(_0x3b8936);}else{console[_0x1b94('3')](_0x1b94('2c')+$[_0x1b94('1e')]+_0x1b94('ab'));}}}}catch(_0x9f5a4f){console[_0x1b94('3')](_0x9f5a4f,_0x3d15e1);}finally{_0x5173be();}});});}}function Post_request(_0x163544,_0x3c26e2){return{'\x75\x72\x6c':_0x1b94('ac')+_0x163544,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x1b94('ad'),'Connection':_0x1b94('ae'),'Content-Length':_0x3c26e2[_0x1b94('e')],'Pragma':_0x1b94('af'),'Cache-Control':_0x1b94('af'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x1b94('b0'),'Accept':_0x1b94('b1'),'Origin':_0x1b94('b2'),'X-Requested-With':_0x1b94('b3'),'Sec-Fetch-Site':_0x1b94('b4'),'Sec-Fetch-Mode':_0x1b94('b5'),'Sec-Fetch-Dest':_0x1b94('b6'),'Referer':_0x1b94('b7'),'Accept-Encoding':_0x1b94('b8'),'Accept-Language':_0x1b94('b9')},'\x62\x6f\x64\x79':_0x3c26e2};};function Get_request(_0x448209){return{'\x75\x72\x6c':_0x1b94('ac')+_0x448209,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x1b94('ad'),'Connection':_0x1b94('ae'),'Content-Length':0x0,'Pragma':_0x1b94('af'),'Cache-Control':_0x1b94('af'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x1b94('b0'),'Accept':_0x1b94('b1'),'Origin':_0x1b94('b2'),'X-Requested-With':_0x1b94('b3'),'Sec-Fetch-Site':_0x1b94('b4'),'Sec-Fetch-Mode':_0x1b94('b5'),'Sec-Fetch-Dest':_0x1b94('b6'),'Referer':_0x1b94('b7'),'Accept-Encoding':_0x1b94('b8'),'Accept-Language':_0x1b94('b9')}};};function RSA_encryption(_0x3d1993){var _0x147839=new RSA_js();_0x147839[_0x1b94('ba')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x1b94('bb')});_0x147839[_0x1b94('bc')](_0x1b94('bd'),_0x1b94('be'));var _0x156e6f=_0x147839[_0x1b94('bf')](_0x3d1993,_0x1b94('c0'));return _0x156e6f;};_0xodL='jsjiami.com.v6';


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