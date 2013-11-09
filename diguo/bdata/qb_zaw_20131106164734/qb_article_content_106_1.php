<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_article_content_106`;");
E_C("CREATE TABLE `qb_article_content_106` (
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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=gbk");
E_D("replace into `qb_article_content_106` values('1','711','776','62','1','22315E','22315EK','30','62','20','','64','60','10000','14000','0.29');");
E_D("replace into `qb_article_content_106` values('2','712','777','62','1','21306CC','21306CCK','30','72','19','','55.2','61','7500','10000','0.41');");
E_D("replace into `qb_article_content_106` values('3','713','778','63','1','22216E','22216EK','80','140','33','','236','270','4300','6000','2.1');");
E_D("replace into `qb_article_content_106` values('4','715','780','62','1','77','7878','878','7878','878','787','7878','7878','7878','7878','66');");

require("../../inc/footer.php");
?>