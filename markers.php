<?php
	include "sidebar.html";
?>

<!DOCTYPE html>
<html>
<head>
	<title>Coffee Shop in Cikarang With API GMAPS</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/googlemap.js"></script>
	<style type="text/css">
		html,body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background-color: #2C3333;
		}

		.container {
			width: 100%;
			height: 100%;
			margin-left: 170px;
		}

		.content {
			width: 100%;
			height: 743px;
		}
		
		h1 {
			text-align: center;
		}

		p {
			color: black;
		}

		#map {
			width: 1335px;
			height: 100%;
			border: 1px solid blue;
		}
		#data, #allData {
			display: none;
		}
		#button-container {
			position: absolute;
			right: 0;
			padding: 10px;
		}
		.btn-distance {
			background-color: #007bff;
			color: #fff;
			border-radius: 50%;
			width: 70px;
			height: 70px;
			border: none;
			outline: none;
			box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 25px;
			cursor: pointer;
			transition: all 0.3s ease;
		}
		.btn-distance:hover {
			transform: scale(1.1);
			box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
		}
	</style>
</head>
<body>
<?php
    include 'header.php'; 
?>
	<div class="container">
		<div class="content">
			<?php 
				require 'coffeeshop.php';
				$edu = new coffeeshop;
				$coll = $edu->getCoffeeShopBlankLatLng();
				$coll = json_encode($coll, true);
				echo '<div id="data">' . $coll . '</div>';

				$allData = $edu->getAllCoffeeShop();
				$allData = json_encode($allData, true);
				echo '<div id="allData">' . $allData . '</div>';
			?>	
			<div id="map"></div>
			<div id="button-container">
				<a href="distance.php"><button class="btn-distance"><i class="fas fa-route"></i></button></a>
			</div>
		</div>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
<?php
    include 'footer.php'; 
?>
</body>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDm9YngpC9CohMR-w4YPIcXdbLC8q5zLtY&callback=loadMap">
</script>
</html>