<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_members`;");
E_C("CREATE TABLE `qb_members` (
  `uid` mediumint(7) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL DEFAULT '',
  `password` varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=gbk");
E_D("replace into `qb_members` values('1','qibosoft','404476912de799d3cea249191119b269');");
E_D("replace into `qb_members` values('2','zwa002','15f9a27c15a7b2bd7eb39a97ca59267f');");
E_D("replace into `qb_members` values('3','zwa001','c220e547d6bc7f6594e772785fb64e33');");

require("../../inc/footer.php");
?>