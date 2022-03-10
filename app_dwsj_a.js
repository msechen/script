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

var _0xodp='jsjiami.com.v6',_0xodp_=['_0xodp'],_0x49aa=[_0xodp,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x75\x72\x6c','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x74\x6f\x75','\x73\x74\x61\x72\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u6b64\u65f6\u95f4\u6bb5\u884c\u52a8\u6b21\u6570\u548c\u589e\u52a0\u6b21\u6570\u5df2\u7528\u5c3d','\x76\x69\x65\x77','\x20\u52a0\u901f\u3011\x3a\x20\u4eca\u65e5\u52a0\u901f\u6b21\u6570\u5df2\u7528\u5c3d','\x42\x75\x73\x69\x6e\x65\x73\x73','\x20\u819c\u62dc\u3011\x3a\x20\u4eca\u65e5\u819c\u62dc\u6b21\u6570\u5df2\u7528\u5c3d','\x73\x69\x67\x6e','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77\x50\x61\x67\x65','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x61\x62\x6c\x65\x4d\x6f\x6e\x65\x79','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x22\x32\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x77\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u6210\u529f','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u819c\u62dc\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x65\x6e\x64','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x30\x5f\x31\x35\x5f\x35\x20\x28\x45\x72\x67\u00e4\x6e\x7a\x65\x6e\x64\x65\x73\x20\x55\x70\x64\x61\x74\x65\x29\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x32\x2e\x31\x2e\x31\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x34\x45\x33\x30\x34\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u83b7\u53d6\u811a\u672c\u5730\u5740\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7535\u73a9\u4e16\u754c','\x6d\x61\x74\x63\x68','\x2f\x64\x77\x73\x6a\x5f\u7248\u672c\x3a','\x2e\x6a\x73','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30\x2c','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31\x2c','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u66f4\u65b0\u6570\u636e\u6210\u529f','\x43\x6a\x73\x6a\x69\x61\x6d\x64\x69\x2e\x63\x51\x6f\x6d\x2e\x4e\x62\x76\x36\x42\x45\x68\x47\x4c\x52\x64\x42\x72\x4a\x3d\x3d'];function _0x54fe(_0x4083d4,_0x31093f){_0x4083d4=~~'0x'['concat'](_0x4083d4['slice'](0x0));var _0x37a613=_0x49aa[_0x4083d4];return _0x37a613;};(function(_0x3118e1,_0x3d8bb8){var _0x1fe076=0x0;for(_0x3d8bb8=_0x3118e1['shift'](_0x1fe076>>0x2);_0x3d8bb8&&_0x3d8bb8!==(_0x3118e1['pop'](_0x1fe076>>0x3)+'')['replace'](/[CdQNbBEhGLRdBrJ=]/g,'');_0x1fe076++){_0x1fe076=_0x1fe076^0xd66bd;}}(_0x49aa,_0x54fe));const RSA_js=$[_0x54fe('0')]()?require(_0x54fe('1')):'';const fs=$[_0x54fe('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x54fe('0')]()?require(_0x54fe('2')):'';!(async()=>{console[_0x54fe('3')](_0x54fe('4')+new Date(new Date()[_0x54fe('5')]()+new Date()[_0x54fe('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x54fe('7')]()+_0x54fe('8'));if(dwsj_variable[_0x54fe('9')]!==0xc8){console[_0x54fe('3')](_0x54fe('a'));return;}console[_0x54fe('3')](_0x54fe('b')+dwsj_variable[_0x54fe('c')][_0x54fe('d')][_0x54fe('e')]+_0x54fe('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x54fe('c')][_0x54fe('d')][_0x54fe('e')];i++){current=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i];video_data=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i][_0x54fe('10')];user_ID=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i][_0x54fe('11')];main_user_ID=dwsj_variable[_0x54fe('c')][_0x54fe('d')][0x0][_0x54fe('11')];dwsj_token=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i][_0x54fe('12')];dwsj_UA=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i][_0x54fe('13')];dwsj_signtime=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i][_0x54fe('14')];dwsj_UPbuild=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i][_0x54fe('15')];dwsj_transfer=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i][_0x54fe('16')];dwsj_Business=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i][_0x54fe('17')];dwsj_viewnum=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i][_0x54fe('18')];dwsj_action=dwsj_variable[_0x54fe('c')][_0x54fe('d')][i][_0x54fe('19')];notice=dwsj_variable[_0x54fe('c')][_0x54fe('1a')][0x0][_0x54fe('1b')];update=dwsj_variable[_0x54fe('c')][_0x54fe('1a')][0x0][_0x54fe('1c')];scripturl=dwsj_variable[_0x54fe('c')][_0x54fe('1a')][0x0][_0x54fe('1d')];if(!dwsj_UA){dwsj_UA=_0x54fe('1e');}$[_0x54fe('1f')]=i+0x1;console[_0x54fe('3')](_0x54fe('20')+$[_0x54fe('1f')]+_0x54fe('21'));await implement();};if(update){await upscript();}if(notify){if(notice){if(subTitle){await notify[_0x54fe('22')]($[_0x54fe('23')],subTitle);}}}})()[_0x54fe('24')](_0x191f23=>$[_0x54fe('25')](_0x191f23))[_0x54fe('26')](()=>$[_0x54fe('27')]());async function implement(){let _0x331695=new Date()[_0x54fe('28')]();let _0x3b2d9d=new Date()[_0x54fe('29')]();if(dwsj_action==0x1){if(_0x331695==0x0&&_0x3b2d9d<0x5||_0x331695==0xc&&_0x3b2d9d<0x5||_0x331695==0x14&&_0x3b2d9d<0x5){await get_variable(_0x54fe('2a'),_0x54fe('2b'));await rollPoint();}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('2d'));await getBuildingEarn();}}else{await rollPoint();}if(dwsj_viewnum==0x1){if(_0x331695==0x0&&_0x3b2d9d<0x5||_0x331695==0xc&&_0x3b2d9d<0x5||_0x331695==0x14&&_0x3b2d9d<0x5){await get_variable(_0x54fe('2e'),_0x54fe('2b'));await getAdReward(_0x54fe('2e'));}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('2f'));}}else{await getAdReward(_0x54fe('2e'));}if(dwsj_Business==0x1){if(_0x331695==0x0&&_0x3b2d9d<0x5||_0x331695==0xc&&_0x3b2d9d<0x5||_0x331695==0x14&&_0x3b2d9d<0x5){await get_variable(_0x54fe('30'),_0x54fe('2b'));await getRankByType();}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('31'));}}else{await getRankByType();}if(new Date()[_0x54fe('28')]()==dwsj_signtime&&new Date()[_0x54fe('29')]()<0xf){await getAdReward(_0x54fe('32'));}await UserWallet();await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x17dcb2=new Date()[_0x54fe('5')]();let _0x576c4b=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('34')+_0x17dcb2+'\x7d');let _0x71661e=Post_request(_0x54fe('35'),_0x576c4b);return new Promise((_0x209d15,_0x15bf92)=>{$[_0x54fe('36')](_0x71661e,async(_0x5e9d73,_0x29e1f5,_0x6d7418)=>{try{if(_0x5e9d73){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('37'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('37');console[_0x54fe('3')](_0x5e9d73+'\x0a');}else{let _0x1e193c=JSON[_0x54fe('38')](_0x6d7418);if(_0x1e193c[_0x54fe('9')]==0x1){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('39')+_0x1e193c[_0x54fe('3a')][_0x54fe('3b')][_0x54fe('3c')]+_0x54fe('3d'));await addGoodsBuff();await $[_0x54fe('3e')](Math[_0x54fe('3f')](Math[_0x54fe('40')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x1e193c[_0x54fe('9')]==0x515){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('41')+_0x1e193c[_0x54fe('42')]);await getAdReward(_0x54fe('2a'));await getBuildingEarn();}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('41')+_0x1e193c[_0x54fe('42')]);}}}catch(_0xd69228){console[_0x54fe('3')](_0xd69228,_0x29e1f5);}finally{_0x209d15();}});});}function addNewBuilding(){let _0x65c03b=new Date()[_0x54fe('5')]();let _0x5a280e=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('43')+_0x65c03b+'\x7d');let _0x163b27=Post_request(_0x54fe('44'),_0x5a280e);return new Promise((_0x17bfe2,_0x1bf25b)=>{$[_0x54fe('36')](_0x163b27,async(_0x3074b2,_0x444b76,_0x2bed5b)=>{try{if(_0x3074b2){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('45'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('45');}else{let _0x5476e8=JSON[_0x54fe('38')](_0x2bed5b);if(_0x5476e8[_0x54fe('9')]==0x1){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('46')+_0x5476e8[_0x54fe('3a')][_0x54fe('47')][_0x54fe('48')][_0x54fe('49')]+_0x54fe('3d'));}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('4a')+_0x5476e8[_0x54fe('42')]);}}}catch(_0xb31984){console[_0x54fe('3')](_0xb31984,_0x444b76);}finally{_0x17bfe2();}});});}function getBuildingEarn(){let _0x570fcd=new Date()[_0x54fe('5')]();let _0x3db067=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('43')+_0x570fcd+'\x7d');let _0x4a9b53=Post_request(_0x54fe('4b'),_0x3db067);return new Promise((_0x54abb5,_0xd1bea4)=>{$[_0x54fe('36')](_0x4a9b53,async(_0x45d732,_0x166e05,_0x1b8d40)=>{try{if(_0x45d732){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('4c'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('4c');}else{let _0x42ec3e=JSON[_0x54fe('38')](_0x1b8d40);if(_0x42ec3e[_0x54fe('9')]==0x1){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('4d')+_0x42ec3e[_0x54fe('3a')][_0x54fe('47')][_0x54fe('48')][_0x54fe('49')]+_0x54fe('3d'));}else if(_0x42ec3e[_0x54fe('9')]==0x4bf||_0x42ec3e[_0x54fe('42')]==_0x54fe('4e')){if(dwsj_build){await addNewBuilding();}}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('4f')+_0x42ec3e[_0x54fe('42')]);}}}catch(_0x2c3cef){console[_0x54fe('3')](_0x2c3cef,_0x166e05);}finally{_0x54abb5();}});});}function buildingLevelUp(){let _0x459649=new Date()[_0x54fe('5')]();let _0x3a4cc5=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('43')+_0x459649+'\x7d');let _0x1d4b3b=Post_request(_0x54fe('50'),_0x3a4cc5);return new Promise((_0x2c5f96,_0x157ac0)=>{$[_0x54fe('36')](_0x1d4b3b,async(_0x331ab0,_0x269861,_0x4da817)=>{try{if(_0x331ab0){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('51'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('51');}else{let _0x1bd2b9=JSON[_0x54fe('38')](_0x4da817);if(_0x1bd2b9[_0x54fe('9')]==0x1){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('52')+_0x1bd2b9[_0x54fe('3a')][_0x54fe('47')][_0x54fe('48')][_0x54fe('49')]+_0x54fe('3d'));}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('53')+_0x1bd2b9[_0x54fe('42')]);}}}catch(_0x20a891){console[_0x54fe('3')](_0x20a891,_0x269861);}finally{_0x2c5f96();}});});}function addGoodsBuff(){let _0x1289a7=new Date()[_0x54fe('5')]();let _0x5c565d=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('54')+_0x1289a7+'\x7d');let _0x272bad=Post_request(_0x54fe('55'),_0x5c565d);return new Promise((_0x196d34,_0x15c514)=>{$[_0x54fe('36')](_0x272bad,async(_0x4f5656,_0x4e4ede,_0xdba74)=>{try{if(_0x4f5656){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('56'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('56');}else{}}catch(_0x583be6){console[_0x54fe('3')](_0x583be6,_0x4e4ede);}finally{_0x196d34();}});});}function getRankByType(){let _0x32ba6d=[_0x54fe('49'),_0x54fe('57'),_0x54fe('57')];let _0x5f1336='';let _0x1043ab=_0x32ba6d[Math[_0x54fe('3f')](Math[_0x54fe('40')]()*_0x32ba6d[_0x54fe('e')])];if(_0x1043ab==_0x54fe('49')){_0x5f1336='\u91d1\u5e01';}else if(_0x1043ab==_0x54fe('57')){_0x5f1336='\u58f0\u671b';}if(_0x1043ab==_0x54fe('57')){_0x5f1336='\u6536\u76ca';}let _0x974509=new Date()[_0x54fe('5')]();let _0x53249f=RSA_encryption(_0x54fe('58')+_0x1043ab+_0x54fe('59')+user_ID+_0x54fe('5a')+_0x974509+'\x7d');let _0xabde69=Post_request(_0x54fe('5b'),_0x53249f);return new Promise((_0x18f8fa,_0x2b1817)=>{$[_0x54fe('36')](_0xabde69,async(_0x2a5364,_0x2771ea,_0x3f2da8)=>{try{if(_0x2a5364){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+'\x20'+_0x5f1336+_0x54fe('5c'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+'\x20'+_0x5f1336+_0x54fe('5c');console[_0x54fe('3')](_0x2a5364+'\x0a');}else{let _0x26fd0e=JSON[_0x54fe('38')](_0x3f2da8);if(_0x26fd0e[_0x54fe('9')]==0x1){let _0x3f5cfc=['\x30','\x31','\x32','\x33','\x34'];let _0x44149f=_0x3f5cfc[Math[_0x54fe('3f')](Math[_0x54fe('40')]()*_0x32ba6d[_0x54fe('e')])];let _0x2ccc41=_0x26fd0e[_0x54fe('3a')][_0x54fe('5d')][_0x44149f][_0x54fe('5e')];await getAdReward(_0x54fe('30'),_0x2ccc41);}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+'\x20'+_0x5f1336+_0x54fe('5f')+_0x26fd0e[_0x54fe('42')]);}}}catch(_0x1cd03f){console[_0x54fe('3')](_0x1cd03f,_0x2771ea);}finally{_0x18f8fa();}});});}function getMyInfo(){let _0x4a1de1=new Date()[_0x54fe('5')]();let _0x2d9cd8=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('43')+_0x4a1de1+'\x7d');let _0x1d245d=Post_request(_0x54fe('60'),_0x2d9cd8);return new Promise((_0x534e3a,_0x5df83d)=>{$[_0x54fe('36')](_0x1d245d,async(_0x18e895,_0xe32bb9,_0x5157a5)=>{try{if(_0x18e895){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('61'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('61');}else{let _0x32fc64=JSON[_0x54fe('38')](_0x5157a5);if(_0x32fc64[_0x54fe('9')]==0x1){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('62')+_0x32fc64[_0x54fe('3a')][_0x54fe('63')][_0x54fe('5e')]+_0x54fe('64')+nick+_0x54fe('65')+userCityLevel+_0x54fe('66')+_0x32fc64[_0x54fe('3a')][_0x54fe('67')][_0x54fe('68')]+_0x54fe('69')+_0x32fc64[_0x54fe('3a')][_0x54fe('6a')][_0x54fe('6b')]+_0x54fe('6c')+_0x32fc64[_0x54fe('3a')][_0x54fe('6a')][_0x54fe('57')]+_0x54fe('6d')+_0x32fc64[_0x54fe('3a')][_0x54fe('6a')][_0x54fe('6e')]+_0x54fe('6f')+_0x32fc64[_0x54fe('3a')][_0x54fe('70')][_0x54fe('71')]+order+game+red+platform+AD_profit+No_name+_0x54fe('72')+_0x32fc64[_0x54fe('3a')][_0x54fe('63')][_0x54fe('73')]+_0x54fe('74')+_0x32fc64[_0x54fe('3a')][_0x54fe('6a')][_0x54fe('49')]+_0x54fe('75')+_0x32fc64[_0x54fe('3a')][_0x54fe('6a')][_0x54fe('76')]);if($[_0x54fe('1f')]==0x1){main_user_account=_0x32fc64[_0x54fe('3a')][_0x54fe('6a')][_0x54fe('76')];}else{if(dwsj_transfer){if(_0x32fc64[_0x54fe('3a')][_0x54fe('6a')][_0x54fe('49')]>=0x325aa0){await transferMoney(0x2dc6c0);}}}}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('77')+_0x32fc64[_0x54fe('42')]);}}}catch(_0xd6d2d7){console[_0x54fe('3')](_0xd6d2d7,_0xe32bb9);}finally{_0x534e3a();}});});}function getShopInfo(){let _0x1a3cb8=new Date()[_0x54fe('5')]();let _0x5a244b=RSA_encryption(_0x54fe('78')+user_ID+_0x54fe('5a')+_0x1a3cb8+'\x7d');let _0x539410=Post_request(_0x54fe('79'),_0x5a244b);return new Promise((_0x2a941a,_0x10cd2d)=>{$[_0x54fe('36')](_0x539410,async(_0x28d910,_0x3303d4,_0x488f28)=>{try{nick='';userCityLevel='';if(_0x28d910){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('7a'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('7a');}else{let _0x4712fa=JSON[_0x54fe('38')](_0x488f28);if(_0x4712fa[_0x54fe('9')]==0x1){nick=_0x4712fa[_0x54fe('3a')][_0x54fe('7b')][_0x54fe('7c')];userCityLevel=_0x4712fa[_0x54fe('3a')][_0x54fe('7b')][_0x54fe('7d')];}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('7e')+_0x4712fa[_0x54fe('42')]);}}}catch(_0x5f5a52){console[_0x54fe('3')](_0x5f5a52,_0x3303d4);}finally{_0x2a941a();}});});}function transferMoney(_0x4f38e9){let _0x5ef393=new Date()[_0x54fe('5')]();let _0x251c1c=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('7f')+main_user_account+_0x54fe('80')+_0x4f38e9+_0x54fe('43')+_0x5ef393+'\x7d');let _0x11e72a=Post_request(_0x54fe('81'),_0x251c1c);return new Promise((_0x2aa9a4,_0x485a15)=>{$[_0x54fe('36')](_0x11e72a,async(_0xdc9072,_0x3de12e,_0x449422)=>{try{if(_0xdc9072){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('82'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('82');}else{let _0x4bda79=JSON[_0x54fe('38')](_0x449422);if(_0x4bda79[_0x54fe('9')]==0x1){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('83')+_0x4bda79[_0x54fe('42')]);}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('83')+_0x4bda79[_0x54fe('42')]);}}}catch(_0x531a7f){console[_0x54fe('3')](_0x531a7f,_0x3de12e);}finally{_0x2aa9a4();}});});}function getUserWallet(){let _0x121a09=new Date()[_0x54fe('5')]();let _0x47b9e1=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('84'));let _0xcbe143=Post_request(_0x54fe('85'),_0x47b9e1);return new Promise((_0x335676,_0x4af6d5)=>{$[_0x54fe('36')](_0xcbe143,async(_0x1b81b3,_0x569a96,_0x33ab20)=>{try{if(_0x1b81b3){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('86'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('86');}else{let _0x514dea=JSON[_0x54fe('38')](_0x33ab20);if(_0x514dea[_0x54fe('9')]==0x1){for(let _0x341c93 of _0x514dea[_0x54fe('3a')]){if(_0x341c93[_0x54fe('87')]==0x0){platform=_0x54fe('88')+_0x341c93[_0x54fe('23')]+'\uff1a'+_0x341c93[_0x54fe('89')];}if(_0x341c93[_0x54fe('87')]==0x1){order=_0x54fe('88')+_0x341c93[_0x54fe('23')]+'\uff1a'+_0x341c93[_0x54fe('89')];}if(_0x341c93[_0x54fe('87')]==0x2){game=_0x54fe('88')+_0x341c93[_0x54fe('23')]+'\uff1a'+_0x341c93[_0x54fe('89')];}if(_0x341c93[_0x54fe('87')]==0x3){red=_0x54fe('88')+_0x341c93[_0x54fe('23')]+'\uff1a'+_0x341c93[_0x54fe('89')];}}}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('8a')+_0x514dea[_0x54fe('42')]);}}}catch(_0x1ba9a2){console[_0x54fe('3')](_0x1ba9a2,_0x569a96);}finally{_0x335676();}});});}function RevenueDetail(){let _0x3a411f=new Date()[_0x54fe('5')]();let _0x40eb2f=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('84'));let _0x38ccea=Post_request(_0x54fe('8b'),_0x40eb2f);return new Promise((_0x21c693,_0x2e087f)=>{$[_0x54fe('36')](_0x38ccea,async(_0x5bec4f,_0x4adb4d,_0x63903e)=>{try{if(_0x5bec4f){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('8c'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('8c');}else{let _0x551902=JSON[_0x54fe('38')](_0x63903e);if(_0x551902[_0x54fe('9')]==0x1){AD_profit=_0x54fe('8d')+_0x551902[_0x54fe('3a')][0x0][_0x54fe('8e')]/0x3e8+_0x54fe('8f');No_name=_0x54fe('90')+_0x551902[_0x54fe('3a')][0x0][_0x54fe('91')]+_0x54fe('92')+_0x551902[_0x54fe('3a')][0x0][_0x54fe('93')]+_0x54fe('94');}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('95')+_0x551902[_0x54fe('42')]);}}}catch(_0x488729){console[_0x54fe('3')](_0x488729,_0x4adb4d);}finally{_0x21c693();}});});}function UserWallet(){let _0x13af5b=new Date()[_0x54fe('5')]();let _0x3ae14e=RSA_encryption(_0x54fe('96')+user_ID+_0x54fe('97'));let _0x5d8fb2=Post_request(_0x54fe('98'),_0x3ae14e);return new Promise((_0x4d99aa,_0x20cbaf)=>{$[_0x54fe('36')](_0x5d8fb2,async(_0x457445,_0x27c023,_0xa4b18b)=>{try{if(_0x457445){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('99'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('99');}else{let _0x21d94f=JSON[_0x54fe('38')](_0xa4b18b);if(_0x21d94f[_0x54fe('9')]==0x1){if(_0x21d94f[_0x54fe('3a')][_0x54fe('9a')]>=0x14){await walletWithdraw();}}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('9b')+_0x21d94f[_0x54fe('42')]);}}}catch(_0x53b12a){console[_0x54fe('3')](_0x53b12a,_0x27c023);}finally{_0x4d99aa();}});});}function walletWithdraw(){let _0x1d7de5=new Date()[_0x54fe('5')]();let _0x53258a=RSA_encryption(_0x54fe('9c')+user_ID+_0x54fe('97'));let _0x31282d=Post_request(_0x54fe('9d'),_0x53258a);return new Promise((_0x1a3306,_0x1ee695)=>{$[_0x54fe('36')](_0x31282d,async(_0x5474c7,_0x2a86fd,_0x4bb6bd)=>{try{if(_0x5474c7){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('9e'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('9e');}else{let _0x2bf55c=JSON[_0x54fe('38')](_0x4bb6bd);if(_0x2bf55c[_0x54fe('9')]==0x1){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('9f'));}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('a0')+_0x2bf55c[_0x54fe('42')]);}}}catch(_0x187618){console[_0x54fe('3')](_0x187618,_0x2a86fd);}finally{_0x1a3306();}});});}function getAdReward(_0xce6249,_0x1ac4f7){let _0x21ff77=new Date()[_0x54fe('5')]();let _0x20c3f6='';let _0x420fe8='';if(_0xce6249==_0x54fe('32')){_0x20c3f6=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('a1')+_0x21ff77+'\x7d');_0x420fe8='\u7b7e\u5230';}else if(_0xce6249==_0x54fe('2e')){_0x20c3f6=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('a2')+_0x21ff77+'\x7d');_0x420fe8='\u52a0\u901f';}else if(_0xce6249==_0x54fe('2a')){_0x20c3f6=RSA_encryption(_0x54fe('33')+user_ID+_0x54fe('a3')+_0x21ff77+'\x7d');_0x420fe8=_0x54fe('a4');}else if(_0xce6249==_0x54fe('30')){_0x20c3f6=RSA_encryption(_0x54fe('a5')+_0x1ac4f7+_0x54fe('a6')+user_ID+_0x54fe('5a')+_0x21ff77+'\x7d');_0x420fe8='\u819c\u62dc';}let _0x415dbe=Post_request(_0x54fe('a7'),_0x20c3f6);return new Promise((_0x165c5c,_0x401ec7)=>{$[_0x54fe('36')](_0x415dbe,async(_0x485cf4,_0x5b17cc,_0x4ce696)=>{try{if(_0x485cf4){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('a8')+_0x420fe8+_0x54fe('a9'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('a8')+_0x420fe8+_0x54fe('a9');console[_0x54fe('3')](_0x485cf4+'\x0a');}else{let _0x5e7609=JSON[_0x54fe('38')](_0x4ce696);if(_0x5e7609[_0x54fe('9')]==0x1){if(_0xce6249==_0x54fe('32')){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+'\x20'+_0x420fe8+_0x54fe('aa')+_0x5e7609[_0x54fe('3a')][_0x54fe('47')][_0x54fe('48')][_0x54fe('ab')]+_0x54fe('ac')+_0x5e7609[_0x54fe('3a')][_0x54fe('47')][_0x54fe('48')][_0x54fe('73')]);}else if(_0xce6249==_0x54fe('2a')){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+'\x20'+_0x420fe8+_0x54fe('ad'));}else if(_0xce6249==_0x54fe('2e')){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+'\x20'+_0x420fe8+_0x54fe('ae'));}else if(_0xce6249==_0x54fe('30')){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+'\x20'+_0x420fe8+_0x54fe('af'));}}else if(_0x5e7609[_0x54fe('9')]==0x76f&&_0xce6249==_0x54fe('2e')){await reward_video(_0x54fe('2e'));}else if(_0x5e7609[_0x54fe('9')]==0x4b8){if(_0xce6249==_0x54fe('2e')){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('a8')+_0x420fe8+_0x54fe('b0')+_0x5e7609[_0x54fe('42')]);await get_variable(_0x54fe('2e'),_0x54fe('b1'));}if(_0xce6249==_0x54fe('2a')){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('a8')+_0x420fe8+_0x54fe('b0')+_0x5e7609[_0x54fe('42')]);await get_variable(_0x54fe('2a'),_0x54fe('b1'));}}else if(_0x5e7609[_0x54fe('9')]==0x57f&&_0xce6249==_0x54fe('30')){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('a8')+_0x420fe8+_0x54fe('b0')+_0x5e7609[_0x54fe('42')]);await get_variable(_0x54fe('30'),_0x54fe('b1'));}else if(_0x5e7609[_0x54fe('9')]==0x76f&&_0xce6249==_0x54fe('2e')){await reward_video(_0x54fe('2e'));}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('a8')+_0x420fe8+_0x54fe('b0')+_0x5e7609[_0x54fe('42')]);}}}catch(_0x5e0fd3){console[_0x54fe('3')](_0x5e0fd3,_0x5b17cc);}finally{_0x165c5c();}});});}function reward_video(_0x24fd4c){if(!video_data){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('b2'));}else{let _0x392c1f=video_data[_0x54fe('b3')](/[\r\n]/g,'');let _0x459341={'\x75\x72\x6c':_0x54fe('b4'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x54fe('b5'),'Content-Type':_0x54fe('b6'),'Content-Length':_0x392c1f[_0x54fe('e')],'Accept-Encoding':_0x54fe('b7'),'User-Agent':_0x54fe('b8')},'\x62\x6f\x64\x79':_0x392c1f};return new Promise((_0xd2cef,_0x4ac972)=>{$[_0x54fe('36')](_0x459341,async(_0x4dcc73,_0xde46d0,_0x2963b3)=>{try{if(_0x4dcc73){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('b9'));subTitle+=_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('b9');console[_0x54fe('3')](_0x4dcc73+'\x0a');}else{if(_0x2963b3[_0x54fe('ba')](_0x54fe('bb'))>-0x1){let _0x4a944b=JSON[_0x54fe('38')](_0x2963b3);if(_0x4a944b[_0x54fe('bb')]==0x3){await getAdReward(_0x24fd4c);}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('bc'));}}else{let _0x23a469=JSON[_0x54fe('38')](_0x2963b3);if(_0x23a469[_0x54fe('9')]==0xea67){await getAdReward(_0x24fd4c);}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('bc'));}}}}catch(_0x7dc6dc){console[_0x54fe('3')](_0x7dc6dc,_0xde46d0);}finally{_0xd2cef();}});});}}function upscript(){let _0x486d16={'\x75\x72\x6c':scripturl,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x54fe('bd'),'User-Agent':_0x54fe('be')}};return new Promise((_0x3bdee3,_0x21e34b)=>{$[_0x54fe('bf')](_0x486d16,async(_0x3596b2,_0xc032b1,_0x4218ef)=>{try{if(_0x3596b2){console[_0x54fe('3')](_0x54fe('c0'));subTitle+=_0x54fe('c0');}else{if(_0x4218ef[_0x54fe('ba')](_0x54fe('c1'))>-0x1){if($[_0x54fe('23')][_0x54fe('c2')](/版本:(\S*)/)[0x1]!=_0x4218ef[_0x54fe('c2')](/版本:(\S*)'/)[0x1]){let _0x3db5d9=__dirname+(_0x54fe('c3')+$[_0x54fe('23')][_0x54fe('c2')](/版本:(\S*)/)[0x1][_0x54fe('b3')](new RegExp('\x2f','\x67\x69'),'\x5f')+_0x54fe('c4'));fs[_0x54fe('c5')](_0x3db5d9,fs[_0x54fe('c6')](__filename));fs[_0x54fe('c7')](__filename,_0x4218ef,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x31a8f8){if(_0x31a8f8){console[_0x54fe('3')](_0x31a8f8);}});}}}}catch(_0x2d325f){console[_0x54fe('3')](_0x2d325f,_0xc032b1);}finally{_0x3bdee3();}});});}function Post_request(_0x5bcf92,_0x4d951a,_0x185951){let _0x5a3298=_0x54fe('c8');return{'\x75\x72\x6c':''+_0x5a3298+_0x5bcf92,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x54fe('c9'),'Connection':_0x54fe('ca'),'Content-Length':_0x4d951a[_0x54fe('e')],'Pragma':_0x54fe('cb'),'Cache-Control':_0x54fe('cb'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x54fe('cc'),'Accept':_0x54fe('cd'),'Origin':_0x54fe('ce'),'X-Requested-With':_0x54fe('cf'),'Sec-Fetch-Site':_0x54fe('d0'),'Sec-Fetch-Mode':_0x54fe('d1'),'Sec-Fetch-Dest':_0x54fe('d2'),'Referer':_0x54fe('d3'),'Accept-Encoding':_0x54fe('d4'),'Accept-Language':_0x54fe('d5')},'\x62\x6f\x64\x79':_0x4d951a};};function Get_request(_0x6fd732){let _0x57471a=_0x54fe('c8');return{'\x75\x72\x6c':''+_0x57471a+_0x6fd732,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x54fe('c9'),'Connection':_0x54fe('ca'),'Content-Length':0x0,'Pragma':_0x54fe('cb'),'Cache-Control':_0x54fe('cb'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x54fe('cc'),'Accept':_0x54fe('cd'),'Origin':_0x54fe('ce'),'X-Requested-With':_0x54fe('cf'),'Sec-Fetch-Site':_0x54fe('d0'),'Sec-Fetch-Mode':_0x54fe('d1'),'Sec-Fetch-Dest':_0x54fe('d2'),'Referer':_0x54fe('d3'),'Accept-Encoding':_0x54fe('d4'),'Accept-Language':_0x54fe('d5')}};};function RSA_encryption(_0x172ba2){var _0x2244dd=new RSA_js();_0x2244dd[_0x54fe('d6')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x54fe('d7')});_0x2244dd[_0x54fe('d8')](_0x54fe('d9'),_0x54fe('da'));var _0x2d9c2c=_0x2244dd[_0x54fe('db')](_0x172ba2,_0x54fe('dc'));return _0x2d9c2c;}function get_variable(_0x481637,_0x38a509){let _0x8427dd=$[_0x54fe('0')]()?require(_0x54fe('2')):'';if(!_0x8427dd){console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('dd'));return;}else{_0x8427dd=JSON[_0x54fe('de')](_0x8427dd);}let _0x53a1a7=JSON[_0x54fe('de')](current);let _0x14aee1=_0x8427dd[_0x54fe('df')](0x0,_0x8427dd[_0x54fe('ba')](_0x53a1a7));let _0x5cc89c=_0x8427dd[_0x54fe('e')]-_0x14aee1[_0x54fe('e')]-_0x53a1a7[_0x54fe('e')];let _0x5d346a=_0x8427dd[_0x54fe('df')](_0x8427dd[_0x54fe('e')]-_0x5cc89c,_0x8427dd[_0x54fe('e')]);let _0x214acf='';if(_0x481637==_0x54fe('2e')&&_0x38a509==_0x54fe('2b')){_0x214acf=JSON[_0x54fe('38')](JSON[_0x54fe('de')](_0x53a1a7[_0x54fe('b3')](new RegExp(_0x54fe('e0'),'\x67\x69'),_0x54fe('e1'))));}else if(_0x481637==_0x54fe('30')&&_0x38a509==_0x54fe('2b')){_0x214acf=JSON[_0x54fe('38')](JSON[_0x54fe('de')](_0x53a1a7[_0x54fe('b3')](new RegExp(_0x54fe('e2'),'\x67\x69'),_0x54fe('e3'))));}else if(_0x481637==_0x54fe('2a')&&_0x38a509==_0x54fe('2b')){_0x214acf=JSON[_0x54fe('38')](JSON[_0x54fe('de')](_0x53a1a7[_0x54fe('b3')](new RegExp(_0x54fe('e4'),'\x67\x69'),_0x54fe('e5'))));}else if(_0x481637==_0x54fe('2e')&&_0x38a509==_0x54fe('b1')){_0x214acf=JSON[_0x54fe('38')](JSON[_0x54fe('de')](_0x53a1a7[_0x54fe('b3')](new RegExp(_0x54fe('e6'),'\x67\x69'),_0x54fe('e7'))));}else if(_0x481637==_0x54fe('30')&&_0x38a509==_0x54fe('b1')){_0x214acf=JSON[_0x54fe('38')](JSON[_0x54fe('de')](_0x53a1a7[_0x54fe('b3')](new RegExp(_0x54fe('e3'),'\x67\x69'),_0x54fe('e2'))));}else if(_0x481637==_0x54fe('2a')&&_0x38a509==_0x54fe('b1')){_0x214acf=JSON[_0x54fe('38')](JSON[_0x54fe('de')](_0x53a1a7[_0x54fe('b3')](new RegExp(_0x54fe('e5'),'\x67\x69'),_0x54fe('e4'))));}fs[_0x54fe('c7')](_0x54fe('2'),_0x54fe('e8')+_0x14aee1+_0x214acf+_0x5d346a,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x126c7e){if(_0x126c7e){console[_0x54fe('3')](_0x126c7e);}else{console[_0x54fe('3')](_0x54fe('2c')+$[_0x54fe('1f')]+_0x54fe('e9'));}});};_0xodp='jsjiami.com.v6';



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