<?php
	session_start();
	// 注销当前会话
	unset($_SESSION['user']);  // 删除单个数据
	$_SESSION=[];              // 删除所有数据
	session_destroy();			// 结束当前对话
	echo "注销成功！";
?>