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


var _0xodV='jsjiami.com.v6',_0xodV_=['_0xodV'],_0x34b6=[_0xodV,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x76\x69\x65\x77','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x74\x6f\x75','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x63\x65\x69\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x73\x69\x67\x6e','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u6ca1\u6709\x20\x72\x65\x77\x61\x72\x64\x5f\x64\x61\x74\x61\x20\u53d8\u91cf\x2c\u65e0\u6cd5\u64cd\u4f5c','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x6a\x73\x6a\x71\x69\x72\x66\x61\x55\x79\x6d\x69\x2e\x75\x63\x45\x4f\x6e\x56\x4d\x6f\x43\x75\x78\x41\x6d\x2e\x76\x70\x36\x53\x3d\x3d'];function _0x489e(_0xe9f667,_0x1cb5fb){_0xe9f667=~~'0x'['concat'](_0xe9f667['slice'](0x0));var _0x22a4d2=_0x34b6[_0xe9f667];return _0x22a4d2;};(function(_0x1fe5c2,_0x5080ae){var _0x404a39=0x0;for(_0x5080ae=_0x1fe5c2['shift'](_0x404a39>>0x2);_0x5080ae&&_0x5080ae!==(_0x1fe5c2['pop'](_0x404a39>>0x3)+'')['replace'](/[qrfUyuEOnVMCuxApS=]/g,'');_0x404a39++){_0x404a39=_0x404a39^0xd4a86;}}(_0x34b6,_0x489e));const RSA_js=$[_0x489e('0')]()?require(_0x489e('1')):'';const fs=$[_0x489e('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x489e('0')]()?require(_0x489e('2')):'';!(async()=>{console[_0x489e('3')](_0x489e('4')+new Date(new Date()[_0x489e('5')]()+new Date()[_0x489e('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x489e('7')]()+_0x489e('8'));if(dwsj_variable[_0x489e('9')]!==0xc8){console[_0x489e('3')](_0x489e('a'));return;}console[_0x489e('3')](_0x489e('b')+dwsj_variable[_0x489e('c')][_0x489e('d')][_0x489e('e')]+_0x489e('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x489e('c')][_0x489e('d')][_0x489e('e')];i++){current=dwsj_variable[_0x489e('c')][_0x489e('d')][i];video_data=dwsj_variable[_0x489e('c')][_0x489e('d')][i][_0x489e('10')];user_ID=dwsj_variable[_0x489e('c')][_0x489e('d')][i][_0x489e('11')];main_user_ID=dwsj_variable[_0x489e('c')][_0x489e('d')][0x0][_0x489e('11')];dwsj_token=dwsj_variable[_0x489e('c')][_0x489e('d')][i][_0x489e('12')];dwsj_UA=dwsj_variable[_0x489e('c')][_0x489e('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x489e('c')][_0x489e('d')][i][_0x489e('13')];dwsj_signtime=dwsj_variable[_0x489e('c')][_0x489e('d')][i][_0x489e('14')];dwsj_UPbuild=dwsj_variable[_0x489e('c')][_0x489e('d')][i][_0x489e('15')];dwsj_transfer=dwsj_variable[_0x489e('c')][_0x489e('d')][i][_0x489e('16')];dwsj_Business=dwsj_variable[_0x489e('c')][_0x489e('d')][i][_0x489e('17')];dwsj_viewnum=dwsj_variable[_0x489e('c')][_0x489e('d')][i][_0x489e('18')];dwsj_action=dwsj_variable[_0x489e('c')][_0x489e('d')][i][_0x489e('19')];notice=dwsj_variable[_0x489e('c')][_0x489e('1a')][0x0][_0x489e('1b')];if(!dwsj_UA){dwsj_UA=_0x489e('1c');}$[_0x489e('1d')]=i+0x1;console[_0x489e('3')](_0x489e('1e')+$[_0x489e('1d')]+_0x489e('1f'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x489e('20')]($[_0x489e('21')],subTitle);}}}})()[_0x489e('22')](_0x302103=>$[_0x489e('23')](_0x302103))[_0x489e('24')](()=>$[_0x489e('25')]());async function implement(){await rollPoint();await getAdReward(_0x489e('26'));await getRankByType();await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x4ee704=new Date()[_0x489e('5')]();let _0x28c703=RSA_encryption(_0x489e('27')+user_ID+_0x489e('28')+_0x4ee704+'\x7d');let _0x423b86=Post_request(_0x489e('29'),_0x28c703);return new Promise((_0x2c8b5c,_0x13a4f4)=>{$[_0x489e('2a')](_0x423b86,async(_0x3f1bb1,_0x16efeb,_0xb85500)=>{try{if(_0x3f1bb1){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('2c'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('2c');console[_0x489e('3')](_0x3f1bb1+'\x0a');}else{let _0x3044e5=JSON[_0x489e('2d')](_0xb85500);if(_0x3044e5[_0x489e('9')]==0x1){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('2e')+_0x3044e5[_0x489e('2f')][_0x489e('30')][_0x489e('31')]+_0x489e('32'));await addGoodsBuff();await $[_0x489e('33')](Math[_0x489e('34')](Math[_0x489e('35')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x3044e5[_0x489e('9')]==0x515||_0x3044e5[_0x489e('36')]==_0x489e('37')){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('38')+_0x3044e5[_0x489e('36')]);await getAdReward(_0x489e('39'));}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('38')+_0x3044e5[_0x489e('36')]);}}}catch(_0x247a53){console[_0x489e('3')](_0x247a53,_0x16efeb);}finally{_0x2c8b5c();}});});}function addNewBuilding(){let _0x696d9a=new Date()[_0x489e('5')]();let _0x238f43=RSA_encryption(_0x489e('27')+user_ID+_0x489e('3a')+_0x696d9a+'\x7d');let _0x36ffe0=Post_request(_0x489e('3b'),_0x238f43);return new Promise((_0x3f4aa3,_0x532ed8)=>{$[_0x489e('2a')](_0x36ffe0,async(_0x3ac63d,_0x2aface,_0x4c44b)=>{try{if(_0x3ac63d){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('3c'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('3c');}else{let _0xf7b154=JSON[_0x489e('2d')](_0x4c44b);if(_0xf7b154[_0x489e('9')]==0x1){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('3d')+_0xf7b154[_0x489e('2f')][_0x489e('3e')][_0x489e('3f')][_0x489e('40')]+_0x489e('32'));}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('41')+_0xf7b154[_0x489e('36')]);}}}catch(_0x1cdd72){console[_0x489e('3')](_0x1cdd72,_0x2aface);}finally{_0x3f4aa3();}});});}function getBuildingEarn(){let _0x4a275c=new Date()[_0x489e('5')]();let _0x2caf35=RSA_encryption(_0x489e('27')+user_ID+_0x489e('3a')+_0x4a275c+'\x7d');let _0xa7381a=Post_request(_0x489e('42'),_0x2caf35);return new Promise((_0x590999,_0x2afad9)=>{$[_0x489e('2a')](_0xa7381a,async(_0x213b99,_0x28e412,_0x458bcf)=>{try{if(_0x213b99){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('43'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('43');}else{let _0x541383=JSON[_0x489e('2d')](_0x458bcf);if(_0x541383[_0x489e('9')]==0x1){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('44')+_0x541383[_0x489e('2f')][_0x489e('3e')][_0x489e('3f')][_0x489e('40')]+_0x489e('32'));}else if(_0x541383[_0x489e('9')]==0x4bf||_0x541383[_0x489e('36')]==_0x489e('45')){if(dwsj_build){await addNewBuilding();}}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('46')+_0x541383[_0x489e('36')]);}}}catch(_0x3046c5){console[_0x489e('3')](_0x3046c5,_0x28e412);}finally{_0x590999();}});});}function buildingLevelUp(){let _0x98dac=new Date()[_0x489e('5')]();let _0x115339=RSA_encryption(_0x489e('27')+user_ID+_0x489e('3a')+_0x98dac+'\x7d');let _0x4e6f1c=Post_request(_0x489e('47'),_0x115339);return new Promise((_0x34b5b5,_0x5d374a)=>{$[_0x489e('2a')](_0x4e6f1c,async(_0x37dc39,_0xc6e5c4,_0x5b7152)=>{try{if(_0x37dc39){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('48'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('48');}else{let _0x4a8a64=JSON[_0x489e('2d')](_0x5b7152);if(_0x4a8a64[_0x489e('9')]==0x1){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('49')+_0x4a8a64[_0x489e('2f')][_0x489e('3e')][_0x489e('3f')][_0x489e('40')]+_0x489e('32'));}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('4a')+_0x4a8a64[_0x489e('36')]);}}}catch(_0x90921f){console[_0x489e('3')](_0x90921f,_0xc6e5c4);}finally{_0x34b5b5();}});});}function addGoodsBuff(){let _0x246fc5=new Date()[_0x489e('5')]();let _0x3e4fe1=RSA_encryption(_0x489e('27')+user_ID+_0x489e('4b')+_0x246fc5+'\x7d');let _0x52f14e=Post_request(_0x489e('4c'),_0x3e4fe1);return new Promise((_0x592812,_0x928b15)=>{$[_0x489e('2a')](_0x52f14e,async(_0x39467b,_0x2add50,_0x52bcd8)=>{try{if(_0x39467b){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('4d'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('4d');}else{}}catch(_0x4caa15){console[_0x489e('3')](_0x4caa15,_0x2add50);}finally{_0x592812();}});});}function getRankByType(){let _0x44284c=[_0x489e('40'),_0x489e('4e'),_0x489e('4e')];let _0x34dc36='';let _0x1a979a=_0x44284c[Math[_0x489e('34')](Math[_0x489e('35')]()*_0x44284c[_0x489e('e')])];if(_0x1a979a==_0x489e('40')){_0x34dc36='\u91d1\u5e01';}else if(_0x1a979a==_0x489e('4e')){_0x34dc36='\u58f0\u671b';}if(_0x1a979a==_0x489e('4e')){_0x34dc36='\u6536\u76ca';}let _0x37712a=new Date()[_0x489e('5')]();let _0x395505=RSA_encryption(_0x489e('4f')+_0x1a979a+_0x489e('50')+user_ID+_0x489e('51')+_0x37712a+'\x7d');let _0x4f90b9=Post_request(_0x489e('52'),_0x395505);return new Promise((_0x5f3c34,_0x16c8b9)=>{$[_0x489e('2a')](_0x4f90b9,async(_0x2c46c7,_0x441736,_0x6bb220)=>{try{if(_0x2c46c7){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+'\x20'+_0x34dc36+_0x489e('53'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+'\x20'+_0x34dc36+_0x489e('53');console[_0x489e('3')](_0x2c46c7+'\x0a');}else{let _0x3575a8=JSON[_0x489e('2d')](_0x6bb220);if(_0x3575a8[_0x489e('9')]==0x1){let _0x440dac=['\x30','\x31','\x32','\x33','\x34'];let _0x33cfe9=_0x440dac[Math[_0x489e('34')](Math[_0x489e('35')]()*_0x44284c[_0x489e('e')])];let _0x25fdff=_0x3575a8[_0x489e('2f')][_0x489e('54')][_0x33cfe9][_0x489e('55')];await getAdReward(_0x489e('56'),_0x25fdff);}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+'\x20'+_0x34dc36+_0x489e('57')+_0x3575a8[_0x489e('36')]);}}}catch(_0x5b79fe){console[_0x489e('3')](_0x5b79fe,_0x441736);}finally{_0x5f3c34();}});});}function getMyInfo(){let _0x4be496=new Date()[_0x489e('5')]();let _0x4bb85b=RSA_encryption(_0x489e('27')+user_ID+_0x489e('3a')+_0x4be496+'\x7d');let _0x15de08=Post_request(_0x489e('58'),_0x4bb85b);return new Promise((_0x2f2c42,_0x27ae62)=>{$[_0x489e('2a')](_0x15de08,async(_0x2a55bb,_0x18c181,_0x1f0092)=>{try{if(_0x2a55bb){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('59'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('59');}else{let _0x33f72f=JSON[_0x489e('2d')](_0x1f0092);if(_0x33f72f[_0x489e('9')]==0x1){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('5a')+_0x33f72f[_0x489e('2f')][_0x489e('5b')][_0x489e('55')]+_0x489e('5c')+nick+_0x489e('5d')+userCityLevel+_0x489e('5e')+_0x33f72f[_0x489e('2f')][_0x489e('5f')][_0x489e('60')]+_0x489e('61')+_0x33f72f[_0x489e('2f')][_0x489e('62')][_0x489e('63')]+_0x489e('64')+_0x33f72f[_0x489e('2f')][_0x489e('62')][_0x489e('4e')]+_0x489e('65')+_0x33f72f[_0x489e('2f')][_0x489e('62')][_0x489e('66')]+_0x489e('67')+_0x33f72f[_0x489e('2f')][_0x489e('68')][_0x489e('69')]+order+game+red+platform+AD_profit+No_name+_0x489e('6a')+_0x33f72f[_0x489e('2f')][_0x489e('5b')][_0x489e('6b')]+_0x489e('6c')+_0x33f72f[_0x489e('2f')][_0x489e('62')][_0x489e('40')]+_0x489e('6d')+_0x33f72f[_0x489e('2f')][_0x489e('62')][_0x489e('6e')]);if($[_0x489e('1d')]==0x1){main_user_account=_0x33f72f[_0x489e('2f')][_0x489e('62')][_0x489e('6e')];}else{if(dwsj_transfer){await transferMoney(''+(_0x33f72f[_0x489e('2f')][_0x489e('62')][_0x489e('40')]-Math[_0x489e('6f')](_0x33f72f[_0x489e('2f')][_0x489e('62')][_0x489e('40')]*0.1)));}}}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('70')+_0x33f72f[_0x489e('36')]);}}}catch(_0x22fa00){console[_0x489e('3')](_0x22fa00,_0x18c181);}finally{_0x2f2c42();}});});}function getShopInfo(){let _0x18769e=new Date()[_0x489e('5')]();let _0x509a1a=RSA_encryption(_0x489e('71')+user_ID+_0x489e('51')+_0x18769e+'\x7d');let _0x29a629=Post_request(_0x489e('72'),_0x509a1a);return new Promise((_0x156aa3,_0x169675)=>{$[_0x489e('2a')](_0x29a629,async(_0x231d1e,_0x5202ed,_0x5698b1)=>{try{nick='';userCityLevel='';if(_0x231d1e){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('73'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('73');}else{let _0x3e7717=JSON[_0x489e('2d')](_0x5698b1);if(_0x3e7717[_0x489e('9')]==0x1){nick=_0x3e7717[_0x489e('2f')][_0x489e('74')][_0x489e('75')];userCityLevel=_0x3e7717[_0x489e('2f')][_0x489e('74')][_0x489e('76')];}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('77')+_0x3e7717[_0x489e('36')]);}}}catch(_0xed92e9){console[_0x489e('3')](_0xed92e9,_0x5202ed);}finally{_0x156aa3();}});});}function transferMoney(_0x26805c){let _0x52eab5=new Date()[_0x489e('5')]();let _0x41b33c=RSA_encryption(_0x489e('27')+user_ID+_0x489e('78')+main_user_account+_0x489e('79')+_0x26805c+_0x489e('3a')+_0x52eab5+'\x7d');let _0x38c079=Post_request(_0x489e('7a'),_0x41b33c);return new Promise((_0x4a74f9,_0x4dfb32)=>{$[_0x489e('2a')](_0x38c079,async(_0x4d43e2,_0x5178bf,_0x44865e)=>{try{if(_0x4d43e2){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('7b'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('7b');}else{let _0x54e7e1=JSON[_0x489e('2d')](_0x44865e);if(_0x54e7e1[_0x489e('9')]==0x1){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('7c')+_0x54e7e1[_0x489e('36')]);}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('7c')+_0x54e7e1[_0x489e('36')]);}}}catch(_0x2eb8f0){console[_0x489e('3')](_0x2eb8f0,_0x5178bf);}finally{_0x4a74f9();}});});}function getUserWallet(){let _0xd5641a=new Date()[_0x489e('5')]();let _0x2a8810=RSA_encryption(_0x489e('27')+user_ID+_0x489e('7d'));let _0x37fc74=Post_request(_0x489e('7e'),_0x2a8810);return new Promise((_0x4583af,_0x4f25a9)=>{$[_0x489e('2a')](_0x37fc74,async(_0x277cde,_0x4f068a,_0x319829)=>{try{if(_0x277cde){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('7f'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('7f');}else{let _0x29b561=JSON[_0x489e('2d')](_0x319829);if(_0x29b561[_0x489e('9')]==0x1){for(let _0x1ff599 of _0x29b561[_0x489e('2f')]){if(_0x1ff599[_0x489e('80')]==0x0){platform=_0x489e('81')+_0x1ff599[_0x489e('21')]+'\uff1a'+_0x1ff599[_0x489e('82')];}if(_0x1ff599[_0x489e('80')]==0x1){order=_0x489e('81')+_0x1ff599[_0x489e('21')]+'\uff1a'+_0x1ff599[_0x489e('82')];}if(_0x1ff599[_0x489e('80')]==0x2){game=_0x489e('81')+_0x1ff599[_0x489e('21')]+'\uff1a'+_0x1ff599[_0x489e('82')];}if(_0x1ff599[_0x489e('80')]==0x3){red=_0x489e('81')+_0x1ff599[_0x489e('21')]+'\uff1a'+_0x1ff599[_0x489e('82')];}}}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('83')+_0x29b561[_0x489e('36')]);}}}catch(_0x311fde){console[_0x489e('3')](_0x311fde,_0x4f068a);}finally{_0x4583af();}});});}function RevenueDetail(){let _0xd61110=new Date()[_0x489e('5')]();let _0x25e49f=RSA_encryption(_0x489e('27')+user_ID+_0x489e('7d'));let _0x906209=Post_request(_0x489e('84'),_0x25e49f);return new Promise((_0x3ecf92,_0xfecec5)=>{$[_0x489e('2a')](_0x906209,async(_0x4638d7,_0x1dde51,_0x3dbcb9)=>{try{if(_0x4638d7){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('85'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('85');}else{let _0x2ac28d=JSON[_0x489e('2d')](_0x3dbcb9);if(_0x2ac28d[_0x489e('9')]==0x1){AD_profit=_0x489e('86')+_0x2ac28d[_0x489e('2f')][0x0][_0x489e('87')]/0x3e8+_0x489e('88');No_name=_0x489e('89')+_0x2ac28d[_0x489e('2f')][0x0][_0x489e('8a')]+_0x489e('8b')+_0x2ac28d[_0x489e('2f')][0x0][_0x489e('8c')]+_0x489e('8d');}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('8e')+_0x2ac28d[_0x489e('36')]);}}}catch(_0x39da58){console[_0x489e('3')](_0x39da58,_0x1dde51);}finally{_0x3ecf92();}});});}function getAdReward(_0x3b4ffc,_0x2ec6b3){let _0x241f5b=new Date()[_0x489e('5')]();let _0xa8f201='';let _0x3e8fcb='';if(_0x3b4ffc==_0x489e('8f')){_0xa8f201=RSA_encryption(_0x489e('27')+user_ID+_0x489e('90')+_0x241f5b+'\x7d');_0x3e8fcb='\u7b7e\u5230';}else if(_0x3b4ffc==_0x489e('26')){_0xa8f201=RSA_encryption(_0x489e('27')+user_ID+_0x489e('91')+_0x241f5b+'\x7d');_0x3e8fcb='\u52a0\u901f';}else if(_0x3b4ffc==_0x489e('39')){_0xa8f201=RSA_encryption(_0x489e('27')+user_ID+_0x489e('92')+_0x241f5b+'\x7d');_0x3e8fcb=_0x489e('93');}else if(_0x3b4ffc==_0x489e('56')){_0xa8f201=RSA_encryption(_0x489e('94')+_0x2ec6b3+_0x489e('95')+user_ID+_0x489e('51')+_0x241f5b+'\x7d');_0x3e8fcb='\u819c\u62dc';}let _0x24c854=Post_request(_0x489e('96'),_0xa8f201);return new Promise((_0x49e188,_0x1466c0)=>{$[_0x489e('2a')](_0x24c854,async(_0x2d5f85,_0x561af7,_0x56c77e)=>{try{if(_0x2d5f85){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('97')+_0x3e8fcb+_0x489e('98'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('97')+_0x3e8fcb+_0x489e('98');console[_0x489e('3')](_0x2d5f85+'\x0a');}else{let _0x45fb00=JSON[_0x489e('2d')](_0x56c77e);if(_0x45fb00[_0x489e('9')]==0x1){if(_0x3b4ffc==_0x489e('8f')){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+'\x20'+_0x3e8fcb+_0x489e('99')+_0x45fb00[_0x489e('2f')][_0x489e('3e')][_0x489e('3f')][_0x489e('9a')]+_0x489e('9b')+_0x45fb00[_0x489e('2f')][_0x489e('3e')][_0x489e('3f')][_0x489e('6b')]);}else if(_0x3b4ffc==_0x489e('39')){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+'\x20'+_0x3e8fcb+_0x489e('9c'));}else if(_0x3b4ffc==_0x489e('26')){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+'\x20'+_0x3e8fcb+_0x489e('9d'));}else if(_0x3b4ffc==_0x489e('56')){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+'\x20'+_0x3e8fcb+_0x489e('9e'));}}else if(_0x45fb00[_0x489e('9')]==0x76f&&_0x3b4ffc==_0x489e('26')){await reward_video(_0x489e('26'));}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('97')+_0x3e8fcb+_0x489e('9f')+_0x45fb00[_0x489e('36')]);}}}catch(_0x9e0121){console[_0x489e('3')](_0x9e0121,_0x561af7);}finally{_0x49e188();}});});}function reward_video(_0x2d57b5){if(!reward_data){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('a0'));}else{let _0x453744=video_data[_0x489e('a1')](/[\r\n]/g,'');let _0x5a9762={'\x75\x72\x6c':_0x489e('a2'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x489e('a3'),'Content-Type':_0x489e('a4'),'Content-Length':_0x453744[_0x489e('e')],'Accept-Encoding':_0x489e('a5'),'User-Agent':_0x489e('a6')},'\x62\x6f\x64\x79':_0x453744};return new Promise((_0x276c50,_0x4d6e6d)=>{$[_0x489e('2a')](_0x5a9762,async(_0x1b6a12,_0x109b86,_0x7fb7d5)=>{try{if(_0x1b6a12){console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('a7'));subTitle+=_0x489e('2b')+$[_0x489e('1d')]+_0x489e('a7');console[_0x489e('3')](_0x1b6a12+'\x0a');}else{if(_0x7fb7d5[_0x489e('a8')](_0x489e('a9'))>-0x1){let _0x518712=JSON[_0x489e('2d')](_0x7fb7d5);if(_0x518712[_0x489e('a9')]==0x3){await getAdReward(_0x2d57b5);}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('aa'));}}else{let _0x391f86=JSON[_0x489e('2d')](_0x7fb7d5);if(_0x391f86[_0x489e('9')]==0xea67){await getAdReward(_0x2d57b5);}else{console[_0x489e('3')](_0x489e('2b')+$[_0x489e('1d')]+_0x489e('aa'));}}}}catch(_0x3cf545){console[_0x489e('3')](_0x3cf545,_0x109b86);}finally{_0x276c50();}});});}}function Post_request(_0x18d8ff,_0x4accfa){return{'\x75\x72\x6c':_0x489e('ab')+_0x18d8ff,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x489e('ac'),'Connection':_0x489e('ad'),'Content-Length':_0x4accfa[_0x489e('e')],'Pragma':_0x489e('ae'),'Cache-Control':_0x489e('ae'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x489e('af'),'Accept':_0x489e('b0'),'Origin':_0x489e('b1'),'X-Requested-With':_0x489e('b2'),'Sec-Fetch-Site':_0x489e('b3'),'Sec-Fetch-Mode':_0x489e('b4'),'Sec-Fetch-Dest':_0x489e('b5'),'Referer':_0x489e('b6'),'Accept-Encoding':_0x489e('b7'),'Accept-Language':_0x489e('b8')},'\x62\x6f\x64\x79':_0x4accfa};};function Get_request(_0x1da02d){return{'\x75\x72\x6c':_0x489e('ab')+_0x1da02d,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x489e('ac'),'Connection':_0x489e('ad'),'Content-Length':0x0,'Pragma':_0x489e('ae'),'Cache-Control':_0x489e('ae'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x489e('af'),'Accept':_0x489e('b0'),'Origin':_0x489e('b1'),'X-Requested-With':_0x489e('b2'),'Sec-Fetch-Site':_0x489e('b3'),'Sec-Fetch-Mode':_0x489e('b4'),'Sec-Fetch-Dest':_0x489e('b5'),'Referer':_0x489e('b6'),'Accept-Encoding':_0x489e('b7'),'Accept-Language':_0x489e('b8')}};};function RSA_encryption(_0x1a43ef){var _0x465be8=new RSA_js();_0x465be8[_0x489e('b9')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x489e('ba')});_0x465be8[_0x489e('bb')](_0x489e('bc'),_0x489e('bd'));var _0x37c6fa=_0x465be8[_0x489e('be')](_0x1a43ef,_0x489e('bf'));return _0x37c6fa;};_0xodV='jsjiami.com.v6';



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