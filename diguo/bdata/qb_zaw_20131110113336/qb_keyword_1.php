<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_keyword`;");
E_C("CREATE TABLE `qb_keyword` (
  `id` mediumint(5) NOT NULL AUTO_INCREMENT,
  `keywords` varchar(30) NOT NULL DEFAULT '',
  `list` int(10) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `ifhide` tinyint(1) NOT NULL DEFAULT '0',
  `url` varchar(150) NOT NULL DEFAULT '',
  `num` smallint(4) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `keywords` (`keywords`),
  KEY `num` (`num`)
) ENGINE=MyISAM AUTO_INCREMENT=72 DEFAULT CHARSET=gbk");
E_D("replace into `qb_keyword` values('1','������Ա�����Ա�����Ա�����Ա�����Ա������','0','1','1','','1');");
E_D("replace into `qb_keyword` values('2','���Ĺ������','0','2','1','','0');");
E_D("replace into `qb_keyword` values('3','Բ��','0','1','1','','5');");
E_D("replace into `qb_keyword` values('4','���','0','1','1','','21');");
E_D("replace into `qb_keyword` values('5','˫��','0','1','1','','1');");
E_D("replace into `qb_keyword` values('6','Բ׶','0','1','1','','4');");
E_D("replace into `qb_keyword` values('7','O9001','0','1','1','','1');");
E_D("replace into `qb_keyword` values('8','����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('9','����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('10','�߷�','0','1','1','','2');");
E_D("replace into `qb_keyword` values('11','����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('12','��׼','0','1','1','','1');");
E_D("replace into `qb_keyword` values('13','����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('14','�߶�','0','1','1','','2');");
E_D("replace into `qb_keyword` values('15','�з�','0','1','1','','1');");
E_D("replace into `qb_keyword` values('16','��Ŀ','0','1','1','','1');");
E_D("replace into `qb_keyword` values('17','����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('18','����','0','1','1','','2');");
E_D("replace into `qb_keyword` values('19','����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('20','���','0','1','1','','1');");
E_D("replace into `qb_keyword` values('21','ʵ��','0','1','1','','1');");
E_D("replace into `qb_keyword` values('22','�̶�','0','1','1','','1');");
E_D("replace into `qb_keyword` values('23','����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('24','��ף','0','1','1','','1');");
E_D("replace into `qb_keyword` values('25','����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('26','����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('27','���޹�˾','0','1','1','','1');");
E_D("replace into `qb_keyword` values('28','��վ','0','1','1','','1');");
E_D("replace into `qb_keyword` values('29','�İ�','0','1','1','','1');");
E_D("replace into `qb_keyword` values('30','�ɹ�','0','1','1','','1');");
E_D("replace into `qb_keyword` values('31','����','0','1','1','','4');");
E_D("replace into `qb_keyword` values('32','����','0','1','1','','5');");
E_D("replace into `qb_keyword` values('33','��Ʒ����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('34','���','0','1','1','','1');");
E_D("replace into `qb_keyword` values('35','����','0','1','1','','1');");
E_D("replace into `qb_keyword` values('36','����','0','1','1','','5');");
E_D("replace into `qb_keyword` values('37','CRAB','0','1','1','','1');");
E_D("replace into `qb_keyword` values('38','Բ��','0','1','1','','1');");
E_D("replace into `qb_keyword` values('39','����','0','1','1','','2');");
E_D("replace into `qb_keyword` values('40','�Ӵ�','0','1','1','','1');");
E_D("replace into `qb_keyword` values('41','��ɽ','0','1','1','','1');");
E_D("replace into `qb_keyword` values('42','ˮ��','0','1','1','','1');");
E_D("replace into `qb_keyword` values('43','��е','0','1','1','','1');");
E_D("replace into `qb_keyword` values('44','��ҵ','0','1','1','','4');");
E_D("replace into `qb_keyword` values('45','���̻�е','0','1','1','','1');");
E_D("replace into `qb_keyword` values('46','ұ��','0','1','1','','1');");
E_D("replace into `qb_keyword` values('47','ʯ����ҵ','0','1','1','','1');");
E_D("replace into `qb_keyword` values('48','��ֽ','0','1','1','','1');");
E_D("replace into `qb_keyword` values('49','��ϵ','0','1','1','','1');");
E_D("replace into `qb_keyword` values('50','����֧��','0','1','1','','1');");
E_D("replace into `qb_keyword` values('51','ά��','0','1','1','','1');");
E_D("replace into `qb_keyword` values('52','�ĵ�Ӵ������','0','1','1','','0');");
E_D("replace into `qb_keyword` values('53','˫��Բ���������','0','1','1','','1');");
E_D("replace into `qb_keyword` values('54','����Ȧ(��Ȧ)����Բ���������','0','1','1','','1');");
E_D("replace into `qb_keyword` values('55','���нǽӴ������','0','1','1','','1');");
E_D("replace into `qb_keyword` values('56','˫�нǽӴ������','0','1','1','','1');");
E_D("replace into `qb_keyword` values('57','11111111111','0','1','1','','1');");
E_D("replace into `qb_keyword` values('58','333333333333333333','0','1','1','','1');");
E_D("replace into `qb_keyword` values('59','11111','0','1','1','','0');");
E_D("replace into `qb_keyword` values('60','787878','0','1','1','','1');");
E_D("replace into `qb_keyword` values('61','C2205TN9','0','1','1','','2');");
E_D("replace into `qb_keyword` values('62','29320E','0','1','1','','1');");
E_D("replace into `qb_keyword` values('63','231SM100-MA','0','1','1','','1');");
E_D("replace into `qb_keyword` values('64','NU1020','0','1','1','','1');");
E_D("replace into `qb_keyword` values('65','352218','0','1','1','','1');");
E_D("replace into `qb_keyword` values('66','81220','0','1','1','','1');");
E_D("replace into `qb_keyword` values('67','7661','0','1','1','','1');");
E_D("replace into `qb_keyword` values('68','61820','0','1','1','','1');");
E_D("replace into `qb_keyword` values('69','71930C','0','1','1','','1');");
E_D("replace into `qb_keyword` values('70','51130','0','1','1','','1');");
E_D("replace into `qb_keyword` values('71','135TN9','0','1','1','','2');");

require("../../inc/footer.php");
?>