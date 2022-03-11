/*

软件名称:掌赚宝

项目注册地址:http://user.kebik.cn/download?a=10&c=DW22271123
邀请码:DW22271123

这个周期有点长,毕竟开始要20多块,一开始提现好像是3/5/20后就可以提5块了,玩忘记了
只是收取福利界面的气泡

必要变量:

变量名 soy_zzb_data
变量值 xxx
注释:抓包我的界面有条 http://user.api.kebik.cn/userInfo 链接,链接填到青龙的配置文件上面
如:export soy_zzb_data='xxx'
注意:是单引号引变量

多个号用 # 或 @ 换行 隔开

cron 39 10,13,18 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_zzb.js

*/


const $ = new Env('【掌赚宝】版本:22/03/11_0');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodK='jsjiami.com.v6',_0xodK_=['_0xodK'],_0x3b7e=[_0xodK,'\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x7a\x7a\x62\x5f\x64\x61\x74\x61','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x7a\x7a\x62\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x75\x73\x65\x72\x2e\x61\x70\x69\x2e\x6b\x65\x62\x69\x6b\x2e\x63\x6e\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x70\x61\x72\x73\x65','\x41\x70\x70\x4e\x61\x6d\x65','\x41\x70\x70\x56\x65\x72','\x41\x75\x74\x68\x54\x6f\x6b\x65\x6e','\x43\x68\x61\x6e\x6e\x65\x6c','\x44\x65\x76\x69\x63\x65\x42\x72\x61\x6e\x64','\x44\x65\x76\x69\x63\x65\x4e\x6f','\x44\x65\x76\x69\x63\x65\x4f\x73\x56\x65\x72','\x44\x65\x76\x69\x63\x65\x4d\x61\x6e\x75\x66\x61\x63\x74\x75\x72\x65\x72','\x74\x61\x73\x6b\x2f\x69\x6e\x66\x6f\x2f\x76\x33','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u9996\u9875\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x62\x75\x73\x44\x61\x74\x61','\x6d\x61\x72\x6b','\x64\x65\x74\x61\x69\x6c','\x74\x6f\x64\x61\x79\x5f\x67\x65\x74\x5f\x63\x61\x6e','\x63\x6f\x69\x6e','\x63\x61\x6e\x5f\x67\x65\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x77\x61\x69\x74','\x74\x6f\x64\x61\x79\x5f\x72\x65\x63\x6f\x6d\x6d\x65\x6e\x64','\x22\x69\x64\x22\x3a','\x68\x61\x73','\x6e\x65\x65\x64','\x20\u9996\u9875\u72b6\u6001\u3011\x3a\x20','\x6d\x73\x67','\x7b\x22\x41\x70\x70\x4e\x61\x6d\x65\x22\x3a\x22','\x22\x2c\x22\x41\x70\x70\x56\x65\x72\x22\x3a','\x2c\x22\x41\x75\x74\x68\x54\x6f\x6b\x65\x6e\x22\x3a\x22','\x22\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22','\x22\x2c\x22\x44\x65\x76\x69\x63\x65\x42\x72\x61\x6e\x64\x22\x3a\x22','\x22\x2c\x22\x44\x65\x76\x69\x63\x65\x4e\x6f\x22\x3a\x22','\x22\x2c\x22\x44\x65\x76\x69\x63\x65\x4f\x73\x56\x65\x72\x22\x3a\x22','\x22\x2c\x22\x52\x65\x71\x54\x69\x6d\x65\x22\x3a\x22','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x63\x6f\x69\x6e\x5f\x62\x61\x6c\x61\x6e\x63\x65','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7528\u6237\u6635\u79f0\uff1a','\x6e\x69\x63\x6b\x6e\x61\x6d\x65','\x0a\x2d\x2d\x2d\u7528\u6237\x49\x44\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u4f59\u989d\uff1a','\x62\x61\x6c\x61\x6e\x63\x65','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20','\x22\x2c\x22\x42\x75\x73\x50\x61\x72\x61\x6d\x22\x3a\x7b\x22\x63\x6f\x69\x6e\x5f\x63\x6f\x75\x6e\x74\x22\x3a','\x7d\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22\x6d\x79\x61\x70\x70\x22\x2c\x22\x44\x65\x76\x69\x63\x65\x42\x72\x61\x6e\x64\x22\x3a\x22','\x22\x2c\x22\x44\x65\x76\x69\x63\x65\x4d\x61\x6e\x75\x66\x61\x63\x74\x75\x72\x65\x72\x22\x3a\x22','\x63\x6f\x69\x6e\x45\x78\x63\x68\x61\x6e\x67\x65','\x20\u5151\u6362\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u5151\u6362\u3011\x3a\x20','\x74\x61\x73\x6b\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x4d\x61\x72\x6b\x2f\x76\x33','\x20\u7b7e\u5230\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u7b7e\u5230\u3011\x3a\x20\u83b7\u5f97\x20','\x61\x6d\x6f\x75\x6e\x74','\x20\u91d1\u5e01','\x20\u7b7e\u5230\u3011\x3a\x20','\x22\x2c\x22\x42\x75\x73\x50\x61\x72\x61\x6d\x22\x3a\x7b\x22\x69\x64\x22\x3a','\x2c\x22\x6d\x75\x6c\x74\x69\x70\x6c\x65\x22\x3a\x31\x7d\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22','\x74\x61\x73\x6b\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x43\x6f\x69\x6e\x2f\x76\x33','\x20\u9886\u6c14\u6ce1\u91d1\u5e01\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u9886\u6c14\u6ce1\u91d1\u5e01\u3011\x3a\x20\u83b7\u5f97\x20','\x20\u9886\u6c14\u6ce1\u91d1\u5e01\u3011\x3a\x20','\x22\x2c\x22\x42\x75\x73\x50\x61\x72\x61\x6d\x22\x3a\x7b','\x7d\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22','\x74\x61\x73\x6b\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x54\x6f\x64\x61\x79\x52\x65\x63\x6f\x6d\x6d\x65\x6e\x64\x2f\x76\x33','\x20\u9886\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u9886\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u83b7\u5f97\x20','\x20\u9886\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20','\x67\x61\x6d\x65\x2f\x67\x75\x65\x73\x73\x49\x64\x69\x6f\x6d\x73\x56\x69\x65\x77','\x20\u7b54\u9898\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x73\x70\x61\x72\x65\x5f\x63\x6f\x75\x6e\x74','\x20\u7b54\u9898\u72b6\u6001\u3011\x3a\x20','\x22\x2c\x22\x42\x75\x73\x50\x61\x72\x61\x6d\x22\x3a\x7b\x22\x63\x6f\x72\x72\x65\x63\x74\x22\x3a\x31\x2c\x22\x6d\x75\x6c\x74\x69\x70\x6c\x65\x22\x3a\x34\x7d\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22','\x67\x61\x6d\x65\x2f\x67\x75\x65\x73\x73\x49\x64\x69\x6f\x6d\x73','\x20\u7b54\u9898\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u7b54\u9898\u3011\x3a\x20\u5171\u83b7\u5f97\x20','\x63\x75\x72\x72\x65\x6e\x74','\x6d\x75\x6c\x74\x69\x70\x6c\x65\x5f\x61\x6d\x6f\x75\x6e\x74','\x20\u7b54\u9898\u3011\x3a\x20','\x67\x61\x6d\x65\x2f\x68\x65\x61\x6c\x74\x68\x79\x56\x69\x65\x77','\x20\u6253\u5361\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x73\x70\x6f\x72\x74','\x65\x61\x74','\x64\x72\x69\x6e\x6b','\x6a\x75\x6d\x70','\x73\x74\x61\x74\x75\x73','\x22\x61\x63\x74\x69\x6f\x6e\x22\x3a\x22\x73\x74\x61\x72\x74\x22\x2c\x22\x69\x64\x22\x3a\x22','\x22\x2c\x22\x6d\x75\x6c\x74\x69\x70\x6c\x65\x22\x3a\x34\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x73\x70\x6f\x72\x74\x22','\x74\x69\x6d\x65\x5f\x65\x6e\x64','\x22\x61\x63\x74\x69\x6f\x6e\x22\x3a\x22\x65\x6e\x64\x22\x2c\x22\x69\x64\x22\x3a\x22','\x22\x2c\x22\x6d\x75\x6c\x74\x69\x70\x6c\x65\x22\x3a\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x73\x70\x6f\x72\x74\x22','\x74\x61\x62\x6c\x65\x5f\x74\x65\x6e\x6e\x69\x73','\x66\x6f\x6f\x74\x62\x61\x6c\x6c','\x62\x61\x73\x6b\x65\x74\x62\x61\x6c\x6c','\x64\x75\x6d\x62\x62\x65\x6c\x6c','\x62\x72\x65\x61\x6b\x66\x61\x73\x74','\x22\x69\x64\x22\x3a\x22','\x22\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x65\x61\x74\x22','\x6c\x75\x6e\x63\x68','\x61\x66\x74\x65\x72\x6e\x6f\x6f\x6e\x5f\x74\x65\x61','\x64\x69\x6e\x6e\x65\x72','\x6e\x69\x67\x68\x74\x5f\x73\x6e\x61\x63\x6b','\x22\x6d\x75\x6c\x74\x69\x70\x6c\x65\x22\x3a\x36\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x64\x72\x69\x6e\x6b\x22','\x63\x6f\x75\x6e\x74','\x20\u6253\u5361\u72b6\u6001\u3011\x3a\x20','\x22\x2c\x22\x42\x75\x73\x50\x61\x72\x61\x6d\x22\x3a\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x7d\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22','\x74\x61\x73\x6b\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x54\x61\x73\x6b\x2f\x76\x33','\x20\u770b\u89c6\u9891\u8d5a\u94b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u770b\u89c6\u9891\u8d5a\u94b1\u3011\x3a\x20','\x67\x61\x6d\x65\x2f\x68\x65\x61\x6c\x74\x68\x79','\x20\u4efb\u52a1\u5b8c\u6210\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u4efb\u52a1\u5b8c\u6210\u3011\x3a\x20','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x61\x6e\x64\x72\x6f\x69\x64','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x75\x73\x65\x72\x2e\x61\x70\x69\x2e\x6b\x65\x62\x69\x6b\x2e\x63\x6e','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x32\x2e\x30','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x44\x61\x79','\x20\u661f\u671f','\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d','\x63\x68\x61\x72\x41\x74','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x6a\x73\x6a\x69\x78\x52\x61\x6d\x74\x69\x2e\x63\x53\x6f\x6d\x2e\x76\x4d\x7a\x36\x48\x5a\x64\x72\x65\x46\x74\x70\x49\x75\x3d\x3d'];function _0x5195(_0x4feb21,_0x2bfda7){_0x4feb21=~~'0x'['concat'](_0x4feb21['slice'](0x0));var _0x35dfdc=_0x3b7e[_0x4feb21];return _0x35dfdc;};(function(_0x3cda8d,_0x2bc6f1){var _0xb1ba80=0x0;for(_0x2bc6f1=_0x3cda8d['shift'](_0xb1ba80>>0x2);_0x2bc6f1&&_0x2bc6f1!==(_0x3cda8d['pop'](_0xb1ba80>>0x3)+'')['replace'](/[xRtSMzHZdreFtpIu=]/g,'');_0xb1ba80++){_0xb1ba80=_0xb1ba80^0xd6a9a;}}(_0x3b7e,_0x5195));let app_soy_zzb_data=[],soy_zzb_UA='';console[_0x5195('0')](_0x5195('1'));!(async()=>{if(typeof $request!==_0x5195('2')){await get_appdata();}if($[_0x5195('3')]()){if(!process[_0x5195('4')][_0x5195('5')]){console[_0x5195('0')](_0x5195('6'));return;}if(process[_0x5195('4')][_0x5195('5')]&&process[_0x5195('4')][_0x5195('5')][_0x5195('7')]('\x0a')>-0x1){app_soy_zzb_data=process[_0x5195('4')][_0x5195('5')][_0x5195('8')]('\x0a');}else if(process[_0x5195('4')][_0x5195('5')]&&process[_0x5195('4')][_0x5195('5')][_0x5195('7')]('\x23')>-0x1){app_soy_zzb_data=process[_0x5195('4')][_0x5195('5')][_0x5195('8')]('\x23');}else if(process[_0x5195('4')][_0x5195('5')]&&process[_0x5195('4')][_0x5195('5')][_0x5195('7')]('\x40')>-0x1){app_soy_zzb_data=process[_0x5195('4')][_0x5195('5')][_0x5195('8')]('\x40');}else{app_soy_zzb_data=process[_0x5195('4')][_0x5195('5')][_0x5195('8')]();};}console[_0x5195('0')](_0x5195('9')+new Date(new Date()[_0x5195('a')]()+new Date()[_0x5195('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5195('c')]()+_0x5195('d'));console[_0x5195('0')](_0x5195('e')+app_soy_zzb_data[_0x5195('f')]+_0x5195('10'));subTitle='';for(i=0x0;i<app_soy_zzb_data[_0x5195('f')];i++){await Handle_data(app_soy_zzb_data[i]);$[_0x5195('11')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x5195('12')]($[_0x5195('13')],subTitle);}}})()[_0x5195('14')](_0x16063f=>$[_0x5195('15')](_0x16063f))[_0x5195('16')](()=>$[_0x5195('17')]());async function implement(){host=_0x5195('18');console[_0x5195('0')](_0x5195('19')+$[_0x5195('11')]+_0x5195('1a'));await v3();await info();}async function Handle_data(_0x36cbe4){let _0x152ea5=JSON[_0x5195('1b')](_0x36cbe4);AppName=_0x152ea5[_0x5195('1c')];AppVer=_0x152ea5[_0x5195('1d')];AuthToken=_0x152ea5[_0x5195('1e')];Channel=_0x152ea5[_0x5195('1f')];DeviceBrand=_0x152ea5[_0x5195('20')];DeviceNo=_0x152ea5[_0x5195('21')];DeviceOsVer=_0x152ea5[_0x5195('22')];DeviceManufacturer=_0x152ea5[_0x5195('23')];}function v3(){let _0x1cd239=Post_request(_0x5195('24'),Get_Body(getCurrentTime()));return new Promise((_0x171df1,_0x181d11)=>{$[_0x5195('25')](_0x1cd239,async(_0x520369,_0x4029fc,_0x20ece3)=>{try{if(_0x520369){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('27'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('27');}else{let _0xe7bd10=JSON[_0x5195('1b')](_0x20ece3);if(_0xe7bd10[_0x5195('28')]==0xc8){if(_0xe7bd10[_0x5195('29')][_0x5195('2a')][_0x5195('2b')][_0x5195('2c')][_0x5195('2d')]){await completeMark();}for(home_coin of _0xe7bd10[_0x5195('29')][_0x5195('2a')][_0x5195('2e')]){if(home_coin[_0x5195('2f')]){await completeCoin(home_coin['\x69\x64']);let _0x1e631a=Math[_0x5195('30')](Math[_0x5195('31')]()*(0xbb8-0x3e8+0x3e8)+0x3e8);await $[_0x5195('32')](_0x1e631a);}}for(Today_task of _0xe7bd10[_0x5195('29')][_0x5195('2a')][_0x5195('33')]){if(Today_task[_0x5195('2f')]){await TodayRecommend(_0x5195('34')+Today_task['\x69\x64']);}}await healthyView();if(_0xe7bd10[_0x5195('29')][_0x5195('2a')][_0x5195('33')][0x0][_0x5195('35')]<_0xe7bd10[_0x5195('29')][_0x5195('2a')][_0x5195('33')][0x0][_0x5195('36')]){await completeTask();}}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('37')+_0xe7bd10[_0x5195('38')]);}}}catch(_0x2247f8){console[_0x5195('0')](_0x2247f8,_0x4029fc);}finally{_0x171df1();}});});}function info(){let _0x2cda4d=_0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('3c')+Channel+_0x5195('3d')+DeviceBrand+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+getCurrentTime()+'\x22\x7d';let _0x372f02=Post_request(_0x5195('41'),_0x2cda4d);return new Promise((_0x339f31,_0x20397e)=>{$[_0x5195('25')](_0x372f02,async(_0x514eee,_0x5e7ebe,_0x1e6832)=>{try{if(_0x514eee){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('42'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('42');}else{let _0xe8b2a8=JSON[_0x5195('1b')](_0x1e6832);if(_0xe8b2a8[_0x5195('28')]==0xc8){if(_0xe8b2a8[_0x5195('29')][_0x5195('2a')][_0x5195('43')]>=0x2710){let _0x47444d=_0xe8b2a8[_0x5195('29')][_0x5195('2a')][_0x5195('43')];await coinExchange(Math[_0x5195('30')](_0x47444d/0x186a0*0x64)/0x64*0x186a0);}console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('44')+_0xe8b2a8[_0x5195('29')][_0x5195('2a')][_0x5195('45')]+_0x5195('46')+_0xe8b2a8[_0x5195('29')][_0x5195('2a')]['\x69\x64']+_0x5195('47')+_0xe8b2a8[_0x5195('29')][_0x5195('2a')][_0x5195('43')]+_0x5195('48')+_0xe8b2a8[_0x5195('29')][_0x5195('2a')][_0x5195('49')]);}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('4a')+_0xe8b2a8[_0x5195('38')]);}}}catch(_0x1d0243){console[_0x5195('0')](_0x1d0243,_0x5e7ebe);}finally{_0x339f31();}});});}function coinExchange(_0x2889f7){let _0x260f0e=_0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('4b')+_0x2889f7+_0x5195('4c')+DeviceBrand+_0x5195('4d')+DeviceManufacturer+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+getCurrentTime()+'\x22\x7d';let _0x386b74=Post_request(_0x5195('4e'),_0x260f0e);return new Promise((_0xb176e0,_0x11362d)=>{$[_0x5195('25')](_0x386b74,async(_0x89240c,_0x24b570,_0x278826)=>{try{if(_0x89240c){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('4f'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('4f');console[_0x5195('0')](_0x89240c);}else{let _0x22fc55=JSON[_0x5195('1b')](_0x278826);if(_0x22fc55[_0x5195('28')]==0xc8){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('50')+_0x22fc55[_0x5195('38')]);}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('50')+_0x22fc55[_0x5195('38')]);}}}catch(_0xcb7b82){console[_0x5195('0')](_0xcb7b82,_0x24b570);}finally{_0xb176e0();}});});}function completeMark(){let _0x48fe91=_0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('3c')+Channel+_0x5195('3d')+DeviceBrand+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+getCurrentTime()+'\x22\x7d';let _0x83177=Post_request(_0x5195('51'),_0x48fe91);return new Promise((_0x18dd54,_0x44eea9)=>{$[_0x5195('25')](_0x83177,async(_0x621cf,_0x3bd946,_0xfa104f)=>{try{if(_0x621cf){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('52'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('52');}else{let _0x257e48=JSON[_0x5195('1b')](_0xfa104f);if(_0x257e48[_0x5195('28')]==0xc8){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('53')+_0x257e48[_0x5195('29')][_0x5195('2a')][_0x5195('54')]+_0x5195('55'));}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('56')+_0x257e48[_0x5195('38')]);}}}catch(_0x57902f){console[_0x5195('0')](_0x57902f,_0x3bd946);}finally{_0x18dd54();}});});}function completeCoin(_0x46f1c0){let _0x4469d8=_0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('57')+_0x46f1c0+_0x5195('58')+Channel+_0x5195('3d')+DeviceBrand+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+getCurrentTime()+'\x22\x7d';let _0x32b5f5=Post_request(_0x5195('59'),_0x4469d8);return new Promise((_0x314e03,_0x35a378)=>{$[_0x5195('25')](_0x32b5f5,async(_0x439d13,_0x150bba,_0x2951be)=>{try{if(_0x439d13){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('5a'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('5a');}else{let _0x2648c1=JSON[_0x5195('1b')](_0x2951be);if(_0x2648c1[_0x5195('28')]==0xc8){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('5b')+_0x2648c1[_0x5195('29')][_0x5195('2a')][_0x5195('54')]+_0x5195('55'));}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('5c')+_0x2648c1[_0x5195('38')]);}}}catch(_0x820b51){console[_0x5195('0')](_0x820b51,_0x150bba);}finally{_0x314e03();}});});}function TodayRecommend(_0x46017d){let _0x1c1f5f=_0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('5d')+_0x46017d+_0x5195('5e')+Channel+_0x5195('3d')+DeviceBrand+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+getCurrentTime()+'\x22\x7d';let _0xaef9e=Post_request(_0x5195('5f'),_0x1c1f5f);return new Promise((_0x2f20f9,_0x16b597)=>{$[_0x5195('25')](_0xaef9e,async(_0x496d9c,_0x19a46e,_0x46017d)=>{try{if(_0x496d9c){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('60'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('60');}else{let _0x40dec7=JSON[_0x5195('1b')](_0x46017d);if(_0x40dec7[_0x5195('28')]==0xc8){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('61')+_0x40dec7[_0x5195('29')][_0x5195('2a')][_0x5195('54')]+_0x5195('55'));}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('62')+_0x40dec7[_0x5195('38')]);}}}catch(_0x461c96){console[_0x5195('0')](_0x461c96,_0x19a46e);}finally{_0x2f20f9();}});});}function guessIdiomsView(){let _0x554507=_0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('3c')+Channel+_0x5195('3d')+DeviceBrand+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+getCurrentTime()+'\x22\x7d';let _0x2609f7=Post_request(_0x5195('63'),_0x554507);return new Promise((_0x26b9b5,_0x272f14)=>{$[_0x5195('25')](_0x2609f7,async(_0x498419,_0xcd7497,_0xef4531)=>{try{if(_0x498419){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('64'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('64');}else{let _0x180397=JSON[_0x5195('1b')](_0xef4531);if(_0x180397[_0x5195('28')]==0xc8){if(_0x180397[_0x5195('29')][_0x5195('2a')][_0x5195('65')]>0x0){await guessIdioms();}}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('66')+_0x180397[_0x5195('38')]);}}}catch(_0x9a319){console[_0x5195('0')](_0x9a319,_0xcd7497);}finally{_0x26b9b5();}});});}function guessIdioms(){let _0x263b84=_0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('67')+Channel+_0x5195('3d')+DeviceBrand+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+getCurrentTime()+'\x22\x7d';let _0x30bef0=Post_request(_0x5195('68'),_0x263b84);return new Promise((_0x5e5382,_0x2598a0)=>{$[_0x5195('25')](_0x30bef0,async(_0x1b6a68,_0x4a93d8,_0x32a06f)=>{try{if(_0x1b6a68){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('69'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('69');}else{let _0x1f5a48=JSON[_0x5195('1b')](_0x32a06f);if(_0x1f5a48[_0x5195('28')]==0xc8){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('6a')+_0x1f5a48[_0x5195('29')][_0x5195('2a')][_0x5195('6b')][_0x5195('6c')]+_0x5195('55'));}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('6d')+_0x1f5a48[_0x5195('38')]);}}}catch(_0x58e77a){console[_0x5195('0')](_0x58e77a,_0x4a93d8);}finally{_0x5e5382();}});});}function healthyView(){let _0xeb9e2e=_0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('3c')+Channel+_0x5195('3d')+DeviceBrand+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+getCurrentTime()+'\x22\x7d';let _0xff5be=Post_request(_0x5195('6e'),_0xeb9e2e);return new Promise((_0x48a8fe,_0x147e21)=>{$[_0x5195('25')](_0xff5be,async(_0x506ba1,_0x3cc0f9,_0x59b5b2)=>{try{if(_0x506ba1){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('6f'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('6f');}else{let _0x58bd6b=JSON[_0x5195('1b')](_0x59b5b2);if(_0x58bd6b[_0x5195('28')]==0xc8){let _0x13ffd2=_0x58bd6b[_0x5195('29')][_0x5195('2a')][_0x5195('70')];let _0x1105cd=_0x58bd6b[_0x5195('29')][_0x5195('2a')][_0x5195('71')];let _0x158f2a=_0x58bd6b[_0x5195('29')][_0x5195('2a')][_0x5195('72')];if(_0x13ffd2[_0x5195('73')][_0x5195('74')]==0x0){await healthy(_0x5195('75')+_0x13ffd2[_0x5195('73')]['\x69\x64']+_0x5195('76'));}else if(_0x13ffd2[_0x5195('73')][_0x5195('74')]==0x1&&_0x13ffd2[_0x5195('73')][_0x5195('77')]==0x0){await healthy(_0x5195('78')+_0x13ffd2[_0x5195('73')]['\x69\x64']+_0x5195('79'));}if(_0x13ffd2[_0x5195('7a')][_0x5195('74')]==0x0){await healthy(_0x5195('75')+_0x13ffd2[_0x5195('7a')]['\x69\x64']+_0x5195('76'));}else if(_0x13ffd2[_0x5195('7a')][_0x5195('74')]==0x1&&_0x13ffd2[_0x5195('7a')][_0x5195('77')]==0x0){await healthy(_0x5195('78')+_0x13ffd2[_0x5195('7a')]['\x69\x64']+_0x5195('79'));}if(_0x13ffd2[_0x5195('7b')][_0x5195('74')]==0x0){await healthy(_0x5195('75')+_0x13ffd2[_0x5195('7b')]['\x69\x64']+_0x5195('76'));}else if(_0x13ffd2[_0x5195('7b')][_0x5195('74')]==0x1&&_0x13ffd2[_0x5195('7b')][_0x5195('77')]==0x0){await healthy(_0x5195('78')+_0x13ffd2[_0x5195('7b')]['\x69\x64']+_0x5195('79'));}if(_0x13ffd2[_0x5195('7c')][_0x5195('74')]==0x0){await healthy(_0x5195('75')+_0x13ffd2[_0x5195('7c')]['\x69\x64']+_0x5195('76'));}else if(_0x13ffd2[_0x5195('7c')][_0x5195('74')]==0x1&&_0x13ffd2[_0x5195('7c')][_0x5195('77')]==0x0){await healthy(_0x5195('78')+_0x13ffd2[_0x5195('7c')]['\x69\x64']+_0x5195('79'));}if(_0x13ffd2[_0x5195('7d')][_0x5195('74')]==0x0){await healthy(_0x5195('75')+_0x13ffd2[_0x5195('7d')]['\x69\x64']+_0x5195('76'));}else if(_0x13ffd2[_0x5195('7d')][_0x5195('74')]==0x1&&_0x13ffd2[_0x5195('7d')][_0x5195('77')]==0x0){await healthy(_0x5195('78')+_0x13ffd2[_0x5195('7d')]['\x69\x64']+_0x5195('79'));}if(_0x1105cd[_0x5195('7e')][_0x5195('74')]==0x2){await healthy(_0x5195('7f')+_0x1105cd[_0x5195('7e')]['\x69\x64']+_0x5195('80'));}if(_0x1105cd[_0x5195('81')][_0x5195('74')]==0x2){await TodayRecommend(_0x5195('7f')+_0x1105cd[_0x5195('81')]['\x69\x64']+_0x5195('80'));}if(_0x1105cd[_0x5195('82')][_0x5195('74')]==0x2){await healthy(_0x5195('7f')+_0x1105cd[_0x5195('82')]['\x69\x64']+_0x5195('80'));}if(_0x1105cd[_0x5195('83')][_0x5195('74')]==0x2){await healthy(_0x5195('7f')+_0x1105cd[_0x5195('83')]['\x69\x64']+_0x5195('80'));}if(_0x1105cd[_0x5195('84')][_0x5195('74')]==0x2){await healthy(_0x5195('7f')+_0x1105cd[_0x5195('84')]['\x69\x64']+_0x5195('80'));}if(_0x158f2a==_0x5195('2')){await healthy(_0x5195('85'));}else if(_0x158f2a[_0x5195('86')]<0x8){await healthy(_0x5195('85'));}}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('87')+_0x58bd6b[_0x5195('38')]);}}}catch(_0x2b1d02){console[_0x5195('0')](_0x2b1d02,_0x3cc0f9);}finally{_0x48a8fe();}});});}function completeTask(){let _0x2fe097=_0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('88')+Channel+_0x5195('3d')+DeviceBrand+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+getCurrentTime()+'\x22\x7d';let _0x5d34fe=Post_request(_0x5195('89'),_0x2fe097);return new Promise((_0x56c863,_0x208c4c)=>{$[_0x5195('25')](_0x5d34fe,async(_0x588c66,_0x3301aa,_0x3e7218)=>{try{if(_0x588c66){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('8a'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('8a');}else{let _0x126244=JSON[_0x5195('1b')](_0x3e7218);if(_0x126244[_0x5195('28')]==0xc8){}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('8b')+_0x126244[_0x5195('38')]);}}}catch(_0x3f8edc){console[_0x5195('0')](_0x3f8edc,_0x3301aa);}finally{_0x56c863();}});});}function healthy(_0x25a40e){let _0x10b670=_0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('5d')+_0x25a40e+_0x5195('5e')+Channel+_0x5195('3d')+DeviceBrand+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+getCurrentTime()+'\x22\x7d';let _0x497dfe=Post_request(_0x5195('8c'),_0x10b670);return new Promise((_0x216897,_0x17b954)=>{$[_0x5195('25')](_0x497dfe,async(_0x109fc5,_0x5508dc,_0x25a40e)=>{try{if(_0x109fc5){console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('8d'));subTitle+=_0x5195('26')+$[_0x5195('11')]+_0x5195('8d');}else{let _0x16bcee=JSON[_0x5195('1b')](_0x25a40e);if(_0x16bcee[_0x5195('28')]==0xc8){}else{console[_0x5195('0')](_0x5195('26')+$[_0x5195('11')]+_0x5195('8e')+_0x16bcee[_0x5195('38')]);}}}catch(_0x39f037){console[_0x5195('0')](_0x39f037,_0x5508dc);}finally{_0x216897();}});});}function Post_request(_0xc44710,_0x18d586){return{'\x75\x72\x6c':''+host+_0xc44710,'\x68\x65\x61\x64\x65\x72\x73':{'sign':MD5_Encrypt(getCurrentTime()),'Accept':_0x5195('8f'),'client':_0x5195('90'),'appid':'\x31\x33','Authorization':AuthToken,'Content-Type':_0x5195('91'),'Content-Length':_0x18d586[_0x5195('f')],'Host':_0x5195('92'),'Connection':_0x5195('93'),'Accept-Encoding':_0x5195('94'),'User-Agent':_0x5195('95')},'\x62\x6f\x64\x79':_0x18d586};};function Get_request(_0xd4b89b){return{'\x75\x72\x6c':''+host+_0xd4b89b,'\x68\x65\x61\x64\x65\x72\x73':{'sign':MD5_Encrypt(getCurrentTime()),'Accept':_0x5195('8f'),'client':_0x5195('90'),'appid':'\x31\x33','Authorization':AuthToken,'Content-Type':_0x5195('91'),'Content-Length':0x0,'Host':_0x5195('92'),'Connection':_0x5195('93'),'Accept-Encoding':_0x5195('94'),'User-Agent':_0x5195('95')}};};function Get_Body(_0x39cb66){return _0x5195('39')+AppName+_0x5195('3a')+AppVer+_0x5195('3b')+AuthToken+_0x5195('3c')+Channel+_0x5195('3d')+DeviceBrand+_0x5195('3e')+DeviceNo+_0x5195('3f')+DeviceOsVer+_0x5195('40')+_0x39cb66+'\x22\x7d';};function getCurrentTime(){let _0x4588c7=new Date();let _0x293e4f=_0x4588c7[_0x5195('96')]();let _0x271664=_0x4588c7[_0x5195('97')]()+0x1;let _0x464202=_0x4588c7[_0x5195('98')]();let _0x4e6cbb=_0x4588c7[_0x5195('99')]();let _0xda8233=_0x5195('9a')+_0x5195('9b')[_0x5195('9c')](_0x4588c7[_0x5195('99')]());let _0x55e556=_0x4588c7[_0x5195('9d')]();let _0x2e1f8b=_0x4588c7[_0x5195('9e')]();let _0x167e49=_0x4588c7[_0x5195('9f')]();let _0x26e9e2=_0x4588c7[_0x5195('a0')]();if(_0x271664<0xa){_0x271664='\x30'+_0x271664;}if(_0x464202<0xa){_0x464202='\x30'+_0x464202;}if(_0x55e556<0xa){_0x55e556='\x30'+_0x55e556;}if(_0x2e1f8b<0xa){_0x2e1f8b='\x30'+_0x2e1f8b;}if(_0x167e49<0xa){_0x167e49='\x30'+_0x167e49;}if(_0x26e9e2<0xa){_0x26e9e2='\x30\x30'+_0x26e9e2;}else if(_0x26e9e2<0x64){_0x26e9e2='\x30'+_0x26e9e2;}return _0x293e4f+'\x2d'+_0x271664+'\x2d'+_0x464202+'\x20'+_0x55e556+'\x3a'+_0x2e1f8b+'\x3a'+_0x167e49;}function MD5_Encrypt(_0x2f0e3f){function _0x3ac353(_0x2f0e3f,_0x3ac353){return _0x2f0e3f<<_0x3ac353|_0x2f0e3f>>>0x20-_0x3ac353;}function _0x1fa50e(_0x2f0e3f,_0x3ac353){var _0x1fa50e,_0x1cc8d5,_0x25c20e,_0x375ee8,_0x123dec;return _0x25c20e=0x80000000&_0x2f0e3f,_0x375ee8=0x80000000&_0x3ac353,_0x1fa50e=0x40000000&_0x2f0e3f,_0x1cc8d5=0x40000000&_0x3ac353,_0x123dec=(0x3fffffff&_0x2f0e3f)+(0x3fffffff&_0x3ac353),_0x1fa50e&_0x1cc8d5?0x80000000^_0x123dec^_0x25c20e^_0x375ee8:_0x1fa50e|_0x1cc8d5?0x40000000&_0x123dec?0xc0000000^_0x123dec^_0x25c20e^_0x375ee8:0x40000000^_0x123dec^_0x25c20e^_0x375ee8:_0x123dec^_0x25c20e^_0x375ee8;}function _0x1efe77(_0x2f0e3f,_0x3ac353,_0x1fa50e){return _0x2f0e3f&_0x3ac353|~_0x2f0e3f&_0x1fa50e;}function _0x50eebf(_0x2f0e3f,_0x3ac353,_0x1fa50e){return _0x2f0e3f&_0x1fa50e|_0x3ac353&~_0x1fa50e;}function _0x472a78(_0x2f0e3f,_0x3ac353,_0x1fa50e){return _0x2f0e3f^_0x3ac353^_0x1fa50e;}function _0x24cdcb(_0x2f0e3f,_0x3ac353,_0x1fa50e){return _0x3ac353^(_0x2f0e3f|~_0x1fa50e);}function _0xf7fa4(_0x2f0e3f,_0x50eebf,_0x472a78,_0x24cdcb,_0xf7fa4,_0x16f442,_0x16ac4f){return _0x2f0e3f=_0x1fa50e(_0x2f0e3f,_0x1fa50e(_0x1fa50e(_0x1efe77(_0x50eebf,_0x472a78,_0x24cdcb),_0xf7fa4),_0x16ac4f)),_0x1fa50e(_0x3ac353(_0x2f0e3f,_0x16f442),_0x50eebf);}function _0xcec2ad(_0x2f0e3f,_0x1efe77,_0x472a78,_0x24cdcb,_0xf7fa4,_0xcec2ad,_0xb0b8e2){return _0x2f0e3f=_0x1fa50e(_0x2f0e3f,_0x1fa50e(_0x1fa50e(_0x50eebf(_0x1efe77,_0x472a78,_0x24cdcb),_0xf7fa4),_0xb0b8e2)),_0x1fa50e(_0x3ac353(_0x2f0e3f,_0xcec2ad),_0x1efe77);}function _0x39ac4b(_0x2f0e3f,_0x1efe77,_0x50eebf,_0x24cdcb,_0xf7fa4,_0xcec2ad,_0x39ac4b){return _0x2f0e3f=_0x1fa50e(_0x2f0e3f,_0x1fa50e(_0x1fa50e(_0x472a78(_0x1efe77,_0x50eebf,_0x24cdcb),_0xf7fa4),_0x39ac4b)),_0x1fa50e(_0x3ac353(_0x2f0e3f,_0xcec2ad),_0x1efe77);}function _0x20f052(_0x2f0e3f,_0x1efe77,_0x50eebf,_0x472a78,_0xf7fa4,_0xcec2ad,_0x39ac4b){return _0x2f0e3f=_0x1fa50e(_0x2f0e3f,_0x1fa50e(_0x1fa50e(_0x24cdcb(_0x1efe77,_0x50eebf,_0x472a78),_0xf7fa4),_0x39ac4b)),_0x1fa50e(_0x3ac353(_0x2f0e3f,_0xcec2ad),_0x1efe77);}function _0x1c430a(_0x2f0e3f){for(var _0x3ac353,_0x1fa50e=_0x2f0e3f[_0x5195('f')],_0x1efe77=_0x1fa50e+0x8,_0x50eebf=(_0x1efe77-_0x1efe77%0x40)/0x40,_0x472a78=0x10*(_0x50eebf+0x1),_0x24cdcb=new Array(_0x472a78-0x1),_0xf7fa4=0x0,_0xcec2ad=0x0;_0x1fa50e>_0xcec2ad;)_0x3ac353=(_0xcec2ad-_0xcec2ad%0x4)/0x4,_0xf7fa4=_0xcec2ad%0x4*0x8,_0x24cdcb[_0x3ac353]=_0x24cdcb[_0x3ac353]|_0x2f0e3f[_0x5195('a1')](_0xcec2ad)<<_0xf7fa4,_0xcec2ad++;return _0x3ac353=(_0xcec2ad-_0xcec2ad%0x4)/0x4,_0xf7fa4=_0xcec2ad%0x4*0x8,_0x24cdcb[_0x3ac353]=_0x24cdcb[_0x3ac353]|0x80<<_0xf7fa4,_0x24cdcb[_0x472a78-0x2]=_0x1fa50e<<0x3,_0x24cdcb[_0x472a78-0x1]=_0x1fa50e>>>0x1d,_0x24cdcb;}function _0x391940(_0x2f0e3f){var _0x3ac353,_0x1fa50e,_0x1efe77='',_0x50eebf='';for(_0x1fa50e=0x0;0x3>=_0x1fa50e;_0x1fa50e++)_0x3ac353=_0x2f0e3f>>>0x8*_0x1fa50e&0xff,_0x50eebf='\x30'+_0x3ac353[_0x5195('a2')](0x10),_0x1efe77+=_0x50eebf[_0x5195('a3')](_0x50eebf[_0x5195('f')]-0x2,0x2);return _0x1efe77;}function _0x3bac7f(_0x2f0e3f){_0x2f0e3f=_0x2f0e3f[_0x5195('a4')](/\r\n/g,'\x0a');for(var _0x3ac353='',_0x1fa50e=0x0;_0x1fa50e<_0x2f0e3f[_0x5195('f')];_0x1fa50e++){var _0x1efe77=_0x2f0e3f[_0x5195('a1')](_0x1fa50e);0x80>_0x1efe77?_0x3ac353+=String[_0x5195('a5')](_0x1efe77):_0x1efe77>0x7f&&0x800>_0x1efe77?(_0x3ac353+=String[_0x5195('a5')](_0x1efe77>>0x6|0xc0),_0x3ac353+=String[_0x5195('a5')](0x3f&_0x1efe77|0x80)):(_0x3ac353+=String[_0x5195('a5')](_0x1efe77>>0xc|0xe0),_0x3ac353+=String[_0x5195('a5')](_0x1efe77>>0x6&0x3f|0x80),_0x3ac353+=String[_0x5195('a5')](0x3f&_0x1efe77|0x80));}return _0x3ac353;}var _0x5a0ca6,_0x6dd7ed,_0x26151d,_0x1bfc68,_0x5ab412,_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4=[],_0x23ae0a=0x7,_0x159c4d=0xc,_0x277ac1=0x11,_0x2ec08e=0x16,_0x5556ce=0x5,_0x254c1d=0x9,_0x42f3f2=0xe,_0x4a3cd4=0x14,_0x58ddd8=0x4,_0x3bf5cf=0xb,_0x7cf719=0x10,_0x285691=0x17,_0x1ac029=0x6,_0xf40d1=0xa,_0x25dc8a=0xf,_0xaee90d=0x15;for(_0x2f0e3f=_0x3bac7f(_0x2f0e3f),_0x4282f4=_0x1c430a(_0x2f0e3f),_0x107bbf=0x67452301,_0x5d8682=0xefcdab89,_0x9127d5=0x98badcfe,_0xd24329=0x10325476,_0x5a0ca6=0x0;_0x5a0ca6<_0x4282f4[_0x5195('f')];_0x5a0ca6+=0x10)_0x6dd7ed=_0x107bbf,_0x26151d=_0x5d8682,_0x1bfc68=_0x9127d5,_0x5ab412=_0xd24329,_0x107bbf=_0xf7fa4(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x0],_0x23ae0a,0xd76aa478),_0xd24329=_0xf7fa4(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0x1],_0x159c4d,0xe8c7b756),_0x9127d5=_0xf7fa4(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0x2],_0x277ac1,0x242070db),_0x5d8682=_0xf7fa4(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0x3],_0x2ec08e,0xc1bdceee),_0x107bbf=_0xf7fa4(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x4],_0x23ae0a,0xf57c0faf),_0xd24329=_0xf7fa4(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0x5],_0x159c4d,0x4787c62a),_0x9127d5=_0xf7fa4(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0x6],_0x277ac1,0xa8304613),_0x5d8682=_0xf7fa4(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0x7],_0x2ec08e,0xfd469501),_0x107bbf=_0xf7fa4(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x8],_0x23ae0a,0x698098d8),_0xd24329=_0xf7fa4(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0x9],_0x159c4d,0x8b44f7af),_0x9127d5=_0xf7fa4(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0xa],_0x277ac1,0xffff5bb1),_0x5d8682=_0xf7fa4(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0xb],_0x2ec08e,0x895cd7be),_0x107bbf=_0xf7fa4(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0xc],_0x23ae0a,0x6b901122),_0xd24329=_0xf7fa4(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0xd],_0x159c4d,0xfd987193),_0x9127d5=_0xf7fa4(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0xe],_0x277ac1,0xa679438e),_0x5d8682=_0xf7fa4(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0xf],_0x2ec08e,0x49b40821),_0x107bbf=_0xcec2ad(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x1],_0x5556ce,0xf61e2562),_0xd24329=_0xcec2ad(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0x6],_0x254c1d,0xc040b340),_0x9127d5=_0xcec2ad(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0xb],_0x42f3f2,0x265e5a51),_0x5d8682=_0xcec2ad(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0x0],_0x4a3cd4,0xe9b6c7aa),_0x107bbf=_0xcec2ad(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x5],_0x5556ce,0xd62f105d),_0xd24329=_0xcec2ad(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0xa],_0x254c1d,0x2441453),_0x9127d5=_0xcec2ad(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0xf],_0x42f3f2,0xd8a1e681),_0x5d8682=_0xcec2ad(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0x4],_0x4a3cd4,0xe7d3fbc8),_0x107bbf=_0xcec2ad(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x9],_0x5556ce,0x21e1cde6),_0xd24329=_0xcec2ad(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0xe],_0x254c1d,0xc33707d6),_0x9127d5=_0xcec2ad(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0x3],_0x42f3f2,0xf4d50d87),_0x5d8682=_0xcec2ad(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0x8],_0x4a3cd4,0x455a14ed),_0x107bbf=_0xcec2ad(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0xd],_0x5556ce,0xa9e3e905),_0xd24329=_0xcec2ad(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0x2],_0x254c1d,0xfcefa3f8),_0x9127d5=_0xcec2ad(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0x7],_0x42f3f2,0x676f02d9),_0x5d8682=_0xcec2ad(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0xc],_0x4a3cd4,0x8d2a4c8a),_0x107bbf=_0x39ac4b(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x5],_0x58ddd8,0xfffa3942),_0xd24329=_0x39ac4b(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0x8],_0x3bf5cf,0x8771f681),_0x9127d5=_0x39ac4b(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0xb],_0x7cf719,0x6d9d6122),_0x5d8682=_0x39ac4b(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0xe],_0x285691,0xfde5380c),_0x107bbf=_0x39ac4b(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x1],_0x58ddd8,0xa4beea44),_0xd24329=_0x39ac4b(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0x4],_0x3bf5cf,0x4bdecfa9),_0x9127d5=_0x39ac4b(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0x7],_0x7cf719,0xf6bb4b60),_0x5d8682=_0x39ac4b(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0xa],_0x285691,0xbebfbc70),_0x107bbf=_0x39ac4b(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0xd],_0x58ddd8,0x289b7ec6),_0xd24329=_0x39ac4b(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0x0],_0x3bf5cf,0xeaa127fa),_0x9127d5=_0x39ac4b(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0x3],_0x7cf719,0xd4ef3085),_0x5d8682=_0x39ac4b(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0x6],_0x285691,0x4881d05),_0x107bbf=_0x39ac4b(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x9],_0x58ddd8,0xd9d4d039),_0xd24329=_0x39ac4b(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0xc],_0x3bf5cf,0xe6db99e5),_0x9127d5=_0x39ac4b(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0xf],_0x7cf719,0x1fa27cf8),_0x5d8682=_0x39ac4b(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0x2],_0x285691,0xc4ac5665),_0x107bbf=_0x20f052(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x0],_0x1ac029,0xf4292244),_0xd24329=_0x20f052(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0x7],_0xf40d1,0x432aff97),_0x9127d5=_0x20f052(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0xe],_0x25dc8a,0xab9423a7),_0x5d8682=_0x20f052(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0x5],_0xaee90d,0xfc93a039),_0x107bbf=_0x20f052(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0xc],_0x1ac029,0x655b59c3),_0xd24329=_0x20f052(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0x3],_0xf40d1,0x8f0ccc92),_0x9127d5=_0x20f052(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0xa],_0x25dc8a,0xffeff47d),_0x5d8682=_0x20f052(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0x1],_0xaee90d,0x85845dd1),_0x107bbf=_0x20f052(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x8],_0x1ac029,0x6fa87e4f),_0xd24329=_0x20f052(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0xf],_0xf40d1,0xfe2ce6e0),_0x9127d5=_0x20f052(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0x6],_0x25dc8a,0xa3014314),_0x5d8682=_0x20f052(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0xd],_0xaee90d,0x4e0811a1),_0x107bbf=_0x20f052(_0x107bbf,_0x5d8682,_0x9127d5,_0xd24329,_0x4282f4[_0x5a0ca6+0x4],_0x1ac029,0xf7537e82),_0xd24329=_0x20f052(_0xd24329,_0x107bbf,_0x5d8682,_0x9127d5,_0x4282f4[_0x5a0ca6+0xb],_0xf40d1,0xbd3af235),_0x9127d5=_0x20f052(_0x9127d5,_0xd24329,_0x107bbf,_0x5d8682,_0x4282f4[_0x5a0ca6+0x2],_0x25dc8a,0x2ad7d2bb),_0x5d8682=_0x20f052(_0x5d8682,_0x9127d5,_0xd24329,_0x107bbf,_0x4282f4[_0x5a0ca6+0x9],_0xaee90d,0xeb86d391),_0x107bbf=_0x1fa50e(_0x107bbf,_0x6dd7ed),_0x5d8682=_0x1fa50e(_0x5d8682,_0x26151d),_0x9127d5=_0x1fa50e(_0x9127d5,_0x1bfc68),_0xd24329=_0x1fa50e(_0xd24329,_0x5ab412);var _0x39cab9=_0x391940(_0x107bbf)+_0x391940(_0x5d8682)+_0x391940(_0x9127d5)+_0x391940(_0xd24329);return _0x39cab9[_0x5195('a6')]();};_0xodK='jsjiami.com.v6';



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