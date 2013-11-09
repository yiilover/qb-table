<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_article_content_103`;");
E_C("CREATE TABLE `qb_article_content_103` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `aid` mediumint(7) NOT NULL DEFAULT '0',
  `rid` mediumint(7) NOT NULL DEFAULT '0',
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `shoptype` varchar(50) NOT NULL DEFAULT '',
  `martprice` varchar(15) NOT NULL DEFAULT '',
  `nowprice` varchar(20) NOT NULL DEFAULT '',
  `shop_id` varchar(30) NOT NULL DEFAULT '',
  `shopmoney` int(7) NOT NULL DEFAULT '0',
  `shopnum` varchar(5) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `uid` (`uid`),
  KEY `aid` (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=gbk");

require("../../inc/footer.php");
?>