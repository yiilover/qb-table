<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_article_content_105`;");
E_C("CREATE TABLE `qb_article_content_105` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `aid` mediumint(7) NOT NULL DEFAULT '0',
  `rid` mediumint(7) NOT NULL DEFAULT '0',
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `my_type` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `uid` (`uid`),
  KEY `aid` (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk");
E_D("replace into `qb_article_content_105` values('2','544','522','30','1','M11504 BXF');");

require("../../inc/footer.php");
?>