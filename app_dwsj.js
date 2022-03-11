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


var _0xodr='jsjiami.com.v6',_0xodr_=['_0xodr'],_0x3c13=[_0xodr,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x75\x72\x6c','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x76\x69\x65\x77','\x73\x69\x67\x6e','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x74\x6f\x75','\x2c\x22\x69\x74\x65\x6d\x49\x64\x22\x3a','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x75\x73\x65\x49\x74\x65\x6d','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u64cd\u4f5c\u6210\u529f\x2c\u6e05\u9664\u4e86\x20','\x69\x74\x65\x6d\x45\x66\x66\x65\x63\x74','\x65\x66\x66\x65\x63\x74\x49\x6e\x64\x65\x78\x73','\x20\u683c\u5b50','\u3011\x3a\x20','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77\x50\x61\x67\x65','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x61\x62\x6c\x65\x4d\x6f\x6e\x65\x79','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x22\x32\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x77\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u6210\u529f','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u819c\u62dc\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x65\x6e\x64','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x30\x5f\x31\x35\x5f\x35\x20\x28\x45\x72\x67\u00e4\x6e\x7a\x65\x6e\x64\x65\x73\x20\x55\x70\x64\x61\x74\x65\x29\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x32\x2e\x31\x2e\x31\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x34\x45\x33\x30\x34\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u83b7\u53d6\u811a\u672c\u5730\u5740\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7535\u73a9\u4e16\u754c','\x6d\x61\x74\x63\x68','\x2f\x64\x77\x73\x6a\x5f\u7248\u672c\x3a','\x2e\x6a\x73','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x73\x74\x61\x72\x74','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30\x2c','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31\x2c','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u66f4\u65b0\u6570\u636e\u6210\u529f','\x6a\x73\x78\x6a\x69\x61\x6d\x69\x2e\x63\x6f\x6d\x79\x2e\x42\x47\x76\x36\x43\x7a\x74\x56\x59\x43\x70\x64\x51\x6c\x44\x6b\x64\x3d\x3d'];function _0x29ab(_0x2d45ba,_0x1b9410){_0x2d45ba=~~'0x'['concat'](_0x2d45ba['slice'](0x0));var _0x3516a5=_0x3c13[_0x2d45ba];return _0x3516a5;};(function(_0x46aae6,_0x4bdeb3){var _0x1e7d66=0x0;for(_0x4bdeb3=_0x46aae6['shift'](_0x1e7d66>>0x2);_0x4bdeb3&&_0x4bdeb3!==(_0x46aae6['pop'](_0x1e7d66>>0x3)+'')['replace'](/[xyBGCztVYCpdQlDkd=]/g,'');_0x1e7d66++){_0x1e7d66=_0x1e7d66^0xd6b73;}}(_0x3c13,_0x29ab));const RSA_js=$[_0x29ab('0')]()?require(_0x29ab('1')):'';const fs=$[_0x29ab('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x29ab('0')]()?require(_0x29ab('2')):'';let modify=![];!(async()=>{console[_0x29ab('3')](_0x29ab('4'));console[_0x29ab('3')](_0x29ab('5')+new Date(new Date()[_0x29ab('6')]()+new Date()[_0x29ab('7')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x29ab('8')]()+_0x29ab('9'));if(dwsj_variable[_0x29ab('a')]!==0xc8){console[_0x29ab('3')](_0x29ab('b'));return;}console[_0x29ab('3')](_0x29ab('c')+dwsj_variable[_0x29ab('d')][_0x29ab('e')][_0x29ab('f')]+_0x29ab('10'));subTitle='';for(i=0x0;i<dwsj_variable[_0x29ab('d')][_0x29ab('e')][_0x29ab('f')];i++){current=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i];video_data=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i][_0x29ab('11')];user_ID=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i][_0x29ab('12')];main_user_ID=dwsj_variable[_0x29ab('d')][_0x29ab('e')][0x0][_0x29ab('12')];dwsj_token=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i][_0x29ab('13')];dwsj_UA=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i][_0x29ab('14')];dwsj_signtime=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i][_0x29ab('15')];dwsj_UPbuild=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i][_0x29ab('16')];dwsj_transfer=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i][_0x29ab('17')];dwsj_Business=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i][_0x29ab('18')];dwsj_viewnum=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i][_0x29ab('19')];dwsj_action=dwsj_variable[_0x29ab('d')][_0x29ab('e')][i][_0x29ab('1a')];notice=dwsj_variable[_0x29ab('d')][_0x29ab('1b')][0x0][_0x29ab('1c')];update=dwsj_variable[_0x29ab('d')][_0x29ab('1b')][0x0][_0x29ab('1d')];scripturl=dwsj_variable[_0x29ab('d')][_0x29ab('1b')][0x0][_0x29ab('1e')];if(!dwsj_UA){dwsj_UA=_0x29ab('1f');}$[_0x29ab('20')]=i+0x1;console[_0x29ab('3')](_0x29ab('21')+$[_0x29ab('20')]+_0x29ab('22'));await implement();};if(update){await upscript();}if(notify){if(notice){if(subTitle){await notify[_0x29ab('23')]($[_0x29ab('24')],subTitle);}}}})()[_0x29ab('25')](_0x2f5b53=>$[_0x29ab('26')](_0x2f5b53))[_0x29ab('27')](()=>$[_0x29ab('28')]());async function implement(){let _0x3bfce=new Date()[_0x29ab('29')]();let _0x3569f9=new Date()[_0x29ab('2a')]();await rollPoint();await getAdReward(_0x29ab('2b'));await getRankByType();if(new Date()[_0x29ab('29')]()==dwsj_signtime&&new Date()[_0x29ab('2a')]()<0xa){await getAdReward(_0x29ab('2c'));}await UserWallet();await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x4ecb96=new Date()[_0x29ab('6')]();let _0xbc9453=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('2e')+_0x4ecb96+'\x7d');let _0x30f9ff=Post_request(_0x29ab('2f'),_0xbc9453);return new Promise((_0x49bcb1,_0x4375c7)=>{$[_0x29ab('30')](_0x30f9ff,async(_0x4f892f,_0x316f7b,_0x4fa276)=>{try{if(_0x4f892f){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('32'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('32');console[_0x29ab('3')](_0x4f892f+'\x0a');}else{let _0x332ba3=JSON[_0x29ab('33')](_0x4fa276);if(_0x332ba3[_0x29ab('a')]==0x1){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('34')+_0x332ba3[_0x29ab('35')][_0x29ab('36')][_0x29ab('37')]+_0x29ab('38'));await addGoodsBuff();await $[_0x29ab('39')](Math[_0x29ab('3a')](Math[_0x29ab('3b')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x332ba3[_0x29ab('a')]==0x515){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('3c')+_0x332ba3[_0x29ab('3d')]);await getAdReward(_0x29ab('3e'));await getBuildingEarn();}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('3c')+_0x332ba3[_0x29ab('3d')]);}}}catch(_0x59e0a4){console[_0x29ab('3')](_0x59e0a4,_0x316f7b);}finally{_0x49bcb1();}});});}function useItem(_0x55b3d8,_0x59d544){let _0x44816d=new Date()[_0x29ab('6')]();let _0x1f073d=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('3f')+_0x55b3d8+_0x29ab('40')+_0x44816d+'\x7d');let _0x54c0f7=Post_request(_0x29ab('41'),_0x1f073d);return new Promise((_0x118249,_0x53342e)=>{$[_0x29ab('30')](_0x54c0f7,async(_0x502e05,_0xe935a8,_0x4b37e0)=>{try{if(_0x502e05){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0x59d544+_0x29ab('42'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0x59d544+_0x29ab('42');}else{let _0x1f5c71=JSON[_0x29ab('33')](_0x4b37e0);if(_0x1f5c71[_0x29ab('a')]==0x1){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0x59d544+_0x29ab('43')+_0x1f5c71[_0x29ab('35')][_0x29ab('44')][_0x29ab('45')]+_0x29ab('46'));}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0x59d544+_0x29ab('47')+_0x1f5c71[_0x29ab('3d')]);}}}catch(_0xd27b5d){console[_0x29ab('3')](_0xd27b5d,_0xe935a8);}finally{_0x118249();}});});}function addNewBuilding(){let _0x13ca33=new Date()[_0x29ab('6')]();let _0x5d30c8=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('40')+_0x13ca33+'\x7d');let _0x240669=Post_request(_0x29ab('48'),_0x5d30c8);return new Promise((_0x54d398,_0x1b5266)=>{$[_0x29ab('30')](_0x240669,async(_0x2b77d5,_0x564203,_0x54f288)=>{try{if(_0x2b77d5){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('49'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('49');}else{let _0x1324b3=JSON[_0x29ab('33')](_0x54f288);if(_0x1324b3[_0x29ab('a')]==0x1){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('4a')+_0x1324b3[_0x29ab('35')][_0x29ab('4b')][_0x29ab('4c')][_0x29ab('4d')]+_0x29ab('38'));}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('4e')+_0x1324b3[_0x29ab('3d')]);}}}catch(_0x9c8b84){console[_0x29ab('3')](_0x9c8b84,_0x564203);}finally{_0x54d398();}});});}function getBuildingEarn(){let _0x1e5b4f=new Date()[_0x29ab('6')]();let _0x188a24=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('40')+_0x1e5b4f+'\x7d');let _0x5aaff7=Post_request(_0x29ab('4f'),_0x188a24);return new Promise((_0x5c0702,_0x2183f0)=>{$[_0x29ab('30')](_0x5aaff7,async(_0x2e13d0,_0x410aab,_0x58c523)=>{try{if(_0x2e13d0){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('50'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('50');}else{let _0x466df7=JSON[_0x29ab('33')](_0x58c523);if(_0x466df7[_0x29ab('a')]==0x1){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('51')+_0x466df7[_0x29ab('35')][_0x29ab('4b')][_0x29ab('4c')][_0x29ab('4d')]+_0x29ab('38'));}else if(_0x466df7[_0x29ab('a')]==0x4bf||_0x466df7[_0x29ab('3d')]==_0x29ab('52')){if(dwsj_build){await addNewBuilding();}}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('53')+_0x466df7[_0x29ab('3d')]);}}}catch(_0x556200){console[_0x29ab('3')](_0x556200,_0x410aab);}finally{_0x5c0702();}});});}function buildingLevelUp(){let _0x1d02fd=new Date()[_0x29ab('6')]();let _0x1a1d64=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('40')+_0x1d02fd+'\x7d');let _0x2f54a9=Post_request(_0x29ab('54'),_0x1a1d64);return new Promise((_0xe97d7f,_0x591d99)=>{$[_0x29ab('30')](_0x2f54a9,async(_0xedf6e8,_0x395f06,_0x421a89)=>{try{if(_0xedf6e8){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('55'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('55');}else{let _0x31c5e9=JSON[_0x29ab('33')](_0x421a89);if(_0x31c5e9[_0x29ab('a')]==0x1){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('56')+_0x31c5e9[_0x29ab('35')][_0x29ab('4b')][_0x29ab('4c')][_0x29ab('4d')]+_0x29ab('38'));}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('57')+_0x31c5e9[_0x29ab('3d')]);}}}catch(_0x13088f){console[_0x29ab('3')](_0x13088f,_0x395f06);}finally{_0xe97d7f();}});});}function addGoodsBuff(){let _0x10c00f=new Date()[_0x29ab('6')]();let _0x3b687f=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('58')+_0x10c00f+'\x7d');let _0x3e808d=Post_request(_0x29ab('59'),_0x3b687f);return new Promise((_0x275101,_0x2a3b84)=>{$[_0x29ab('30')](_0x3e808d,async(_0x376b12,_0x1d9c6b,_0x2ae2cf)=>{try{if(_0x376b12){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('5a'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('5a');}else{}}catch(_0x53b4c1){console[_0x29ab('3')](_0x53b4c1,_0x1d9c6b);}finally{_0x275101();}});});}function getRankByType(){let _0x271d70=[_0x29ab('4d'),_0x29ab('5b'),_0x29ab('5b')];let _0xae913a='';let _0x446d0b=_0x271d70[Math[_0x29ab('3a')](Math[_0x29ab('3b')]()*_0x271d70[_0x29ab('f')])];if(_0x446d0b==_0x29ab('4d')){_0xae913a='\u91d1\u5e01';}else if(_0x446d0b==_0x29ab('5b')){_0xae913a='\u58f0\u671b';}if(_0x446d0b==_0x29ab('5b')){_0xae913a='\u6536\u76ca';}let _0x3d50da=new Date()[_0x29ab('6')]();let _0x46e546=RSA_encryption(_0x29ab('5c')+_0x446d0b+_0x29ab('5d')+user_ID+_0x29ab('5e')+_0x3d50da+'\x7d');let _0x483a09=Post_request(_0x29ab('5f'),_0x46e546);return new Promise((_0x806b13,_0x3a4c80)=>{$[_0x29ab('30')](_0x483a09,async(_0x4821d6,_0x560a93,_0x221d7f)=>{try{if(_0x4821d6){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0xae913a+_0x29ab('60'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0xae913a+_0x29ab('60');console[_0x29ab('3')](_0x4821d6+'\x0a');}else{let _0xe032b5=JSON[_0x29ab('33')](_0x221d7f);if(_0xe032b5[_0x29ab('a')]==0x1){let _0x3172a=['\x30','\x31','\x32','\x33','\x34'];let _0x27bc56=_0x3172a[Math[_0x29ab('3a')](Math[_0x29ab('3b')]()*_0x271d70[_0x29ab('f')])];let _0x34b463=_0xe032b5[_0x29ab('35')][_0x29ab('61')][_0x27bc56][_0x29ab('62')];await getAdReward(_0x29ab('63'),_0x34b463);}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0xae913a+_0x29ab('64')+_0xe032b5[_0x29ab('3d')]);}}}catch(_0x3e5d94){console[_0x29ab('3')](_0x3e5d94,_0x560a93);}finally{_0x806b13();}});});}function getMyInfo(){let _0x80667a=new Date()[_0x29ab('6')]();let _0x45eb93=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('40')+_0x80667a+'\x7d');let _0xeaab1e=Post_request(_0x29ab('65'),_0x45eb93);return new Promise((_0x14dd3f,_0x4e4ae5)=>{$[_0x29ab('30')](_0xeaab1e,async(_0x3718a2,_0x2fa239,_0xbdda00)=>{try{if(_0x3718a2){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('66'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('66');}else{let _0x77500f=JSON[_0x29ab('33')](_0xbdda00);if(_0x77500f[_0x29ab('a')]==0x1){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('67')+_0x77500f[_0x29ab('35')][_0x29ab('68')][_0x29ab('62')]+_0x29ab('69')+nick+_0x29ab('6a')+userCityLevel+_0x29ab('6b')+_0x77500f[_0x29ab('35')][_0x29ab('6c')][_0x29ab('6d')]+_0x29ab('6e')+_0x77500f[_0x29ab('35')][_0x29ab('6f')][_0x29ab('70')]+_0x29ab('71')+_0x77500f[_0x29ab('35')][_0x29ab('6f')][_0x29ab('5b')]+_0x29ab('72')+_0x77500f[_0x29ab('35')][_0x29ab('6f')][_0x29ab('73')]+_0x29ab('74')+_0x77500f[_0x29ab('35')][_0x29ab('75')][_0x29ab('76')]+order+game+red+platform+AD_profit+No_name+_0x29ab('77')+_0x77500f[_0x29ab('35')][_0x29ab('68')][_0x29ab('78')]+_0x29ab('79')+_0x77500f[_0x29ab('35')][_0x29ab('6f')][_0x29ab('4d')]+_0x29ab('7a')+_0x77500f[_0x29ab('35')][_0x29ab('6f')][_0x29ab('7b')]);if($[_0x29ab('20')]==0x1){main_user_account=_0x77500f[_0x29ab('35')][_0x29ab('6f')][_0x29ab('7b')];}else{if(dwsj_transfer){if(_0x77500f[_0x29ab('35')][_0x29ab('6f')][_0x29ab('4d')]>=0x325aa0){await transferMoney(0x2dc6c0);}}}}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('7c')+_0x77500f[_0x29ab('3d')]);}}}catch(_0x596e46){console[_0x29ab('3')](_0x596e46,_0x2fa239);}finally{_0x14dd3f();}});});}function getShopInfo(){let _0x3e6560=new Date()[_0x29ab('6')]();let _0x130a55=RSA_encryption(_0x29ab('7d')+user_ID+_0x29ab('5e')+_0x3e6560+'\x7d');let _0x93cfa3=Post_request(_0x29ab('7e'),_0x130a55);return new Promise((_0x200d59,_0x32210b)=>{$[_0x29ab('30')](_0x93cfa3,async(_0x92ec2a,_0x30e08a,_0x37bb4d)=>{try{nick='';userCityLevel='';if(_0x92ec2a){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('7f'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('7f');}else{let _0x36aa71=JSON[_0x29ab('33')](_0x37bb4d);if(_0x36aa71[_0x29ab('a')]==0x1){nick=_0x36aa71[_0x29ab('35')][_0x29ab('80')][_0x29ab('81')];userCityLevel=_0x36aa71[_0x29ab('35')][_0x29ab('80')][_0x29ab('82')];}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('83')+_0x36aa71[_0x29ab('3d')]);}}}catch(_0x5b6930){console[_0x29ab('3')](_0x5b6930,_0x30e08a);}finally{_0x200d59();}});});}function transferMoney(_0x496bd6){let _0xd84774=new Date()[_0x29ab('6')]();let _0x1bc466=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('84')+main_user_account+_0x29ab('85')+_0x496bd6+_0x29ab('40')+_0xd84774+'\x7d');let _0x3697cf=Post_request(_0x29ab('86'),_0x1bc466);return new Promise((_0x1ca78f,_0x4b8228)=>{$[_0x29ab('30')](_0x3697cf,async(_0x315dc3,_0x6fe150,_0x3befa0)=>{try{if(_0x315dc3){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('87'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('87');}else{let _0x23281c=JSON[_0x29ab('33')](_0x3befa0);if(_0x23281c[_0x29ab('a')]==0x1){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('88')+_0x23281c[_0x29ab('3d')]);}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('88')+_0x23281c[_0x29ab('3d')]);}}}catch(_0x388beb){console[_0x29ab('3')](_0x388beb,_0x6fe150);}finally{_0x1ca78f();}});});}function getUserWallet(){let _0x518f52=new Date()[_0x29ab('6')]();let _0x13a791=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('89'));let _0x4422fb=Post_request(_0x29ab('8a'),_0x13a791);return new Promise((_0xdbb586,_0x5311ff)=>{$[_0x29ab('30')](_0x4422fb,async(_0x54f327,_0x81c383,_0x499d71)=>{try{if(_0x54f327){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('8b'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('8b');}else{let _0x3f565a=JSON[_0x29ab('33')](_0x499d71);if(_0x3f565a[_0x29ab('a')]==0x1){for(let _0x9d41e of _0x3f565a[_0x29ab('35')]){if(_0x9d41e[_0x29ab('8c')]==0x0){platform=_0x29ab('8d')+_0x9d41e[_0x29ab('24')]+'\uff1a'+_0x9d41e[_0x29ab('8e')];}if(_0x9d41e[_0x29ab('8c')]==0x1){order=_0x29ab('8d')+_0x9d41e[_0x29ab('24')]+'\uff1a'+_0x9d41e[_0x29ab('8e')];}if(_0x9d41e[_0x29ab('8c')]==0x2){game=_0x29ab('8d')+_0x9d41e[_0x29ab('24')]+'\uff1a'+_0x9d41e[_0x29ab('8e')];}if(_0x9d41e[_0x29ab('8c')]==0x3){red=_0x29ab('8d')+_0x9d41e[_0x29ab('24')]+'\uff1a'+_0x9d41e[_0x29ab('8e')];}}}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('8f')+_0x3f565a[_0x29ab('3d')]);}}}catch(_0x3b4529){console[_0x29ab('3')](_0x3b4529,_0x81c383);}finally{_0xdbb586();}});});}function RevenueDetail(){let _0x50126e=new Date()[_0x29ab('6')]();let _0x2d1d38=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('89'));let _0x2b8324=Post_request(_0x29ab('90'),_0x2d1d38);return new Promise((_0x131a43,_0x1cbeae)=>{$[_0x29ab('30')](_0x2b8324,async(_0x24c24e,_0x2052b0,_0x54e6d4)=>{try{if(_0x24c24e){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('91'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('91');}else{let _0x44dca6=JSON[_0x29ab('33')](_0x54e6d4);if(_0x44dca6[_0x29ab('a')]==0x1){AD_profit=_0x29ab('92')+_0x44dca6[_0x29ab('35')][0x0][_0x29ab('93')]/0x3e8+_0x29ab('94');No_name=_0x29ab('95')+_0x44dca6[_0x29ab('35')][0x0][_0x29ab('96')]+_0x29ab('97')+_0x44dca6[_0x29ab('35')][0x0][_0x29ab('98')]+_0x29ab('99');}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('9a')+_0x44dca6[_0x29ab('3d')]);}}}catch(_0x4ee46f){console[_0x29ab('3')](_0x4ee46f,_0x2052b0);}finally{_0x131a43();}});});}function UserWallet(){let _0x453adb=new Date()[_0x29ab('6')]();let _0x18a550=RSA_encryption(_0x29ab('9b')+user_ID+_0x29ab('9c'));let _0x5de7cf=Post_request(_0x29ab('9d'),_0x18a550);return new Promise((_0x389acc,_0x5841fc)=>{$[_0x29ab('30')](_0x5de7cf,async(_0x23ee49,_0xa8d741,_0x7710f1)=>{try{if(_0x23ee49){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('9e'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('9e');}else{let _0x582871=JSON[_0x29ab('33')](_0x7710f1);if(_0x582871[_0x29ab('a')]==0x1){if(_0x582871[_0x29ab('35')][_0x29ab('9f')]>=0x14){await walletWithdraw();}}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('a0')+_0x582871[_0x29ab('3d')]);}}}catch(_0x241abe){console[_0x29ab('3')](_0x241abe,_0xa8d741);}finally{_0x389acc();}});});}function walletWithdraw(){let _0x4cefbd=new Date()[_0x29ab('6')]();let _0x1f5072=RSA_encryption(_0x29ab('a1')+user_ID+_0x29ab('9c'));let _0x31811d=Post_request(_0x29ab('a2'),_0x1f5072);return new Promise((_0x3641bc,_0x5188b9)=>{$[_0x29ab('30')](_0x31811d,async(_0x1f0251,_0xe7db89,_0x18e39b)=>{try{if(_0x1f0251){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('a3'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('a3');}else{let _0x3735de=JSON[_0x29ab('33')](_0x18e39b);if(_0x3735de[_0x29ab('a')]==0x1){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('a4'));}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('a5')+_0x3735de[_0x29ab('3d')]);}}}catch(_0xfb6c26){console[_0x29ab('3')](_0xfb6c26,_0xe7db89);}finally{_0x3641bc();}});});}function getAdReward(_0xfc7add,_0x1d2776){let _0x5b85dc=new Date()[_0x29ab('6')]();let _0x484195='';let _0x36980c='';if(_0xfc7add==_0x29ab('2c')){_0x484195=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('a6')+_0x5b85dc+'\x7d');_0x36980c='\u7b7e\u5230';}else if(_0xfc7add==_0x29ab('2b')){_0x484195=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('a7')+_0x5b85dc+'\x7d');_0x36980c='\u52a0\u901f';}else if(_0xfc7add==_0x29ab('3e')){_0x484195=RSA_encryption(_0x29ab('2d')+user_ID+_0x29ab('a8')+_0x5b85dc+'\x7d');_0x36980c=_0x29ab('a9');}else if(_0xfc7add==_0x29ab('63')){_0x484195=RSA_encryption(_0x29ab('aa')+_0x1d2776+_0x29ab('ab')+user_ID+_0x29ab('5e')+_0x5b85dc+'\x7d');_0x36980c='\u819c\u62dc';}let _0x47347e=Post_request(_0x29ab('ac'),_0x484195);return new Promise((_0x48df20,_0x3c415a)=>{$[_0x29ab('30')](_0x47347e,async(_0x375ce3,_0x14264d,_0x43e920)=>{try{if(_0x375ce3){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('ad')+_0x36980c+_0x29ab('ae'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('ad')+_0x36980c+_0x29ab('ae');console[_0x29ab('3')](_0x375ce3+'\x0a');}else{let _0x2f1619=JSON[_0x29ab('33')](_0x43e920);if(_0x2f1619[_0x29ab('a')]==0x1){if(_0xfc7add==_0x29ab('2c')){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0x36980c+_0x29ab('af')+_0x2f1619[_0x29ab('35')][_0x29ab('4b')][_0x29ab('4c')][_0x29ab('b0')]+_0x29ab('b1')+_0x2f1619[_0x29ab('35')][_0x29ab('4b')][_0x29ab('4c')][_0x29ab('78')]);}else if(_0xfc7add==_0x29ab('3e')){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0x36980c+_0x29ab('b2'));}else if(_0xfc7add==_0x29ab('2b')){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0x36980c+_0x29ab('b3'));}else if(_0xfc7add==_0x29ab('63')){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+'\x20'+_0x36980c+_0x29ab('b4'));}}else if(_0x2f1619[_0x29ab('a')]==0x76f&&_0xfc7add==_0x29ab('2b')){await reward_video(_0x29ab('2b'));}else if(_0x2f1619[_0x29ab('a')]==0x4b8){if(_0xfc7add==_0x29ab('2b')){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('ad')+_0x36980c+_0x29ab('b5')+_0x2f1619[_0x29ab('3d')]);if(modify){await get_variable(_0x29ab('2b'),_0x29ab('b6'));}}if(_0xfc7add==_0x29ab('3e')){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('ad')+_0x36980c+_0x29ab('b5')+_0x2f1619[_0x29ab('3d')]);if(modify){await get_variable(_0x29ab('3e'),_0x29ab('b6'));}}}else if(_0x2f1619[_0x29ab('a')]==0x57f&&_0xfc7add==_0x29ab('63')){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('ad')+_0x36980c+_0x29ab('b5')+_0x2f1619[_0x29ab('3d')]);if(modify){await get_variable(_0x29ab('63'),_0x29ab('b6'));}}else if(_0x2f1619[_0x29ab('a')]==0x76f&&_0xfc7add==_0x29ab('2b')){await reward_video(_0x29ab('2b'));}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('ad')+_0x36980c+_0x29ab('b5')+_0x2f1619[_0x29ab('3d')]);}}}catch(_0x5741bf){console[_0x29ab('3')](_0x5741bf,_0x14264d);}finally{_0x48df20();}});});}function reward_video(_0x4faecc){if(!video_data){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('b7'));}else{let _0x583b7c=video_data[_0x29ab('b8')](/[\r\n]/g,'');let _0xce11f={'\x75\x72\x6c':_0x29ab('b9'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x29ab('ba'),'Content-Type':_0x29ab('bb'),'Content-Length':_0x583b7c[_0x29ab('f')],'Accept-Encoding':_0x29ab('bc'),'User-Agent':_0x29ab('bd')},'\x62\x6f\x64\x79':_0x583b7c};return new Promise((_0x4255ea,_0x3d41ab)=>{$[_0x29ab('30')](_0xce11f,async(_0x43ab49,_0x10dd5d,_0x2082dc)=>{try{if(_0x43ab49){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('be'));subTitle+=_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('be');console[_0x29ab('3')](_0x43ab49+'\x0a');}else{if(_0x2082dc[_0x29ab('bf')](_0x29ab('c0'))>-0x1){let _0x5153b2=JSON[_0x29ab('33')](_0x2082dc);if(_0x5153b2[_0x29ab('c0')]==0x3){await getAdReward(_0x4faecc);}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('c1'));}}else{let _0xe6f1c6=JSON[_0x29ab('33')](_0x2082dc);if(_0xe6f1c6[_0x29ab('a')]==0xea67){await getAdReward(_0x4faecc);}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('c1'));}}}}catch(_0x5102de){console[_0x29ab('3')](_0x5102de,_0x10dd5d);}finally{_0x4255ea();}});});}}function upscript(){let _0x2cff19={'\x75\x72\x6c':scripturl,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x29ab('c2'),'User-Agent':_0x29ab('c3')}};return new Promise((_0x60d52,_0x38c877)=>{$[_0x29ab('c4')](_0x2cff19,async(_0x300f33,_0x2be1ed,_0x1ca1bb)=>{try{if(_0x300f33){console[_0x29ab('3')](_0x29ab('c5'));subTitle+=_0x29ab('c5');}else{if(_0x1ca1bb[_0x29ab('bf')](_0x29ab('c6'))>-0x1){if($[_0x29ab('24')][_0x29ab('c7')](/版本:(\S*)/)[0x1]!=_0x1ca1bb[_0x29ab('c7')](/版本:(\S*)'/)[0x1]){let _0x3e6a48=__dirname+(_0x29ab('c8')+$[_0x29ab('24')][_0x29ab('c7')](/版本:(\S*)/)[0x1][_0x29ab('b8')](new RegExp('\x2f','\x67\x69'),'\x5f')+_0x29ab('c9'));fs[_0x29ab('ca')](_0x3e6a48,fs[_0x29ab('cb')](__filename));fs[_0x29ab('cc')](__filename,_0x1ca1bb,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x480234){if(_0x480234){console[_0x29ab('3')](_0x480234);}});}}}}catch(_0x388fde){console[_0x29ab('3')](_0x388fde,_0x2be1ed);}finally{_0x60d52();}});});}function Post_request(_0x2c01d6,_0x38244a,_0x1baf79){let _0xe3bed3=_0x29ab('cd');return{'\x75\x72\x6c':''+_0xe3bed3+_0x2c01d6,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x29ab('ce'),'Connection':_0x29ab('cf'),'Content-Length':_0x38244a[_0x29ab('f')],'Pragma':_0x29ab('d0'),'Cache-Control':_0x29ab('d0'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x29ab('d1'),'Accept':_0x29ab('d2'),'Origin':_0x29ab('d3'),'X-Requested-With':_0x29ab('d4'),'Sec-Fetch-Site':_0x29ab('d5'),'Sec-Fetch-Mode':_0x29ab('d6'),'Sec-Fetch-Dest':_0x29ab('d7'),'Referer':_0x29ab('d8'),'Accept-Encoding':_0x29ab('d9'),'Accept-Language':_0x29ab('da')},'\x62\x6f\x64\x79':_0x38244a};};function Get_request(_0x99281e){let _0xe36716=_0x29ab('cd');return{'\x75\x72\x6c':''+_0xe36716+_0x99281e,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x29ab('ce'),'Connection':_0x29ab('cf'),'Content-Length':0x0,'Pragma':_0x29ab('d0'),'Cache-Control':_0x29ab('d0'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x29ab('d1'),'Accept':_0x29ab('d2'),'Origin':_0x29ab('d3'),'X-Requested-With':_0x29ab('d4'),'Sec-Fetch-Site':_0x29ab('d5'),'Sec-Fetch-Mode':_0x29ab('d6'),'Sec-Fetch-Dest':_0x29ab('d7'),'Referer':_0x29ab('d8'),'Accept-Encoding':_0x29ab('d9'),'Accept-Language':_0x29ab('da')}};};function RSA_encryption(_0x271ed5){var _0x4ca906=new RSA_js();_0x4ca906[_0x29ab('db')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x29ab('dc')});_0x4ca906[_0x29ab('dd')](_0x29ab('de'),_0x29ab('df'));var _0x1840cb=_0x4ca906[_0x29ab('e0')](_0x271ed5,_0x29ab('e1'));return _0x1840cb;}function get_variable(_0x840046,_0xa84fd){let _0x53df09=$[_0x29ab('0')]()?require(_0x29ab('2')):'';if(!_0x53df09){console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('e2'));return;}else{_0x53df09=JSON[_0x29ab('e3')](_0x53df09);}let _0x377712=JSON[_0x29ab('e3')](current);let _0x556aa8=_0x53df09[_0x29ab('e4')](0x0,_0x53df09[_0x29ab('bf')](_0x377712));let _0x44742c=_0x53df09[_0x29ab('f')]-_0x556aa8[_0x29ab('f')]-_0x377712[_0x29ab('f')];let _0x51aede=_0x53df09[_0x29ab('e4')](_0x53df09[_0x29ab('f')]-_0x44742c,_0x53df09[_0x29ab('f')]);let _0x1ceb19='';if(_0x840046==_0x29ab('2b')&&_0xa84fd==_0x29ab('e5')){_0x1ceb19=JSON[_0x29ab('33')](JSON[_0x29ab('e3')](_0x377712[_0x29ab('b8')](new RegExp(_0x29ab('e6'),'\x67\x69'),_0x29ab('e7'))));}else if(_0x840046==_0x29ab('63')&&_0xa84fd==_0x29ab('e5')){_0x1ceb19=JSON[_0x29ab('33')](JSON[_0x29ab('e3')](_0x377712[_0x29ab('b8')](new RegExp(_0x29ab('e8'),'\x67\x69'),_0x29ab('e9'))));}else if(_0x840046==_0x29ab('3e')&&_0xa84fd==_0x29ab('e5')){_0x1ceb19=JSON[_0x29ab('33')](JSON[_0x29ab('e3')](_0x377712[_0x29ab('b8')](new RegExp(_0x29ab('ea'),'\x67\x69'),_0x29ab('eb'))));}else if(_0x840046==_0x29ab('2b')&&_0xa84fd==_0x29ab('b6')){_0x1ceb19=JSON[_0x29ab('33')](JSON[_0x29ab('e3')](_0x377712[_0x29ab('b8')](new RegExp(_0x29ab('ec'),'\x67\x69'),_0x29ab('ed'))));}else if(_0x840046==_0x29ab('63')&&_0xa84fd==_0x29ab('b6')){_0x1ceb19=JSON[_0x29ab('33')](JSON[_0x29ab('e3')](_0x377712[_0x29ab('b8')](new RegExp(_0x29ab('e9'),'\x67\x69'),_0x29ab('e8'))));}else if(_0x840046==_0x29ab('3e')&&_0xa84fd==_0x29ab('b6')){_0x1ceb19=JSON[_0x29ab('33')](JSON[_0x29ab('e3')](_0x377712[_0x29ab('b8')](new RegExp(_0x29ab('eb'),'\x67\x69'),_0x29ab('ea'))));}fs[_0x29ab('cc')](_0x29ab('2'),_0x29ab('ee')+_0x556aa8+_0x1ceb19+_0x51aede,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x187e77){if(_0x187e77){console[_0x29ab('3')](_0x187e77);}else{console[_0x29ab('3')](_0x29ab('31')+$[_0x29ab('20')]+_0x29ab('ef'));}});};_0xodr='jsjiami.com.v6';



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