<?php
$haveCache=1;
$label['head_guides']=stripslashes('      <div class=\"ico_guide bbs\"><a href=\"http://www1.ddecshop.com/bbs/\" target=\'_blank\'>����</a></div>
	  <div class=\"ico_guide post\"><a href=\"http://www1.ddecshop.com/do/post.php\">Ͷ��</a></div>
	  <div class=\"ico_guide sell\"><a href=\"http://www1.ddecshop.com/do/buymoneycard.php?paytype=yeepay\">��ֵ</a></div>
	  <div class=\"ico_guide jf\"><a href=\"http://www1.ddecshop.com/do/jf.php\">����</a></div>
	  <div class=\"ico_guide user\"><a href=\"http://www1.ddecshop.com/do/list_form.php?mid=2\">��Ƹ</a></div>
	  <div class=\"ico_guide search\"><a href=\"http://www1.ddecshop.com/do/search.php\">����</a></div>
	  <div class=\"ico_guide book\"><a href=\"http://www1.ddecshop.com/do/guestbook.php\">����</a></div>
	  <div class=\"ico_guide digg\"><a href=\"http://www1.ddecshop.com/do/listsp.php?fid=1\">ר��</a></div>');
$label['head_search']=stripslashes('<a href=\"http://www1.ddecshop.com/do/search.php?keyword=�벩CMS\" class=\"b\">�벩CMS</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=ע������\" target=\"_blank\">ע������</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=CEO\" target=\"_blank\">CEO</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=Դ������\" target=\"_blank\">Դ������</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=IT��Ѷ\" target=\"_blank\">IT��Ѷ</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=�����ռ�\" target=\"_blank\">�����ռ�</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=��վ�ֲ�\" class=\"b\" target=\"_blank\">��վ�ֲ�</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=��̳����\" target=\"_blank\">��̳����</a> 
        <a href=\"http://www1.ddecshop.com/do/search.php?keyword=������ѯ\" class=\"b\" target=\"_blank\">������ѯ</a>');
$label['list_page_topad']=stripslashes('<SCRIPT LANGUAGE=\'JavaScript\' src=\'http://www1.ddecshop.com/do/a_d_s.php?job=js&ad_id=list_page_topad\'></SCRIPT>');
$label['article_list']=stripslashes('<SCRIPT LANGUAGE=\'JavaScript\' src=\'http://www1.ddecshop.com/do/a_d_s.php?job=js&ad_id=article_list\'> </SCRIPT>');
$label['article_list_tag']=stripslashes('���λ');
$label['bbsifmark_tag']=stripslashes('��̳������');
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
$label['new_tt2']=stripslashes('<a href=\"#\">����...</a>');
$label['new_tt1']=stripslashes('�Ƽ��Ķ�');
$label['new_tt3']=stripslashes('<a href=\"#\">����...</a>');
$label['new_tt4']=stripslashes('�����Ƽ�');
$label['new_tt6']=stripslashes('<a href=\"#\">����...</a>');
$label['new_tt5']=stripslashes('�����Ƽ�');
$label['new_tt8']=stripslashes('<a href=\"#\">����...</a>');
$label['new_tt7']=stripslashes('��������');
$label['new_tt9']=stripslashes('<a href=\"#\">����...</a>');
$label['new_tt10']=stripslashes('ͼƬ����');
$label['new_tt11']=stripslashes('<a href=\"#\">����...</a>');
$label['new_tt12']=stripslashes('���۽�');
$label['new_tt13']=stripslashes('�������');
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
$label['photo_t6']=stripslashes('<a href=\"#\">����...</a>');
$label['photo_t5']=stripslashes('<a href=\"#\">����...</a>');
$label['photo_t7']=stripslashes('����ͼƬ');
$label['photo_t9']=stripslashes('�Ƽ�ͼƬ');
$label['photo_t8']=stripslashes('�������');
$label['photo_t10']=stripslashes('<a href=\"#\">����...</a>');
$label['photo_t11']=stripslashes('<a href=\"#\" class=\"sort choose\"><span>����</span></a>
                <a href=\"#\" class=\"sort\"><span>����</span></a>
                <a href=\"#\" class=\"sort\"><span>Ů��</span></a>
                <a href=\"#\" class=\"sort\"><span>����ʱ��</span></a>
                <a href=\"#\" class=\"sort\"><span>����</span></a>
                <a href=\"#\" class=\"sort\"><span>���</span></a>
                <a href=\"#\" class=\"sort\"><span>�Ļ�</span></a>
                <a href=\"#\" class=\"sort\"><span>��Ȥ</span></a>');
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
$label['video_c1']=stripslashes('<a href=\"#\">����...</a>');
$label['video_c2']=stripslashes('<a href=\"#\">����...</a>');
$label['video_c3']=stripslashes('<a href=\"#\">����...</a>');
$label['video_c5']=stripslashes('Ӱ���Ȳ�');
$label['video_c7']=stripslashes('��ѡ��Ƶ');
$label['video_c9']=stripslashes(' <a href=\"#\" class=\"sort choose\"><span>����</span></a>
                <a href=\"#\" class=\"sort\"><span>����</span></a>
                <a href=\"#\" class=\"sort\"><span>Ů��</span></a>
                <a href=\"#\" class=\"sort\"><span>����ʱ��</span></a>
                <a href=\"#\" class=\"sort\"><span>����</span></a>
                <a href=\"#\" class=\"sort\"><span>���</span></a>
                <a href=\"#\" class=\"sort\"><span>�Ļ�</span></a>
                <a href=\"#\" class=\"sort\"><span>��Ȥ</span></a>');
$label['video_c10']=stripslashes('��Ƶ����');
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
                	<dt><a href=\"list.php?fid=16\" target=\"_blank\">�����Ʒ</a></dt>
                    <dd>
                    	<div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                    </dd>
                </dl>
                <dl>
                	<dt><a href=\"list.php?fid=16\" target=\"_blank\">�����Ʒ</a></dt>
                    <dd>
                    	<div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                    </dd>
                </dl>
                <dl>
                	<dt><a href=\"list.php?fid=16\" target=\"_blank\">�����Ʒ</a></dt>
                    <dd>
                    	<div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
                        <div><a href=\"list.php?fid=16\" target=\"_blank\">��ʾ����</a></div>
						
                    </dd>
                </dl>');
$label['shops_f1']=stripslashes('<dl>
                <dt><a href=\"#\">��Ա����</a></dt>
                <dd>
                    <div><a href=\"#\">��������</a></div>
                    <div><a href=\"#\">��Ҫ��</a></div>
                    <div><a href=\"#\">�鿴�ѹ�����Ʒ</a></div>
                    <div><a href=\"#\">�������</a></div>
                    <div><a href=\"#\">���ע���Ϊ...</a></div>
                </dd>
            </dl>');
$label['shops_f2']=stripslashes('<dl>
                <dt><a href=\"#\">����֮��</a></dt>
                <dd>
                    <div><a href=\"#\">������뿪��</a></div>
                    <div><a href=\"#\">��ι������</a></div>
                    <div><a href=\"#\">�鿴�۳���Ʒ</a></div>
                    <div><a href=\"#\">��η���</a></div>
                    <div><a href=\"#\">�̳���Ʒ�Ƽ�</a></div>
                </dd>
            </dl>');
$label['shops_f3']=stripslashes('<dl>
                <dt><a href=\"#\">֧����ʽ</a></dt>
                <dd>
                    <div><a href=\"#\">����֧��</a></div>
                    <div><a href=\"#\">���ע��Ƹ�ͨ</a></div>
                    <div><a href=\"#\">���ע�ᱴ��</a></div>
                    <div><a href=\"#\">ʹ��Ԥ�����</a></div>
                    <div><a href=\"#\">���ע��֧����</a></div>
                </dd>
            </dl>');
$label['shops_f4']=stripslashes('<dl>
                <dt><a href=\"#\">������</a></dt>
                <dd>
                    <div><a href=\"#\">��ι�������</a></div>
                    <div><a href=\"#\">�ٱ��������̼�</a></div>
                    <div><a href=\"#\">Ͷ�ߵ���</a></div>
                    <div><a href=\"#\">�����ϵ����</a></div>
                    <div><a href=\"#\">�ٱ�����</a></div>
                </dd>
            </dl>');
$label['shops_f5']=stripslashes('<dl>
                <dt><a href=\"#\">�ͷ�����</a></dt>
                <dd>
                    <div><a href=\"#\">��Ա�޸�����</a></div>
                    <div><a href=\"#\">�޸��ջ���ַ</a></div>
                    <div><a href=\"#\">��Ʒ��������</a></div>
                    <div><a href=\"#\">��Ա�޸ĸ�����Ϣ</a></div>
                </dd>
            </dl>');
$label['shops_f6']=stripslashes('<dl>
                <dt><a href=\"#\">��������</a></dt>
                <dd>
                    <div><a href=\"#\">��������</a></div>
                    <div><a href=\"#\">����������ͬ������������ͬ������������ͬ��</a></div>
                </dd>
            </dl>');
$label['shops_ad1']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141108_fefgd.gif\'  width=\'230\'  height=\'80\' border=\'0\' /></a>');
$label['shops_ad2']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141125_iaj1l.gif\'  width=\'230\'  height=\'80\' border=\'0\' /></a>');
$label['shops_ad3']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141143_r4drz.gif\'  width=\'230\'  height=\'80\' border=\'0\' /></a>');
$label['shops_ad4']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111141103_rpuaq.gif\'  width=\'230\'  height=\'80\' border=\'0\' /></a>');
$label['shops_ad5']=stripslashes('	<div class=\"list\"><a href=\"#\">�ñ����׶�԰��ʼ������</a><span>�����Ż�</span></div>
                <div class=\"list\"><a href=\"#\">�����Ҹ��üҽ���:</a><em>010:88888888</em></div>');
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
$label['shops_pp2']=stripslashes('<a href=\"#\">����...</a>');
$label['shops_pp1']=stripslashes('<a href=\"#\" class=\"sort choose\"><span>�Ҿ�����</span></a>
                <a href=\"#\" class=\"sort\"><span>������Ʒ</span></a>
                <a href=\"#\" class=\"sort\"><span>��װЬñ</span></a>
                <a href=\"#\" class=\"sort\"><span>�������</span></a>');
$label['shops_pp0']=stripslashes('�̳ǲ�Ʒ');
$label['shops_pv3']=stripslashes('�̳ǹ���');
$label['shops_pv4']=stripslashes('������Ʒ');
$label['shops_pcv2']=stripslashes('����֮��');
$label['shops_pcv3']=stripslashes('�Ƽ���Ʒ');
$label['down_ad1']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111191127_zgile.jpg\'  width=\'710\'  height=\'70\' border=\'0\' /></a>');
$label['down_ad2']=stripslashes('<a href=\'http://www.1gftp.com/\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111191154_ykdyp.jpg\'  width=\'270\'  height=\'70\' border=\'0\' /></a>');
$label['down_ad3']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111191142_bnynf.gif\'  width=\'710\'  height=\'90\' border=\'0\' /></a>');
$label['down_ad4']=stripslashes('<a href=\'http://www.zwidc.com/\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111191109_shrig.gif\'  width=\'270\'  height=\'90\' border=\'0\' /></a>');
$label['down_ad5']=stripslashes('<a href=\'#\' target=_blank><img src=\'http://www1.ddecshop.com/upload_files/label/1_20101111191153_sdera.gif\'  width=\'270\'  height=\'85\' border=\'0\' /></a>');
$label['down_c4']=stripslashes('<a href=\"list.php?fid=40\" target=\"_blank\">����..</a>');
$label['down_c3']=stripslashes('<a href=\"list.php?fid=27\" target=\"_blank\">����..</a>');
$label['down_c2']=stripslashes('<a href=\"list.php?fid=26\" target=\"_blank\">����..</a>');
$label['down_c1']=stripslashes('<a href=\"list.php?fid=12\" target=\"_blank\">����..</a>');
$label['down_bv1']=stripslashes('��վ���');
$label['down_bv2']=stripslashes('װ�����');
$label['down_bv3']=stripslashes('�칫���');
$label['down_bv4']=stripslashes('ɱ�����');
$label['down_a4']=stripslashes('���¸���');
$label['down_a3']=stripslashes('���հ�');
$label['down_a2']=stripslashes('�����Ƽ�');
$label['down_a1']=stripslashes('װ���Ƽ�');
$label['down_d2']=stripslashes('�����Ƽ����');
$label['down_dp2']=stripslashes('<a href=\"#\">����Դ��</a>');
$label['down_t3v']=stripslashes('<div>���ո������:<span>5</span>�� ��������:<span>1</span>��</div>
                <div>�����������:<em>651</em>�� ����������:<em>103</em>��</div>');
?>