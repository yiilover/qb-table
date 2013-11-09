<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_form_content_2`;");
E_C("CREATE TABLE `qb_form_content_2` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `workplace` varchar(100) NOT NULL DEFAULT '',
  `nums` varchar(10) NOT NULL DEFAULT '',
  `jobrequire` mediumtext NOT NULL,
  `workwhere` varchar(50) NOT NULL DEFAULT '',
  `wage` varchar(30) NOT NULL DEFAULT '',
  `asksex` int(1) NOT NULL DEFAULT '0',
  `schoo_age` varchar(20) NOT NULL DEFAULT '',
  `wageyear` varchar(12) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=gbk");
E_D("replace into `qb_form_content_2` values('29','1','JAVA程序员','5','独立开发程序','深圳','800元/月','2','高中','两年以上');");
E_D("replace into `qb_form_content_2` values('30','1','市场总监','2','负责产品的销售.','广州','8000元/月','0','本科','三年以上');");
E_D("replace into `qb_form_content_2` values('31','1','销售经理','8','负责我公司的产品销售.','广州市','3000','0','大专','一年以上');");

require("../../inc/footer.php");
?>