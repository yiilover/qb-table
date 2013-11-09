<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_form_content_6`;");
E_C("CREATE TABLE `qb_form_content_6` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `workposition` varchar(50) NOT NULL DEFAULT '',
  `experience` mediumtext NOT NULL,
  `workyear` int(2) NOT NULL DEFAULT '0',
  `truename` varchar(15) NOT NULL DEFAULT '',
  `schoo_age` varchar(15) NOT NULL DEFAULT '',
  `myage` int(2) NOT NULL DEFAULT '0',
  `graduateschool` varchar(40) NOT NULL DEFAULT '',
  `specialty` varchar(50) NOT NULL DEFAULT '',
  `skill` varchar(50) NOT NULL DEFAULT '',
  `sex` int(1) NOT NULL DEFAULT '0',
  `telephone` varchar(25) NOT NULL DEFAULT '',
  `wage` varchar(20) NOT NULL DEFAULT '',
  `address` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  `oicq` varchar(11) NOT NULL DEFAULT '',
  `worktime` varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=gbk");
E_D("replace into `qb_form_content_6` values('20','1','程序员','55555555555\nkkkkkkkkkkkkkkkkkkkkkk','5','222223','高中','56','','','','2','6767','面议','3','65223@qq.com','444444','');");
E_D("replace into `qb_form_content_6` values('24','1','C语言工程师','4444444444444','4','222223','大专','4','','','','2','090-89766543','面议','3','65223@qq.com','444444','1周内');");
E_D("replace into `qb_form_content_6` values('26','1','C语言工程师','rrrrrrrrrrrrrrrrrrrrrrrrrrr','4','222223','大专','4','','','','1','090-89766543','1000元-2000元','3','65223@qq.com','444444','1周内');");

require("../../inc/footer.php");
?>