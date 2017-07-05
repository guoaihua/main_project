<?php
	include('./conn.php');
	mysql_select_db('cms');
	mysql_query('set names utf8');

	$user=$_POST['user'];
	$password=$_POST['password'];
	$sql="SELECT * FROM user WHERE name='$user' and password='$password'"; 	
	$result=mysql_query($sql)or die(mysql_error());
	if ($row=mysql_fetch_assoc($result)) {
		session_start();
		$_SESSION['user']=$row['name'];
		echo "1";
	}else{
		echo "2";
	}

?>	