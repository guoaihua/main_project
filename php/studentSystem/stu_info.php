<?php
	$name='王小六';
	$birth='1995-05-31';
	$subject='PHP';
	$snum='0150427001';
?>
<!doctype html>
<!DOCTYPE html>
<html>
<head>
	<title>学生资料展示卡</title>
	<meta charset="utf-8">
</head>
<style>
	.card {
		margin: 0 auto;
		border: 1px solid black;
		background-color: lightgreen;
	}
</style>
<body>
	<table class="card">
		<tr><th>学生资料展示卡</th></tr>
		<tr><td>姓 名:</td><td><?php echo $name; ?></td></tr>
		<tr><td>出生日期:</td><td><?php echo $birth; ?></td></tr>
		<tr><td>学 科</td><td><?php echo $subject; ?></td></tr>
		<tr><td>学 号</td><td><?php echo $snum; ?></td></tr>
	</table>
</body>
</html>