<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_channel`;");
E_C("CREATE TABLE `qb_channel` (
  `id` smallint(4) NOT NULL AUTO_INCREMENT,
  `type` tinyint(2) NOT NULL DEFAULT '0',
  `sort` smallint(4) NOT NULL DEFAULT '0',
  `name` varchar(30) NOT NULL DEFAULT '',
  `path` varchar(30) NOT NULL DEFAULT '',
  `phpname` varchar(255) NOT NULL DEFAULT '',
  `htmlname` varchar(255) NOT NULL DEFAULT '',
  `fids` varchar(255) NOT NULL DEFAULT '',
  `showfid` varchar(150) NOT NULL DEFAULT '',
  `style` varchar(15) NOT NULL DEFAULT '',
  `head_tpl` varchar(255) NOT NULL DEFAULT '',
  `main_tpl` varchar(255) NOT NULL DEFAULT '',
  `foot_tpl` varchar(255) NOT NULL DEFAULT '',
  `url` varchar(150) NOT NULL DEFAULT '',
  `logo` varchar(150) NOT NULL DEFAULT '',
  `descrip` text NOT NULL,
  `admin` varchar(150) NOT NULL DEFAULT '',
  `list` int(10) NOT NULL DEFAULT '0',
  `config` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk");
E_D("replace into `qb_channel` values('1','0','0','อ๘ีพสืาณ','./','','index.htm','35,4,3,39','','zaw','','','','','','','','0','a:5:{s:4:\"line\";s:1:\"3\";s:4:\"rows\";s:1:\"8\";s:4:\"leng\";s:2:\"34\";s:5:\"order\";s:4:\"list\";s:8:\"fid_list\";N;}');");

require("../../inc/footer.php");
?>