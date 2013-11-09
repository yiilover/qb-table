<?php
require("../../inc/header.php");

/*
		SoftName : EmpireBak Version 2010
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

DoSetDbChar('latin1');
E_D("DROP TABLE IF EXISTS `qb_regnum`;");
E_C("CREATE TABLE `qb_regnum` (
  `sid` varchar(8) COLLATE latin1_bin NOT NULL DEFAULT '',
  `num` varchar(6) COLLATE latin1_bin NOT NULL DEFAULT '',
  `posttime` int(10) NOT NULL DEFAULT '0',
  UNIQUE KEY `sid` (`sid`),
  KEY `posttime` (`num`,`posttime`)
) ENGINE=MEMORY DEFAULT CHARSET=latin1 COLLATE=latin1_bin");

require("../../inc/footer.php");
?>