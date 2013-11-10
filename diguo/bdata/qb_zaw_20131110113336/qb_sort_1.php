<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_sort`;");
E_C("CREATE TABLE `qb_sort` (
  `fid` mediumint(7) unsigned NOT NULL AUTO_INCREMENT,
  `fup` mediumint(7) unsigned NOT NULL DEFAULT '0',
  `fmid` mediumint(5) NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL DEFAULT '',
  `class` smallint(4) NOT NULL DEFAULT '0',
  `sons` smallint(4) NOT NULL DEFAULT '0',
  `type` tinyint(1) NOT NULL DEFAULT '0',
  `admin` varchar(100) NOT NULL DEFAULT '',
  `list` int(10) NOT NULL DEFAULT '0',
  `listorder` tinyint(2) NOT NULL DEFAULT '0',
  `passwd` varchar(32) NOT NULL DEFAULT '',
  `logo` varchar(150) NOT NULL DEFAULT '',
  `descrip` text NOT NULL,
  `style` varchar(50) NOT NULL DEFAULT '',
  `template` text NOT NULL,
  `jumpurl` varchar(150) NOT NULL DEFAULT '',
  `maxperpage` tinyint(3) NOT NULL DEFAULT '0',
  `metakeywords` varchar(255) NOT NULL DEFAULT '',
  `metadescription` varchar(255) NOT NULL DEFAULT '',
  `allowcomment` tinyint(1) NOT NULL DEFAULT '0',
  `allowpost` varchar(150) NOT NULL DEFAULT '',
  `allowviewtitle` varchar(150) NOT NULL DEFAULT '',
  `allowviewcontent` varchar(150) NOT NULL DEFAULT '',
  `allowdownload` varchar(150) NOT NULL DEFAULT '',
  `forbidshow` tinyint(1) NOT NULL DEFAULT '0',
  `config` text NOT NULL,
  `list_html` varchar(255) NOT NULL DEFAULT '',
  `bencandy_html` varchar(255) NOT NULL DEFAULT '',
  `domain` varchar(150) NOT NULL DEFAULT '',
  `domain_dir` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`fid`),
  KEY `fup` (`fup`),
  KEY `fmid` (`fmid`)
) ENGINE=MyISAM AUTO_INCREMENT=77 DEFAULT CHARSET=gbk");
E_D("replace into `qb_sort` values('1','0','0','���ź�ý��','1','0','0','','0','0','','','','zawnews','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:25:\"template/zawnews/list.htm\";s:8:\"bencandy\";s:0:\"\";}','','0','','','0','11','','','','0','a:11:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:10:\"list_tpl/4\";s:14:\"label_bencandy\";s:0:\"\";s:10:\"channelDir\";s:4:\"nnew\";s:13:\"channelDomain\";s:0:\"\";s:10:\"label_list\";s:1:\"1\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('29','0','0','��Ʒ����','1','14','1','','0','0','','','','zawcp','a:3:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";}','','0','','','0','','','','','0','a:8:{s:10:\"label_list\";s:2:\"29\";s:11:\"sonTitleRow\";s:0:\"\";s:12:\"sonTitleLeng\";s:0:\"\";s:9:\"cachetime\";N;s:12:\"sonListorder\";s:1:\"0\";s:14:\"listContentNum\";N;s:12:\"ListShowType\";N;s:15:\"ListShowBigType\";s:0:\"\";}','','','','');");
E_D("replace into `qb_sort` values('10','9','100','��Ů����','2','0','0','','0','0','','','22','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','11','','1','8','','','','0','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:1:\"0\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('12','11','101','��վ���','2','0','0','','0','0','','','','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','','','','','0','a:6:{s:11:\"sonTitleRow\";s:0:\"\";s:12:\"sonTitleLeng\";s:0:\"\";s:9:\"cachetime\";s:0:\"\";s:12:\"sonListorder\";s:1:\"0\";s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:1:\"0\";}','','','','');");
E_D("replace into `qb_sort` values('14','13','102','������Ƶ','2','0','0','','0','0','','','','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','','','','','0','a:8:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:1:\"0\";s:14:\"label_bencandy\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('16','15','103','�����Ʒ','2','0','0','','0','0','','','','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','','','','','0','a:6:{s:11:\"sonTitleRow\";s:0:\"\";s:12:\"sonTitleLeng\";s:0:\"\";s:9:\"cachetime\";s:0:\"\";s:12:\"sonListorder\";s:1:\"0\";s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:1:\"0\";}','','','','');");
E_D("replace into `qb_sort` values('18','17','104','MTV��','2','0','0','','0','0','','','','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','3','','','','0','a:8:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:1:\"0\";s:15:\"ListShowBigType\";N;s:10:\"label_list\";s:0:\"\";}','','','','');");
E_D("replace into `qb_sort` values('26','11','101','װ�����','2','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('27','11','101','�칫���','2','0','0','','0','0','','','','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','','','','','0','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:1:\"0\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('41','0','0','��ҵ�������','1','0','0','','0','0','','','','zawhangye','a:4:{s:4:\"head\";s:21:\"template/zaw/head.htm\";s:4:\"foot\";s:21:\"template/zaw/foot.htm\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:25:\"template/zaw/bencandy.htm\";}','','0','','','1',',11','','','','0','a:9:{s:10:\"label_list\";s:2:\"41\";s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:10:\"list_tpl/7\";s:15:\"ListShowBigType\";N;s:14:\"label_bencandy\";s:0:\"\";}','','','','');");
E_D("replace into `qb_sort` values('42','0','0','��������','1','0','0','','0','0','','','','zawzlkz','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','bencandy.php?fid=42&aid=695','0','','','1',',11','','','','0','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('43','0','0','��������','1','0','0','','0','0','','','','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:21:\"template/zaw/list.htm\";s:8:\"bencandy\";s:25:\"template/zaw/bencandy.htm\";}','','0','','','1','11','','','','0','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('44','0','0','���ά���뼼��֧��','1','0','0','','0','0','','','','zawwx','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','http://www.zwa.cc/bencandy.php?fid=44&aid=703','0','','','1','11','','','','0','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('45','0','0','��ϵ����','1','0','0','','0','0','','','','zaw','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1',',11','','','','0','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('46','29','0','������Ĺ������','2','2','1','','0','0','','sortlogo/1_20131102001158_0zuzb.jpg','��Ϊһ��֪��ģ�غ���Ա�����ְ�͹���µ���������Ƿǳ��б�Ҫ�ģ���ҲΪ������̨���Ը���Ů���������̵棬����������λ�ӵڶ����ἰ�ԸУ��Ժ��г��ֵı�Ȼ������͹��Ů�����ʵ��ز����Ըе�Ԫ����ҪȷҲ��ΰ��Ư����˫�壬��������ӵ������һ�㣡','','a:3:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";}','','0','','','0','','','','','0','a:9:{s:14:\"label_bencandy\";s:2:\"29\";s:11:\"sonTitleRow\";s:0:\"\";s:12:\"sonTitleLeng\";s:0:\"\";s:9:\"cachetime\";N;s:12:\"sonListorder\";s:1:\"0\";s:14:\"listContentNum\";N;s:12:\"ListShowType\";N;s:15:\"ListShowBigType\";s:0:\"\";s:10:\"label_list\";s:2:\"46\";}','','','','');");
E_D("replace into `qb_sort` values('47','29','0','��������������','2','1','1','','0','0','','','','zawcp','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','11','','','','0','a:8:{s:10:\"label_list\";s:0:\"\";s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('48','29','0','CRABԲ���������','2','1','1','','0','0','','','','zawcp','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','11','','','','0','a:8:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;s:10:\"label_list\";s:2:\"48\";}','','','','');");
E_D("replace into `qb_sort` values('49','29','0','�ʷ�ʽ����������','2','1','1','','0','0','','','','zawcp','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','11','','','','0','a:8:{s:10:\"label_list\";s:2:\"49\";s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('50','29','0','�ʷ�ʽԲ���������','2','1','1','','0','0','','','','zawcp','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','11','','','','0','a:8:{s:10:\"label_list\";s:2:\"50\";s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('52','29','0','Բ���������','2','1','1','','0','0','','','','zawcp','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','11','','','','0','a:9:{s:10:\"label_list\";s:2:\"52\";s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;s:14:\"label_bencandy\";s:0:\"\";}','','','','');");
E_D("replace into `qb_sort` values('53','29','0','Բ׶�������','2','1','1','','0','0','','','','zawcp','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','11','','','','0','a:8:{s:10:\"label_list\";s:2:\"53\";s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('54','29','0','Բ�������������','2','1','1','','0','0','','','','zawcp','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','11','','','','0','a:8:{s:10:\"label_list\";s:2:\"54\";s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('55','29','0','Բ׶�����������','2','1','1','','0','0','','','','zawcp','','','0','','','1',',11','','','','0','a:1:{s:10:\"label_list\";s:2:\"55\";}','','','','');");
E_D("replace into `qb_sort` values('56','29','0','������','2','1','1','','0','0','','','','zawcp','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1',',11','','','','0','a:8:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;s:10:\"label_list\";s:2:\"56\";}','','','','');");
E_D("replace into `qb_sort` values('57','29','0','�ǽӴ������','2','1','1','','0','0','','','','zawcp','','','0','','','1',',11','','','','0','a:1:{s:10:\"label_list\";s:2:\"57\";}','','','','');");
E_D("replace into `qb_sort` values('58','29','0','���������','2','1','1','','0','0','','','','zawcp','','','0','','','1',',11','','','','0','a:1:{s:10:\"label_list\";s:2:\"58\";}','','','','');");
E_D("replace into `qb_sort` values('59','29','0','�Ե��������','2','1','1','','0','0','','','','zawcp','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1',',11','','','','0','a:8:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;s:10:\"label_list\";s:2:\"59\";}','','','','');");
E_D("replace into `qb_sort` values('60','29','0','�ǽӴ����������','2','1','1','','0','0','','','','zawcp','','','0','','','1',',11','','','','0','a:1:{s:10:\"label_list\";s:2:\"60\";}','','','','');");
E_D("replace into `qb_sort` values('40','11','101','ɱ�����','2','0','0','','0','0','','','','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','0','','','','','1','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('61','0','0','����ѯ��','1','0','0','','0','0','','','','zawxj','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','0','3,11','','','','1','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('62','46','106','���Ĺ������(һ)','3','0','0','','0','0','','sortlogo/1_20131102001114_btkel.jpg','����¥��˵�ģ����ﶬ�ܲ���ʱ��ѹ��������õ�ѡ��һ�����ܼӿ캹Һ���ų�������������¶���һ����Ҳ�ζԼ����кܺõİ����ԣ���ֹ��������ˣ�����ѹ���£�NikeProӦ�����Լ۱ȱȽϸߵģ�����������ܲ���Ҳ�Ƽ��Ͽ�ٯ�ģ��۸���˵㣬�Լ۱�Ҳ�Ƚϸߡ�','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','','','','','0','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('63','46','106','���Ĺ������(��)','3','0','0','','0','0','','sortlogo/1_20131102001158_thlfc.jpg','��һ�һ�������еĺܻ��������������ĺ����볢�ԣ���ôǧ�����ӣ��ζ�ģ�һֱ�����Ϊ������һ��ӣ�ҿ�ζ��ʳ�ﶼ�쳣�ѳԣ�һ�ɸ�ð�ǽ���ζ���������������ӣ��ȴ���ޱ���ζ���Լ�licorice��ζ�����Ǹ����ʲݺϼ�+��Ƥ�˽ǵ�ζ������','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','','','','','0','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('64','47','107','����������У�һ��','3','0','0','','0','0','','sortlogo/1_20131103161104_tbsnl.jpg','','','a:4:{s:4:\"head\";s:0:\"\";s:4:\"foot\";s:0:\"\";s:4:\"list\";s:0:\"\";s:8:\"bencandy\";s:0:\"\";}','','0','','','1','','','','','0','a:7:{s:11:\"sonTitleRow\";N;s:12:\"sonTitleLeng\";N;s:9:\"cachetime\";N;s:12:\"sonListorder\";N;s:14:\"listContentNum\";s:0:\"\";s:12:\"ListShowType\";s:0:\"\";s:15:\"ListShowBigType\";N;}','','','','');");
E_D("replace into `qb_sort` values('65','48','108','CRABԲ���������(һ)','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('66','49','109','�ʷ�ʽ����������(һ)','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('67','50','110','�ʷ�ʽԲ���������(һ)','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('68','52','111','Բ���������(һ)','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('69','53','112','Բ׶�������(һ)','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('70','54','113','Բ�������������(һ)','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('71','55','114','Բ׶����������У�һ��','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('72','56','115','�����У�һ��','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('73','57','116','�ǽӴ�����У�һ��','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('74','58','117','��������У�һ��','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('75','59','118','�Ե�������У�һ��','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");
E_D("replace into `qb_sort` values('76','60','119','�ǽӴ���������У�һ��','3','0','0','','0','0','','','','','','','0','','','1','','','','','0','','','','','');");

require("../../inc/footer.php");
?>