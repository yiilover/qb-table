<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_form_content_9`;");
E_C("CREATE TABLE `qb_form_content_9` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `my_441` mediumtext NOT NULL,
  `my_609` mediumtext NOT NULL,
  `my_510` mediumtext NOT NULL,
  `my_716` mediumtext NOT NULL,
  `my_925` mediumtext NOT NULL,
  `my_160` mediumtext NOT NULL,
  `my_320` mediumtext NOT NULL,
  `my_136` mediumtext NOT NULL,
  `my_329` mediumtext NOT NULL,
  `my_38` mediumtext NOT NULL,
  `my_676` mediumtext NOT NULL,
  `my_199` mediumtext NOT NULL,
  `my_514` mediumtext NOT NULL,
  `my_205` mediumtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk");

require("../../inc/footer.php");
?>