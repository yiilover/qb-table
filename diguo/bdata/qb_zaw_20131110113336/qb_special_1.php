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
E_D("replace into `qb_special` values('10','1','��ҳ�õ�Ƭ','','','','a:3:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','','7,142,184,248,250,249','3,8,9,10,11,6,12,14,13,5,7,4','','0','1','admin','1237382603','1237382603','25','1290130070','0','0','','','3,4','1','','1');");
E_D("replace into `qb_special` values('11','1','��ҳͷ��','','���� ʱ��','','a:3:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','','7,142,184,248,250,249','3,8,9,10,11,6,12,14,13,5,7,4','','0','1','admin','1237382706','1237382706','103','1290130075','0','1238675329','','','3,4','1','','1');");
E_D("replace into `qb_special` values('19','1','ϣ��˹������ź���¶��','','','','a:3:{s:4:\"head\";s:25:\"template/default/none.htm\";s:4:\"foot\";s:25:\"template/default/none.htm\";s:8:\"bencandy\";s:34:\"template/special/special_sport.htm\";}','special/1_20101119091108_agkc8.jpg','˹ŵ������ϣ��˹���Ӷ�һ�����չ��������յ����н����ϣ��˹û�б�����Ϊ�����򡱣�����ֻ������6���²�����11�·��ط���̳������ϣ��˹��Υ��̽�ֶ�����Ϊ�Լ�δ�ܼ�ʱ�ϱ��Ĺ�ʧ������75000Ӣ��������ԭ����������-��������Զ��ֹ�μ�˹ŵ������\r\n','561,562,563,564','','','0','1','admin','1240114393','1240124310','264','1290479332','1','1240116319','','','','0','','1');");
E_D("replace into `qb_special` values('20','1','Ӣ�����࿨÷��2010��û�','','','','a:3:{s:4:\"head\";s:25:\"template/default/none.htm\";s:4:\"foot\";s:25:\"template/default/none.htm\";s:8:\"bencandy\";s:24:\"template/special/sp1.htm\";}','special/1_20101122161134_u6aeu.jpg','�����������磬Ӣ�������ά����÷��һ�з��ʱ��󣬲��ڱ�����ѧ�칫¥���÷����ݽ�����ǿ�����й�����������������ҵķ�չ������в������һ�ֻ�����Ӣ������Ҫ�ڸ��������ǿ�����������\r\n\r\n������ά����÷��43�굱ѡӢ����53�����࣬��Ӣ����1812����������������ࡣ������ѧ�Ǵ�ά����÷�����κ��״ηû�48Сʱ�г��е���Ҫһվ��\r\n','595,596,597,598,599,600,601','23,25,26,27,28,29,30,31','','0','1','admin','1240116689','1240116689','304','1291704336','1','1240117139','','','','0','','1');");
E_D("replace into `qb_special` values('21','1','�۽��������ʸĸ�ٽ���ƽó�׷���','','','','a:3:{s:4:\"head\";s:25:\"template/default/none.htm\";s:4:\"foot\";s:25:\"template/default/none.htm\";s:8:\"bencandy\";s:36:\"template/special/special_finance.htm\";}','special/1_20101122151126_wvvvp.jpg','����������Ժ29����348��79��ͶƱ���ͨ�������ʸĸ�ٽ���ƽó�׷�������ּ�ڶ���ν�͹����һ��ʵĹ��������ر��˰����һ��������Ϊ�ǽ�������ó�ױ����������µ����֡�','587,590,591,593,594,595,596,598','23,24,25,26,28,29,27,30,31','','0','1','admin','1240120502','1240120502','284','1290479317','1','1240121484','','','','0','','1');");
E_D("replace into `qb_special` values('22','1','�µ�A3���������� �Ŀ�ͬ�����ڳ��͵���','','','','a:3:{s:4:\"head\";s:25:\"template/default/none.htm\";s:4:\"foot\";s:25:\"template/default/none.htm\";s:8:\"bencandy\";s:32:\"template/special/special_car.htm\";}','special/1_20101119161104_fdxqf.jpg','   ������µ�A3 Sportback�Ѿ���ʽ���У���ͬ�������г����У�ͬΪ���ڳ��͵ı���1ϵ�����Լ����ڵ��п���Ŀ�Ͳ���ʵ�ڼ۸��ϻ��ǳ��������϶��ǰµ�A3�ľ�������\r\n','597,595','31,30,29,28,20,21,22,23,27,26,25,24','','0','1','admin','1240121828','1240121828','334','1290479324','1','1240122051','','','','0','','1');");
E_D("replace into `qb_special` values('24','1','�ɳ��кͳɹ����й�CEO','','','','a:3:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:8:\"bencandy\";s:28:\"template/default/showsp2.htm\";}','special/1_20090419140403_B36H1.jpg','̫��Ĺ��º������ֵ��������Щ��û����ɹ���ʿ���ο���\r\n���ǻ����Ѿ��ɹ���������Щ���ڳɳ��У������������������죬���Ƕ��Ѿ���������Ӣ�ۡ�','583,584,585,586,594,595,597,598,600,601','17,19,28,29,31,30,20,21,22,23,24,27,26,25','','0','1','admin','1240124312','1240124312','332','1291791067','1','1240125051','','special/1_20090419150403_aMUbN.jpg','','0','','1');");
E_D("replace into `qb_special` values('23','1','�й��������۵�ο�','','','','a:3:{s:4:\"head\";s:25:\"template/default/none.htm\";s:4:\"foot\";s:25:\"template/default/none.htm\";s:8:\"bencandy\";s:28:\"template/special/showsp2.htm\";}','special/1_20090419140451_9nuT0.jpg','�����Ǵ�ҵ�ȳ�ӿ������죬���ǽ���Σ����Ȼ�����Ľ��죬\r\n���õļ�����Ӧ��ʼ���ǲ�ҵ��չ������֮�ء�ֻ���ڶ��������õ��Ļش�Ҳ�ڲ�ͣ�任��\r\n��������Ϊ��һ�������ţ����ǻ���θı����ǵ����CEO�ǿ����Ĳ�ҵδ�������������е���ʲô��һ����\r\n2009��2������Ѷ�Ƽ��ƻ��߷ð�λ��������IT������CEO��CTO�������ǵĴ�һһΪ���ѳ���','597,598','17,19,18,23,20,21,22,27,28,26,25,24','','0','1','admin','1240122281','1240122281','32','1290479390','1','1240122359','','special/1_20090419150453_IGx32.jpg','','0','','1');");

require("../../inc/footer.php");
?>