<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_admin_menu`;");
E_C("CREATE TABLE `qb_admin_menu` (
  `id` mediumint(5) NOT NULL AUTO_INCREMENT,
  `fid` mediumint(5) NOT NULL DEFAULT '0',
  `name` text NOT NULL,
  `linkurl` varchar(150) NOT NULL DEFAULT '',
  `color` varchar(15) NOT NULL DEFAULT '',
  `target` tinyint(1) NOT NULL DEFAULT '0',
  `list` smallint(4) NOT NULL DEFAULT '0',
  `groupid` mediumint(5) NOT NULL DEFAULT '0',
  `iftier` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=103 DEFAULT CHARSET=gbk");
E_D("replace into `qb_admin_menu` values('12','0','���ݹ���','','','0','8','3','0');");
E_D("replace into `qb_admin_menu` values('81','12','������','index.php?lfj=module_admin&dirname=form&file=form_content&job=list','','0','11','3','0');");
E_D("replace into `qb_admin_menu` values('82','12','���Ա�����','index.php?lfj=module_admin&dirname=guestbook&file=content&job=list','','0','10','3','1');");
E_D("replace into `qb_admin_menu` values('83','0','��ǩ/���ģ��/��̬ҳ','','','0','9','3','0');");
E_D("replace into `qb_admin_menu` values('84','83','</a>\r\n<font color=\"#FF0000\">��ҳ</font><img src=../images/default/article_elite.gif> <a href=\"../index.php?&ch=1&chtype=0&jobs=show\" target=\"main\">��ǩ</a> <A HREF=''../index.php?&ch=1&MakeIndex=1'' target=''_blank'' onclick=\"return confirm(''��ȷʵҪ����ҳ���ɾ�̬��?���ɾ�̬��,���и��������������,��Ҫ���µ������һ�ξ�̬.�ſ��Կ���Ч��.'');\">��̬</a> <a href=\"index.php?lfj=channel&job=list_fid&onlyshow=style\" target=\"main\">���</a><a> ','#','','0','4','3','0');");
E_D("replace into `qb_admin_menu` values('85','83','</a>\r\n<a href=''index.php?lfj=channel&job=list_fid&onlyshow=label'' target=''main''><font color=\"#FF0000\"><u>��Ŀ</u></font></a><img src=../images/default/article_elite.gif> <a href=\"../do/job.php?job=jump&pagetype=list_label\" target=\"main\">��ǩ</a> <A HREF=''index.php?lfj=html&job=list'' target=\"main\">��̬</a> <a href=\"index.php?lfj=channel&job=list_fid&onlyshow=style\" target=\"main\">���</a><a> ','#','','0','3','3','0');");
E_D("replace into `qb_admin_menu` values('86','83','</a>\r\n<font color=\"#FF0000\">ר��</font><img src=../images/default/article_elite.gif> <a href=\"index.php?lfj=special&job=list&onlyshow=label\" target=\"main\">��ǩ</a> <A HREF=''index.php?lfj=html&job=listsp'' target=\"main\">��̬</a> <a href=\"index.php?lfj=special&job=list&onlyshow=style\" target=\"main\">���</a><a> ','#','','0','1','3','0');");
E_D("replace into `qb_admin_menu` values('87','0','��Ա��ع���','','','0','7','3','0');");
E_D("replace into `qb_admin_menu` values('88','87','��Ա���Ϲ���','index.php?lfj=member&job=list','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('89','87','�������Ȩ��','index.php?lfj=article_group&job=list','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('90','87','����Ȩ��','index.php?lfj=group&job=list','','0','0','3','1');");
E_D("replace into `qb_admin_menu` values('91','87','����Ա��̨Ȩ������','index.php?lfj=group&job=list_admin','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('73','12','ר�����','index.php?lfj=special&job=list','','0','13','3','0');");
E_D("replace into `qb_admin_menu` values('74','12','���۹���','index.php?lfj=comment&job=list','','0','12','3','1');");
E_D("replace into `qb_admin_menu` values('75','12','</a>\r\n<font color=\"#FF0000\">����</font><img src=../images/default/article_elite.gif> <a href=\"index.php?lfj=post&job=postnew&only=1&mid=0\" target=\"main\">����</a> <a href=\"index.php?lfj=artic&job=listartic&mid=0&only=1\" target=\"main\">����</a> <a href=\"index.php?lfj=sort&job=listsort&mid=0&only=1\" target=\"main\">��Ŀ</a><a> ','#','','0','20','3','0');");
E_D("replace into `qb_admin_menu` values('76','12','</a>\r\n<font color=\"#FF0000\">ͼƬ</font><img src=../images/default/article_elite.gif> <a href=\"index.php?lfj=post&job=postnew&only=1&mid=100\" target=\"main\">����</a> <a href=\"index.php?lfj=artic&job=listartic&mid=100&only=1\" target=\"main\">����</a> <a href=\"index.php?lfj=sort&job=listsort&mid=100&only=1\" target=\"main\">��Ŀ</a><a> ','#','','0','19','3','0');");
E_D("replace into `qb_admin_menu` values('77','12','</a>\r\n<font color=\"#FF0000\">���</font><img src=../images/default/article_elite.gif> <a href=\"index.php?lfj=post&job=postnew&only=1&mid=101\" target=\"main\">����</a> <a href=\"index.php?lfj=artic&job=listartic&mid=101&only=1\" target=\"main\">����</a> <a href=\"index.php?lfj=sort&job=listsort&mid=101&only=1\" target=\"main\">��Ŀ</a><a> ','#','','0','18','3','0');");
E_D("replace into `qb_admin_menu` values('78','12','</a>\r\n<font color=\"#FF0000\">��Ƶ</font><img src=../images/default/article_elite.gif> <a href=\"index.php?lfj=post&job=postnew&only=1&mid=102\" target=\"main\">����</a> <a href=\"index.php?lfj=artic&job=listartic&mid=102&only=1\" target=\"main\">����</a> <a href=\"index.php?lfj=sort&job=listsort&mid=102&only=1\" target=\"main\">��Ŀ</a><a> ','#','','0','17','3','0');");
E_D("replace into `qb_admin_menu` values('79','12','</a>\r\n<font color=\"#FF0000\">��Ʒ</font><img src=../images/default/article_elite.gif> <a href=\"index.php?lfj=post&job=postnew&only=1&mid=103\" target=\"main\">����</a> <a href=\"index.php?lfj=artic&job=listartic&mid=103&only=1\" target=\"main\">����</a> <a href=\"index.php?lfj=sort&job=listsort&mid=103&only=1\" target=\"main\">��Ŀ</a><a> ','#','','0','16','3','0');");
E_D("replace into `qb_admin_menu` values('80','12','</a>\r\n<font color=\"#FF0000\">��Ʒ</font><img src=../images/default/article_elite.gif> <a href=\"index.php?lfj=post&job=postnew&only=1&mid=105\" target=\"main\">����</a> <a href=\"index.php?lfj=artic&job=listartic&mid=105&only=1\" target=\"main\">����</a> <a href=\"index.php?lfj=sort&job=listsort&mid=105&only=1\" target=\"main\">��Ŀ</a><a> ','#','','0','15','3','0');");
E_D("replace into `qb_admin_menu` values('92','0','ϵͳ��������','','','0','6','3','0');");
E_D("replace into `qb_admin_menu` values('93','92','����ȫ�ֲ�������','index.php?lfj=center&job=config','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('94','92','��վ�����˵�����','index.php?lfj=guidemenu&job=list','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('95','92','��վ����ģ�͹���','index.php?lfj=article_module&job=list','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('96','92','�������ӹ���','index.php?lfj=friendlink&job=list','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('97','92','����ҳ�����','index.php?lfj=alonepage&job=list','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('98','92','������վ���ݿ�','index.php?lfj=mysql&job=out','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('99','92','���ܱ�ģ�͹���','index.php?lfj=module_admin&dirname=form&file=form_module&job=list','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('100','92','���¹�����Ҫ����','index.php?lfj=article_more&job=config','','0','0','3','0');");
E_D("replace into `qb_admin_menu` values('101','83','</a>\r\n<font color=\"#FF0000\">����</font><img src=../images/default/article_elite.gif> <a href=\"../do/job.php?job=jump&pagetype=bencandy_label\" target=\"main\">����ҳ��ǩ</a>\r\n<a> ','#','','0','2','3','0');");
E_D("replace into `qb_admin_menu` values('102','0','��˵�','','','0','0','-3','0');");

require("../../inc/footer.php");
?>