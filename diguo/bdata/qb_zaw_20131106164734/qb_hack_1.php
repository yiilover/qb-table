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
E_D("replace into `qb_hack` values('adminmap','后台菜单','0','','','','','','index.php?lfj=adminmap&job=list','','other','插件大全','0','','0');");
E_D("replace into `qb_hack` values('alipay_set','在线充值支付管理','0','','','','','','index.php?lfj=alipay&job=list','','other','电子商务管理','9','','0');");
E_D("replace into `qb_hack` values('area_list','地区管理','0','','','','','','index.php?lfj=area&job=list','','other','其它功能','5','','0');");
E_D("replace into `qb_hack` values('attachment_list','附件管理','0','','','','','','index.php?lfj=attachment&job=list','','other','其它功能','6','','0');");
E_D("replace into `qb_hack` values('article_more_avoidgather','防采集设置','0','','','','','','index.php?lfj=article_more&job=avoidgather','','other','内容模型插件功能','5','','1');");
E_D("replace into `qb_hack` values('cnzz_set','CNZZ流量统计','0','','','','','','index.php?lfj=cnzz&job=ask','','other','站外功能','3','','0');");
E_D("replace into `qb_hack` values('code_code','PHPWIND营销插件','0','','','','','','index.php?lfj=code&job=code','','other','站外功能','2','','0');");
E_D("replace into `qb_hack` values('copyfrom_list','来源地址管理','0','','','','','','index.php?lfj=copyfrom&job=list','','other','内容模型插件功能','7','','0');");
E_D("replace into `qb_hack` values('crontab','定时任务','0','','','','','','index.php?lfj=crontab&job=list','','other','插件大全','0','','0');");
E_D("replace into `qb_hack` values('gather_copysina','新浪新闻采集','0','','','','','','index.php?lfj=gather&job=copysina','','other','数据采集器','3','','0');");
E_D("replace into `qb_hack` values('gather_list','采集规则管理','0','','','','','','index.php?lfj=gather&job=list','','other','数据采集器','2','','0');");
E_D("replace into `qb_hack` values('gather_list_sort','采集规则分类管理','0','','','','','','index.php?lfj=gather&job=listsort','','other','数据采集器','1','','0');");
E_D("replace into `qb_hack` values('getkeyword_do','关键字管理','0','','','','','','index.php?lfj=getkeyword&job=list','','other','内容模型插件功能','4','</a><A HREF=''index.php?lfj=getkeyword&job=list'' target=''main''>关键字管理</A> | <A HREF=''index.php?lfj=getkeyword&job=get'' target=''main''>提取关键字</A><a>','0');");
E_D("replace into `qb_hack` values('googlemap_makemap','百度新闻协议/google协议','0','','','','','','index.php?lfj=googlemap&job=makemap','','other','内容模型插件功能','3','','0');");
E_D("replace into `qb_hack` values('jfadmin_mod','积分介绍管理','0','','','','','','index.php?lfj=jfadmin&job=listjf','','other','其它功能','7','','0');");
E_D("replace into `qb_hack` values('js_list','JS内容调用','0','','','','','','index.php?lfj=js&job=list','','other','其它功能','9','','0');");
E_D("replace into `qb_hack` values('labelstyle','标签数据导入与导出','0','','','','','','index.php?lfj=labelstyle&job=label','','other','风格/模板设置','2','','0');");
E_D("replace into `qb_hack` values('limitword_list','不良词语过滤','0','','','','','','index.php?lfj=limitword&job=list','','other','内容模型插件功能','9','','0');");
E_D("replace into `qb_hack` values('limitword_replace','字符替换','0','','','','','','index.php?lfj=limitword&job=replace','','other','内容模型插件功能','6','','0');");
E_D("replace into `qb_hack` values('login','用户登录插件','0','','a:3:{s:10:\"systemType\";s:6:\"php168\";s:9:\"guestcode\";s:0:\"\";}','','','','index.php?lfj=hack&hack=login&job=list','','','','0','','0');");
E_D("replace into `qb_hack` values('logs_login_logs','后台登录日志','0','','','','','','index.php?lfj=logs&job=login_logs','','other','日志管理','2','','0');");
E_D("replace into `qb_hack` values('logs_admin_do_logs','后台操作日志','0','','','','','','index.php?lfj=logs&job=admin_logs','','other','日志管理','1','','0');");
E_D("replace into `qb_hack` values('mail_send','邮件群发','0','','','','','','index.php?lfj=mail&job=send','','other','消息/邮件群发','2','','0');");
E_D("replace into `qb_hack` values('message_send','站内消息群发','0','','','','','','index.php?lfj=message&job=send','','other','消息/邮件群发','3','','0');");
E_D("replace into `qb_hack` values('moneycard_make','点卡充值管理','0','','','','','','index.php?lfj=moneycard&job=make','','other','电子商务管理','7','','1');");
E_D("replace into `qb_hack` values('moneylog','用户消费积分记录','0','','','','','','index.php?lfj=moneylog&job=list','','other','插件大全','0','','0');");
E_D("replace into `qb_hack` values('oicq','QQ在线聊天','0','','a:4:{s:8:\"qq_style\";s:2:\"11\";s:7:\"pic_alt\";s:10:\"有事点这里\";s:6:\"qq_num\";s:19:\"121727818\r\n37352529\";s:8:\"web_name\";s:10:\"PHP168整站\";}','<a target=blank href=''tencent://message/?uin=121727818&Site=PHP168整站&Menu=yes''><img border=''0'' SRC=''http://wpa.qq.com/pa?p=1:121727818:11'' alt=''有事点这里''></a><br><br><a target=blank href=''tencent://message/?uin=37352529&Site=PHP168整站&Menu=yes''><img border=''0'' SRC=''http://wpa.qq.com/pa?p=1:37352529:11'' alt=''有事点这里''></a><br><br>','','','index.php?lfj=hack&hack=oicq&job=edit','','','','0','','0');");
E_D("replace into `qb_hack` values('propagandize','推广赚取积分功能','0','','','','','','index.php?lfj=propagandize&job=list','','other','其它功能','8','','0');");
E_D("replace into `qb_hack` values('report_list','内容好坏举报管理','0','','','','','','index.php?lfj=report&job=list','','other','内容模型插件功能','8','','0');");
E_D("replace into `qb_hack` values('search','搜索','0','','a:2:{s:10:\"systemType\";s:5:\"baidu\";s:10:\"searchcode\";s:839:\"<table width=\\\\\"100%\\\\\" cellpadding=\\\\\"0\\\\\" cellspacing=\\\\\"0\\\\\" border=\\\\\"0\\\\\">\r\n                    \r\n                    <form name=f action=\\\\\"http://www.baidu.com/baidu\\\\\" target=_blank>\r\n                      <tr> \r\n                        <td height=\\\\\"28\\\\\"> \r\n                          \r\n        <div align=\\\\\"center\\\\\">百度搜索 \r\n          <input type=\\\\\"text\\\\\" name=\\\\\"word\\\\\" size=\\\\\"10\\\\\" >\r\n                            <input type=\\\\\"submit\\\\\" name=\\\\\"Submit3222\\\\\" value=\\\\\"搜索\\\\\" >\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      <tr> \r\n                        <td height=\\\\\"17\\\\\"> \r\n                          <input type=hidden name=cl2 value=3>\r\n                        </td>\r\n                      </tr>\r\n                    </form>\r\n                  </table>\r\n                \";}','','','','index.php?lfj=hack&hack=search&job=list','','','','0','','0');");
E_D("replace into `qb_hack` values('shoporder','商城订单管理','0','','','','','','index.php?lfj=shoporder&job=list','','other','电子商务管理','8','','0');");
E_D("replace into `qb_hack` values('smallpic','提取缩略图','0','','','','','','index.php?lfj=smallpic&job=list','','','','0','','0');");
E_D("replace into `qb_hack` values('sms_send','手机短信群发','0','','','','','','index.php?lfj=sms&job=send','','other','消息/邮件群发','1','','0');");
E_D("replace into `qb_hack` values('style_editstyle','风格管理','0','','','','','','index.php?lfj=style&job=edittpl','','other','风格/模板设置','2','','0');");
E_D("replace into `qb_hack` values('template_list','模板设置','0','','','','','','index.php?lfj=template&job=list','','other','风格/模板设置','1','','0');");
E_D("replace into `qb_hack` values('upgrade_ol','系统在线升级','0','','','','','','index.php?lfj=upgrade&job=get','','other','其它功能','4','','0');");
E_D("replace into `qb_hack` values('webmsg','站点统计信息','0','PHP168团队','a:3:{s:7:\"tplcode\";s:491:\"<table width=\\\\\"100%\\\\\" cellpadding=\\\\\"0\\\\\" cellspacing=\\\\\"0\\\\\" border=\\\\\"0\\\\\" id=\\\\\"webmsg\\\\\">\r\n     <tr> \r\n      <td height=\\\\\"14\\\\\">文章主题: {\$article_num} 篇</td>\r\n    </tr>\r\n    <tr> \r\n      <td height=\\\\\"7\\\\\" >文章栏目: {\$sort_num} 个</td>\r\n    </tr>\r\n    <tr> \r\n      <td height=\\\\\"7\\\\\" >文章评论: {\$comment_num} 条</td>\r\n    </tr>\r\n	 <tr> \r\n      <td height=\\\\\"7\\\\\" >访客留言: {\$guestbook_num} 条</td>\r\n    </tr>\r\n    <tr>\r\n      <td height=\\\\\"7\\\\\" >注册会员: {\$member_num} 位</td>\r\n    </tr>\r\n</table>\";s:6:\"cktime\";s:2:\"60\";s:6:\"system\";a:3:{s:7:\"article\";s:1:\"1\";s:4:\"sort\";s:1:\"1\";s:10:\"memberdata\";s:1:\"1\";}}','','','','index.php?lfj=hack&hack=webmsg&job=list','','','','0','','0');");
E_D("replace into `qb_hack` values('webstat','数据统计表','0','','','','','','index.php?lfj=webstat&job=list','','','','0','','0');");

require("../../inc/footer.php");
?>