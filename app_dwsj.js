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


const $ = new Env('【闪电世界】版本:22/03/11_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodj='jsjiami.com.v6',_0xodj_=['_0xodj'],_0x3e9f=[_0xodj,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x75\x72\x6c','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x76\x69\x65\x77','\x73\x69\x67\x6e','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x75\x73\x65\x72','\x62\x75\x69\x6c\x64\x69\x6e\x67\x42\x75\x66\x66','\x32\x30\x30\x30\x36','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x74\x6f\x75','\x2c\x22\x69\x74\x65\x6d\x49\x64\x22\x3a','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x75\x73\x65\x49\x74\x65\x6d','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u64cd\u4f5c\u6210\u529f\x2c\u6e05\u9664\u4e86\x20','\x69\x74\x65\x6d\x45\x66\x66\x65\x63\x74','\x65\x66\x66\x65\x63\x74\x49\x6e\x64\x65\x78\x73','\x20\u683c\u5b50','\u3011\x3a\x20','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77\x50\x61\x67\x65','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x61\x62\x6c\x65\x4d\x6f\x6e\x65\x79','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x22\x32\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x77\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u6210\u529f','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u819c\u62dc\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x65\x6e\x64','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x30\x5f\x31\x35\x5f\x35\x20\x28\x45\x72\x67\u00e4\x6e\x7a\x65\x6e\x64\x65\x73\x20\x55\x70\x64\x61\x74\x65\x29\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x32\x2e\x31\x2e\x31\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x34\x45\x33\x30\x34\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u83b7\u53d6\u811a\u672c\u5730\u5740\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7535\u73a9\u4e16\u754c','\x6d\x61\x74\x63\x68','\x2f\x64\x77\x73\x6a\x5f\u7248\u672c\x3a','\x2e\x6a\x73','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x73\x74\x61\x72\x74','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30\x2c','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31\x2c','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u66f4\u65b0\u6570\u636e\u6210\u529f','\x6a\x74\x4a\x73\x6a\x69\x61\x58\x58\x48\x6d\x45\x69\x2e\x43\x63\x50\x6f\x6d\x2e\x50\x5a\x79\x64\x75\x49\x76\x36\x62\x45\x47\x3d\x3d'];function _0x4dc6(_0x516d65,_0x59cc06){_0x516d65=~~'0x'['concat'](_0x516d65['slice'](0x0));var _0x42ade7=_0x3e9f[_0x516d65];return _0x42ade7;};(function(_0x4bfbfe,_0x2bf99b){var _0x3b7aad=0x0;for(_0x2bf99b=_0x4bfbfe['shift'](_0x3b7aad>>0x2);_0x2bf99b&&_0x2bf99b!==(_0x4bfbfe['pop'](_0x3b7aad>>0x3)+'')['replace'](/[tJXXHECPPZyduIbEG=]/g,'');_0x3b7aad++){_0x3b7aad=_0x3b7aad^0xd69db;}}(_0x3e9f,_0x4dc6));const RSA_js=$[_0x4dc6('0')]()?require(_0x4dc6('1')):'';const fs=$[_0x4dc6('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x4dc6('0')]()?require(_0x4dc6('2')):'';let modify=![];!(async()=>{console[_0x4dc6('3')](_0x4dc6('4'));console[_0x4dc6('3')](_0x4dc6('5')+new Date(new Date()[_0x4dc6('6')]()+new Date()[_0x4dc6('7')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x4dc6('8')]()+_0x4dc6('9'));if(dwsj_variable[_0x4dc6('a')]!==0xc8){console[_0x4dc6('3')](_0x4dc6('b'));return;}console[_0x4dc6('3')](_0x4dc6('c')+dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][_0x4dc6('f')]+_0x4dc6('10'));subTitle='';for(i=0x0;i<dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][_0x4dc6('f')];i++){current=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i];video_data=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i][_0x4dc6('11')];user_ID=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i][_0x4dc6('12')];main_user_ID=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][0x0][_0x4dc6('12')];dwsj_token=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i][_0x4dc6('13')];dwsj_UA=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i][_0x4dc6('14')];dwsj_signtime=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i][_0x4dc6('15')];dwsj_UPbuild=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i][_0x4dc6('16')];dwsj_transfer=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i][_0x4dc6('17')];dwsj_Business=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i][_0x4dc6('18')];dwsj_viewnum=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i][_0x4dc6('19')];dwsj_action=dwsj_variable[_0x4dc6('d')][_0x4dc6('e')][i][_0x4dc6('1a')];notice=dwsj_variable[_0x4dc6('d')][_0x4dc6('1b')][0x0][_0x4dc6('1c')];update=dwsj_variable[_0x4dc6('d')][_0x4dc6('1b')][0x0][_0x4dc6('1d')];scripturl=dwsj_variable[_0x4dc6('d')][_0x4dc6('1b')][0x0][_0x4dc6('1e')];if(!dwsj_UA){dwsj_UA=_0x4dc6('1f');}$[_0x4dc6('20')]=i+0x1;console[_0x4dc6('3')](_0x4dc6('21')+$[_0x4dc6('20')]+_0x4dc6('22'));await implement();};if(update){await upscript();}if(notify){if(notice){if(subTitle){await notify[_0x4dc6('23')]($[_0x4dc6('24')],subTitle);}}}})()[_0x4dc6('25')](_0x1193d6=>$[_0x4dc6('26')](_0x1193d6))[_0x4dc6('27')](()=>$[_0x4dc6('28')]());async function implement(){let _0x276292=new Date()[_0x4dc6('29')]();let _0xf2bcde=new Date()[_0x4dc6('2a')]();await rollPoint();await getAdReward(_0x4dc6('2b'));await getRankByType();if(new Date()[_0x4dc6('29')]()==dwsj_signtime&&new Date()[_0x4dc6('2a')]()<0xa){await getAdReward(_0x4dc6('2c'));}await UserWallet();await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x445cc2=new Date()[_0x4dc6('6')]();let _0x3892c9=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('2e')+_0x445cc2+'\x7d');let _0x2c9707=Post_request(_0x4dc6('2f'),_0x3892c9);return new Promise((_0xf4707,_0x510957)=>{$[_0x4dc6('30')](_0x2c9707,async(_0x535abe,_0xe89465,_0x653bc5)=>{try{if(_0x535abe){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('32'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('32');console[_0x4dc6('3')](_0x535abe+'\x0a');}else{let _0x4eb199=JSON[_0x4dc6('33')](_0x653bc5);if(_0x4eb199[_0x4dc6('a')]==0x1){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('34')+_0x4eb199[_0x4dc6('35')][_0x4dc6('36')][_0x4dc6('37')]+_0x4dc6('38'));for(let _0x1e4536=0x0;_0x1e4536<0x14;_0x1e4536++){if(_0x4eb199[_0x4dc6('35')][_0x4dc6('39')][_0x4dc6('3a')][_0x1e4536]!==undefined){if(_0x4eb199[_0x4dc6('35')][_0x4dc6('39')][_0x4dc6('3a')][_0x1e4536][_0x4dc6('3b')]==-0x1){await useItem(0x2716,'\u706d\u706b');}}}await addGoodsBuff();await $[_0x4dc6('3c')](Math[_0x4dc6('3d')](Math[_0x4dc6('3e')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x4eb199[_0x4dc6('a')]==0x515){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('3f')+_0x4eb199[_0x4dc6('40')]);await getAdReward(_0x4dc6('41'));await getBuildingEarn();}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('3f')+_0x4eb199[_0x4dc6('40')]);}}}catch(_0x30d372){console[_0x4dc6('3')](_0x30d372,_0xe89465);}finally{_0xf4707();}});});}function useItem(_0x32febd,_0x45a62b){let _0x427cc4=new Date()[_0x4dc6('6')]();let _0x446605=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('42')+_0x32febd+_0x4dc6('43')+_0x427cc4+'\x7d');let _0x803337=Post_request(_0x4dc6('44'),_0x446605);return new Promise((_0x1f056c,_0x59e223)=>{$[_0x4dc6('30')](_0x803337,async(_0x4e1e0a,_0x40b8d2,_0x1ce6a2)=>{try{if(_0x4e1e0a){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x45a62b+_0x4dc6('45'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x45a62b+_0x4dc6('45');}else{let _0x339083=JSON[_0x4dc6('33')](_0x1ce6a2);if(_0x339083[_0x4dc6('a')]==0x1){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x45a62b+_0x4dc6('46')+_0x339083[_0x4dc6('35')][_0x4dc6('47')][_0x4dc6('48')]+_0x4dc6('49'));}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x45a62b+_0x4dc6('4a')+_0x339083[_0x4dc6('40')]);}}}catch(_0x56b961){console[_0x4dc6('3')](_0x56b961,_0x40b8d2);}finally{_0x1f056c();}});});}function addNewBuilding(){let _0x27f360=new Date()[_0x4dc6('6')]();let _0x36c9e3=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('43')+_0x27f360+'\x7d');let _0x485b26=Post_request(_0x4dc6('4b'),_0x36c9e3);return new Promise((_0x50b35c,_0x2ee339)=>{$[_0x4dc6('30')](_0x485b26,async(_0x4e2399,_0x18f990,_0x477e2c)=>{try{if(_0x4e2399){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('4c'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('4c');}else{let _0x2cbd1c=JSON[_0x4dc6('33')](_0x477e2c);if(_0x2cbd1c[_0x4dc6('a')]==0x1){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('4d')+_0x2cbd1c[_0x4dc6('35')][_0x4dc6('4e')][_0x4dc6('4f')][_0x4dc6('50')]+_0x4dc6('38'));}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('51')+_0x2cbd1c[_0x4dc6('40')]);}}}catch(_0x546d4b){console[_0x4dc6('3')](_0x546d4b,_0x18f990);}finally{_0x50b35c();}});});}function getBuildingEarn(){let _0x3eedd9=new Date()[_0x4dc6('6')]();let _0x35d182=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('43')+_0x3eedd9+'\x7d');let _0x315776=Post_request(_0x4dc6('52'),_0x35d182);return new Promise((_0x121d6a,_0x23b013)=>{$[_0x4dc6('30')](_0x315776,async(_0x27b0bb,_0x305cb0,_0x2db466)=>{try{if(_0x27b0bb){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('53'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('53');}else{let _0x45f71a=JSON[_0x4dc6('33')](_0x2db466);if(_0x45f71a[_0x4dc6('a')]==0x1){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('54')+_0x45f71a[_0x4dc6('35')][_0x4dc6('4e')][_0x4dc6('4f')][_0x4dc6('50')]+_0x4dc6('38'));}else if(_0x45f71a[_0x4dc6('a')]==0x4bf||_0x45f71a[_0x4dc6('40')]==_0x4dc6('55')){if(dwsj_build){await addNewBuilding();}}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('56')+_0x45f71a[_0x4dc6('40')]);}}}catch(_0x57e655){console[_0x4dc6('3')](_0x57e655,_0x305cb0);}finally{_0x121d6a();}});});}function buildingLevelUp(){let _0x1a6091=new Date()[_0x4dc6('6')]();let _0x291859=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('43')+_0x1a6091+'\x7d');let _0x14aef0=Post_request(_0x4dc6('57'),_0x291859);return new Promise((_0x483a3c,_0x13d62c)=>{$[_0x4dc6('30')](_0x14aef0,async(_0x2a19ff,_0x58308d,_0x3f4633)=>{try{if(_0x2a19ff){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('58'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('58');}else{let _0x5a7e16=JSON[_0x4dc6('33')](_0x3f4633);if(_0x5a7e16[_0x4dc6('a')]==0x1){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('59')+_0x5a7e16[_0x4dc6('35')][_0x4dc6('4e')][_0x4dc6('4f')][_0x4dc6('50')]+_0x4dc6('38'));}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('5a')+_0x5a7e16[_0x4dc6('40')]);}}}catch(_0x22522b){console[_0x4dc6('3')](_0x22522b,_0x58308d);}finally{_0x483a3c();}});});}function addGoodsBuff(){let _0x1ce6c7=new Date()[_0x4dc6('6')]();let _0x2cfa00=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('5b')+_0x1ce6c7+'\x7d');let _0xffbdb6=Post_request(_0x4dc6('5c'),_0x2cfa00);return new Promise((_0x4e202b,_0x44953f)=>{$[_0x4dc6('30')](_0xffbdb6,async(_0x53b9bc,_0x470360,_0x39f282)=>{try{if(_0x53b9bc){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('5d'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('5d');}else{}}catch(_0x8e6467){console[_0x4dc6('3')](_0x8e6467,_0x470360);}finally{_0x4e202b();}});});}function getRankByType(){let _0x4cce4a=[_0x4dc6('50'),_0x4dc6('5e'),_0x4dc6('5e')];let _0x4500a0='';let _0x2f35ff=_0x4cce4a[Math[_0x4dc6('3d')](Math[_0x4dc6('3e')]()*_0x4cce4a[_0x4dc6('f')])];if(_0x2f35ff==_0x4dc6('50')){_0x4500a0='\u91d1\u5e01';}else if(_0x2f35ff==_0x4dc6('5e')){_0x4500a0='\u58f0\u671b';}if(_0x2f35ff==_0x4dc6('5e')){_0x4500a0='\u6536\u76ca';}let _0x4e937d=new Date()[_0x4dc6('6')]();let _0x538d34=RSA_encryption(_0x4dc6('5f')+_0x2f35ff+_0x4dc6('60')+user_ID+_0x4dc6('61')+_0x4e937d+'\x7d');let _0x21829c=Post_request(_0x4dc6('62'),_0x538d34);return new Promise((_0x3aa114,_0x32ebe4)=>{$[_0x4dc6('30')](_0x21829c,async(_0x3de764,_0x426f01,_0x14dc39)=>{try{if(_0x3de764){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x4500a0+_0x4dc6('63'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x4500a0+_0x4dc6('63');console[_0x4dc6('3')](_0x3de764+'\x0a');}else{let _0x5a57a7=JSON[_0x4dc6('33')](_0x14dc39);if(_0x5a57a7[_0x4dc6('a')]==0x1){let _0x55a024=['\x30','\x31','\x32','\x33','\x34'];let _0x256fa5=_0x55a024[Math[_0x4dc6('3d')](Math[_0x4dc6('3e')]()*_0x4cce4a[_0x4dc6('f')])];let _0x5bc6f5=_0x5a57a7[_0x4dc6('35')][_0x4dc6('64')][_0x256fa5][_0x4dc6('65')];await getAdReward(_0x4dc6('66'),_0x5bc6f5);}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x4500a0+_0x4dc6('67')+_0x5a57a7[_0x4dc6('40')]);}}}catch(_0x3ce2e2){console[_0x4dc6('3')](_0x3ce2e2,_0x426f01);}finally{_0x3aa114();}});});}function getMyInfo(){let _0x31778f=new Date()[_0x4dc6('6')]();let _0x566329=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('43')+_0x31778f+'\x7d');let _0x2efe3b=Post_request(_0x4dc6('68'),_0x566329);return new Promise((_0x46ebf4,_0x265145)=>{$[_0x4dc6('30')](_0x2efe3b,async(_0x4dc2d0,_0x33e4e8,_0x36e4fb)=>{try{if(_0x4dc2d0){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('69'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('69');}else{let _0x53e8f9=JSON[_0x4dc6('33')](_0x36e4fb);if(_0x53e8f9[_0x4dc6('a')]==0x1){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('6a')+_0x53e8f9[_0x4dc6('35')][_0x4dc6('6b')][_0x4dc6('65')]+_0x4dc6('6c')+nick+_0x4dc6('6d')+userCityLevel+_0x4dc6('6e')+_0x53e8f9[_0x4dc6('35')][_0x4dc6('6f')][_0x4dc6('70')]+_0x4dc6('71')+_0x53e8f9[_0x4dc6('35')][_0x4dc6('39')][_0x4dc6('72')]+_0x4dc6('73')+_0x53e8f9[_0x4dc6('35')][_0x4dc6('39')][_0x4dc6('5e')]+_0x4dc6('74')+_0x53e8f9[_0x4dc6('35')][_0x4dc6('39')][_0x4dc6('75')]+_0x4dc6('76')+_0x53e8f9[_0x4dc6('35')][_0x4dc6('77')][_0x4dc6('78')]+order+game+red+platform+AD_profit+No_name+_0x4dc6('79')+_0x53e8f9[_0x4dc6('35')][_0x4dc6('6b')][_0x4dc6('7a')]+_0x4dc6('7b')+_0x53e8f9[_0x4dc6('35')][_0x4dc6('39')][_0x4dc6('50')]+_0x4dc6('7c')+_0x53e8f9[_0x4dc6('35')][_0x4dc6('39')][_0x4dc6('7d')]);if($[_0x4dc6('20')]==0x1){main_user_account=_0x53e8f9[_0x4dc6('35')][_0x4dc6('39')][_0x4dc6('7d')];}else{if(dwsj_transfer){if(_0x53e8f9[_0x4dc6('35')][_0x4dc6('39')][_0x4dc6('50')]>=0x325aa0){await transferMoney(0x2dc6c0);}}}}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('7e')+_0x53e8f9[_0x4dc6('40')]);}}}catch(_0x55f8d6){console[_0x4dc6('3')](_0x55f8d6,_0x33e4e8);}finally{_0x46ebf4();}});});}function getShopInfo(){let _0x19e5a2=new Date()[_0x4dc6('6')]();let _0x135b12=RSA_encryption(_0x4dc6('7f')+user_ID+_0x4dc6('61')+_0x19e5a2+'\x7d');let _0x3f7e67=Post_request(_0x4dc6('80'),_0x135b12);return new Promise((_0x2861df,_0xf3e403)=>{$[_0x4dc6('30')](_0x3f7e67,async(_0x130750,_0x5ea0ef,_0x3e14ee)=>{try{nick='';userCityLevel='';if(_0x130750){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('81'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('81');}else{let _0x431e60=JSON[_0x4dc6('33')](_0x3e14ee);if(_0x431e60[_0x4dc6('a')]==0x1){nick=_0x431e60[_0x4dc6('35')][_0x4dc6('82')][_0x4dc6('83')];userCityLevel=_0x431e60[_0x4dc6('35')][_0x4dc6('82')][_0x4dc6('84')];}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('85')+_0x431e60[_0x4dc6('40')]);}}}catch(_0x1a1431){console[_0x4dc6('3')](_0x1a1431,_0x5ea0ef);}finally{_0x2861df();}});});}function transferMoney(_0x231897){let _0x370aec=new Date()[_0x4dc6('6')]();let _0x16d43b=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('86')+main_user_account+_0x4dc6('87')+_0x231897+_0x4dc6('43')+_0x370aec+'\x7d');let _0x55b516=Post_request(_0x4dc6('88'),_0x16d43b);return new Promise((_0x3165d9,_0x433822)=>{$[_0x4dc6('30')](_0x55b516,async(_0x288c4c,_0x21b109,_0x2bb929)=>{try{if(_0x288c4c){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('89'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('89');}else{let _0x27c6bf=JSON[_0x4dc6('33')](_0x2bb929);if(_0x27c6bf[_0x4dc6('a')]==0x1){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('8a')+_0x27c6bf[_0x4dc6('40')]);}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('8a')+_0x27c6bf[_0x4dc6('40')]);}}}catch(_0x1e27c0){console[_0x4dc6('3')](_0x1e27c0,_0x21b109);}finally{_0x3165d9();}});});}function getUserWallet(){let _0x374428=new Date()[_0x4dc6('6')]();let _0x336e9a=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('8b'));let _0x1682df=Post_request(_0x4dc6('8c'),_0x336e9a);return new Promise((_0x42b427,_0x140902)=>{$[_0x4dc6('30')](_0x1682df,async(_0x23e980,_0x244925,_0xcc5cf1)=>{try{if(_0x23e980){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('8d'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('8d');}else{let _0x49d507=JSON[_0x4dc6('33')](_0xcc5cf1);if(_0x49d507[_0x4dc6('a')]==0x1){for(let _0xd4243c of _0x49d507[_0x4dc6('35')]){if(_0xd4243c[_0x4dc6('8e')]==0x0){platform=_0x4dc6('8f')+_0xd4243c[_0x4dc6('24')]+'\uff1a'+_0xd4243c[_0x4dc6('90')];}if(_0xd4243c[_0x4dc6('8e')]==0x1){order=_0x4dc6('8f')+_0xd4243c[_0x4dc6('24')]+'\uff1a'+_0xd4243c[_0x4dc6('90')];}if(_0xd4243c[_0x4dc6('8e')]==0x2){game=_0x4dc6('8f')+_0xd4243c[_0x4dc6('24')]+'\uff1a'+_0xd4243c[_0x4dc6('90')];}if(_0xd4243c[_0x4dc6('8e')]==0x3){red=_0x4dc6('8f')+_0xd4243c[_0x4dc6('24')]+'\uff1a'+_0xd4243c[_0x4dc6('90')];}}}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('91')+_0x49d507[_0x4dc6('40')]);}}}catch(_0x263fc4){console[_0x4dc6('3')](_0x263fc4,_0x244925);}finally{_0x42b427();}});});}function RevenueDetail(){let _0x577443=new Date()[_0x4dc6('6')]();let _0x11b27c=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('8b'));let _0x4be67e=Post_request(_0x4dc6('92'),_0x11b27c);return new Promise((_0x7a2c13,_0x539d79)=>{$[_0x4dc6('30')](_0x4be67e,async(_0x5dd183,_0x1bb867,_0x2c27f5)=>{try{if(_0x5dd183){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('93'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('93');}else{let _0x291995=JSON[_0x4dc6('33')](_0x2c27f5);if(_0x291995[_0x4dc6('a')]==0x1){AD_profit=_0x4dc6('94')+_0x291995[_0x4dc6('35')][0x0][_0x4dc6('95')]/0x3e8+_0x4dc6('96');No_name=_0x4dc6('97')+_0x291995[_0x4dc6('35')][0x0][_0x4dc6('98')]+_0x4dc6('99')+_0x291995[_0x4dc6('35')][0x0][_0x4dc6('9a')]+_0x4dc6('9b');}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('9c')+_0x291995[_0x4dc6('40')]);}}}catch(_0x58a306){console[_0x4dc6('3')](_0x58a306,_0x1bb867);}finally{_0x7a2c13();}});});}function UserWallet(){let _0x2b7b64=new Date()[_0x4dc6('6')]();let _0x44a907=RSA_encryption(_0x4dc6('9d')+user_ID+_0x4dc6('9e'));let _0x1bd5a5=Post_request(_0x4dc6('9f'),_0x44a907);return new Promise((_0x22560f,_0x592376)=>{$[_0x4dc6('30')](_0x1bd5a5,async(_0x53ef94,_0x5c9f7a,_0x3d040a)=>{try{if(_0x53ef94){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('a0'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('a0');}else{let _0x15a3bf=JSON[_0x4dc6('33')](_0x3d040a);if(_0x15a3bf[_0x4dc6('a')]==0x1){if(_0x15a3bf[_0x4dc6('35')][_0x4dc6('a1')]>=0x14){await walletWithdraw();}}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('a2')+_0x15a3bf[_0x4dc6('40')]);}}}catch(_0x4cb01b){console[_0x4dc6('3')](_0x4cb01b,_0x5c9f7a);}finally{_0x22560f();}});});}function walletWithdraw(){let _0x377f2b=new Date()[_0x4dc6('6')]();let _0x3da929=RSA_encryption(_0x4dc6('a3')+user_ID+_0x4dc6('9e'));let _0x1d6d29=Post_request(_0x4dc6('a4'),_0x3da929);return new Promise((_0x158592,_0x183491)=>{$[_0x4dc6('30')](_0x1d6d29,async(_0x5f4b8c,_0x945733,_0x243aaa)=>{try{if(_0x5f4b8c){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('a5'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('a5');}else{let _0x5c5fcd=JSON[_0x4dc6('33')](_0x243aaa);if(_0x5c5fcd[_0x4dc6('a')]==0x1){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('a6'));}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('a7')+_0x5c5fcd[_0x4dc6('40')]);}}}catch(_0x1d30d0){console[_0x4dc6('3')](_0x1d30d0,_0x945733);}finally{_0x158592();}});});}function getAdReward(_0x446bed,_0x10bff1){let _0x56ddf6=new Date()[_0x4dc6('6')]();let _0x4d2726='';let _0x2af3d6='';if(_0x446bed==_0x4dc6('2c')){_0x4d2726=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('a8')+_0x56ddf6+'\x7d');_0x2af3d6='\u7b7e\u5230';}else if(_0x446bed==_0x4dc6('2b')){_0x4d2726=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('a9')+_0x56ddf6+'\x7d');_0x2af3d6='\u52a0\u901f';}else if(_0x446bed==_0x4dc6('41')){_0x4d2726=RSA_encryption(_0x4dc6('2d')+user_ID+_0x4dc6('aa')+_0x56ddf6+'\x7d');_0x2af3d6=_0x4dc6('ab');}else if(_0x446bed==_0x4dc6('66')){_0x4d2726=RSA_encryption(_0x4dc6('ac')+_0x10bff1+_0x4dc6('ad')+user_ID+_0x4dc6('61')+_0x56ddf6+'\x7d');_0x2af3d6='\u819c\u62dc';}let _0x3a6521=Post_request(_0x4dc6('ae'),_0x4d2726);return new Promise((_0x56665c,_0x9bc6bf)=>{$[_0x4dc6('30')](_0x3a6521,async(_0x557ef5,_0x3133ca,_0x2f083b)=>{try{if(_0x557ef5){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('af')+_0x2af3d6+_0x4dc6('b0'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('af')+_0x2af3d6+_0x4dc6('b0');console[_0x4dc6('3')](_0x557ef5+'\x0a');}else{let _0x3af4e8=JSON[_0x4dc6('33')](_0x2f083b);if(_0x3af4e8[_0x4dc6('a')]==0x1){if(_0x446bed==_0x4dc6('2c')){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x2af3d6+_0x4dc6('b1')+_0x3af4e8[_0x4dc6('35')][_0x4dc6('4e')][_0x4dc6('4f')][_0x4dc6('b2')]+_0x4dc6('b3')+_0x3af4e8[_0x4dc6('35')][_0x4dc6('4e')][_0x4dc6('4f')][_0x4dc6('7a')]);}else if(_0x446bed==_0x4dc6('41')){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x2af3d6+_0x4dc6('b4'));}else if(_0x446bed==_0x4dc6('2b')){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x2af3d6+_0x4dc6('b5'));}else if(_0x446bed==_0x4dc6('66')){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+'\x20'+_0x2af3d6+_0x4dc6('b6'));}}else if(_0x3af4e8[_0x4dc6('a')]==0x76f&&_0x446bed==_0x4dc6('2b')){await reward_video(_0x4dc6('2b'));}else if(_0x3af4e8[_0x4dc6('a')]==0x4b8){if(_0x446bed==_0x4dc6('2b')){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('af')+_0x2af3d6+_0x4dc6('b7')+_0x3af4e8[_0x4dc6('40')]);if(modify){await get_variable(_0x4dc6('2b'),_0x4dc6('b8'));}}if(_0x446bed==_0x4dc6('41')){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('af')+_0x2af3d6+_0x4dc6('b7')+_0x3af4e8[_0x4dc6('40')]);if(modify){await get_variable(_0x4dc6('41'),_0x4dc6('b8'));}}}else if(_0x3af4e8[_0x4dc6('a')]==0x57f&&_0x446bed==_0x4dc6('66')){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('af')+_0x2af3d6+_0x4dc6('b7')+_0x3af4e8[_0x4dc6('40')]);if(modify){await get_variable(_0x4dc6('66'),_0x4dc6('b8'));}}else if(_0x3af4e8[_0x4dc6('a')]==0x76f&&_0x446bed==_0x4dc6('2b')){await reward_video(_0x4dc6('2b'));}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('af')+_0x2af3d6+_0x4dc6('b7')+_0x3af4e8[_0x4dc6('40')]);}}}catch(_0x388af9){console[_0x4dc6('3')](_0x388af9,_0x3133ca);}finally{_0x56665c();}});});}function reward_video(_0x38fe9f){if(!video_data){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('b9'));}else{let _0x2e404c=video_data[_0x4dc6('ba')](/[\r\n]/g,'');let _0x5cf9c5={'\x75\x72\x6c':_0x4dc6('bb'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x4dc6('bc'),'Content-Type':_0x4dc6('bd'),'Content-Length':_0x2e404c[_0x4dc6('f')],'Accept-Encoding':_0x4dc6('be'),'User-Agent':_0x4dc6('bf')},'\x62\x6f\x64\x79':_0x2e404c};return new Promise((_0x20f77e,_0x1f015b)=>{$[_0x4dc6('30')](_0x5cf9c5,async(_0x57be8f,_0x24a376,_0x21a458)=>{try{if(_0x57be8f){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('c0'));subTitle+=_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('c0');console[_0x4dc6('3')](_0x57be8f+'\x0a');}else{if(_0x21a458[_0x4dc6('c1')](_0x4dc6('c2'))>-0x1){let _0x342fef=JSON[_0x4dc6('33')](_0x21a458);if(_0x342fef[_0x4dc6('c2')]==0x3){await getAdReward(_0x38fe9f);}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('c3'));}}else{let _0x569a65=JSON[_0x4dc6('33')](_0x21a458);if(_0x569a65[_0x4dc6('a')]==0xea67){await getAdReward(_0x38fe9f);}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('c3'));}}}}catch(_0x273587){console[_0x4dc6('3')](_0x273587,_0x24a376);}finally{_0x20f77e();}});});}}function upscript(){let _0xd54f32={'\x75\x72\x6c':scripturl,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x4dc6('c4'),'User-Agent':_0x4dc6('c5')}};return new Promise((_0x28234a,_0x5ab206)=>{$[_0x4dc6('c6')](_0xd54f32,async(_0x2163aa,_0x312b17,_0x2bbf4e)=>{try{if(_0x2163aa){console[_0x4dc6('3')](_0x4dc6('c7'));subTitle+=_0x4dc6('c7');}else{if(_0x2bbf4e[_0x4dc6('c1')](_0x4dc6('c8'))>-0x1){if($[_0x4dc6('24')][_0x4dc6('c9')](/版本:(\S*)/)[0x1]!=_0x2bbf4e[_0x4dc6('c9')](/版本:(\S*)'/)[0x1]){let _0x506c68=__dirname+(_0x4dc6('ca')+$[_0x4dc6('24')][_0x4dc6('c9')](/版本:(\S*)/)[0x1][_0x4dc6('ba')](new RegExp('\x2f','\x67\x69'),'\x5f')+_0x4dc6('cb'));fs[_0x4dc6('cc')](_0x506c68,fs[_0x4dc6('cd')](__filename));fs[_0x4dc6('ce')](__filename,_0x2bbf4e,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x93761e){if(_0x93761e){console[_0x4dc6('3')](_0x93761e);}});}}}}catch(_0xf0e369){console[_0x4dc6('3')](_0xf0e369,_0x312b17);}finally{_0x28234a();}});});}function Post_request(_0x164b6f,_0x196c1b,_0x339f26){let _0x4c5aa8=_0x4dc6('cf');return{'\x75\x72\x6c':''+_0x4c5aa8+_0x164b6f,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x4dc6('d0'),'Connection':_0x4dc6('d1'),'Content-Length':_0x196c1b[_0x4dc6('f')],'Pragma':_0x4dc6('d2'),'Cache-Control':_0x4dc6('d2'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x4dc6('d3'),'Accept':_0x4dc6('d4'),'Origin':_0x4dc6('d5'),'X-Requested-With':_0x4dc6('d6'),'Sec-Fetch-Site':_0x4dc6('d7'),'Sec-Fetch-Mode':_0x4dc6('d8'),'Sec-Fetch-Dest':_0x4dc6('d9'),'Referer':_0x4dc6('da'),'Accept-Encoding':_0x4dc6('db'),'Accept-Language':_0x4dc6('dc')},'\x62\x6f\x64\x79':_0x196c1b};};function Get_request(_0x1c90ae){let _0x583a4b=_0x4dc6('cf');return{'\x75\x72\x6c':''+_0x583a4b+_0x1c90ae,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x4dc6('d0'),'Connection':_0x4dc6('d1'),'Content-Length':0x0,'Pragma':_0x4dc6('d2'),'Cache-Control':_0x4dc6('d2'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x4dc6('d3'),'Accept':_0x4dc6('d4'),'Origin':_0x4dc6('d5'),'X-Requested-With':_0x4dc6('d6'),'Sec-Fetch-Site':_0x4dc6('d7'),'Sec-Fetch-Mode':_0x4dc6('d8'),'Sec-Fetch-Dest':_0x4dc6('d9'),'Referer':_0x4dc6('da'),'Accept-Encoding':_0x4dc6('db'),'Accept-Language':_0x4dc6('dc')}};};function RSA_encryption(_0x47dace){var _0x33ea22=new RSA_js();_0x33ea22[_0x4dc6('dd')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x4dc6('de')});_0x33ea22[_0x4dc6('df')](_0x4dc6('e0'),_0x4dc6('e1'));var _0x3aa820=_0x33ea22[_0x4dc6('e2')](_0x47dace,_0x4dc6('e3'));return _0x3aa820;}function get_variable(_0x435b7f,_0x4bd39b){let _0x3ae86d=$[_0x4dc6('0')]()?require(_0x4dc6('2')):'';if(!_0x3ae86d){console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('e4'));return;}else{_0x3ae86d=JSON[_0x4dc6('e5')](_0x3ae86d);}let _0x569493=JSON[_0x4dc6('e5')](current);let _0x4ce384=_0x3ae86d[_0x4dc6('e6')](0x0,_0x3ae86d[_0x4dc6('c1')](_0x569493));let _0xee6902=_0x3ae86d[_0x4dc6('f')]-_0x4ce384[_0x4dc6('f')]-_0x569493[_0x4dc6('f')];let _0x1147a6=_0x3ae86d[_0x4dc6('e6')](_0x3ae86d[_0x4dc6('f')]-_0xee6902,_0x3ae86d[_0x4dc6('f')]);let _0x11238b='';if(_0x435b7f==_0x4dc6('2b')&&_0x4bd39b==_0x4dc6('e7')){_0x11238b=JSON[_0x4dc6('33')](JSON[_0x4dc6('e5')](_0x569493[_0x4dc6('ba')](new RegExp(_0x4dc6('e8'),'\x67\x69'),_0x4dc6('e9'))));}else if(_0x435b7f==_0x4dc6('66')&&_0x4bd39b==_0x4dc6('e7')){_0x11238b=JSON[_0x4dc6('33')](JSON[_0x4dc6('e5')](_0x569493[_0x4dc6('ba')](new RegExp(_0x4dc6('ea'),'\x67\x69'),_0x4dc6('eb'))));}else if(_0x435b7f==_0x4dc6('41')&&_0x4bd39b==_0x4dc6('e7')){_0x11238b=JSON[_0x4dc6('33')](JSON[_0x4dc6('e5')](_0x569493[_0x4dc6('ba')](new RegExp(_0x4dc6('ec'),'\x67\x69'),_0x4dc6('ed'))));}else if(_0x435b7f==_0x4dc6('2b')&&_0x4bd39b==_0x4dc6('b8')){_0x11238b=JSON[_0x4dc6('33')](JSON[_0x4dc6('e5')](_0x569493[_0x4dc6('ba')](new RegExp(_0x4dc6('ee'),'\x67\x69'),_0x4dc6('ef'))));}else if(_0x435b7f==_0x4dc6('66')&&_0x4bd39b==_0x4dc6('b8')){_0x11238b=JSON[_0x4dc6('33')](JSON[_0x4dc6('e5')](_0x569493[_0x4dc6('ba')](new RegExp(_0x4dc6('eb'),'\x67\x69'),_0x4dc6('ea'))));}else if(_0x435b7f==_0x4dc6('41')&&_0x4bd39b==_0x4dc6('b8')){_0x11238b=JSON[_0x4dc6('33')](JSON[_0x4dc6('e5')](_0x569493[_0x4dc6('ba')](new RegExp(_0x4dc6('ed'),'\x67\x69'),_0x4dc6('ec'))));}fs[_0x4dc6('ce')](_0x4dc6('2'),_0x4dc6('f0')+_0x4ce384+_0x11238b+_0x1147a6,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x1cee98){if(_0x1cee98){console[_0x4dc6('3')](_0x1cee98);}else{console[_0x4dc6('3')](_0x4dc6('31')+$[_0x4dc6('20')]+_0x4dc6('f1'));}});};_0xodj='jsjiami.com.v6';



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