INSERT INTO `qb_hack` (`keywords`, `name`, `isclose`, `author`, `config`, `htmlcode`, `hackfile`, `hacksqltable`, `adminurl`, `about`, `class1`, `class2`, `list`, `linkname`, `isbiz`) VALUES ('shoporder', '�̳Ƕ�������', 0, '', '', '', '', '', 'index.php?lfj=shoporder&job=list', '', 'other', '�����������', 8, '', 0);


DROP TABLE IF EXISTS `qb_shoporderproduct`;
CREATE TABLE `qb_shoporderproduct` (
  `pid` int(7) NOT NULL auto_increment,
  `title` varchar(50) NOT NULL default '',
  `orderid` mediumint(7) default NULL,
  `shopid` int(10) NOT NULL default '0',
  `shopuid` mediumint(7) NOT NULL default '0',
  `ifsend` tinyint(1) NOT NULL default '0',
  `amount` mediumint(7) NOT NULL default '0',
  PRIMARY KEY  (`pid`)
) TYPE=MyISAM AUTO_INCREMENT=1 ;


DROP TABLE IF EXISTS `qb_shoporderuser`;
CREATE TABLE `qb_shoporderuser` (
  `id` int(7) NOT NULL auto_increment,
  `uid` mediumint(7) NOT NULL default '0',
  `username` varchar(30) NOT NULL default '',
  `truename` varchar(30) NOT NULL default '',
  `sex` varchar(10) NOT NULL default '',
  `telphone` varchar(20) NOT NULL default '',
  `mobphone` varchar(12) NOT NULL default '',
  `email` varchar(30) NOT NULL default '',
  `oicq` varchar(11) NOT NULL default '',
  `postalcode` varchar(6) NOT NULL default '',
  `sendtype` varchar(50) NOT NULL default '',
  `paytype` varchar(50) NOT NULL default '',
  `olpaytype` varchar(25) NOT NULL default '',
  `address` varchar(255) NOT NULL default '',
  `othersay` text NOT NULL,
  `posttime` int(10) NOT NULL default '0',
  `ifsend` tinyint(1) NOT NULL default '0',
  `totalmoney` varchar(15) NOT NULL default '',
  `ifpay` tinyint(1) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) TYPE=MyISAM AUTO_INCREMENT=6 ;

