<?php
namespace app\command;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;
use think\facade\Cache;

class Test extends Command
{
    // 配置定时器的信息
    protected function configure()
    {
        $this->setName('wxid_rqn31uwmjug922定时任务')
            ->setDescription('wxid_rqn31uwmjug922群发定时任务');
    }
    protected function execute(Input $input, Output $output)
    {
        // 输出到日志文件
        $robot_wxid='wxid_rqn31uwmjug922';
        $output->writeln($robot_wxid."群发任务开始:");
        $serviced_group=readRobotForGroup($robot_wxid);
        foreach ($serviced_group as $group){
            $now_time=date('Y-m-d H:i:s');
            $params=[
                "event" => 'SendTextMsg',
                "robot_wxid" => $robot_wxid,
                "to_wxid" => $group,
                "msg" => '测试群发'.$now_time
            ];
            $resp =post_json_data(config('intranet_communication'),$params);
            $output->writeln($group.'群组发送成功！时间：'.$now_time);
            $output->writeln("休息3秒");
            sleep(3);
        }
        $output->writeln($robot_wxid."本次群发任务结束");
    }
}