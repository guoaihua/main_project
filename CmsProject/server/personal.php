<?php
	//连接数据库
	include('./conn.php'); 
	// 选择数据库
	mysql_select_db("cms");
	// 设置编码
	$name=$_POST['name'];
	$sql = "SELECT * FROM user WHERE name='$name'";
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