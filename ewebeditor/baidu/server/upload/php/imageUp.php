<?php
require_once(dirname(__FILE__)."/../../../../../inc/common.inc.php");
    //�ϴ�����
    $config = array(
        "uploadPath"=>"../../../../../upload_files/other/",                          //����·��
        "fileType"=>array(".gif",".png",".jpg",".jpeg",".bmp"),   //�ļ������ʽ
        "fileSize"=>2000                                          //�ļ���С���ƣ���λKB
    );
    
    //�ļ��ϴ�״̬,���ɹ�ʱ����SUCCESS������ֵ��ֱ�ӷ��ض�Ӧ�ַ��ܲ���ʾ��ͼƬԤ����ͬʱ������ǰ��ҳ��ͨ���ص�������ȡ��Ӧ�ַ���
    $state = "SUCCESS";$fileName="";

    $title = htmlspecialchars($_POST['pictitle'], ENT_QUOTES);
    $path  = $config['uploadPath'];
    if(!file_exists($path)){
        mkdir("$path", 0777);
    }
    //��ʽ��֤
    $current_type = strtolower(strrchr($_FILES["picdata"]["name"], '.'));
    if(!in_array($current_type, $config['fileType'])){
        $state = "��֧�ֵ�ͼƬ���ͣ�";
    }
    //��С��֤
    $file_size = 1024 * $config['fileSize'];
    if( $_FILES["picdata"]["size"] > $file_size ){
        $state = "ͼƬ��С�������ƣ�";
    }

	if(!$lfjid){
		$state = "�㻹û��¼";
	}
	
    //����ͼƬ
    if($state == "SUCCESS"){/*
        $tmp_file=$_FILES["picdata"]["name"];
        $fileName = $path.rand(1,10000).time().strrchr($tmp_file,'.');
        $result = move_uploaded_file($_FILES["picdata"]["tmp_name"],$fileName);
        if(!$result){
            $state = "ͼƬ����ʧ�ܣ�";
        }*/

		$array='';
		$array['name']=is_array($picdata)?$_FILES['picdata']['name']:$picdata_name;
		$array['path']=$webdb['updir']."/other";
		$array['size']=is_array($picdata)?$_FILES['picdata']['size']:$picdata_size;
		
		$array['updateTable']=1;	//ͳ���û��ϴ����ļ�ռ�ÿռ��С
		$filename=upfile(is_array($picdata)?$_FILES['picdata']['tmp_name']:$picdata,$array);
    }
    //���������������json����
    //$file= str_replace('','',$fileName);  //Ϊ������⣬�滻����������../��./�����·����ʶ
	WEB_LANG=='gb2312' && $state = gbk2utf8($state);
    echo "{'url':'".$filename."','title':'".$title."','state':'".$state."'}";

?>


