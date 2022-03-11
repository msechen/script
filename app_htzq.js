/*

软件名称:灰兔赚钱

项目注册地址:http://yg.zzbzb.com/regNew/?invite_code=809887799

需要实名认证

这个周期有点长,毕竟开始要20多块,一开始提现好像是3/5/20后就可以提5块了,玩忘记了
只是收取福利界面的气泡

必要变量:

变量名 soy_htzq_data
变量值 xxx
注释:抓包我的界面有条 http://user.api.kebik.cn/userInfo 链接,链接填到青龙的配置文件上面
如:export soy_htzq_data='xxx'
注意:是单引号引变量

多个号用 # 或 @ 换行 隔开

cron 25 10,13,18 * * *

*/


const $ = new Env('【灰兔赚钱】版本:22/03/11_0');
const notify = $.isNode() ? require('./sendNotify') : '';



var _0xodh='jsjiami.com.v6',_0xodh_=['_0xodh'],_0x155a=[_0xodh,'\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x68\x74\x7a\x71\x5f\x64\x61\x74\x61','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x68\x74\x7a\x71\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x75\x73\x65\x72\x2e\x61\x70\x69\x2e\x6b\x65\x62\x69\x6b\x2e\x63\x6e\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x70\x61\x72\x73\x65','\x41\x70\x70\x4e\x61\x6d\x65','\x41\x70\x70\x56\x65\x72','\x41\x75\x74\x68\x54\x6f\x6b\x65\x6e','\x43\x68\x61\x6e\x6e\x65\x6c','\x44\x65\x76\x69\x63\x65\x42\x72\x61\x6e\x64','\x44\x65\x76\x69\x63\x65\x4e\x6f','\x44\x65\x76\x69\x63\x65\x4f\x73\x56\x65\x72','\x44\x65\x76\x69\x63\x65\x4d\x61\x6e\x75\x66\x61\x63\x74\x75\x72\x65\x72','\x74\x61\x73\x6b\x2f\x69\x6e\x66\x6f\x2f\x76\x33','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u9996\u9875\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x62\x75\x73\x44\x61\x74\x61','\x6d\x61\x72\x6b','\x64\x65\x74\x61\x69\x6c','\x74\x6f\x64\x61\x79\x5f\x67\x65\x74\x5f\x63\x61\x6e','\x63\x6f\x69\x6e','\x63\x61\x6e\x5f\x67\x65\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x77\x61\x69\x74','\x74\x6f\x64\x61\x79\x5f\x72\x65\x63\x6f\x6d\x6d\x65\x6e\x64','\x22\x69\x64\x22\x3a','\x68\x61\x73','\x6e\x65\x65\x64','\x20\u9996\u9875\u72b6\u6001\u3011\x3a\x20','\x6d\x73\x67','\x7b\x22\x41\x70\x70\x4e\x61\x6d\x65\x22\x3a\x22','\x22\x2c\x22\x41\x70\x70\x56\x65\x72\x22\x3a','\x2c\x22\x41\x75\x74\x68\x54\x6f\x6b\x65\x6e\x22\x3a\x22','\x22\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22','\x22\x2c\x22\x44\x65\x76\x69\x63\x65\x42\x72\x61\x6e\x64\x22\x3a\x22','\x22\x2c\x22\x44\x65\x76\x69\x63\x65\x4e\x6f\x22\x3a\x22','\x22\x2c\x22\x44\x65\x76\x69\x63\x65\x4f\x73\x56\x65\x72\x22\x3a\x22','\x22\x2c\x22\x52\x65\x71\x54\x69\x6d\x65\x22\x3a\x22','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x63\x6f\x69\x6e\x5f\x62\x61\x6c\x61\x6e\x63\x65','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7528\u6237\u6635\u79f0\uff1a','\x6e\x69\x63\x6b\x6e\x61\x6d\x65','\x0a\x2d\x2d\x2d\u7528\u6237\x49\x44\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u4f59\u989d\uff1a','\x62\x61\x6c\x61\x6e\x63\x65','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20','\x22\x2c\x22\x42\x75\x73\x50\x61\x72\x61\x6d\x22\x3a\x7b\x22\x63\x6f\x69\x6e\x5f\x63\x6f\x75\x6e\x74\x22\x3a','\x7d\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22\x6d\x79\x61\x70\x70\x22\x2c\x22\x44\x65\x76\x69\x63\x65\x42\x72\x61\x6e\x64\x22\x3a\x22','\x22\x2c\x22\x44\x65\x76\x69\x63\x65\x4d\x61\x6e\x75\x66\x61\x63\x74\x75\x72\x65\x72\x22\x3a\x22','\x63\x6f\x69\x6e\x45\x78\x63\x68\x61\x6e\x67\x65','\x20\u5151\u6362\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u5151\u6362\u3011\x3a\x20','\x74\x61\x73\x6b\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x4d\x61\x72\x6b\x2f\x76\x33','\x20\u7b7e\u5230\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u7b7e\u5230\u3011\x3a\x20\u83b7\u5f97\x20','\x61\x6d\x6f\x75\x6e\x74','\x20\u91d1\u5e01','\x20\u7b7e\u5230\u3011\x3a\x20','\x22\x2c\x22\x42\x75\x73\x50\x61\x72\x61\x6d\x22\x3a\x7b\x22\x69\x64\x22\x3a','\x2c\x22\x6d\x75\x6c\x74\x69\x70\x6c\x65\x22\x3a\x31\x7d\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22','\x74\x61\x73\x6b\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x43\x6f\x69\x6e\x2f\x76\x33','\x20\u9886\u6c14\u6ce1\u91d1\u5e01\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u9886\u6c14\u6ce1\u91d1\u5e01\u3011\x3a\x20\u83b7\u5f97\x20','\x20\u9886\u6c14\u6ce1\u91d1\u5e01\u3011\x3a\x20','\x22\x2c\x22\x42\x75\x73\x50\x61\x72\x61\x6d\x22\x3a\x7b','\x7d\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22','\x74\x61\x73\x6b\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x54\x6f\x64\x61\x79\x52\x65\x63\x6f\x6d\x6d\x65\x6e\x64\x2f\x76\x33','\x20\u9886\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u9886\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u83b7\u5f97\x20','\x20\u9886\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20','\x67\x61\x6d\x65\x2f\x67\x75\x65\x73\x73\x49\x64\x69\x6f\x6d\x73\x56\x69\x65\x77','\x20\u7b54\u9898\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x73\x70\x61\x72\x65\x5f\x63\x6f\x75\x6e\x74','\x20\u7b54\u9898\u72b6\u6001\u3011\x3a\x20','\x22\x2c\x22\x42\x75\x73\x50\x61\x72\x61\x6d\x22\x3a\x7b\x22\x63\x6f\x72\x72\x65\x63\x74\x22\x3a\x31\x2c\x22\x6d\x75\x6c\x74\x69\x70\x6c\x65\x22\x3a\x34\x7d\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22','\x67\x61\x6d\x65\x2f\x67\x75\x65\x73\x73\x49\x64\x69\x6f\x6d\x73','\x20\u7b54\u9898\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u7b54\u9898\u3011\x3a\x20\u5171\u83b7\u5f97\x20','\x63\x75\x72\x72\x65\x6e\x74','\x6d\x75\x6c\x74\x69\x70\x6c\x65\x5f\x61\x6d\x6f\x75\x6e\x74','\x20\u7b54\u9898\u3011\x3a\x20','\x67\x61\x6d\x65\x2f\x68\x65\x61\x6c\x74\x68\x79\x56\x69\x65\x77','\x20\u6253\u5361\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x73\x70\x6f\x72\x74','\x65\x61\x74','\x64\x72\x69\x6e\x6b','\x6a\x75\x6d\x70','\x73\x74\x61\x74\x75\x73','\x22\x61\x63\x74\x69\x6f\x6e\x22\x3a\x22\x73\x74\x61\x72\x74\x22\x2c\x22\x69\x64\x22\x3a\x22','\x22\x2c\x22\x6d\x75\x6c\x74\x69\x70\x6c\x65\x22\x3a\x34\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x73\x70\x6f\x72\x74\x22','\x74\x69\x6d\x65\x5f\x65\x6e\x64','\x22\x61\x63\x74\x69\x6f\x6e\x22\x3a\x22\x65\x6e\x64\x22\x2c\x22\x69\x64\x22\x3a\x22','\x22\x2c\x22\x6d\x75\x6c\x74\x69\x70\x6c\x65\x22\x3a\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x73\x70\x6f\x72\x74\x22','\x74\x61\x62\x6c\x65\x5f\x74\x65\x6e\x6e\x69\x73','\x66\x6f\x6f\x74\x62\x61\x6c\x6c','\x62\x61\x73\x6b\x65\x74\x62\x61\x6c\x6c','\x64\x75\x6d\x62\x62\x65\x6c\x6c','\x62\x72\x65\x61\x6b\x66\x61\x73\x74','\x22\x69\x64\x22\x3a\x22','\x22\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x65\x61\x74\x22','\x6c\x75\x6e\x63\x68','\x61\x66\x74\x65\x72\x6e\x6f\x6f\x6e\x5f\x74\x65\x61','\x64\x69\x6e\x6e\x65\x72','\x6e\x69\x67\x68\x74\x5f\x73\x6e\x61\x63\x6b','\x22\x6d\x75\x6c\x74\x69\x70\x6c\x65\x22\x3a\x36\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x64\x72\x69\x6e\x6b\x22','\x63\x6f\x75\x6e\x74','\x20\u6253\u5361\u72b6\u6001\u3011\x3a\x20','\x22\x2c\x22\x42\x75\x73\x50\x61\x72\x61\x6d\x22\x3a\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x7d\x2c\x22\x43\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22','\x74\x61\x73\x6b\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x54\x61\x73\x6b\x2f\x76\x33','\x20\u770b\u89c6\u9891\u8d5a\u94b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u770b\u89c6\u9891\u8d5a\u94b1\u3011\x3a\x20','\x67\x61\x6d\x65\x2f\x68\x65\x61\x6c\x74\x68\x79','\x20\u4efb\u52a1\u5b8c\u6210\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u4efb\u52a1\u5b8c\u6210\u3011\x3a\x20','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x61\x6e\x64\x72\x6f\x69\x64','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x75\x73\x65\x72\x2e\x61\x70\x69\x2e\x6b\x65\x62\x69\x6b\x2e\x63\x6e','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x32\x2e\x30','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x44\x61\x79','\x20\u661f\u671f','\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d','\x63\x68\x61\x72\x41\x74','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x50\x44\x48\x64\x6a\x73\x6a\x55\x77\x78\x69\x61\x5a\x6d\x4b\x59\x77\x69\x2e\x58\x63\x42\x6f\x66\x66\x48\x6e\x4c\x6d\x2e\x76\x36\x3d\x3d'];function _0x1ed5(_0x1cf416,_0x1fb02d){_0x1cf416=~~'0x'['concat'](_0x1cf416['slice'](0x0));var _0x1100b9=_0x155a[_0x1cf416];return _0x1100b9;};(function(_0x1a44d6,_0x4db5de){var _0x5c01fb=0x0;for(_0x4db5de=_0x1a44d6['shift'](_0x5c01fb>>0x2);_0x4db5de&&_0x4db5de!==(_0x1a44d6['pop'](_0x5c01fb>>0x3)+'')['replace'](/[PDHdUwxZKYwXBffHnL=]/g,'');_0x5c01fb++){_0x5c01fb=_0x5c01fb^0xd6a95;}}(_0x155a,_0x1ed5));let app_soy_htzq_data=[],soy_htzq_UA='';console[_0x1ed5('0')](_0x1ed5('1'));!(async()=>{if(typeof $request!==_0x1ed5('2')){await get_appdata();}if($[_0x1ed5('3')]()){if(!process[_0x1ed5('4')][_0x1ed5('5')]){console[_0x1ed5('0')](_0x1ed5('6'));return;}if(process[_0x1ed5('4')][_0x1ed5('5')]&&process[_0x1ed5('4')][_0x1ed5('5')][_0x1ed5('7')]('\x0a')>-0x1){app_soy_htzq_data=process[_0x1ed5('4')][_0x1ed5('5')][_0x1ed5('8')]('\x0a');}else if(process[_0x1ed5('4')][_0x1ed5('5')]&&process[_0x1ed5('4')][_0x1ed5('5')][_0x1ed5('7')]('\x23')>-0x1){app_soy_htzq_data=process[_0x1ed5('4')][_0x1ed5('5')][_0x1ed5('8')]('\x23');}else if(process[_0x1ed5('4')][_0x1ed5('5')]&&process[_0x1ed5('4')][_0x1ed5('5')][_0x1ed5('7')]('\x40')>-0x1){app_soy_htzq_data=process[_0x1ed5('4')][_0x1ed5('5')][_0x1ed5('8')]('\x40');}else{app_soy_htzq_data=process[_0x1ed5('4')][_0x1ed5('5')][_0x1ed5('8')]();};}console[_0x1ed5('0')](_0x1ed5('9')+new Date(new Date()[_0x1ed5('a')]()+new Date()[_0x1ed5('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1ed5('c')]()+_0x1ed5('d'));console[_0x1ed5('0')](_0x1ed5('e')+app_soy_htzq_data[_0x1ed5('f')]+_0x1ed5('10'));subTitle='';for(i=0x0;i<app_soy_htzq_data[_0x1ed5('f')];i++){await Handle_data(app_soy_htzq_data[i]);$[_0x1ed5('11')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x1ed5('12')]($[_0x1ed5('13')],subTitle);}}})()[_0x1ed5('14')](_0x405ca6=>$[_0x1ed5('15')](_0x405ca6))[_0x1ed5('16')](()=>$[_0x1ed5('17')]());async function implement(){host=_0x1ed5('18');console[_0x1ed5('0')](_0x1ed5('19')+$[_0x1ed5('11')]+_0x1ed5('1a'));await v3();await info();}async function Handle_data(_0x2b32ec){let _0x27bd8c=JSON[_0x1ed5('1b')](_0x2b32ec);AppName=_0x27bd8c[_0x1ed5('1c')];AppVer=_0x27bd8c[_0x1ed5('1d')];AuthToken=_0x27bd8c[_0x1ed5('1e')];Channel=_0x27bd8c[_0x1ed5('1f')];DeviceBrand=_0x27bd8c[_0x1ed5('20')];DeviceNo=_0x27bd8c[_0x1ed5('21')];DeviceOsVer=_0x27bd8c[_0x1ed5('22')];DeviceManufacturer=_0x27bd8c[_0x1ed5('23')];}function v3(){let _0x2ee5bd=Post_request(_0x1ed5('24'),Get_Body(getCurrentTime()));return new Promise((_0x3193f7,_0x37856c)=>{$[_0x1ed5('25')](_0x2ee5bd,async(_0x2c9437,_0x5dddfa,_0x5a8d81)=>{try{if(_0x2c9437){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('27'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('27');}else{let _0x15c13e=JSON[_0x1ed5('1b')](_0x5a8d81);if(_0x15c13e[_0x1ed5('28')]==0xc8){if(_0x15c13e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('2b')][_0x1ed5('2c')][_0x1ed5('2d')]){await completeMark();}for(home_coin of _0x15c13e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('2e')]){if(home_coin[_0x1ed5('2f')]){await completeCoin(home_coin['\x69\x64']);let _0x5c42f4=Math[_0x1ed5('30')](Math[_0x1ed5('31')]()*(0x3e8-0x1388+0x3e8)+0x1388);await $[_0x1ed5('32')](_0x5c42f4);}}for(Today_task of _0x15c13e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('33')]){if(Today_task[_0x1ed5('2f')]){await TodayRecommend(_0x1ed5('34')+Today_task['\x69\x64']);}}await guessIdiomsView();await healthyView();if(_0x15c13e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('33')][0x0][_0x1ed5('35')]<_0x15c13e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('33')][0x0][_0x1ed5('36')]){await completeTask();}}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('37')+_0x15c13e[_0x1ed5('38')]);}}}catch(_0x2e27be){console[_0x1ed5('0')](_0x2e27be,_0x5dddfa);}finally{_0x3193f7();}});});}function info(){let _0x3907a6=_0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('3c')+Channel+_0x1ed5('3d')+DeviceBrand+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+getCurrentTime()+'\x22\x7d';let _0x392f09=Post_request(_0x1ed5('41'),_0x3907a6);return new Promise((_0x5b68c0,_0x1e4ace)=>{$[_0x1ed5('25')](_0x392f09,async(_0x513a8a,_0x59d9e6,_0x4b9353)=>{try{if(_0x513a8a){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('42'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('42');}else{let _0x27647e=JSON[_0x1ed5('1b')](_0x4b9353);if(_0x27647e[_0x1ed5('28')]==0xc8){if(_0x27647e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('43')]>=0x2710){let _0x596ae2=_0x27647e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('43')];await coinExchange(Math[_0x1ed5('30')](_0x596ae2/0x186a0*0x64)/0x64*0x186a0);}console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('44')+_0x27647e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('45')]+_0x1ed5('46')+_0x27647e[_0x1ed5('29')][_0x1ed5('2a')]['\x69\x64']+_0x1ed5('47')+_0x27647e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('43')]+_0x1ed5('48')+_0x27647e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('49')]);}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('4a')+_0x27647e[_0x1ed5('38')]);}}}catch(_0x13bbbf){console[_0x1ed5('0')](_0x13bbbf,_0x59d9e6);}finally{_0x5b68c0();}});});}function coinExchange(_0x1161af){let _0x55bd03=_0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('4b')+_0x1161af+_0x1ed5('4c')+DeviceBrand+_0x1ed5('4d')+DeviceManufacturer+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+getCurrentTime()+'\x22\x7d';let _0x17a901=Post_request(_0x1ed5('4e'),_0x55bd03);return new Promise((_0x37bc79,_0x13845f)=>{$[_0x1ed5('25')](_0x17a901,async(_0x22ce93,_0x271c69,_0x3d93de)=>{try{if(_0x22ce93){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('4f'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('4f');console[_0x1ed5('0')](_0x22ce93);}else{let _0x1a8e56=JSON[_0x1ed5('1b')](_0x3d93de);if(_0x1a8e56[_0x1ed5('28')]==0xc8){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('50')+_0x1a8e56[_0x1ed5('38')]);}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('50')+_0x1a8e56[_0x1ed5('38')]);}}}catch(_0x593e95){console[_0x1ed5('0')](_0x593e95,_0x271c69);}finally{_0x37bc79();}});});}function completeMark(){let _0x5968ed=_0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('3c')+Channel+_0x1ed5('3d')+DeviceBrand+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+getCurrentTime()+'\x22\x7d';let _0x4dd692=Post_request(_0x1ed5('51'),_0x5968ed);return new Promise((_0x5c9796,_0x22688c)=>{$[_0x1ed5('25')](_0x4dd692,async(_0x5eb604,_0x4b335f,_0x487e54)=>{try{if(_0x5eb604){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('52'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('52');}else{let _0x126a70=JSON[_0x1ed5('1b')](_0x487e54);if(_0x126a70[_0x1ed5('28')]==0xc8){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('53')+_0x126a70[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('54')]+_0x1ed5('55'));}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('56')+_0x126a70[_0x1ed5('38')]);}}}catch(_0x153e83){console[_0x1ed5('0')](_0x153e83,_0x4b335f);}finally{_0x5c9796();}});});}function completeCoin(_0x351666){let _0x255095=_0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('57')+_0x351666+_0x1ed5('58')+Channel+_0x1ed5('3d')+DeviceBrand+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+getCurrentTime()+'\x22\x7d';let _0x2edc23=Post_request(_0x1ed5('59'),_0x255095);return new Promise((_0x2e66f2,_0x1216ca)=>{$[_0x1ed5('25')](_0x2edc23,async(_0x35f97a,_0x116f63,_0x41c212)=>{try{if(_0x35f97a){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('5a'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('5a');}else{let _0x58d80e=JSON[_0x1ed5('1b')](_0x41c212);if(_0x58d80e[_0x1ed5('28')]==0xc8){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('5b')+_0x58d80e[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('54')]+_0x1ed5('55'));}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('5c')+_0x58d80e[_0x1ed5('38')]);}}}catch(_0x2757a5){console[_0x1ed5('0')](_0x2757a5,_0x116f63);}finally{_0x2e66f2();}});});}function TodayRecommend(_0x64901e){let _0x43a3dc=_0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('5d')+_0x64901e+_0x1ed5('5e')+Channel+_0x1ed5('3d')+DeviceBrand+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+getCurrentTime()+'\x22\x7d';let _0x46a636=Post_request(_0x1ed5('5f'),_0x43a3dc);return new Promise((_0x58de1f,_0x51a92e)=>{$[_0x1ed5('25')](_0x46a636,async(_0x17be38,_0x2654de,_0x64901e)=>{try{if(_0x17be38){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('60'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('60');}else{let _0xfc1e16=JSON[_0x1ed5('1b')](_0x64901e);if(_0xfc1e16[_0x1ed5('28')]==0xc8){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('61')+_0xfc1e16[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('54')]+_0x1ed5('55'));}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('62')+_0xfc1e16[_0x1ed5('38')]);}}}catch(_0x5a69eb){console[_0x1ed5('0')](_0x5a69eb,_0x2654de);}finally{_0x58de1f();}});});}function guessIdiomsView(){let _0x1a03c5=_0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('3c')+Channel+_0x1ed5('3d')+DeviceBrand+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+getCurrentTime()+'\x22\x7d';let _0x9e84cb=Post_request(_0x1ed5('63'),_0x1a03c5);return new Promise((_0xb30827,_0x466fe4)=>{$[_0x1ed5('25')](_0x9e84cb,async(_0x21a123,_0x5061d5,_0x452d77)=>{try{if(_0x21a123){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('64'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('64');}else{let _0x2fe22b=JSON[_0x1ed5('1b')](_0x452d77);if(_0x2fe22b[_0x1ed5('28')]==0xc8){if(_0x2fe22b[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('65')]>0x0){await guessIdioms();}}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('66')+_0x2fe22b[_0x1ed5('38')]);}}}catch(_0x229814){console[_0x1ed5('0')](_0x229814,_0x5061d5);}finally{_0xb30827();}});});}function guessIdioms(){let _0x508dba=_0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('67')+Channel+_0x1ed5('3d')+DeviceBrand+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+getCurrentTime()+'\x22\x7d';let _0x259c23=Post_request(_0x1ed5('68'),_0x508dba);return new Promise((_0x43856b,_0xaed99b)=>{$[_0x1ed5('25')](_0x259c23,async(_0x1729e2,_0x3be2f,_0x2613f5)=>{try{if(_0x1729e2){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('69'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('69');}else{let _0xd33ac2=JSON[_0x1ed5('1b')](_0x2613f5);if(_0xd33ac2[_0x1ed5('28')]==0xc8){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('6a')+_0xd33ac2[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('6b')][_0x1ed5('6c')]+_0x1ed5('55'));}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('6d')+_0xd33ac2[_0x1ed5('38')]);}}}catch(_0x163ba2){console[_0x1ed5('0')](_0x163ba2,_0x3be2f);}finally{_0x43856b();}});});}function healthyView(){let _0x8dfb6b=_0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('3c')+Channel+_0x1ed5('3d')+DeviceBrand+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+getCurrentTime()+'\x22\x7d';let _0x25e861=Post_request(_0x1ed5('6e'),_0x8dfb6b);return new Promise((_0x3cca7b,_0x4cd449)=>{$[_0x1ed5('25')](_0x25e861,async(_0xa38b27,_0xbdf9fa,_0x479b94)=>{try{if(_0xa38b27){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('6f'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('6f');}else{let _0x9821f3=JSON[_0x1ed5('1b')](_0x479b94);if(_0x9821f3[_0x1ed5('28')]==0xc8){let _0x5abd35=_0x9821f3[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('70')];let _0x26968b=_0x9821f3[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('71')];let _0x31c4c8=_0x9821f3[_0x1ed5('29')][_0x1ed5('2a')][_0x1ed5('72')];if(_0x5abd35[_0x1ed5('73')][_0x1ed5('74')]==0x0){await healthy(_0x1ed5('75')+_0x5abd35[_0x1ed5('73')]['\x69\x64']+_0x1ed5('76'));}else if(_0x5abd35[_0x1ed5('73')][_0x1ed5('74')]==0x1&&_0x5abd35[_0x1ed5('73')][_0x1ed5('77')]==0x0){await healthy(_0x1ed5('78')+_0x5abd35[_0x1ed5('73')]['\x69\x64']+_0x1ed5('79'));}if(_0x5abd35[_0x1ed5('7a')][_0x1ed5('74')]==0x0){await healthy(_0x1ed5('75')+_0x5abd35[_0x1ed5('7a')]['\x69\x64']+_0x1ed5('76'));}else if(_0x5abd35[_0x1ed5('7a')][_0x1ed5('74')]==0x1&&_0x5abd35[_0x1ed5('7a')][_0x1ed5('77')]==0x0){await healthy(_0x1ed5('78')+_0x5abd35[_0x1ed5('7a')]['\x69\x64']+_0x1ed5('79'));}if(_0x5abd35[_0x1ed5('7b')][_0x1ed5('74')]==0x0){await healthy(_0x1ed5('75')+_0x5abd35[_0x1ed5('7b')]['\x69\x64']+_0x1ed5('76'));}else if(_0x5abd35[_0x1ed5('7b')][_0x1ed5('74')]==0x1&&_0x5abd35[_0x1ed5('7b')][_0x1ed5('77')]==0x0){await healthy(_0x1ed5('78')+_0x5abd35[_0x1ed5('7b')]['\x69\x64']+_0x1ed5('79'));}if(_0x5abd35[_0x1ed5('7c')][_0x1ed5('74')]==0x0){await healthy(_0x1ed5('75')+_0x5abd35[_0x1ed5('7c')]['\x69\x64']+_0x1ed5('76'));}else if(_0x5abd35[_0x1ed5('7c')][_0x1ed5('74')]==0x1&&_0x5abd35[_0x1ed5('7c')][_0x1ed5('77')]==0x0){await healthy(_0x1ed5('78')+_0x5abd35[_0x1ed5('7c')]['\x69\x64']+_0x1ed5('79'));}if(_0x5abd35[_0x1ed5('7d')][_0x1ed5('74')]==0x0){await healthy(_0x1ed5('75')+_0x5abd35[_0x1ed5('7d')]['\x69\x64']+_0x1ed5('76'));}else if(_0x5abd35[_0x1ed5('7d')][_0x1ed5('74')]==0x1&&_0x5abd35[_0x1ed5('7d')][_0x1ed5('77')]==0x0){await healthy(_0x1ed5('78')+_0x5abd35[_0x1ed5('7d')]['\x69\x64']+_0x1ed5('79'));}if(_0x26968b[_0x1ed5('7e')][_0x1ed5('74')]==0x2){await healthy(_0x1ed5('7f')+_0x26968b[_0x1ed5('7e')]['\x69\x64']+_0x1ed5('80'));}if(_0x26968b[_0x1ed5('81')][_0x1ed5('74')]==0x2){await TodayRecommend(_0x1ed5('7f')+_0x26968b[_0x1ed5('81')]['\x69\x64']+_0x1ed5('80'));}if(_0x26968b[_0x1ed5('82')][_0x1ed5('74')]==0x2){await healthy(_0x1ed5('7f')+_0x26968b[_0x1ed5('82')]['\x69\x64']+_0x1ed5('80'));}if(_0x26968b[_0x1ed5('83')][_0x1ed5('74')]==0x2){await healthy(_0x1ed5('7f')+_0x26968b[_0x1ed5('83')]['\x69\x64']+_0x1ed5('80'));}if(_0x26968b[_0x1ed5('84')][_0x1ed5('74')]==0x2){await healthy(_0x1ed5('7f')+_0x26968b[_0x1ed5('84')]['\x69\x64']+_0x1ed5('80'));}if(_0x31c4c8==_0x1ed5('2')){await healthy(_0x1ed5('85'));}else if(_0x31c4c8[_0x1ed5('86')]<0x8){await healthy(_0x1ed5('85'));}}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('87')+_0x9821f3[_0x1ed5('38')]);}}}catch(_0x16dc1d){console[_0x1ed5('0')](_0x16dc1d,_0xbdf9fa);}finally{_0x3cca7b();}});});}function completeTask(){let _0x4eafff=_0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('88')+Channel+_0x1ed5('3d')+DeviceBrand+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+getCurrentTime()+'\x22\x7d';let _0x4b14d3=Post_request(_0x1ed5('89'),_0x4eafff);return new Promise((_0x1b00ab,_0x3d1da9)=>{$[_0x1ed5('25')](_0x4b14d3,async(_0x59f83e,_0x21f021,_0x40e0d9)=>{try{if(_0x59f83e){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('8a'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('8a');}else{let _0xf1095a=JSON[_0x1ed5('1b')](_0x40e0d9);if(_0xf1095a[_0x1ed5('28')]==0xc8){}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('8b')+_0xf1095a[_0x1ed5('38')]);}}}catch(_0x28ace3){console[_0x1ed5('0')](_0x28ace3,_0x21f021);}finally{_0x1b00ab();}});});}function healthy(_0x357bcc){let _0x327640=_0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('5d')+_0x357bcc+_0x1ed5('5e')+Channel+_0x1ed5('3d')+DeviceBrand+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+getCurrentTime()+'\x22\x7d';let _0x375d6f=Post_request(_0x1ed5('8c'),_0x327640);return new Promise((_0x19f6fa,_0x56a742)=>{$[_0x1ed5('25')](_0x375d6f,async(_0x3039e7,_0x1a2669,_0x357bcc)=>{try{if(_0x3039e7){console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('8d'));subTitle+=_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('8d');}else{let _0xbeff54=JSON[_0x1ed5('1b')](_0x357bcc);if(_0xbeff54[_0x1ed5('28')]==0xc8){}else{console[_0x1ed5('0')](_0x1ed5('26')+$[_0x1ed5('11')]+_0x1ed5('8e')+_0xbeff54[_0x1ed5('38')]);}}}catch(_0x1b1dfa){console[_0x1ed5('0')](_0x1b1dfa,_0x1a2669);}finally{_0x19f6fa();}});});}function Post_request(_0x1da2c4,_0x37009f){return{'\x75\x72\x6c':''+host+_0x1da2c4,'\x68\x65\x61\x64\x65\x72\x73':{'sign':MD5_Encrypt(getCurrentTime()),'Accept':_0x1ed5('8f'),'client':_0x1ed5('90'),'appid':'\x31\x33','Authorization':AuthToken,'Content-Type':_0x1ed5('91'),'Content-Length':_0x37009f[_0x1ed5('f')],'Host':_0x1ed5('92'),'Connection':_0x1ed5('93'),'Accept-Encoding':_0x1ed5('94'),'User-Agent':_0x1ed5('95')},'\x62\x6f\x64\x79':_0x37009f};};function Get_request(_0x44f73f){return{'\x75\x72\x6c':''+host+_0x44f73f,'\x68\x65\x61\x64\x65\x72\x73':{'sign':MD5_Encrypt(getCurrentTime()),'Accept':_0x1ed5('8f'),'client':_0x1ed5('90'),'appid':'\x31\x33','Authorization':AuthToken,'Content-Type':_0x1ed5('91'),'Content-Length':0x0,'Host':_0x1ed5('92'),'Connection':_0x1ed5('93'),'Accept-Encoding':_0x1ed5('94'),'User-Agent':_0x1ed5('95')}};};function Get_Body(_0x4d1e01){return _0x1ed5('39')+AppName+_0x1ed5('3a')+AppVer+_0x1ed5('3b')+AuthToken+_0x1ed5('3c')+Channel+_0x1ed5('3d')+DeviceBrand+_0x1ed5('3e')+DeviceNo+_0x1ed5('3f')+DeviceOsVer+_0x1ed5('40')+_0x4d1e01+'\x22\x7d';};function getCurrentTime(){let _0x5b6ad1=new Date();let _0x4fa20d=_0x5b6ad1[_0x1ed5('96')]();let _0x1bbb6e=_0x5b6ad1[_0x1ed5('97')]()+0x1;let _0xa75623=_0x5b6ad1[_0x1ed5('98')]();let _0x2e2791=_0x5b6ad1[_0x1ed5('99')]();let _0x49fe02=_0x1ed5('9a')+_0x1ed5('9b')[_0x1ed5('9c')](_0x5b6ad1[_0x1ed5('99')]());let _0x5f017d=_0x5b6ad1[_0x1ed5('9d')]();let _0x6614da=_0x5b6ad1[_0x1ed5('9e')]();let _0x3b5a4d=_0x5b6ad1[_0x1ed5('9f')]();let _0x10ef98=_0x5b6ad1[_0x1ed5('a0')]();if(_0x1bbb6e<0xa){_0x1bbb6e='\x30'+_0x1bbb6e;}if(_0xa75623<0xa){_0xa75623='\x30'+_0xa75623;}if(_0x5f017d<0xa){_0x5f017d='\x30'+_0x5f017d;}if(_0x6614da<0xa){_0x6614da='\x30'+_0x6614da;}if(_0x3b5a4d<0xa){_0x3b5a4d='\x30'+_0x3b5a4d;}if(_0x10ef98<0xa){_0x10ef98='\x30\x30'+_0x10ef98;}else if(_0x10ef98<0x64){_0x10ef98='\x30'+_0x10ef98;}return _0x4fa20d+'\x2d'+_0x1bbb6e+'\x2d'+_0xa75623+'\x20'+_0x5f017d+'\x3a'+_0x6614da+'\x3a'+_0x3b5a4d;}function MD5_Encrypt(_0x2efe55){function _0x5084b7(_0x2efe55,_0x5084b7){return _0x2efe55<<_0x5084b7|_0x2efe55>>>0x20-_0x5084b7;}function _0x1d169c(_0x2efe55,_0x5084b7){var _0x1d169c,_0x34e94a,_0x4c00f9,_0x57da96,_0x3ab129;return _0x4c00f9=0x80000000&_0x2efe55,_0x57da96=0x80000000&_0x5084b7,_0x1d169c=0x40000000&_0x2efe55,_0x34e94a=0x40000000&_0x5084b7,_0x3ab129=(0x3fffffff&_0x2efe55)+(0x3fffffff&_0x5084b7),_0x1d169c&_0x34e94a?0x80000000^_0x3ab129^_0x4c00f9^_0x57da96:_0x1d169c|_0x34e94a?0x40000000&_0x3ab129?0xc0000000^_0x3ab129^_0x4c00f9^_0x57da96:0x40000000^_0x3ab129^_0x4c00f9^_0x57da96:_0x3ab129^_0x4c00f9^_0x57da96;}function _0x282309(_0x2efe55,_0x5084b7,_0x1d169c){return _0x2efe55&_0x5084b7|~_0x2efe55&_0x1d169c;}function _0x844145(_0x2efe55,_0x5084b7,_0x1d169c){return _0x2efe55&_0x1d169c|_0x5084b7&~_0x1d169c;}function _0xd3c30a(_0x2efe55,_0x5084b7,_0x1d169c){return _0x2efe55^_0x5084b7^_0x1d169c;}function _0x4db845(_0x2efe55,_0x5084b7,_0x1d169c){return _0x5084b7^(_0x2efe55|~_0x1d169c);}function _0xa6dadf(_0x2efe55,_0x844145,_0xd3c30a,_0x4db845,_0xa6dadf,_0x5620c9,_0x2c3584){return _0x2efe55=_0x1d169c(_0x2efe55,_0x1d169c(_0x1d169c(_0x282309(_0x844145,_0xd3c30a,_0x4db845),_0xa6dadf),_0x2c3584)),_0x1d169c(_0x5084b7(_0x2efe55,_0x5620c9),_0x844145);}function _0x104c26(_0x2efe55,_0x282309,_0xd3c30a,_0x4db845,_0xa6dadf,_0x104c26,_0x7fb45d){return _0x2efe55=_0x1d169c(_0x2efe55,_0x1d169c(_0x1d169c(_0x844145(_0x282309,_0xd3c30a,_0x4db845),_0xa6dadf),_0x7fb45d)),_0x1d169c(_0x5084b7(_0x2efe55,_0x104c26),_0x282309);}function _0x3a107e(_0x2efe55,_0x282309,_0x844145,_0x4db845,_0xa6dadf,_0x104c26,_0x3a107e){return _0x2efe55=_0x1d169c(_0x2efe55,_0x1d169c(_0x1d169c(_0xd3c30a(_0x282309,_0x844145,_0x4db845),_0xa6dadf),_0x3a107e)),_0x1d169c(_0x5084b7(_0x2efe55,_0x104c26),_0x282309);}function _0x4b2f72(_0x2efe55,_0x282309,_0x844145,_0xd3c30a,_0xa6dadf,_0x104c26,_0x3a107e){return _0x2efe55=_0x1d169c(_0x2efe55,_0x1d169c(_0x1d169c(_0x4db845(_0x282309,_0x844145,_0xd3c30a),_0xa6dadf),_0x3a107e)),_0x1d169c(_0x5084b7(_0x2efe55,_0x104c26),_0x282309);}function _0x13d2d6(_0x2efe55){for(var _0x5084b7,_0x1d169c=_0x2efe55[_0x1ed5('f')],_0x282309=_0x1d169c+0x8,_0x844145=(_0x282309-_0x282309%0x40)/0x40,_0xd3c30a=0x10*(_0x844145+0x1),_0x4db845=new Array(_0xd3c30a-0x1),_0xa6dadf=0x0,_0x104c26=0x0;_0x1d169c>_0x104c26;)_0x5084b7=(_0x104c26-_0x104c26%0x4)/0x4,_0xa6dadf=_0x104c26%0x4*0x8,_0x4db845[_0x5084b7]=_0x4db845[_0x5084b7]|_0x2efe55[_0x1ed5('a1')](_0x104c26)<<_0xa6dadf,_0x104c26++;return _0x5084b7=(_0x104c26-_0x104c26%0x4)/0x4,_0xa6dadf=_0x104c26%0x4*0x8,_0x4db845[_0x5084b7]=_0x4db845[_0x5084b7]|0x80<<_0xa6dadf,_0x4db845[_0xd3c30a-0x2]=_0x1d169c<<0x3,_0x4db845[_0xd3c30a-0x1]=_0x1d169c>>>0x1d,_0x4db845;}function _0x565b18(_0x2efe55){var _0x5084b7,_0x1d169c,_0x282309='',_0x844145='';for(_0x1d169c=0x0;0x3>=_0x1d169c;_0x1d169c++)_0x5084b7=_0x2efe55>>>0x8*_0x1d169c&0xff,_0x844145='\x30'+_0x5084b7[_0x1ed5('a2')](0x10),_0x282309+=_0x844145[_0x1ed5('a3')](_0x844145[_0x1ed5('f')]-0x2,0x2);return _0x282309;}function _0x248705(_0x2efe55){_0x2efe55=_0x2efe55[_0x1ed5('a4')](/\r\n/g,'\x0a');for(var _0x5084b7='',_0x1d169c=0x0;_0x1d169c<_0x2efe55[_0x1ed5('f')];_0x1d169c++){var _0x282309=_0x2efe55[_0x1ed5('a1')](_0x1d169c);0x80>_0x282309?_0x5084b7+=String[_0x1ed5('a5')](_0x282309):_0x282309>0x7f&&0x800>_0x282309?(_0x5084b7+=String[_0x1ed5('a5')](_0x282309>>0x6|0xc0),_0x5084b7+=String[_0x1ed5('a5')](0x3f&_0x282309|0x80)):(_0x5084b7+=String[_0x1ed5('a5')](_0x282309>>0xc|0xe0),_0x5084b7+=String[_0x1ed5('a5')](_0x282309>>0x6&0x3f|0x80),_0x5084b7+=String[_0x1ed5('a5')](0x3f&_0x282309|0x80));}return _0x5084b7;}var _0x44dcc1,_0x19b797,_0x20933a,_0x3e68b8,_0xf62821,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b=[],_0x330f4c=0x7,_0x31aeed=0xc,_0x29e005=0x11,_0x53c00a=0x16,_0x308762=0x5,_0x3c6c27=0x9,_0x407b76=0xe,_0x1d60e4=0x14,_0x165328=0x4,_0x1901ce=0xb,_0x417f58=0x10,_0x37e7e9=0x17,_0x5deaa2=0x6,_0x1f5479=0xa,_0x3f4c86=0xf,_0x1a5577=0x15;for(_0x2efe55=_0x248705(_0x2efe55),_0x538d1b=_0x13d2d6(_0x2efe55),_0x26d8d6=0x67452301,_0x20ecaf=0xefcdab89,_0x131ed3=0x98badcfe,_0x2950f1=0x10325476,_0x44dcc1=0x0;_0x44dcc1<_0x538d1b[_0x1ed5('f')];_0x44dcc1+=0x10)_0x19b797=_0x26d8d6,_0x20933a=_0x20ecaf,_0x3e68b8=_0x131ed3,_0xf62821=_0x2950f1,_0x26d8d6=_0xa6dadf(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x0],_0x330f4c,0xd76aa478),_0x2950f1=_0xa6dadf(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0x1],_0x31aeed,0xe8c7b756),_0x131ed3=_0xa6dadf(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0x2],_0x29e005,0x242070db),_0x20ecaf=_0xa6dadf(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0x3],_0x53c00a,0xc1bdceee),_0x26d8d6=_0xa6dadf(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x4],_0x330f4c,0xf57c0faf),_0x2950f1=_0xa6dadf(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0x5],_0x31aeed,0x4787c62a),_0x131ed3=_0xa6dadf(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0x6],_0x29e005,0xa8304613),_0x20ecaf=_0xa6dadf(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0x7],_0x53c00a,0xfd469501),_0x26d8d6=_0xa6dadf(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x8],_0x330f4c,0x698098d8),_0x2950f1=_0xa6dadf(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0x9],_0x31aeed,0x8b44f7af),_0x131ed3=_0xa6dadf(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0xa],_0x29e005,0xffff5bb1),_0x20ecaf=_0xa6dadf(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0xb],_0x53c00a,0x895cd7be),_0x26d8d6=_0xa6dadf(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0xc],_0x330f4c,0x6b901122),_0x2950f1=_0xa6dadf(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0xd],_0x31aeed,0xfd987193),_0x131ed3=_0xa6dadf(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0xe],_0x29e005,0xa679438e),_0x20ecaf=_0xa6dadf(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0xf],_0x53c00a,0x49b40821),_0x26d8d6=_0x104c26(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x1],_0x308762,0xf61e2562),_0x2950f1=_0x104c26(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0x6],_0x3c6c27,0xc040b340),_0x131ed3=_0x104c26(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0xb],_0x407b76,0x265e5a51),_0x20ecaf=_0x104c26(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0x0],_0x1d60e4,0xe9b6c7aa),_0x26d8d6=_0x104c26(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x5],_0x308762,0xd62f105d),_0x2950f1=_0x104c26(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0xa],_0x3c6c27,0x2441453),_0x131ed3=_0x104c26(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0xf],_0x407b76,0xd8a1e681),_0x20ecaf=_0x104c26(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0x4],_0x1d60e4,0xe7d3fbc8),_0x26d8d6=_0x104c26(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x9],_0x308762,0x21e1cde6),_0x2950f1=_0x104c26(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0xe],_0x3c6c27,0xc33707d6),_0x131ed3=_0x104c26(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0x3],_0x407b76,0xf4d50d87),_0x20ecaf=_0x104c26(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0x8],_0x1d60e4,0x455a14ed),_0x26d8d6=_0x104c26(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0xd],_0x308762,0xa9e3e905),_0x2950f1=_0x104c26(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0x2],_0x3c6c27,0xfcefa3f8),_0x131ed3=_0x104c26(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0x7],_0x407b76,0x676f02d9),_0x20ecaf=_0x104c26(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0xc],_0x1d60e4,0x8d2a4c8a),_0x26d8d6=_0x3a107e(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x5],_0x165328,0xfffa3942),_0x2950f1=_0x3a107e(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0x8],_0x1901ce,0x8771f681),_0x131ed3=_0x3a107e(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0xb],_0x417f58,0x6d9d6122),_0x20ecaf=_0x3a107e(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0xe],_0x37e7e9,0xfde5380c),_0x26d8d6=_0x3a107e(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x1],_0x165328,0xa4beea44),_0x2950f1=_0x3a107e(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0x4],_0x1901ce,0x4bdecfa9),_0x131ed3=_0x3a107e(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0x7],_0x417f58,0xf6bb4b60),_0x20ecaf=_0x3a107e(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0xa],_0x37e7e9,0xbebfbc70),_0x26d8d6=_0x3a107e(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0xd],_0x165328,0x289b7ec6),_0x2950f1=_0x3a107e(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0x0],_0x1901ce,0xeaa127fa),_0x131ed3=_0x3a107e(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0x3],_0x417f58,0xd4ef3085),_0x20ecaf=_0x3a107e(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0x6],_0x37e7e9,0x4881d05),_0x26d8d6=_0x3a107e(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x9],_0x165328,0xd9d4d039),_0x2950f1=_0x3a107e(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0xc],_0x1901ce,0xe6db99e5),_0x131ed3=_0x3a107e(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0xf],_0x417f58,0x1fa27cf8),_0x20ecaf=_0x3a107e(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0x2],_0x37e7e9,0xc4ac5665),_0x26d8d6=_0x4b2f72(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x0],_0x5deaa2,0xf4292244),_0x2950f1=_0x4b2f72(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0x7],_0x1f5479,0x432aff97),_0x131ed3=_0x4b2f72(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0xe],_0x3f4c86,0xab9423a7),_0x20ecaf=_0x4b2f72(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0x5],_0x1a5577,0xfc93a039),_0x26d8d6=_0x4b2f72(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0xc],_0x5deaa2,0x655b59c3),_0x2950f1=_0x4b2f72(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0x3],_0x1f5479,0x8f0ccc92),_0x131ed3=_0x4b2f72(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0xa],_0x3f4c86,0xffeff47d),_0x20ecaf=_0x4b2f72(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0x1],_0x1a5577,0x85845dd1),_0x26d8d6=_0x4b2f72(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x8],_0x5deaa2,0x6fa87e4f),_0x2950f1=_0x4b2f72(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0xf],_0x1f5479,0xfe2ce6e0),_0x131ed3=_0x4b2f72(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0x6],_0x3f4c86,0xa3014314),_0x20ecaf=_0x4b2f72(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0xd],_0x1a5577,0x4e0811a1),_0x26d8d6=_0x4b2f72(_0x26d8d6,_0x20ecaf,_0x131ed3,_0x2950f1,_0x538d1b[_0x44dcc1+0x4],_0x5deaa2,0xf7537e82),_0x2950f1=_0x4b2f72(_0x2950f1,_0x26d8d6,_0x20ecaf,_0x131ed3,_0x538d1b[_0x44dcc1+0xb],_0x1f5479,0xbd3af235),_0x131ed3=_0x4b2f72(_0x131ed3,_0x2950f1,_0x26d8d6,_0x20ecaf,_0x538d1b[_0x44dcc1+0x2],_0x3f4c86,0x2ad7d2bb),_0x20ecaf=_0x4b2f72(_0x20ecaf,_0x131ed3,_0x2950f1,_0x26d8d6,_0x538d1b[_0x44dcc1+0x9],_0x1a5577,0xeb86d391),_0x26d8d6=_0x1d169c(_0x26d8d6,_0x19b797),_0x20ecaf=_0x1d169c(_0x20ecaf,_0x20933a),_0x131ed3=_0x1d169c(_0x131ed3,_0x3e68b8),_0x2950f1=_0x1d169c(_0x2950f1,_0xf62821);var _0x4e1901=_0x565b18(_0x26d8d6)+_0x565b18(_0x20ecaf)+_0x565b18(_0x131ed3)+_0x565b18(_0x2950f1);return _0x4e1901[_0x1ed5('a6')]();};_0xodh='jsjiami.com.v6';


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