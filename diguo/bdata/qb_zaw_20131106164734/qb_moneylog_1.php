<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('gbk');
E_D("DROP TABLE IF EXISTS `qb_moneylog`;");
E_C("CREATE TABLE `qb_moneylog` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `money` mediumint(7) NOT NULL DEFAULT '0',
  `about` varchar(255) NOT NULL DEFAULT '',
  `posttime` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=219 DEFAULT CHARSET=gbk");
E_D("replace into `qb_moneylog` values('211','1','1','发表文章通过审核奖分<A HREF=''http://localhost:8137/bencandy.php?fid=62&aid=712'' target=_blank>2</A>','1383316928');");
E_D("replace into `qb_moneylog` values('213','1','1','发表文章通过审核奖分<A HREF=''http://localhost:8138/bencandy.php?fid=64&aid=714'' target=_blank>11111</A>','1383465542');");
E_D("replace into `qb_moneylog` values('215','1','1','发表文章通过审核奖分<A HREF=''http://localhost:8089/bencandy.php?fid=65&aid=716'' target=_blank>C2205TN9</A>','1383728465');");
E_D("replace into `qb_moneylog` values('109','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('217','1','1','发表文章通过审核奖分<A HREF=''http://www1.ddecshop.com/bencandy.php?fid=66&aid=718'' target=_blank>231SM100-MA</A>','1383752399');");
E_D("replace into `qb_moneylog` values('111','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('110','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('113','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('112','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('115','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('114','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('117','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('116','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('119','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('118','1','-1','文章被删除扣分:','1378538585');");
E_D("replace into `qb_moneylog` values('121','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('120','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('123','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('122','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('125','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('124','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('127','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('126','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('129','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('128','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('131','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('130','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('133','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('132','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('135','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('134','1','-1','文章被删除扣分:','1378538594');");
E_D("replace into `qb_moneylog` values('137','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('151','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=46&aid=680'' target=_blank>标题测试标题测试标题测试标题</A>','1378554314');");
E_D("replace into `qb_moneylog` values('136','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('139','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('138','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('141','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('140','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('143','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('142','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('145','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('149','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=61&aid=678'' target=_blank>2</A>','1378540623');");
E_D("replace into `qb_moneylog` values('144','1','-1','文章被删除扣分:','1378538604');");
E_D("replace into `qb_moneylog` values('147','1','-1','文章被删除扣分:','1378538612');");
E_D("replace into `qb_moneylog` values('146','1','-1','文章被删除扣分:','1378538612');");
E_D("replace into `qb_moneylog` values('148','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=1&aid=677'' target=_blank> 瓦房店轴承妙技中央瞄准国际..</A>','1378538679');");
E_D("replace into `qb_moneylog` values('150','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=46&aid=679'' target=_blank>标题测试标题测试标题测试标..</A>','1378554289');");
E_D("replace into `qb_moneylog` values('152','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=46&aid=681'' target=_blank>标题测试标题测试标题测试 标..</A>','1378554331');");
E_D("replace into `qb_moneylog` values('154','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=48&aid=683'' target=_blank>CRAB圆环滚子轴承</A>','1378555070');");
E_D("replace into `qb_moneylog` values('156','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=50&aid=685'' target=_blank>剖分式圆柱滚子轴承</A>','1378555440');");
E_D("replace into `qb_moneylog` values('158','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=53&aid=687'' target=_blank>圆柱滚子轴承</A>','1378555586');");
E_D("replace into `qb_moneylog` values('160','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=55&aid=689'' target=_blank>圆锥滚子推力轴承</A>','1378555828');");
E_D("replace into `qb_moneylog` values('163','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=58&aid=692'' target=_blank>推力球轴承</A>','1378556051');");
E_D("replace into `qb_moneylog` values('162','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=57&aid=691'' target=_blank>角接触球轴承</A>','1378555996');");
E_D("replace into `qb_moneylog` values('165','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=60&aid=694'' target=_blank>角接触推力球轴承</A>','1378556168');");
E_D("replace into `qb_moneylog` values('164','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=59&aid=693'' target=_blank>自调心球轴承</A>','1378556139');");
E_D("replace into `qb_moneylog` values('167','2','1','发表文章通过审核奖分<A HREF=''http://new.zwa.cc/bencandy.php?fid=46&aid=696'' target=_blank>22220CC/W33</A>','1379146993');");
E_D("replace into `qb_moneylog` values('166','1','1','发表文章通过审核奖分<A HREF=''http://new.zwa.cc/bencandy.php?fid=42&aid=695'' target=_blank>质量控制</A>','1378740769');");
E_D("replace into `qb_moneylog` values('170','1','-1','发表文章取消审核扣分<A HREF=''http://new.zwa.cc/bencandy.php?fid=46&aid=679'' target=_blank>标题测试标题测试标题测试标..</A>','1379381900');");
E_D("replace into `qb_moneylog` values('169','1','-1','发表文章取消审核扣分<A HREF=''http://new.zwa.cc/bencandy.php?fid=46&aid=674'' target=_blank>产品中心测试产品中心测试产..</A>','1379381900');");
E_D("replace into `qb_moneylog` values('172','1','-1','发表文章取消审核扣分<A HREF=''http://new.zwa.cc/bencandy.php?fid=46&aid=681'' target=_blank>标题测试标题测试标题测试 标..</A>','1379381907');");
E_D("replace into `qb_moneylog` values('171','1','-1','发表文章取消审核扣分<A HREF=''http://new.zwa.cc/bencandy.php?fid=46&aid=680'' target=_blank>标题测试标题测试标题测试标题</A>','1379381900');");
E_D("replace into `qb_moneylog` values('175','1','-1','发表文章取消审核扣分<A HREF=''http://new.zwa.cc/bencandy.php?fid=46&aid=697'' target=_blank>带表格的样例</A>','1379381917');");
E_D("replace into `qb_moneylog` values('177','1','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=681'' target=_blank>标题测试标题测试标题测试 标..</A>','1379920420');");
E_D("replace into `qb_moneylog` values('181','1','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=52&aid=686'' target=_blank>单列圆柱滚子轴承</A>','1380345323');");
E_D("replace into `qb_moneylog` values('180','1','-1','文章被删除扣分:','1380345085');");
E_D("replace into `qb_moneylog` values('182','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=52&aid=686'' target=_blank>单列圆柱滚子轴承</A>','1380345324');");
E_D("replace into `qb_moneylog` values('184','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=53&aid=701'' target=_blank>双列圆锥滚子轴承</A>','1380345662');");
E_D("replace into `qb_moneylog` values('188','1','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=52&aid=700'' target=_blank>四列圆柱滚子轴承</A>','1380435195');");
E_D("replace into `qb_moneylog` values('190','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=52&aid=700'' target=_blank>四列圆柱滚子轴承</A>','1380435213');");
E_D("replace into `qb_moneylog` values('192','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=44&aid=703'' target=_blank>技术支持与轴承维修</A>','1381302672');");
E_D("replace into `qb_moneylog` values('194','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=52&aid=705'' target=_blank>无外圈(内圈)单列圆柱滚子轴承</A>','1381731310');");
E_D("replace into `qb_moneylog` values('196','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=60&aid=707'' target=_blank>11111111111</A>','1381989237');");
E_D("replace into `qb_moneylog` values('198','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=709'' target=_blank>标题测试标题测试标题测试 标..</A>','1382153230');");
E_D("replace into `qb_moneylog` values('200','1','3','文章被推荐奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=697'' target=_blank>带表格的样例</A>','1382331324');");
E_D("replace into `qb_moneylog` values('204','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=681'' target=_blank>标题测试标题测试标题测试 标..</A>','1382400011');");
E_D("replace into `qb_moneylog` values('207','1','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=708'' target=_blank>轴承测试轴承测试轴承测试轴..</A>','1382575064');");
E_D("replace into `qb_moneylog` values('209','1','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=710'' target=_blank>点击进入具体的链接</A>','1382575066');");
E_D("replace into `qb_moneylog` values('153','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=47&aid=682'' target=_blank>标题标题标题标题标题</A>','1378554818');");
E_D("replace into `qb_moneylog` values('155','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=49&aid=684'' target=_blank>剖分式球面滚子轴承</A>','1378555201');");
E_D("replace into `qb_moneylog` values('157','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=52&aid=686'' target=_blank>圆锥滚子轴承</A>','1378555538');");
E_D("replace into `qb_moneylog` values('159','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=54&aid=688'' target=_blank>圆柱滚子推力轴承</A>','1378555670');");
E_D("replace into `qb_moneylog` values('161','1','1','发表文章通过审核奖分<A HREF=''http://127.0.0.1/bencandy.php?fid=56&aid=690'' target=_blank>深沟球轴承</A>','1378555950');");
E_D("replace into `qb_moneylog` values('168','1','1','发表文章通过审核奖分<A HREF=''http://new.zwa.cc/bencandy.php?fid=46&aid=697'' target=_blank>1111111</A>','1379295063');");
E_D("replace into `qb_moneylog` values('173','2','-1','发表文章取消审核扣分<A HREF=''http://new.zwa.cc/bencandy.php?fid=46&aid=696'' target=_blank>供应22220CA/W33轴承</A>','1379381908');");
E_D("replace into `qb_moneylog` values('174','2','1','发表文章通过审核奖分<A HREF=''http://new.zwa.cc/bencandy.php?fid=46&aid=696'' target=_blank>供应22220CA/W33轴承</A>','1379381912');");
E_D("replace into `qb_moneylog` values('176','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=681'' target=_blank>标题测试标题测试标题测试 标..</A>','1379920418');");
E_D("replace into `qb_moneylog` values('178','2','1','发表文章通过审核奖分<A HREF=''http://dlzwacn.ahost168.3azj.com/bencandy.php?fid=46&aid=698'' target=_blank>调心滚子轴承</A>','1379998495');");
E_D("replace into `qb_moneylog` values('179','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=52&aid=699'' target=_blank>四列圆柱滚子轴承</A>','1380344807');");
E_D("replace into `qb_moneylog` values('183','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=52&aid=700'' target=_blank>四列圆柱滚子轴承</A>','1380345447');");
E_D("replace into `qb_moneylog` values('185','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=53&aid=702'' target=_blank>四列圆锥滚子轴承</A>','1380345707');");
E_D("replace into `qb_moneylog` values('186','2','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=696'' target=_blank>调心滚子轴承</A>','1380411183');");
E_D("replace into `qb_moneylog` values('187','2','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=696'' target=_blank>调心滚子轴承</A>','1380411185');");
E_D("replace into `qb_moneylog` values('189','1','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=52&aid=686'' target=_blank>单列圆柱滚子轴承</A>','1380435195');");
E_D("replace into `qb_moneylog` values('191','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=52&aid=686'' target=_blank>单列圆柱滚子轴承</A>','1380435213');");
E_D("replace into `qb_moneylog` values('193','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=52&aid=704'' target=_blank>双列圆柱滚子轴承</A>','1381718465');");
E_D("replace into `qb_moneylog` values('195','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=57&aid=706'' target=_blank>双列角接触球轴承</A>','1381903274');");
E_D("replace into `qb_moneylog` values('197','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=708'' target=_blank>333333333333333333</A>','1382151760');");
E_D("replace into `qb_moneylog` values('199','1','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=710'' target=_blank>标题测试标题测试标题测试 标..</A>','1382153650');");
E_D("replace into `qb_moneylog` values('201','1','-3','文章被取消推荐扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=697'' target=_blank>带表格的样例</A>','1382331329');");
E_D("replace into `qb_moneylog` values('202','2','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=698'' target=_blank>调心滚子轴承</A>','1382332908');");
E_D("replace into `qb_moneylog` values('203','2','1','发表文章通过审核奖分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=698'' target=_blank>调心滚子轴承</A>','1382332910');");
E_D("replace into `qb_moneylog` values('205','1','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=681'' target=_blank>标题测试标题测试标题测试 标..</A>','1382400155');");
E_D("replace into `qb_moneylog` values('206','2','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=698'' target=_blank>调心滚子轴承</A>','1382575063');");
E_D("replace into `qb_moneylog` values('208','1','-1','发表文章取消审核扣分<A HREF=''http://www.zwa.cc/bencandy.php?fid=46&aid=709'' target=_blank>标题测试标题测试标题测试 标..</A>','1382575065');");
E_D("replace into `qb_moneylog` values('210','1','1','发表文章通过审核奖分<A HREF=''http://localhost:8137/bencandy.php?fid=62&aid=711'' target=_blank>1</A>','1383148496');");
E_D("replace into `qb_moneylog` values('212','1','1','发表文章通过审核奖分<A HREF=''http://localhost:8137/bencandy.php?fid=63&aid=713'' target=_blank>21</A>','1383374848');");
E_D("replace into `qb_moneylog` values('214','1','1','发表文章通过审核奖分<A HREF=''http://www1.ddecshop.com/bencandy.php?fid=62&aid=715'' target=_blank>787878</A>','1383466599');");
E_D("replace into `qb_moneylog` values('216','1','1','发表文章通过审核奖分<A HREF=''http://www1.ddecshop.com/bencandy.php?fid=65&aid=717'' target=_blank>C2205TN9</A>','1383747075');");
E_D("replace into `qb_moneylog` values('218','1','1','发表文章通过审核奖分<A HREF=''http://www1.ddecshop.com/bencandy.php?fid=67&aid=719'' target=_blank>剖分式圆柱滚子轴承</A>','1383753612');");

require("../../inc/footer.php");
?>