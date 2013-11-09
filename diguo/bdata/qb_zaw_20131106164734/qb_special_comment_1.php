<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_special_comment`;");
E_C("CREATE TABLE `qb_special_comment` (
  `id` mediumint(7) unsigned NOT NULL AUTO_INCREMENT,
  `cid` mediumint(7) unsigned NOT NULL DEFAULT '0',
  `vid` mediumint(7) NOT NULL DEFAULT '0',
  `uid` mediumint(7) unsigned NOT NULL DEFAULT '0',
  `username` varchar(30) NOT NULL DEFAULT '',
  `posttime` int(10) NOT NULL DEFAULT '0',
  `content` text NOT NULL,
  `ip` varchar(15) NOT NULL DEFAULT '',
  `icon` tinyint(3) NOT NULL DEFAULT '0',
  `yz` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `aid` (`cid`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk");

require("../../inc/footer.php");
?>