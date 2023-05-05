<?php 
  include 'sidebar.html'
?>

<!DOCTYPE html>

<html>
  <head>
    <style>
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
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
        width: 1390px;
        height: 743px;
        margin-left: 141px;
      }
      
      #map {
        width: 100%;
        height: 100%;
      }
    </style>
    <title>Access Location</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <script>
      let map, infoWindow;

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

                var userMarker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: 'Your Location'
                });
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
    <div class="container">
      <div id="map"></div>
    </div>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDm9YngpC9CohMR-w4YPIcXdbLC8q5zLtY&callback=initMap&v=weekly"
      defer
    ></script>
  </body>
</html>