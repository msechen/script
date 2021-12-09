/*

软件名称:NFT博物馆

项目注册地址:http://nftwatches.net
填写邀请码：680966	送一个雕像,不知道有没有效,我找不到入口,自己进好友界面看看

变量抓取:

必要变量:
变量名 soy_NFT_data
变量值 用户token&视频code2
注释:用户token抓包时域名service.nftbwg.net连接请求头上token值,code2是观看视频是域名cpu-openapi.baidu.com连接上的code2值
注意:点关口视频时提示视频缓存失败质量的是没有这个code2值的

多个号用 @ 或 # 或 换行 隔开

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_NFT.js

*/


const $ = new Env('NFT博物馆');
const notify = $.isNode() ? require('./sendNotify') : '';

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxd4236=["","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\x6C\x6F\x67\x45\x72\x72","\x63\x61\x74\x63\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x69\x73\x4E\x6F\x64\x65","\x73\x6F\x79\x5F\x4E\x46\x54\x5F\x64\x61\x74\x61","\x65\x6E\x76","\x5C\x6E\u3010","\x6E\x61\x6D\x65","\u3011\uFF1A\u672A\u586B\u5199\u76F8\u5BF9\u5E94\u7684\u53D8\u91CF","\x6C\x6F\x67","\x40","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x70\x6C\x69\x74","\x0A","\x23","\x67\x65\x74\x64\x61\x74\x61","\u3011\uFF1A\u672A\u586B\u5199\u76F8\u5E94\u53D8\u91CF\x20\x73\x6F\x79\x5F\x4E\x46\x54\x5F\x64\x61\x74\x61","\x5C\x6E\x3D\x3D\x3D\x20\u811A\u672C\u6267\u884C\x20\x2D\x20\u5317\u4EAC\u65F6\u95F4\uFF1A","\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x53\x74\x72\x69\x6E\x67","\x67\x65\x74\x54\x69\x6D\x65","\x67\x65\x74\x54\x69\x6D\x65\x7A\x6F\x6E\x65\x4F\x66\x66\x73\x65\x74","\x20\x3D\x3D\x3D\x5C\x6E","\x3D\x3D\x3D\u3010\u5171\x20","\x6C\x65\x6E\x67\x74\x68","\x20\u4E2A\u8D26\u53F7\u3011\x3D\x3D\x3D\x5C\x6E","\x26","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x6E\x6F\x2D\x63\x61\x63\x68\x65","\x44\x61\x6C\x76\x69\x6B\x2F\x32\x2E\x31\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x55\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x53\x4B\x57\x2D\x41\x30\x20\x4D\x49\x55\x49\x2F\x56\x31\x31\x2E\x30\x2E\x34\x2E\x30\x2E\x4A\x4F\x59\x55\x49\x29","\x63\x70\x75\x2D\x6F\x70\x65\x6E\x61\x70\x69\x2E\x62\x61\x69\x64\x75\x2E\x63\x6F\x6D","\x69\x6E\x64\x65\x78","\x5C\x6E\u5F00\u59CB\u3010\u7B2C\x20","\x20\u4E2A\u8D26\u53F7\u4EFB\u52A1\u3011","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x65\x65\x2E\x63\x6F\x6D\x2F\x73\x6F\x79\x2D\x74\x6F\x6F\x6C\x2F\x61\x70\x70\x2D\x73\x63\x72\x69\x70\x74\x2F\x72\x61\x77\x2F\x6D\x61\x73\x74\x65\x72\x2F\x63\x6F\x6E\x66\x69\x67\x2F\x67\x69\x74\x5F\x74\x6F\x6B\x65\x6E\x2E\x6A\x73","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x57\x69\x6E\x64\x6F\x77\x73\x20\x4E\x54\x20\x31\x30\x2E\x30\x3B\x20\x57\x69\x6E\x36\x34\x3B\x20\x78\x36\x34\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x43\x68\x72\x6F\x6D\x65\x2F\x39\x30\x2E\x30\x2E\x34\x34\x33\x30\x2E\x39\x33\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36\x20\x45\x64\x67\x2F\x39\x30\x2E\x30\x2E\x38\x31\x38\x2E\x35\x31","\x67\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x65\x65\x2E\x63\x6F\x6D\x2F\x73\x6F\x79\x2D\x74\x6F\x6F\x6C\x2F\x61\x70\x70\x2D\x73\x63\x72\x69\x70\x74\x2F\x72\x61\x77\x2F\x6D\x61\x73\x74\x65\x72\x2F\x63\x6F\x6E\x66\x69\x67\x2F\x4E\x46\x54\x5F\x63\x6F\x64\x65\x2E\x6A\x73","\x75\x73\x65\x72","\x70\x61\x72\x73\x65","\x69\x64","\x2D\x2D\x2D\u8D26\u53F7\x20","\x20\u83B7\u53D6\u7528\u6237\x49\x44\u3011\x3A\x20\u65E0\u6CD5\u83B7\u53D6\u5230\u6570\u636E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x65\x65\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x76\x35\x2F\x72\x65\x70\x6F\x73\x2F\x73\x6F\x79\x2D\x74\x6F\x6F\x6C\x2F\x61\x70\x70\x2D\x73\x63\x72\x69\x70\x74\x2F\x63\x6F\x6E\x74\x65\x6E\x74\x73\x2F\x63\x6F\x6E\x66\x69\x67\x2F\x4E\x46\x54\x5F\x63\x6F\x64\x65\x2E\x6A\x73","\x4E\x46\x54\x5F\x63\x6F\x64\x65\x2E\x6A\x73","\x73\x68\x61","\x2D\x2D\x2D\u66F4\u65B0\x47\x69\x74\x65\x65\u7528\u6237\x49\x44\u3011\x3A\x20\u5DF2\u5B58\u5728\x2C\u65E0\u9650\u66F4\u65B0","\x77\x61\x69\x74","\x6D\x61\x74\x63\x68","\x2C\x7B\x22\x69\x64\x22\x3A","\x7D\x5D\x7D","\x65\x6E\x63\x6F\x64\x65","\x2D\x2D\x2D\u6587\u6863\x73\x68\x61\u3011\x3A\x20\u83B7\u53D6\x47\x69\x74\x65\x65\u6587\u6863\x73\x68\x61\u5931\u8D25","\x73\x74\x61\x74\x75\x73","\x2D\x2D\x2D\u66F4\u65B0\x47\x69\x74\x65\x65\u7528\u6237\x49\x44\u3011\x3A\x20\u66F4\u65B0\u6210\u529F","\x2D\x2D\x2D\u66F4\u65B0\x47\x69\x74\x65\x65\u7528\u6237\x49\x44\u3011\x3A\x20\u66F4\u65B0\u5931\u8D25","\x74\x68\x65\x6E","\u66F4\u65B0\x47\x69\x74\x65\x65\u52A9\u529B\u7801\u5931\u8D25\x2C\u5F53\u524D\u7F51\u7EDC\u5F02\u5E38","\x67\x69\x74\x65\x65\x2E\x63\x6F\x6D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x63\x68\x61\x72\x73\x65\x74\x3D\x75\x74\x66\x2D\x38","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x57\x69\x6E\x64\x6F\x77\x73\x20\x4E\x54\x20\x31\x30\x2E\x30\x3B\x20\x57\x69\x6E\x36\x34\x3B\x20\x78\x36\x34\x3B\x20\x72\x76\x3A\x39\x34\x2E\x30\x29\x20\x47\x65\x63\x6B\x6F\x2F\x32\x30\x31\x30\x30\x31\x30\x31\x20\x46\x69\x72\x65\x66\x6F\x78\x2F\x39\x34\x2E\x30","\x70\x75\x74","\x7B\x22\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x22\x3A\x22","\x22\x2C\x22\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3A\x22","\x22\x2C\x22\x73\x68\x61\x22\x3A\x22","\x22\x2C\x22\x6D\x65\x73\x73\x61\x67\x65\x22\x3A\x22\x75\x70\x64\x61\x74\x65\x22\x7D","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x65\x72\x76\x69\x63\x65\x2E\x6E\x66\x74\x62\x77\x67\x2E\x6E\x65\x74\x2F\x68\x6F\x6D\x65\x2F\x76\x69\x65\x77","\x73\x65\x72\x76\x69\x63\x65\x2E\x6E\x66\x74\x62\x77\x67\x2E\x6E\x65\x74","\x4B\x65\x65\x70\x2D\x41\x6C\x69\x76\x65","\x67\x7A\x69\x70","\x6F\x6B\x68\x74\x74\x70\x2F\x33\x2E\x31\x34\x2E\x39","\x20\u7528\u6237\u4FE1\u606F\u3011\x3A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\x20\u7528\u6237\u4FE1\u606F\u3011\x3A\x20\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25","\x63\x6F\x64\x65","\x64\x61\x74\x61","\x69\x73\x53\x69\x67\x6E","\x75\x73\x65\x72\x49\x64","\x64\x61\x79\x41\x72\x74","\x62\x61\x6C\x61\x6E\x63\x65","\x73\x74\x61\x74\x75\x65\x55\x73\x65\x72\x4A\x73\x6F\x6E\x73","\x5C\x6E\x2D\x2D\x2D\u96D5\u50CF","\x73\x74\x61\x74\x75\x65\x4E\x61\x6D\x65","\u7B49\u7EA7\uFF1A","\x73\x69\x64","\x20\u7EA7","\x20\u7528\u6237\u4FE1\u606F\u3011\x3A\x20\x5C\x6E\x2D\x2D\x2D\u7528\u6237\u6635\u79F0\uFF1A","\x5C\x6E\x2D\x2D\x2D\u7528\u6237\x49\x44\uFF1A","\x5C\x6E\x2D\x2D\x2D\u53EF\u8D60\u9001\u6B21\u6570\uFF1A","\x5C\x6E\x2D\x2D\x2D\u5F53\u524D\x56\x49\x50\u7B49\u7EA7\x3A\x20","\x76\x69\x70\x4C\x65\x76\x65\x6C","\x5C\x6E\x2D\x2D\x2D\u4ECA\u65E5\u6536\u53D6\u95E8\u7968\x3A\x20","\x20\u6B21\x5C\x6E\x2D\x2D\x2D\u96D5\u50CF\u6570\u91CF\uFF1A","\x5C\x6E\x2D\x2D\x2D\u5F53\u524D\u8D44\u4EA7\u7EA6\uFF1A","\x62\x61\x6C\x61\x6E\x63\x65\x55\x6E\x69\x74","\x20\u6536\u53D6\u95E8\u7968\u3011\x3A\x20\u4ECA\u5929\u95E8\u7968\u5DF2\u6536\u53D6\u5B8C\u6210","\x20\u7528\u6237\u4FE1\u606F\u3011\x3A\x20","\x6D\x65\x73\x73\x61\x67\x65","\x70\x6F\x73\x74","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x65\x72\x76\x69\x63\x65\x2E\x6E\x66\x74\x62\x77\x67\x2E\x6E\x65\x74\x2F\x68\x6F\x6D\x65\x2F\x67\x69\x76\x65\x41\x72\x74\x3F\x6D\x65\x6D\x6F\x3D","\x20\u8D60\u9001\u7EC6\u80DE\u3011\x3A\x20","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x65\x72\x76\x69\x63\x65\x2E\x6E\x66\x74\x62\x77\x67\x2E\x6E\x65\x74\x2F\x68\x6F\x6D\x65\x2F\x73\x69\x67\x6E\x44\x3F\x75\x73\x65\x72\x49\x64\x3D","\x26\x74\x72\x61\x6E\x73\x49\x64\x3D\x32\x30\x30\x34\x38\x37\x36\x32\x34\x30\x31\x30\x32\x37\x30\x37\x36\x39\x37\x5F\x31\x30\x31\x38\x32\x30\x35\x32\x34\x39\x37\x26\x73\x69\x67\x6E\x3D\x61\x38\x63\x37\x34\x31\x64\x61\x35\x33\x35\x33\x30\x66\x62\x66\x63\x65\x34\x36\x34\x30\x66\x63\x64\x37\x36\x31\x39\x62\x63\x66\x26\x61\x6D\x6F\x75\x6E\x74\x3D\x30\x26\x6E\x61\x6D\x65\x3D\x25\x45\x37\x25\x41\x37\x25\x41\x46\x25\x45\x35\x25\x38\x38\x25\x38\x36\x26\x65\x78\x74\x72\x61\x3D\x30\x30\x30\x30\x30\x30\x30\x30\x2D\x35\x61\x38\x38\x2D\x35\x63\x66\x63\x2D\x35\x61\x38\x38\x2D\x35\x63\x66\x63\x30\x30\x30\x30\x30\x30\x30\x30","\x44\x61\x6C\x76\x69\x6B\x2F\x32\x2E\x31\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x55\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x37\x2E\x31\x2E\x32\x3B\x20\x56\x4F\x47\x2D\x41\x4C\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x4E\x32\x47\x34\x38\x48\x29","\x69\x73\x56\x61\x6C\x69\x64","\x20\u83B7\u53D6\u95E8\u7968\u3011\x3A\x20","\x6D\x73\x67","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x65\x72\x76\x69\x63\x65\x2E\x6E\x66\x74\x62\x77\x67\x2E\x6E\x65\x74\x2F\x68\x6F\x6D\x65\x2F\x67\x65\x74\x44\x61\x79\x53\x69\x67\x6E\x3F\x75\x73\x65\x72\x5F\x69\x64\x3D","\x20\u6536\u53D6\u95E8\u7968\u3011\x3A\x20\u83B7\u5F97\x20","\x65\x61\x72\x6E\x69\x6E\x67\x73","\x20\x4E\x46\x54\u5E01","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x20\u6536\u53D6\u95E8\u7968\u3011\x3A\x20","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x65\x72\x76\x69\x63\x65\x2E\x6E\x66\x74\x62\x77\x67\x2E\x6E\x65\x74\x2F\x6C\x6F\x67\x69\x6E\x2F\x6F\x66\x66\x45\x61\x72\x6E\x69\x6E\x67\x73","\x20\u6536\u53D6\u79BB\u7EBF\u5956\u52B1\u3011\x3A\x20","\x2C\u83B7\u5F97\x20","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x65\x72\x76\x69\x63\x65\x2E\x6E\x66\x74\x62\x77\x67\x2E\x6E\x65\x74\x2F\x61\x73\x73\x65\x74\x2F\x6F\x75\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x20\x63\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38","\x7B\x22\x6E\x75\x6D\x62\x65\x72\x22\x3A","\x2C\x22\x6F\x75\x74\x41\x64\x64\x72\x65\x73\x73\x22\x3A\x22\x22\x2C\x22\x74\x79\x70\x65\x22\x3A\x32\x7D","\x20\u63D0\u73B0\u3011\x3A\x20","\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F\x3D","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x63\x68\x61\x72\x41\x74","\x64\x65\x63\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let NFT_count=__Oxd4236[0x0],app_soy_NFT_data=[],user_name=__Oxd4236[0x0],statue=__Oxd4236[0x0],subTitle=__Oxd4236[0x0];!(async ()=>{if( typeof $request!== __Oxd4236[0x5]){ await NFT_getdata()}else {if($[__Oxd4236[0x6]]()){if(!process[__Oxd4236[0x8]][__Oxd4236[0x7]]){console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0xb]}`);return};if(process[__Oxd4236[0x8]][__Oxd4236[0x7]]&& process[__Oxd4236[0x8]][__Oxd4236[0x7]][__Oxd4236[0xe]](__Oxd4236[0xd])>  -1){app_soy_NFT_data= process[__Oxd4236[0x8]][__Oxd4236[0x7]][__Oxd4236[0xf]](__Oxd4236[0xd])}else {if(process[__Oxd4236[0x8]][__Oxd4236[0x7]]&& process[__Oxd4236[0x8]][__Oxd4236[0x7]][__Oxd4236[0xe]](__Oxd4236[0x10])>  -1){app_soy_NFT_data= process[__Oxd4236[0x8]][__Oxd4236[0x7]][__Oxd4236[0xf]](__Oxd4236[0x10])}else {if(process[__Oxd4236[0x8]][__Oxd4236[0x7]]&& process[__Oxd4236[0x8]][__Oxd4236[0x7]][__Oxd4236[0xe]](__Oxd4236[0x11])>  -1){app_soy_NFT_data= process[__Oxd4236[0x8]][__Oxd4236[0x7]][__Oxd4236[0xf]](__Oxd4236[0x11])}else {app_soy_NFT_data= process[__Oxd4236[0x8]][__Oxd4236[0x7]][__Oxd4236[0xf]]()}}}}else {if(!$[__Oxd4236[0x12]](__Oxd4236[0x7])){console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x13]}`);return};if($[__Oxd4236[0x12]](__Oxd4236[0x7])&& $[__Oxd4236[0x12]](__Oxd4236[0x7])[__Oxd4236[0xe]](__Oxd4236[0xd])>  -1){app_soy_NFT_data= $[__Oxd4236[0x12]](__Oxd4236[0x7])[__Oxd4236[0xf]](__Oxd4236[0xd])}else {if($[__Oxd4236[0x12]](__Oxd4236[0x7])&& $[__Oxd4236[0x12]](__Oxd4236[0x7])[__Oxd4236[0xe]](__Oxd4236[0x10])>  -1){app_soy_NFT_data= $[__Oxd4236[0x12]](__Oxd4236[0x7])[__Oxd4236[0xf]](__Oxd4236[0x10])}else {if($[__Oxd4236[0x12]](__Oxd4236[0x7])&& $[__Oxd4236[0x12]](__Oxd4236[0x7])[__Oxd4236[0xe]](__Oxd4236[0x11])>  -1){app_soy_NFT_data= $[__Oxd4236[0x12]](__Oxd4236[0x7])[__Oxd4236[0xf]](__Oxd4236[0x11])}else {app_soy_NFT_data= $[__Oxd4236[0x12]](__Oxd4236[0x7])[__Oxd4236[0xf]]()}}}}};console[__Oxd4236[0xc]](`${__Oxd4236[0x14]}${ new Date( new Date()[__Oxd4236[0x16]]()+  new Date()[__Oxd4236[0x17]]()* 60* 1000+ 8* 60* 60* 1000)[__Oxd4236[0x15]]()}${__Oxd4236[0x18]}`);console[__Oxd4236[0xc]](`${__Oxd4236[0x19]}${app_soy_NFT_data[__Oxd4236[0x1a]]}${__Oxd4236[0x1b]}`);for(i= 0;i< app_soy_NFT_data[__Oxd4236[0x1a]];i++){soy_NFT_data= app_soy_NFT_data[i][__Oxd4236[0xf]](__Oxd4236[0x1c]);soy_NFT_token= soy_NFT_data[0x0];soy_NFT_code= soy_NFT_data[0x1];soy_NFT_headers= {"\x74\x6F\x6B\x65\x6E":soy_NFT_token,"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxd4236[0x1d],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxd4236[0x1e],"\x43\x61\x63\x68\x65\x2D\x43\x6F\x6E\x74\x72\x6F\x6C":__Oxd4236[0x1f],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxd4236[0x20],"\x48\x6F\x73\x74":__Oxd4236[0x21]};$[__Oxd4236[0x22]]= i+ 1;console[__Oxd4236[0xc]](`${__Oxd4236[0x23]}${$[__Oxd4236[0x22]]}${__Oxd4236[0x24]}`); await soy_NFT_offEarnings(); await soy_NFT_home()};if($[__Oxd4236[0x6]]()){ await notify[__Oxd4236[0x25]]($[__Oxd4236[0xa]],subTitle)}})()[__Oxd4236[0x4]]((_0x3965x6)=>{return $[__Oxd4236[0x3]](_0x3965x6)})[__Oxd4236[0x2]](()=>{return $[__Oxd4236[0x1]]()});function get_gittoken(){return  new Promise((_0x3965x8)=>{let _0x3965x9={url:`${__Oxd4236[0x26]}`,headers:{"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxd4236[0x27]}};$[__Oxd4236[0x28]](_0x3965x9,async (_0x3965xa,_0x3965xb,_0x3965xc)=>{try{gittoken= _0x3965xc}catch(e){}finally{_0x3965x8()}})})}function get_NFT_code(_0x3965xe){return  new Promise((_0x3965x8)=>{let _0x3965x9={url:`${__Oxd4236[0x29]}`,headers:{"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxd4236[0x27]}};$[__Oxd4236[0x28]](_0x3965x9,async (_0x3965xa,_0x3965xb,_0x3965xc)=>{try{if(_0x3965xc[__Oxd4236[0xe]](__Oxd4236[0x2a])>  -1){let _0x3965xf=JSON[__Oxd4236[0x2b]](_0x3965xc);git_code= _0x3965xc;if(_0x3965xe== 0){for(user_list of _0x3965xf[__Oxd4236[0x2a]]){ await soy_NFT_memo(user_list[__Oxd4236[0x2c]])}};if(_0x3965xe== 1){ await get_sha()}}else {console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${$[__Oxd4236[0x22]]}${__Oxd4236[0x2e]}`)}}catch(e){}finally{_0x3965x8()}})})}function get_sha(){return  new Promise((_0x3965x8)=>{let _0x3965x9={url:`${__Oxd4236[0x2f]}`,headers:{"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxd4236[0x27]}};$[__Oxd4236[0x28]](_0x3965x9,async (_0x3965xa,_0x3965xb,_0x3965xc)=>{try{let _0x3965xf=JSON[__Oxd4236[0x2b]](_0x3965xc);if(_0x3965xf[__Oxd4236[0xa]]== __Oxd4236[0x30]){code_sha= _0x3965xf[__Oxd4236[0x31]];if(git_code[__Oxd4236[0xe]](`${__Oxd4236[0x0]}${userId}${__Oxd4236[0x0]}`)>  -1){console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x32]}`)}else { await get_gittoken(); await $[__Oxd4236[0x33]](1500);library_code= git_code[__Oxd4236[0x34]](/(\S*)]}/)[0x1];let _0x3965x11= new Base64();update_code= _0x3965x11[__Oxd4236[0x37]](`${__Oxd4236[0x0]}${library_code}${__Oxd4236[0x35]}${userId}${__Oxd4236[0x36]}`); await $[__Oxd4236[0x33]](1500); await get_gitput()}}else {console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x38]}`)}}catch(e){}finally{_0x3965x8()}})})}async function get_gitput(){ await axios({url:__Oxd4236[0x2f],headers:{"\x48\x6F\x73\x74":__Oxd4236[0x3e],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxd4236[0x3f],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxd4236[0x40]},method:__Oxd4236[0x41],data:`${__Oxd4236[0x42]}${gittoken}${__Oxd4236[0x43]}${update_code}${__Oxd4236[0x44]}${code_sha}${__Oxd4236[0x45]}`})[__Oxd4236[0x4]](function(_0x3965x13){console[__Oxd4236[0xc]](__Oxd4236[0x3d])})[__Oxd4236[0x3c]](function(_0x3965xf){if(_0x3965xf[__Oxd4236[0x39]]= 200){console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x3a]}`)}else {console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x3b]}`)}})}function soy_NFT_home(){return  new Promise((_0x3965x8,_0x3965x15)=>{$[__Oxd4236[0x65]]({url:`${__Oxd4236[0x46]}`,headers:{"\x74\x6F\x6B\x65\x6E":soy_NFT_token,"\x48\x6F\x73\x74":__Oxd4236[0x47],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxd4236[0x48],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxd4236[0x49],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxd4236[0x4a]},body:__Oxd4236[0x0]},async (_0x3965x13,_0x3965x16,_0x3965xc)=>{try{if(_0x3965x13){console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x4b]}`);subTitle+= `${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x4c]}`}else {let _0x3965xf=JSON[__Oxd4236[0x2b]](_0x3965xc);if(_0x3965xf[__Oxd4236[0x4d]]== 200){user_name= _0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0xa]];adfrequency= _0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x4f]];userId= _0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x50]];ID= _0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x2c]];dayArt= _0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x51]];NFT= _0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x52]];if(!user_name){user_name= $[__Oxd4236[0x22]]};statue= __Oxd4236[0x0];for(let _0x3965x17=0;_0x3965x17< _0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x53]][__Oxd4236[0x1a]];_0x3965x17++){statue+= `${__Oxd4236[0x54]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x53]][_0x3965x17][__Oxd4236[0x55]]}${__Oxd4236[0x56]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x53]][_0x3965x17][__Oxd4236[0x57]]}${__Oxd4236[0x58]}`};console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x59]}${user_name}${__Oxd4236[0x5a]}${userId}${__Oxd4236[0x5b]}${dayArt}${__Oxd4236[0x5c]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x5d]]}${__Oxd4236[0x5e]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x4f]]}${__Oxd4236[0x5f]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x53]][__Oxd4236[0x1a]]}${__Oxd4236[0x60]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x61]]}${__Oxd4236[0x0]}${statue}${__Oxd4236[0x0]}`);subTitle+= `${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x59]}${user_name}${__Oxd4236[0x5c]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x5d]]}${__Oxd4236[0x5e]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x4f]]}${__Oxd4236[0x5f]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x53]][__Oxd4236[0x1a]]}${__Oxd4236[0x60]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x61]]}${__Oxd4236[0x0]}${statue}${__Oxd4236[0x0]}`;if(adfrequency< 6){ await soy_NFT_daySign()}else {console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${$[__Oxd4236[0x22]]}${__Oxd4236[0x62]}`)};if(dayArt> 0){ await get_NFT_code(0)}; await $[__Oxd4236[0x33]](1500); await get_NFT_code(1); await soy_NFT_out()}else {console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${$[__Oxd4236[0x22]]}${__Oxd4236[0x63]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x0]}`);subTitle+= `${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${$[__Oxd4236[0x22]]}${__Oxd4236[0x63]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x0]}`}}}catch(e){console[__Oxd4236[0xc]](e,_0x3965x16)}finally{_0x3965x8()}})})}function soy_NFT_memo(_0x3965x19){return  new Promise((_0x3965x8,_0x3965x15)=>{$[__Oxd4236[0x28]]({url:`${__Oxd4236[0x66]}${_0x3965x19}${__Oxd4236[0x0]}`,headers:soy_NFT_headers},async (_0x3965x13,_0x3965x16,_0x3965xc)=>{try{let _0x3965xf=JSON[__Oxd4236[0x2b]](_0x3965xc);if(_0x3965xf[__Oxd4236[0x4d]]== 200){console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x67]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x0]}`)}else {console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${$[__Oxd4236[0x22]]}${__Oxd4236[0x67]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x0]}`)}}catch(e){console[__Oxd4236[0xc]](e,_0x3965x16)}finally{_0x3965x8()}})})}function soy_NFT_daySign(){return  new Promise((_0x3965x8,_0x3965x15)=>{$[__Oxd4236[0x28]]({url:`${__Oxd4236[0x68]}${ID}${__Oxd4236[0x69]}`,headers:{"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxd4236[0x1d],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxd4236[0x1e],"\x43\x61\x63\x68\x65\x2D\x43\x6F\x6E\x74\x72\x6F\x6C":__Oxd4236[0x1f],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxd4236[0x6a],"\x48\x6F\x73\x74":__Oxd4236[0x47]}},async (_0x3965x13,_0x3965x16,_0x3965xc)=>{try{let _0x3965xf=JSON[__Oxd4236[0x2b]](_0x3965xc);if(_0x3965xf[__Oxd4236[0x6b]]){ await soy_NFT_getDaySign()}else {console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x6c]}${_0x3965xf[__Oxd4236[0x6d]]}${__Oxd4236[0x0]}`)}}catch(e){console[__Oxd4236[0xc]](e,_0x3965x16)}finally{_0x3965x8()}})})}function soy_NFT_getDaySign(){return  new Promise((_0x3965x8,_0x3965x15)=>{$[__Oxd4236[0x28]]({url:`${__Oxd4236[0x6e]}${ID}${__Oxd4236[0x0]}`,headers:soy_NFT_headers},async (_0x3965x13,_0x3965x16,_0x3965xc)=>{try{let _0x3965xf=JSON[__Oxd4236[0x2b]](_0x3965xc);if(_0x3965xf[__Oxd4236[0x4d]]== 200){console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x6f]}${_0x3965xf[__Oxd4236[0x4e]][__Oxd4236[0x70]]}${__Oxd4236[0x71]}`);let _0x3965x1c=Math[__Oxd4236[0x73]](Math[__Oxd4236[0x72]]()* (32000- 28000+ 1000)+ 28000); await $[__Oxd4236[0x33]](_0x3965x1c); await soy_NFT_daySign()}else {console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${$[__Oxd4236[0x22]]}${__Oxd4236[0x74]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x0]}`)}}catch(e){console[__Oxd4236[0xc]](e,_0x3965x16)}finally{_0x3965x8()}})})}function soy_NFT_offEarnings(){return  new Promise((_0x3965x8,_0x3965x15)=>{$[__Oxd4236[0x28]]({url:`${__Oxd4236[0x75]}`,headers:soy_NFT_headers},async (_0x3965x13,_0x3965x16,_0x3965xc)=>{try{let _0x3965xf=JSON[__Oxd4236[0x2b]](_0x3965xc);if(_0x3965xf[__Oxd4236[0x4d]]== 200){console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x76]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x77]}${_0x3965xf[__Oxd4236[0x4e]]}${__Oxd4236[0x71]}`)}else {console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${$[__Oxd4236[0x22]]}${__Oxd4236[0x76]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x0]}`)}}catch(e){console[__Oxd4236[0xc]](e,_0x3965x16)}finally{_0x3965x8()}})})}function soy_NFT_out(){return  new Promise((_0x3965x8,_0x3965x15)=>{$[__Oxd4236[0x65]]({url:`${__Oxd4236[0x78]}`,headers:{"\x74\x6F\x6B\x65\x6E":soy_NFT_token,"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxd4236[0x79],"\x48\x6F\x73\x74":__Oxd4236[0x47],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxd4236[0x48],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxd4236[0x49],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxd4236[0x4a]},body:`${__Oxd4236[0x7a]}${NFT}${__Oxd4236[0x7b]}`},async (_0x3965x13,_0x3965x16,_0x3965xc)=>{try{let _0x3965xf=JSON[__Oxd4236[0x2b]](_0x3965xc);if(_0x3965xf[__Oxd4236[0x4d]]== 200){console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x7c]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x0]}`);subTitle+= `${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x7c]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x0]}`}else {console[__Oxd4236[0xc]](`${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${$[__Oxd4236[0x22]]}${__Oxd4236[0x7c]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x0]}`);subTitle+= `${__Oxd4236[0x9]}${$[__Oxd4236[0xa]]}${__Oxd4236[0x2d]}${user_name}${__Oxd4236[0x7c]}${_0x3965xf[__Oxd4236[0x64]]}${__Oxd4236[0x0]}`}}catch(e){console[__Oxd4236[0xc]](e,_0x3965x16)}finally{_0x3965x8()}})})}function Base64(){_keyStr= __Oxd4236[0x7d];this[__Oxd4236[0x37]]= function(_0x3965x20){var _0x3965x21=__Oxd4236[0x0];var _0x3965x22,_0x3965x23,_0x3965x24,_0x3965x25,_0x3965x26,_0x3965x27,_0x3965x28;var _0x3965x29=0;_0x3965x20= _utf8_encode(_0x3965x20);while(_0x3965x29< _0x3965x20[__Oxd4236[0x1a]]){_0x3965x22= _0x3965x20[__Oxd4236[0x7e]](_0x3965x29++);_0x3965x23= _0x3965x20[__Oxd4236[0x7e]](_0x3965x29++);_0x3965x24= _0x3965x20[__Oxd4236[0x7e]](_0x3965x29++);_0x3965x25= _0x3965x22>> 2;_0x3965x26= ((_0x3965x22& 3)<< 4)| (_0x3965x23>> 4);_0x3965x27= ((_0x3965x23& 15)<< 2)| (_0x3965x24>> 6);_0x3965x28= _0x3965x24& 63;if(isNaN(_0x3965x23)){_0x3965x27= _0x3965x28= 64}else {if(isNaN(_0x3965x24)){_0x3965x28= 64}};_0x3965x21= _0x3965x21+ _keyStr[__Oxd4236[0x7f]](_0x3965x25)+ _keyStr[__Oxd4236[0x7f]](_0x3965x26)+ _keyStr[__Oxd4236[0x7f]](_0x3965x27)+ _keyStr[__Oxd4236[0x7f]](_0x3965x28)};return _0x3965x21};this[__Oxd4236[0x80]]= function(_0x3965x20){var _0x3965x21=__Oxd4236[0x0];var _0x3965x22,_0x3965x23,_0x3965x24;var _0x3965x25,_0x3965x26,_0x3965x27,_0x3965x28;var _0x3965x29=0;_0x3965x20= _0x3965x20[__Oxd4236[0x81]](/[^A-Za-z0-9\+\/\=]/g,__Oxd4236[0x0]);while(_0x3965x29< _0x3965x20[__Oxd4236[0x1a]]){_0x3965x25= _keyStr[__Oxd4236[0xe]](_0x3965x20[__Oxd4236[0x7f]](_0x3965x29++));_0x3965x26= _keyStr[__Oxd4236[0xe]](_0x3965x20[__Oxd4236[0x7f]](_0x3965x29++));_0x3965x27= _keyStr[__Oxd4236[0xe]](_0x3965x20[__Oxd4236[0x7f]](_0x3965x29++));_0x3965x28= _keyStr[__Oxd4236[0xe]](_0x3965x20[__Oxd4236[0x7f]](_0x3965x29++));_0x3965x22= (_0x3965x25<< 2)| (_0x3965x26>> 4);_0x3965x23= ((_0x3965x26& 15)<< 4)| (_0x3965x27>> 2);_0x3965x24= ((_0x3965x27& 3)<< 6)| _0x3965x28;_0x3965x21= _0x3965x21+ String[__Oxd4236[0x82]](_0x3965x22);if(_0x3965x27!= 64){_0x3965x21= _0x3965x21+ String[__Oxd4236[0x82]](_0x3965x23)};if(_0x3965x28!= 64){_0x3965x21= _0x3965x21+ String[__Oxd4236[0x82]](_0x3965x24)}};_0x3965x21= _utf8_decode(_0x3965x21);return _0x3965x21};_utf8_encode= function(_0x3965x2a){_0x3965x2a= _0x3965x2a[__Oxd4236[0x81]](/\r\n/g,__Oxd4236[0x10]);var _0x3965x2b=__Oxd4236[0x0];for(var _0x3965x2c=0;_0x3965x2c< _0x3965x2a[__Oxd4236[0x1a]];_0x3965x2c++){var _0x3965x2d=_0x3965x2a[__Oxd4236[0x7e]](_0x3965x2c);if(_0x3965x2d< 128){_0x3965x2b+= String[__Oxd4236[0x82]](_0x3965x2d)}else {if((_0x3965x2d> 127)&& (_0x3965x2d< 2048)){_0x3965x2b+= String[__Oxd4236[0x82]]((_0x3965x2d>> 6)| 192);_0x3965x2b+= String[__Oxd4236[0x82]]((_0x3965x2d& 63)| 128)}else {_0x3965x2b+= String[__Oxd4236[0x82]]((_0x3965x2d>> 12)| 224);_0x3965x2b+= String[__Oxd4236[0x82]](((_0x3965x2d>> 6)& 63)| 128);_0x3965x2b+= String[__Oxd4236[0x82]]((_0x3965x2d& 63)| 128)}}};return _0x3965x2b};_utf8_decode= function(_0x3965x2b){var _0x3965x2a=__Oxd4236[0x0];var _0x3965x29=0;var _0x3965x2d=c1= c2= 0;while(_0x3965x29< _0x3965x2b[__Oxd4236[0x1a]]){_0x3965x2d= _0x3965x2b[__Oxd4236[0x7e]](_0x3965x29);if(_0x3965x2d< 128){_0x3965x2a+= String[__Oxd4236[0x82]](_0x3965x2d);_0x3965x29++}else {if((_0x3965x2d> 191)&& (_0x3965x2d< 224)){c2= _0x3965x2b[__Oxd4236[0x7e]](_0x3965x29+ 1);_0x3965x2a+= String[__Oxd4236[0x82]](((_0x3965x2d& 31)<< 6)| (c2& 63));_0x3965x29+= 2}else {c2= _0x3965x2b[__Oxd4236[0x7e]](_0x3965x29+ 1);c3= _0x3965x2b[__Oxd4236[0x7e]](_0x3965x29+ 2);_0x3965x2a+= String[__Oxd4236[0x82]](((_0x3965x2d& 15)<< 12)| ((c2& 63)<< 6)| (c3& 63));_0x3965x29+= 3}}};return _0x3965x2a}}(function(_0x3965x2e,_0x3965x2d,_0x3965x2f,_0x3965x30,_0x3965x31,_0x3965x32){_0x3965x32= __Oxd4236[0x5];_0x3965x30= function(_0x3965x33){if( typeof alert!== _0x3965x32){alert(_0x3965x33)};if( typeof console!== _0x3965x32){console[__Oxd4236[0xc]](_0x3965x33)}};_0x3965x2f= function(_0x3965x34,_0x3965x2e){return _0x3965x34+ _0x3965x2e};_0x3965x31= _0x3965x2f(__Oxd4236[0x83],_0x3965x2f(_0x3965x2f(__Oxd4236[0x84],__Oxd4236[0x85]),__Oxd4236[0x86]));try{_0x3965x2e= __encode;if(!( typeof _0x3965x2e!== _0x3965x32&& _0x3965x2e=== _0x3965x2f(__Oxd4236[0x87],__Oxd4236[0x88]))){_0x3965x30(_0x3965x31)}}catch(e){_0x3965x30(_0x3965x31)}})({})


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