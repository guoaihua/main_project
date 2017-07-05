<?php
include('./conn.php');
mysql_select_db('cms');
mysql_query('set names utf8');

$name=$_POST['name'];
$password=$_POST['password'];
$qq=$_POST['qq'];
$moblie=$_POST['mobile'];

$sql="INSERT INTO user (id,name,password,qq,phone)VALUES(null,'$name','$password','$qq','$moblie')";
 $result=mysql_query($sql)or die(mysql_error());
 if($result){
 		echo "1";
 }else{
 	echo "2";
 }

?>