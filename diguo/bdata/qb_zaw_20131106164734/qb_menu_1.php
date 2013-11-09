<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_menu`;");
E_C("CREATE TABLE `qb_menu` (
  `id` mediumint(5) NOT NULL AUTO_INCREMENT,
  `fid` mediumint(5) NOT NULL DEFAULT '0',
  `name` varchar(80) NOT NULL DEFAULT '',
  `linkurl` varchar(150) NOT NULL DEFAULT '',
  `color` varchar(15) NOT NULL DEFAULT '',
  `target` tinyint(1) NOT NULL DEFAULT '0',
  `moduleid` tinyint(2) NOT NULL DEFAULT '0',
  `type` tinyint(2) NOT NULL DEFAULT '0',
  `hide` tinyint(1) NOT NULL DEFAULT '0',
  `list` smallint(4) NOT NULL DEFAULT '0',
  `extend` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=gbk");
E_D("replace into `qb_menu` values('9','0','新闻','list.php?fid=1','','0','0','0','0','18','');");
E_D("replace into `qb_menu` values('10','0','图片','list.php?fid=9','','0','0','0','0','16','');");
E_D("replace into `qb_menu` values('11','0','下载','list.php?fid=11','','0','0','0','0','14','');");
E_D("replace into `qb_menu` values('12','0','影视','list.php?fid=13','','0','0','0','0','12','');");
E_D("replace into `qb_menu` values('13','0','商城','list.php?fid=15','','0','0','0','0','10','');");
E_D("replace into `qb_menu` values('51','0','首页','/','','0','0','0','0','20','');");

require("../../inc/footer.php");
?>