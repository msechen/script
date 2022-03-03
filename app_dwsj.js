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

var _0xodB='jsjiami.com.v6',_0xodB_=['_0xodB'],_0x1e35=[_0xodB,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x76\x69\x65\x77','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x74\x6f\x75','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x63\x65\x69\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x73\x69\x67\x6e','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u6ca1\u6709\x20\x72\x65\x77\x61\x72\x64\x5f\x64\x61\x74\x61\x20\u53d8\u91cf\x2c\u65e0\u6cd5\u64cd\u4f5c','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x6a\x52\x73\x44\x52\x50\x6a\x69\x61\x68\x58\x5a\x6d\x69\x52\x4f\x2e\x42\x63\x72\x6f\x59\x4c\x6d\x2e\x76\x49\x36\x53\x3d\x3d'];function _0x5a05(_0x166e18,_0x4ed726){_0x166e18=~~'0x'['concat'](_0x166e18['slice'](0x0));var _0x16a635=_0x1e35[_0x166e18];return _0x16a635;};(function(_0x4b68aa,_0x371c65){var _0x50cbb0=0x0;for(_0x371c65=_0x4b68aa['shift'](_0x50cbb0>>0x2);_0x371c65&&_0x371c65!==(_0x4b68aa['pop'](_0x50cbb0>>0x3)+'')['replace'](/[RDRPhXZROBrYLIS=]/g,'');_0x50cbb0++){_0x50cbb0=_0x50cbb0^0xd4ab0;}}(_0x1e35,_0x5a05));const RSA_js=$[_0x5a05('0')]()?require(_0x5a05('1')):'';const fs=$[_0x5a05('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x5a05('0')]()?require(_0x5a05('2')):'';!(async()=>{console[_0x5a05('3')](_0x5a05('4')+new Date(new Date()[_0x5a05('5')]()+new Date()[_0x5a05('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5a05('7')]()+_0x5a05('8'));if(dwsj_variable[_0x5a05('9')]!==0xc8){console[_0x5a05('3')](_0x5a05('a'));return;}console[_0x5a05('3')](_0x5a05('b')+dwsj_variable[_0x5a05('c')][_0x5a05('d')][_0x5a05('e')]+_0x5a05('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x5a05('c')][_0x5a05('d')][_0x5a05('e')];i++){current=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i];video_data=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i][_0x5a05('10')];user_ID=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i][_0x5a05('11')];main_user_ID=dwsj_variable[_0x5a05('c')][_0x5a05('d')][0x0][_0x5a05('11')];dwsj_token=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i][_0x5a05('12')];dwsj_UA=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i][_0x5a05('13')];dwsj_signtime=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i][_0x5a05('14')];dwsj_UPbuild=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i][_0x5a05('15')];dwsj_transfer=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i][_0x5a05('16')];dwsj_Business=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i][_0x5a05('17')];dwsj_viewnum=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i][_0x5a05('18')];dwsj_action=dwsj_variable[_0x5a05('c')][_0x5a05('d')][i][_0x5a05('19')];notice=dwsj_variable[_0x5a05('c')][_0x5a05('1a')][0x0][_0x5a05('1b')];if(!dwsj_UA){dwsj_UA=_0x5a05('1c');}$[_0x5a05('1d')]=i+0x1;console[_0x5a05('3')](_0x5a05('1e')+$[_0x5a05('1d')]+_0x5a05('1f'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x5a05('20')]($[_0x5a05('21')],subTitle);}}}})()[_0x5a05('22')](_0x2536c8=>$[_0x5a05('23')](_0x2536c8))[_0x5a05('24')](()=>$[_0x5a05('25')]());async function implement(){await rollPoint();await getAdReward(_0x5a05('26'));await getRankByType();await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x4cbe10=new Date()[_0x5a05('5')]();let _0x51f276=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('28')+_0x4cbe10+'\x7d');let _0x327b1f=Post_request(_0x5a05('29'),_0x51f276);return new Promise((_0x1a8568,_0x460924)=>{$[_0x5a05('2a')](_0x327b1f,async(_0x5d40ae,_0x32a09a,_0x46ee4b)=>{try{if(_0x5d40ae){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('2c'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('2c');console[_0x5a05('3')](_0x5d40ae+'\x0a');}else{let _0x34e70c=JSON[_0x5a05('2d')](_0x46ee4b);if(_0x34e70c[_0x5a05('9')]==0x1){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('2e')+_0x34e70c[_0x5a05('2f')][_0x5a05('30')][_0x5a05('31')]+_0x5a05('32'));await addGoodsBuff();await $[_0x5a05('33')](Math[_0x5a05('34')](Math[_0x5a05('35')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x34e70c[_0x5a05('9')]==0x515||_0x34e70c[_0x5a05('36')]==_0x5a05('37')){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('38')+_0x34e70c[_0x5a05('36')]);await getAdReward(_0x5a05('39'));}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('38')+_0x34e70c[_0x5a05('36')]);}}}catch(_0x538841){console[_0x5a05('3')](_0x538841,_0x32a09a);}finally{_0x1a8568();}});});}function addNewBuilding(){let _0xfa8f15=new Date()[_0x5a05('5')]();let _0x553671=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('3a')+_0xfa8f15+'\x7d');let _0x1e9fa4=Post_request(_0x5a05('3b'),_0x553671);return new Promise((_0x510841,_0x44309d)=>{$[_0x5a05('2a')](_0x1e9fa4,async(_0x5dd802,_0x48db25,_0x577412)=>{try{if(_0x5dd802){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('3c'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('3c');}else{let _0x177cb4=JSON[_0x5a05('2d')](_0x577412);if(_0x177cb4[_0x5a05('9')]==0x1){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('3d')+_0x177cb4[_0x5a05('2f')][_0x5a05('3e')][_0x5a05('3f')][_0x5a05('40')]+_0x5a05('32'));}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('41')+_0x177cb4[_0x5a05('36')]);}}}catch(_0xf612e6){console[_0x5a05('3')](_0xf612e6,_0x48db25);}finally{_0x510841();}});});}function getBuildingEarn(){let _0x4b1541=new Date()[_0x5a05('5')]();let _0x235df7=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('3a')+_0x4b1541+'\x7d');let _0x1f5bee=Post_request(_0x5a05('42'),_0x235df7);return new Promise((_0x5688a1,_0x183a68)=>{$[_0x5a05('2a')](_0x1f5bee,async(_0x8a1be0,_0x2ea47f,_0x2e04cd)=>{try{if(_0x8a1be0){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('43'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('43');}else{let _0x7b4e67=JSON[_0x5a05('2d')](_0x2e04cd);if(_0x7b4e67[_0x5a05('9')]==0x1){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('44')+_0x7b4e67[_0x5a05('2f')][_0x5a05('3e')][_0x5a05('3f')][_0x5a05('40')]+_0x5a05('32'));}else if(_0x7b4e67[_0x5a05('9')]==0x4bf||_0x7b4e67[_0x5a05('36')]==_0x5a05('45')){if(dwsj_build){await addNewBuilding();}}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('46')+_0x7b4e67[_0x5a05('36')]);}}}catch(_0x403f54){console[_0x5a05('3')](_0x403f54,_0x2ea47f);}finally{_0x5688a1();}});});}function buildingLevelUp(){let _0x3f1c35=new Date()[_0x5a05('5')]();let _0x3c5cde=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('3a')+_0x3f1c35+'\x7d');let _0x6c7bec=Post_request(_0x5a05('47'),_0x3c5cde);return new Promise((_0x5f28e7,_0x1c37c6)=>{$[_0x5a05('2a')](_0x6c7bec,async(_0x23c41d,_0x59c153,_0x2f435e)=>{try{if(_0x23c41d){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('48'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('48');}else{let _0xb70a51=JSON[_0x5a05('2d')](_0x2f435e);if(_0xb70a51[_0x5a05('9')]==0x1){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('49')+_0xb70a51[_0x5a05('2f')][_0x5a05('3e')][_0x5a05('3f')][_0x5a05('40')]+_0x5a05('32'));}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('4a')+_0xb70a51[_0x5a05('36')]);}}}catch(_0x1d87f9){console[_0x5a05('3')](_0x1d87f9,_0x59c153);}finally{_0x5f28e7();}});});}function addGoodsBuff(){let _0x1afab4=new Date()[_0x5a05('5')]();let _0xddf537=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('4b')+_0x1afab4+'\x7d');let _0x4d46bc=Post_request(_0x5a05('4c'),_0xddf537);return new Promise((_0x32f4be,_0x418eb9)=>{$[_0x5a05('2a')](_0x4d46bc,async(_0x19da63,_0x1fe77e,_0x12d4b8)=>{try{if(_0x19da63){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('4d'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('4d');}else{}}catch(_0x29f300){console[_0x5a05('3')](_0x29f300,_0x1fe77e);}finally{_0x32f4be();}});});}function getRankByType(){let _0x1a9bd7=[_0x5a05('40'),_0x5a05('4e'),_0x5a05('4e')];let _0x4ab09f='';let _0x14fe7f=_0x1a9bd7[Math[_0x5a05('34')](Math[_0x5a05('35')]()*_0x1a9bd7[_0x5a05('e')])];if(_0x14fe7f==_0x5a05('40')){_0x4ab09f='\u91d1\u5e01';}else if(_0x14fe7f==_0x5a05('4e')){_0x4ab09f='\u58f0\u671b';}if(_0x14fe7f==_0x5a05('4e')){_0x4ab09f='\u6536\u76ca';}let _0x2e13b0=new Date()[_0x5a05('5')]();let _0x1a861c=RSA_encryption(_0x5a05('4f')+_0x14fe7f+_0x5a05('50')+user_ID+_0x5a05('51')+_0x2e13b0+'\x7d');let _0x1f4270=Post_request(_0x5a05('52'),_0x1a861c);return new Promise((_0x328671,_0x17ecd3)=>{$[_0x5a05('2a')](_0x1f4270,async(_0x133c63,_0x3da72b,_0x35bea3)=>{try{if(_0x133c63){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+'\x20'+_0x4ab09f+_0x5a05('53'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+'\x20'+_0x4ab09f+_0x5a05('53');console[_0x5a05('3')](_0x133c63+'\x0a');}else{let _0x3b8a54=JSON[_0x5a05('2d')](_0x35bea3);if(_0x3b8a54[_0x5a05('9')]==0x1){let _0x53125a=['\x30','\x31','\x32','\x33','\x34'];let _0x402fa0=_0x53125a[Math[_0x5a05('34')](Math[_0x5a05('35')]()*_0x1a9bd7[_0x5a05('e')])];let _0x51c50b=_0x3b8a54[_0x5a05('2f')][_0x5a05('54')][_0x402fa0][_0x5a05('55')];await getAdReward(_0x5a05('56'),_0x51c50b);}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+'\x20'+_0x4ab09f+_0x5a05('57')+_0x3b8a54[_0x5a05('36')]);}}}catch(_0x1d69ce){console[_0x5a05('3')](_0x1d69ce,_0x3da72b);}finally{_0x328671();}});});}function getMyInfo(){let _0x27c5cd=new Date()[_0x5a05('5')]();let _0x1e2206=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('3a')+_0x27c5cd+'\x7d');let _0x18f230=Post_request(_0x5a05('58'),_0x1e2206);return new Promise((_0xdf9e38,_0x1ecfdb)=>{$[_0x5a05('2a')](_0x18f230,async(_0x51bf6a,_0x3053fd,_0xebb5c8)=>{try{if(_0x51bf6a){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('59'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('59');}else{let _0x457d09=JSON[_0x5a05('2d')](_0xebb5c8);if(_0x457d09[_0x5a05('9')]==0x1){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('5a')+_0x457d09[_0x5a05('2f')][_0x5a05('5b')][_0x5a05('55')]+_0x5a05('5c')+nick+_0x5a05('5d')+userCityLevel+_0x5a05('5e')+_0x457d09[_0x5a05('2f')][_0x5a05('5f')][_0x5a05('60')]+_0x5a05('61')+_0x457d09[_0x5a05('2f')][_0x5a05('62')][_0x5a05('63')]+_0x5a05('64')+_0x457d09[_0x5a05('2f')][_0x5a05('62')][_0x5a05('4e')]+_0x5a05('65')+_0x457d09[_0x5a05('2f')][_0x5a05('62')][_0x5a05('66')]+_0x5a05('67')+_0x457d09[_0x5a05('2f')][_0x5a05('68')][_0x5a05('69')]+order+game+red+platform+AD_profit+No_name+_0x5a05('6a')+_0x457d09[_0x5a05('2f')][_0x5a05('5b')][_0x5a05('6b')]+_0x5a05('6c')+_0x457d09[_0x5a05('2f')][_0x5a05('62')][_0x5a05('40')]+_0x5a05('6d')+_0x457d09[_0x5a05('2f')][_0x5a05('62')][_0x5a05('6e')]);if($[_0x5a05('1d')]==0x1){main_user_account=_0x457d09[_0x5a05('2f')][_0x5a05('62')][_0x5a05('6e')];}else{if(dwsj_transfer){await transferMoney(''+(_0x457d09[_0x5a05('2f')][_0x5a05('62')][_0x5a05('40')]-Math[_0x5a05('6f')](_0x457d09[_0x5a05('2f')][_0x5a05('62')][_0x5a05('40')]*0.1)));}}}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('70')+_0x457d09[_0x5a05('36')]);}}}catch(_0x39ebb6){console[_0x5a05('3')](_0x39ebb6,_0x3053fd);}finally{_0xdf9e38();}});});}function getShopInfo(){let _0x4dbab8=new Date()[_0x5a05('5')]();let _0x2c9eb6=RSA_encryption(_0x5a05('71')+user_ID+_0x5a05('51')+_0x4dbab8+'\x7d');let _0x3253b5=Post_request(_0x5a05('72'),_0x2c9eb6);return new Promise((_0x555277,_0x228de1)=>{$[_0x5a05('2a')](_0x3253b5,async(_0x3758f9,_0xea9aba,_0x4ff9ff)=>{try{nick='';userCityLevel='';if(_0x3758f9){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('73'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('73');}else{let _0x1a1873=JSON[_0x5a05('2d')](_0x4ff9ff);if(_0x1a1873[_0x5a05('9')]==0x1){nick=_0x1a1873[_0x5a05('2f')][_0x5a05('74')][_0x5a05('75')];userCityLevel=_0x1a1873[_0x5a05('2f')][_0x5a05('74')][_0x5a05('76')];}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('77')+_0x1a1873[_0x5a05('36')]);}}}catch(_0x2ff7ba){console[_0x5a05('3')](_0x2ff7ba,_0xea9aba);}finally{_0x555277();}});});}function transferMoney(_0x306fa9){let _0x1e8dad=new Date()[_0x5a05('5')]();let _0x280fbb=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('78')+main_user_account+_0x5a05('79')+_0x306fa9+_0x5a05('3a')+_0x1e8dad+'\x7d');let _0x59efff=Post_request(_0x5a05('7a'),_0x280fbb);return new Promise((_0x10f4ca,_0x5683b2)=>{$[_0x5a05('2a')](_0x59efff,async(_0x15e8d1,_0x3fe8fc,_0x2d45d5)=>{try{if(_0x15e8d1){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('7b'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('7b');}else{let _0x77b03f=JSON[_0x5a05('2d')](_0x2d45d5);if(_0x77b03f[_0x5a05('9')]==0x1){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('7c')+_0x77b03f[_0x5a05('36')]);}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('7c')+_0x77b03f[_0x5a05('36')]);}}}catch(_0x3db7a9){console[_0x5a05('3')](_0x3db7a9,_0x3fe8fc);}finally{_0x10f4ca();}});});}function getUserWallet(){let _0x4a02ea=new Date()[_0x5a05('5')]();let _0x406054=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('7d'));let _0x30b41f=Post_request(_0x5a05('7e'),_0x406054);return new Promise((_0x1535a3,_0x4a5bc5)=>{$[_0x5a05('2a')](_0x30b41f,async(_0x2322bf,_0x3ab421,_0x428a1b)=>{try{if(_0x2322bf){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('7f'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('7f');}else{let _0x3f3434=JSON[_0x5a05('2d')](_0x428a1b);if(_0x3f3434[_0x5a05('9')]==0x1){for(let _0x5d7018 of _0x3f3434[_0x5a05('2f')]){if(_0x5d7018[_0x5a05('80')]==0x0){platform=_0x5a05('81')+_0x5d7018[_0x5a05('21')]+'\uff1a'+_0x5d7018[_0x5a05('82')];}if(_0x5d7018[_0x5a05('80')]==0x1){order=_0x5a05('81')+_0x5d7018[_0x5a05('21')]+'\uff1a'+_0x5d7018[_0x5a05('82')];}if(_0x5d7018[_0x5a05('80')]==0x2){game=_0x5a05('81')+_0x5d7018[_0x5a05('21')]+'\uff1a'+_0x5d7018[_0x5a05('82')];}if(_0x5d7018[_0x5a05('80')]==0x3){red=_0x5a05('81')+_0x5d7018[_0x5a05('21')]+'\uff1a'+_0x5d7018[_0x5a05('82')];}}}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('83')+_0x3f3434[_0x5a05('36')]);}}}catch(_0x5eb360){console[_0x5a05('3')](_0x5eb360,_0x3ab421);}finally{_0x1535a3();}});});}function RevenueDetail(){let _0x3cb1d2=new Date()[_0x5a05('5')]();let _0x27889a=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('7d'));let _0x279037=Post_request(_0x5a05('84'),_0x27889a);return new Promise((_0x1a2d6a,_0x14b942)=>{$[_0x5a05('2a')](_0x279037,async(_0x6b45fd,_0x38064a,_0x522110)=>{try{if(_0x6b45fd){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('85'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('85');}else{let _0x21f496=JSON[_0x5a05('2d')](_0x522110);if(_0x21f496[_0x5a05('9')]==0x1){AD_profit=_0x5a05('86')+_0x21f496[_0x5a05('2f')][0x0][_0x5a05('87')]/0x3e8+_0x5a05('88');No_name=_0x5a05('89')+_0x21f496[_0x5a05('2f')][0x0][_0x5a05('8a')]+_0x5a05('8b')+_0x21f496[_0x5a05('2f')][0x0][_0x5a05('8c')]+_0x5a05('8d');}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('8e')+_0x21f496[_0x5a05('36')]);}}}catch(_0x395670){console[_0x5a05('3')](_0x395670,_0x38064a);}finally{_0x1a2d6a();}});});}function getAdReward(_0xfb4479,_0x5b42be){let _0x48cfb7=new Date()[_0x5a05('5')]();let _0x553c71='';let _0x12e9d9='';if(_0xfb4479==_0x5a05('8f')){_0x553c71=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('90')+_0x48cfb7+'\x7d');_0x12e9d9='\u7b7e\u5230';}else if(_0xfb4479==_0x5a05('26')){_0x553c71=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('91')+_0x48cfb7+'\x7d');_0x12e9d9='\u52a0\u901f';}else if(_0xfb4479==_0x5a05('39')){_0x553c71=RSA_encryption(_0x5a05('27')+user_ID+_0x5a05('92')+_0x48cfb7+'\x7d');_0x12e9d9=_0x5a05('93');}else if(_0xfb4479==_0x5a05('56')){_0x553c71=RSA_encryption(_0x5a05('94')+_0x5b42be+_0x5a05('95')+user_ID+_0x5a05('51')+_0x48cfb7+'\x7d');_0x12e9d9='\u819c\u62dc';}let _0x1a2902=Post_request(_0x5a05('96'),_0x553c71);return new Promise((_0x4cfd78,_0x17d00f)=>{$[_0x5a05('2a')](_0x1a2902,async(_0x57a164,_0x35c3f3,_0x3541d7)=>{try{if(_0x57a164){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('97')+_0x12e9d9+_0x5a05('98'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('97')+_0x12e9d9+_0x5a05('98');console[_0x5a05('3')](_0x57a164+'\x0a');}else{let _0x19d746=JSON[_0x5a05('2d')](_0x3541d7);if(_0x19d746[_0x5a05('9')]==0x1){if(_0xfb4479==_0x5a05('8f')){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+'\x20'+_0x12e9d9+_0x5a05('99')+_0x19d746[_0x5a05('2f')][_0x5a05('3e')][_0x5a05('3f')][_0x5a05('9a')]+_0x5a05('9b')+_0x19d746[_0x5a05('2f')][_0x5a05('3e')][_0x5a05('3f')][_0x5a05('6b')]);}else if(_0xfb4479==_0x5a05('39')){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+'\x20'+_0x12e9d9+_0x5a05('9c'));}else if(_0xfb4479==_0x5a05('26')){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+'\x20'+_0x12e9d9+_0x5a05('9d'));}else if(_0xfb4479==_0x5a05('56')){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+'\x20'+_0x12e9d9+_0x5a05('9e'));}}else if(_0x19d746[_0x5a05('9')]==0x76f&&_0xfb4479==_0x5a05('26')){await reward_video(_0x5a05('26'));}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('97')+_0x12e9d9+_0x5a05('9f')+_0x19d746[_0x5a05('36')]);}}}catch(_0x2a25eb){console[_0x5a05('3')](_0x2a25eb,_0x35c3f3);}finally{_0x4cfd78();}});});}function reward_video(_0x41e200){if(!video_data){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('a0'));}else{let _0x3a29b8=video_data[_0x5a05('a1')](/[\r\n]/g,'');let _0x3c9b3c={'\x75\x72\x6c':_0x5a05('a2'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5a05('a3'),'Content-Type':_0x5a05('a4'),'Content-Length':_0x3a29b8[_0x5a05('e')],'Accept-Encoding':_0x5a05('a5'),'User-Agent':_0x5a05('a6')},'\x62\x6f\x64\x79':_0x3a29b8};return new Promise((_0x12cc9f,_0x1531a9)=>{$[_0x5a05('2a')](_0x3c9b3c,async(_0x5d0ee6,_0xe8c08e,_0x459777)=>{try{if(_0x5d0ee6){console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('a7'));subTitle+=_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('a7');console[_0x5a05('3')](_0x5d0ee6+'\x0a');}else{if(_0x459777[_0x5a05('a8')](_0x5a05('a9'))>-0x1){let _0x15ca94=JSON[_0x5a05('2d')](_0x459777);if(_0x15ca94[_0x5a05('a9')]==0x3){await getAdReward(_0x41e200);}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('aa'));}}else{let _0x406f82=JSON[_0x5a05('2d')](_0x459777);if(_0x406f82[_0x5a05('9')]==0xea67){await getAdReward(_0x41e200);}else{console[_0x5a05('3')](_0x5a05('2b')+$[_0x5a05('1d')]+_0x5a05('aa'));}}}}catch(_0x4b07de){console[_0x5a05('3')](_0x4b07de,_0xe8c08e);}finally{_0x12cc9f();}});});}}function Post_request(_0x5b591b,_0x1c4af5){return{'\x75\x72\x6c':_0x5a05('ab')+_0x5b591b,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5a05('ac'),'Connection':_0x5a05('ad'),'Content-Length':_0x1c4af5[_0x5a05('e')],'Pragma':_0x5a05('ae'),'Cache-Control':_0x5a05('ae'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x5a05('af'),'Accept':_0x5a05('b0'),'Origin':_0x5a05('b1'),'X-Requested-With':_0x5a05('b2'),'Sec-Fetch-Site':_0x5a05('b3'),'Sec-Fetch-Mode':_0x5a05('b4'),'Sec-Fetch-Dest':_0x5a05('b5'),'Referer':_0x5a05('b6'),'Accept-Encoding':_0x5a05('b7'),'Accept-Language':_0x5a05('b8')},'\x62\x6f\x64\x79':_0x1c4af5};};function Get_request(_0x1fc75e){return{'\x75\x72\x6c':_0x5a05('ab')+_0x1fc75e,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5a05('ac'),'Connection':_0x5a05('ad'),'Content-Length':0x0,'Pragma':_0x5a05('ae'),'Cache-Control':_0x5a05('ae'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x5a05('af'),'Accept':_0x5a05('b0'),'Origin':_0x5a05('b1'),'X-Requested-With':_0x5a05('b2'),'Sec-Fetch-Site':_0x5a05('b3'),'Sec-Fetch-Mode':_0x5a05('b4'),'Sec-Fetch-Dest':_0x5a05('b5'),'Referer':_0x5a05('b6'),'Accept-Encoding':_0x5a05('b7'),'Accept-Language':_0x5a05('b8')}};};function RSA_encryption(_0x59e356){var _0x354058=new RSA_js();_0x354058[_0x5a05('b9')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x5a05('ba')});_0x354058[_0x5a05('bb')](_0x5a05('bc'),_0x5a05('bd'));var _0x72848b=_0x354058[_0x5a05('be')](_0x59e356,_0x5a05('bf'));return _0x72848b;};_0xodB='jsjiami.com.v6';



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