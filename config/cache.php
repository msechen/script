<?php
return [
    'default'    =>    'file',
    'stores'    =>    [
        // 文件缓存
        'file'   =>  [
            // 驱动方式
            'type'   => 'file',
            // 设置不同的缓存保存目录
            'path'   => '../runtime/file/',
        ],  
        // redis缓存
        'redis'   =>  [
            // 驱动方式
            'type'   => 'redis',
            'host' => '127.0.0.1',
            'port' => '6379',
            'password'=>'123321',
            'timeout'=>3600,
            'expire'=>  0,
        ],  
    ],
];