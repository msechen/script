<?php
use think\Db;
use think\facade\Cache;

//转换表情
function formatEmoji($str){
        $strEncode = '';
        $length = mb_strlen($str,'utf-8');
        for ($i=0; $i < $length; $i++) {
            $_tmpStr = mb_substr($str,$i,1,'utf-8');
            if(strlen($_tmpStr) >= 4){
                $strEncode .= '[@emoji='.trim(json_encode($_tmpStr),'"').']';
            }else{
                $strEncode .= $_tmpStr;
            }
        }
        return $strEncode;
    }

//根据机器人id获取关联的关键词集
function readRobotKeyword($robot_wxid,$content){
    $replys=Cache::get('robot_keyword_'.$robot_wxid);
    if(!$replys){//如果缓存中没有，则从数据库读取
        $replys=json_decode(db('xy_reply_robot')->where('robot_wxid',$robot_wxid)->value('replys'),true);
        if(!empty($replys)){//如果关键词集不为空
            //设置缓存，最新的关键词集
            Cache::store('redis')->set('robot_keyword_'.$robot_wxid, $replys);//修改缓存-存储机器人的关键词-机器人id
        }
    }
    foreach ($replys as $reply){
        if(strstr($content,$reply)){
            $cache_name='robot_keyword_'.$reply.'_'.$robot_wxid;
            $answer = Cache::get($cache_name);
            // echo $answer;
            if(!$answer){//如果缓存中没有，则从数据库读取
                $answer=db('xy_reply')->where('cache_name',$cache_name)->value('answer');
                Cache::store('redis')->set($cache_name, $answer);//缓存-存储机器人服务的群组
            }
            return $answer;
        }
    }
    return false;//如果用户发送的内容与关键词无关，则返回false
}

//判断是否为服务对象
function robotServicedForObj($robot_wxid,$to_wxid){
    $robot_for_group=readRobotForGroup($robot_wxid);
    if(!in_array($to_wxid,$robot_for_group)){
        return false;
    } else return true;
}

//读取机器人服务的群组
function readRobotForGroup($robot_wxid){
    $robot_for_group=Cache::get('serviced_for_group_'.$robot_wxid);//获取机器人服务的群组
    if(!$robot_for_group){//如果缓存中没有，则从数据库读取
        $robot_for_group=json_decode(db('xy_serviced_for_group')->where('robot_wxid',$robot_wxid)->value('group_wxid'),true);
        Cache::store('redis')->set('serviced_for_group_'.$robot_wxid, $robot_for_group);//缓存-存储机器人服务的群组
    }
    return $robot_for_group;
}

/*
     * post 发送JSON 格式数据
     * @param $url string URL
     * @param $data_string string 请求的具体内容
     * @return array
     *      code 状态码
     *      result 返回结果
     */
function post_json_data($url, $data) {
        //初始化
        $data=json_encode($data);
        $ch = curl_init();
        //设置post方式提交
        curl_setopt($ch, CURLOPT_POST, 1);
        //设置抓取的url
        curl_setopt($ch, CURLOPT_URL, $url);
        //设置post数据
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        //设置头文件的信息作为数据流输出
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Content-Type:application/json; charset=utf-8',
                'Content-Length:'.strlen($data))
        );
        ob_start();
         //执行命令
        curl_exec($ch);
        $return_content = ob_get_contents();
        ob_end_clean();
        $return_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        return array('code'=>$return_code, 'result'=>json_decode($return_content,true));
}

/*
 * 检查图片是不是bases64编码的
 */
function is_image_base64($base64) {
    if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64, $result)){
        return true;
    }else{
        return false;
    }
}

function check_pic($dir,$type_img){
    $new_files = $dir.date("YmdHis"). '-' . rand(0,9999999) . "{$type_img}";
    if(!file_exists($new_files))
        return $new_files;
    else
        return check_pic($dir,$type_img);  
}

/**
 * 获取数组中的某一列
 * @param array $arr 数组
 * @param string $key_name  列名
 * @return array  返回那一列的数组
 */
function get_arr_column($arr, $key_name)
{
	$arr2 = array();
	foreach($arr as $key => $val){
		$arr2[] = $val[$key_name];        
	}
	return $arr2;
}

//保留两位小数
function tow_float($number){
    return (floor($number * 100) / 100); 
}

//生成订单号
function getSn($head='')
{
    @date_default_timezone_set("Asia/Kolkata");
    $order_id_main = date('YmdHis') . mt_rand(1000, 9999);
    //唯一订单号码（YYMMDDHHIISSNNN）
    $osn = $head.substr($order_id_main,2); //生成订单号
    return $osn;
}

/**
 * 修改本地配置文件
 *
 * @param array $name   ['配置名']
 * @param array $value  ['参数']
 * @return void
 */
function setconfig($name, $value)
{
    if (is_array($name) and is_array($value)) {
        for ($i = 0; $i < count($name); $i++) {
            $names[$i] = '/\'' . $name[$i] . '\'(.*?),/';
            $values[$i] = "'". $name[$i]. "'". "=>" . "'".$value[$i] ."',";
        }
        $fileurl = APP_PATH . "../config/app.php";
        $string = file_get_contents($fileurl); //加载配置文件
        $string = preg_replace($names, $values, $string); // 正则查找然后替换
        file_put_contents($fileurl, $string); // 写入配置文件
        return true;
    } else {
        return false;
    }
}

//生成随机用户名
function get_username()
{
    $chars1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $chars2 = "abcdefghijklmnopqrstuvwxyz0123456789";
    $username = "";
    for ( $i = 0; $i < mt_rand(2,3); $i++ )
    {
        $username .= $chars1[mt_rand(0,25)];
    }
    $username .='_';

    for ( $i = 0; $i < mt_rand(4,6); $i++ )
    {
        $username .= $chars2[mt_rand(0,35)];
    }
    return $username;
}

/**
 * 判断当前时间是否在指定时间段之内
 * @param integer $a 起始时间
 * @param integer $b 结束时间
 * @return boolean
 */
function check_time( $a, $b)
{
    $nowtime = time();
    $start = strtotime($a.':00:00');
    $end = strtotime($b.':00:00');

    if ($nowtime >= $end || $nowtime <= $start){
        return true;
    }else{
        return false;
    }
}

class AlipayService
{
    protected $appId;
    protected $notifyUrl;
    protected $charset;
    //私钥值
    protected $rsaPrivateKey;
    protected $totalFee;
    protected $outTradeNo;
    protected $orderName;
    protected $body;


    public function __construct()
    {
        $this->charset = 'utf-8';
    }

    public function setAppid($appid)
    {
        $this->appId = $appid;
    }

    public function setNotifyUrl($notifyUrl)
    {
        $this->notifyUrl = $notifyUrl;
    }

    public function setRsaPrivateKey($saPrivateKey)
    {
        $this->rsaPrivateKey = $saPrivateKey;
    }

    public function setTotalFee($payAmount)
    {
        $this->totalFee = $payAmount;
    }

    public function setOutTradeNo($outTradeNo)
    {
        $this->outTradeNo = $outTradeNo;
    }

    public function setOrderName($orderName)
    {
        $this->orderName = $orderName;
    }
    
    public function setBody($body)
    {
        $this->body = $body;
    }

    /**
     * 发起订单
     * @return array
     */
    public function doPay()
    {
        //请求参数
        $requestConfigs = array(
            'out_trade_no'=>$this->outTradeNo,
            'total_amount'=>$this->totalFee, //单位 元
            'subject'=>$this->orderName,  //订单标题
            'body'=>$this->body,
            'timeout_express'=>'2h'       //该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。
        );
        $commonConfigs = array(
            //公共参数
            'app_id' => $this->appId,
            'method' => 'alipay.trade.precreate',             //接口名称
            'format' => 'JSON',
            'charset'=>$this->charset,
            'sign_type'=>'RSA2',
            'timestamp'=>date('Y-m-d H:i:s'),
            'version'=>'1.0',
            'notify_url' => $this->notifyUrl,
            'biz_content'=>json_encode($requestConfigs),
        );
        $commonConfigs["sign"] = $this->generateSign($commonConfigs, $commonConfigs['sign_type']);
        $result = $this->curlPost('https://openapi.alipay.com/gateway.do?charset='.$this->charset,$commonConfigs);
        return json_decode($result,true);
    }
    public function generateSign($params, $signType = "RSA") {
        return $this->sign($this->getSignContent($params), $signType);
    }
    protected function sign($data, $signType = "RSA") {
        $priKey=$this->rsaPrivateKey;
        $res = "-----BEGIN RSA PRIVATE KEY-----\n" .
            wordwrap($priKey, 64, "\n", true) .
            "\n-----END RSA PRIVATE KEY-----";
        ($res) or die('您使用的私钥格式错误，请检查RSA私钥配置');
        if ("RSA2" == $signType) {
            openssl_sign($data, $sign, $res, version_compare(PHP_VERSION,'5.4.0', '<') ? SHA256 : OPENSSL_ALGO_SHA256); //OPENSSL_ALGO_SHA256是php5.4.8以上版本才支持
        } else {
            openssl_sign($data, $sign, $res);
        }
        $sign = base64_encode($sign);
        return $sign;
    }
    /**
     * 校验$value是否非空
     *  if not set ,return true;
     *    if is null , return true;
     **/
    protected function checkEmpty($value) {
        if (!isset($value))
            return true;
        if ($value === null)
            return true;
        if (trim($value) === "")
            return true;
        return false;
    }
    public function getSignContent($params) {
        ksort($params);
        $stringToBeSigned = "";
        $i = 0;
        foreach ($params as $k => $v) {
            if (false === $this->checkEmpty($v) && "@" != substr($v, 0, 1)) {
                // 转换成目标字符集
                $v = $this->characet($v, $this->charset);
                if ($i == 0) {
                    $stringToBeSigned .= "$k" . "=" . "$v";
                } else {
                    $stringToBeSigned .= "&" . "$k" . "=" . "$v";
                }
                $i++;
            }
        }
        unset ($k, $v);
        return $stringToBeSigned;
    }
    /**
     * 转换字符集编码
     * @param $data
     * @param $targetCharset
     * @return string
     */
    function characet($data, $targetCharset) {
        if (!empty($data)) {
            $fileType = $this->charset;
            if (strcasecmp($fileType, $targetCharset) != 0) {
                $data = mb_convert_encoding($data, $targetCharset, $fileType);
                //$data = iconv($fileType, $targetCharset.'//IGNORE', $data);
            }
        }
        return $data;
    }
    public function curlPost($url = '', $postData = '', $options = array())
    {
        if (is_array($postData)) {
            $postData = http_build_query($postData);
        }
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30); //设置cURL允许执行的最长秒数
        if (!empty($options)) {
            curl_setopt_array($ch, $options);
        }
        //https请求 不验证证书和host
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        $data = curl_exec($ch);
        curl_close($ch);
        return $data;
    }
}


