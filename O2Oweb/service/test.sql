-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 06 月 04 日 15:17
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

-- --------------------------------------------------------

--
-- 表的结构 `usermanagement`
--

CREATE TABLE IF NOT EXISTS `usermanagement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `loginname` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `username` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `place` varchar(50) NOT NULL,
  `phonenumber` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `usermanagement`
--

INSERT INTO `usermanagement` (`id`, `loginname`, `password`, `username`, `email`, `place`, `phonenumber`) VALUES
(1, '郭爱华', '308232015', '再见时光', '', '', '13100695760'),
(2, 'hua', '0', '华', 'email', 'place', 'phonenumber'),
(3, '小', 'gah123', '颜', 'email', 'place', 'phonenumber'),
(4, 'hua', 'asda', '阿达洒', 'email', 'place', 'phonenumber'),
(5, '霞', 'AS', '小', 'email', 'place', 'phonenumber'),
(6, '', '', '', '萨芬撒', '阿达洒', ''),
(7, '凤', '32112', '琴', 'adsa', '很远', '13100899089'),
(8, '郭', '123', '过', '', '', '12313131312');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
