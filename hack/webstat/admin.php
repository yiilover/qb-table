<?php
!function_exists('html') && exit('ERR');
$listdb = array();
if($job=='list'&&$Apower[webstat])
{
	//����
	$today = date('d');
	//����
	$yestoday = mk_time(0,0,0,date('m'),date('d')-1, date('Y'));
	$yestoday = date('d',$yestoday);
	//������
	$week = date('W');
	//�ϸ����
	$lastweek = $week-1;
	//�����
	$month = date('m');
	//�ϸ���
	$lastmonth = mk_time(0,0,0,date('m')-1,date('d'), date('Y'));
	$lastmonth = date('m',$lastmonth);
	//����
	$year = date('Y');
	//ȥ��
	$lastyear = mk_time(0,0,0,date('m'),date('d'), date('Y')-1);
	$lastyear = date('Y',$lastyear);
	/********************************���¼�¼ͳ��*********************************************/
	//����ͳ��
	$article_today = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid = 0 AND FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$today}{$month}{$year}");
	$listdb[article_today] = $db->num_rows($article_today);
	//����ͳ��
	$article_yestoday = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=0 AND FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$yestoday}{$month}{$year}");
	$listdb[article_yestoday] = $db->num_rows($article_yestoday);
	//������ͳ��
	$article_week = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=0 AND FROM_UNIXTIME( posttime, '%u%Y' ) = {$week}{$year}");
	$listdb[article_week] = $db->num_rows($article_week);
	//�ϸ����ͳ��
	$article_lweek = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=0 AND FROM_UNIXTIME( posttime, '%u%Y' ) = {$lastweek}{$year}");
	$listdb[article_lweek] = $db->num_rows($article_lweek);
	//�����ͳ��
	$article_month = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=0 AND FROM_UNIXTIME( posttime, '%m%Y' ) = {$month}{$year}");
	$listdb[article_month] = $db->num_rows($article_month);
	//�ϸ���ͳ��
	$article_lmonth = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=0 AND FROM_UNIXTIME( posttime, '%m%Y' ) = {$lastmonth}{$year}");
	$listdb[article_lmonth] = $db->num_rows($article_lmonth);
	//����ͳ��
	$article_year = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=0 AND FROM_UNIXTIME( posttime, '%Y' ) = {$year}");
	$listdb[article_year] = $db->num_rows($article_year);
	//ȥ��ͳ��
	$article_lyear = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=0 AND FROM_UNIXTIME( posttime, '%Y' ) = {$lastyear}");
	$listdb[article_lyear] = $db->num_rows($article_lyear);
	//�ܼ�
	$listdb[article_total] = $listdb[article_year] + $listdb[article_lyear];
	/********************************ͼƬ��¼ͳ��*********************************************/
	//����ͳ��
	$tupian_today = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid = 100 AND FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$today}{$month}{$year}");
	$listdb[tupian_today] = $db->num_rows($tupian_today);
	//����ͳ��
	$tupian_yestoday = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=100 AND FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$yestoday}{$month}{$year}");
	$listdb[tupian_yestoday] = $db->num_rows($tupian_yestoday);
	//������ͳ��
	$tupian_week = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=100 AND FROM_UNIXTIME( posttime, '%u%Y' ) = {$week}{$year}");
	$listdb[tupian_week] = $db->num_rows($tupian_week);
	//�ϸ����ͳ��
	$tupian_lweek = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=100 AND FROM_UNIXTIME( posttime, '%u%Y' ) = {$lastweek}{$year}");
	$listdb[tupian_lweek] = $db->num_rows($tupian_lweek);
	//�����ͳ��
	$tupian_month = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=100 AND FROM_UNIXTIME( posttime, '%m%Y' ) = {$month}{$year}");
	$listdb[tupian_month] = $db->num_rows($tupian_month);
	//�ϸ���ͳ��
	$tupian_lmonth = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=100 AND FROM_UNIXTIME( posttime, '%m%Y' ) = {$lastmonth}{$year}");
	$listdb[tupian_lmonth] = $db->num_rows($tupian_lmonth);
	//����ͳ��
	$tupian_year = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=100 AND FROM_UNIXTIME( posttime, '%Y' ) = {$year}");
	$listdb[tupian_year] = $db->num_rows($tupian_year);
	//ȥ��ͳ��
	$tupian_lyear = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=100 AND FROM_UNIXTIME( posttime, '%Y' ) = {$lastyear}");
	$listdb[tupian_lyear] = $db->num_rows($tupian_lyear);
	//�ܼ�
	$listdb[tupian_total] = $listdb[tupian_year] + $listdb[tupian_lyear];
	/********************************���ؼ�¼ͳ��*********************************************/
	//����ͳ��
	$xiazai_today = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid = 101 AND FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$today}{$month}{$year}");
	$listdb[xiazai_today] = $db->num_rows($xiazai_today);
	//����ͳ��
	$xiazai_yestoday = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=101 AND FROM_UNIXTIME( posttime, '%d%m%d' ) = {$yestoday}{$month}{$year}");
	$listdb[xiazai_yestoday] = $db->num_rows($xiazai_yestoday);
	//������ͳ��
	$xiazai_week = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=101 AND FROM_UNIXTIME( posttime, '%u%Y' ) = {$week}{$year}");
	$listdb[xiazai_week] = $db->num_rows($xiazai_week);
	//�ϸ����ͳ��
	$xiazai_lweek = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=101 AND FROM_UNIXTIME( posttime, '%u%Y' ) = {$lastweek}{$year}");
	$listdb[xiazai_lweek] = $db->num_rows($xiazai_lweek);
	//�����ͳ��
	$xiazai_month = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=101 AND FROM_UNIXTIME( posttime, '%m%Y' ) = {$month}{$year}");
	$listdb[xiazai_month] = $db->num_rows($xiazai_month);
	//�ϸ���ͳ��
	$xiazai_lmonth = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=101 AND FROM_UNIXTIME( posttime, '%m%Y' ) = {$lastmonth}{$year}");
	$listdb[xiazai_lmonth] = $db->num_rows($xiazai_lmonth);
	//����ͳ��
	$xiazai_year = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=101 AND FROM_UNIXTIME( posttime, '%Y' ) = {$year}");
	$listdb[xiazai_year] = $db->num_rows($xiazai_year);
	//ȥ��ͳ��
	$xiazai_lyear = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=101 AND FROM_UNIXTIME( posttime, '%Y' ) = {$lastyear}");
	$listdb[xiazai_lyear] = $db->num_rows($xiazai_lyear);
	//�ܼ�
	$listdb[xiazai_total] = $listdb[xiazai_year] + $listdb[xiazai_lyear];
	/********************************��Ƶ��¼ͳ��*********************************************/
	//����ͳ��
	$vedio_today = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid = 102 AND FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$today}{$month}{$year}");
	$listdb[vedio_today] = $db->num_rows($vedio_today);
	//����ͳ��
	$vedio_yestoday = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=102 AND FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$yestoday}{$month}{$year}");
	$listdb[vedio_yestoday] = $db->num_rows($vedio_yestoday);
	//������ͳ��
	$vedio_week = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=102 AND FROM_UNIXTIME( posttime, '%u%Y' ) = {$week}{$year}");
	$listdb[vedio_week] = $db->num_rows($vedio_week);
	//�ϸ����ͳ��
	$vedio_lweek = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=102 AND FROM_UNIXTIME( posttime, '%u%Y' ) = {$lastweek}{$year}");
	$listdb[vedio_lweek] = $db->num_rows($vedio_lweek);
	//�����ͳ��
	$vedio_month = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=102 AND FROM_UNIXTIME( posttime, '%m%Y' ) = {$month}{$year}");
	$listdb[vedio_month] = $db->num_rows($vedio_month);
	//�ϸ���ͳ��
	$vedio_lmonth = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=102 AND FROM_UNIXTIME( posttime, '%m%Y' ) = {$lastmonth}{$year}");
	$listdb[vedio_lmonth] = $db->num_rows($vedio_lmonth);
	//����ͳ��
	$vedio_year = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=102 AND FROM_UNIXTIME( posttime, '%Y' ) = {$year}");
	$listdb[vedio_year] = $db->num_rows($vedio_year);
	//ȥ��ͳ��
	$vedio_lyear = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=102 AND FROM_UNIXTIME( posttime, '%Y' ) = {$lastyear}");
	$listdb[vedio_lyear] = $db->num_rows($vedio_lyear);
	//�ܼ�
	$listdb[vedio_total] = $listdb[vedio_year] + $listdb[vedio_lyear];
	/********************************FLASH��¼ͳ��*******************************************/
	//����ͳ��
	$flash_today = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid = 104 AND FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$today}{$month}{$year}");
	$listdb[flash_today] = $db->num_rows($flash_today);
	//����ͳ��
	$flash_yestoday = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=104 AND FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$yestoday}{$month}{$year}");
	$listdb[flash_yestoday] = $db->num_rows($flash_yestoday);
	//������ͳ��
	$flash_week = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=104 AND FROM_UNIXTIME( posttime, '%u%Y' ) = {$week}{$year}");
	$listdb[flash_week] = $db->num_rows($flash_week);
	//�ϸ����ͳ��
	$flash_lweek = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=104 AND FROM_UNIXTIME( posttime, '%u%Y' ) = {$lastweek}{$year}");
	$listdb[flash_lweek] = $db->num_rows($flash_lweek);
	//�����ͳ��
	$flash_month = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=104 AND FROM_UNIXTIME( posttime, '%m%Y' ) = {$month}{$year}");
	$listdb[flash_month] = $db->num_rows($flash_month);
	//�ϸ���ͳ��
	$flash_lmonth = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=104 AND FROM_UNIXTIME( posttime, '%m%Y' ) = {$lastmonth}{$year}");
	$listdb[flash_lmonth] = $db->num_rows($flash_lmonth);
	//����ͳ��
	$flash_year = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=104 AND FROM_UNIXTIME( posttime, '%Y' ) = {$year}");
	$listdb[flash_year] = $db->num_rows($flash_year);
	//ȥ��ͳ��
	$flash_lyear = $db->query("SELECT * 
		FROM {$pre}article
		WHERE mid=104 AND FROM_UNIXTIME( posttime, '%Y' ) = {$lastyear}");
	$listdb[flash_lyear] = $db->num_rows($flash_lyear);
	//�ܼ�
	$listdb[flash_total] = $listdb[flash_year] + $listdb[flash_lyear];
	/********************************���ۼ�¼ͳ��********************************************/
	//����ͳ��
	$comment_today = $db->query("SELECT * 
		FROM {$pre}comment
		WHERE FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$today}{$month}{$year}");
	$listdb[comment_today] = $db->num_rows($comment_today);
	//����ͳ��
	$comment_yestoday = $db->query("SELECT * 
		FROM {$pre}comment
		WHERE FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$yestoday}{$month}{$year}");
	$listdb[comment_yestoday] = $db->num_rows($comment_yestoday);
	//������ͳ��
	$comment_week = $db->query("SELECT * 
		FROM {$pre}comment
		WHERE FROM_UNIXTIME( posttime, '%u%Y' ) = {$week}{$year}");
	$listdb[comment_week] = $db->num_rows($comment_week);
	//�ϸ����ͳ��
	$comment_lweek = $db->query("SELECT * 
		FROM {$pre}comment
		WHERE FROM_UNIXTIME( posttime, '%u%Y' ) = {$lastweek}{$year}");
	$listdb[comment_lweek] = $db->num_rows($comment_lweek);
	//�����ͳ��
	$comment_month = $db->query("SELECT * 
		FROM {$pre}comment
		WHERE FROM_UNIXTIME( posttime, '%m%Y' ) = {$month}{$year}");
	$listdb[comment_month] = $db->num_rows($comment_month);
	//�ϸ���ͳ��
	$comment_lmonth = $db->query("SELECT * 
		FROM {$pre}comment
		WHERE FROM_UNIXTIME( posttime, '%m%Y' ) = {$lastmonth}{$year}");
	$listdb[comment_lmonth] = $db->num_rows($comment_lmonth);
	//����ͳ��
	$comment_year = $db->query("SELECT * 
		FROM {$pre}comment
		WHERE FROM_UNIXTIME( posttime, '%Y' ) = {$year}");
	$listdb[comment_year] = $db->num_rows($comment_year);
	//ȥ��ͳ��
	$comment_lyear = $db->query("SELECT * 
		FROM {$pre}comment
		WHERE FROM_UNIXTIME( posttime, '%Y' ) = {$lastyear}");
	$listdb[comment_lyear] = $db->num_rows($comment_lyear);
	//�ܼ�
	$listdb[comment_total] = $listdb[comment_year] + $listdb[comment_lyear];
	/********************************�ٱ���¼ͳ��*********************************************/
	//����ͳ��
	$report_today = $db->query("SELECT * 
		FROM {$pre}report
		WHERE FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$today}{$month}{$year}");
	$listdb[report_today] = $db->num_rows($report_today);
	//����ͳ��
	$report_yestoday = $db->query("SELECT * 
		FROM {$pre}report
		WHERE FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$yestoday}{$month}{$year}");
	$listdb[report_yestoday] = $db->num_rows($report_yestoday);
	//������ͳ��
	$report_week = $db->query("SELECT * 
		FROM {$pre}report
		WHERE FROM_UNIXTIME( posttime, '%u%Y' ) = {$week}{$year}");
	$listdb[report_week] = $db->num_rows($report_week);
	//�ϸ����ͳ��
	$report_lweek = $db->query("SELECT * 
		FROM {$pre}report
		WHERE FROM_UNIXTIME( posttime, '%u%Y' ) = {$lastweek}{$year}");
	$listdb[report_lweek] = $db->num_rows($report_lweek);
	//�����ͳ��
	$report_month = $db->query("SELECT * 
		FROM {$pre}report
		WHERE FROM_UNIXTIME( posttime, '%m%Y' ) = {$month}{$year}");
	$listdb[report_month] = $db->num_rows($report_month);
	//�ϸ���ͳ��
	$report_lmonth = $db->query("SELECT * 
		FROM {$pre}report
		WHERE FROM_UNIXTIME( posttime, '%m%Y' ) = {$lastmonth}{$year}");
	$listdb[report_lmonth] = $db->num_rows($report_lmonth);
	//����ͳ��
	$report_year = $db->query("SELECT * 
		FROM {$pre}report
		WHERE FROM_UNIXTIME( posttime, '%Y' ) = {$year}");
	$listdb[report_year] = $db->num_rows($report_year);
	//ȥ��ͳ��
	$report_lyear = $db->query("SELECT * 
		FROM {$pre}report
		WHERE FROM_UNIXTIME( posttime, '%Y' ) = {$lastyear}");
	$listdb[report_lyear] = $db->num_rows($report_lyear);
	//�ܼ�
	$listdb[report_total] = $listdb[report_year] + $listdb[report_lyear];
	/********************************�ƹ��¼ͳ��*********************************************/
	//����ͳ��
	$propagandize_today = $db->query("SELECT * 
		FROM {$pre}propagandize
		WHERE FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$today}{$month}{$year}");
	$listdb[propagandize_today] = $db->num_rows($propagandize_today);
	//����ͳ��
	$propagandize_yestoday = $db->query("SELECT * 
		FROM {$pre}propagandize
		WHERE FROM_UNIXTIME( posttime, '%d%m%Y' ) = {$yestoday}{$month}{$year}");
	$listdb[propagandize_yestoday] = $db->num_rows($propagandize_yestoday);
	//������ͳ��
	$propagandize_week = $db->query("SELECT * 
		FROM {$pre}propagandize
		WHERE FROM_UNIXTIME( posttime, '%u%Y' ) = {$week}{$year}");
	$listdb[propagandize_week] = $db->num_rows($propagandize_week);
	//�ϸ����ͳ��
	$propagandize_lweek = $db->query("SELECT * 
		FROM {$pre}propagandize
		WHERE FROM_UNIXTIME( posttime, '%u%Y' ) = {$lastweek}{$year}");
	$listdb[propagandize_lweek] = $db->num_rows($propagandize_lweek);
	//�����ͳ��
	$propagandize_month = $db->query("SELECT * 
		FROM {$pre}propagandize
		WHERE FROM_UNIXTIME( posttime, '%m%Y' ) = {$month}{$year}");
	$listdb[propagandize_month] = $db->num_rows($propagandize_month);
	//�ϸ���ͳ��
	$propagandize_lmonth = $db->query("SELECT * 
		FROM {$pre}propagandize
		WHERE FROM_UNIXTIME( posttime, '%m%Y' ) = {$lastmonth}{$year}");
	$listdb[propagandize_lmonth] = $db->num_rows($propagandize_lmonth);
	//����ͳ��
	$propagandize_year = $db->query("SELECT * 
		FROM {$pre}propagandize
		WHERE FROM_UNIXTIME( posttime, '%Y' ) = {$year}");
	$listdb[propagandize_year] = $db->num_rows($propagandize_year);
	//ȥ��ͳ��
	$propagandize_lyear = $db->query("SELECT * 
		FROM {$pre}propagandize
		WHERE FROM_UNIXTIME( posttime, '%Y' ) = {$lastyear}");
	$listdb[propagandize_lyear] = $db->num_rows($propagandize_lyear);
	//�ܼ�
	$listdb[propagandize_total] = $listdb[propagandize_year] + $listdb[propagandize_year];
	/********************************��Ա��¼ͳ��*********************************************/
	//����ͳ��
	$member_today = $db->query("SELECT * 
		FROM {$pre}memberdata
		WHERE FROM_UNIXTIME( regdate, '%d%m%Y' ) = {$today}{$month}{$year}");
	$listdb[member_today] = $db->num_rows($member_today);
	//����ͳ��
	$member_yestoday = $db->query("SELECT * 
		FROM {$pre}memberdata
		WHERE FROM_UNIXTIME( regdate, '%d%m%Y' ) = {$yestoday}{$month}{$year}");
	$listdb[member_yestoday] = $db->num_rows($member_yestoday);
	//������ͳ��
	$member_week = $db->query("SELECT * 
		FROM {$pre}memberdata
		WHERE FROM_UNIXTIME( regdate, '%u%Y' ) = {$week}{$year}");
	$listdb[member_week] = $db->num_rows($member_week);
	//�ϸ����ͳ��
	$member_lweek = $db->query("SELECT * 
		FROM {$pre}memberdata
		WHERE FROM_UNIXTIME( regdate, '%u%Y' ) = {$lastweek}{$year}");
	$listdb[member_lweek] = $db->num_rows($member_lweek);
	//�����ͳ��
	$member_month = $db->query("SELECT * 
		FROM {$pre}memberdata
		WHERE FROM_UNIXTIME( regdate, '%m%Y' ) = {$month}{$year}");
	$listdb[member_month] = $db->num_rows($member_month);
	//�ϸ���ͳ��
	$member_lmonth = $db->query("SELECT * 
		FROM {$pre}memberdata
		WHERE FROM_UNIXTIME( regdate, '%m%Y' ) = {$lastmonth}{$year}");
	$listdb[member_lmonth] = $db->num_rows($member_lmonth);
	//����ͳ��
	$member_year = $db->query("SELECT * 
		FROM {$pre}memberdata
		WHERE FROM_UNIXTIME( regdate, '%Y' ) = {$year}");
	$listdb[member_year] = $db->num_rows($member_year);
	//ȥ��ͳ��
	$member_lyear = $db->query("SELECT * 
		FROM {$pre}memberdata
		WHERE FROM_UNIXTIME( regdate, '%Y' ) = {$lastyear}");
	$listdb[member_lyear] = $db->num_rows($member_lyear);
	//�ܼ�
	$listdb[member_total] = $listdb[member_year] + $listdb[member_lyear];
	
	hack_admin_tpl('list');
}
?>