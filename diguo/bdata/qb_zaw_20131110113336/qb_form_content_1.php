<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_form_content`;");
E_C("CREATE TABLE `qb_form_content` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '',
  `mid` smallint(4) NOT NULL DEFAULT '0',
  `hits` mediumint(7) NOT NULL DEFAULT '0',
  `posttime` int(10) NOT NULL DEFAULT '0',
  `list` varchar(10) NOT NULL DEFAULT '',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `username` varchar(30) NOT NULL DEFAULT '',
  `titlecolor` varchar(15) NOT NULL DEFAULT '',
  `yz` tinyint(1) NOT NULL DEFAULT '0',
  `ip` varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `hits` (`hits`,`yz`),
  KEY `list` (`list`,`yz`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=gbk");
E_D("replace into `qb_form_content` values('22','','7','0','1237208241','1237208241','1','admin','','0','192.168.0.99');");
E_D("replace into `qb_form_content` values('26','','6','7','1237250809','1237250809','1','admin','','0','192.168.0.99');");
E_D("replace into `qb_form_content` values('27','','3','1','1237260673','1237260673','1','admin','','1','192.168.0.99');");
E_D("replace into `qb_form_content` values('30','','2','7','1237269830','1237269830','1','admin','','0','192.168.0.99');");
E_D("replace into `qb_form_content` values('29','','2','2','1237268864','1237268864','1','admin','','0','192.168.0.99');");
E_D("replace into `qb_form_content` values('25','','3','2','1237214289','1237214289','1','admin','','1','192.168.0.99');");
E_D("replace into `qb_form_content` values('24','','6','3','1237213169','1237213169','1','admin','','0','192.168.0.99');");
E_D("replace into `qb_form_content` values('31','','2','6','1239780761','1239780761','1','admin','','0','192.168.0.99');");
E_D("replace into `qb_form_content` values('18','','3','0','1236936110','1236936110','1','admin','','0','192.168.0.99');");
E_D("replace into `qb_form_content` values('19','','5','0','1236939584','1236939584','1','admin','','0','192.168.0.99');");
E_D("replace into `qb_form_content` values('20','','6','0','1237174883','1237174883','1','admin','','0','192.168.0.99');");
E_D("replace into `qb_form_content` values('23','','7','1','1237208253','1237208253','1','admin','','0','192.168.0.99');");

require("../../inc/footer.php");
?>