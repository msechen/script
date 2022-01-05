<?php
namespace app\admin\controller;

use app\admin\service\NodeService;
use library\Controller;
use library\tools\Data;
use think\Console;
use think\Db;
use think\exception\HttpResponseException;

class Robot extends Controller
{
    
    //取登录账号列表
    public function GetLoggedAccountList(){
        $params = array("event"=>"GetLoggedAccountList");
        $resp =post_json_data(config('intranet_communication'),$params);
        dump($resp['result']);
        $data=$resp['result']['data'];
        foreach ($data as $k=>$v){
            $res= db('xy_robots')->find($v['wxid']);
            $robot_data=[
                "wxid"=>$v['wxid'],
                "wx_num"=>$v['wx_num'],
                "nickname"=>$v['nickname'],
                "headimgurl"=>$v['headimgurl'],
                "login_time"=>$v['login_time'],
                "signature"=>$v['signature'],
                "backgroundimgurl"=>$v['backgroundimgurl'],
            ];
            $robot_serviced_for_group_data=[
                'robot_wxid'=>$v['wxid'],
                'group_wxid'=>json_encode([])//服务的群组集
            ];
            $robot_reply_data=[
                'robot_wxid'=>$v['wxid'],
                'replys'=>json_encode([])//关键词集
            ];
            if(!$res){//无则添加
                db('xy_robots')->insert($robot_data);
                db('xy_serviced_for_group')->insert($robot_serviced_for_group_data);
                db('xy_reply_robot')->insert($robot_reply_data);
            }
            else {//有则更新
                db('xy_robots')->where('wxid',$v['wxid'])->update($robot_data);
            }
        }
    }
}