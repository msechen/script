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


const $ = new Env('【电玩世界】版本:22/03/04_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodA='jsjiami.com.v6',_0xodA_=['_0xodA'],_0xb105=[_0xodA,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x75\x72\x6c','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x76\x69\x65\x77','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x73\x69\x67\x6e','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x74\x6f\x75','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x30\x5f\x31\x35\x5f\x35\x20\x28\x45\x72\x67\u00e4\x6e\x7a\x65\x6e\x64\x65\x73\x20\x55\x70\x64\x61\x74\x65\x29\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x32\x2e\x31\x2e\x31\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x34\x45\x33\x30\x34\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u83b7\u53d6\u811a\u672c\u5730\u5740\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7535\u73a9\u4e16\u754c','\x6d\x61\x74\x63\x68','\x2f\x64\x77\x73\x6a\x5f\u7248\u672c\x3a','\x2e\x6a\x73','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x66\x6a\x77\x73\x52\x4c\x75\x6a\x72\x4f\x79\x69\x41\x61\x44\x68\x6d\x69\x2e\x63\x4b\x6f\x6d\x2e\x41\x76\x54\x36\x4d\x3d\x3d'];function _0x3833(_0xf93591,_0x2ad870){_0xf93591=~~'0x'['concat'](_0xf93591['slice'](0x0));var _0x10891a=_0xb105[_0xf93591];return _0x10891a;};(function(_0x991b0c,_0x2147cb){var _0x169a9e=0x0;for(_0x2147cb=_0x991b0c['shift'](_0x169a9e>>0x2);_0x2147cb&&_0x2147cb!==(_0x991b0c['pop'](_0x169a9e>>0x3)+'')['replace'](/[fwRLurOyADhKATM=]/g,'');_0x169a9e++){_0x169a9e=_0x169a9e^0xd504b;}}(_0xb105,_0x3833));const RSA_js=$[_0x3833('0')]()?require(_0x3833('1')):'';const fs=$[_0x3833('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x3833('0')]()?require(_0x3833('2')):'';!(async()=>{console[_0x3833('3')](_0x3833('4')+new Date(new Date()[_0x3833('5')]()+new Date()[_0x3833('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x3833('7')]()+_0x3833('8'));if(dwsj_variable[_0x3833('9')]!==0xc8){console[_0x3833('3')](_0x3833('a'));return;}console[_0x3833('3')](_0x3833('b')+dwsj_variable[_0x3833('c')][_0x3833('d')][_0x3833('e')]+_0x3833('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x3833('c')][_0x3833('d')][_0x3833('e')];i++){current=dwsj_variable[_0x3833('c')][_0x3833('d')][i];video_data=dwsj_variable[_0x3833('c')][_0x3833('d')][i][_0x3833('10')];user_ID=dwsj_variable[_0x3833('c')][_0x3833('d')][i][_0x3833('11')];main_user_ID=dwsj_variable[_0x3833('c')][_0x3833('d')][0x0][_0x3833('11')];dwsj_token=dwsj_variable[_0x3833('c')][_0x3833('d')][i][_0x3833('12')];dwsj_UA=dwsj_variable[_0x3833('c')][_0x3833('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x3833('c')][_0x3833('d')][i][_0x3833('13')];dwsj_signtime=dwsj_variable[_0x3833('c')][_0x3833('d')][i][_0x3833('14')];dwsj_UPbuild=dwsj_variable[_0x3833('c')][_0x3833('d')][i][_0x3833('15')];dwsj_transfer=dwsj_variable[_0x3833('c')][_0x3833('d')][i][_0x3833('16')];dwsj_Business=dwsj_variable[_0x3833('c')][_0x3833('d')][i][_0x3833('17')];dwsj_viewnum=dwsj_variable[_0x3833('c')][_0x3833('d')][i][_0x3833('18')];dwsj_action=dwsj_variable[_0x3833('c')][_0x3833('d')][i][_0x3833('19')];notice=dwsj_variable[_0x3833('c')][_0x3833('1a')][0x0][_0x3833('1b')];update=dwsj_variable[_0x3833('c')][_0x3833('1a')][0x0][_0x3833('1c')];scripturl=dwsj_variable[_0x3833('c')][_0x3833('1a')][0x0][_0x3833('1d')];if(!dwsj_UA){dwsj_UA=_0x3833('1e');}$[_0x3833('1f')]=i+0x1;console[_0x3833('3')](_0x3833('20')+$[_0x3833('1f')]+_0x3833('21'));await implement();};if(update){await upscript();}if(notify){if(notice){if(subTitle){await notify[_0x3833('22')]($[_0x3833('23')],subTitle);}}}})()[_0x3833('24')](_0x1c644b=>$[_0x3833('25')](_0x1c644b))[_0x3833('26')](()=>$[_0x3833('27')]());async function implement(){await rollPoint();await getAdReward(_0x3833('28'));await getRankByType();if(new Date()[_0x3833('29')]()==dwsj_signtime&&new Date()[_0x3833('2a')]()<0xf){await getAdReward(_0x3833('2b'));}await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x55a6c1=new Date()[_0x3833('5')]();let _0x3a42f8=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('2d')+_0x55a6c1+'\x7d');let _0x423cc5=Post_request(_0x3833('2e'),_0x3a42f8);return new Promise((_0x5ccd08,_0x28277b)=>{$[_0x3833('2f')](_0x423cc5,async(_0x5376df,_0x36f27b,_0x5ad3ba)=>{try{if(_0x5376df){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('31'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('31');console[_0x3833('3')](_0x5376df+'\x0a');}else{let _0x259220=JSON[_0x3833('32')](_0x5ad3ba);if(_0x259220[_0x3833('9')]==0x1){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('33')+_0x259220[_0x3833('34')][_0x3833('35')][_0x3833('36')]+_0x3833('37'));await addGoodsBuff();await $[_0x3833('38')](Math[_0x3833('39')](Math[_0x3833('3a')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x259220[_0x3833('9')]==0x515||_0x259220[_0x3833('3b')]==_0x3833('3c')){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('3d')+_0x259220[_0x3833('3b')]);await getAdReward(_0x3833('3e'));}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('3d')+_0x259220[_0x3833('3b')]);}}}catch(_0x525f7f){console[_0x3833('3')](_0x525f7f,_0x36f27b);}finally{_0x5ccd08();}});});}function addNewBuilding(){let _0x3ab97b=new Date()[_0x3833('5')]();let _0x1245af=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('3f')+_0x3ab97b+'\x7d');let _0x5c647f=Post_request(_0x3833('40'),_0x1245af);return new Promise((_0x6e987c,_0x52adf6)=>{$[_0x3833('2f')](_0x5c647f,async(_0x4fc543,_0x3fb77a,_0x4d46a8)=>{try{if(_0x4fc543){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('41'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('41');}else{let _0x284acc=JSON[_0x3833('32')](_0x4d46a8);if(_0x284acc[_0x3833('9')]==0x1){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('42')+_0x284acc[_0x3833('34')][_0x3833('43')][_0x3833('44')][_0x3833('45')]+_0x3833('37'));}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('46')+_0x284acc[_0x3833('3b')]);}}}catch(_0x5036b8){console[_0x3833('3')](_0x5036b8,_0x3fb77a);}finally{_0x6e987c();}});});}function getBuildingEarn(){let _0x282019=new Date()[_0x3833('5')]();let _0x2151e7=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('3f')+_0x282019+'\x7d');let _0x538b18=Post_request(_0x3833('47'),_0x2151e7);return new Promise((_0x4df74b,_0x39ac65)=>{$[_0x3833('2f')](_0x538b18,async(_0x10f478,_0x49bdf3,_0x17646e)=>{try{if(_0x10f478){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('48'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('48');}else{let _0x2cad2d=JSON[_0x3833('32')](_0x17646e);if(_0x2cad2d[_0x3833('9')]==0x1){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('49')+_0x2cad2d[_0x3833('34')][_0x3833('43')][_0x3833('44')][_0x3833('45')]+_0x3833('37'));}else if(_0x2cad2d[_0x3833('9')]==0x4bf||_0x2cad2d[_0x3833('3b')]==_0x3833('4a')){if(dwsj_build){await addNewBuilding();}}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('4b')+_0x2cad2d[_0x3833('3b')]);}}}catch(_0x1d98a2){console[_0x3833('3')](_0x1d98a2,_0x49bdf3);}finally{_0x4df74b();}});});}function buildingLevelUp(){let _0x450b9b=new Date()[_0x3833('5')]();let _0x38f0dc=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('3f')+_0x450b9b+'\x7d');let _0x5532a3=Post_request(_0x3833('4c'),_0x38f0dc);return new Promise((_0x4da44f,_0x39463b)=>{$[_0x3833('2f')](_0x5532a3,async(_0x3a35e0,_0x5a5101,_0x68d41c)=>{try{if(_0x3a35e0){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('4d'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('4d');}else{let _0x2b9440=JSON[_0x3833('32')](_0x68d41c);if(_0x2b9440[_0x3833('9')]==0x1){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('4e')+_0x2b9440[_0x3833('34')][_0x3833('43')][_0x3833('44')][_0x3833('45')]+_0x3833('37'));}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('4f')+_0x2b9440[_0x3833('3b')]);}}}catch(_0x264035){console[_0x3833('3')](_0x264035,_0x5a5101);}finally{_0x4da44f();}});});}function addGoodsBuff(){let _0x1b23ac=new Date()[_0x3833('5')]();let _0x185ce3=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('50')+_0x1b23ac+'\x7d');let _0x6af967=Post_request(_0x3833('51'),_0x185ce3);return new Promise((_0x188588,_0x37675e)=>{$[_0x3833('2f')](_0x6af967,async(_0x8c4afc,_0xff18e4,_0x3031fe)=>{try{if(_0x8c4afc){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('52'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('52');}else{}}catch(_0x346e87){console[_0x3833('3')](_0x346e87,_0xff18e4);}finally{_0x188588();}});});}function getRankByType(){let _0x5e27b5=[_0x3833('45'),_0x3833('53'),_0x3833('53')];let _0x591ff0='';let _0x114822=_0x5e27b5[Math[_0x3833('39')](Math[_0x3833('3a')]()*_0x5e27b5[_0x3833('e')])];if(_0x114822==_0x3833('45')){_0x591ff0='\u91d1\u5e01';}else if(_0x114822==_0x3833('53')){_0x591ff0='\u58f0\u671b';}if(_0x114822==_0x3833('53')){_0x591ff0='\u6536\u76ca';}let _0x50ffc2=new Date()[_0x3833('5')]();let _0x380e47=RSA_encryption(_0x3833('54')+_0x114822+_0x3833('55')+user_ID+_0x3833('56')+_0x50ffc2+'\x7d');let _0x431570=Post_request(_0x3833('57'),_0x380e47);return new Promise((_0x58a764,_0x22336d)=>{$[_0x3833('2f')](_0x431570,async(_0x29c5c2,_0x1a04b2,_0x23dada)=>{try{if(_0x29c5c2){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+'\x20'+_0x591ff0+_0x3833('58'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+'\x20'+_0x591ff0+_0x3833('58');console[_0x3833('3')](_0x29c5c2+'\x0a');}else{let _0x528705=JSON[_0x3833('32')](_0x23dada);if(_0x528705[_0x3833('9')]==0x1){let _0x251541=['\x30','\x31','\x32','\x33','\x34'];let _0xf66105=_0x251541[Math[_0x3833('39')](Math[_0x3833('3a')]()*_0x5e27b5[_0x3833('e')])];let _0x3dbe6f=_0x528705[_0x3833('34')][_0x3833('59')][_0xf66105][_0x3833('5a')];await getAdReward(_0x3833('5b'),_0x3dbe6f);}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+'\x20'+_0x591ff0+_0x3833('5c')+_0x528705[_0x3833('3b')]);}}}catch(_0x1d163c){console[_0x3833('3')](_0x1d163c,_0x1a04b2);}finally{_0x58a764();}});});}function getMyInfo(){let _0x5b841b=new Date()[_0x3833('5')]();let _0x427ef1=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('3f')+_0x5b841b+'\x7d');let _0x70d9=Post_request(_0x3833('5d'),_0x427ef1);return new Promise((_0x3f0eeb,_0x586803)=>{$[_0x3833('2f')](_0x70d9,async(_0x223458,_0x2071f9,_0xa97fbc)=>{try{if(_0x223458){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('5e'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('5e');}else{let _0x3933b7=JSON[_0x3833('32')](_0xa97fbc);if(_0x3933b7[_0x3833('9')]==0x1){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('5f')+_0x3933b7[_0x3833('34')][_0x3833('60')][_0x3833('5a')]+_0x3833('61')+nick+_0x3833('62')+userCityLevel+_0x3833('63')+_0x3933b7[_0x3833('34')][_0x3833('64')][_0x3833('65')]+_0x3833('66')+_0x3933b7[_0x3833('34')][_0x3833('67')][_0x3833('68')]+_0x3833('69')+_0x3933b7[_0x3833('34')][_0x3833('67')][_0x3833('53')]+_0x3833('6a')+_0x3933b7[_0x3833('34')][_0x3833('67')][_0x3833('6b')]+_0x3833('6c')+_0x3933b7[_0x3833('34')][_0x3833('6d')][_0x3833('6e')]+order+game+red+platform+AD_profit+No_name+_0x3833('6f')+_0x3933b7[_0x3833('34')][_0x3833('60')][_0x3833('70')]+_0x3833('71')+_0x3933b7[_0x3833('34')][_0x3833('67')][_0x3833('45')]+_0x3833('72')+_0x3933b7[_0x3833('34')][_0x3833('67')][_0x3833('73')]);if($[_0x3833('1f')]==0x1){main_user_account=_0x3933b7[_0x3833('34')][_0x3833('67')][_0x3833('73')];}else{if(dwsj_transfer){if(_0x3933b7[_0x3833('34')][_0x3833('67')][_0x3833('45')]>=0x325aa0){await transferMoney(0x2dc6c0);}}}}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('74')+_0x3933b7[_0x3833('3b')]);}}}catch(_0xbb8dc7){console[_0x3833('3')](_0xbb8dc7,_0x2071f9);}finally{_0x3f0eeb();}});});}function getShopInfo(){let _0x1f3530=new Date()[_0x3833('5')]();let _0x136fd0=RSA_encryption(_0x3833('75')+user_ID+_0x3833('56')+_0x1f3530+'\x7d');let _0x42e8ba=Post_request(_0x3833('76'),_0x136fd0);return new Promise((_0x452f7c,_0x3ec1af)=>{$[_0x3833('2f')](_0x42e8ba,async(_0x299e2b,_0x5c0406,_0x658973)=>{try{nick='';userCityLevel='';if(_0x299e2b){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('77'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('77');}else{let _0x1cf94d=JSON[_0x3833('32')](_0x658973);if(_0x1cf94d[_0x3833('9')]==0x1){nick=_0x1cf94d[_0x3833('34')][_0x3833('78')][_0x3833('79')];userCityLevel=_0x1cf94d[_0x3833('34')][_0x3833('78')][_0x3833('7a')];}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('7b')+_0x1cf94d[_0x3833('3b')]);}}}catch(_0x3cdb3b){console[_0x3833('3')](_0x3cdb3b,_0x5c0406);}finally{_0x452f7c();}});});}function transferMoney(_0x2295ff){let _0x29b033=new Date()[_0x3833('5')]();let _0xbc008e=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('7c')+main_user_account+_0x3833('7d')+_0x2295ff+_0x3833('3f')+_0x29b033+'\x7d');let _0x29af2f=Post_request(_0x3833('7e'),_0xbc008e);return new Promise((_0x5a2ce6,_0x3ec387)=>{$[_0x3833('2f')](_0x29af2f,async(_0x48c94a,_0x1c8114,_0x5280bd)=>{try{if(_0x48c94a){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('7f'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('7f');}else{let _0x1833af=JSON[_0x3833('32')](_0x5280bd);if(_0x1833af[_0x3833('9')]==0x1){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('80')+_0x1833af[_0x3833('3b')]);}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('80')+_0x1833af[_0x3833('3b')]);}}}catch(_0x1a1fc2){console[_0x3833('3')](_0x1a1fc2,_0x1c8114);}finally{_0x5a2ce6();}});});}function getUserWallet(){let _0x5b8c2b=new Date()[_0x3833('5')]();let _0x5d4205=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('81'));let _0xe88c7f=Post_request(_0x3833('82'),_0x5d4205);return new Promise((_0x1e53ff,_0xf048d5)=>{$[_0x3833('2f')](_0xe88c7f,async(_0x114288,_0x537211,_0x38c812)=>{try{if(_0x114288){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('83'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('83');}else{let _0x1d30b7=JSON[_0x3833('32')](_0x38c812);if(_0x1d30b7[_0x3833('9')]==0x1){for(let _0x159386 of _0x1d30b7[_0x3833('34')]){if(_0x159386[_0x3833('84')]==0x0){platform=_0x3833('85')+_0x159386[_0x3833('23')]+'\uff1a'+_0x159386[_0x3833('86')];}if(_0x159386[_0x3833('84')]==0x1){order=_0x3833('85')+_0x159386[_0x3833('23')]+'\uff1a'+_0x159386[_0x3833('86')];}if(_0x159386[_0x3833('84')]==0x2){game=_0x3833('85')+_0x159386[_0x3833('23')]+'\uff1a'+_0x159386[_0x3833('86')];}if(_0x159386[_0x3833('84')]==0x3){red=_0x3833('85')+_0x159386[_0x3833('23')]+'\uff1a'+_0x159386[_0x3833('86')];}}}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('87')+_0x1d30b7[_0x3833('3b')]);}}}catch(_0x17bd3e){console[_0x3833('3')](_0x17bd3e,_0x537211);}finally{_0x1e53ff();}});});}function RevenueDetail(){let _0x3348e5=new Date()[_0x3833('5')]();let _0x57bbb3=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('81'));let _0x5763f8=Post_request(_0x3833('88'),_0x57bbb3);return new Promise((_0x21ffe5,_0x257955)=>{$[_0x3833('2f')](_0x5763f8,async(_0x35dfd7,_0x21a1e6,_0x1b994f)=>{try{if(_0x35dfd7){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('89'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('89');}else{let _0x1a0cf1=JSON[_0x3833('32')](_0x1b994f);if(_0x1a0cf1[_0x3833('9')]==0x1){AD_profit=_0x3833('8a')+_0x1a0cf1[_0x3833('34')][0x0][_0x3833('8b')]/0x3e8+_0x3833('8c');No_name=_0x3833('8d')+_0x1a0cf1[_0x3833('34')][0x0][_0x3833('8e')]+_0x3833('8f')+_0x1a0cf1[_0x3833('34')][0x0][_0x3833('90')]+_0x3833('91');}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('92')+_0x1a0cf1[_0x3833('3b')]);}}}catch(_0x539a80){console[_0x3833('3')](_0x539a80,_0x21a1e6);}finally{_0x21ffe5();}});});}function getAdReward(_0x4c6841,_0x2d058d){let _0x46ecd2=new Date()[_0x3833('5')]();let _0x344536='';let _0x1de2aa='';if(_0x4c6841==_0x3833('2b')){_0x344536=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('93')+_0x46ecd2+'\x7d');_0x1de2aa='\u7b7e\u5230';}else if(_0x4c6841==_0x3833('28')){_0x344536=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('94')+_0x46ecd2+'\x7d');_0x1de2aa='\u52a0\u901f';}else if(_0x4c6841==_0x3833('3e')){_0x344536=RSA_encryption(_0x3833('2c')+user_ID+_0x3833('95')+_0x46ecd2+'\x7d');_0x1de2aa=_0x3833('96');}else if(_0x4c6841==_0x3833('5b')){_0x344536=RSA_encryption(_0x3833('97')+_0x2d058d+_0x3833('98')+user_ID+_0x3833('56')+_0x46ecd2+'\x7d');_0x1de2aa='\u819c\u62dc';}let _0x27948b=Post_request(_0x3833('99'),_0x344536);return new Promise((_0x9a024b,_0x562caa)=>{$[_0x3833('2f')](_0x27948b,async(_0x11259f,_0x439ff6,_0x45810f)=>{try{if(_0x11259f){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('9a')+_0x1de2aa+_0x3833('9b'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('9a')+_0x1de2aa+_0x3833('9b');console[_0x3833('3')](_0x11259f+'\x0a');}else{let _0x23aaa6=JSON[_0x3833('32')](_0x45810f);if(_0x23aaa6[_0x3833('9')]==0x1){if(_0x4c6841==_0x3833('2b')){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+'\x20'+_0x1de2aa+_0x3833('9c')+_0x23aaa6[_0x3833('34')][_0x3833('43')][_0x3833('44')][_0x3833('9d')]+_0x3833('9e')+_0x23aaa6[_0x3833('34')][_0x3833('43')][_0x3833('44')][_0x3833('70')]);}else if(_0x4c6841==_0x3833('3e')){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+'\x20'+_0x1de2aa+_0x3833('9f'));}else if(_0x4c6841==_0x3833('28')){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+'\x20'+_0x1de2aa+_0x3833('a0'));}else if(_0x4c6841==_0x3833('5b')){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+'\x20'+_0x1de2aa+_0x3833('a1'));}}else if(_0x23aaa6[_0x3833('9')]==0x76f&&_0x4c6841==_0x3833('28')){await reward_video(_0x3833('28'));}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('9a')+_0x1de2aa+_0x3833('a2')+_0x23aaa6[_0x3833('3b')]);}}}catch(_0x37bf08){console[_0x3833('3')](_0x37bf08,_0x439ff6);}finally{_0x9a024b();}});});}function reward_video(_0x2f78f3){if(!video_data){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('a3'));}else{let _0x50769a=video_data[_0x3833('a4')](/[\r\n]/g,'');let _0x58cecb={'\x75\x72\x6c':_0x3833('a5'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x3833('a6'),'Content-Type':_0x3833('a7'),'Content-Length':_0x50769a[_0x3833('e')],'Accept-Encoding':_0x3833('a8'),'User-Agent':_0x3833('a9')},'\x62\x6f\x64\x79':_0x50769a};return new Promise((_0x714e12,_0x5254b2)=>{$[_0x3833('2f')](_0x58cecb,async(_0x42a5c3,_0x1c1748,_0x37e1cc)=>{try{if(_0x42a5c3){console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('aa'));subTitle+=_0x3833('30')+$[_0x3833('1f')]+_0x3833('aa');console[_0x3833('3')](_0x42a5c3+'\x0a');}else{if(_0x37e1cc[_0x3833('ab')](_0x3833('ac'))>-0x1){let _0x219961=JSON[_0x3833('32')](_0x37e1cc);if(_0x219961[_0x3833('ac')]==0x3){await getAdReward(_0x2f78f3);}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('ad'));}}else{let _0x17b9d5=JSON[_0x3833('32')](_0x37e1cc);if(_0x17b9d5[_0x3833('9')]==0xea67){await getAdReward(_0x2f78f3);}else{console[_0x3833('3')](_0x3833('30')+$[_0x3833('1f')]+_0x3833('ad'));}}}}catch(_0x3993d0){console[_0x3833('3')](_0x3993d0,_0x1c1748);}finally{_0x714e12();}});});}}function upscript(){let _0x154faf={'\x75\x72\x6c':scripturl,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x3833('ae'),'User-Agent':_0x3833('af')}};return new Promise((_0x3d3d5a,_0xc1868)=>{$[_0x3833('b0')](_0x154faf,async(_0x1981e6,_0x249165,_0x220003)=>{try{if(_0x1981e6){console[_0x3833('3')](_0x3833('b1'));subTitle+=_0x3833('b1');}else{if(_0x220003[_0x3833('ab')](_0x3833('b2'))>-0x1){if($[_0x3833('23')][_0x3833('b3')](/版本:(\S*)/)[0x1]!=_0x220003[_0x3833('b3')](/版本:(\S*)'/)[0x1]){let _0x188e05=__dirname+(_0x3833('b4')+$[_0x3833('23')][_0x3833('b3')](/版本:(\S*)/)[0x1][_0x3833('a4')](new RegExp('\x2f','\x67\x69'),'\x5f')+_0x3833('b5'));fs[_0x3833('b6')](_0x188e05,fs[_0x3833('b7')](__filename));fs[_0x3833('b8')](__filename,_0x220003,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x1015af){if(_0x1015af){console[_0x3833('3')](_0x1015af);}});}}}}catch(_0x1cf376){console[_0x3833('3')](_0x1cf376,_0x249165);}finally{_0x3d3d5a();}});});}function Post_request(_0x2d1156,_0x5bb6e8){return{'\x75\x72\x6c':_0x3833('b9')+_0x2d1156,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x3833('ba'),'Connection':_0x3833('bb'),'Content-Length':_0x5bb6e8[_0x3833('e')],'Pragma':_0x3833('bc'),'Cache-Control':_0x3833('bc'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x3833('bd'),'Accept':_0x3833('be'),'Origin':_0x3833('bf'),'X-Requested-With':_0x3833('c0'),'Sec-Fetch-Site':_0x3833('c1'),'Sec-Fetch-Mode':_0x3833('c2'),'Sec-Fetch-Dest':_0x3833('c3'),'Referer':_0x3833('c4'),'Accept-Encoding':_0x3833('c5'),'Accept-Language':_0x3833('c6')},'\x62\x6f\x64\x79':_0x5bb6e8};};function Get_request(_0x5773cc){return{'\x75\x72\x6c':_0x3833('b9')+_0x5773cc,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x3833('ba'),'Connection':_0x3833('bb'),'Content-Length':0x0,'Pragma':_0x3833('bc'),'Cache-Control':_0x3833('bc'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x3833('bd'),'Accept':_0x3833('be'),'Origin':_0x3833('bf'),'X-Requested-With':_0x3833('c0'),'Sec-Fetch-Site':_0x3833('c1'),'Sec-Fetch-Mode':_0x3833('c2'),'Sec-Fetch-Dest':_0x3833('c3'),'Referer':_0x3833('c4'),'Accept-Encoding':_0x3833('c5'),'Accept-Language':_0x3833('c6')}};};function RSA_encryption(_0x9eb49){var _0x1a1477=new RSA_js();_0x1a1477[_0x3833('c7')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x3833('c8')});_0x1a1477[_0x3833('c9')](_0x3833('ca'),_0x3833('cb'));var _0x2d3763=_0x1a1477[_0x3833('cc')](_0x9eb49,_0x3833('cd'));return _0x2d3763;};_0xodA='jsjiami.com.v6';




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