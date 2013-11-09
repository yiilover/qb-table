<?php
require(dirname(__FILE__)."/"."global.php");
require_once(ROOT_PATH."inc/class.inc.php");
$Guidedb=new Guide_DB;
$Guidedb->mid=$mid;
$rows=20;

if($page<1)
{
	$page=1;
}
$min=($page-1)*$rows;
$models = isset($_GET[models])?intval($_GET[models]):'';

$minaperture = isset($_GET[minaperture])?intval($_GET[minaperture]):0;
$maxaperture = isset($_GET[maxaperture])?intval($_GET[maxaperture]):0;	
$mindiameter = isset($_GET[mindiameter])?intval($_GET[mindiameter]):0;
$maxdiameter = isset($_GET[maxdiameter])?intval($_GET[maxdiameter]):0;	
$minwidth = isset($_GET[minwidth])?intval($_GET[minwidth]):0;
$maxwidth = isset($_GET[maxwidth])?intval($_GET[maxwidth]):0;
$p = " WHERE 1=1";
$minaperture && $p .= " AND wxcc_d>={$minaperture}";
$maxaperture &&	$p .= " AND wxcc_d<={$maxaperture}";
$mindiameter && $p .= " AND wxcc_d2>={$minaperture}";
$maxdiameter &&	$p .= " AND wxcc_d2<={$maxaperture}";
//$minwidth && $p .= " AND wxcc_b>={$minwidth}";
//$maxwidth && $p .= " AND wxcc_b<={$maxwidth}";
$select = "aid,fid,wxcc_d,wxcc_d2";
$type1 = array(106,108,118,119);
$type2 = array(107,109,110,111,112,113,114,115,116,117);
$sql="";
for($i=106;$i<=119;$i++){
	if($i>106) $sql .= " UNION ";
	if($models){
		if(in_array($i,$type1)){				
			$sql .= "SELECT {$select} FROM {$pre}article_content_{$i} {$p} AND (xh_yzx LIKE '%$models%' OR xh_yzx2 LIKE '%$models%')";				
		}else{
			$sql .= "SELECT {$select} FROM {$pre}article_content_{$i} {$p} AND xinghao LIKE '%$models%' ";
		}			
	}else{
		if(in_array($i,$type1)){				
			$sql .= "SELECT {$select} FROM {$pre}article_content_{$i} {$p}";				
		}else{
			$sql .= "SELECT {$select} FROM {$pre}article_content_{$i} {$p}";
		}			
	}	
}
$sql .= " LIMIT $min,$rows";
	

//echo $sql;
//die;
$query = $db->query($sql);
while($rs = $db->fetch_array($query))
{
	$rs[url]="$webdb[www_url]$webdb[path]/bencandy.php?fid=$rs[fid]&id=$rs[aid]";
	$arr = $db->get_one("SELECT title FROM {$pre}article WHERE aid=".$rs[aid]);
	$title = $arr[title];
	$rs[title] = $title;
	$listdb[] = $rs;
}

if(!$listdb)
{
	showerr("很抱歉,没有找到你要查询的内容");
}
//print_r($listdb);
//die;


//$showpage=getpage("{$pre}article$erp A LEFT JOIN {$pre}reply B ON A.aid=B.aid $_moduleSql","WHERE $SQL $_SQL","search.php?fid=$fid&type=$type&$search_url&keyword=".urlencode($_POST[keyword]).urlencode($_GET[keyword])."",$rows);




require(ROOT_PATH."inc/head.php");
require(html("search_free"));
require(ROOT_PATH."inc/foot.php");



/*栏目列表 取决模型相关栏目*/
function list_allsort($fid,$Class,$ckfid,$fmid="0"){
	global $db,$pre,$listdb;
	$Class++;
	if(!$fmid){
	$query=$db->query("SELECT * FROM {$pre}sort WHERE fup='$fid' ORDER BY list DESC");
	}else{
	$query=$db->query("SELECT * FROM {$pre}sort WHERE fup='$fid' AND fmid ='$fmid'ORDER BY list DESC");
	}
	while( $rs=$db->fetch_array($query) ){
		$icon="";
		for($i=1;$i<$Class;$i++){
			$icon.="&nbsp;|&nbsp;&nbsp;";
		}
 		if($icon){
			$icon=substr($icon,0,-12);
			$icon.="--";
		}
 		if($rs[type]){
			$fid_select.="<option value='-1' style='color:red;'>$icon$rs[name]</option>";
 		}else{
 			$ckk=$ckfid==$rs[fid]?' selected ':' ';
			$fid_select.="<option value='$rs[fid]' $ckk>$icon$rs[name]</option>";
 		}
		$fid_select.=list_allsort($rs[fid],$Class,$ckfid);
	}
	return $fid_select;
}
?>