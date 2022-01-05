<?php
namespace app\command;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;
use think\facade\Cache;

class Quan extends Command
{
    // 配置定时器的信息
    protected function configure()
    {
        $this->setName('quan')
            ->setDescription('监控外卖优惠券定时任务');
    }
    protected function execute(Input $input, Output $output)
    {
        $send_times=['11:00','11:20','19:00','17:00','17:20'];
        if(!in_array(date('H:i'),$send_times)) return; //如果不在时间段内，不推送优惠券
        $output->writeln("开始监控外卖优惠券定时任务:");
            $robot_wxid='wxid_rqn31uwmjug922';//胖妞微信id
            //获取机器人服务的群组
            $robot_for_groups=readRobotForGroup($robot_wxid);
            //遍历服务的群组，发送内容
            foreach($robot_for_groups as $group){
                $now_time=date('Y-m-d H:i:s');
                $params=[
                    "event" => 'SendImageMsg',
                    "robot_wxid" => $robot_wxid,
                    "to_wxid" => $group,
                    "msg" => [
                        "url"=>'https://manage.robot.com/mtwm.jpg',
                        "name"=>'mtwm.jpg'
                    ]
                ];
                $resp =post_json_data(config('intranet_communication'),$params);
                sleep(1);
                $params=[
                    "event" => 'SendTextMsg',
                    "robot_wxid" => $robot_wxid,
                    "to_wxid" => $group,
                    "msg" => '同学们，吃饭时间到了！别饿坏肚子了~'
                ];
                $resp =post_json_data(config('intranet_communication'),$params);
                $output->writeln($group.'群组发送成功！时间：'.$now_time);
                $output->writeln("休息3秒...");
                sleep(3);
            }
            $output->writeln($robot_wxid.'群发外卖优惠券任务执行完毕！！！');
            $output->writeln('');
    }
}