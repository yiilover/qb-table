<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_article_content_109`;");
E_C("CREATE TABLE `qb_article_content_109` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `aid` int(10) NOT NULL DEFAULT '0',
  `rid` mediumint(7) NOT NULL DEFAULT '0',
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `xinghao` mediumtext NOT NULL,
  `plzhjxz` mediumtext NOT NULL,
  `wxcc_d` mediumtext NOT NULL,
  `wxcc_d2` mediumtext NOT NULL,
  `wxcc_c` mediumtext NOT NULL,
  `wxcc_b` mediumtext NOT NULL,
  `jbfh_d` mediumtext NOT NULL,
  `jbfh_j` mediumtext NOT NULL,
  `zhongliang` mediumtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `uid` (`uid`),
  KEY `aid` (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk");
E_D("replace into `qb_article_content_109` values('1','718','782','66','1','231SM100-MA','40','100','180','56','90','310','430','6.8');");

require("../../inc/footer.php");
?>