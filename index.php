<?php
	include "sidebar.html";
?>

<!DOCTYPE html>
<html>
<head>
	<title>Coffee Shop in Cikarang With API GMAPS</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/googlemap.js"></script>
	<style type="text/css">
		html,body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background-color: #F1F6F9;
		}

		.container {
			margin-left: 141px;
		}

		.content {
			display: inline-block;
			width: 100%;
			max-width: 1200px;
			height: 450px;
		}
		
		h1 {
			text-align: center;
		}

		#map {
			width: 1390px;
			height: 100%;
			border: 1px solid blue;
		}
		#data, #allData {
			display: none;
		}
		#button-container {
			position: absolute;
			bottom: 0;
			right: 0;
			padding: 10px;
		}
		.btn-distance {
			background-color: #007bff;
			color: #fff;
			border-radius: 50%;
			width: 50px;
			height: 50px;
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
	<div class="container">
		<div class="content">
			<h1>Coffee Shop in Cikarang</h1>
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
</body>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDm9YngpC9CohMR-w4YPIcXdbLC8q5zLtY&callback=loadMap">
</script>
</html>