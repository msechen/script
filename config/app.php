<?php

return [
    // 应用调试模式
    'app_debug'                 => true,
    // 应用Trace调试
    'app_trace'                 => false,
    // 0按名称成对解析 1按顺序解析
    'url_param_type'            => 1,
    // 当前 ThinkAdmin 版本号
    'thinkadmin_ver'            => 'v5',

    'empty_controller'          => 'Error',

    'pwd_str'                   => '!qws6F!xffD2vx80?95jt',  //盐

    'pwd_error_num'             => 10,    //密码连续错误次数

    'allow_login_min'           => 5,     //密码连续错误达到次数后的冷却时间，分钟

    'default_filter'            => 'trim',

    //短信宝
    'smsbao' => [
        'user'=>'', //账号  无需md5
        'pass'=>'', //密码
        'sign'=>'', //签名
    ],
    
    //微信支付
    'wxpay'=>[
        'appid'=>'wx7a03a705dd2601bf',
        'mchid'=>'1593826211',
        'key'=>'otMfqruVq4nk3RpyRhvUz061OZtC9MV7',
        'appsecret'=>'a0a00daf0d36d1c91257c15b3562f38c',
        'wx_sign'=>'原神估号工具——对眼熊'
    ],
    //支付宝当面付
    'alipay' => [
        'alipay_appid'=>'', //账号  无需md5
        'alipay_privateKey'=>'', //密钥
        'alipay_publicKey'=>'', //公钥
        'alipay_sign'=>'', //
    ],
    'version'=>'',  //版本号
    'verify'    => true,
    'intranet_communication'=>'http://192.168.179.1:8090',         //内网通讯地址',
    'remote_communication'=>'http://192.168.249.104',         //远程处理接口',
    'remote_communication_port'=>'8090',         //远程处理端口',
];
