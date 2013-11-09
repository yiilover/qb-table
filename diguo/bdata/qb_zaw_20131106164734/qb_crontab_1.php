<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_crontab`;");
E_C("CREATE TABLE `qb_crontab` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '',
  `minutetime` mediumint(4) NOT NULL DEFAULT '0',
  `daytime` varchar(4) NOT NULL DEFAULT '0',
  `whiletime` int(10) NOT NULL DEFAULT '0',
  `lasttime` int(10) NOT NULL DEFAULT '0',
  `filepath` varchar(50) NOT NULL DEFAULT '',
  `about` text NOT NULL,
  `ifstop` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `ifstop` (`ifstop`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=gbk");
E_D("replace into `qb_crontab` values('1','��ҳ��̬','3','','0','1292402491','inc/crontab/make_index_html.php','','1');");
E_D("replace into `qb_crontab` values('2','�������ݿ�','0','0300','0','1383723013','inc/crontab/mysqlbak.php','','0');");
E_D("replace into `qb_crontab` values('3','���CK�༭�����������ͼ','0','0330','0','1292489510','inc/crontab/delete_ckeditor_tmp.php','','1');");
E_D("replace into `qb_crontab` values('4','��ո�����','0','','1296504125','0','inc/crontab/delete_table_upfile.php','','1');");
E_D("replace into `qb_crontab` values('6','��ʱ��������','15','','0','0','inc/crontab/crontab_article.php','�����ʱ����������,��ʱ�Զ�����','1');");
E_D("replace into `qb_crontab` values('7','�����б�ҳ��̬','0','0300','0','1292492030','inc/crontab/list_html_crontab.php','','1');");
E_D("replace into `qb_crontab` values('8','��������ҳ��̬','0','0330','0','1292492050','inc/crontab/bencandy_html_crontab.php','','1');");

require("../../inc/footer.php");
?>