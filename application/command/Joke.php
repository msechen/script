<?php
namespace app\command;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;
use think\facade\Cache;

class Joke extends Command
{
    // 配置定时器的信息
    protected function configure()
    {
        $this->setName('joke')
            ->setDescription('笑话定时任务');
    }
    protected function execute(Input $input, Output $output)
    {
        $send_start_time='7';
        $send_end_time='22';
        $now_time=date('H');
        if($send_start_time>$now_time || $now_time>$send_end_time) return; //不在发送时间段内（主要为了防止打扰到群用户休息）
        
        $output->writeln("开始笑话定时任务:");
        $robot_wxid='wxid_rqn31uwmjug922';//胖妞微信id
        //获取机器人服务的群组
        $robot_for_groups=readRobotForGroup($robot_wxid);
        //遍历服务的群组，发送内容
        $joke=file_get_contents('https://autumnfish.cn/api/joke/list?num=1');
        $joke_content=json_decode($joke,true)['jokes'][0];
        foreach($robot_for_groups as $group){
            $now_time=date('Y-m-d H:i:s');
            $params=[
                "event" => 'SendTextMsg',
                "robot_wxid" => $robot_wxid,
                "to_wxid" => $group,
                "msg" => $joke_content
            ];
            $resp =post_json_data(config('intranet_communication'),$params);
            $output->writeln($group.'群组发送成功！时间：'.$now_time);
            $output->writeln("休息3秒...");
            sleep(3);
        }
        $output->writeln($robot_wxid.'笑话本轮发送完毕！！！');
        $output->writeln('');
    }
}