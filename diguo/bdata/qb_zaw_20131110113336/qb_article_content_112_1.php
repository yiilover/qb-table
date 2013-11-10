<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_article_content_112`;");
E_C("CREATE TABLE `qb_article_content_112` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `aid` int(10) NOT NULL DEFAULT '0',
  `rid` mediumint(7) NOT NULL DEFAULT '0',
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `xinghao` mediumtext NOT NULL,
  `ydh` mediumtext NOT NULL,
  `wxcc_d` mediumtext NOT NULL,
  `wxcc_d2` mediumtext NOT NULL,
  `wxcc_t` mediumtext NOT NULL,
  `wxcc_c` mediumtext NOT NULL,
  `wxcc_b` mediumtext NOT NULL,
  `wxcc_rsmin` mediumtext NOT NULL,
  `wxcc_rsmin2` mediumtext NOT NULL,
  `jbfh_d` mediumtext NOT NULL,
  `jbfh_j` mediumtext NOT NULL,
  `jxzs_zrh` mediumtext NOT NULL,
  `jxyx_yrh` mediumtext NOT NULL,
  `zhongliang` mediumtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `uid` (`uid`),
  KEY `aid` (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk");
E_D("replace into `qb_article_content_112` values('1','721','785','69','1','352218','97518','90','160','80','70','60','50','40','460','740','1900','2500','1.7');");

require("../../inc/footer.php");
?>