<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_article_content_101`;");
E_C("CREATE TABLE `qb_article_content_101` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `aid` mediumint(7) NOT NULL DEFAULT '0',
  `rid` mediumint(7) NOT NULL DEFAULT '0',
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `day_hits` mediumint(7) NOT NULL DEFAULT '0',
  `week_hits` mediumint(7) NOT NULL DEFAULT '0',
  `month_hits` mediumint(7) NOT NULL DEFAULT '0',
  `total_hits` mediumint(7) NOT NULL DEFAULT '0',
  `hits_time` int(10) NOT NULL DEFAULT '0',
  `hits_user` text NOT NULL,
  `my_author` varchar(30) NOT NULL DEFAULT '',
  `my_copyfromurl` varchar(150) NOT NULL DEFAULT '',
  `my_demo` varchar(150) NOT NULL DEFAULT '',
  `operatingsystem` varchar(150) NOT NULL DEFAULT '',
  `softlanguage` varchar(30) NOT NULL DEFAULT '',
  `copyright` varchar(30) NOT NULL DEFAULT '',
  `softsize` varchar(20) NOT NULL DEFAULT '',
  `softurl` mediumtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `uid` (`uid`),
  KEY `aid` (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=gbk");

require("../../inc/footer.php");
?>