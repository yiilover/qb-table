<?php
require(dirname(__FILE__)."/"."global.php");
if(!$lfjid){
	showerr("你还没登录");
}

if($webdb[propagandize_close]){
	showerr("系统没有开放此功能");
}

$rows=20;
if(!$page){
	$page=1;
}
$min=($page-1)*$rows;
$showpage=getpage("`{$pre}propagandize`","WHERE uid='$lfjuid'","?");
$query = $db->query("SELECT * FROM `{$pre}propagandize` WHERE uid='$lfjuid' ORDER BY id DESC LIMIT $min,$rows");
while($rs = $db->fetch_array($query)){
	$rs[ip]=long2ip($rs[ip]);
	$rs[ipfrom]=ipfrom($rs[ipfrom]);
	$rs[posttime]=date("Y-m-d H:i",$rs[posttime]);
	$listdb[]=$rs;
}

require(dirname(__FILE__)."/"."head.php");
require(dirname(__FILE__)."/"."template/propagandize.htm");
require(dirname(__FILE__)."/"."foot.php");

?>