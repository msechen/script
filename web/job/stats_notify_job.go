package job

import (
	"fmt"
	"net"
	"os"
	"x-ui/logger"
	"x-ui/util/common"
	"x-ui/web/service"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)
type StatsNotifyJob struct {
	enable 		   bool
	xrayService    service.XrayService
	inboundService service.InboundService
	settingService service.SettingService
}

func NewStatsNotifyJob() *StatsNotifyJob {
	return new(StatsNotifyJob)
}

//Here run is a interface method of Job interface
func (j *StatsNotifyJob) Run() {
	if !j.xrayService.IsXrayRunning() {
		return
	}
	//Telegram bot basic info
	tgBottoken,err:=j.settingService.GetTgBotToken()
	if err != nil {
		logger.Warning("StatsNotifyJob run failed,GetTgBotToken fail:", err)
		return
	}
	tgBotid,err:=j.settingService.GetTgBotChatId()
	if err != nil {
		logger.Warning("StatsNotifyJob run failed,GetTgBotChatId fail:", err)
		return
	}
	var info string
	//get hostname
	name, err := os.Hostname()
	if err != nil {
		fmt.Println("get hostname error:",err)
		return
	}
	info=fmt.Sprintf("主机名称:%s\r\n",name)
	//get ip address
	var ip string
    netInterfaces, err := net.Interfaces()
    if err != nil {
        fmt.Println("net.Interfaces failed, err:", err.Error())
        return 
	}
 
    for i := 0; i < len(netInterfaces); i++ {
        if (netInterfaces[i].Flags & net.FlagUp) != 0 {
            addrs, _ := netInterfaces[i].Addrs()
 
            for _, address := range addrs {
                if ipnet, ok := address.(*net.IPNet); ok && !ipnet.IP.IsLoopback() {
                    if ipnet.IP.To4() != nil {
                        ip=ipnet.IP.String()
						break
                    }else{
						ip=ipnet.IP.String()
						break
					}
                }
            }
        }
    }
	info+=fmt.Sprintf("IP地址:%s\r\n \r\n",ip)

	//get traffic 
	inbouds,err := j.inboundService.GetAllInbounds()
	if err != nil {
		logger.Warning("StatsNotifyJob run failed:", err)
		return
	}
	//NOTE:If there no any sessions here,need to notify here
	//TODO:分节点推送,自动转化格式
	for _, inbound := range inbouds {
		info+=fmt.Sprintf("节点名称:%s\r\n端口:%d\r\n上行流量↑:%s\r\n下行流量↓:%s\r\n总流量:%s\r\n \r\n",inbound.Remark,inbound.Port,common.FormatTraffic(inbound.Up),common.FormatTraffic(inbound.Down),common.FormatTraffic((inbound.Up+inbound.Down)))
	}

	bot, err := tgbotapi.NewBotAPI(tgBottoken)
	if err != nil {
		fmt.Println("get tgbot error:",err)
	}
	bot.Debug = true
	fmt.Printf("Authorized on account %s", bot.Self.UserName)
	msg := tgbotapi.NewMessage(int64(tgBotid),info)
	//msg.ReplyToMessageID = int(tgBotid)
	bot.Send(msg)
}
