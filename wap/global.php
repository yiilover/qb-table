<?php
require_once(dirname(__FILE__)."/"."../inc/common.inc.php");	//�����ļ�
require_once(ROOT_PATH."inc/artic_function.php");		//�漰�����·���ĺ���
@include_once(ROOT_PATH."data/ad_cache.php");		//�����������ļ�
@include_once(ROOT_PATH."data/label_hf.php");		//��ǩͷ����ײ����������ļ�
@include_once(ROOT_PATH."data/all_fid.php");		//ȫ����Ŀ�����ļ�
@include_once(ROOT_PATH."data/article_module.php");	//����ϵͳ����������ģ��

if(!$webdb[web_open])
{
	$webdb[close_why] = str_replace("\n","<br>",$webdb[close_why]);
	showerr("��վ��ʱ�ر�:$webdb[close_why]");
}

/**
*������ЩIP����
**/
$IS_BIZ && Limt_IP('AllowVisitIp');


$ch=intval($ch);
unset($listdb,$rs);

//����JSʱ����ʾ��,����Ի���ͼƬ,'��Ҫ��\
$Load_Msg="<img alt=\"���ݼ�����,���Ժ�...\" src=\"$webdb[www_url]/images/default/ico_loading3.gif\">";

$userinfo = $lfjid ? "��ӭ����<span>$lfjid</span> ����: <span>{$ltitle[$lfjdb[groupid]]}</span> <a href=\"$webdb[www_url]/do/login.php?action=quit\">��ȫ�˳�</a>" : "<form class=\"login_form\" name=\"form_login\" method=\"post\" action=\"$webdb[www_url]/do/login.php\">�ʺţ�<input name=\"username\" type=\"text\"\ size=\"8\" class=\"input\"/> ���룺<input name=\"password\" type=\"password\"\ size=\"8\" class=\"input\"/> <input value=\"��¼\" type=\"submit\" /><input type=\"hidden\" name=\"step\" value=\"2\"><input class=\"radio\" type=\"hidden\" name=\"cookietime\" value=\"86400\" ></form>";

foreach($Fid_db[0] AS $key=>$value){
	if(getsortmid($key)){
		$listsor .= "<div>\r\n<a href=\"list.php?fid=$key\">$value</a> | ";
		$i=0;
		foreach($Fid_db[$key] AS $keys=>$rs){
			$i++;
			if(getsortmid($keys)){
				$listsor .= " <a href=\"list.php?fid=$keys\">$rs</a> ";
			}
			if($i>=3){
				break;
			}
		}
		$listsor .= " <a href=\"list.php?fid=$key\" class=\"m\">����</a>\r\n</div>\r\n";
	}
}

//�г�����,����,�Ƽ�,��������� 
function showartic($type,$rows,$leng){
	global $pre,$webdb,$db,$Fid_db;
	if( !ereg("^(hot|com|new|lastview|like|pic)$",$type) ){
		return ;
	}
	$rows>0 || $rows=7;
	$leng>0 || $leng=60;
	$SQL=" 1 ";
	if($type=='com')
	{
		$SQL.=" AND levels=1 ";
		$ORDER=' list ';
	}
	elseif($type=='pic')
	{
		$SQL.=" AND ispic=1 ";
		$ORDER=' list ';
	}
	elseif($type=='hot')
	{
		$ORDER=' hits ';
	}
	elseif($type=='new')
	{
		$ORDER=' list ';
	}
	elseif($type=='lastview')
	{
		$ORDER=' lastview ';
	}

	if(!$webdb[viewNoPassArticle]){
		$SQL.=' AND yz=1 ';
	}
	
	$SQL=" WHERE $SQL AND mid=0 ORDER BY $ORDER DESC LIMIT $rows";
	$which='*';
	$listdb=list_article($SQL,$which,$leng,$erp);
	return $listdb;
}



function getsortmid($fid){
	global $db,$pre;
	@extract($db->get_one("SELECT fmid FROM {$pre}sort WHERE fid='$fid'"));
	if($fmid=="0"){
		return	true ;
	}else{
		return	false ;
	}
}
?>