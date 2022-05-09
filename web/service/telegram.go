package service

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"runtime"
	"x-ui/logger"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

type TelegramService struct {
	botInstace     *tgbotapi.BotAPI
	xrayService    XrayService
	inboundService InboundService
	settingService SettingService
}

func (s *TelegramService) GetsystemStatus() string {
	var status string
	//get hostname
	name, err := os.Hostname()
	if err != nil {
		fmt.Println("get hostname error:", err)
		return ""
	}
	status = fmt.Sprintf("主机名称:%s\r\n", name)
	status += fmt.Sprintf("系统类型:%s\r\n", runtime.GOOS)
	status += fmt.Sprintf("系统架构:%s\r\n", runtime.GOARCH)
	//system run time
	systemRuntime, error := exec.Command("bash", "-c", "uptime").Output()
	if error != nil {
		logger.Warning("GetsystemStatus error:", err)
	}
	status += fmt.Sprintf("系统状态:%s\r\n", systemRuntime)
	return status
}

func (s *TelegramService) StartRun() {
	logger.Info("telegram service ready to run")
	tgBottoken, err := s.settingService.GetTgBotToken()
	if err != nil {
		logger.Warning("telegram service start run failed,GetTgBotToken fail:", err)
		return
	}
	s.botInstace, err = tgbotapi.NewBotAPI(tgBottoken)
	if err != nil {
		log.Panic(err)
	}
	s.botInstace.Debug = true
	fmt.Printf("Authorized on account %s", s.botInstace.Self.UserName)
	//get all my commands
	commands, err := s.botInstace.GetMyCommands()
	if err != nil {
		logger.Warning("telegram service start run error,GetMyCommandsfail:", err)
	}
	for _, command := range commands {
		fmt.Printf("command %s,Description:%s \r\n", command.Command, command.Description)
	}
	//get update
	chanMessage := tgbotapi.NewUpdate(0)
	chanMessage.Timeout = 60

	updates := s.botInstace.GetUpdatesChan(chanMessage)

	for update := range updates {
		if update.Message == nil {
			continue
		}

		if !update.Message.IsCommand() {
			continue
		}

		msg := tgbotapi.NewMessage(update.Message.Chat.ID, "")

		// Extract the command from the Message.
		switch update.Message.Command() {
		case "delete":
			msg.Text = "I understand /sayhi and /status."
		case "restart":
			err := s.xrayService.RestartXray(true)
			if err != nil {
				msg.Text = fmt.Sprintln("Restart xray failed,error:", err)
			} else {
				msg.Text = "Restart xray success"
			}
		case "status":
			msg.Text = s.GetsystemStatus()
		default:
			msg.Text = `
			 /delete inboundTag will help you delete inbound according tag
			/restart will restart xray,this command will not restart x-ui 
			/status will get current system info
			You can input /help to see more commands`
		}

		if _, err := s.botInstace.Send(msg); err != nil {
			log.Panic(err)
		}
	}

}

/*
func (s *TelegramService) PrepareCommands() {
	Deletecommand := tgbotapi.BotCommand{
		Command:     "DeleteInbound",
		Description: "This command will help you delete one of your Inbound",
	}
	Helpcommand := tgbotapi.BotCommand{
		Command:     "Help",
		Description: "You can use more command by help command",
	}

}
*/

func (s *TelegramService) SendMsgToTgbot(msg string) {
	tgBotid, err := s.settingService.GetTgBotChatId()
	if err != nil {
		logger.Warning("sendMsgToTgbot failed,GetTgBotChatId fail:", err)
		return
	}
	if tgBotid == 0 {
		return
	}

	info := tgbotapi.NewMessage(int64(tgBotid), msg)
	s.botInstace.Send(info)
}
