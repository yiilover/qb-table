<?php
require(dirname(__FILE__)."/"."global.php");

//��������
$newartic = showartic($type="new",$rows=10,$leng=30);
//��������
$hotartic = showartic($type="hot",$rows=10,$leng=30);

require_once(dirname(__FILE__)."/"."template/head.htm");
require_once(dirname(__FILE__)."/"."template/index.htm");
require_once(dirname(__FILE__)."/"."template/foot.htm");


?>