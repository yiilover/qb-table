<?php
require_once(dirname(__FILE__)."/../../../../../inc/common.inc.php");
    //�ϴ�����
    $config = array(
        "uploadPath"=>"../../../../../upload_files/other/",                          //����·��
        //"fileType"=>array(".gif",".png",".jpg",".jpeg",".bmp"),   //�ļ������ʽ
		"fileType"=>explode(' ',$webdb['upfileType']),
        "fileSize"=>1000                                          //�ļ���С���ƣ���λKB
    );
	

    //�ļ��ϴ�״̬,���ɹ�ʱ����SUCCESS������ֵ��ֱ�ӷ��ض�Ӧ�ַ��ܲ���ʾ��ͼƬԤ����ͬʱ������ǰ��ҳ��ͨ���ص�������ȡ��Ӧ�ַ���
    $state = "SUCCESS";
    $fileName="";

    $path  = $config['uploadPath'];
    if(!file_exists($path)){
        mkdir("$path", 0777);
    }
    //��ʽ��֤
    $current_type = strtolower(strrchr($_FILES["upfile"]["name"], '.'));
    if(!in_array($current_type, $config['fileType'])){
        $state = "��֧�ֵ�ͼƬ���ͣ�";
    }
    //��С��֤
    $file_size = 1024 * $config['fileSize'];
    if( $_FILES["upfile"]["size"] > $file_size ){
        $state = "ͼƬ��С�������ƣ�";
    }
	if(!$lfjid){
		$state = "�㻹û��¼";
	}
    //����ͼƬ
    if($state == "SUCCESS"){/*
        $resource = fopen("log.txt","a");
		fwrite($resource,date("Ymd h:i:s")."UPLOAD - $_SERVER[REMOTE_ADDR]"
					.$_FILES['upfile']['name']." "
					.$_FILES['upfile']['type']."\n");
		fclose($resource);

        $tmp_file=$_FILES["upfile"]["name"];
        $fileName = $path.rand(1,10000).time().strrchr($tmp_file,'.');
        $result = move_uploaded_file($_FILES["upfile"]["tmp_name"],$fileName);
        if(!$result){
            $state = "ͼƬ����ʧ�ܣ�";
        }*/

		$array='';
		$array['name']=is_array($upfile)?$_FILES['upfile']['name']:$upfile_name;
		$array['path']=$webdb['updir']."/other";
		$array['size']=is_array($upfile)?$_FILES['upfile']['size']:$upfile_size;
		
		$array['updateTable']=1;	//ͳ���û��ϴ����ļ�ռ�ÿռ��С
		$filename=upfile(is_array($upfile)?$_FILES['upfile']['tmp_name']:$upfile,$array);

    }
    //���������������json����
    //$file= str_replace('../','',$fileName);  //Ϊ������⣬�滻����������../��./�����·����ʶ

	WEB_LANG=='gb2312' && $state = gbk2utf8($state);
    echo "{'url':'".$filename."','state':'".$state."'}";
?>
