INSERT INTO `qb_hack` (`keywords`, `name`, `isclose`, `author`, `config`, `htmlcode`, `hackfile`, `hacksqltable`, `adminurl`, `about`, `class1`, `class2`, `list`, `linkname`, `isbiz`) VALUES ('copyfrom_list', '��Դ��ַ����', 0, '', '', '', '', '', 'index.php?lfj=copyfrom&job=list', '', 'other', '����ģ�Ͳ������', 7, '', 0);


DROP TABLE IF EXISTS `qb_copyfrom`;
CREATE TABLE `qb_copyfrom` (
  `id` mediumint(5) NOT NULL auto_increment,
  `name` varchar(40) NOT NULL default '',
  `list` int(10) NOT NULL default '0',
  `uid` mediumint(7) NOT NULL default '0',
  PRIMARY KEY  (`id`),
  KEY `keywords` (`name`)
) TYPE=MyISAM AUTO_INCREMENT=1 ;

