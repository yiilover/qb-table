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
E_D("replace into `qb_crontab` values('1','主页静态','3','','0','1292402491','inc/crontab/make_index_html.php','','1');");
E_D("replace into `qb_crontab` values('2','备份数据库','0','0300','0','1383723013','inc/crontab/mysqlbak.php','','0');");
E_D("replace into `qb_crontab` values('3','清除CK编辑器多余的缩略图','0','0330','0','1292489510','inc/crontab/delete_ckeditor_tmp.php','','1');");
E_D("replace into `qb_crontab` values('4','清空附件表','0','','1296504125','0','inc/crontab/delete_table_upfile.php','','1');");
E_D("replace into `qb_crontab` values('6','定时发布文章','15','','0','0','inc/crontab/crontab_article.php','解禁定时发布的文章,到时自动发布','1');");
E_D("replace into `qb_crontab` values('7','文章列表页静态','0','0300','0','1292492030','inc/crontab/list_html_crontab.php','','1');");
E_D("replace into `qb_crontab` values('8','文章内容页静态','0','0330','0','1292492050','inc/crontab/bencandy_html_crontab.php','','1');");

require("../../inc/footer.php");
?>