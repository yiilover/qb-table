<?php
!function_exists('html') && exit('ERR');

if($webdb['close_dz_credit']){
	showerr('ϵͳ�ر��˶һ�����!');
}

if(!defined("UC_CONNECT")){
	showerr('��û������UC!');
}
if(!$webdb['dzbbs_pre']){
	showerr('�����ں�̨<�����ⲿϵͳ����>��ȥ����<DISCUZ��̳���ӵ�������>�е�<���ݱ�ǰ׺>');
}
if(!$lfjuid){
	showerr('�㻹û��¼!');
}

$webdb['dz_credit_name1'] || $webdb['dz_credit_name1']='��̳����';
$webdb['dz_credit_name2'] || $webdb['dz_credit_name2']='��̳��Ǯ';
$webdb['dz_credit_name3'] || $webdb['dz_credit_name3']='��̳����';

$scaleA = array(
			'c1'=>($webdb['dz_credit_1']?$webdb['dz_credit_1']:2),		//2����̳������һ����ϵͳ����
			'c2'=>($webdb['dz_credit_2']?$webdb['dz_credit_2']:1),	//1.5����̳��Ǯ��һ����ϵͳ����
			'c3'=>($webdb['dz_credit_3']?$webdb['dz_credit_3']:0.5),	//0.5����̳���׻�һ����ϵͳ����
		);

$dzCR = $db->get_one("SELECT * FROM {$webdb[dzbbs_pre]}common_member_count WHERE uid='$lfjuid'");

$scaleB = '';
foreach($scaleA AS $key=>$value){
	$scaleB[$key] = 1/$value;
	if(!is_int($scaleB[$key])){
		$scaleB[$key] =ceil($scaleB[$key]*10)/10;
	}
}

if($step){
	if(!$scaleA["c$type"]){
		showerr('��ѡ��һ����̳��������!');
	}
	$atc_num = intval($atc_num);
	if($atc_num<1){
		showerr('�һ���������1������!');
	}
	if($step==2){
		$num = ceil($atc_num * $scaleA["c$type"]);
		if($dzCR["extcredits$type"]<$num){
			showerr("�����̳���ֲ��� {$num} ��");
		}
		$db->query("UPDATE {$webdb[dzbbs_pre]}common_member_count SET extcredits$type=extcredits$type-$num WHERE uid='$lfjuid'");
		add_user($lfjuid,$atc_num,'��̳���ֶ���');
	}elseif($step==3){
		$num = ceil($atc_num * $scaleB["c$type"]);
		if($lfjdb['money']<$num){
			showerr("���ڱ�ϵͳ��{$webdb[MoneyName]}���� {$num} {$webdb[MoneyDW]}");
		}
		$db->query("UPDATE {$webdb[dzbbs_pre]}common_member_count SET extcredits$type=extcredits$type+$atc_num WHERE uid='$lfjuid'");
		add_user($lfjuid,-$num,'��̳���ֶҳ�');
	}
	refreshto("hack.php?hack=$hack",'�һ��ɹ�!',1);
}


require(ROOT_PATH."member/head.php");
require(dirname(__FILE__)."/template/dz_credit.htm");
require(ROOT_PATH."member/foot.php");
?>