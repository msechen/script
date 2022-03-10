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


const $ = new Env('【闪电世界】版本:22/03/10_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodI='jsjiami.com.v6',_0xodI_=['_0xodI'],_0xdd48=[_0xodI,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x75\x72\x6c','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x76\x69\x65\x77','\x73\x69\x67\x6e','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x74\x6f\x75','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77\x50\x61\x67\x65','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x61\x62\x6c\x65\x4d\x6f\x6e\x65\x79','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x22\x32\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x77\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u6210\u529f','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u819c\u62dc\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x65\x6e\x64','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x30\x5f\x31\x35\x5f\x35\x20\x28\x45\x72\x67\u00e4\x6e\x7a\x65\x6e\x64\x65\x73\x20\x55\x70\x64\x61\x74\x65\x29\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x32\x2e\x31\x2e\x31\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x34\x45\x33\x30\x34\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u83b7\u53d6\u811a\u672c\u5730\u5740\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7535\u73a9\u4e16\u754c','\x6d\x61\x74\x63\x68','\x2f\x64\x77\x73\x6a\x5f\u7248\u672c\x3a','\x2e\x6a\x73','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x73\x74\x61\x72\x74','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30\x2c','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31\x2c','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u66f4\u65b0\u6570\u636e\u6210\u529f','\x4a\x6a\x73\x6a\x4e\x69\x61\x68\x64\x46\x62\x6d\x7a\x69\x2e\x4b\x63\x6f\x49\x4b\x6d\x2e\x76\x36\x47\x4b\x66\x47\x3d\x3d'];function _0x153c(_0x160b0d,_0x2439c8){_0x160b0d=~~'0x'['concat'](_0x160b0d['slice'](0x0));var _0x25d94b=_0xdd48[_0x160b0d];return _0x25d94b;};(function(_0x507b42,_0x16b5ea){var _0x334735=0x0;for(_0x16b5ea=_0x507b42['shift'](_0x334735>>0x2);_0x16b5ea&&_0x16b5ea!==(_0x507b42['pop'](_0x334735>>0x3)+'')['replace'](/[JNhdFbzKIKGKfG=]/g,'');_0x334735++){_0x334735=_0x334735^0xd66f8;}}(_0xdd48,_0x153c));const RSA_js=$[_0x153c('0')]()?require(_0x153c('1')):'';const fs=$[_0x153c('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x153c('0')]()?require(_0x153c('2')):'';let modify=![];!(async()=>{console[_0x153c('3')](_0x153c('4')+new Date(new Date()[_0x153c('5')]()+new Date()[_0x153c('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x153c('7')]()+_0x153c('8'));if(dwsj_variable[_0x153c('9')]!==0xc8){console[_0x153c('3')](_0x153c('a'));return;}console[_0x153c('3')](_0x153c('b')+dwsj_variable[_0x153c('c')][_0x153c('d')][_0x153c('e')]+_0x153c('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x153c('c')][_0x153c('d')][_0x153c('e')];i++){current=dwsj_variable[_0x153c('c')][_0x153c('d')][i];video_data=dwsj_variable[_0x153c('c')][_0x153c('d')][i][_0x153c('10')];user_ID=dwsj_variable[_0x153c('c')][_0x153c('d')][i][_0x153c('11')];main_user_ID=dwsj_variable[_0x153c('c')][_0x153c('d')][0x0][_0x153c('11')];dwsj_token=dwsj_variable[_0x153c('c')][_0x153c('d')][i][_0x153c('12')];dwsj_UA=dwsj_variable[_0x153c('c')][_0x153c('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x153c('c')][_0x153c('d')][i][_0x153c('13')];dwsj_signtime=dwsj_variable[_0x153c('c')][_0x153c('d')][i][_0x153c('14')];dwsj_UPbuild=dwsj_variable[_0x153c('c')][_0x153c('d')][i][_0x153c('15')];dwsj_transfer=dwsj_variable[_0x153c('c')][_0x153c('d')][i][_0x153c('16')];dwsj_Business=dwsj_variable[_0x153c('c')][_0x153c('d')][i][_0x153c('17')];dwsj_viewnum=dwsj_variable[_0x153c('c')][_0x153c('d')][i][_0x153c('18')];dwsj_action=dwsj_variable[_0x153c('c')][_0x153c('d')][i][_0x153c('19')];notice=dwsj_variable[_0x153c('c')][_0x153c('1a')][0x0][_0x153c('1b')];update=dwsj_variable[_0x153c('c')][_0x153c('1a')][0x0][_0x153c('1c')];scripturl=dwsj_variable[_0x153c('c')][_0x153c('1a')][0x0][_0x153c('1d')];if(!dwsj_UA){dwsj_UA=_0x153c('1e');}$[_0x153c('1f')]=i+0x1;console[_0x153c('3')](_0x153c('20')+$[_0x153c('1f')]+_0x153c('21'));await implement();};if(update){await upscript();}if(notify){if(notice){if(subTitle){await notify[_0x153c('22')]($[_0x153c('23')],subTitle);}}}})()[_0x153c('24')](_0x211fc0=>$[_0x153c('25')](_0x211fc0))[_0x153c('26')](()=>$[_0x153c('27')]());async function implement(){let _0x123627=new Date()[_0x153c('28')]();let _0x59b7e4=new Date()[_0x153c('29')]();await rollPoint();await getAdReward(_0x153c('2a'));await getRankByType();if(new Date()[_0x153c('28')]()==dwsj_signtime&&new Date()[_0x153c('29')]()<0xa){await getAdReward(_0x153c('2b'));}await UserWallet();await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x368243=new Date()[_0x153c('5')]();let _0x274bf1=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('2d')+_0x368243+'\x7d');let _0x1a3977=Post_request(_0x153c('2e'),_0x274bf1);return new Promise((_0x299c22,_0x55f339)=>{$[_0x153c('2f')](_0x1a3977,async(_0x4d5d4b,_0x594e6a,_0x568e60)=>{try{if(_0x4d5d4b){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('31'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('31');console[_0x153c('3')](_0x4d5d4b+'\x0a');}else{let _0x3f2169=JSON[_0x153c('32')](_0x568e60);if(_0x3f2169[_0x153c('9')]==0x1){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('33')+_0x3f2169[_0x153c('34')][_0x153c('35')][_0x153c('36')]+_0x153c('37'));await addGoodsBuff();await $[_0x153c('38')](Math[_0x153c('39')](Math[_0x153c('3a')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x3f2169[_0x153c('9')]==0x515){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('3b')+_0x3f2169[_0x153c('3c')]);await getAdReward(_0x153c('3d'));await getBuildingEarn();}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('3b')+_0x3f2169[_0x153c('3c')]);}}}catch(_0x4a4f92){console[_0x153c('3')](_0x4a4f92,_0x594e6a);}finally{_0x299c22();}});});}function addNewBuilding(){let _0x127cfc=new Date()[_0x153c('5')]();let _0x499a1a=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('3e')+_0x127cfc+'\x7d');let _0x12494c=Post_request(_0x153c('3f'),_0x499a1a);return new Promise((_0x5a21d2,_0x20a5ff)=>{$[_0x153c('2f')](_0x12494c,async(_0x225bd4,_0x5400bc,_0x2c067e)=>{try{if(_0x225bd4){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('40'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('40');}else{let _0x39a53f=JSON[_0x153c('32')](_0x2c067e);if(_0x39a53f[_0x153c('9')]==0x1){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('41')+_0x39a53f[_0x153c('34')][_0x153c('42')][_0x153c('43')][_0x153c('44')]+_0x153c('37'));}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('45')+_0x39a53f[_0x153c('3c')]);}}}catch(_0x2593e1){console[_0x153c('3')](_0x2593e1,_0x5400bc);}finally{_0x5a21d2();}});});}function getBuildingEarn(){let _0xc60eb7=new Date()[_0x153c('5')]();let _0x32c295=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('3e')+_0xc60eb7+'\x7d');let _0x4b9c4b=Post_request(_0x153c('46'),_0x32c295);return new Promise((_0x2545bf,_0x43c400)=>{$[_0x153c('2f')](_0x4b9c4b,async(_0x2d2a37,_0x2b4e7a,_0x337191)=>{try{if(_0x2d2a37){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('47'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('47');}else{let _0x4a9066=JSON[_0x153c('32')](_0x337191);if(_0x4a9066[_0x153c('9')]==0x1){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('48')+_0x4a9066[_0x153c('34')][_0x153c('42')][_0x153c('43')][_0x153c('44')]+_0x153c('37'));}else if(_0x4a9066[_0x153c('9')]==0x4bf||_0x4a9066[_0x153c('3c')]==_0x153c('49')){if(dwsj_build){await addNewBuilding();}}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('4a')+_0x4a9066[_0x153c('3c')]);}}}catch(_0x45e68c){console[_0x153c('3')](_0x45e68c,_0x2b4e7a);}finally{_0x2545bf();}});});}function buildingLevelUp(){let _0x1badb1=new Date()[_0x153c('5')]();let _0x536da2=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('3e')+_0x1badb1+'\x7d');let _0x50b1d5=Post_request(_0x153c('4b'),_0x536da2);return new Promise((_0xfb575a,_0x99dc6e)=>{$[_0x153c('2f')](_0x50b1d5,async(_0x343b91,_0x162246,_0x3652ff)=>{try{if(_0x343b91){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('4c'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('4c');}else{let _0x565736=JSON[_0x153c('32')](_0x3652ff);if(_0x565736[_0x153c('9')]==0x1){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('4d')+_0x565736[_0x153c('34')][_0x153c('42')][_0x153c('43')][_0x153c('44')]+_0x153c('37'));}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('4e')+_0x565736[_0x153c('3c')]);}}}catch(_0x1ac5df){console[_0x153c('3')](_0x1ac5df,_0x162246);}finally{_0xfb575a();}});});}function addGoodsBuff(){let _0x54b1e1=new Date()[_0x153c('5')]();let _0x51644c=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('4f')+_0x54b1e1+'\x7d');let _0x3f2ac9=Post_request(_0x153c('50'),_0x51644c);return new Promise((_0x12bfda,_0x31f2a7)=>{$[_0x153c('2f')](_0x3f2ac9,async(_0x4d746a,_0x2c597e,_0x1f19e)=>{try{if(_0x4d746a){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('51'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('51');}else{}}catch(_0x37e65c){console[_0x153c('3')](_0x37e65c,_0x2c597e);}finally{_0x12bfda();}});});}function getRankByType(){let _0x8c884e=[_0x153c('44'),_0x153c('52'),_0x153c('52')];let _0x2ce383='';let _0x266679=_0x8c884e[Math[_0x153c('39')](Math[_0x153c('3a')]()*_0x8c884e[_0x153c('e')])];if(_0x266679==_0x153c('44')){_0x2ce383='\u91d1\u5e01';}else if(_0x266679==_0x153c('52')){_0x2ce383='\u58f0\u671b';}if(_0x266679==_0x153c('52')){_0x2ce383='\u6536\u76ca';}let _0x18ee72=new Date()[_0x153c('5')]();let _0x54f32a=RSA_encryption(_0x153c('53')+_0x266679+_0x153c('54')+user_ID+_0x153c('55')+_0x18ee72+'\x7d');let _0x2fc56a=Post_request(_0x153c('56'),_0x54f32a);return new Promise((_0x216ec0,_0x1eeeb6)=>{$[_0x153c('2f')](_0x2fc56a,async(_0x5344a0,_0xe992a1,_0x4123cf)=>{try{if(_0x5344a0){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+'\x20'+_0x2ce383+_0x153c('57'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+'\x20'+_0x2ce383+_0x153c('57');console[_0x153c('3')](_0x5344a0+'\x0a');}else{let _0x3ea578=JSON[_0x153c('32')](_0x4123cf);if(_0x3ea578[_0x153c('9')]==0x1){let _0x5733e3=['\x30','\x31','\x32','\x33','\x34'];let _0x1f8b5f=_0x5733e3[Math[_0x153c('39')](Math[_0x153c('3a')]()*_0x8c884e[_0x153c('e')])];let _0x299c75=_0x3ea578[_0x153c('34')][_0x153c('58')][_0x1f8b5f][_0x153c('59')];await getAdReward(_0x153c('5a'),_0x299c75);}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+'\x20'+_0x2ce383+_0x153c('5b')+_0x3ea578[_0x153c('3c')]);}}}catch(_0x5d4526){console[_0x153c('3')](_0x5d4526,_0xe992a1);}finally{_0x216ec0();}});});}function getMyInfo(){let _0x4a4f10=new Date()[_0x153c('5')]();let _0x32f522=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('3e')+_0x4a4f10+'\x7d');let _0x257137=Post_request(_0x153c('5c'),_0x32f522);return new Promise((_0x5b9904,_0x4145b6)=>{$[_0x153c('2f')](_0x257137,async(_0x1ac0a5,_0x5d696f,_0x36c389)=>{try{if(_0x1ac0a5){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('5d'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('5d');}else{let _0x34b670=JSON[_0x153c('32')](_0x36c389);if(_0x34b670[_0x153c('9')]==0x1){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('5e')+_0x34b670[_0x153c('34')][_0x153c('5f')][_0x153c('59')]+_0x153c('60')+nick+_0x153c('61')+userCityLevel+_0x153c('62')+_0x34b670[_0x153c('34')][_0x153c('63')][_0x153c('64')]+_0x153c('65')+_0x34b670[_0x153c('34')][_0x153c('66')][_0x153c('67')]+_0x153c('68')+_0x34b670[_0x153c('34')][_0x153c('66')][_0x153c('52')]+_0x153c('69')+_0x34b670[_0x153c('34')][_0x153c('66')][_0x153c('6a')]+_0x153c('6b')+_0x34b670[_0x153c('34')][_0x153c('6c')][_0x153c('6d')]+order+game+red+platform+AD_profit+No_name+_0x153c('6e')+_0x34b670[_0x153c('34')][_0x153c('5f')][_0x153c('6f')]+_0x153c('70')+_0x34b670[_0x153c('34')][_0x153c('66')][_0x153c('44')]+_0x153c('71')+_0x34b670[_0x153c('34')][_0x153c('66')][_0x153c('72')]);if($[_0x153c('1f')]==0x1){main_user_account=_0x34b670[_0x153c('34')][_0x153c('66')][_0x153c('72')];}else{if(dwsj_transfer){if(_0x34b670[_0x153c('34')][_0x153c('66')][_0x153c('44')]>=0x325aa0){await transferMoney(0x2dc6c0);}}}}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('73')+_0x34b670[_0x153c('3c')]);}}}catch(_0x55d0f4){console[_0x153c('3')](_0x55d0f4,_0x5d696f);}finally{_0x5b9904();}});});}function getShopInfo(){let _0x16c4d3=new Date()[_0x153c('5')]();let _0x526f58=RSA_encryption(_0x153c('74')+user_ID+_0x153c('55')+_0x16c4d3+'\x7d');let _0x9c5f7f=Post_request(_0x153c('75'),_0x526f58);return new Promise((_0x226df4,_0x4463cf)=>{$[_0x153c('2f')](_0x9c5f7f,async(_0x41d526,_0x2691fe,_0x11a99b)=>{try{nick='';userCityLevel='';if(_0x41d526){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('76'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('76');}else{let _0x483d8d=JSON[_0x153c('32')](_0x11a99b);if(_0x483d8d[_0x153c('9')]==0x1){nick=_0x483d8d[_0x153c('34')][_0x153c('77')][_0x153c('78')];userCityLevel=_0x483d8d[_0x153c('34')][_0x153c('77')][_0x153c('79')];}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('7a')+_0x483d8d[_0x153c('3c')]);}}}catch(_0x2666d8){console[_0x153c('3')](_0x2666d8,_0x2691fe);}finally{_0x226df4();}});});}function transferMoney(_0x3b694b){let _0x595e2a=new Date()[_0x153c('5')]();let _0x56a00e=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('7b')+main_user_account+_0x153c('7c')+_0x3b694b+_0x153c('3e')+_0x595e2a+'\x7d');let _0x3d0230=Post_request(_0x153c('7d'),_0x56a00e);return new Promise((_0x5ef28b,_0x40afb9)=>{$[_0x153c('2f')](_0x3d0230,async(_0x4690c8,_0x4e235b,_0xca9d80)=>{try{if(_0x4690c8){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('7e'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('7e');}else{let _0x4a24bd=JSON[_0x153c('32')](_0xca9d80);if(_0x4a24bd[_0x153c('9')]==0x1){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('7f')+_0x4a24bd[_0x153c('3c')]);}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('7f')+_0x4a24bd[_0x153c('3c')]);}}}catch(_0x516f81){console[_0x153c('3')](_0x516f81,_0x4e235b);}finally{_0x5ef28b();}});});}function getUserWallet(){let _0x5ccb8c=new Date()[_0x153c('5')]();let _0x5f39c1=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('80'));let _0x3588f8=Post_request(_0x153c('81'),_0x5f39c1);return new Promise((_0x45e3d9,_0x1853f1)=>{$[_0x153c('2f')](_0x3588f8,async(_0x157cb1,_0x1bba87,_0x3f0f7f)=>{try{if(_0x157cb1){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('82'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('82');}else{let _0xe1f9c7=JSON[_0x153c('32')](_0x3f0f7f);if(_0xe1f9c7[_0x153c('9')]==0x1){for(let _0x468254 of _0xe1f9c7[_0x153c('34')]){if(_0x468254[_0x153c('83')]==0x0){platform=_0x153c('84')+_0x468254[_0x153c('23')]+'\uff1a'+_0x468254[_0x153c('85')];}if(_0x468254[_0x153c('83')]==0x1){order=_0x153c('84')+_0x468254[_0x153c('23')]+'\uff1a'+_0x468254[_0x153c('85')];}if(_0x468254[_0x153c('83')]==0x2){game=_0x153c('84')+_0x468254[_0x153c('23')]+'\uff1a'+_0x468254[_0x153c('85')];}if(_0x468254[_0x153c('83')]==0x3){red=_0x153c('84')+_0x468254[_0x153c('23')]+'\uff1a'+_0x468254[_0x153c('85')];}}}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('86')+_0xe1f9c7[_0x153c('3c')]);}}}catch(_0x11c5bc){console[_0x153c('3')](_0x11c5bc,_0x1bba87);}finally{_0x45e3d9();}});});}function RevenueDetail(){let _0xfe5288=new Date()[_0x153c('5')]();let _0x5b0bb9=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('80'));let _0x159028=Post_request(_0x153c('87'),_0x5b0bb9);return new Promise((_0x454f1b,_0x2ecde1)=>{$[_0x153c('2f')](_0x159028,async(_0x33e99e,_0x3f754e,_0x2c2715)=>{try{if(_0x33e99e){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('88'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('88');}else{let _0x41effd=JSON[_0x153c('32')](_0x2c2715);if(_0x41effd[_0x153c('9')]==0x1){AD_profit=_0x153c('89')+_0x41effd[_0x153c('34')][0x0][_0x153c('8a')]/0x3e8+_0x153c('8b');No_name=_0x153c('8c')+_0x41effd[_0x153c('34')][0x0][_0x153c('8d')]+_0x153c('8e')+_0x41effd[_0x153c('34')][0x0][_0x153c('8f')]+_0x153c('90');}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('91')+_0x41effd[_0x153c('3c')]);}}}catch(_0x46a394){console[_0x153c('3')](_0x46a394,_0x3f754e);}finally{_0x454f1b();}});});}function UserWallet(){let _0x8fb26f=new Date()[_0x153c('5')]();let _0x579e0e=RSA_encryption(_0x153c('92')+user_ID+_0x153c('93'));let _0x23a94a=Post_request(_0x153c('94'),_0x579e0e);return new Promise((_0x3bcbd6,_0x46a0d0)=>{$[_0x153c('2f')](_0x23a94a,async(_0x5ed9ed,_0x4bb999,_0x3c58fe)=>{try{if(_0x5ed9ed){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('95'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('95');}else{let _0x3501a2=JSON[_0x153c('32')](_0x3c58fe);if(_0x3501a2[_0x153c('9')]==0x1){if(_0x3501a2[_0x153c('34')][_0x153c('96')]>=0x14){await walletWithdraw();}}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('97')+_0x3501a2[_0x153c('3c')]);}}}catch(_0x279cb2){console[_0x153c('3')](_0x279cb2,_0x4bb999);}finally{_0x3bcbd6();}});});}function walletWithdraw(){let _0x4d3b79=new Date()[_0x153c('5')]();let _0x5486f0=RSA_encryption(_0x153c('98')+user_ID+_0x153c('93'));let _0x3e1d1d=Post_request(_0x153c('99'),_0x5486f0);return new Promise((_0x3c0235,_0x259cc6)=>{$[_0x153c('2f')](_0x3e1d1d,async(_0x4e8a00,_0x4e72e7,_0x299e62)=>{try{if(_0x4e8a00){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('9a'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('9a');}else{let _0x58078d=JSON[_0x153c('32')](_0x299e62);if(_0x58078d[_0x153c('9')]==0x1){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('9b'));}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('9c')+_0x58078d[_0x153c('3c')]);}}}catch(_0x2cd9b4){console[_0x153c('3')](_0x2cd9b4,_0x4e72e7);}finally{_0x3c0235();}});});}function getAdReward(_0x555c71,_0x314116){let _0x31482b=new Date()[_0x153c('5')]();let _0x424ce2='';let _0x7c6064='';if(_0x555c71==_0x153c('2b')){_0x424ce2=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('9d')+_0x31482b+'\x7d');_0x7c6064='\u7b7e\u5230';}else if(_0x555c71==_0x153c('2a')){_0x424ce2=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('9e')+_0x31482b+'\x7d');_0x7c6064='\u52a0\u901f';}else if(_0x555c71==_0x153c('3d')){_0x424ce2=RSA_encryption(_0x153c('2c')+user_ID+_0x153c('9f')+_0x31482b+'\x7d');_0x7c6064=_0x153c('a0');}else if(_0x555c71==_0x153c('5a')){_0x424ce2=RSA_encryption(_0x153c('a1')+_0x314116+_0x153c('a2')+user_ID+_0x153c('55')+_0x31482b+'\x7d');_0x7c6064='\u819c\u62dc';}let _0x3dd422=Post_request(_0x153c('a3'),_0x424ce2);return new Promise((_0x458da0,_0x4e0d9c)=>{$[_0x153c('2f')](_0x3dd422,async(_0x50f7c0,_0x4abd73,_0x33f23f)=>{try{if(_0x50f7c0){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('a4')+_0x7c6064+_0x153c('a5'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('a4')+_0x7c6064+_0x153c('a5');console[_0x153c('3')](_0x50f7c0+'\x0a');}else{let _0x547f01=JSON[_0x153c('32')](_0x33f23f);if(_0x547f01[_0x153c('9')]==0x1){if(_0x555c71==_0x153c('2b')){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+'\x20'+_0x7c6064+_0x153c('a6')+_0x547f01[_0x153c('34')][_0x153c('42')][_0x153c('43')][_0x153c('a7')]+_0x153c('a8')+_0x547f01[_0x153c('34')][_0x153c('42')][_0x153c('43')][_0x153c('6f')]);}else if(_0x555c71==_0x153c('3d')){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+'\x20'+_0x7c6064+_0x153c('a9'));}else if(_0x555c71==_0x153c('2a')){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+'\x20'+_0x7c6064+_0x153c('aa'));}else if(_0x555c71==_0x153c('5a')){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+'\x20'+_0x7c6064+_0x153c('ab'));}}else if(_0x547f01[_0x153c('9')]==0x76f&&_0x555c71==_0x153c('2a')){await reward_video(_0x153c('2a'));}else if(_0x547f01[_0x153c('9')]==0x4b8){if(_0x555c71==_0x153c('2a')){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('a4')+_0x7c6064+_0x153c('ac')+_0x547f01[_0x153c('3c')]);if(modify){await get_variable(_0x153c('2a'),_0x153c('ad'));}}if(_0x555c71==_0x153c('3d')){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('a4')+_0x7c6064+_0x153c('ac')+_0x547f01[_0x153c('3c')]);if(modify){await get_variable(_0x153c('3d'),_0x153c('ad'));}}}else if(_0x547f01[_0x153c('9')]==0x57f&&_0x555c71==_0x153c('5a')){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('a4')+_0x7c6064+_0x153c('ac')+_0x547f01[_0x153c('3c')]);if(modify){await get_variable(_0x153c('5a'),_0x153c('ad'));}}else if(_0x547f01[_0x153c('9')]==0x76f&&_0x555c71==_0x153c('2a')){await reward_video(_0x153c('2a'));}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('a4')+_0x7c6064+_0x153c('ac')+_0x547f01[_0x153c('3c')]);}}}catch(_0x336a63){console[_0x153c('3')](_0x336a63,_0x4abd73);}finally{_0x458da0();}});});}function reward_video(_0x150db2){if(!video_data){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('ae'));}else{let _0x1f79c5=video_data[_0x153c('af')](/[\r\n]/g,'');let _0x2a8938={'\x75\x72\x6c':_0x153c('b0'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x153c('b1'),'Content-Type':_0x153c('b2'),'Content-Length':_0x1f79c5[_0x153c('e')],'Accept-Encoding':_0x153c('b3'),'User-Agent':_0x153c('b4')},'\x62\x6f\x64\x79':_0x1f79c5};return new Promise((_0x2d10e6,_0x590af7)=>{$[_0x153c('2f')](_0x2a8938,async(_0x530b75,_0x58faef,_0x259433)=>{try{if(_0x530b75){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('b5'));subTitle+=_0x153c('30')+$[_0x153c('1f')]+_0x153c('b5');console[_0x153c('3')](_0x530b75+'\x0a');}else{if(_0x259433[_0x153c('b6')](_0x153c('b7'))>-0x1){let _0xb87527=JSON[_0x153c('32')](_0x259433);if(_0xb87527[_0x153c('b7')]==0x3){await getAdReward(_0x150db2);}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('b8'));}}else{let _0x354ea6=JSON[_0x153c('32')](_0x259433);if(_0x354ea6[_0x153c('9')]==0xea67){await getAdReward(_0x150db2);}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('b8'));}}}}catch(_0x374908){console[_0x153c('3')](_0x374908,_0x58faef);}finally{_0x2d10e6();}});});}}function upscript(){let _0x1fd831={'\x75\x72\x6c':scripturl,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x153c('b9'),'User-Agent':_0x153c('ba')}};return new Promise((_0x533c51,_0x66b3c2)=>{$[_0x153c('bb')](_0x1fd831,async(_0x5410db,_0x40cf32,_0x30b0ab)=>{try{if(_0x5410db){console[_0x153c('3')](_0x153c('bc'));subTitle+=_0x153c('bc');}else{if(_0x30b0ab[_0x153c('b6')](_0x153c('bd'))>-0x1){if($[_0x153c('23')][_0x153c('be')](/版本:(\S*)/)[0x1]!=_0x30b0ab[_0x153c('be')](/版本:(\S*)'/)[0x1]){let _0x31c0fe=__dirname+(_0x153c('bf')+$[_0x153c('23')][_0x153c('be')](/版本:(\S*)/)[0x1][_0x153c('af')](new RegExp('\x2f','\x67\x69'),'\x5f')+_0x153c('c0'));fs[_0x153c('c1')](_0x31c0fe,fs[_0x153c('c2')](__filename));fs[_0x153c('c3')](__filename,_0x30b0ab,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x38cd0d){if(_0x38cd0d){console[_0x153c('3')](_0x38cd0d);}});}}}}catch(_0x446ab5){console[_0x153c('3')](_0x446ab5,_0x40cf32);}finally{_0x533c51();}});});}function Post_request(_0x2c0f3b,_0x573da5,_0x4466c3){let _0x46940d=_0x153c('c4');return{'\x75\x72\x6c':''+_0x46940d+_0x2c0f3b,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x153c('c5'),'Connection':_0x153c('c6'),'Content-Length':_0x573da5[_0x153c('e')],'Pragma':_0x153c('c7'),'Cache-Control':_0x153c('c7'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x153c('c8'),'Accept':_0x153c('c9'),'Origin':_0x153c('ca'),'X-Requested-With':_0x153c('cb'),'Sec-Fetch-Site':_0x153c('cc'),'Sec-Fetch-Mode':_0x153c('cd'),'Sec-Fetch-Dest':_0x153c('ce'),'Referer':_0x153c('cf'),'Accept-Encoding':_0x153c('d0'),'Accept-Language':_0x153c('d1')},'\x62\x6f\x64\x79':_0x573da5};};function Get_request(_0x3239b7){let _0x321f41=_0x153c('c4');return{'\x75\x72\x6c':''+_0x321f41+_0x3239b7,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x153c('c5'),'Connection':_0x153c('c6'),'Content-Length':0x0,'Pragma':_0x153c('c7'),'Cache-Control':_0x153c('c7'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x153c('c8'),'Accept':_0x153c('c9'),'Origin':_0x153c('ca'),'X-Requested-With':_0x153c('cb'),'Sec-Fetch-Site':_0x153c('cc'),'Sec-Fetch-Mode':_0x153c('cd'),'Sec-Fetch-Dest':_0x153c('ce'),'Referer':_0x153c('cf'),'Accept-Encoding':_0x153c('d0'),'Accept-Language':_0x153c('d1')}};};function RSA_encryption(_0x2ae8a5){var _0x20abc0=new RSA_js();_0x20abc0[_0x153c('d2')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x153c('d3')});_0x20abc0[_0x153c('d4')](_0x153c('d5'),_0x153c('d6'));var _0x3f6a10=_0x20abc0[_0x153c('d7')](_0x2ae8a5,_0x153c('d8'));return _0x3f6a10;}function get_variable(_0x27f604,_0x201891){let _0x631c3a=$[_0x153c('0')]()?require(_0x153c('2')):'';if(!_0x631c3a){console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('d9'));return;}else{_0x631c3a=JSON[_0x153c('da')](_0x631c3a);}let _0x1340f0=JSON[_0x153c('da')](current);let _0x423964=_0x631c3a[_0x153c('db')](0x0,_0x631c3a[_0x153c('b6')](_0x1340f0));let _0x2401db=_0x631c3a[_0x153c('e')]-_0x423964[_0x153c('e')]-_0x1340f0[_0x153c('e')];let _0x4c21a7=_0x631c3a[_0x153c('db')](_0x631c3a[_0x153c('e')]-_0x2401db,_0x631c3a[_0x153c('e')]);let _0x55b089='';if(_0x27f604==_0x153c('2a')&&_0x201891==_0x153c('dc')){_0x55b089=JSON[_0x153c('32')](JSON[_0x153c('da')](_0x1340f0[_0x153c('af')](new RegExp(_0x153c('dd'),'\x67\x69'),_0x153c('de'))));}else if(_0x27f604==_0x153c('5a')&&_0x201891==_0x153c('dc')){_0x55b089=JSON[_0x153c('32')](JSON[_0x153c('da')](_0x1340f0[_0x153c('af')](new RegExp(_0x153c('df'),'\x67\x69'),_0x153c('e0'))));}else if(_0x27f604==_0x153c('3d')&&_0x201891==_0x153c('dc')){_0x55b089=JSON[_0x153c('32')](JSON[_0x153c('da')](_0x1340f0[_0x153c('af')](new RegExp(_0x153c('e1'),'\x67\x69'),_0x153c('e2'))));}else if(_0x27f604==_0x153c('2a')&&_0x201891==_0x153c('ad')){_0x55b089=JSON[_0x153c('32')](JSON[_0x153c('da')](_0x1340f0[_0x153c('af')](new RegExp(_0x153c('e3'),'\x67\x69'),_0x153c('e4'))));}else if(_0x27f604==_0x153c('5a')&&_0x201891==_0x153c('ad')){_0x55b089=JSON[_0x153c('32')](JSON[_0x153c('da')](_0x1340f0[_0x153c('af')](new RegExp(_0x153c('e0'),'\x67\x69'),_0x153c('df'))));}else if(_0x27f604==_0x153c('3d')&&_0x201891==_0x153c('ad')){_0x55b089=JSON[_0x153c('32')](JSON[_0x153c('da')](_0x1340f0[_0x153c('af')](new RegExp(_0x153c('e2'),'\x67\x69'),_0x153c('e1'))));}fs[_0x153c('c3')](_0x153c('2'),_0x153c('e5')+_0x423964+_0x55b089+_0x4c21a7,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x1898fa){if(_0x1898fa){console[_0x153c('3')](_0x1898fa);}else{console[_0x153c('3')](_0x153c('30')+$[_0x153c('1f')]+_0x153c('e6'));}});};_0xodI='jsjiami.com.v6';



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