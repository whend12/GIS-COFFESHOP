<?php
	include "sidebar.html";
?>

<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Interactive Maps With API GMAPS</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/googlemap.js"></script>
	
	<!-- Styling -->
	<style type="text/css">
		html,body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			background-color: #2C3333;
		}

		.container {
			width: 100%;
			padding: 5px;
			margin-left: 190px;
		}

		.tutorial {
			background-color: #393646;
			box-shadow: 2px 2px 3px #393646;
		}

		.tutorial-subtitle {
			color: #F79540;
		}

		.content {
			width: 100%;
			max-width: 1400px;
			height: 580px;
		}

		#map {
			width: 99%;
			height: 100%;
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
	include "header.php";
?>
	<div class="container">
		<div class="row">
			<div class="tutorial col mx-2 my-2 p-3 rounded-2">
				<h5 class="tutorial-subtitle">Current Location</h5>
					<ol class="text-white">
					<li>Click Pan to Current Location in the map section</li>
					<li>Allow Permissions</li>
					<li>You will know your current location</li>
				</ol>
				<p class="text-white"><b>Information:</b> <br> Apart from that, you can also change the appearance of wanting to see from a satellite or from a map with the features in the upper left corner of the map</p>
			</div>
			<div class="tutorial col mx-2 my-2 p-3 rounded-2">
				<h5 class="tutorial-subtitle">Coffee Shop</h5>
					<p class="text-white">
						Here you can see various Coffee Shop locations in Cikarang. You can also see a description and what time the CoffeeShop is open until closing time. Only by clicking on the red icon you can see the details.
					</p>
				</ol>
			</div>
			<div class="tutorial col mx-2 my-2 p-3 rounded-2">
				<h5 class="tutorial-subtitle">Distance</h5>
					<p class="text-white">
						This distance serves to find out the distance traveled and how long it will take from your location to your destination location
					</p>
					<ol class="text-white">
					<li>Click <b><i>"Add Destination"</i></b> in the lower right corner of the map</li>
					<li>Then a pop up appears which requires you to fill in the place or address, there you can also choose whether you want to go via 4-wheeled vehicle, bus, bicycle or on foot.</li>
					<li>After filling in your destination, you can see a blue line that shows how long it will take you from your location to your destination and also shows which way to go to your destination.</li>
				</ol>
			</div>
		</div>
		<div class="content d-inline-block">
			<h5 class="text-center text-white">Map of Cikarang Area</h5>
			
			<div id="map" class="border border-primary mt-3"></div>
			<div id="button-container">
				<a href="popup.php">
					<button class="btn-distance">
						<i class="fas fa-map-marker-alt"></i>
					</button>
				</a>
			</div>
		</div>
	</div>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
<?php 
	include "footer.php";
?>
</body>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDm9YngpC9CohMR-w4YPIcXdbLC8q5zLtY&callback=loadMap"></script>
</html>

