<?php
!function_exists('html') && exit('ERR');
if(!$lfjid){
	showerr('���ȵ�¼��');
}

if($step==2)
{
	$ckfile = ROOT_PATH.'cache/regsendmail.txt';
	if( (time()-@filemtime($ckfile) )<60 ){
		showerr("�ʼ����������Ŷ��У����Ժ��ٳ��Է��ͣ�");
	}
	
	if(!ereg("^[-a-zA-Z0-9_\.]+\@([0-9A-Za-z][0-9A-Za-z-]+\.)+[A-Za-z]{2,5}$",$email)) {
		showerr("���䲻���Ϲ���"); 
	}elseif(!$content){
		showerr("���ݲ���Ϊ��"); 
	}elseif(strlen($content)>3000){
		showerr("���ݲ��ܴ���3000���ַ�"); 
	}
	$Title="���ԡ�{$webdb[webname]}�����ʼ�,�����ѡ�{$myname}�������Ƽ���һƪ��������!!";
	
	if(!check_imgnum($yzimg)){
		showerr("��֤�벻����");
	}
	
	$rs[email]=$email;
	$Content=filtrate($content);
	$Content=str_replace("\n","<br>",$Content);
	write_file($ckfile,$email);
	if( send_mail($rs[email], $Title, $Content,0) ){
		@unlink($ckfile);
		refreshto("./","��ϲ�㣬�ʼ��ɹ�����!",5);
	}else{
		@unlink($ckfile);
		showerr("�ʼ�����ʧ�ܣ������������ַ����,�����Ƿ����������ʼ����������⣡��");
	}
}

$erp=get_id_table($id);
$rsdb=$db->get_one("SELECT * FROM {$pre}article$erp WHERE aid='$id'");
if(!$id){
	showerr("���ݲ�����");
}
require(ROOT_PATH."inc/head.php");
require(html("recommend"));
require(ROOT_PATH."inc/foot.php");
?>