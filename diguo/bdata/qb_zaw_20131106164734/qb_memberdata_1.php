<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_memberdata`;");
E_C("CREATE TABLE `qb_memberdata` (
  `uid` mediumint(7) unsigned NOT NULL DEFAULT '0',
  `username` varchar(50) NOT NULL DEFAULT '',
  `qq_api` varchar(32) NOT NULL,
  `question` varchar(32) NOT NULL DEFAULT '',
  `groupid` smallint(4) NOT NULL DEFAULT '0',
  `grouptype` tinyint(1) NOT NULL DEFAULT '0',
  `groups` varchar(255) NOT NULL DEFAULT '',
  `yz` tinyint(1) NOT NULL DEFAULT '0',
  `newpm` tinyint(1) NOT NULL DEFAULT '0',
  `medals` varchar(255) NOT NULL DEFAULT '',
  `money` mediumint(7) unsigned NOT NULL DEFAULT '0',
  `totalspace` bigint(13) NOT NULL DEFAULT '0',
  `usespace` bigint(13) NOT NULL DEFAULT '0',
  `oltime` int(10) NOT NULL DEFAULT '0',
  `lastvist` int(10) NOT NULL DEFAULT '0',
  `lastip` varchar(15) NOT NULL DEFAULT '',
  `regdate` int(10) NOT NULL DEFAULT '0',
  `regip` varchar(15) NOT NULL DEFAULT '',
  `sex` tinyint(1) NOT NULL DEFAULT '0',
  `bday` date NOT NULL DEFAULT '0000-00-00',
  `icon` varchar(150) NOT NULL DEFAULT '',
  `introduce` text NOT NULL,
  `hits` int(7) NOT NULL DEFAULT '0',
  `lastview` int(10) NOT NULL DEFAULT '0',
  `oicq` varchar(11) NOT NULL DEFAULT '',
  `msn` varchar(50) NOT NULL DEFAULT '',
  `homepage` varchar(150) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  `provinceid` mediumint(6) NOT NULL DEFAULT '0',
  `cityid` mediumint(7) NOT NULL DEFAULT '0',
  `address` varchar(255) NOT NULL DEFAULT '',
  `postalcode` varchar(6) NOT NULL DEFAULT '',
  `mobphone` varchar(12) NOT NULL DEFAULT '',
  `telephone` varchar(25) NOT NULL DEFAULT '',
  `idcard` varchar(20) NOT NULL DEFAULT '',
  `truename` varchar(20) NOT NULL DEFAULT '',
  `config` text NOT NULL,
  `moneycard` mediumint(7) unsigned NOT NULL DEFAULT '0',
  `email_yz` tinyint(1) NOT NULL DEFAULT '0',
  `mob_yz` tinyint(1) NOT NULL DEFAULT '0',
  `idcard_yz` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`),
  KEY `groups` (`groups`),
  KEY `sex` (`sex`,`bday`,`cityid`),
  KEY `qq_api` (`qq_api`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk");
E_D("replace into `qb_memberdata` values('1','qibosoft','','','3','1','','1','0','','1097','0','92286232','4287207','1383756105','112.65.49.163','1253678332','127.0.0.1','1','1890-00-00','icon/1.jpg','','110','1291684782','888888','','','222@qq.com','20','345','cvbnmmm','','13399999999','','','уея╖ся','a:1:{s:7:\"endtime\";s:0:\"\";}','5','0','0','0');");
E_D("replace into `qb_memberdata` values('2','zwa002','','','11','0','','1','0','','1','0','2616364','14541','1382331523','218.24.191.144','1379145580','113.234.89.237','0','0000-00-00','','','0','0','','','','adsf@ase.com','0','0','','','','','','','a:1:{s:7:\"endtime\";s:0:\"\";}','0','0','0','0');");
E_D("replace into `qb_memberdata` values('3','zwa001','','','11','0','','1','0','','0','0','0','207','1380411331','218.24.191.144','1380362507','124.93.196.72','0','0000-00-00','','','0','0','','','','1@dfa.com','0','0','','','','','','','','0','0','0','0');");

require("../../inc/footer.php");
?>