<?php
!function_exists('html') && exit('ERR');
if($job=='js'){
	@include(ROOT_PATH."cache/hack/search.php");
	$searchcode=str_replace("\r","",$searchcode);
	$searchcode=str_replace("\n","",$searchcode);
	echo "document.write('$searchcode');";
}elseif($job=='test'){
	echo "<SCRIPT src=\"$webdb[www_url]/do/hack.php?hack=$hack&job=js\"></SCRIPT>";
}