<?php
	include('./conn.php');
	mysql_select_db('cms');
	mysql_query('set names utf8');
	$id=$_POST['id'];
	$sql="SELECT * FROM data WHERE id='$id'";
	$result=mysql_query($sql);
	$data=array();
	while ($row=mysql_fetch_assoc($result)) {
			array_push($data,$row);
	}
	echo json_encode($data,JSON_UNESCAPED_UNICODE); 
?>