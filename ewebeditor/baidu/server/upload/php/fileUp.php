<?php
require_once(dirname(__FILE__)."/../../../../../inc/common.inc.php");
/**
 * Created by JetBrains PhpStorm.
 * User: taoqili
 * Date: 12-2-8
 * Time: ����1:20
 * To change this template use File | Settings | File Templates.
 */
//�ϴ�����
$config = array(
    "uploadPath" => "../../../../../upload_files/other/" , //����·��
    "fileType" => array( ".rar" , ".doc" , ".docx" , ".zip" , ".pdf" , ".txt" , ".swf", ".wmv" ) , //�ļ������ʽ
    "fileSize" => 100 //�ļ���С���ƣ���λMB
);

//�ļ��ϴ�״̬,���ɹ�ʱ����SUCCESS������ֵ��ֱ�ӷ��ض�Ӧ�ַ���
$state = "SUCCESS";
$fileName = "";
$path = $config[ 'uploadPath' ];
if ( !file_exists( $path ) ) {
    mkdir( "$path" , 0777 );
}
$clientFile = $_FILES[ "Filedata" ]; //"Filedata��swfuploadĬ�ϵ��ļ���"
if(!isset($clientFile)){
    echo "{'state':'�ļ���С�������������ã�','url':'null','fileType':'null'}";//���޸�php.ini�е�upload_max_filesize��post_max_size
    exit;
}

//��ʽ��֤
$current_type = strtolower( strrchr( $clientFile[ "name" ] , '.' ) );
if ( !in_array( $current_type , $config[ 'fileType' ] ) ) {
    $state = "��֧�ֵ��ļ����ͣ�";
}
//��С��֤
$file_size = 1024 * 1024 * $config[ 'fileSize' ];
if ( $clientFile[ "size" ] > $file_size ) {
    $state = "�ļ���С�������ƣ�";
}

if(!$lfjid){
	$state = "�㻹û��¼";
}

//�����ļ�
if ( $state == "SUCCESS" ) {/*
    $tmp_file = $clientFile[ "name" ];
    $fileName = $path . rand( 1 , 10000 ) . time() . strrchr( $tmp_file , '.' );
    $result = move_uploaded_file( $clientFile[ "tmp_name" ] , $fileName );
    if ( !$result ) {
        $state = "�ļ�����ʧ�ܣ�";
    }*/

	$array='';
	$array['name']=is_array($Filedata)?$_FILES['Filedata']['name']:$Filedata_name;
	$array['path']=$webdb['updir']."/other";
	$array['size']=is_array($Filedata)?$_FILES['Filedata']['size']:$Filedata_size;
		
	$array['updateTable']=1;	//ͳ���û��ϴ����ļ�ռ�ÿռ��С
	$filename=upfile(is_array($Filedata)?$_FILES['Filedata']['tmp_name']:$Filedata,$array);

}
//���������������json����
//$fileName = str_replace( '../' , '' , $fileName );
WEB_LANG=='gb2312' && $state = gbk2utf8($state);

echo "{'state':'" . $state . "','url':'" .$filename . "','fileType':'" . $current_type . "','name':'".$array['name']."'}";
?>


