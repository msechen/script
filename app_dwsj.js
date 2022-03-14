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


const $ = new Env('【闪电世界】版本:22/03/14_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodw='jsjiami.com.v6',_0xodw_=['_0xodw'],_0x3149=[_0xodw,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x75\x72\x6c','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x76\x69\x65\x77','\x73\x69\x67\x6e','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x74\x6f\x75','\x2c\x22\x69\x74\x65\x6d\x49\x64\x22\x3a','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x75\x73\x65\x49\x74\x65\x6d','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u64cd\u4f5c\u6210\u529f\x2c\u6e05\u9664\u4e86\x20','\x69\x74\x65\x6d\x45\x66\x66\x65\x63\x74','\x65\x66\x66\x65\x63\x74\x49\x6e\x64\x65\x78\x73','\x20\u683c\u5b50','\u3011\x3a\x20','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x70\x6f\x69\x6e\x74\x22\x3a\x36\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x20\u4e22\x36\u70b9\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x20\u4e22\x36\u70b9\u9ab0\u5b50\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77\x50\x61\x67\x65','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x61\x62\x6c\x65\x4d\x6f\x6e\x65\x79','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x22\x32\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x77\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u6210\u529f','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u819c\u62dc\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x65\x6e\x64','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x30\x5f\x31\x35\x5f\x35\x20\x28\x45\x72\x67\u00e4\x6e\x7a\x65\x6e\x64\x65\x73\x20\x55\x70\x64\x61\x74\x65\x29\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x32\x2e\x31\x2e\x31\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x34\x45\x33\x30\x34\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u83b7\u53d6\u811a\u672c\u5730\u5740\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7535\u73a9\u4e16\u754c','\x6d\x61\x74\x63\x68','\x2f\x64\x77\x73\x6a\x5f\u7248\u672c\x3a','\x2e\x6a\x73','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x73\x74\x61\x72\x74','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31\x2c','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30\x2c','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31\x2c','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30\x2c','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31\x2c','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30\x2c','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u66f4\u65b0\u6570\u636e\u6210\u529f','\x79\x42\x6e\x6a\x59\x57\x73\x6a\x58\x69\x61\x65\x6d\x4f\x69\x2e\x63\x53\x6f\x70\x6d\x2e\x76\x36\x7a\x44\x62\x52\x3d\x3d'];function _0x5702(_0x1e5d4a,_0x125ab2){_0x1e5d4a=~~'0x'['concat'](_0x1e5d4a['slice'](0x0));var _0x557077=_0x3149[_0x1e5d4a];return _0x557077;};(function(_0x29b189,_0x1d4c8d){var _0x1a7e6e=0x0;for(_0x1d4c8d=_0x29b189['shift'](_0x1a7e6e>>0x2);_0x1d4c8d&&_0x1d4c8d!==(_0x29b189['pop'](_0x1a7e6e>>0x3)+'')['replace'](/[yBnYWXeOSpzDbR=]/g,'');_0x1a7e6e++){_0x1a7e6e=_0x1a7e6e^0xd7264;}}(_0x3149,_0x5702));const RSA_js=$[_0x5702('0')]()?require(_0x5702('1')):'';const fs=$[_0x5702('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x5702('0')]()?require(_0x5702('2')):'';let modify=![];!(async()=>{console[_0x5702('3')](_0x5702('4'));console[_0x5702('3')](_0x5702('5')+new Date(new Date()[_0x5702('6')]()+new Date()[_0x5702('7')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5702('8')]()+_0x5702('9'));if(dwsj_variable[_0x5702('a')]!==0xc8){console[_0x5702('3')](_0x5702('b'));return;}console[_0x5702('3')](_0x5702('c')+dwsj_variable[_0x5702('d')][_0x5702('e')][_0x5702('f')]+_0x5702('10'));subTitle='';for(i=0x0;i<dwsj_variable[_0x5702('d')][_0x5702('e')][_0x5702('f')];i++){current=dwsj_variable[_0x5702('d')][_0x5702('e')][i];video_data=dwsj_variable[_0x5702('d')][_0x5702('e')][i][_0x5702('11')];user_ID=dwsj_variable[_0x5702('d')][_0x5702('e')][i][_0x5702('12')];main_user_ID=dwsj_variable[_0x5702('d')][_0x5702('e')][0x0][_0x5702('12')];dwsj_token=dwsj_variable[_0x5702('d')][_0x5702('e')][i][_0x5702('13')];dwsj_UA=dwsj_variable[_0x5702('d')][_0x5702('e')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x5702('d')][_0x5702('e')][i][_0x5702('14')];dwsj_signtime=dwsj_variable[_0x5702('d')][_0x5702('e')][i][_0x5702('15')];dwsj_UPbuild=dwsj_variable[_0x5702('d')][_0x5702('e')][i][_0x5702('16')];dwsj_transfer=dwsj_variable[_0x5702('d')][_0x5702('e')][i][_0x5702('17')];dwsj_Business=dwsj_variable[_0x5702('d')][_0x5702('e')][i][_0x5702('18')];dwsj_viewnum=dwsj_variable[_0x5702('d')][_0x5702('e')][i][_0x5702('19')];dwsj_action=dwsj_variable[_0x5702('d')][_0x5702('e')][i][_0x5702('1a')];notice=dwsj_variable[_0x5702('d')][_0x5702('1b')][0x0][_0x5702('1c')];update=dwsj_variable[_0x5702('d')][_0x5702('1b')][0x0][_0x5702('1d')];scripturl=dwsj_variable[_0x5702('d')][_0x5702('1b')][0x0][_0x5702('1e')];if(!dwsj_UA){dwsj_UA=_0x5702('1f');}$[_0x5702('20')]=i+0x1;console[_0x5702('3')](_0x5702('21')+$[_0x5702('20')]+_0x5702('22'));await implement();};if(update){await upscript();}if(notify){if(notice){if(subTitle){await notify[_0x5702('23')]($[_0x5702('24')],subTitle);}}}})()[_0x5702('25')](_0x56a89a=>$[_0x5702('26')](_0x56a89a))[_0x5702('27')](()=>$[_0x5702('28')]());async function implement(){let _0x567f28=new Date()[_0x5702('29')]();let _0x4f16e9=new Date()[_0x5702('2a')]();await rollPoint();await getAdReward(_0x5702('2b'));await getRankByType();if(new Date()[_0x5702('29')]()==dwsj_signtime&&new Date()[_0x5702('2a')]()<0xa){await getAdReward(_0x5702('2c'));}await UserWallet();await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x10996f=new Date()[_0x5702('6')]();let _0x45acb1=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('2e')+_0x10996f+'\x7d');let _0x40681b=Post_request(_0x5702('2f'),_0x45acb1);return new Promise((_0x40e55d,_0xdfd168)=>{$[_0x5702('30')](_0x40681b,async(_0x5a3066,_0x45a2f5,_0x5ad7af)=>{try{if(_0x5a3066){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('32'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('32');console[_0x5702('3')](_0x5a3066+'\x0a');}else{let _0x5bb0ea=JSON[_0x5702('33')](_0x5ad7af);if(_0x5bb0ea[_0x5702('a')]==0x1){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('34')+_0x5bb0ea[_0x5702('35')][_0x5702('36')][_0x5702('37')]+_0x5702('38'));await addGoodsBuff();await $[_0x5702('39')](Math[_0x5702('3a')](Math[_0x5702('3b')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x5bb0ea[_0x5702('a')]==0x515){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('3c')+_0x5bb0ea[_0x5702('3d')]);await getAdReward(_0x5702('3e'));await getBuildingEarn();}else if(_0x5bb0ea[_0x5702('a')]==0x517){await rollPoint_6();}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('3c')+_0x5bb0ea[_0x5702('3d')]);}}}catch(_0x14a903){console[_0x5702('3')](_0x14a903,_0x45a2f5);}finally{_0x40e55d();}});});}function useItem(_0x28f899,_0x4592fc){let _0x58a02f=new Date()[_0x5702('6')]();let _0x387044=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('3f')+_0x28f899+_0x5702('40')+_0x58a02f+'\x7d');let _0x541d57=Post_request(_0x5702('41'),_0x387044);return new Promise((_0x27a11b,_0x359ae7)=>{$[_0x5702('30')](_0x541d57,async(_0x548bfe,_0x2d7b2c,_0x116055)=>{try{if(_0x548bfe){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x4592fc+_0x5702('42'));subTitle+=_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x4592fc+_0x5702('42');}else{let _0x45fa49=JSON[_0x5702('33')](_0x116055);if(_0x45fa49[_0x5702('a')]==0x1){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x4592fc+_0x5702('43')+_0x45fa49[_0x5702('35')][_0x5702('44')][_0x5702('45')]+_0x5702('46'));}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x4592fc+_0x5702('47')+_0x45fa49[_0x5702('3d')]);}}}catch(_0x1fcb84){console[_0x5702('3')](_0x1fcb84,_0x2d7b2c);}finally{_0x27a11b();}});});}function addNewBuilding(){let _0x216d6f=new Date()[_0x5702('6')]();let _0x1f4f04=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('40')+_0x216d6f+'\x7d');let _0x36c656=Post_request(_0x5702('48'),_0x1f4f04);return new Promise((_0x2a2a72,_0x3c8cb5)=>{$[_0x5702('30')](_0x36c656,async(_0x563b68,_0x24448f,_0x7e5be)=>{try{if(_0x563b68){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('49'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('49');}else{let _0x2f3d17=JSON[_0x5702('33')](_0x7e5be);if(_0x2f3d17[_0x5702('a')]==0x1){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('4a')+_0x2f3d17[_0x5702('35')][_0x5702('4b')][_0x5702('4c')][_0x5702('4d')]+_0x5702('38'));}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('4e')+_0x2f3d17[_0x5702('3d')]);}}}catch(_0x5ce83d){console[_0x5702('3')](_0x5ce83d,_0x24448f);}finally{_0x2a2a72();}});});}function getBuildingEarn(){let _0x291366=new Date()[_0x5702('6')]();let _0x109f4b=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('40')+_0x291366+'\x7d');let _0x314be3=Post_request(_0x5702('4f'),_0x109f4b);return new Promise((_0x42e61f,_0x28857c)=>{$[_0x5702('30')](_0x314be3,async(_0x4ebedc,_0x5243e0,_0x359a44)=>{try{if(_0x4ebedc){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('50'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('50');}else{let _0x45be62=JSON[_0x5702('33')](_0x359a44);if(_0x45be62[_0x5702('a')]==0x1){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('51')+_0x45be62[_0x5702('35')][_0x5702('4b')][_0x5702('4c')][_0x5702('4d')]+_0x5702('38'));}else if(_0x45be62[_0x5702('a')]==0x4bf||_0x45be62[_0x5702('3d')]==_0x5702('52')){if(dwsj_build){await addNewBuilding();}}else if(_0x45be62[_0x5702('a')]==0x517){await rollPoint_6();}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('53')+_0x45be62[_0x5702('3d')]);}}}catch(_0x4ad0a2){console[_0x5702('3')](_0x4ad0a2,_0x5243e0);}finally{_0x42e61f();}});});}function rollPoint_6(){let _0x3c101a=new Date()[_0x5702('6')]();let _0x16109a=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('54')+_0x3c101a+'\x7d');let _0x22e24f=Post_request(_0x5702('2f'),_0x16109a);return new Promise((_0x321668,_0x1221b7)=>{$[_0x5702('30')](_0x22e24f,async(_0x26b184,_0x579a30,_0x161da3)=>{try{if(_0x26b184){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('32'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('32');console[_0x5702('3')](_0x26b184+'\x0a');}else{let _0x1f71cf=JSON[_0x5702('33')](_0x161da3);if(_0x1f71cf[_0x5702('a')]==0x1){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('55')+_0x1f71cf[_0x5702('35')][_0x5702('36')][_0x5702('37')]+_0x5702('38'));await addGoodsBuff();await $[_0x5702('39')](Math[_0x5702('3a')](Math[_0x5702('3b')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();}else if(_0x1f71cf[_0x5702('a')]==0x515){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('56')+_0x1f71cf[_0x5702('3d')]);}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('56')+_0x1f71cf[_0x5702('3d')]);}}}catch(_0x5a387b){console[_0x5702('3')](_0x5a387b,_0x579a30);}finally{_0x321668();}});});}function buildingLevelUp(){let _0xde9bee=new Date()[_0x5702('6')]();let _0x2a2f18=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('40')+_0xde9bee+'\x7d');let _0x376e88=Post_request(_0x5702('57'),_0x2a2f18);return new Promise((_0x5f533a,_0x265bb2)=>{$[_0x5702('30')](_0x376e88,async(_0x5030fe,_0x327c21,_0x399a74)=>{try{if(_0x5030fe){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('58'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('58');}else{let _0x46e22b=JSON[_0x5702('33')](_0x399a74);if(_0x46e22b[_0x5702('a')]==0x1){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('59')+_0x46e22b[_0x5702('35')][_0x5702('4b')][_0x5702('4c')][_0x5702('4d')]+_0x5702('38'));}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('5a')+_0x46e22b[_0x5702('3d')]);}}}catch(_0x29141e){console[_0x5702('3')](_0x29141e,_0x327c21);}finally{_0x5f533a();}});});}function addGoodsBuff(){let _0x5de40d=new Date()[_0x5702('6')]();let _0x553bdd=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('5b')+_0x5de40d+'\x7d');let _0x224708=Post_request(_0x5702('5c'),_0x553bdd);return new Promise((_0x49e0af,_0xab0345)=>{$[_0x5702('30')](_0x224708,async(_0x432822,_0x500316,_0x4a5efa)=>{try{if(_0x432822){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('5d'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('5d');}else{}}catch(_0x12372b){console[_0x5702('3')](_0x12372b,_0x500316);}finally{_0x49e0af();}});});}function getRankByType(){let _0x4641b5=[_0x5702('4d'),_0x5702('5e'),_0x5702('5e')];let _0x3bb35b='';let _0x19ab6d=_0x4641b5[Math[_0x5702('3a')](Math[_0x5702('3b')]()*_0x4641b5[_0x5702('f')])];if(_0x19ab6d==_0x5702('4d')){_0x3bb35b='\u91d1\u5e01';}else if(_0x19ab6d==_0x5702('5e')){_0x3bb35b='\u58f0\u671b';}if(_0x19ab6d==_0x5702('5e')){_0x3bb35b='\u6536\u76ca';}let _0x43683b=new Date()[_0x5702('6')]();let _0x44844a=RSA_encryption(_0x5702('5f')+_0x19ab6d+_0x5702('60')+user_ID+_0x5702('61')+_0x43683b+'\x7d');let _0x4d1a73=Post_request(_0x5702('62'),_0x44844a);return new Promise((_0x26153b,_0x468e85)=>{$[_0x5702('30')](_0x4d1a73,async(_0x4c209c,_0x4b264d,_0x20842f)=>{try{if(_0x4c209c){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x3bb35b+_0x5702('63'));subTitle+=_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x3bb35b+_0x5702('63');console[_0x5702('3')](_0x4c209c+'\x0a');}else{let _0x1529f5=JSON[_0x5702('33')](_0x20842f);if(_0x1529f5[_0x5702('a')]==0x1){let _0x21d592=['\x30','\x31','\x32','\x33','\x34'];let _0x53e7f2=_0x21d592[Math[_0x5702('3a')](Math[_0x5702('3b')]()*_0x4641b5[_0x5702('f')])];let _0x37a264=_0x1529f5[_0x5702('35')][_0x5702('64')][_0x53e7f2][_0x5702('65')];await getAdReward(_0x5702('66'),_0x37a264);}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x3bb35b+_0x5702('67')+_0x1529f5[_0x5702('3d')]);}}}catch(_0x3008a1){console[_0x5702('3')](_0x3008a1,_0x4b264d);}finally{_0x26153b();}});});}function getMyInfo(){let _0x2523fc=new Date()[_0x5702('6')]();let _0x192167=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('40')+_0x2523fc+'\x7d');let _0x59d9fc=Post_request(_0x5702('68'),_0x192167);return new Promise((_0x19a2d7,_0x368bb2)=>{$[_0x5702('30')](_0x59d9fc,async(_0x21ba36,_0xee0668,_0xa2bc41)=>{try{if(_0x21ba36){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('69'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('69');}else{let _0x157578=JSON[_0x5702('33')](_0xa2bc41);if(_0x157578[_0x5702('a')]==0x1){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('6a')+_0x157578[_0x5702('35')][_0x5702('6b')][_0x5702('65')]+_0x5702('6c')+nick+_0x5702('6d')+userCityLevel+_0x5702('6e')+_0x157578[_0x5702('35')][_0x5702('6f')][_0x5702('70')]+_0x5702('71')+_0x157578[_0x5702('35')][_0x5702('72')][_0x5702('73')]+_0x5702('74')+_0x157578[_0x5702('35')][_0x5702('72')][_0x5702('5e')]+_0x5702('75')+_0x157578[_0x5702('35')][_0x5702('72')][_0x5702('76')]+_0x5702('77')+_0x157578[_0x5702('35')][_0x5702('78')][_0x5702('79')]+order+game+red+platform+AD_profit+No_name+_0x5702('7a')+_0x157578[_0x5702('35')][_0x5702('6b')][_0x5702('7b')]+_0x5702('7c')+_0x157578[_0x5702('35')][_0x5702('72')][_0x5702('4d')]+_0x5702('7d')+_0x157578[_0x5702('35')][_0x5702('72')][_0x5702('7e')]);if($[_0x5702('20')]==0x1){main_user_account=_0x157578[_0x5702('35')][_0x5702('72')][_0x5702('7e')];}else{if(dwsj_transfer){if(_0x157578[_0x5702('35')][_0x5702('72')][_0x5702('4d')]>=0x325aa0){await transferMoney(0x2dc6c0);}}}}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('7f')+_0x157578[_0x5702('3d')]);}}}catch(_0x19c60a){console[_0x5702('3')](_0x19c60a,_0xee0668);}finally{_0x19a2d7();}});});}function getShopInfo(){let _0x511417=new Date()[_0x5702('6')]();let _0x19f50d=RSA_encryption(_0x5702('80')+user_ID+_0x5702('61')+_0x511417+'\x7d');let _0x12ce25=Post_request(_0x5702('81'),_0x19f50d);return new Promise((_0x4201dd,_0xb4ecab)=>{$[_0x5702('30')](_0x12ce25,async(_0x2d5cb2,_0x15c159,_0x426c52)=>{try{nick='';userCityLevel='';if(_0x2d5cb2){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('82'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('82');}else{let _0x30aa78=JSON[_0x5702('33')](_0x426c52);if(_0x30aa78[_0x5702('a')]==0x1){nick=_0x30aa78[_0x5702('35')][_0x5702('83')][_0x5702('84')];userCityLevel=_0x30aa78[_0x5702('35')][_0x5702('83')][_0x5702('85')];}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('86')+_0x30aa78[_0x5702('3d')]);}}}catch(_0x446a36){console[_0x5702('3')](_0x446a36,_0x15c159);}finally{_0x4201dd();}});});}function transferMoney(_0x4b6b67){let _0x248556=new Date()[_0x5702('6')]();let _0x4d18ce=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('87')+main_user_account+_0x5702('88')+_0x4b6b67+_0x5702('40')+_0x248556+'\x7d');let _0x42fb96=Post_request(_0x5702('89'),_0x4d18ce);return new Promise((_0x312d0a,_0x417615)=>{$[_0x5702('30')](_0x42fb96,async(_0x2c209b,_0x3a7d1e,_0xd2a675)=>{try{if(_0x2c209b){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('8a'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('8a');}else{let _0x58f6a7=JSON[_0x5702('33')](_0xd2a675);if(_0x58f6a7[_0x5702('a')]==0x1){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('8b')+_0x58f6a7[_0x5702('3d')]);}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('8b')+_0x58f6a7[_0x5702('3d')]);}}}catch(_0x1714a9){console[_0x5702('3')](_0x1714a9,_0x3a7d1e);}finally{_0x312d0a();}});});}function getUserWallet(){let _0xc848da=new Date()[_0x5702('6')]();let _0x4d5d44=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('8c'));let _0x213eed=Post_request(_0x5702('8d'),_0x4d5d44);return new Promise((_0x371dfb,_0x3edc5d)=>{$[_0x5702('30')](_0x213eed,async(_0x3ecf26,_0x1996a2,_0x893c5)=>{try{if(_0x3ecf26){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('8e'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('8e');}else{let _0x246e89=JSON[_0x5702('33')](_0x893c5);if(_0x246e89[_0x5702('a')]==0x1){for(let _0x3f63f4 of _0x246e89[_0x5702('35')]){if(_0x3f63f4[_0x5702('8f')]==0x0){platform=_0x5702('90')+_0x3f63f4[_0x5702('24')]+'\uff1a'+_0x3f63f4[_0x5702('91')];}if(_0x3f63f4[_0x5702('8f')]==0x1){order=_0x5702('90')+_0x3f63f4[_0x5702('24')]+'\uff1a'+_0x3f63f4[_0x5702('91')];}if(_0x3f63f4[_0x5702('8f')]==0x2){game=_0x5702('90')+_0x3f63f4[_0x5702('24')]+'\uff1a'+_0x3f63f4[_0x5702('91')];}if(_0x3f63f4[_0x5702('8f')]==0x3){red=_0x5702('90')+_0x3f63f4[_0x5702('24')]+'\uff1a'+_0x3f63f4[_0x5702('91')];}}}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('92')+_0x246e89[_0x5702('3d')]);}}}catch(_0x5818c5){console[_0x5702('3')](_0x5818c5,_0x1996a2);}finally{_0x371dfb();}});});}function RevenueDetail(){let _0x76eab4=new Date()[_0x5702('6')]();let _0xd9e824=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('8c'));let _0x3524f4=Post_request(_0x5702('93'),_0xd9e824);return new Promise((_0x4bb38a,_0x89ff3b)=>{$[_0x5702('30')](_0x3524f4,async(_0x34fff8,_0x6057b2,_0x2d4429)=>{try{if(_0x34fff8){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('94'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('94');}else{let _0x19e746=JSON[_0x5702('33')](_0x2d4429);if(_0x19e746[_0x5702('a')]==0x1){AD_profit=_0x5702('95')+_0x19e746[_0x5702('35')][0x0][_0x5702('96')]/0x3e8+_0x5702('97');No_name=_0x5702('98')+_0x19e746[_0x5702('35')][0x0][_0x5702('99')]+_0x5702('9a')+_0x19e746[_0x5702('35')][0x0][_0x5702('9b')]+_0x5702('9c');}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('9d')+_0x19e746[_0x5702('3d')]);}}}catch(_0x533999){console[_0x5702('3')](_0x533999,_0x6057b2);}finally{_0x4bb38a();}});});}function UserWallet(){let _0xa960f7=new Date()[_0x5702('6')]();let _0x5bc4fb=RSA_encryption(_0x5702('9e')+user_ID+_0x5702('9f'));let _0xf93f28=Post_request(_0x5702('a0'),_0x5bc4fb);return new Promise((_0x5730e7,_0x56f22e)=>{$[_0x5702('30')](_0xf93f28,async(_0x25ea46,_0x15d260,_0x102804)=>{try{if(_0x25ea46){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('a1'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('a1');}else{let _0x343c1e=JSON[_0x5702('33')](_0x102804);if(_0x343c1e[_0x5702('a')]==0x1){if(_0x343c1e[_0x5702('35')][_0x5702('a2')]>=0x14){await walletWithdraw();}}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('a3')+_0x343c1e[_0x5702('3d')]);}}}catch(_0x23e7d9){console[_0x5702('3')](_0x23e7d9,_0x15d260);}finally{_0x5730e7();}});});}function walletWithdraw(){let _0x213b1a=new Date()[_0x5702('6')]();let _0xe643bf=RSA_encryption(_0x5702('a4')+user_ID+_0x5702('9f'));let _0x2712f0=Post_request(_0x5702('a5'),_0xe643bf);return new Promise((_0xd8024,_0x436130)=>{$[_0x5702('30')](_0x2712f0,async(_0x431c59,_0x235d57,_0x4a0c90)=>{try{if(_0x431c59){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('a6'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('a6');}else{let _0x4c25e0=JSON[_0x5702('33')](_0x4a0c90);if(_0x4c25e0[_0x5702('a')]==0x1){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('a7'));}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('a8')+_0x4c25e0[_0x5702('3d')]);}}}catch(_0x5e0cfd){console[_0x5702('3')](_0x5e0cfd,_0x235d57);}finally{_0xd8024();}});});}function getAdReward(_0x41c991,_0x2820a4){let _0x533edf=new Date()[_0x5702('6')]();let _0x45635b='';let _0x4cc90c='';if(_0x41c991==_0x5702('2c')){_0x45635b=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('a9')+_0x533edf+'\x7d');_0x4cc90c='\u7b7e\u5230';}else if(_0x41c991==_0x5702('2b')){_0x45635b=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('aa')+_0x533edf+'\x7d');_0x4cc90c='\u52a0\u901f';}else if(_0x41c991==_0x5702('3e')){_0x45635b=RSA_encryption(_0x5702('2d')+user_ID+_0x5702('ab')+_0x533edf+'\x7d');_0x4cc90c=_0x5702('ac');}else if(_0x41c991==_0x5702('66')){_0x45635b=RSA_encryption(_0x5702('ad')+_0x2820a4+_0x5702('ae')+user_ID+_0x5702('61')+_0x533edf+'\x7d');_0x4cc90c='\u819c\u62dc';}let _0x163840=Post_request(_0x5702('af'),_0x45635b);return new Promise((_0x12be38,_0x51c77e)=>{$[_0x5702('30')](_0x163840,async(_0x59837f,_0x5d5151,_0x40bec9)=>{try{if(_0x59837f){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('b0')+_0x4cc90c+_0x5702('b1'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('b0')+_0x4cc90c+_0x5702('b1');console[_0x5702('3')](_0x59837f+'\x0a');}else{let _0x1b2be0=JSON[_0x5702('33')](_0x40bec9);if(_0x1b2be0[_0x5702('a')]==0x1){if(_0x41c991==_0x5702('2c')){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x4cc90c+_0x5702('b2')+_0x1b2be0[_0x5702('35')][_0x5702('4b')][_0x5702('4c')][_0x5702('b3')]+_0x5702('b4')+_0x1b2be0[_0x5702('35')][_0x5702('4b')][_0x5702('4c')][_0x5702('7b')]);}else if(_0x41c991==_0x5702('3e')){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x4cc90c+_0x5702('b5'));}else if(_0x41c991==_0x5702('2b')){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x4cc90c+_0x5702('b6'));}else if(_0x41c991==_0x5702('66')){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+'\x20'+_0x4cc90c+_0x5702('b7'));}}else if(_0x1b2be0[_0x5702('a')]==0x76f&&_0x41c991==_0x5702('2b')){await reward_video(_0x5702('2b'));}else if(_0x1b2be0[_0x5702('a')]==0x4b8){if(_0x41c991==_0x5702('2b')){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('b0')+_0x4cc90c+_0x5702('b8')+_0x1b2be0[_0x5702('3d')]);if(modify){await get_variable(_0x5702('2b'),_0x5702('b9'));}}if(_0x41c991==_0x5702('3e')){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('b0')+_0x4cc90c+_0x5702('b8')+_0x1b2be0[_0x5702('3d')]);if(modify){await get_variable(_0x5702('3e'),_0x5702('b9'));}}}else if(_0x1b2be0[_0x5702('a')]==0x57f&&_0x41c991==_0x5702('66')){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('b0')+_0x4cc90c+_0x5702('b8')+_0x1b2be0[_0x5702('3d')]);if(modify){await get_variable(_0x5702('66'),_0x5702('b9'));}}else if(_0x1b2be0[_0x5702('a')]==0x76f&&_0x41c991==_0x5702('2b')){await reward_video(_0x5702('2b'));}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('b0')+_0x4cc90c+_0x5702('b8')+_0x1b2be0[_0x5702('3d')]);}}}catch(_0x242f40){console[_0x5702('3')](_0x242f40,_0x5d5151);}finally{_0x12be38();}});});}function reward_video(_0x5b842e){if(!video_data){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('ba'));}else{let _0xbc03ed=video_data[_0x5702('bb')](/[\r\n]/g,'');let _0x4f9c95={'\x75\x72\x6c':_0x5702('bc'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5702('bd'),'Content-Type':_0x5702('be'),'Content-Length':_0xbc03ed[_0x5702('f')],'Accept-Encoding':_0x5702('bf'),'User-Agent':_0x5702('c0')},'\x62\x6f\x64\x79':_0xbc03ed};return new Promise((_0x142263,_0x1fdfc7)=>{$[_0x5702('30')](_0x4f9c95,async(_0x4a5b96,_0x5445f9,_0x174ddc)=>{try{if(_0x4a5b96){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('c1'));subTitle+=_0x5702('31')+$[_0x5702('20')]+_0x5702('c1');console[_0x5702('3')](_0x4a5b96+'\x0a');}else{if(_0x174ddc[_0x5702('c2')](_0x5702('c3'))>-0x1){let _0x9edf4e=JSON[_0x5702('33')](_0x174ddc);if(_0x9edf4e[_0x5702('c3')]==0x3){await getAdReward(_0x5b842e);}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('c4'));}}else{let _0x501a8b=JSON[_0x5702('33')](_0x174ddc);if(_0x501a8b[_0x5702('a')]==0xea67){await getAdReward(_0x5b842e);}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('c4'));}}}}catch(_0x23b702){console[_0x5702('3')](_0x23b702,_0x5445f9);}finally{_0x142263();}});});}}function upscript(){let _0x52f4d0={'\x75\x72\x6c':scripturl,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5702('c5'),'User-Agent':_0x5702('c6')}};return new Promise((_0x27be8c,_0x313710)=>{$[_0x5702('c7')](_0x52f4d0,async(_0x5731b3,_0x5ae482,_0x20252d)=>{try{if(_0x5731b3){console[_0x5702('3')](_0x5702('c8'));subTitle+=_0x5702('c8');}else{if(_0x20252d[_0x5702('c2')](_0x5702('c9'))>-0x1){if($[_0x5702('24')][_0x5702('ca')](/版本:(\S*)/)[0x1]!=_0x20252d[_0x5702('ca')](/版本:(\S*)'/)[0x1]){let _0x252dbc=__dirname+(_0x5702('cb')+$[_0x5702('24')][_0x5702('ca')](/版本:(\S*)/)[0x1][_0x5702('bb')](new RegExp('\x2f','\x67\x69'),'\x5f')+_0x5702('cc'));fs[_0x5702('cd')](_0x252dbc,fs[_0x5702('ce')](__filename));fs[_0x5702('cf')](__filename,_0x20252d,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x1e415b){if(_0x1e415b){console[_0x5702('3')](_0x1e415b);}});}}}}catch(_0x83c347){console[_0x5702('3')](_0x83c347,_0x5ae482);}finally{_0x27be8c();}});});}function Post_request(_0x541e25,_0x5d24ed,_0x86c621){let _0x2ab273=_0x5702('d0');return{'\x75\x72\x6c':''+_0x2ab273+_0x541e25,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5702('d1'),'Connection':_0x5702('d2'),'Content-Length':_0x5d24ed[_0x5702('f')],'Pragma':_0x5702('d3'),'Cache-Control':_0x5702('d3'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x5702('d4'),'Accept':_0x5702('d5'),'Origin':_0x5702('d6'),'X-Requested-With':_0x5702('d7'),'Sec-Fetch-Site':_0x5702('d8'),'Sec-Fetch-Mode':_0x5702('d9'),'Sec-Fetch-Dest':_0x5702('da'),'Referer':_0x5702('db'),'Accept-Encoding':_0x5702('dc'),'Accept-Language':_0x5702('dd')},'\x62\x6f\x64\x79':_0x5d24ed};};function Get_request(_0x28af89){let _0x1fd82a=_0x5702('d0');return{'\x75\x72\x6c':''+_0x1fd82a+_0x28af89,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5702('d1'),'Connection':_0x5702('d2'),'Content-Length':0x0,'Pragma':_0x5702('d3'),'Cache-Control':_0x5702('d3'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x5702('d4'),'Accept':_0x5702('d5'),'Origin':_0x5702('d6'),'X-Requested-With':_0x5702('d7'),'Sec-Fetch-Site':_0x5702('d8'),'Sec-Fetch-Mode':_0x5702('d9'),'Sec-Fetch-Dest':_0x5702('da'),'Referer':_0x5702('db'),'Accept-Encoding':_0x5702('dc'),'Accept-Language':_0x5702('dd')}};};function RSA_encryption(_0xa8bf14){var _0x5605f6=new RSA_js();_0x5605f6[_0x5702('de')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x5702('df')});_0x5605f6[_0x5702('e0')](_0x5702('e1'),_0x5702('e2'));var _0x24306c=_0x5605f6[_0x5702('e3')](_0xa8bf14,_0x5702('e4'));return _0x24306c;}function get_variable(_0x52b313,_0x4a20cc){let _0x2176e1=$[_0x5702('0')]()?require(_0x5702('2')):'';if(!_0x2176e1){console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('e5'));return;}else{_0x2176e1=JSON[_0x5702('e6')](_0x2176e1);}let _0x5c2118=JSON[_0x5702('e6')](current);let _0x2e4b44=_0x2176e1[_0x5702('e7')](0x0,_0x2176e1[_0x5702('c2')](_0x5c2118));let _0x4e0541=_0x2176e1[_0x5702('f')]-_0x2e4b44[_0x5702('f')]-_0x5c2118[_0x5702('f')];let _0x4a8681=_0x2176e1[_0x5702('e7')](_0x2176e1[_0x5702('f')]-_0x4e0541,_0x2176e1[_0x5702('f')]);let _0x1a5dac='';if(_0x52b313==_0x5702('2b')&&_0x4a20cc==_0x5702('e8')){_0x1a5dac=JSON[_0x5702('33')](JSON[_0x5702('e6')](_0x5c2118[_0x5702('bb')](new RegExp(_0x5702('e9'),'\x67\x69'),_0x5702('ea'))));}else if(_0x52b313==_0x5702('66')&&_0x4a20cc==_0x5702('e8')){_0x1a5dac=JSON[_0x5702('33')](JSON[_0x5702('e6')](_0x5c2118[_0x5702('bb')](new RegExp(_0x5702('eb'),'\x67\x69'),_0x5702('ec'))));}else if(_0x52b313==_0x5702('3e')&&_0x4a20cc==_0x5702('e8')){_0x1a5dac=JSON[_0x5702('33')](JSON[_0x5702('e6')](_0x5c2118[_0x5702('bb')](new RegExp(_0x5702('ed'),'\x67\x69'),_0x5702('ee'))));}else if(_0x52b313==_0x5702('2b')&&_0x4a20cc==_0x5702('b9')){_0x1a5dac=JSON[_0x5702('33')](JSON[_0x5702('e6')](_0x5c2118[_0x5702('bb')](new RegExp(_0x5702('ea'),'\x67\x69'),_0x5702('e9'))));}else if(_0x52b313==_0x5702('66')&&_0x4a20cc==_0x5702('b9')){_0x1a5dac=JSON[_0x5702('33')](JSON[_0x5702('e6')](_0x5c2118[_0x5702('bb')](new RegExp(_0x5702('ec'),'\x67\x69'),_0x5702('eb'))));}else if(_0x52b313==_0x5702('3e')&&_0x4a20cc==_0x5702('b9')){_0x1a5dac=JSON[_0x5702('33')](JSON[_0x5702('e6')](_0x5c2118[_0x5702('bb')](new RegExp(_0x5702('ee'),'\x67\x69'),_0x5702('ed'))));}fs[_0x5702('cf')](_0x5702('2'),_0x5702('ef')+_0x2e4b44+_0x1a5dac+_0x4a8681,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x155c78){if(_0x155c78){console[_0x5702('3')](_0x155c78);}else{console[_0x5702('3')](_0x5702('31')+$[_0x5702('20')]+_0x5702('f0'));}});};_0xodw='jsjiami.com.v6';



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