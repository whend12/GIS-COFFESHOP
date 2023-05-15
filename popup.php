<?php 
  include 'sidebar.html'
?>

<!DOCTYPE html>

<html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <style>
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #2C3333;
      }

      .custom-map-control-button {
        background-color: #fff;
        border: 0;
        border-radius: 2px;
        box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
        margin: 10px;
        padding: 0 0.5em;
        font: 400 18px Roboto, Arial, sans-serif;
        overflow: hidden;
        height: 40px;
        cursor: pointer;
      }
      .custom-map-control-button:hover {
        background: rgb(235, 235, 235);
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

      #map {
        width: 1335px;
        height: 100%;
      }
    </style>
    <title>Current Location</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <script>
      let map, infoWindow, userMarker;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat:  -6.308897, lng: 107.171766 },
          zoom: 12,
        });
        infoWindow = new google.maps.InfoWindow();

        const locationButton = document.createElement("button");

        locationButton.textContent = "Pan to Current Location";
        locationButton.classList.add("custom-map-control-button");
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(
          locationButton
        );
        locationButton.addEventListener("click", () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };

                if (userMarker) {
                  userMarker.setPosition(pos);
                } else {
                  userMarker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: 'Your Location',
                    icon: {
                      path: google.maps.SymbolPath.CIRCLE,
                      scale: 8,
                      fillColor: "#007bff",
                      fillOpacity: 1,
                      strokeWeight: 1,
                      strokeColor: "#fff",
                      strokeOpacity: 1,
                    },
                  });
                }

                map.setCenter(pos);
              },
              () => {
                handleLocationError(true, infoWindow, map.getCenter());
              }
            );
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        });
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
      }

      window.initMap = initMap;
    </script>
  </head>
  <body>
  <?php
    include 'header.php'; 
  ?>
  <div class="container">
    <div class="content">
      <div id="map"></div>
    </div>
  </div>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDm9YngpC9CohMR-w4YPIcXdbLC8q5zLtY&callback=initMap&v=weekly"
      defer
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
  <?php
    include 'footer.php'; 
  ?>
  </body>
</html>