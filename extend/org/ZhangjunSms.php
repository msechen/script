<?php

namespace org;

use library\tools\Http;

//掌骏传媒
class ZhangjunSms {
/*
发送短信
$time=date('YmdHis',time());//时间戳，系统当前时间字符串，年月日时分秒
$md5=md5('jmwzp'.'123456'.$time);//MD5加密，账号+密码+时间戳
$str1='【天宇互动】祝您生活愉快';//短信内容
$contented = iconv("gb2312","utf-8//IGNORE",$str1);//将短信内容装换成

$result=sendsms('11',$time,$md5,'13611452175',$contented);//ID、MD5加密值、手机号、短信内容

echo $time,$md5,$result;
*/
public static function sendsms($userid,$timestamp,$sign,$mobile,$content){
    $res = \library\tools\Http::post('http://120.77.14.55:8888/v2sms.aspx',[
        'action' => 'send', 
        'userid' => $userid,
        'timestamp'=>$timestamp,
        'sign'=> $sign,
        'mobile' => $mobile,
        'content' => $content, 
        'sendtime'=>'',
        'extno'=>'',
    ]);

    if ($res == 'ok')
        return ['status' => 0, 'msg' => "发送成功"];
    else
        return ['status' => 1, 'msg' => $res];
}
}