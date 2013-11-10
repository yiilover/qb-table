<?php
$haveCache=1;
$label['head_guides']=stripslashes('      <div class=\"ico_guide bbs\"><a href=\"http://www1.ddecshop.com/bbs/\" target=\'_blank\'>社区</a></div>
	  <div class=\"ico_guide post\"><a href=\"http://www1.ddecshop.com/do/post.php\">投稿</a></div>
	  <div class=\"ico_guide sell\"><a href=\"http://www1.ddecshop.com/do/buymoneycard.php?paytype=yeepay\">充值</a></div>
	  <div class=\"ico_guide jf\"><a href=\"http://www1.ddecshop.com/do/jf.php\">积分</a></div>
	  <div class=\"ico_guide user\"><a href=\"http://www1.ddecshop.com/do/list_form.php?mid=2\">招聘</a></div>
	  <div class=\"ico_guide search\"><a href=\"http://www1.ddecshop.com/do/search.php\">搜索</a></div>
	  <div class=\"ico_guide book\"><a href=\"http://www1.ddecshop.com/do/guestbook.php\">留言</a></div>
	  <div class=\"ico_guide digg\"><a href=\"http://www1.ddecshop.com/do/listsp.php?fid=1\">专题</a></div>');
$label['head_search']=stripslashes('<a href=\"http://www1.ddecshop.com/do/search.php?keyword=齐博CMS\" class=\"b\">齐博CMS</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=注册域名\" target=\"_blank\">注册域名</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=CEO\" target=\"_blank\">CEO</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=源码下载\" target=\"_blank\">源码下载</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=IT资讯\" target=\"_blank\">IT资讯</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=主机空间\" target=\"_blank\">主机空间</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=建站手册\" class=\"b\" target=\"_blank\">建站手册</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=论坛程序\" target=\"_blank\">论坛程序</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=健康咨询\" class=\"b\" target=\"_blank\">健康咨询</a>');
$label['list_page_topad']=stripslashes('<SCRIPT LANGUAGE=\'JavaScript\' src=\'http://www1.ddecshop.com/do/a_d_s.php?job=js&ad_id=list_page_topad\'></SCRIPT>');
$label['article_list']=stripslashes('<SCRIPT LANGUAGE=\'JavaScript\' src=\'http://www1.ddecshop.com/do/a_d_s.php?job=js&ad_id=article_list\'> </SCRIPT>');
$label['article_list_tag']=stripslashes('广告位');
$label['bbsifmark_tag']=stripslashes('论坛优秀贴');
$label['list_top_ad']=stripslashes('<SCRIPT LANGUAGE=\'JavaScript\' src=\'http://www1.ddecshop.com/do/a_d_s.php?job=js&ad_id=AD_list_topad\'></SCRIPT>');
$label['new_rollpic']=stripslashes('

<script type=\'text/javascript\'>
var widths=310;
var heights=260;
var counts=2;

				img1=new Image ();img1.src=\'http://www1.ddecshop.com/upload_files/label/1_20101108161159_zs6we.jpg\';
				url1=new Image ();url1.src=\'#\';
				
				img2=new Image ();img2.src=\'http://www1.ddecshop.com/upload_files/label/1_20101108171103_f9fvv.jpg\';
				url2=new Image ();url2.src=\'#\';
				
var nn=1;
var key=0;
function change_img()
{if(key==0){key=1;}
else if(document.all)
{document.getElementById(\"pic\").filters[0].Apply();document.getElementById(\"pic\").filters[0].Play(duration=2);}
eval(\'document.getElementById(\"pic\").src=img\'+nn+\'.src\');
eval(\'document.getElementById(\"url\").href=url\'+nn+\'.src\');
eval(\'document.getElementById(\"url\").target=\"blank\"\');
for (var i=1;i<=counts;i++){document.getElementById(\"xxjdjj\"+i).className=\'axx\';}
document.getElementById(\"xxjdjj\"+nn).className=\'bxx\';
nn++;if(nn>counts){nn=1;}
tt=setTimeout(\'change_img()\',4000);}
function changeimg(n){nn=n;window.clearInterval(tt);change_img();}
document.write(\'<style>\');
document.write(\'.axx{padding:1px 7px;border-left:#cccccc 1px solid;}\');
document.write(\'a.axx:link,a.axx:visited{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#666;}\');
document.write(\'a.axx:active,a.axx:hover{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#999;}\');
document.write(\'.bxx{padding:1px 7px;border-left:#cccccc 1px solid;}\');
document.write(\'a.bxx:link,a.bxx:visited{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#D34600;}\');
document.write(\'a.bxx:active,a.bxx:hover{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#D34600;}\');
document.write(\'</style>\');
document.write(\'<div style=\"width:\'+widths+\'px;height:\'+heights+\'px;overflow:hidden;text-overflow:clip;\">\');
document.write(\'<div><a id=\"url\"><img id=\"pic\" style=\"border:0px;filter:progid:dximagetransform.microsoft.wipe(gradientsize=1.0,wipestyle=4, motion=forward)\" width=\'+widths+\' height=\'+heights+\' /></a></div>\');
document.write(\'<div style=\"filter:alpha(style=1,opacity=10,finishOpacity=80);background: #888888;width:100%-2px;text-align:right;top:-12px;position:relative;margin:1px;height:12px;padding:0px;margin:0px;border:0px;\">\');
for(var i=1;i<counts+1;i++){document.write(\'<a href=\"javascript:changeimg(\'+i+\');\" id=\"xxjdjj\'+i+\'\" class=\"axx\" target=\"_self\">\'+i+\'</a>\');}
document.write(\'</div></div>\');
change_img();
</script>
	
	');
$label['new_tt2']=stripslashes('<a href=\"#\">更多...</a>');
$label['new_tt1']=stripslashes('推荐阅读');
$label['new_tt3']=stripslashes('<a href=\"#\">更多...</a>');
$label['new_tt4']=stripslashes('今日推荐');
$label['new_tt6']=stripslashes('<a href=\"#\">更多...</a>');
$label['new_tt5']=stripslashes('网友推荐');
$label['new_tt8']=stripslashes('<a href=\"#\">更多...</a>');
$label['new_tt7']=stripslashes('民生话题');
$label['new_tt9']=stripslashes('<a href=\"#\">更多...</a>');
$label['new_tt10']=stripslashes('图片主题');
$label['new_tt11']=stripslashes('<a href=\"#\">更多...</a>');
$label['new_tt12']=stripslashes('社会聚焦');
$label['new_tt13']=stripslashes('点击排行');
$label['photo_rollpic']=stripslashes('

<script type=\'text/javascript\'>
var widths=298;
var heights=238;
var counts=2;

				img1=new Image ();img1.src=\'http://www1.ddecshop.com/upload_files/label/1_20101110141134_yuvgy.jpg\';
				url1=new Image ();url1.src=\'#\';
				
				img2=new Image ();img2.src=\'http://www1.ddecshop.com/upload_files/label/1_20101110141112_eb6bm.jpg\';
				url2=new Image ();url2.src=\'#\';
				
var nn=1;
var key=0;
function change_img()
{if(key==0){key=1;}
else if(document.all)
{document.getElementById(\"pic\").filters[0].Apply();document.getElementById(\"pic\").filters[0].Play(duration=2);}
eval(\'document.getElementById(\"pic\").src=img\'+nn+\'.src\');
eval(\'document.getElementById(\"url\").href=url\'+nn+\'.src\');
eval(\'document.getElementById(\"url\").target=\"blank\"\');
for (var i=1;i<=counts;i++){document.getElementById(\"xxjdjj\"+i).className=\'axx\';}
document.getElementById(\"xxjdjj\"+nn).className=\'bxx\';
nn++;if(nn>counts){nn=1;}
tt=setTimeout(\'change_img()\',4000);}
function changeimg(n){nn=n;window.clearInterval(tt);change_img();}
document.write(\'<style>\');
document.write(\'.axx{padding:1px 7px;border-left:#cccccc 1px solid;}\');
document.write(\'a.axx:link,a.axx:visited{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#666;}\');
document.write(\'a.axx:active,a.axx:hover{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#999;}\');
document.write(\'.bxx{padding:1px 7px;border-left:#cccccc 1px solid;}\');
document.write(\'a.bxx:link,a.bxx:visited{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#D34600;}\');
document.write(\'a.bxx:active,a.bxx:hover{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#D34600;}\');
document.write(\'</style>\');
document.write(\'<div style=\"width:\'+widths+\'px;height:\'+heights+\'px;overflow:hidden;text-overflow:clip;\">\');
document.write(\'<div><a id=\"url\"><img id=\"pic\" style=\"border:0px;filter:progid:dximagetransform.microsoft.wipe(gradientsize=1.0,wipestyle=4, motion=forward)\" width=\'+widths+\' height=\'+heights+\' /></a></div>\');
document.write(\'<div style=\"filter:alpha(style=1,opacity=10,finishOpacity=80);background: #888888;width:100%-2px;text-align:right;top:-12px;position:relative;margin:1px;height:12px;padding:0px;margin:0px;border:0px;\">\');
for(var i=1;i<counts+1;i++){document.write(\'<a href=\"javascript:changeimg(\'+i+\');\" id=\"xxjdjj\'+i+\'\" class=\"axx\" target=\"_self\">\'+i+\'</a>\');}
document.write(\'</div></div>\');
change_img();
</script>
	
	');
$label['photo_t6']=stripslashes('<a href=\"#\">更多...</a>');
$label['photo_t5']=stripslashes('<a href=\"#\">更多...</a>');
$label['photo_t7']=stripslashes('热门图片');
$label['photo_t9']=stripslashes('推荐图片');
$label['photo_t8']=stripslashes('最近更新');
$label['photo_t10']=stripslashes('<a href=\"#\">更多...</a>');
$label['photo_t11']=stripslashes('<a href=\"#\" class=\"sort choose\"><span>国内</span></a>
                <a href=\"#\" class=\"sort\"><span>国际</span></a>
                <a href=\"#\" class=\"sort\"><span>女性</span></a>
                <a href=\"#\" class=\"sort\"><span>娱乐时尚</span></a>
                <a href=\"#\" class=\"sort\"><span>军事</span></a>
                <a href=\"#\" class=\"sort\"><span>社会</span></a>
                <a href=\"#\" class=\"sort\"><span>文化</span></a>
                <a href=\"#\" class=\"sort\"><span>奇趣</span></a>');
$label['video_rollpic']=stripslashes('

<script type=\'text/javascript\'>
var widths=318;
var heights=248;
var counts=2;

				img1=new Image ();img1.src=\'http://www1.ddecshop.com/upload_files/label/1_20101111111131_dupyp.jpg\';
				url1=new Image ();url1.src=\'#\';
				
				img2=new Image ();img2.src=\'http://www1.ddecshop.com/upload_files/label/1_20101111111135_0n6tg.jpg\';
				url2=new Image ();url2.src=\'#\';
				
var nn=1;
var key=0;
function change_img()
{if(key==0){key=1;}
else if(document.all)
{document.getElementById(\"pic\").filters[0].Apply();document.getElementById(\"pic\").filters[0].Play(duration=2);}
eval(\'document.getElementById(\"pic\").src=img\'+nn+\'.src\');
eval(\'document.getElementById(\"url\").href=url\'+nn+\'.src\');
eval(\'document.getElementById(\"url\").target=\"blank\"\');
for (var i=1;i<=counts;i++){document.getElementById(\"xxjdjj\"+i).className=\'axx\';}
document.getElementById(\"xxjdjj\"+nn).className=\'bxx\';
nn++;if(nn>counts){nn=1;}
tt=setTimeout(\'change_img()\',4000);}
function changeimg(n){nn=n;window.clearInterval(tt);change_img();}
document.write(\'<style>\');
document.write(\'.axx{padding:1px 7px;border-left:#cccccc 1px solid;}\');
document.write(\'a.axx:link,a.axx:visited{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#666;}\');
document.write(\'a.axx:active,a.axx:hover{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#999;}\');
document.write(\'.bxx{padding:1px 7px;border-left:#cccccc 1px solid;}\');
document.write(\'a.bxx:link,a.bxx:visited{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#D34600;}\');
document.write(\'a.bxx:active,a.bxx:hover{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#D34600;}\');
document.write(\'</style>\');
document.write(\'<div style=\"width:\'+widths+\'px;height:\'+heights+\'px;overflow:hidden;text-overflow:clip;\">\');
document.write(\'<div><a id=\"url\"><img id=\"pic\" style=\"border:0px;filter:progid:dximagetransform.microsoft.wipe(gradientsize=1.0,wipestyle=4, motion=forward)\" width=\'+widths+\' height=\'+heights+\' /></a></div>\');
document.write(\'<div style=\"filter:alpha(style=1,opacity=10,finishOpacity=80);background: #888888;width:100%-2px;text-align:right;top:-12px;position:relative;margin:1px;height:12px;padding:0px;margin:0px;border:0px;\">\');
for(var i=1;i<counts+1;i++){document.write(\'<a href=\"javascript:changeimg(\'+i+\');\" id=\"xxjdjj\'+i+\'\" class=\"axx\" target=\"_self\">\'+i+\'</a>\');}
document.write(\'</div></div>\');
change_img();
</script>
	
	');
$label['video_c1']=stripslashes('<a href=\"#\">更多...</a>');
$label['video_c2']=stripslashes('<a href=\"#\">更多...</a>');
$label['video_c3']=stripslashes('<a href=\"#\">更多...</a>');
$label['video_c5']=stripslashes('影视热播');
$label['video_c7']=stripslashes('精选视频');
$label['video_c9']=stripslashes(' <a href=\"#\" class=\"sort choose\"><span>国内</span></a>
                <a href=\"#\" class=\"sort\"><span>国际</span></a>
                <a href=\"#\" class=\"sort\"><span>女性</span></a>
                <a href=\"#\" class=\"sort\"><span>娱乐时尚</span></a>
                <a href=\"#\" class=\"sort\"><span>军事</span></a>
                <a href=\"#\" class=\"sort\"><span>社会</span></a>
                <a href=\"#\" class=\"sort\"><span>文化</span></a>
                <a href=\"#\" class=\"sort\"><span>奇趣</span></a>');
$label['video_c10']=stripslashes('视频排行');
$label['video_ad1']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111121107_nd3ch.gif\'  width=\'720\'  height=\'90\' border=\'0\' /></a>');
$label['video_ad2']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111121116_80r2g.gif\'  width=\'260\'  height=\'90\' border=\'0\' /></a>');
$label['shops_rollpic']=stripslashes('

<script type=\'text/javascript\'>
var widths=530;
var heights=210;
var counts=2;

				img1=new Image ();img1.src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141159_txw13.jpg\';
				url1=new Image ();url1.src=\'#\';
				
				img2=new Image ();img2.src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141105_k2yzk.jpg\';
				url2=new Image ();url2.src=\'#\';
				
var nn=1;
var key=0;
function change_img()
{if(key==0){key=1;}
else if(document.all)
{document.getElementById(\"pic\").filters[0].Apply();document.getElementById(\"pic\").filters[0].Play(duration=2);}
eval(\'document.getElementById(\"pic\").src=img\'+nn+\'.src\');
eval(\'document.getElementById(\"url\").href=url\'+nn+\'.src\');
eval(\'document.getElementById(\"url\").target=\"blank\"\');
for (var i=1;i<=counts;i++){document.getElementById(\"xxjdjj\"+i).className=\'axx\';}
document.getElementById(\"xxjdjj\"+nn).className=\'bxx\';
nn++;if(nn>counts){nn=1;}
tt=setTimeout(\'change_img()\',4000);}
function changeimg(n){nn=n;window.clearInterval(tt);change_img();}
document.write(\'<style>\');
document.write(\'.axx{padding:1px 7px;border-left:#cccccc 1px solid;}\');
document.write(\'a.axx:link,a.axx:visited{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#666;}\');
document.write(\'a.axx:active,a.axx:hover{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#999;}\');
document.write(\'.bxx{padding:1px 7px;border-left:#cccccc 1px solid;}\');
document.write(\'a.bxx:link,a.bxx:visited{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#D34600;}\');
document.write(\'a.bxx:active,a.bxx:hover{text-decoration:none;color:#fff;line-height:12px;font:9px sans-serif;background-color:#D34600;}\');
document.write(\'</style>\');
document.write(\'<div style=\"width:\'+widths+\'px;height:\'+heights+\'px;overflow:hidden;text-overflow:clip;\">\');
document.write(\'<div><a id=\"url\"><img id=\"pic\" style=\"border:0px;filter:progid:dximagetransform.microsoft.wipe(gradientsize=1.0,wipestyle=4, motion=forward)\" width=\'+widths+\' height=\'+heights+\' /></a></div>\');
document.write(\'<div style=\"filter:alpha(style=1,opacity=10,finishOpacity=80);background: #888888;width:100%-2px;text-align:right;top:-12px;position:relative;margin:1px;height:12px;padding:0px;margin:0px;border:0px;\">\');
for(var i=1;i<counts+1;i++){document.write(\'<a href=\"javascript:changeimg(\'+i+\');\" id=\"xxjdjj\'+i+\'\" class=\"axx\" target=\"_self\">\'+i+\'</a>\');}
document.write(\'</div></div>\');
change_img();
</script>
	
	');
$label['shops_sort']=stripslashes('	<dl>
                	<dt><a href=\"list.php?fid=16\" target=\"_blank\">数码产品</a></dt>
                    <dd>
                    	<div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                    </dd>
                </dl>
                <dl>
                	<dt><a href=\"list.php?fid=16\" target=\"_blank\">数码产品</a></dt>
                    <dd>
                    	<div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                    </dd>
                </dl>
                <dl>
                	<dt><a href=\"list.php?fid=16\" target=\"_blank\">数码产品</a></dt>
                    <dd>
                    	<div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">演示分类</a></div>
						
                    </dd>
                </dl>');
$label['shops_f1']=stripslashes('<dl>
                <dt><a href=\"#\">会员中心</a></dt>
                <dd>
                    <div><a href=\"#\">忘记密码</a></div>
                    <div><a href=\"#\">我要买</a></div>
                    <div><a href=\"#\">查看已购买商品</a></div>
                    <div><a href=\"#\">如何搜索</a></div>
                    <div><a href=\"#\">如何注册成为...</a></div>
                </dd>
            </dl>');
$label['shops_f2']=stripslashes('<dl>
                <dt><a href=\"#\">商铺之家</a></dt>
                <dd>
                    <div><a href=\"#\">如何申请开店</a></div>
                    <div><a href=\"#\">如何管理店铺</a></div>
                    <div><a href=\"#\">查看售出商品</a></div>
                    <div><a href=\"#\">如何发货</a></div>
                    <div><a href=\"#\">商城商品推荐</a></div>
                </dd>
            </dl>');
$label['shops_f3']=stripslashes('<dl>
                <dt><a href=\"#\">支付方式</a></dt>
                <dd>
                    <div><a href=\"#\">在线支付</a></div>
                    <div><a href=\"#\">如何注册财付通</a></div>
                    <div><a href=\"#\">如何注册贝宝</a></div>
                    <div><a href=\"#\">使用预付款购物</a></div>
                    <div><a href=\"#\">如何注册支付宝</a></div>
                </dd>
            </dl>');
$label['shops_f4']=stripslashes('<dl>
                <dt><a href=\"#\">今后服务</a></dt>
                <dd>
                    <div><a href=\"#\">如何购物评价</a></div>
                    <div><a href=\"#\">举报店主或商家</a></div>
                    <div><a href=\"#\">投诉店铺</a></div>
                    <div><a href=\"#\">如何联系卖家</a></div>
                    <div><a href=\"#\">举报申诉</a></div>
                </dd>
            </dl>');
$label['shops_f5']=stripslashes('<dl>
                <dt><a href=\"#\">客服中心</a></dt>
                <dd>
                    <div><a href=\"#\">会员修改密码</a></div>
                    <div><a href=\"#\">修改收货地址</a></div>
                    <div><a href=\"#\">商品发布规则</a></div>
                    <div><a href=\"#\">会员修改个人信息</a></div>
                </dd>
            </dl>');
$label['shops_f6']=stripslashes('<dl>
                <dt><a href=\"#\">关于我们</a></dt>
                <dd>
                    <div><a href=\"#\">关于我们</a></div>
                    <div><a href=\"#\">消费者信赖同盟消费者信赖同盟消费者信赖同盟</a></div>
                </dd>
            </dl>');
$label['shops_ad1']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141108_fefgd.gif\'  width=\'230\'  height=\'80\' border=\'0\' /></a>');
$label['shops_ad2']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141125_iaj1l.gif\'  width=\'230\'  height=\'80\' border=\'0\' /></a>');
$label['shops_ad3']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141143_r4drz.gif\'  width=\'230\'  height=\'80\' border=\'0\' /></a>');
$label['shops_ad4']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141103_rpuaq.gif\'  width=\'230\'  height=\'80\' border=\'0\' /></a>');
$label['shops_ad5']=stripslashes('	<div class=\"list\"><a href=\"#\">好宝宝幼儿园开始招生了</a><span>报名优惠</span></div>
                <div class=\"list\"><a href=\"#\">您想找个好家教吗:</a><em>010:88888888</em></div>');
$label['shops_ad6']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141126_b9tqw.gif\'  width=\'200\'  height=\'55\' border=\'0\' /></a>');
$label['shops_a_d1']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141115_ci14j.gif\'  width=\'90\'  height=\'35\' border=\'0\' /></a>');
$label['shops_a_d2']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141129_5prhy.gif\'  width=\'90\'  height=\'35\' border=\'0\' /></a>');
$label['shops_a_d3']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141110_oqdpu.gif\'  width=\'90\'  height=\'35\' border=\'0\' /></a>');
$label['shops_a_d4']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141131_k3xih.gif\'  width=\'90\'  height=\'35\' border=\'0\' /></a>');
$label['shops_a_d5']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141151_9lauy.gif\'  width=\'90\'  height=\'35\' border=\'0\' /></a>');
$label['shops_a_d6']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111151112_vin0e.gif\'  width=\'90\'  height=\'35\' border=\'0\' /></a>');
$label['shops_a_d7']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111151133_53hvd.gif\'  width=\'90\'  height=\'35\' border=\'0\' /></a>');
$label['shops_a_d8']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111151150_avkih.gif\'  width=\'90\'  height=\'35\' border=\'0\' /></a>');
$label['shops_a_d9']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111151107_s9khw.gif\'  width=\'90\'  height=\'35\' border=\'0\' /></a>');
$label['shops_a_d10']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111151123_lxocu.gif\'  width=\'90\'  height=\'35\' border=\'0\' /></a>');
$label['shops_pp2']=stripslashes('<a href=\"#\">更多...</a>');
$label['shops_pp1']=stripslashes('<a href=\"#\" class=\"sort choose\"><span>家居生活</span></a>
                <a href=\"#\" class=\"sort\"><span>电器产品</span></a>
                <a href=\"#\" class=\"sort\"><span>服装鞋帽</span></a>
                <a href=\"#\" class=\"sort\"><span>数码电子</span></a>');
$label['shops_pp0']=stripslashes('商城产品');
$label['shops_pv3']=stripslashes('商城公告');
$label['shops_pv4']=stripslashes('热销商品');
$label['shops_pcv2']=stripslashes('经商之道');
$label['shops_pcv3']=stripslashes('推荐商品');
$label['down_ad1']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111191127_zgile.jpg\'  width=\'710\'  height=\'70\' border=\'0\' /></a>');
$label['down_ad2']=stripslashes('<a href=\'http://www.1gftp.com/\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111191154_ykdyp.jpg\'  width=\'270\'  height=\'70\' border=\'0\' /></a>');
$label['down_ad3']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111191142_bnynf.gif\'  width=\'710\'  height=\'90\' border=\'0\' /></a>');
$label['down_ad4']=stripslashes('<a href=\'http://www.zwidc.com/\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111191109_shrig.gif\'  width=\'270\'  height=\'90\' border=\'0\' /></a>');
$label['down_ad5']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111191153_sdera.gif\'  width=\'270\'  height=\'85\' border=\'0\' /></a>');
$label['down_c4']=stripslashes('<a href=\"list.php?fid=40\" target=\"_blank\">更多..</a>');
$label['down_c3']=stripslashes('<a href=\"list.php?fid=27\" target=\"_blank\">更多..</a>');
$label['down_c2']=stripslashes('<a href=\"list.php?fid=26\" target=\"_blank\">更多..</a>');
$label['down_c1']=stripslashes('<a href=\"list.php?fid=12\" target=\"_blank\">更多..</a>');
$label['down_bv1']=stripslashes('建站软件');
$label['down_bv2']=stripslashes('装机软件');
$label['down_bv3']=stripslashes('办公软件');
$label['down_bv4']=stripslashes('杀毒软件');
$label['down_a4']=stripslashes('最新更新');
$label['down_a3']=stripslashes('今日榜单');
$label['down_a2']=stripslashes('网友推荐');
$label['down_a1']=stripslashes('装机推荐');
$label['down_d2']=stripslashes('热门推荐软件');
$label['down_dp2']=stripslashes('<a href=\"#\">最新源码</a>');
$label['down_t3v']=stripslashes('<div>今日更新软件:<span>5</span>款 驱动更新:<span>1</span>款</div>
                <div>软件总下载量:<em>651</em>次 今日下载量:<em>103</em>次</div>');
?>