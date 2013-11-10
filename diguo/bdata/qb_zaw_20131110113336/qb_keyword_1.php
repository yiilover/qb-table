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
E_D("replace into `qb_keyword` values('1','标题测试标题测试标题测试标题测试标题测试标题测试','0','1','1','','1');");
E_D("replace into `qb_keyword` values('2','调心滚子轴承','0','2','1','','0');");
E_D("replace into `qb_keyword` values('3','圆柱','0','1','1','','5');");
E_D("replace into `qb_keyword` values('4','轴承','0','1','1','','21');");
E_D("replace into `qb_keyword` values('5','双列','0','1','1','','1');");
E_D("replace into `qb_keyword` values('6','圆锥','0','1','1','','4');");
E_D("replace into `qb_keyword` values('7','O9001','0','1','1','','1');");
E_D("replace into `qb_keyword` values('8','光扬','0','1','1','','1');");
E_D("replace into `qb_keyword` values('9','周期','0','1','1','','1');");
E_D("replace into `qb_keyword` values('10','瓦房','0','1','1','','2');");
E_D("replace into `qb_keyword` values('11','中央','0','1','1','','1');");
E_D("replace into `qb_keyword` values('12','瞄准','0','1','1','','1');");
E_D("replace into `qb_keyword` values('13','国际','0','1','1','','1');");
E_D("replace into `qb_keyword` values('14','高端','0','1','1','','2');");
E_D("replace into `qb_keyword` values('15','研发','0','1','1','','1');");
E_D("replace into `qb_keyword` values('16','项目','0','1','1','','1');");
E_D("replace into `qb_keyword` values('17','关于','0','1','1','','1');");
E_D("replace into `qb_keyword` values('18','我们','0','1','1','','2');");
E_D("replace into `qb_keyword` values('19','进步','0','1','1','','1');");
E_D("replace into `qb_keyword` values('20','检测','0','1','1','','1');");
E_D("replace into `qb_keyword` values('21','实验','0','1','1','','1');");
E_D("replace into `qb_keyword` values('22','程度','0','1','1','','1');");
E_D("replace into `qb_keyword` values('23','热烈','0','1','1','','1');");
E_D("replace into `qb_keyword` values('24','庆祝','0','1','1','','1');");
E_D("replace into `qb_keyword` values('25','大连','0','1','1','','1');");
E_D("replace into `qb_keyword` values('26','制造','0','1','1','','1');");
E_D("replace into `qb_keyword` values('27','有限公司','0','1','1','','1');");
E_D("replace into `qb_keyword` values('28','网站','0','1','1','','1');");
E_D("replace into `qb_keyword` values('29','改版','0','1','1','','1');");
E_D("replace into `qb_keyword` values('30','成功','0','1','1','','1');");
E_D("replace into `qb_keyword` values('31','标题','0','1','1','','4');");
E_D("replace into `qb_keyword` values('32','测试','0','1','1','','5');");
E_D("replace into `qb_keyword` values('33','产品中心','0','1','1','','1');");
E_D("replace into `qb_keyword` values('34','表格','0','1','1','','1');");
E_D("replace into `qb_keyword` values('35','球面','0','1','1','','1');");
E_D("replace into `qb_keyword` values('36','推力','0','1','1','','5');");
E_D("replace into `qb_keyword` values('37','CRAB','0','1','1','','1');");
E_D("replace into `qb_keyword` values('38','圆环','0','1','1','','1');");
E_D("replace into `qb_keyword` values('39','单列','0','1','1','','2');");
E_D("replace into `qb_keyword` values('40','接触','0','1','1','','1');");
E_D("replace into `qb_keyword` values('41','矿山','0','1','1','','1');");
E_D("replace into `qb_keyword` values('42','水泥','0','1','1','','1');");
E_D("replace into `qb_keyword` values('43','机械','0','1','1','','1');");
E_D("replace into `qb_keyword` values('44','行业','0','1','1','','4');");
E_D("replace into `qb_keyword` values('45','工程机械','0','1','1','','1');");
E_D("replace into `qb_keyword` values('46','冶金','0','1','1','','1');");
E_D("replace into `qb_keyword` values('47','石油行业','0','1','1','','1');");
E_D("replace into `qb_keyword` values('48','造纸','0','1','1','','1');");
E_D("replace into `qb_keyword` values('49','联系','0','1','1','','1');");
E_D("replace into `qb_keyword` values('50','技术支持','0','1','1','','1');");
E_D("replace into `qb_keyword` values('51','维修','0','1','1','','1');");
E_D("replace into `qb_keyword` values('52','四点接触球轴承','0','1','1','','0');");
E_D("replace into `qb_keyword` values('53','双列圆柱滚子轴承','0','1','1','','1');");
E_D("replace into `qb_keyword` values('54','无外圈(内圈)单列圆柱滚子轴承','0','1','1','','1');");
E_D("replace into `qb_keyword` values('55','单列角接触球轴承','0','1','1','','1');");
E_D("replace into `qb_keyword` values('56','双列角接触球轴承','0','1','1','','1');");
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