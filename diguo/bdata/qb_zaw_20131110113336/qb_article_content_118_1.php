<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_article_content_118`;");
E_C("CREATE TABLE `qb_article_content_118` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `aid` int(10) NOT NULL DEFAULT '0',
  `rid` mediumint(7) NOT NULL DEFAULT '0',
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `xh_yzx` mediumtext NOT NULL,
  `xh_yzx2` mediumtext NOT NULL,
  `wxcc_d` mediumtext NOT NULL,
  `wxcc_d2` mediumtext NOT NULL,
  `wxcc_b` mediumtext NOT NULL,
  `wxcc_rsmin` mediumtext NOT NULL,
  `jbfh_d` mediumtext NOT NULL,
  `jbfh_j` mediumtext NOT NULL,
  `edzs_cksd` mediumtext NOT NULL,
  `edzs_jxsd` mediumtext NOT NULL,
  `zhongliang` mediumtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `uid` (`uid`),
  KEY `aid` (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk");
E_D("replace into `qb_article_content_118` values('1','727','791','75','1','135TN9','','5','19','6','','2.51','0.46','63000','45000','');");

require("../../inc/footer.php");
?>