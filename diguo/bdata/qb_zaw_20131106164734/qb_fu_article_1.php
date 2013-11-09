<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_fu_article`;");
E_C("CREATE TABLE `qb_fu_article` (
  `fid` int(7) NOT NULL DEFAULT '0',
  `aid` int(10) NOT NULL DEFAULT '0',
  KEY `fid` (`fid`),
  KEY `aid` (`aid`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk");

require("../../inc/footer.php");
?>