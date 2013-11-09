<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_report`;");
E_C("CREATE TABLE `qb_report` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `aid` int(10) NOT NULL DEFAULT '0',
  `type` varchar(50) NOT NULL DEFAULT '',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `name` varchar(30) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `posttime` int(10) NOT NULL DEFAULT '0',
  `ip` varchar(15) NOT NULL DEFAULT '',
  `yz` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk");

require("../../inc/footer.php");
?>