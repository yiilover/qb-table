<?php
!function_exists('html') && exit('ERR');
if($job=='js'){
	$time=time()-@filemtime(ROOT_PATH."cache/hack/oicq.php");
	if($time>3600){
		$rs=$db->get_one("SELECT * FROM {$pre}hack WHERE keywords='$hack'");
		$rs[htmlcode]=AddSlashes($rs[htmlcode]);
		echo "document.write(\"$rs[htmlcode]\")";
		write_file(ROOT_PATH."cache/hack/oicq.php","<?php\r\n\$htmlcode=\"$rs[htmlcode]\";");
	}else{
		include(ROOT_PATH."cache/hack/oicq.php");
		echo "document.write(\"$htmlcode\")";
	}
}elseif($job=='test'){
	echo "Ч��:<hr><SCRIPT src='hack.php?hack=$hack&job=js'></SCRIPT>";
}
?>