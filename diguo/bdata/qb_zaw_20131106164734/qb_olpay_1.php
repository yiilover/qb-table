<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_olpay`;");
E_C("CREATE TABLE `qb_olpay` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `orderid` int(10) NOT NULL DEFAULT '0',
  `numcode` varchar(32) NOT NULL DEFAULT '',
  `money` varchar(15) NOT NULL DEFAULT '0',
  `ifpay` tinyint(1) NOT NULL DEFAULT '0',
  `posttime` int(10) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `username` varchar(32) NOT NULL DEFAULT '',
  `paytype` tinyint(3) NOT NULL DEFAULT '0',
  `moduleid` mediumint(5) NOT NULL DEFAULT '0',
  `formid` mediumint(5) NOT NULL DEFAULT '0',
  `banktype` varchar(15) NOT NULL DEFAULT '',
  `articleid` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `numcode` (`numcode`),
  KEY `paytype` (`paytype`),
  KEY `formid` (`formid`),
  KEY `articleid` (`articleid`),
  KEY `moduleid` (`moduleid`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=gbk");
E_D("replace into `qb_olpay` values('33','0','08nyzxrb9a','10','0','1284605041','1','admin','1','0','0','yeepay','0');");
E_D("replace into `qb_olpay` values('34','0','qaqec2flpj','1','0','1291882682','1','admin','1','0','0','tenpay','0');");
E_D("replace into `qb_olpay` values('35','0','tge8v0ag0w','1','0','1291882786','1','admin','1','0','0','tenpay','0');");

require("../../inc/footer.php");
?>