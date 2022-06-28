package common

import (
	"io/ioutil"
	"net/http"
)

func GetMyIpAddr() string {
	resp, err := http.Get("http://icanhazip.com")
	if err != nil {
		resp, _ = http.Get("http://api.ip.sb/ip")
	}
	defer resp.Body.Close()
	s, _ := ioutil.ReadAll(resp.Body)
	return string(s)
}
