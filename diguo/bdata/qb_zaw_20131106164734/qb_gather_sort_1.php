<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_gather_sort`;");
E_C("CREATE TABLE `qb_gather_sort` (
  `fid` mediumint(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL DEFAULT '',
  `fup` mediumint(6) NOT NULL DEFAULT '0',
  `class` smallint(4) NOT NULL DEFAULT '0',
  `type` tinyint(1) NOT NULL DEFAULT '0',
  `list` mediumint(5) NOT NULL DEFAULT '0',
  `allowpost` varchar(255) NOT NULL DEFAULT '',
  `sons` smallint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk");

require("../../inc/footer.php");
?>