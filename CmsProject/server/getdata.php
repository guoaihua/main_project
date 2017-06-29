<?php
	//连接数据库
	include('./conn.php'); 
	// 选择数据库
	$page=$_POST['p'];
	mysql_select_db("cms");
	// 设置编码
	mysql_query('set names utf-8');
	$sql = "SELECT * FROM data LIMIT ". ($page-1)*10 .", 10";
	$result=mysql_query($sql);
	// 建立空数组保存数据
	$data=array();
	// 遍历结果并赋值给$data
	while ($row=mysql_fetch_assoc($result)) {
		array_push($data, $row);
	};


	// 将数组转变为json格式数据发送
	echo json_encode($data,JSON_UNESCAPED_UNICODE);

?>