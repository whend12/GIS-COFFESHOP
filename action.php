<?php 
	require 'coffeeshop.php';
	$edu = new coffeeshop;
	$edu->setId($_REQUEST['id']);
	$edu->setLat($_REQUEST['lat']);
	$edu->setLng($_REQUEST['lng']);
	$edu->setImage($_REQUEST['image']);
	$status = $edu->updateCoffeeShopWithLatLng();
	if($status == true) {
		echo "Updated...";
	} else {
		echo "Failed...";
	}
 ?>