<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_form_content_7`;");
E_C("CREATE TABLE `qb_form_content_7` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `product` varchar(50) NOT NULL DEFAULT '',
  `paymoney` varchar(15) NOT NULL DEFAULT '',
  `paytime` varchar(15) NOT NULL DEFAULT '',
  `paytype` varchar(25) NOT NULL DEFAULT '',
  `sendbank` varchar(30) NOT NULL DEFAULT '',
  `receivebank` varchar(30) NOT NULL DEFAULT '',
  `truename` varchar(15) NOT NULL DEFAULT '',
  `oicq` varchar(11) NOT NULL DEFAULT '',
  `telephone` varchar(30) NOT NULL DEFAULT '',
  `mobphone` varchar(11) NOT NULL DEFAULT '',
  `address` varchar(150) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=gbk");
E_D("replace into `qb_form_content_7` values('6','1','整站系统(文章+核心)','6655','','网上转帐','','','222223','444444','3333333','13333333333','3trewtre');");
E_D("replace into `qb_form_content_7` values('7','1','整站系统(文章+核心)','23','2009-03-03','在线支付','fff','eee','222223','444444','333','13344444444','3');");
E_D("replace into `qb_form_content_7` values('8','1','整站系统(文章+核心)','5','','在线支付','','','222223','444444','一直在fgsgfd3','13355555555','3');");
E_D("replace into `qb_form_content_7` values('9','1','整站系统(文章+核心)','0.01','2009-03-13','在线支付','e','s','222223','444444','一直在fgsgfd3','13355555555','3');");
E_D("replace into `qb_form_content_7` values('10','1','整站系统(文章+核心)','1','2009-03-13','在线支付','e','s','222223','444444','一直在fgsgfd3','13355555555','3');");
E_D("replace into `qb_form_content_7` values('11','1','整站系统(文章+核心)','0.01','2009-03-13','olpay','e','s','222223','444444','一直在fgsgfd3','13355555555','3');");
E_D("replace into `qb_form_content_7` values('12','1','整站系统(文章+核心)/分类信息系统/商城系统','54','2009-03-03','网上转帐','t','t','222223','444444','一直在fgsgfd3','13355555555','3');");
E_D("replace into `qb_form_content_7` values('13','1','1/2/商城系统','4','','olpay','','','222223','444444','一直在fgsgfd3','13344444444','3');");
E_D("replace into `qb_form_content_7` values('22','1','1','78','','olpay','','','222223','444444','一直在fgsgfd3','13377777777','3');");
E_D("replace into `qb_form_content_7` values('23','1','1','78','','网上转帐','','','222223','444444','一直在fgsgfd3','13377777777','3');");

require("../../inc/footer.php");
?>