<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_hack`;");
E_C("CREATE TABLE `qb_hack` (
  `keywords` varchar(30) NOT NULL DEFAULT '',
  `name` varchar(30) NOT NULL DEFAULT '',
  `isclose` tinyint(1) NOT NULL DEFAULT '0',
  `author` varchar(30) NOT NULL DEFAULT '',
  `config` text NOT NULL,
  `htmlcode` text NOT NULL,
  `hackfile` text NOT NULL,
  `hacksqltable` text NOT NULL,
  `adminurl` varchar(150) NOT NULL DEFAULT '',
  `about` text NOT NULL,
  `class1` varchar(30) NOT NULL DEFAULT '',
  `class2` varchar(30) NOT NULL DEFAULT '',
  `list` int(10) NOT NULL DEFAULT '0',
  `linkname` text NOT NULL,
  `isbiz` tinyint(1) NOT NULL DEFAULT '0',
  UNIQUE KEY `keywords` (`keywords`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk");
E_D("replace into `qb_hack` values('adminmap','��̨�˵�','0','','','','','','index.php?lfj=adminmap&job=list','','other','�����ȫ','0','','0');");
E_D("replace into `qb_hack` values('alipay_set','���߳�ֵ֧������','0','','','','','','index.php?lfj=alipay&job=list','','other','�����������','9','','0');");
E_D("replace into `qb_hack` values('area_list','��������','0','','','','','','index.php?lfj=area&job=list','','other','��������','5','','0');");
E_D("replace into `qb_hack` values('attachment_list','��������','0','','','','','','index.php?lfj=attachment&job=list','','other','��������','6','','0');");
E_D("replace into `qb_hack` values('article_more_avoidgather','���ɼ�����','0','','','','','','index.php?lfj=article_more&job=avoidgather','','other','����ģ�Ͳ������','5','','1');");
E_D("replace into `qb_hack` values('cnzz_set','CNZZ����ͳ��','0','','','','','','index.php?lfj=cnzz&job=ask','','other','վ�⹦��','3','','0');");
E_D("replace into `qb_hack` values('code_code','PHPWINDӪ�����','0','','','','','','index.php?lfj=code&job=code','','other','վ�⹦��','2','','0');");
E_D("replace into `qb_hack` values('copyfrom_list','��Դ��ַ����','0','','','','','','index.php?lfj=copyfrom&job=list','','other','����ģ�Ͳ������','7','','0');");
E_D("replace into `qb_hack` values('crontab','��ʱ����','0','','','','','','index.php?lfj=crontab&job=list','','other','�����ȫ','0','','0');");
E_D("replace into `qb_hack` values('gather_copysina','�������Ųɼ�','0','','','','','','index.php?lfj=gather&job=copysina','','other','���ݲɼ���','3','','0');");
E_D("replace into `qb_hack` values('gather_list','�ɼ��������','0','','','','','','index.php?lfj=gather&job=list','','other','���ݲɼ���','2','','0');");
E_D("replace into `qb_hack` values('gather_list_sort','�ɼ�����������','0','','','','','','index.php?lfj=gather&job=listsort','','other','���ݲɼ���','1','','0');");
E_D("replace into `qb_hack` values('getkeyword_do','�ؼ��ֹ���','0','','','','','','index.php?lfj=getkeyword&job=list','','other','����ģ�Ͳ������','4','</a><A HREF=''index.php?lfj=getkeyword&job=list'' target=''main''>�ؼ��ֹ���</A> | <A HREF=''index.php?lfj=getkeyword&job=get'' target=''main''>��ȡ�ؼ���</A><a>','0');");
E_D("replace into `qb_hack` values('googlemap_makemap','�ٶ�����Э��/googleЭ��','0','','','','','','index.php?lfj=googlemap&job=makemap','','other','����ģ�Ͳ������','3','','0');");
E_D("replace into `qb_hack` values('jfadmin_mod','���ֽ��ܹ���','0','','','','','','index.php?lfj=jfadmin&job=listjf','','other','��������','7','','0');");
E_D("replace into `qb_hack` values('js_list','JS���ݵ���','0','','','','','','index.php?lfj=js&job=list','','other','��������','9','','0');");
E_D("replace into `qb_hack` values('labelstyle','��ǩ���ݵ����뵼��','0','','','','','','index.php?lfj=labelstyle&job=label','','other','���/ģ������','2','','0');");
E_D("replace into `qb_hack` values('limitword_list','�����������','0','','','','','','index.php?lfj=limitword&job=list','','other','����ģ�Ͳ������','9','','0');");
E_D("replace into `qb_hack` values('limitword_replace','�ַ��滻','0','','','','','','index.php?lfj=limitword&job=replace','','other','����ģ�Ͳ������','6','','0');");
E_D("replace into `qb_hack` values('login','�û���¼���','0','','a:3:{s:10:\"systemType\";s:6:\"php168\";s:9:\"guestcode\";s:0:\"\";}','','','','index.php?lfj=hack&hack=login&job=list','','','','0','','0');");
E_D("replace into `qb_hack` values('logs_login_logs','��̨��¼��־','0','','','','','','index.php?lfj=logs&job=login_logs','','other','��־����','2','','0');");
E_D("replace into `qb_hack` values('logs_admin_do_logs','��̨������־','0','','','','','','index.php?lfj=logs&job=admin_logs','','other','��־����','1','','0');");
E_D("replace into `qb_hack` values('mail_send','�ʼ�Ⱥ��','0','','','','','','index.php?lfj=mail&job=send','','other','��Ϣ/�ʼ�Ⱥ��','2','','0');");
E_D("replace into `qb_hack` values('message_send','վ����ϢȺ��','0','','','','','','index.php?lfj=message&job=send','','other','��Ϣ/�ʼ�Ⱥ��','3','','0');");
E_D("replace into `qb_hack` values('moneycard_make','�㿨��ֵ����','0','','','','','','index.php?lfj=moneycard&job=make','','other','�����������','7','','1');");
E_D("replace into `qb_hack` values('moneylog','�û����ѻ��ּ�¼','0','','','','','','index.php?lfj=moneylog&job=list','','other','�����ȫ','0','','0');");
E_D("replace into `qb_hack` values('oicq','QQ��������','0','','a:4:{s:8:\"qq_style\";s:2:\"11\";s:7:\"pic_alt\";s:10:\"���µ�����\";s:6:\"qq_num\";s:19:\"121727818\r\n37352529\";s:8:\"web_name\";s:10:\"PHP168��վ\";}','<a target=blank href=''tencent://message/?uin=121727818&Site=PHP168��վ&Menu=yes''><img border=''0'' SRC=''http://wpa.qq.com/pa?p=1:121727818:11'' alt=''���µ�����''></a><br><br><a target=blank href=''tencent://message/?uin=37352529&Site=PHP168��վ&Menu=yes''><img border=''0'' SRC=''http://wpa.qq.com/pa?p=1:37352529:11'' alt=''���µ�����''></a><br><br>','','','index.php?lfj=hack&hack=oicq&job=edit','','','','0','','0');");
E_D("replace into `qb_hack` values('propagandize','�ƹ�׬ȡ���ֹ���','0','','','','','','index.php?lfj=propagandize&job=list','','other','��������','8','','0');");
E_D("replace into `qb_hack` values('report_list','���ݺû��ٱ�����','0','','','','','','index.php?lfj=report&job=list','','other','����ģ�Ͳ������','8','','0');");
E_D("replace into `qb_hack` values('search','����','0','','a:2:{s:10:\"systemType\";s:5:\"baidu\";s:10:\"searchcode\";s:839:\"<table width=\\\\\"100%\\\\\" cellpadding=\\\\\"0\\\\\" cellspacing=\\\\\"0\\\\\" border=\\\\\"0\\\\\">\r\n                    \r\n                    <form name=f action=\\\\\"http://www.baidu.com/baidu\\\\\" target=_blank>\r\n                      <tr> \r\n                        <td height=\\\\\"28\\\\\"> \r\n                          \r\n        <div align=\\\\\"center\\\\\">�ٶ����� \r\n          <input type=\\\\\"text\\\\\" name=\\\\\"word\\\\\" size=\\\\\"10\\\\\" >\r\n                            <input type=\\\\\"submit\\\\\" name=\\\\\"Submit3222\\\\\" value=\\\\\"����\\\\\" >\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr> \r\n                        <td height=\\\\\"17\\\\\"> \r\n                          <input type=hidden name=cl2 value=3>\r\n                        </td>\r\n                      </tr>\r\n                    </form>\r\n                  </table>\r\n                \";}','','','','index.php?lfj=hack&hack=search&job=list','','','','0','','0');");
E_D("replace into `qb_hack` values('shoporder','�̳Ƕ�������','0','','','','','','index.php?lfj=shoporder&job=list','','other','�����������','8','','0');");
E_D("replace into `qb_hack` values('smallpic','��ȡ����ͼ','0','','','','','','index.php?lfj=smallpic&job=list','','','','0','','0');");
E_D("replace into `qb_hack` values('sms_send','�ֻ�����Ⱥ��','0','','','','','','index.php?lfj=sms&job=send','','other','��Ϣ/�ʼ�Ⱥ��','1','','0');");
E_D("replace into `qb_hack` values('style_editstyle','������','0','','','','','','index.php?lfj=style&job=edittpl','','other','���/ģ������','2','','0');");
E_D("replace into `qb_hack` values('template_list','ģ������','0','','','','','','index.php?lfj=template&job=list','','other','���/ģ������','1','','0');");
E_D("replace into `qb_hack` values('upgrade_ol','ϵͳ��������','0','','','','','','index.php?lfj=upgrade&job=get','','other','��������','4','','0');");
E_D("replace into `qb_hack` values('webmsg','վ��ͳ����Ϣ','0','PHP168�Ŷ�','a:3:{s:7:\"tplcode\";s:491:\"<table width=\\\\\"100%\\\\\" cellpadding=\\\\\"0\\\\\" cellspacing=\\\\\"0\\\\\" border=\\\\\"0\\\\\" id=\\\\\"webmsg\\\\\">\r\n     <tr> \r\n      <td height=\\\\\"14\\\\\">��������: {\$article_num} ƪ</td>\r\n    </tr>\r\n    <tr> \r\n      <td height=\\\\\"7\\\\\" >������Ŀ: {\$sort_num} ��</td>\r\n    </tr>\r\n    <tr> \r\n      <td height=\\\\\"7\\\\\" >��������: {\$comment_num} ��</td>\r\n    </tr>\r\n	 <tr> \r\n      <td height=\\\\\"7\\\\\" >�ÿ�����: {\$guestbook_num} ��</td>\r\n    </tr>\r\n    <tr>\r\n      <td height=\\\\\"7\\\\\" >ע���Ա: {\$member_num} λ</td>\r\n    </tr>\r\n</table>\";s:6:\"cktime\";s:2:\"60\";s:6:\"system\";a:3:{s:7:\"article\";s:1:\"1\";s:4:\"sort\";s:1:\"1\";s:10:\"memberdata\";s:1:\"1\";}}','','','','index.php?lfj=hack&hack=webmsg&job=list','','','','0','','0');");
E_D("replace into `qb_hack` values('webstat','����ͳ�Ʊ�','0','','','','','','index.php?lfj=webstat&job=list','','','','0','','0');");

require("../../inc/footer.php");
?>