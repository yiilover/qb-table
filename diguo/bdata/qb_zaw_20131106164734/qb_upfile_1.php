<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_upfile`;");
E_C("CREATE TABLE `qb_upfile` (
  `up_id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `module_id` smallint(4) NOT NULL DEFAULT '0',
  `ids` varchar(255) NOT NULL DEFAULT '0',
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `posttime` int(10) NOT NULL DEFAULT '0',
  `url` varchar(150) NOT NULL DEFAULT '',
  `filename` varchar(100) NOT NULL DEFAULT '',
  `num` smallint(5) NOT NULL DEFAULT '0',
  `if_tmp` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`up_id`),
  KEY `filename` (`filename`),
  KEY `if_tmp` (`if_tmp`),
  KEY `posttime` (`posttime`)
) ENGINE=MyISAM AUTO_INCREMENT=116 DEFAULT CHARSET=gbk");
E_D("replace into `qb_upfile` values('1','0','0','0','1','1308625532','article/','tmp-1_20110621110632_MF9HJUQ2JUQwJUI5JUZBJUM4JUNCJUMzJUYxV00wRTB6ZmVHeHI=.jpg','1','1');");
E_D("replace into `qb_upfile` values('2','0','0','0','1','1376932467','1_20130820010827_c4nhx.jpg','QQ截图20130820011407','0','0');");
E_D("replace into `qb_upfile` values('3','0','0','0','1','1376932520','1_20130820010820_xv1dw.jpg','QQ截图20130820011513','0','0');");
E_D("replace into `qb_upfile` values('4','0','0','0','1','1376932564','1_20130820010804_zrcbh.jpg','QQ截图20130820011557','0','0');");
E_D("replace into `qb_upfile` values('5','0','0','0','1','1376933057','1_20130820010817_cl4o7.jpg','QQ截图20130820012410','0','0');");
E_D("replace into `qb_upfile` values('6','0','0','0','1','1376933096','1_20130820010856_qolfe.jpg','QQ截图20130820012432','0','0');");
E_D("replace into `qb_upfile` values('7','0','0','0','1','1376933188','1_20130820010828_3j35b.jpg','QQ截图20130820011407','0','0');");
E_D("replace into `qb_upfile` values('8','0','0','0','1','1376933206','1_20130820010846_0fei6.jpg','QQ截图20130820011407','0','0');");
E_D("replace into `qb_upfile` values('9','0','0','0','1','1378530486','1_20130907130906_amor7.jpg','QQ截图20130820012410','0','0');");
E_D("replace into `qb_upfile` values('10','0','0','0','1','1378530486','1_20130907130906_apsq6.jpg','QQ截图20130820012410','0','0');");
E_D("replace into `qb_upfile` values('11','0','0','0','1','1378538677','1_20130907150937_o2ebo.jpg','QQ截图20130820011513','0','0');");
E_D("replace into `qb_upfile` values('12','0','0','0','1','1378539579','1_20130907150939_vokt5.jpg','QQ截图20130907153922','0','0');");
E_D("replace into `qb_upfile` values('13','0','0','0','1','1378541997','1_20130907160957_s2kv2.jpg','xxxjjj','0','0');");
E_D("replace into `qb_upfile` values('14','0','0','0','1','1378554313','1_20130907190913_9wurf.jpg','QQ截图20130820011513','0','0');");
E_D("replace into `qb_upfile` values('15','0','0','0','1','1378554319','1_20130907190919_lfkuj.jpg','QQ截图20130820012410','0','0');");
E_D("replace into `qb_upfile` values('16','0','0','0','1','1378554812','1_20130907190932_j9c0v.jpg','QQ截图20130820011557','0','0');");
E_D("replace into `qb_upfile` values('17','0','0','0','1','1378554813','1_20130907190933_lrmty.jpg','QQ截图20130820011557','0','0');");
E_D("replace into `qb_upfile` values('18','0','0','0','1','1378555067','1_20130907190947_i4jut.jpg','QQ截图20130820011513','0','0');");
E_D("replace into `qb_upfile` values('19','0','0','0','1','1378555196','1_20130907190956_louoh.jpg','QQ截图20130820012410','0','0');");
E_D("replace into `qb_upfile` values('20','0','0','0','1','1378555434','1_20130907200954_efik9.jpg','QQ截图20130820011513','0','0');");
E_D("replace into `qb_upfile` values('21','0','0','0','1','1378555533','1_20130907200933_t07vb.jpg','QQ截图20130820011407','0','0');");
E_D("replace into `qb_upfile` values('22','0','0','0','1','1378555581','1_20130907200921_dpgfq.jpg','QQ截图20130820012432','0','0');");
E_D("replace into `qb_upfile` values('23','0','0','0','1','1378555665','1_20130907200945_pxrg8.jpg','QQ截图20130820012410','0','0');");
E_D("replace into `qb_upfile` values('24','0','0','0','1','1378555825','1_20130907200926_cs02e.jpg','QQ截图20130820011513','0','0');");
E_D("replace into `qb_upfile` values('25','0','0','0','1','1378555946','1_20130907200926_g8ge3.jpg','QQ截图20130820012410','0','0');");
E_D("replace into `qb_upfile` values('26','0','0','0','1','1378555993','1_20130907200913_fbg7i.jpg','QQ截图20130820011407','0','0');");
E_D("replace into `qb_upfile` values('27','0','0','0','1','1378556045','1_20130907200905_g0rqf.jpg','QQ截图20130820012410','0','0');");
E_D("replace into `qb_upfile` values('28','0','0','0','1','1378556136','1_20130907200936_sx5wu.jpg','QQ截图20130820012432','0','0');");
E_D("replace into `qb_upfile` values('29','0','0','0','1','1378556165','1_20130907200905_akqjv.jpg','QQ截图20130820011513','0','0');");
E_D("replace into `qb_upfile` values('30','0','0','0','2','1379147377','2_20130914160937_z08mm.jpg','12041917428941604db100aa59_jpg-310x310','0','0');");
E_D("replace into `qb_upfile` values('31','0','0','0','1','1379298015','1_20130916100915_iihsi.png','QQ截图20130912143743','0','0');");
E_D("replace into `qb_upfile` values('32','0','0','0','2','1379380095','2_20130917090915_swgoy.jpg','QQ1','0','0');");
E_D("replace into `qb_upfile` values('33','0','0','0','2','1379380109','2_20130917090929_yzvie.jpg','QQ1','0','0');");
E_D("replace into `qb_upfile` values('34','0','0','0','2','1379382421','2_20130917090901_j7wsy.jpg','调心轴承','0','0');");
E_D("replace into `qb_upfile` values('35','0','0','0','2','1379382748','2_20130917090928_ikbc8.jpg','调心滚子','0','0');");
E_D("replace into `qb_upfile` values('36','0','0','0','1','1379384225','1_20130917100905_hkxzj.jpg','CRAB圆环轴承','0','0');");
E_D("replace into `qb_upfile` values('37','0','0','0','1','1379384348','1_20130917100908_p0mvi.jpg','圆锥 (2)','0','0');");
E_D("replace into `qb_upfile` values('38','0','0','0','1','1379384404','1_20130917100904_zlaf2.jpg','圆柱滚子','0','0');");
E_D("replace into `qb_upfile` values('39','0','0','0','1','1379384483','1_20130917100923_s3rbd.jpg','深沟球','0','0');");
E_D("replace into `qb_upfile` values('40','0','0','0','1','1379384484','1_20130917100924_lpcfb.jpg','深沟球','0','0');");
E_D("replace into `qb_upfile` values('41','0','0','0','1','1379384716','1_20130917100916_yrag9.jpg','角接触球','0','0');");
E_D("replace into `qb_upfile` values('42','0','0','0','1','1379385213','1_20130917100933_fgdfm.jpg','圆柱滚子','0','0');");
E_D("replace into `qb_upfile` values('43','0','0','0','1','1379385338','1_20130917100938_hzw7l.jpg','推力球','0','0');");
E_D("replace into `qb_upfile` values('44','0','0','0','1','1379385550','1_20130917100910_s3zmh.jpg','圆柱滚子推力','0','0');");
E_D("replace into `qb_upfile` values('45','0','0','0','1','1379385797','1_20130917100917_mqglj.jpg','调心球','0','0');");
E_D("replace into `qb_upfile` values('46','0','0','0','1','1379386009','1_20130917100949_dmlcc.jpg','圆柱滚子推力','0','0');");
E_D("replace into `qb_upfile` values('47','0','0','0','1','1379386204','1_20130917100904_uzhn8.jpg','圆锥滚子推力','0','0');");
E_D("replace into `qb_upfile` values('48','0','0','0','1','1379386436','1_20130917100956_zna9e.jpg','角接触推力','0','0');");
E_D("replace into `qb_upfile` values('49','0','0','0','1','1379386635','1_20130917100915_2hu9w.jpg','剖分式圆柱滚子','0','0');");
E_D("replace into `qb_upfile` values('50','0','0','0','1','1379387594','1_20130917110914_jx0yn.jpg','推力球面','0','0');");
E_D("replace into `qb_upfile` values('51','0','0','0','1','1379387678','1_20130917110938_45xl7.jpg','推力球面','0','0');");
E_D("replace into `qb_upfile` values('52','0','0','0','1','1379388024','1_20130917110924_o9hmf.jpg','剖分球面滚子','0','0');");
E_D("replace into `qb_upfile` values('53','0','0','0','1','1379396916','1_20130917130936_vdpcs.jpg','圆柱滚子','0','0');");
E_D("replace into `qb_upfile` values('54','0','0','0','1','1379397055','1_20130917130955_jwcif.jpg','圆柱滚子2','0','0');");
E_D("replace into `qb_upfile` values('55','0','0','0','1','1379397579','1_20130917130939_4sddy.jpg','854b72c5-c0c8-f714-fa47-25e28bbc80ca','0','0');");
E_D("replace into `qb_upfile` values('56','0','0','0','1','1379398201','1_20130917140901_l0cjl.jpg','5279c926-ffe8-2d99-c5b0-53703d6e894c','0','0');");
E_D("replace into `qb_upfile` values('57','0','0','0','1','1379398395','1_20130917140915_ykqgs.jpg','234ccbcb-ed2f-bddc-6c15-79c507315595','0','0');");
E_D("replace into `qb_upfile` values('58','0','0','0','1','1379469013','1_20130918090913_yzw6q.jpg','推力球面300_225','0','0');");
E_D("replace into `qb_upfile` values('59','0','0','0','1','1379469064','1_20130918090904_suknt.jpg','300_225','0','0');");
E_D("replace into `qb_upfile` values('60','0','0','0','1','1379469133','1_20130918090913_a50m1.jpg','CRAB圆环轴承','0','0');");
E_D("replace into `qb_upfile` values('61','0','0','0','1','1379469208','1_20130918090928_59yku.jpg','推力圆锥','0','0');");
E_D("replace into `qb_upfile` values('62','0','0','0','1','1379469258','1_20130918090918_0d9ic.jpg','角接触推力','0','0');");
E_D("replace into `qb_upfile` values('63','0','0','0','1','1379469309','1_20130918090909_qhzlg.jpg','角接触球(1)','0','0');");
E_D("replace into `qb_upfile` values('64','0','0','0','1','1379469347','1_20130918090947_ehrzr.jpg','推力球面300_225','0','0');");
E_D("replace into `qb_upfile` values('65','0','0','0','1','1379469402','1_20130918090942_nu6lj.jpg','推力球轴承-','0','0');");
E_D("replace into `qb_upfile` values('66','0','0','0','1','1379469408','1_20130918090948_toygy.jpg','推力球轴承-','0','0');");
E_D("replace into `qb_upfile` values('67','0','0','0','1','1379469413','1_20130918090953_eezxn.jpg','推力球轴承-','0','0');");
E_D("replace into `qb_upfile` values('68','0','0','0','1','1379469437','1_20130918090917_rxcam.jpg','推力球轴承-','0','0');");
E_D("replace into `qb_upfile` values('69','0','0','0','1','1379469489','1_20130918090909_asnz8.jpg','圆锥 (2)','0','0');");
E_D("replace into `qb_upfile` values('70','0','0','0','1','1379469526','1_20130918090946_tvuff.jpg','深沟球(1)','0','0');");
E_D("replace into `qb_upfile` values('71','0','0','0','1','1379469566','1_20130918090926_9mhpn.jpg','圆柱滚子推力','0','0');");
E_D("replace into `qb_upfile` values('72','0','0','0','1','1379469581','1_20130918090941_ncdff.jpg','圆柱滚子推力','0','0');");
E_D("replace into `qb_upfile` values('73','0','0','0','1','1379469581','1_20130918090941_imtif.jpg','圆柱滚子推力','0','0');");
E_D("replace into `qb_upfile` values('74','0','0','0','1','1379469678','1_20130918100918_gl7ul.jpg','调心球','0','0');");
E_D("replace into `qb_upfile` values('75','0','0','0','1','1379469728','1_20130918100908_pznkn.jpg','300_225-2','0','0');");
E_D("replace into `qb_upfile` values('76','0','0','0','1','1379469779','1_20130918100959_zgfkx.jpg','剖分式圆柱滚子','0','0');");
E_D("replace into `qb_upfile` values('77','0','0','0','1','1379901674','1_20130923100914_ujska.png','QQ鎴?浘20130923095812','0','0');");
E_D("replace into `qb_upfile` values('78','0','0','0','1','1380347120','1_20130928130920_pqtjg.jpg','单列圆柱','0','0');");
E_D("replace into `qb_upfile` values('79','0','0','0','1','1380347120','1_20130928130920_rhjwz.jpg','单列圆柱','0','0');");
E_D("replace into `qb_upfile` values('80','0','0','0','1','1380347167','1_20130928130907_bdfuj.jpg','四列圆柱','0','0');");
E_D("replace into `qb_upfile` values('81','0','0','0','1','1380347167','1_20130928130907_l7hq6.jpg','四列圆柱','0','0');");
E_D("replace into `qb_upfile` values('82','0','0','0','1','1380347228','1_20130928130908_d5pdy.jpg','单列圆锥','0','0');");
E_D("replace into `qb_upfile` values('83','0','0','0','1','1380347228','1_20130928130908_vhegf.jpg','单列圆锥','0','0');");
E_D("replace into `qb_upfile` values('84','0','0','0','1','1380347270','1_20130928130950_muw2i.jpg','双列圆锥','0','0');");
E_D("replace into `qb_upfile` values('85','0','0','0','1','1380347270','1_20130928130950_mbicp.jpg','双列圆锥','0','0');");
E_D("replace into `qb_upfile` values('86','0','0','0','1','1380347348','1_20130928130908_dqdif.jpg','四列圆锥','0','0');");
E_D("replace into `qb_upfile` values('87','0','0','0','1','1380347348','1_20130928130908_fr5mz.jpg','四列圆锥','0','0');");
E_D("replace into `qb_upfile` values('88','0','0','0','1','1381300935','1_20131009141015_yijgq.jpg','鍏夋壃鍘傛埧','0','0');");
E_D("replace into `qb_upfile` values('89','0','0','0','1','1381368767','1_20131010091047_53ssa.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('90','0','0','0','1','1381368811','1_20131010091031_u44kp.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('91','0','0','0','1','1381368829','1_20131010091049_ruxvc.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('92','0','0','0','1','1381369135','1_20131010091055_uiq7v.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('93','0','0','0','1','1381369137','1_20131010091057_fuhco.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('94','0','0','0','1','1381369139','1_20131010091059_t7jqe.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('95','0','0','0','1','1381369233','1_20131010091033_knex0.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('96','0','0','0','1','1381369249','1_20131010091049_lwx1e.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('97','0','0','0','1','1381370845','1_20131010101025_8rmgz.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('98','0','0','0','1','1381370990','1_20131010101050_nwlln.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('99','0','0','0','1','1381371164','1_20131010101044_12kor.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('100','0','0','0','1','1381371219','1_20131010101039_knbmj.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('101','0','0','0','1','1381371251','1_20131010101011_qolo9.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('102','0','0','0','1','1381371286','1_20131010101046_jonfs.jpg','ZWA鐢','0','0');");
E_D("replace into `qb_upfile` values('103','0','0','0','1','1381718344','1_20131014101004_eqwsr.jpg','634556769632696250','0','0');");
E_D("replace into `qb_upfile` values('104','0','0','0','1','1381718344','1_20131014101004_djyut.jpg','634556769632696250','0','0');");
E_D("replace into `qb_upfile` values('105','0','0','0','1','1381731076','1_20131014141016_trfl3.jpg','QQ图片20131014141130','0','0');");
E_D("replace into `qb_upfile` values('106','0','0','0','1','1381903208','1_20131016141008_wjpyn.jpg','u=3461901119,472394457&fm=21&gp=0','0','0');");
E_D("replace into `qb_upfile` values('107','0','0','0','1','1381903208','1_20131016141008_c8ubh.jpg','u=3461901119,472394457&fm=21&gp=0','0','0');");
E_D("replace into `qb_upfile` values('108','0','0','0','1','1382063697','1_20131018101057_nw6db.png','u=1773801084,3599098282&fm=21&gp=0','0','0');");
E_D("replace into `qb_upfile` values('109','0','0','0','1','1382063754','1_20131018101054_hvzie.jpg','u=1405130714,2538966816&fm=21&gp=0 002','0','0');");
E_D("replace into `qb_upfile` values('110','0','0','0','1','1382063754','1_20131018101054_zbqbj.jpg','u=1405130714,2538966816&fm=21&gp=0 002','0','0');");
E_D("replace into `qb_upfile` values('111','0','0','0','1','1383036063','1_20131029161003_ohicd.jpg','659daeadjw1e9ubj1hog1j20c80ga75q','0','0');");
E_D("replace into `qb_upfile` values('112','0','0','0','1','1383322754','1_20131102001114_btkel.jpg','e5da1148352711e2ba8122000a1c02b5_7','0','0');");
E_D("replace into `qb_upfile` values('113','0','0','0','1','1383322798','1_20131102001158_thlfc.jpg','33e807b834fc11e2901122000a9f1939_7','0','0');");
E_D("replace into `qb_upfile` values('114','0','0','0','1','1383323878','1_20131102001158_0zuzb.jpg','136_121120112915_1','0','0');");
E_D("replace into `qb_upfile` values('115','0','0','0','1','1383466084','1_20131103161104_tbsnl.jpg','136_121120112915_1','0','0');");

require("../../inc/footer.php");
?>