<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_module`;");
E_C("CREATE TABLE `qb_module` (
  `id` mediumint(5) NOT NULL AUTO_INCREMENT,
  `type` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(30) NOT NULL DEFAULT '',
  `pre` varchar(20) NOT NULL DEFAULT '',
  `dirname` varchar(30) NOT NULL DEFAULT '',
  `domain` varchar(100) NOT NULL DEFAULT '',
  `admindir` varchar(20) NOT NULL DEFAULT '',
  `config` text NOT NULL,
  `list` mediumint(5) NOT NULL DEFAULT '0',
  `admingroup` varchar(150) NOT NULL DEFAULT '',
  `adminmember` text NOT NULL,
  `ifclose` tinyint(1) NOT NULL DEFAULT '0',
  `ifsys` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=gbk");
E_D("replace into `qb_module` values('24','2','广告系统','ad_','a_d','','','','0','','','0','0');");
E_D("replace into `qb_module` values('21','2','万能表单','form_','form','','','','0','','','0','0');");
E_D("replace into `qb_module` values('18','2','留言本','guestbook_','guestbook','','','','0','','','0','0');");
E_D("replace into `qb_module` values('23','2','投票系统','vote_','vote','','','','0','','','0','0');");

require("../../inc/footer.php");
?>