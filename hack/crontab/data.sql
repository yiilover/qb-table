INSERT INTO `qb_hack` (`keywords`, `name`, `isclose`, `author`, `config`, `htmlcode`, `hackfile`, `hacksqltable`, `adminurl`, `about`, `class1`, `class2`, `list`, `linkname`, `isbiz`) VALUES ('crontab', '��ʱ����', 0, '', '', '', '', '', 'index.php?lfj=crontab&job=list', '', 'other', '�����ȫ', 0, '', 0);
   
DROP TABLE IF EXISTS `qb_crontab`;
CREATE TABLE `qb_crontab` (
  `id` mediumint(7) NOT NULL auto_increment,
  `title` varchar(100) NOT NULL default '',
  `minutetime` mediumint(4) NOT NULL default '0',
  `daytime` varchar(4) NOT NULL default '0',
  `whiletime` int(10) NOT NULL default '0',
  `lasttime` int(10) NOT NULL default '0',
  `filepath` varchar(50) NOT NULL default '',
  `about` text NOT NULL,
  `ifstop` tinyint(1) NOT NULL default '0',
  PRIMARY KEY  (`id`),
  KEY `ifstop` (`ifstop`)
) TYPE=MyISAM AUTO_INCREMENT=9 ;

#
# �������е����� `qb_crontab`
#

INSERT INTO `qb_crontab` VALUES (1, '��ҳ��̬', 3, '', 0, 1292402491, 'inc/crontab/make_index_html.php', '', 1);
INSERT INTO `qb_crontab` VALUES (2, '�������ݿ�', 0, '0300', 0, 1292489459, 'inc/crontab/mysqlbak.php', '', 1);
INSERT INTO `qb_crontab` VALUES (3, '���CK�༭�����������ͼ', 0, '0330', 0, 1292489510, 'inc/crontab/delete_ckeditor_tmp.php', '', 1);
INSERT INTO `qb_crontab` VALUES (4, '��ո�����', 0, '', 1296504125, 0, 'inc/crontab/delete_table_upfile.php', '', 1);
INSERT INTO `qb_crontab` VALUES (6, '��ʱ��������', 15, '', 0, 0, 'inc/crontab/crontab_article.php', '�����ʱ����������,��ʱ�Զ�����', 1);
INSERT INTO `qb_crontab` VALUES (7, '�����б�ҳ��̬', 0, '0300', 0, 1292492030, 'inc/crontab/list_html_crontab.php', '', 1);
INSERT INTO `qb_crontab` VALUES (8, '��������ҳ��̬', 0, '0330', 0, 1292492050, 'inc/crontab/bencandy_html_crontab.php', '', 1);
    