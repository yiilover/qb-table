<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_special`;");
E_C("CREATE TABLE `qb_special` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `title` varchar(150) NOT NULL DEFAULT '',
  `titlecolor` varchar(15) NOT NULL DEFAULT '',
  `keywords` varchar(100) NOT NULL DEFAULT '',
  `style` varchar(25) NOT NULL DEFAULT '',
  `template` varchar(255) NOT NULL DEFAULT '',
  `picurl` varchar(150) NOT NULL DEFAULT '',
  `content` mediumtext NOT NULL,
  `aids` text NOT NULL,
  `tids` text NOT NULL,
  `jumpurl` varchar(150) NOT NULL DEFAULT '',
  `target` tinyint(1) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `username` varchar(50) NOT NULL DEFAULT '',
  `posttime` int(10) NOT NULL DEFAULT '0',
  `list` int(10) NOT NULL DEFAULT '0',
  `hits` mediumint(7) NOT NULL DEFAULT '0',
  `lastview` int(10) NOT NULL DEFAULT '0',
  `levels` tinyint(1) NOT NULL DEFAULT '0',
  `levelstime` int(10) NOT NULL DEFAULT '0',
  `htmlfile` varchar(50) NOT NULL DEFAULT '',
  `banner` varchar(150) NOT NULL DEFAULT '',
  `allowpost` varchar(255) NOT NULL DEFAULT '',
  `ifbase` tinyint(1) NOT NULL DEFAULT '0',
  `htmlname` varchar(80) NOT NULL DEFAULT '',
  `yz` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `ifbase` (`ifbase`),
  KEY `yz` (`yz`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=gbk");
E_D("replace into `qb_special` values('10','1','主页幻灯片','','','','a:3:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','','7,142,184,248,250,249','3,8,9,10,11,6,12,14,13,5,7,4','','0','1','admin','1237382603','1237382603','25','1290130070','0','0','','','3,4','1','','1');");
E_D("replace into `qb_special` values('11','1','主页头条','','新闻 时事','','a:3:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','','7,142,184,248,250,249','3,8,9,10,11,6,12,14,13,5,7,4','','0','1','admin','1237382706','1237382706','103','1290130075','0','1238675329','','','3,4','1','','1');");
E_D("replace into `qb_special` values('19','1','希金斯赌球丑闻后首露面','','','','a:3:{s:4:\"head\";s:25:\"template/default/none.htm\";s:4:\"foot\";s:25:\"template/default/none.htm\";s:8:\"bencandy\";s:34:\"template/special/special_sport.htm\";}','special/1_20101119091108_agkc8.jpg','斯诺克名将希金斯涉嫌赌一案今日公布了最终的审判结果，希金斯没有被定罪为“赌球”，最终只被禁赛6个月并将于11月份重返球坛，不过希金斯因违规探讨赌球行为以及未能及时上报的过失被罚款75000英镑，他的原经纪人帕特-穆尼则被永远禁止参加斯诺克事务。\r\n','561,562,563,564','','','0','1','admin','1240114393','1240124310','264','1290479332','1','1240116319','','','','0','','1');");
E_D("replace into `qb_special` values('20','1','英国首相卡梅伦2010年访华','','','','a:3:{s:4:\"head\";s:25:\"template/default/none.htm\";s:4:\"foot\";s:25:\"template/default/none.htm\";s:8:\"bencandy\";s:24:\"template/special/sp1.htm\";}','special/1_20101122161134_u6aeu.jpg','　　昨天下午，英国首相戴维·卡梅伦一行访问北大，并在北京大学办公楼礼堂发表演讲。他强调，中国的崛起对于其他国家的发展不是威胁，而是一种机遇，英中两国要在各个领域加强交流与合作。\r\n\r\n　　戴维·卡梅伦43岁当选英国第53任首相，是英国自1812年以来最年轻的首相。北京大学是戴维·卡梅伦上任后首次访华48小时行程中的重要一站。\r\n','595,596,597,598,599,600,601','23,25,26,27,28,29,30,31','','0','1','admin','1240116689','1240116689','304','1291704336','1','1240117139','','','','0','','1');");
E_D("replace into `qb_special` values('21','1','聚焦美国汇率改革促进公平贸易法案','','','','a:3:{s:4:\"head\";s:25:\"template/default/none.htm\";s:4:\"foot\";s:25:\"template/default/none.htm\";s:8:\"bencandy\";s:36:\"template/special/special_finance.htm\";}','special/1_20101122151126_wvvvp.jpg','美国会众议院29日以348比79的投票结果通过《汇率改革促进公平贸易法案》，旨在对所谓低估本币汇率的国家征收特别关税。这一做法被认为是近期美国贸易保护主义升温的体现。','587,590,591,593,594,595,596,598','23,24,25,26,28,29,27,30,31','','0','1','admin','1240120502','1240120502','284','1290479317','1','1240121484','','','','0','','1');");
E_D("replace into `qb_special` values('22','1','奥迪A3限量版上市 四款同级进口车型导购','','','','a:3:{s:4:\"head\";s:25:\"template/default/none.htm\";s:4:\"foot\";s:25:\"template/default/none.htm\";s:8:\"bencandy\";s:32:\"template/special/special_car.htm\";}','special/1_20101119161104_fdxqf.jpg','   限量版奥迪A3 Sportback已经正式上市，在同级车的市场当中，同为进口车型的宝马1系车型以及大众的尚酷等四款车型不论实在价格上还是车辆级别上都是奥迪A3的竞争对手\r\n','597,595','31,30,29,28,20,21,22,23,27,26,25,24','','0','1','admin','1240121828','1240121828','334','1290479324','1','1240122051','','','','0','','1');");
E_D("replace into `qb_special` values('24','1','成长中和成功的中国CEO','','','','a:3:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:8:\"bencandy\";s:28:\"template/default/showsp2.htm\";}','special/1_20090419140403_B36H1.jpg','太多的故事和意见都值得我们这些还没步入成功人士来参考。\r\n他们或许已经成功，或者有些还在成长中，不论怎样，做到今天，他们都已经是真正的英雄。','583,584,585,586,594,595,597,598,600,601','17,19,28,29,31,30,20,21,22,23,24,27,26,25','','0','1','admin','1240124312','1240124312','332','1291791067','1','1240125051','','special/1_20090419150403_aMUbN.jpg','','0','','1');");
E_D("replace into `qb_special` values('23','1','中国互联网观点参考','','','','a:3:{s:4:\"head\";s:25:\"template/default/none.htm\";s:4:\"foot\";s:25:\"template/default/none.htm\";s:8:\"bencandy\";s:28:\"template/special/showsp2.htm\";}','special/1_20090419140451_9nuT0.jpg','不管是创业热潮涌起的昨天，还是金融危机依然继续的今天，\r\n更好的技术与应用始终是产业发展的重中之重。只是在多变的年代里，得到的回答也在不停变换。\r\n哪项技术会成为下一个大热门，它们会如何改变我们的生活？CEO们看到的产业未来，和我们眼中的有什么不一样？\r\n2009年2月起，腾讯科技计划走访百位互联网、IT界著名CEO和CTO，将他们的答案一一为网友呈现','597,598','17,19,18,23,20,21,22,27,28,26,25,24','','0','1','admin','1240122281','1240122281','32','1290479390','1','1240122359','','special/1_20090419150453_IGx32.jpg','','0','','1');");

require("../../inc/footer.php");
?>