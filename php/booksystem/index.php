

<?php 
	include('./conn.php');
	mysql_select_db('test_a');
	mysql_query('set names utf8'); // 设置数据库通信编码
	$sql='select * from booksystem';
	$result=mysql_query($sql);
	$data=array();
	
/*	if($result){
		while($row=mysql_fetch_assoc($result)) {
			$data=$row;
			echo $data["bookName"][1];
		}
	}*/

 ?>

<!DOCTYPE html>
<html>
<head>
	<title>书店</title>
	<meta charset="utf-8">
	<style>
		*{margin: 0}
		body,html{
			width: 100%;
			height: 100%;
		}
		.wrap {
			width: 80%;
			margin: 0 auto;
			text-align: center;
		}
		.header {
			font-size: 20px;
			font-family: "宋体";
			margin:20px 0 20px 0; 
		}
		.container ul {
			list-style: none;
			width: 50%;
			margin: 0 auto; 
		}
		.container ul li{
			float: left;
			width: 33%;
		}
		.container ul li a{
			color: black;
			text-decoration: none;
		}
		.clear {
			clear: both;
		}
		.showbook {
			border: 1px solid black;
			text-align: center;
			margin: 20px  auto;
			width: 30%;
		}
		.showbook table {
			width: 100%;
		}
	</style>
</head>
<body>
	<div class="wrap">
		<div class="header">
			<h1 >网上书店</h1>
		</div>	
		<div class="container">

			<ul>
				<li> <a href="#">首页</a></li>
				<li> <a href="./add.php">添加图书</a> </li>
				<li> <a href="./del.php">删除图书</a> </li>
			</ul>
			<div class="clear showbook">
				<table>
					<tr>
						<td>书籍名称</td>
						<td>书籍作者</td>
						<td>书籍类型</td>
						<td>书籍价格</td>
					</tr>
					<?php while($row=mysql_fetch_assoc($result)) {?>
						<tr>
							<td> <?php echo $row["bookName"]; ?> </td>
							<td> <?php echo $row["bookAuthor"];?> </td>
							<td> <?php echo  $row["bookType"];?> </td>
							<td> <?php echo  $row["bookPrice"];?> </td>
						</tr>
					<?php }?>
				</table>
			</div>	
		</div>

	</div>

</body>
</html>
<?php mysql_free_result($result) ?>