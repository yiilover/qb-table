<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_friendlink`;");
E_C("CREATE TABLE `qb_friendlink` (
  `id` mediumint(5) NOT NULL AUTO_INCREMENT,
  `fid` int(7) NOT NULL DEFAULT '0',
  `name` varchar(30) NOT NULL DEFAULT '',
  `url` varchar(150) NOT NULL DEFAULT '',
  `logo` varchar(150) NOT NULL DEFAULT '',
  `descrip` varchar(255) NOT NULL DEFAULT '',
  `list` int(10) NOT NULL DEFAULT '0',
  `ifhide` tinyint(1) NOT NULL DEFAULT '0',
  `iswordlink` tinyint(1) DEFAULT NULL,
  `hits` tinyint(7) NOT NULL DEFAULT '0',
  `posttime` int(10) NOT NULL DEFAULT '0',
  `uid` int(7) NOT NULL DEFAULT '0',
  `username` varchar(30) NOT NULL DEFAULT '',
  `yz` tinyint(1) NOT NULL DEFAULT '1',
  `endtime` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `yz` (`yz`,`endtime`,`ifhide`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=gbk");
E_D("replace into `qb_friendlink` values('12','0','PHPWIND�ٷ���̳','http://www.phpwind.net/','http://www.phpwind.net/logo.gif','PHPWIND�ٷ���̳','32','0','0','0','0','0','','1','0');");
E_D("replace into `qb_friendlink` values('5','0','�벩CMS','http://www.qibosoft.com','../images/default/friendlink.gif','����������CMS��վϵͳ�ṩ��','40','0','0','0','0','0','','1','0');");
E_D("replace into `qb_friendlink` values('39','3','��������','http://www.sudu.cn/','','','0','0','0','0','0','0','','1','0');");
E_D("replace into `qb_friendlink` values('25','2','վ����','http://admin5.com/','friendlink/1_20090418160400_wqpAk.gif','վ����','37','0','0','0','0','0','','1','0');");
E_D("replace into `qb_friendlink` values('26','2','�й�վ��վ','http://www.chinaz.com/','friendlink/1_20090418160432_JNCry.gif','�й�վ��վ','38','0','0','0','0','0','','1','0');");
E_D("replace into `qb_friendlink` values('27','2','WEB������','http://www.cncms.com.cn/','friendlink/1_20090418160451_64IKO.gif','WEB������','34','0','0','0','0','0','','1','0');");
E_D("replace into `qb_friendlink` values('29','3','�е绪ͨ','http://www.chinaccnet.com/','','�е绪ͨ','0','0','0','0','0','0','','1','0');");
E_D("replace into `qb_friendlink` values('34','2','CNZZ','http://www.cnzz.cn/','','CNZZ','26','0','0','0','0','0','','1','0');");

require("../../inc/footer.php");
?>