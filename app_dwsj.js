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


const $ = new Env('【电玩世界】版本:22/02/29_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xod3='jsjiami.com.v6',_0xod3_=['_0xod3'],_0x2ffe=[_0xod3,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x64\x77\x73\x6a\x5f\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x74\x6f\x75','\x73\x74\x61\x72\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u6b64\u65f6\u95f4\u6bb5\u884c\u52a8\u6b21\u6570\u548c\u589e\u52a0\u6b21\u6570\u5df2\u7528\u5c3d','\x73\x69\x67\x6e','\x76\x69\x65\x77','\x20\u52a0\u901f\u3011\x3a\x20\u4eca\u65e5\u52a0\u901f\u6b21\u6570\u5df2\u7528\u5c3d','\x20\u819c\u62dc\u3011\x3a\x20\u4eca\u65e5\u819c\u62dc\u6b21\u6570\u5df2\u7528\u5c3d','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x7d','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x67\x65\x74\x4d\x79\x49\x6e\x66\x6f','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x7d','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x7d','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x7d','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x65\x6e\x64','\x69\x6e\x64\x65\x78\x4f\x66','\u672a\u6210\u529f','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x68\x6a\x73\x55\x6a\x62\x69\x56\x70\x61\x6b\x6d\x41\x69\x2e\x63\x6f\x43\x6d\x2e\x76\x50\x47\x36\x52\x79\x42\x77\x44\x52\x4b\x3d\x3d'];function _0x453f(_0x5099ff,_0x44f987){_0x5099ff=~~'0x'['concat'](_0x5099ff['slice'](0x0));var _0x1a9fc4=_0x2ffe[_0x5099ff];return _0x1a9fc4;};(function(_0x1b634d,_0x4c02a1){var _0x12f2d1=0x0;for(_0x4c02a1=_0x1b634d['shift'](_0x12f2d1>>0x2);_0x4c02a1&&_0x4c02a1!==(_0x1b634d['pop'](_0x12f2d1>>0x3)+'')['replace'](/[hUbVpkACPGRyBwDRK=]/g,'');_0x12f2d1++){_0x12f2d1=_0x12f2d1^0xd41ed;}}(_0x2ffe,_0x453f));const RSA_js=$[_0x453f('0')]()?require(_0x453f('1')):'';const fs=$[_0x453f('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x453f('0')]()?require(_0x453f('2')):'';!(async()=>{console[_0x453f('3')](_0x453f('4')+new Date(new Date()[_0x453f('5')]()+new Date()[_0x453f('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x453f('7')]()+_0x453f('8'));if(dwsj_variable[_0x453f('9')]!==0xc8){console[_0x453f('3')](_0x453f('a'));return;}console[_0x453f('3')](_0x453f('b')+dwsj_variable[_0x453f('c')][_0x453f('d')][_0x453f('e')]+_0x453f('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x453f('c')][_0x453f('d')][_0x453f('e')];i++){current=dwsj_variable[_0x453f('c')][_0x453f('d')][i];video_data=dwsj_variable[_0x453f('c')][_0x453f('d')][i][_0x453f('10')];user_ID=dwsj_variable[_0x453f('c')][_0x453f('d')][i][_0x453f('11')];dwsj_token=dwsj_variable[_0x453f('c')][_0x453f('d')][i][_0x453f('12')];dwsj_UA=dwsj_variable[_0x453f('c')][_0x453f('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x453f('c')][_0x453f('d')][i][_0x453f('13')];dwsj_signtime=dwsj_variable[_0x453f('c')][_0x453f('d')][i][_0x453f('14')];dwsj_UPbuild=dwsj_variable[_0x453f('c')][_0x453f('d')][i][_0x453f('15')];dwsj_Business=dwsj_variable[_0x453f('c')][_0x453f('d')][i][_0x453f('16')];dwsj_viewnum=dwsj_variable[_0x453f('c')][_0x453f('d')][i][_0x453f('17')];dwsj_action=dwsj_variable[_0x453f('c')][_0x453f('d')][i][_0x453f('18')];notice=dwsj_variable[_0x453f('c')][_0x453f('19')][0x0][_0x453f('1a')];if(!dwsj_UA){dwsj_UA=_0x453f('1b');}$[_0x453f('1c')]=i+0x1;console[_0x453f('3')](_0x453f('1d')+$[_0x453f('1c')]+_0x453f('1e'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x453f('1f')]($[_0x453f('20')],subTitle);}}}})()[_0x453f('21')](_0x5477f5=>$[_0x453f('22')](_0x5477f5))[_0x453f('23')](()=>$[_0x453f('24')]());async function implement(){if(dwsj_action==0x1){if(new Date()[_0x453f('25')]()==0x0||new Date()[_0x453f('25')]()==0xc||new Date()[_0x453f('25')]()==0x14){if(new Date()[_0x453f('26')]()<0x1e){await get_variable(_0x453f('27'),_0x453f('28'));await rollPoint();}}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('2a'));await getBuildingEarn();}}else{await rollPoint();}let _0x20ae54=new Date()[_0x453f('25')]();let _0x2d11df=new Date()[_0x453f('26')]();if(_0x20ae54==dwsj_signtime){await getAdReward(_0x453f('2b'));}if(dwsj_viewnum==0x0){await getAdReward(_0x453f('2c'));}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('2d'));}if(dwsj_Business==0x0){await getRankByType();}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('2e'));}}function rollPoint(){let _0x4873e6=RSA_encryption(_0x453f('2f')+user_ID+_0x453f('30'));let _0x1d3c21=Post_request(_0x453f('31'),_0x4873e6);return new Promise((_0x2a9af2,_0x225346)=>{$[_0x453f('32')](_0x1d3c21,async(_0x277706,_0x2a0df2,_0x14a6c1)=>{try{if(_0x277706){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('33'));subTitle+=_0x453f('29')+$[_0x453f('1c')]+_0x453f('33');console[_0x453f('3')](_0x277706+'\x0a');}else{let _0x2d3d39=JSON[_0x453f('34')](_0x14a6c1);if(_0x2d3d39[_0x453f('9')]==0x1){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('35')+_0x2d3d39[_0x453f('36')][_0x453f('37')][_0x453f('38')]+_0x453f('39'));await addGoodsBuff();await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x2d3d39[_0x453f('9')]==0x515||_0x2d3d39[_0x453f('3a')]==_0x453f('3b')){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('3c')+_0x2d3d39[_0x453f('3a')]);await getAdReward(_0x453f('27'));}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('3c')+_0x2d3d39[_0x453f('3a')]);}}}catch(_0x3057be){console[_0x453f('3')](_0x3057be,_0x2a0df2);}finally{_0x2a9af2();}});});}function addNewBuilding(){let _0x2fc0de=RSA_encryption(_0x453f('2f')+user_ID+'\x7d');let _0x5f500b=Post_request(_0x453f('3d'),_0x2fc0de);return new Promise((_0x4dd104,_0x145c53)=>{$[_0x453f('32')](_0x5f500b,async(_0x5963d1,_0x15c76b,_0x29e2c5)=>{try{if(_0x5963d1){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('3e'));subTitle+=_0x453f('29')+$[_0x453f('1c')]+_0x453f('3e');}else{let _0x55a5ea=JSON[_0x453f('34')](_0x29e2c5);if(_0x55a5ea[_0x453f('9')]==0x1){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('3f')+_0x55a5ea[_0x453f('36')][_0x453f('40')][_0x453f('41')][_0x453f('42')]+_0x453f('39'));}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('43')+_0x55a5ea[_0x453f('3a')]);}}}catch(_0xe0c157){console[_0x453f('3')](_0xe0c157,_0x15c76b);}finally{_0x4dd104();}});});}function getBuildingEarn(){let _0x36bd9a=RSA_encryption(_0x453f('2f')+user_ID+'\x7d');let _0x382ccd=Post_request(_0x453f('44'),_0x36bd9a);return new Promise((_0x246793,_0x78f46c)=>{$[_0x453f('32')](_0x382ccd,async(_0x172810,_0x261dbb,_0x467f11)=>{try{if(_0x172810){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('45'));subTitle+=_0x453f('29')+$[_0x453f('1c')]+_0x453f('45');}else{let _0xc1d871=JSON[_0x453f('34')](_0x467f11);if(_0xc1d871[_0x453f('9')]==0x1){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('46')+_0xc1d871[_0x453f('36')][_0x453f('40')][_0x453f('41')][_0x453f('42')]+_0x453f('39'));}else if(_0xc1d871[_0x453f('9')]==0x4bf||_0xc1d871[_0x453f('3a')]==_0x453f('47')){if(dwsj_build){await addNewBuilding();}}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('48')+_0xc1d871[_0x453f('3a')]);}}}catch(_0x1ce75e){console[_0x453f('3')](_0x1ce75e,_0x261dbb);}finally{_0x246793();}});});}function buildingLevelUp(){let _0x319e8c=RSA_encryption(_0x453f('2f')+user_ID+'\x7d');let _0x30778f=Post_request(_0x453f('49'),_0x319e8c);return new Promise((_0x488355,_0x5f4516)=>{$[_0x453f('32')](_0x30778f,async(_0x5c6b85,_0x4982a0,_0x1311d1)=>{try{if(_0x5c6b85){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('4a'));subTitle+=_0x453f('29')+$[_0x453f('1c')]+_0x453f('4a');}else{let _0x4fac66=JSON[_0x453f('34')](_0x1311d1);if(_0x4fac66[_0x453f('9')]==0x1){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('4b')+_0x4fac66[_0x453f('36')][_0x453f('40')][_0x453f('41')][_0x453f('42')]+_0x453f('39'));}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('4c')+_0x4fac66[_0x453f('3a')]);}}}catch(_0x826ecd){console[_0x453f('3')](_0x826ecd,_0x4982a0);}finally{_0x488355();}});});}function addGoodsBuff(){let _0x3183d7=RSA_encryption(_0x453f('2f')+user_ID+'\x7d');let _0x189614=Post_request(_0x453f('4d'),_0x3183d7);return new Promise((_0x4d2187,_0x361953)=>{$[_0x453f('32')](_0x189614,async(_0x17bd58,_0x1d5fc2,_0xee8b58)=>{try{if(_0x17bd58){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('4e'));subTitle+=_0x453f('29')+$[_0x453f('1c')]+_0x453f('4e');}else{}}catch(_0x4cb434){console[_0x453f('3')](_0x4cb434,_0x1d5fc2);}finally{_0x4d2187();}});});}function getRankByType(){let _0xd277dc=[_0x453f('42'),_0x453f('4f'),_0x453f('4f')];let _0x1af72d='';let _0x1f9099=_0xd277dc[Math[_0x453f('50')](Math[_0x453f('51')]()*_0xd277dc[_0x453f('e')])];if(_0x1f9099==_0x453f('42')){_0x1af72d='\u91d1\u5e01';}else if(_0x1f9099==_0x453f('4f')){_0x1af72d='\u58f0\u671b';}if(_0x1f9099==_0x453f('4f')){_0x1af72d='\u6536\u76ca';}let _0x2d06f4=RSA_encryption(_0x453f('52')+_0x1f9099+_0x453f('53')+user_ID+_0x453f('54'));let _0x9c4cf4=Post_request(_0x453f('55'),_0x2d06f4);return new Promise((_0x7a1234,_0x5f4b97)=>{$[_0x453f('32')](_0x9c4cf4,async(_0x5a7792,_0x2078f6,_0x3747a0)=>{try{if(_0x5a7792){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+'\x20'+_0x1af72d+_0x453f('56'));subTitle+=_0x453f('29')+$[_0x453f('1c')]+'\x20'+_0x1af72d+_0x453f('56');console[_0x453f('3')](_0x5a7792+'\x0a');}else{let _0x41fd54=JSON[_0x453f('34')](_0x3747a0);if(_0x41fd54[_0x453f('9')]==0x1){let _0x1f13f7=['\x30','\x31','\x32','\x33','\x34'];let _0x4c76bb=_0x1f13f7[Math[_0x453f('50')](Math[_0x453f('51')]()*_0xd277dc[_0x453f('e')])];let _0x508075=_0x41fd54[_0x453f('36')][_0x453f('57')][_0x4c76bb][_0x453f('58')];await getAdReward(_0x453f('59'),_0x508075);}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+'\x20'+_0x1af72d+_0x453f('5a')+_0x41fd54[_0x453f('3a')]);}}}catch(_0x4a37f2){console[_0x453f('3')](_0x4a37f2,_0x2078f6);}finally{_0x7a1234();}});});}function getUserWalletPage(){let _0x5ee677=RSA_encryption(_0x453f('2f')+user_ID+'\x7d');let _0x2067d0=Post_request(_0x453f('5b'),_0x5ee677);return new Promise((_0x2a4ccc,_0x55aa03)=>{$[_0x453f('32')](_0x2067d0,async(_0x2470fd,_0x345cc2,_0x37473a)=>{try{if(_0x2470fd){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('4e'));subTitle+=_0x453f('29')+$[_0x453f('1c')]+_0x453f('4e');}else{console[_0x453f('3')](_0x37473a);}}catch(_0x58eeef){console[_0x453f('3')](_0x58eeef,_0x345cc2);}finally{_0x2a4ccc();}});});}function getMyInfo(){let _0x483791=RSA_encryption(_0x453f('2f')+user_ID+'\x7d');let _0x31a021=Post_request(_0x453f('5c'),_0x483791);return new Promise((_0x1e1be3,_0x12aa75)=>{$[_0x453f('32')](_0x31a021,async(_0x31ec9d,_0x382063,_0x5b14e6)=>{try{if(_0x31ec9d){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('4e'));subTitle+=_0x453f('29')+$[_0x453f('1c')]+_0x453f('4e');}else{console[_0x453f('3')](_0x5b14e6);}}catch(_0x2618a6){console[_0x453f('3')](_0x2618a6,_0x382063);}finally{_0x1e1be3();}});});}function getAdReward(_0x218b26,_0x407bd4){let _0x3ab506='';let _0x430ef7='';if(_0x218b26==_0x453f('2b')){_0x3ab506=RSA_encryption(_0x453f('2f')+user_ID+_0x453f('5d'));_0x430ef7='\u7b7e\u5230';}else if(_0x218b26==_0x453f('2c')){_0x3ab506=RSA_encryption(_0x453f('2f')+user_ID+_0x453f('5e'));_0x430ef7='\u52a0\u901f';}else if(_0x218b26==_0x453f('27')){_0x3ab506=RSA_encryption(_0x453f('2f')+user_ID+_0x453f('5f'));_0x430ef7=_0x453f('60');}else if(_0x218b26==_0x453f('59')){_0x3ab506=RSA_encryption(_0x453f('61')+_0x407bd4+_0x453f('62')+user_ID+_0x453f('54'));_0x430ef7='\u819c\u62dc';}let _0x12ef60=Post_request(_0x453f('63'),_0x3ab506);return new Promise((_0x40ec32,_0x5335c0)=>{$[_0x453f('32')](_0x12ef60,async(_0x1292e2,_0x574e4b,_0x2cb45c)=>{try{if(_0x1292e2){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('64')+_0x430ef7+_0x453f('65'));subTitle+=_0x453f('29')+$[_0x453f('1c')]+_0x453f('64')+_0x430ef7+_0x453f('65');console[_0x453f('3')](_0x1292e2+'\x0a');}else{console[_0x453f('3')](_0x2cb45c);let _0x2c48d9=JSON[_0x453f('34')](_0x2cb45c);if(_0x2c48d9[_0x453f('9')]==0x1){if(_0x218b26==_0x453f('2b')){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+'\x20'+_0x430ef7+_0x453f('66')+_0x2c48d9[_0x453f('36')][_0x453f('40')][_0x453f('41')][_0x453f('67')]+_0x453f('68')+_0x2c48d9[_0x453f('36')][_0x453f('40')][_0x453f('41')][_0x453f('69')]);}else if(_0x218b26==_0x453f('27')){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+'\x20'+_0x430ef7+_0x453f('6a'));}else if(_0x218b26==_0x453f('2c')){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+'\x20'+_0x430ef7+_0x453f('6b'));}else if(_0x218b26==_0x453f('59')){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+'\x20'+_0x430ef7+_0x453f('6c'));}}else if(_0x2c48d9[_0x453f('9')]==0x4b8){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('64')+_0x430ef7+_0x453f('6d')+_0x2c48d9[_0x453f('3a')]);if(_0x218b26==_0x453f('2c')){await get_variable(_0x453f('2c'));}if(_0x218b26==_0x453f('27')){await get_variable(_0x453f('27'),_0x453f('6e'));}}else if(_0x2c48d9[_0x453f('9')]==0x57f&&_0x218b26==_0x453f('59')){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('64')+_0x430ef7+_0x453f('6d')+_0x2c48d9[_0x453f('3a')]);await get_variable(_0x453f('59'));}else if(_0x2c48d9[_0x453f('3a')][_0x453f('6f')](_0x453f('70'))&&_0x218b26==_0x453f('2c')){await reward_video(view);}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('64')+_0x430ef7+_0x453f('6d')+_0x2c48d9[_0x453f('3a')]);}}}catch(_0x31f21d){console[_0x453f('3')](_0x31f21d,_0x574e4b);}finally{_0x40ec32();}});});}function reward_video(_0x5b74d8){let _0x5ec1dd=video_data[_0x453f('71')](/[\r\n]/g,'');let _0x390fdc={'\x75\x72\x6c':_0x453f('72'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x453f('73'),'Content-Type':_0x453f('74'),'Content-Length':_0x5ec1dd[_0x453f('e')],'Accept-Encoding':_0x453f('75'),'User-Agent':_0x453f('76')},'\x62\x6f\x64\x79':_0x5ec1dd};return new Promise((_0xe809dc,_0x437fcf)=>{$[_0x453f('32')](_0x390fdc,async(_0x5d4559,_0x2099d6,_0x49d70c)=>{try{if(_0x5d4559){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('77'));subTitle+=_0x453f('29')+$[_0x453f('1c')]+_0x453f('77');console[_0x453f('3')](_0x5d4559+'\x0a');}else{if(_0x49d70c[_0x453f('6f')](_0x453f('78'))>-0x1){let _0x4babc6=JSON[_0x453f('34')](_0x49d70c);if(_0x4babc6[_0x453f('78')]==0x3){await getAdReward(_0x5b74d8);}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('79'));}}else{let _0x1467e7=JSON[_0x453f('34')](_0x49d70c);if(_0x1467e7[_0x453f('9')]==0xea67){await getAdReward(_0x5b74d8);}else{console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('79'));}}}}catch(_0x633483){console[_0x453f('3')](_0x633483,_0x2099d6);}finally{_0xe809dc();}});});}function Post_request(_0x4bec43,_0x942a29){return{'\x75\x72\x6c':_0x453f('7a')+_0x4bec43,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x453f('7b'),'Connection':_0x453f('7c'),'Content-Length':_0x942a29[_0x453f('e')],'Pragma':_0x453f('7d'),'Cache-Control':_0x453f('7d'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x453f('7e'),'Accept':_0x453f('7f'),'Origin':_0x453f('80'),'X-Requested-With':_0x453f('81'),'Sec-Fetch-Site':_0x453f('82'),'Sec-Fetch-Mode':_0x453f('83'),'Sec-Fetch-Dest':_0x453f('84'),'Referer':_0x453f('85'),'Accept-Encoding':_0x453f('86'),'Accept-Language':_0x453f('87')},'\x62\x6f\x64\x79':_0x942a29};};function Get_request(_0x333bb9){return{'\x75\x72\x6c':_0x453f('7a')+_0x333bb9,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x453f('7b'),'Connection':_0x453f('7c'),'Content-Length':0x0,'Pragma':_0x453f('7d'),'Cache-Control':_0x453f('7d'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x453f('7e'),'Accept':_0x453f('7f'),'Origin':_0x453f('80'),'X-Requested-With':_0x453f('81'),'Sec-Fetch-Site':_0x453f('82'),'Sec-Fetch-Mode':_0x453f('83'),'Sec-Fetch-Dest':_0x453f('84'),'Referer':_0x453f('85'),'Accept-Encoding':_0x453f('86'),'Accept-Language':_0x453f('87')}};};function RSA_encryption(_0x1b93fa){var _0xb55535=new RSA_js();_0xb55535[_0x453f('88')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x453f('89')});_0xb55535[_0x453f('8a')](_0x453f('8b'),_0x453f('8c'));var _0x3f2421=_0xb55535[_0x453f('8d')](_0x1b93fa,_0x453f('8e'));return _0x3f2421;}function get_variable(_0xb59c2f,_0x38580e){let _0x19b878=$[_0x453f('0')]()?require(_0x453f('2')):'';if(!_0x19b878){console[_0x453f('3')](_0x453f('29')+$[_0x453f('1c')]+_0x453f('8f'));return;}else{_0x19b878=JSON[_0x453f('90')](_0x19b878);}let _0x2b36ea=JSON[_0x453f('90')](current);let _0x9ad845=_0x19b878[_0x453f('91')](0x0,_0x19b878[_0x453f('6f')](_0x2b36ea));let _0x4bf275=_0x19b878[_0x453f('e')]-_0x9ad845[_0x453f('e')]-_0x2b36ea[_0x453f('e')];let _0x2902bb=_0x19b878[_0x453f('91')](_0x19b878[_0x453f('e')]-_0x4bf275,_0x19b878[_0x453f('e')]);let _0x9c3615='';if(_0xb59c2f==_0x453f('2c')){_0x9c3615=JSON[_0x453f('34')](JSON[_0x453f('90')](_0x2b36ea[_0x453f('71')](new RegExp(_0x453f('92'),'\x67\x69'),_0x453f('93'))));}else if(_0xb59c2f==_0x453f('59')){_0x9c3615=JSON[_0x453f('34')](JSON[_0x453f('90')](_0x2b36ea[_0x453f('71')](new RegExp(_0x453f('94'),'\x67\x69'),_0x453f('95'))));}else if(_0xb59c2f==_0x453f('27')&&_0x38580e==_0x453f('6e')){_0x9c3615=JSON[_0x453f('34')](JSON[_0x453f('90')](_0x2b36ea[_0x453f('71')](new RegExp(_0x453f('96'),'\x67\x69'),_0x453f('97'))));}else if(_0xb59c2f==_0x453f('27')&&_0x38580e==_0x453f('28')){_0x9c3615=JSON[_0x453f('34')](JSON[_0x453f('90')](_0x2b36ea[_0x453f('71')](new RegExp(_0x453f('97'),'\x67\x69'),_0x453f('96'))));}fs[_0x453f('98')](_0x453f('2'),_0x453f('99')+_0x9ad845+_0x9c3615+_0x2902bb,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x5930f5){if(_0x5930f5){console[_0x453f('3')](_0x5930f5);}});};_0xod3='jsjiami.com.v6';


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