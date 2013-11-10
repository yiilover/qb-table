<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_article_content_111`;");
E_C("CREATE TABLE `qb_article_content_111` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `aid` int(10) NOT NULL DEFAULT '0',
  `rid` mediumint(7) NOT NULL DEFAULT '0',
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `xinghao` mediumtext NOT NULL,
  `ydh` mediumtext NOT NULL,
  `wxcc_d` mediumtext NOT NULL,
  `wxcc_d2` mediumtext NOT NULL,
  `wxcc_b` mediumtext NOT NULL,
  `wxcc_b1` mediumtext NOT NULL,
  `rsmin` mediumtext NOT NULL,
  `r1smin` mediumtext NOT NULL,
  `wxcc_fw` mediumtext NOT NULL,
  `jbfh_d` mediumtext NOT NULL,
  `jbfh_j` mediumtext NOT NULL,
  `jxzs_old_spec` mediumtext NOT NULL,
  `jxzs_designations` mediumtext NOT NULL,
  `zhongliang` mediumtext NOT NULL,
  `xdqh` mediumtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `uid` (`uid`),
  KEY `aid` (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk");
E_D("replace into `qb_article_content_111` values('1','720','784','68','1','NU1020','32120','100','150','24','-','1.5','1.1','113','85','110','5000','4600','1.5','-');");

require("../../inc/footer.php");
?>