<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_gather_rule`;");
E_C("CREATE TABLE `qb_gather_rule` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `type` varchar(15) NOT NULL DEFAULT '0',
  `fixsystem` varchar(30) NOT NULL DEFAULT '',
  `filetype` varchar(50) NOT NULL DEFAULT '',
  `webname` varchar(150) NOT NULL DEFAULT '',
  `listurl` varchar(150) NOT NULL DEFAULT '',
  `firstpage` varchar(150) NOT NULL DEFAULT '',
  `page_begin` int(10) NOT NULL DEFAULT '0',
  `page_end` int(10) NOT NULL DEFAULT '0',
  `page_step` int(10) NOT NULL DEFAULT '0',
  `title_minleng` smallint(5) NOT NULL DEFAULT '0',
  `listmoreurl` text NOT NULL,
  `link_include_word` text NOT NULL,
  `link_noinclude_word` text NOT NULL,
  `link_replace_word` text NOT NULL,
  `title_replace_word` text NOT NULL,
  `list_begin_code` text NOT NULL,
  `list_end_code` text NOT NULL,
  `list_begin_preg` text NOT NULL,
  `list_end_preg` text NOT NULL,
  `gatherthesame` tinyint(1) NOT NULL DEFAULT '0',
  `show_begin_preg` text NOT NULL,
  `show_end_preg` text NOT NULL,
  `show_endfile_preg` text NOT NULL,
  `show_begin_code` text NOT NULL,
  `show_end_code` text NOT NULL,
  `show_replace_word` text NOT NULL,
  `show_morepage` varchar(100) NOT NULL DEFAULT '',
  `show_firstpage` varchar(100) NOT NULL DEFAULT '',
  `show_spe2page` tinyint(1) NOT NULL DEFAULT '0',
  `posttime` int(10) NOT NULL DEFAULT '0',
  `list` int(10) NOT NULL DEFAULT '0',
  `copypic` tinyint(1) NOT NULL DEFAULT '0',
  `sort` smallint(4) NOT NULL DEFAULT '0',
  `file_type` varchar(50) NOT NULL DEFAULT '',
  `file_minleng` mediumint(6) NOT NULL DEFAULT '0',
  `file_minsize` int(9) NOT NULL DEFAULT '0',
  `file_includeword` text NOT NULL,
  `file_noincludeword` text NOT NULL,
  `file_explode` text NOT NULL,
  `file_picwidth` int(8) NOT NULL DEFAULT '0',
  `file_star_string` varchar(150) NOT NULL DEFAULT '',
  `title_rule` text NOT NULL,
  `content_rule` text NOT NULL,
  `title_morepage_rull` text NOT NULL,
  `content_morepage_rull` text NOT NULL,
  `charset_type` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=gbk");
E_D("replace into `qb_gather_rule` values('1','0','article','article','','腾讯人才激辩','','','0','0','1','0','http://edu.qq.com/job/jlgc_more.htm\r\nhttp://edu.qq.com/job/jlgc_more1.htm\r\nhttp://edu.qq.com/job/jlgc_more2.htm','','','','','','','','','0','','','','','','<table|<table style=\"display:none;\"','','','0','1172984270','1172984423','0','0','','0','0','','','','0','','<tr><td height=\"24\" class=\"font14px\"><div align=\"left\">·<a target=\"_blank\" class=\"blackul\" href=\"{url=NO\"}\">{title=NO<}</a> ','<div id=\"ArticleCnt\">{content=*}</div><div id=\"copyweb\">','','','0');");
E_D("replace into `qb_gather_rule` values('2','0','article','article','','且听风吟原创文学空间----->散文 >> 心灵感悟','http://wind.yinsha.com/ashow.php?sid=10&%20size=20&page=[page]','','1','3','1','0','','','','','','','','','','0','','','','<tr><td><p class=s11>','</td></tr>','','','','0','1165498531','1165498610','0','0','','0','0','','','','0','','<img src=images/{NO\"} border=0>\r\n                    \r\n            <a href=\"{url=NO\"}\" target=_blank>{title=NO<}</a> ','','','','0');");
E_D("replace into `qb_gather_rule` values('3','0','article','article','','碧海银纱-> 散文 >> 心灵感悟','http://wind.yinsha.com/ashow.php?sid=5&%20size=20&page=[page]','','1','8','1','0','','','','','','','','','','0','','','','','','','','','0','1166582291','1166582456','0','0','','0','0','','','','0','','<img src=images/{NO\"} border=0>\r\n                    \r\n            <a href=\"{url=NO }\" target=_blank>{title=NO<}</a> ','<div align=\"center\" class=\"s3\">作者: {author=NO\"}　</div>{*}<tr><td><p class=s11>&nbsp;&nbsp;{content=*}</td></tr>\r\n\r\n','','','0');");

require("../../inc/footer.php");
?>