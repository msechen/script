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


const $ = new Env('【电玩世界】版本:22/03/01_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xod4='jsjiami.com.v6',_0xod4_=['_0xod4'],_0x24d5=[_0xod4,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x74\x6f\x75','\x73\x74\x61\x72\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u6b64\u65f6\u95f4\u6bb5\u884c\u52a8\u6b21\u6570\u548c\u589e\u52a0\u6b21\u6570\u5df2\u7528\u5c3d','\x73\x69\x67\x6e','\x76\x69\x65\x77','\x20\u52a0\u901f\u3011\x3a\x20\u4eca\u65e5\u52a0\u901f\u6b21\u6570\u5df2\u7528\u5c3d','\x20\u819c\u62dc\u3011\x3a\x20\u4eca\u65e5\u819c\u62dc\u6b21\u6570\u5df2\u7528\u5c3d','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x7d','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x7d','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x67\x65\x74\x4d\x79\x49\x6e\x66\x6f','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x7d','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x7d','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x7d','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x65\x6e\x64','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x62\x6a\x73\x52\x5a\x6a\x69\x61\x4c\x6d\x69\x6c\x2e\x4f\x4a\x49\x63\x43\x78\x6f\x52\x4a\x6d\x2e\x76\x42\x36\x48\x3d\x3d'];function _0x571e(_0x295250,_0x492962){_0x295250=~~'0x'['concat'](_0x295250['slice'](0x0));var _0x4af02a=_0x24d5[_0x295250];return _0x4af02a;};(function(_0xd65d89,_0x39bfe8){var _0x5600bc=0x0;for(_0x39bfe8=_0xd65d89['shift'](_0x5600bc>>0x2);_0x39bfe8&&_0x39bfe8!==(_0xd65d89['pop'](_0x5600bc>>0x3)+'')['replace'](/[bRZLlOJICxRJBH=]/g,'');_0x5600bc++){_0x5600bc=_0x5600bc^0xd4227;}}(_0x24d5,_0x571e));const RSA_js=$[_0x571e('0')]()?require(_0x571e('1')):'';const fs=$[_0x571e('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x571e('0')]()?require(_0x571e('2')):'';!(async()=>{console[_0x571e('3')](_0x571e('4')+new Date(new Date()[_0x571e('5')]()+new Date()[_0x571e('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x571e('7')]()+_0x571e('8'));if(dwsj_variable[_0x571e('9')]!==0xc8){console[_0x571e('3')](_0x571e('a'));return;}console[_0x571e('3')](_0x571e('b')+dwsj_variable[_0x571e('c')][_0x571e('d')][_0x571e('e')]+_0x571e('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x571e('c')][_0x571e('d')][_0x571e('e')];i++){current=dwsj_variable[_0x571e('c')][_0x571e('d')][i];video_data=dwsj_variable[_0x571e('c')][_0x571e('d')][i][_0x571e('10')];user_ID=dwsj_variable[_0x571e('c')][_0x571e('d')][i][_0x571e('11')];dwsj_token=dwsj_variable[_0x571e('c')][_0x571e('d')][i][_0x571e('12')];dwsj_UA=dwsj_variable[_0x571e('c')][_0x571e('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x571e('c')][_0x571e('d')][i][_0x571e('13')];dwsj_signtime=dwsj_variable[_0x571e('c')][_0x571e('d')][i][_0x571e('14')];dwsj_UPbuild=dwsj_variable[_0x571e('c')][_0x571e('d')][i][_0x571e('15')];dwsj_Business=dwsj_variable[_0x571e('c')][_0x571e('d')][i][_0x571e('16')];dwsj_viewnum=dwsj_variable[_0x571e('c')][_0x571e('d')][i][_0x571e('17')];dwsj_action=dwsj_variable[_0x571e('c')][_0x571e('d')][i][_0x571e('18')];notice=dwsj_variable[_0x571e('c')][_0x571e('19')][0x0][_0x571e('1a')];if(!dwsj_UA){dwsj_UA=_0x571e('1b');}$[_0x571e('1c')]=i+0x1;console[_0x571e('3')](_0x571e('1d')+$[_0x571e('1c')]+_0x571e('1e'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x571e('1f')]($[_0x571e('20')],subTitle);}}}})()[_0x571e('21')](_0x4b98bb=>$[_0x571e('22')](_0x4b98bb))[_0x571e('23')](()=>$[_0x571e('24')]());async function implement(){if(dwsj_action==0x1){if(new Date()[_0x571e('25')]()==0x0||new Date()[_0x571e('25')]()==0xc||new Date()[_0x571e('25')]()==0x14){if(new Date()[_0x571e('26')]()<0x1e){await get_variable(_0x571e('27'),_0x571e('28'));await rollPoint();}}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('2a'));await getBuildingEarn();}}else{await rollPoint();}let _0xde00b4=new Date()[_0x571e('25')]();let _0x27e18d=new Date()[_0x571e('26')]();if(_0xde00b4==dwsj_signtime&&_0x27e18d<0xa){await getAdReward(_0x571e('2b'));}if(dwsj_viewnum==0x0){await getAdReward(_0x571e('2c'));}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('2d'));}if(dwsj_Business==0x0){await getRankByType();}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('2e'));}}function rollPoint(){let _0x8ce7f7=RSA_encryption(_0x571e('2f')+user_ID+_0x571e('30'));let _0x37162b=Post_request(_0x571e('31'),_0x8ce7f7);return new Promise((_0x4b56f,_0x3aedf5)=>{$[_0x571e('32')](_0x37162b,async(_0x39ea49,_0x5bed1f,_0x2ad5a8)=>{try{if(_0x39ea49){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('33'));subTitle+=_0x571e('29')+$[_0x571e('1c')]+_0x571e('33');console[_0x571e('3')](_0x39ea49+'\x0a');}else{let _0x579b6c=JSON[_0x571e('34')](_0x2ad5a8);if(_0x579b6c[_0x571e('9')]==0x1){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('35')+_0x579b6c[_0x571e('36')][_0x571e('37')][_0x571e('38')]+_0x571e('39'));await addGoodsBuff();await $[_0x571e('3a')](Math[_0x571e('3b')](Math[_0x571e('3c')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x579b6c[_0x571e('9')]==0x515||_0x579b6c[_0x571e('3d')]==_0x571e('3e')){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('3f')+_0x579b6c[_0x571e('3d')]);await getAdReward(_0x571e('27'));}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('3f')+_0x579b6c[_0x571e('3d')]);}}}catch(_0x422cbe){console[_0x571e('3')](_0x422cbe,_0x5bed1f);}finally{_0x4b56f();}});});}function addNewBuilding(){let _0x2eaa81=RSA_encryption(_0x571e('2f')+user_ID+'\x7d');let _0x2e5887=Post_request(_0x571e('40'),_0x2eaa81);return new Promise((_0x5b3abc,_0x22946c)=>{$[_0x571e('32')](_0x2e5887,async(_0x13308a,_0x4401fc,_0x4f852d)=>{try{if(_0x13308a){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('41'));subTitle+=_0x571e('29')+$[_0x571e('1c')]+_0x571e('41');}else{let _0x2b5382=JSON[_0x571e('34')](_0x4f852d);if(_0x2b5382[_0x571e('9')]==0x1){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('42')+_0x2b5382[_0x571e('36')][_0x571e('43')][_0x571e('44')][_0x571e('45')]+_0x571e('39'));}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('46')+_0x2b5382[_0x571e('3d')]);}}}catch(_0x4ec48b){console[_0x571e('3')](_0x4ec48b,_0x4401fc);}finally{_0x5b3abc();}});});}function getBuildingEarn(){let _0x41dc90=RSA_encryption(_0x571e('2f')+user_ID+'\x7d');let _0x2fa087=Post_request(_0x571e('47'),_0x41dc90);return new Promise((_0x2c7c72,_0x13b7a5)=>{$[_0x571e('32')](_0x2fa087,async(_0x24dec9,_0x242ce4,_0x3fd78c)=>{try{if(_0x24dec9){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('48'));subTitle+=_0x571e('29')+$[_0x571e('1c')]+_0x571e('48');}else{let _0x6e041f=JSON[_0x571e('34')](_0x3fd78c);if(_0x6e041f[_0x571e('9')]==0x1){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('49')+_0x6e041f[_0x571e('36')][_0x571e('43')][_0x571e('44')][_0x571e('45')]+_0x571e('39'));}else if(_0x6e041f[_0x571e('9')]==0x4bf||_0x6e041f[_0x571e('3d')]==_0x571e('4a')){if(dwsj_build){await addNewBuilding();}}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('4b')+_0x6e041f[_0x571e('3d')]);}}}catch(_0x3b4fbc){console[_0x571e('3')](_0x3b4fbc,_0x242ce4);}finally{_0x2c7c72();}});});}function buildingLevelUp(){let _0x2e5301=RSA_encryption(_0x571e('2f')+user_ID+'\x7d');let _0x179a5c=Post_request(_0x571e('4c'),_0x2e5301);return new Promise((_0x280837,_0x392313)=>{$[_0x571e('32')](_0x179a5c,async(_0x47c4f5,_0x210f6b,_0x2ded45)=>{try{if(_0x47c4f5){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('4d'));subTitle+=_0x571e('29')+$[_0x571e('1c')]+_0x571e('4d');}else{let _0x546117=JSON[_0x571e('34')](_0x2ded45);if(_0x546117[_0x571e('9')]==0x1){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('4e')+_0x546117[_0x571e('36')][_0x571e('43')][_0x571e('44')][_0x571e('45')]+_0x571e('39'));}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('4f')+_0x546117[_0x571e('3d')]);}}}catch(_0x2afbf6){console[_0x571e('3')](_0x2afbf6,_0x210f6b);}finally{_0x280837();}});});}function addGoodsBuff(){let _0x137a80=RSA_encryption(_0x571e('2f')+user_ID+_0x571e('50'));let _0x87efb6=Post_request(_0x571e('51'),_0x137a80);return new Promise((_0x2881bc,_0x4b6aa3)=>{$[_0x571e('32')](_0x87efb6,async(_0x105e05,_0x2af15b,_0x38a0e5)=>{try{if(_0x105e05){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('52'));subTitle+=_0x571e('29')+$[_0x571e('1c')]+_0x571e('52');}else{}}catch(_0x17726b){console[_0x571e('3')](_0x17726b,_0x2af15b);}finally{_0x2881bc();}});});}function getRankByType(){let _0x23c907=[_0x571e('45'),_0x571e('53'),_0x571e('53')];let _0x884630='';let _0x432c37=_0x23c907[Math[_0x571e('3b')](Math[_0x571e('3c')]()*_0x23c907[_0x571e('e')])];if(_0x432c37==_0x571e('45')){_0x884630='\u91d1\u5e01';}else if(_0x432c37==_0x571e('53')){_0x884630='\u58f0\u671b';}if(_0x432c37==_0x571e('53')){_0x884630='\u6536\u76ca';}let _0x593e3a=RSA_encryption(_0x571e('54')+_0x432c37+_0x571e('55')+user_ID+_0x571e('56'));let _0x4a690c=Post_request(_0x571e('57'),_0x593e3a);return new Promise((_0x1740d4,_0x1503fb)=>{$[_0x571e('32')](_0x4a690c,async(_0x4a1fbe,_0x1e22c3,_0x5b1d9c)=>{try{if(_0x4a1fbe){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+'\x20'+_0x884630+_0x571e('58'));subTitle+=_0x571e('29')+$[_0x571e('1c')]+'\x20'+_0x884630+_0x571e('58');console[_0x571e('3')](_0x4a1fbe+'\x0a');}else{let _0x4c8b07=JSON[_0x571e('34')](_0x5b1d9c);if(_0x4c8b07[_0x571e('9')]==0x1){let _0x58b577=['\x30','\x31','\x32','\x33','\x34'];let _0x51f9e8=_0x58b577[Math[_0x571e('3b')](Math[_0x571e('3c')]()*_0x23c907[_0x571e('e')])];let _0x247e27=_0x4c8b07[_0x571e('36')][_0x571e('59')][_0x51f9e8][_0x571e('5a')];await getAdReward(_0x571e('5b'),_0x247e27);}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+'\x20'+_0x884630+_0x571e('5c')+_0x4c8b07[_0x571e('3d')]);}}}catch(_0x1f886a){console[_0x571e('3')](_0x1f886a,_0x1e22c3);}finally{_0x1740d4();}});});}function getUserWalletPage(){let _0xbac45a=RSA_encryption(_0x571e('2f')+user_ID+'\x7d');let _0x50b391=Post_request(_0x571e('5d'),_0xbac45a);return new Promise((_0x1ea6a0,_0x560c2f)=>{$[_0x571e('32')](_0x50b391,async(_0x5d91d0,_0x4975bc,_0x52c4e6)=>{try{if(_0x5d91d0){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('52'));subTitle+=_0x571e('29')+$[_0x571e('1c')]+_0x571e('52');}else{console[_0x571e('3')](_0x52c4e6);}}catch(_0x4e80aa){console[_0x571e('3')](_0x4e80aa,_0x4975bc);}finally{_0x1ea6a0();}});});}function getMyInfo(){let _0x45557b=RSA_encryption(_0x571e('2f')+user_ID+'\x7d');let _0x3be729=Post_request(_0x571e('5e'),_0x45557b);return new Promise((_0x4ee467,_0x13cba2)=>{$[_0x571e('32')](_0x3be729,async(_0x322422,_0x12d49f,_0x57e632)=>{try{if(_0x322422){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('52'));subTitle+=_0x571e('29')+$[_0x571e('1c')]+_0x571e('52');}else{console[_0x571e('3')](_0x57e632);}}catch(_0x2d6aaf){console[_0x571e('3')](_0x2d6aaf,_0x12d49f);}finally{_0x4ee467();}});});}function getAdReward(_0x5d8f63,_0x2d37df){let _0x406b5b='';let _0x2dd488='';if(_0x5d8f63==_0x571e('2b')){_0x406b5b=RSA_encryption(_0x571e('2f')+user_ID+_0x571e('5f'));_0x2dd488='\u7b7e\u5230';}else if(_0x5d8f63==_0x571e('2c')){_0x406b5b=RSA_encryption(_0x571e('2f')+user_ID+_0x571e('60'));_0x2dd488='\u52a0\u901f';}else if(_0x5d8f63==_0x571e('27')){_0x406b5b=RSA_encryption(_0x571e('2f')+user_ID+_0x571e('61'));_0x2dd488=_0x571e('62');}else if(_0x5d8f63==_0x571e('5b')){_0x406b5b=RSA_encryption(_0x571e('63')+_0x2d37df+_0x571e('64')+user_ID+_0x571e('56'));_0x2dd488='\u819c\u62dc';}let _0x1f488a=Post_request(_0x571e('65'),_0x406b5b);return new Promise((_0x19af09,_0x2e9625)=>{$[_0x571e('32')](_0x1f488a,async(_0xf7b4de,_0x773a24,_0x2b76d6)=>{try{if(_0xf7b4de){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('66')+_0x2dd488+_0x571e('67'));subTitle+=_0x571e('29')+$[_0x571e('1c')]+_0x571e('66')+_0x2dd488+_0x571e('67');console[_0x571e('3')](_0xf7b4de+'\x0a');}else{let _0x10dcca=JSON[_0x571e('34')](_0x2b76d6);if(_0x10dcca[_0x571e('9')]==0x1){if(_0x5d8f63==_0x571e('2b')){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+'\x20'+_0x2dd488+_0x571e('68')+_0x10dcca[_0x571e('36')][_0x571e('43')][_0x571e('44')][_0x571e('69')]+_0x571e('6a')+_0x10dcca[_0x571e('36')][_0x571e('43')][_0x571e('44')][_0x571e('6b')]);}else if(_0x5d8f63==_0x571e('27')){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+'\x20'+_0x2dd488+_0x571e('6c'));}else if(_0x5d8f63==_0x571e('2c')){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+'\x20'+_0x2dd488+_0x571e('6d'));}else if(_0x5d8f63==_0x571e('5b')){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+'\x20'+_0x2dd488+_0x571e('6e'));}}else if(_0x10dcca[_0x571e('9')]==0x4b8){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('66')+_0x2dd488+_0x571e('6f')+_0x10dcca[_0x571e('3d')]);if(_0x5d8f63==_0x571e('2c')){await get_variable(_0x571e('2c'));}if(_0x5d8f63==_0x571e('27')){await get_variable(_0x571e('27'),_0x571e('70'));}}else if(_0x10dcca[_0x571e('9')]==0x57f&&_0x5d8f63==_0x571e('5b')){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('66')+_0x2dd488+_0x571e('6f')+_0x10dcca[_0x571e('3d')]);await get_variable(_0x571e('5b'));}else if(_0x10dcca[_0x571e('9')]==0x76f&&_0x5d8f63==_0x571e('2c')){await reward_video(_0x571e('2c'));}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('66')+_0x2dd488+_0x571e('6f')+_0x10dcca[_0x571e('3d')]);}}}catch(_0x517bb3){console[_0x571e('3')](_0x517bb3,_0x773a24);}finally{_0x19af09();}});});}function reward_video(_0x54d5ab){let _0x5c7090=video_data[_0x571e('71')](/[\r\n]/g,'');let _0x22fc77={'\x75\x72\x6c':_0x571e('72'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x571e('73'),'Content-Type':_0x571e('74'),'Content-Length':_0x5c7090[_0x571e('e')],'Accept-Encoding':_0x571e('75'),'User-Agent':_0x571e('76')},'\x62\x6f\x64\x79':_0x5c7090};return new Promise((_0x2a91ba,_0x3c7ddc)=>{$[_0x571e('32')](_0x22fc77,async(_0xe7bfa6,_0x62c948,_0x3dfe17)=>{try{if(_0xe7bfa6){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('77'));subTitle+=_0x571e('29')+$[_0x571e('1c')]+_0x571e('77');console[_0x571e('3')](_0xe7bfa6+'\x0a');}else{if(_0x3dfe17[_0x571e('78')](_0x571e('79'))>-0x1){let _0x1321e2=JSON[_0x571e('34')](_0x3dfe17);if(_0x1321e2[_0x571e('79')]==0x3){await getAdReward(_0x54d5ab);}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('7a'));}}else{let _0x5b7f72=JSON[_0x571e('34')](_0x3dfe17);if(_0x5b7f72[_0x571e('9')]==0xea67){await getAdReward(_0x54d5ab);}else{console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('7a'));}}}}catch(_0x1f4024){console[_0x571e('3')](_0x1f4024,_0x62c948);}finally{_0x2a91ba();}});});}function Post_request(_0xeea139,_0x274adf){return{'\x75\x72\x6c':_0x571e('7b')+_0xeea139,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x571e('7c'),'Connection':_0x571e('7d'),'Content-Length':_0x274adf[_0x571e('e')],'Pragma':_0x571e('7e'),'Cache-Control':_0x571e('7e'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x571e('7f'),'Accept':_0x571e('80'),'Origin':_0x571e('81'),'X-Requested-With':_0x571e('82'),'Sec-Fetch-Site':_0x571e('83'),'Sec-Fetch-Mode':_0x571e('84'),'Sec-Fetch-Dest':_0x571e('85'),'Referer':_0x571e('86'),'Accept-Encoding':_0x571e('87'),'Accept-Language':_0x571e('88')},'\x62\x6f\x64\x79':_0x274adf};};function Get_request(_0x15512f){return{'\x75\x72\x6c':_0x571e('7b')+_0x15512f,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x571e('7c'),'Connection':_0x571e('7d'),'Content-Length':0x0,'Pragma':_0x571e('7e'),'Cache-Control':_0x571e('7e'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x571e('7f'),'Accept':_0x571e('80'),'Origin':_0x571e('81'),'X-Requested-With':_0x571e('82'),'Sec-Fetch-Site':_0x571e('83'),'Sec-Fetch-Mode':_0x571e('84'),'Sec-Fetch-Dest':_0x571e('85'),'Referer':_0x571e('86'),'Accept-Encoding':_0x571e('87'),'Accept-Language':_0x571e('88')}};};function RSA_encryption(_0x594df1){var _0x4baebc=new RSA_js();_0x4baebc[_0x571e('89')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x571e('8a')});_0x4baebc[_0x571e('8b')](_0x571e('8c'),_0x571e('8d'));var _0xe77dd5=_0x4baebc[_0x571e('8e')](_0x594df1,_0x571e('8f'));return _0xe77dd5;}function get_variable(_0x454736,_0x2cf287){let _0x57951=$[_0x571e('0')]()?require(_0x571e('2')):'';if(!_0x57951){console[_0x571e('3')](_0x571e('29')+$[_0x571e('1c')]+_0x571e('90'));return;}else{_0x57951=JSON[_0x571e('91')](_0x57951);}let _0x214506=JSON[_0x571e('91')](current);let _0x187de1=_0x57951[_0x571e('92')](0x0,_0x57951[_0x571e('78')](_0x214506));let _0x1c87da=_0x57951[_0x571e('e')]-_0x187de1[_0x571e('e')]-_0x214506[_0x571e('e')];let _0x46bf2f=_0x57951[_0x571e('92')](_0x57951[_0x571e('e')]-_0x1c87da,_0x57951[_0x571e('e')]);let _0x6caff4='';if(_0x454736==_0x571e('2c')){_0x6caff4=JSON[_0x571e('34')](JSON[_0x571e('91')](_0x214506[_0x571e('71')](new RegExp(_0x571e('93'),'\x67\x69'),_0x571e('94'))));}else if(_0x454736==_0x571e('5b')){_0x6caff4=JSON[_0x571e('34')](JSON[_0x571e('91')](_0x214506[_0x571e('71')](new RegExp(_0x571e('95'),'\x67\x69'),_0x571e('96'))));}else if(_0x454736==_0x571e('27')&&_0x2cf287==_0x571e('70')){_0x6caff4=JSON[_0x571e('34')](JSON[_0x571e('91')](_0x214506[_0x571e('71')](new RegExp(_0x571e('97'),'\x67\x69'),_0x571e('98'))));}else if(_0x454736==_0x571e('27')&&_0x2cf287==_0x571e('28')){_0x6caff4=JSON[_0x571e('34')](JSON[_0x571e('91')](_0x214506[_0x571e('71')](new RegExp(_0x571e('98'),'\x67\x69'),_0x571e('97'))));}fs[_0x571e('99')](_0x571e('2'),_0x571e('9a')+_0x187de1+_0x6caff4+_0x46bf2f,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x38bbe2){if(_0x38bbe2){console[_0x571e('3')](_0x38bbe2);}});};_0xod4='jsjiami.com.v6';



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