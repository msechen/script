<?php
namespace app\admin\controller;

use app\admin\service\NodeService;
use library\Controller;
use library\tools\Data;
use think\Db;
use PHPExcel;//tp5.1用法
use PHPExcel_IOFactory;
use think\cache\driver\Redis;
use think\facade\Cache;

/**
 * 机器人管理
 * Class Users
 * @package app\admin\controller
 */
class Users extends Controller
{

    /**
     * 指定当前数据表
     * @var string
     */
    protected $table = 'xy_robots';

    /**
     * 机器人列表
     *@auth true
     *@menu true
     */
    public function index()
    {
        $this->title = '机器人列表';
        $where = [];
        // if(input('username/s',''))$where[] = ['u.username','like','%' . input('username/s','') . '%'];
        // if(input('addtime/s','')){
        //     $arr = explode(' - ',input('addtime/s',''));
        //     $where[] = ['u.addtime','between',[strtotime($arr[0]),strtotime($arr[1])]];
        // }
        // $user = session('admin_user');
        $params = array("event"=>"GetLoggedAccountList");
        $resp =post_json_data(config('intranet_communication'),$params);
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
        
        $this->assign('robot_list',$data);
        return $this->fetch();
    }

    /**
     * 查看好友列表
     *@auth true
     *@menu true
     */
    public function friend(){
        $this->title = '好友列表';
        $wxid = input('get.id/s','');
        if(!$wxid) return $this->error('请求异常');
        $params = array("event"=>"GetFriendList","robot_wxid"=>$wxid,"msg"=>
            ["is_refresh"=> false,"out_rawdata"=> false]);
        $resp =post_json_data(config('intranet_communication'),$params);
        $this->assign('list',$resp['result']['data']);
        return $this->fetch();
    }
    
    /**
     * 查看群组列表
     *@auth true
     *@menu true
     */
    public function group(){
        $this->title = '群组列表';
        $wxid = input('get.id/s','');
        if(!$wxid) return $this->error('请求异常');
        $params = array("event"=>"GetGroupList","robot_wxid"=>$wxid,"msg"=>
            ["is_refresh"=> false,"out_rawdata"=> false]);
        $resp =post_json_data(config('intranet_communication'),$params);
        $this->assign('list',$resp['result']['data']);
        $this->assign('robot_wxid',$wxid);
        $this->assign('serviced_for_group',Cache::get('serviced_for_group_'.$wxid));//获取机器人服务的群组
        return $this->fetch();
    }
    
    /**
     * 操作服务群组
     *@auth true
     *@menu true
     */
    public function do_group(){
        $ids =[];
        $robot_wxid=input('get.robot_wxid');
        if (isset($_REQUEST['id']) && !empty($_REQUEST['id'])) {
            $ids = explode(',',$_REQUEST['id']);
            Cache::store('redis')->set('serviced_for_group_'.$robot_wxid, $ids);//缓存-存储机器人服务的群组
            $res=db('xy_serviced_for_group')->where('robot_wxid',$robot_wxid)->update(['group_wxid'=>json_encode($ids)]);//mysql-存储机器人服务的群组
            if($res){
                $this->success('处理成功');
            }else $this->error('处理失败');
            
        }
    }

    /**
     * 发送消息
     *@auth true
     *@menu true
     */
    public function send_message(){
        $robot_wxid = input('get.robot_wxid/s','');
        $to_wxid = input('get.to_wxid/s','');
        if(request()->isPost()){
            $content = input('post.content/s','');
            if($content=='') return $this->error('请求异常');
            $params = array("event"=>"SendTextMsg","robot_wxid"=>$robot_wxid,"to_wxid"=>$to_wxid,"msg"=>$content);
            $resp =post_json_data(config('intranet_communication'),$params);
            if($resp['result']['msg']=='successful'){
                $this->success('发送成功');
            }else $this->error('发送失败');
        }
        $this->assign('robot_wxid',$robot_wxid);
        $this->assign('to_wxid',$to_wxid);
        return $this->fetch();
    }

}