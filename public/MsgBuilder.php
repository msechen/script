<?php

//发送文字消息
function SendTextMsg($request,$msg){
    $req_event = $request  ['event'];
        if($req_event == 'EventGroupMsg'){
            $event = 'SendGroupMsgAndAt';
            $group_wxid = $request  ['from_wxid'];
        }else{
            $event = 'SendTextMsg';
            $group_wxid = '';
        }
    return [
            "event" => $event,
            "robot_wxid" => $request['robot_wxid'],
            "to_wxid" => $request['from_wxid'] ? $request['from_wxid'] : $request['final_from_wxid'],
            "msg" => formatEmoji($msg),
            "member_wxid" => $request  ['final_from_wxid'],
            "member_name" => $request  ['final_from_name'],
            "group_wxid" => $group_wxid,
        ];
}

//发送图片消息
function SendImageMsg($request,$url,$name){
    return [
            "event" => "SendImageMsg",
            "robot_wxid" => $request['robot_wxid'],
            "to_wxid" => $request['from_wxid'] ? $request['from_wxid'] : $request['final_from_wxid'],
            "msg" => [
                "url"=>$url,
                "name"=>$name
                ]
        ];
}

//发送视频消息
function SendVideoMsg($request,$url,$name){
    return [
            "event" => "SendImageMsg",
            "robot_wxid" => $request['robot_wxid'],
            "to_wxid" => $request['from_wxid'] ? $request['from_wxid'] : $request['final_from_wxid'],
            "msg" => [
                "url"=>$url,
                "name"=>$name
                ]
        ];
}

//发送文件消息
function SendFileMsg($request,$url,$name){
    return [
            "event" => "SendFileMsg",
            "robot_wxid" => $request['robot_wxid'],
            "to_wxid" => $request['from_wxid'] ? $request['from_wxid'] : $request['final_from_wxid'],
            "msg" => [
                "url"=>$url,
                "name"=>$name
                ]
        ];
}

//发送动态表情消息
function SendEmojiMsg($request,$url,$name){
    return [
            "event" => "SendEmojiMsg",
            "robot_wxid" => $request['robot_wxid'],
            "to_wxid" => $request['from_wxid'] ? $request['from_wxid'] : $request['final_from_wxid'],
            "msg" => [
                "url"=>$url,
                "name"=>$name
                ]
        ];
}

//发送分享卡片消息
function SendLinkMsg($request,$title,$text,$target_url,$pic_url,$icon_url){
    $link = [
        'title' => $title,
        'text' => $text,
        'target_url' => $target_url,
        'pic_url' => $pic_url,
        'icon_url' => $icon_url,
    ];
    return [
            "event" => "SendLinkMsg",
            "robot_wxid" => $request['robot_wxid'],
            "to_wxid" => $request['from_wxid'] ? $request['from_wxid'] : $request['final_from_wxid'],
            "msg" => $link
    ];
}

//发送音乐分享
function SendMusicMsg($request,$name){
    return [
        "event" => "SendMusicMsg",
        "robot_wxid" => $request['robot_wxid'],
        "to_wxid" => $request['from_wxid'] ? $request['from_wxid'] : $request['final_from_wxid'],
        "msg" => ['name'=>$name,'type'=>0],
    ];
}

