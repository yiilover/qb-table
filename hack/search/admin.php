<?php
!function_exists('html') && exit('ERR');
if($job=='list'&&$Apower[hack_list])
{
	$rsdb=$db->get_one("SELECT * FROM {$pre}hack WHERE keywords='$hack' ");
	@extract(unserialize($rsdb[config]));
	$searchcode=stripslashes($searchcode);
	$systemTypeDB[$systemType]=' checked ';

	hack_admin_tpl('list');
}
elseif($action=='list'&&$Apower[hack_list])
{
	$db->query("UPDATE {$pre}hack SET config='".AddSlashes(serialize($postdb))."' WHERE keywords='$hack'");
	$show="<?php
			\$searchcode=\"$postdb[searchcode]\";";
	write_file(ROOT_PATH."cache/hack/search.php",$show);
	jump("���óɹ�","index.php?lfj=hack&hack=$hack&job=getcode",0);
}
elseif($job=='getcode'&&$Apower[hack_list])
{
	hack_admin_tpl('getcode');
}
elseif($job=="choose"&&$Apower[hack_list])
{
	$msg=read_file(dirname(__FILE__)."/template/$type.htm");
	$msg=AddSlashes($msg);
	$msg=str_replace("\r\n",'\r\n',$msg);

	echo "<SCRIPT LANGUAGE=\"JavaScript\">
	<!--
	window.parent.showcode('$msg');
	//-->
	</SCRIPT>";
}
?>