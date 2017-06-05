<?php
include('./conn.php');
mysql_select_db('test');   
mysql_query('set names utf8'); // 设置数据库通信编码

$loginname=$_POST['loginname'];
$password=$_POST['loginpassword'];
$username=$_POST['username'];
echo $_POST['email'].$_POST['place'];
$email=$_POST['email'];
$place=$_POST['place'];
$phonenumber=$_POST['phonenumber'];

$sql="INSERT INTO usermanagement (id,loginname,password,username,email,place,phonenumber)VALUES(null,'$loginname','$password','$username','$email','$place','$phonenumber')";
 mysql_query($sql)or die(mysql_error());

 echo '添加成功';

?>