/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50132
Source Host           : localhost:3306
Source Database       : qb_table

Target Server Type    : MYSQL
Target Server Version : 50132
File Encoding         : 65001

Date: 2013-11-06 17:14:11
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `qb_article_content_108`
-- ----------------------------
DROP TABLE IF EXISTS `qb_article_content_108`;
CREATE TABLE `qb_article_content_108` (
  `id` mediumint(7) NOT NULL AUTO_INCREMENT,
  `aid` int(10) NOT NULL DEFAULT '0',
  `rid` mediumint(7) NOT NULL DEFAULT '0',
  `fid` mediumint(7) NOT NULL DEFAULT '0',
  `uid` mediumint(7) NOT NULL DEFAULT '0',
  `my_content` mediumtext NOT NULL,
  `xh_yzx` mediumtext NOT NULL,
  `xh_yzx2` mediumtext NOT NULL,
  `wxcc_d` mediumtext NOT NULL,
  `wxcc_d2` mediumtext NOT NULL,
  `wxcc_b` mediumtext NOT NULL,
  `wxcc_rsmin` mediumtext NOT NULL,
  `jbfh_d` mediumtext NOT NULL,
  `jbfh_j` mediumtext NOT NULL,
  `zhongliang` mediumtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `uid` (`uid`),
  KEY `aid` (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of qb_article_content_108
-- ----------------------------
INSERT INTO `qb_article_content_108` VALUES ('1', '716', '781', '65', '1', '', 'C2205TN9', 'C2205KTN9', '25', '50', '100', '120', '5000', '6000', '');
