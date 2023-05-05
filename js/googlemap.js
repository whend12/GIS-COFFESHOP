var map;
var geocoder;

function loadMap() {
  var cikarang = { lat: -6.308897, lng: 107.171766 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: cikarang,
  });

  var marker = new google.maps.Marker({
    position: cikarang,
    map: map,
  });

  var cdata = JSON.parse(document.getElementById("data").innerHTML);
  geocoder = new google.maps.Geocoder();
  codeAddress(cdata);

  var allData = JSON.parse(document.getElementById("allData").innerHTML);
  showAllCoffeeShop(allData);
}

function showAllCoffeeShop(allData) {
  var infoWind = new google.maps.InfoWindow();
  Array.prototype.forEach.call(allData, function (data) {
    var content = document.createElement("div");
    var flexContainer = document.createElement("div");
    flexContainer.style.display = "flex";
    flexContainer.style.flexDirection = "row";
    flexContainer.style.width = "300px";
    content.appendChild(flexContainer);

    var img = document.createElement("img");
    if (data.name === "ZALA Coffee") {
      img.src = "img/zala-coffee.jpg";
      img.alt = "Logo ZALA Coffee";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl. Pasar Cikarang No.46, Cikarang Kota, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17831</p> 
		<p><b>Jam:</b> Senin-Minggu  10.00-22.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Small's Cafe") {
      img.src = "img/small's-coffee.jpg";
      img.alt = "Logo Small's Cafe";
      var desc = document.createElement("span");
      desc.innerHTML = `<p>Kafe simpel yang menyajikan kreasi minuman kopi dan camilan di tempat nyaman dengan dinding papan tulis.</p> 
		<p><b>Alamat:</b> Ruko Pavilion Shop No 9 Cikarang Baru Jababeka 2 Belakang RS Harapan Keluarga, Depan PT Daehwa, Mekarmukti, Cikarang Utara, Bekasi Regency, West Java 17530</p> 
		<p><b>Jam:</b> Senin-Minggu 09.00-23.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Daycoff") {
      img.src = "img/daycoff.jpg";
      img.alt = "Logo Daycoff";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Cifest, Ruko Pasadena, Jl. Villa Mutiara Cikarang No.8E, Ciantra, Cikarang Selatan, Bekasi Regency, West Java 17530</p> 
		  <p><b>Jam:</b> Senin-Sabtu  10.00-00.00<br>
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minggu 07.00-23.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Kedai Kopi Bejo Cikarang") {
      img.src = "img/kedai-kopi-bejo-cikarang.jpg";
      img.alt = "Logo Kedai Kopi Bejo Cikarang";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> ruko restali arsi, Jl. KH. Fudholi .rt02, RW.06, Desa, Karangasih, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</p>
		<p><b>Jam:</b> Senin-Minggu 11.00-00.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Thein Coffee") {
      img.src = "img/thein-coffee.jpg";
      img.alt = "Logo Thein Coffee";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Ruko TRACE, Jl. Dr. Cipto Mangunkusumo Jl. Jababeka Raya No.39, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17550</p>
		<p><b>Jam:</b> Senin-Minggu 12.00-22.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Starbucks Lippo Cikarang") {
      img.src = "img/starbucks-lippo-cikarang.jpg";
      img.alt = "Logo Starbucks Lippo Cikarang";
      var desc = document.createElement("span");
      desc.innerHTML = `Franchise kedai kopi dari Seattle yang terkenal dengan teknik penyeduhan kopinya yang khas, camilan & Wi-Fi.
		<p><b>Alamat:</b> M4CG+VVR, Jl. Kemang Raya, Sukaresmi, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530</p>
		<p><b>Jam:</b> 09.00-22.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Navigasi Coffee") {
      img.src = "img/navigasi-coffee.jpg";
      img.alt = "Logo Navigasi Coffee";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl. Cikarang baru Raya, Sertajaya, Ruko Simprug Garden Blok A2 No 5, Sertajaya, Kec. Cikarang Tim., Kabupaten Bekasi, Jawa Barat 17530</p>
		<p><b>Jam:</b> Senin-Minggu 09.00-23.30</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Kati Coffee") {
      img.src = "img/kati-coffee.jpg";
      img.alt = "Logo Kati Coffee";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl. Dr. Cipto Mangunkusumo Trace 3 blok B19 No1, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</p>
		<p><b>Jam:</b> Senin-Minggu 08.00-00.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Era Cafe") {
      img.src = "img/era-cafe.jpg";
      img.alt = "Logo Era Cafe";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl. Grand Cikarang City Blk. F 1 AR No.10, Karangraharja, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</p>
		<p><b>Jam:</b> Senin Tutup <br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Selasa-Minggu 15.00-22.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Relakso Coffee and Roastery 2.0") {
      img.src = "img/relakso-coffe-and-roastery-2.0.jpg";
      img.alt = "Logo Relakso Coffee and Roastery 2.0";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl.Movieland Ruko Hollywood Boulevard Blok A5A No.19, Mekarmukti, Cikarang Utara, Bekasi Regency, West Java</p>
		<p><b>Jam:</b> Senin-Kamis 13.00-23.00<br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jum'at-Minggu 16.00-00.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Kopi Analogi") {
      img.src = "img/kopi-analogi.jpg";
      img.alt = "Logo Kopi Analogi";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Rukan Simprug Plaza, Blok B1 No. 23A Cikarang Baru Timur, Sertajaya, Kec. Cikarang Tim., Kabupaten Bekasi, Jawa Barat 17550</p>
		<p><b>Jam:</b> Senin-Jum'at 10.00-23.00<br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sabtu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11.00-23.00 <br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minggu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12.00-23.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Barista Coffee and Eatery") {
      img.src = "img/barista-coffee-and-eatery.jpg";
      img.alt = "Logo Barista Coffee & Eatery";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Ruko Fresno Blok D20 Jl.Ganesha Boulevard Blok D20 Deltamas, Hegarmukti, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530</p>
		<p><b>Jam:</b> Senin-Sabtu 10.00-22.00<br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minggu Tutup</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Warunk Otw") {
      img.src = "img/warunk-otw.jpg";
      img.alt = "Logo Warunk Otw";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Pasirgombong, Cikarang Utara, Bekasi Regency, West Java 17530</p>
	  <p><b>Jam:</b> Senin 09.00-01.00<br>
	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Selasa-Minggu 15.00-01.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Kopi Kenangan - BP Cikarang") {
      img.src = "img/kopi-kenangan-bp-cikarang.jpg";
      img.alt = "Logo Kopi Kenangan - BP Cikarang";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> BP Cikarang Sriwijaya, Jl. Sriwijaya No.22, Cibatu, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530</p>
	  <p><b>Jam:</b> Senin-Minggu 07.00-22.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "TakeOver Coffee") {
      img.src = "img/takeover-coffee.jpg";
      img.alt = "Logo TakeOver Coffee";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Ruko Hollywood Boulevard A5A No. 31, Mekarmukti, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</p>
	  <p><b>Jam:</b> Senin-Minggu 11.00-23.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Old Town White Coffee") {
      img.src = "img/old-town-white-coffee.jpg";
      img.alt = "Logo Old Town White Coffee";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Lippo Cikarang, Jl. MH. Thamrin, Cibatu, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530</p>
	  <p><b>Jam:</b> Senin-Sabtu 09.30-21.00<br>
	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minggu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;08.00-22.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Kopi Di Bawah Tangga Lippo Cikarang") {
      img.src = "img/kopi-di-bawah-tangga-lippo-cikarang.jpg";
      img.alt = "Logo Kopi Di Bawah Tangga Lippo Cikarang";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl Mataram Ruko Podium, Cibatu, Kabupaten Bekasi, Jawa Barat 17550</p>
	  <p><b>Jam:</b> Senin-Jum'at 10.00-22.00<br>
	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sabtu-Minggu 10.00-21.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Rantau Coffee Bar") {
      img.src = "img/rantau-coffee-bar.jpg";
      img.alt = "Logo Rantau Coffee Bar";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl. Dr. Cipto Mangunkusumo No.3, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</p>
	  <p><b>Jam:</b> Senin-Kamis 10.00-23.00<br>
	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jum'at-Sabtu 10.00-00.00<br>
	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minggu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;07.00-22.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Warkop Cinta Reborn") {
      img.src = "img/warkop-cinta-reborn.jpg";
      img.alt = "Logo Warkop Cinta Reborn";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl. Simpangan Jl. Pamahan No.299, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</p>
	  <p><b>Jam:</b> Senin-Minggu 17.00-00.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Haly coffee") {
      img.src = "img/haly-coffee.jpg";
      img.alt = "Logo Haly coffee";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Ruko Trace, Jl. Dr. Cipto Mangunkusumo Jl. Jababeka Raya No.17, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</p>
      <p><b>Jam:</b> Senin-Jum'at 10.00-23.00<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sabtu 10.00-00.00<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minggu 08.00-23.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "NAKULA COFFEE") {
      img.src = "img/nakula-coffee.jpg";
      img.alt = "Logo Nakula Coffee";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl. Tegal Danas No.1, Jayamukti, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530</p>
      <p><b>Jam:</b> Minggu-Kamis 10.00-22.00<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jum'at-Sabtu 10.00-23.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Béka Coffee and Space") {
      img.src = "img/beka-coffee-and-space.jpg";
      img.alt = "Logo Béka Coffee and Space";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Ruko Citywalk, Jl. Ki Hajar Dewantara, Karangasih, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</p>
      <p><b>Jam:</b> Senin-Sabtu 07.00-22.00<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minggu 09.00-17.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Hiiyra coffee") {
      img.src = "img/hiiyra-coffee.jpg";
      img.alt = "Logo Hiiyra coffee";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl. Cikarang Baru Raya No.30, Sertajaya, Kec. Cikarang Tim., Kabupaten Bekasi, Jawa Barat 17530</p>
      <p><b>Jam:</b> Senin-Minggu 11.00-23.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Toko Kopi Tuan Sua") {
      img.src = "img/coffee-icon.png";
      img.alt = "Logo Toko Kopi Tuan Sua";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl. Tapir Raya No.2, Kota Jababeka, Central Cikarang, Bekasi Regency, West Java 17815</p>
      <p><b>Jam:</b> Senin-Kamis 09.00-22.00<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jum'at-Minggu 08.00-00.00</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Tiyasa koffie") {
      img.src = "img/tiyasa-koffie.jpg";
      img.alt = "Logo Tiyasa Koffie";
      var desc = document.createElement("span");
      desc.innerHTML = `<p><b>Alamat:</b> Jl. Antilop V No.97, RT.6/RW.7, Jayamukti, Central Cikarang, Bekasi Regency, West Java 17530</p>
      <p><b>Jam:</b> Minggu-Jum'at 10.00-22.00<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sabtu 10.00-23.55</p>`;
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Neph Coffee & Eatery") {
      img.src = "img/coffee-icon.png";
      img.alt = "Logo Kedai Kopi Bejo Cikarang";
      var desc = document.createElement("span");
      desc.innerHTML = "Kedai kopi dengan suasana yang cozy dan ramah kantong";
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "GARFEE.ID") {
      img.src = "img/coffee-icon.png";
      img.alt = "Logo Kedai Kopi Bejo Cikarang";
      var desc = document.createElement("span");
      desc.innerHTML = "Kedai kopi dengan suasana yang cozy dan ramah kantong";
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "KILLA COFFEE") {
      img.src = "img/coffee-icon.png";
      img.alt = "Logo Kedai Kopi Bejo Cikarang";
      var desc = document.createElement("span");
      desc.innerHTML = "Kedai kopi dengan suasana yang cozy dan ramah kantong";
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "ROMEZA COFFEE") {
      img.src = "img/coffee-icon.png";
      img.alt = "Logo Kedai Kopi Bejo Cikarang";
      var desc = document.createElement("span");
      desc.innerHTML = "Kedai kopi dengan suasana yang cozy dan ramah kantong";
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    } else if (data.name === "Seduh Space - Tea, Coffee & Gelato House") {
      img.src = "img/coffee-icon.png";
      img.alt = "Logo Kedai Kopi Bejo Cikarang";
      var desc = document.createElement("span");
      desc.innerHTML = "Kedai kopi dengan suasana yang cozy dan ramah kantong";
      flexContainer.appendChild(desc);
      flexContainer.appendChild(img);
    }
    img.style.width = "100px";
    img.style.height = "100px";

    var strong = document.createElement("strong");
    strong.innerHTML = data.name;
    content.appendChild(strong);

    content.appendChild(flexContainer);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(data.lat, data.lng),
      map: map,
    });

    marker.addListener("mouseover", function () {
      infoWind.setContent(content);
      infoWind.open(map, marker);
    });
  });
}

function codeAddress(cdata) {
  Array.prototype.forEach.call(cdata, function (data) {
    var address = data.name + " " + data.address;
    geocoder.geocode({ address: address }, function (results, status) {
      if (status == "OK") {
        map.setCenter(results[0].geometry.location);
        var points = {};
        points.id = data.id;
        points.lat = map.getCenter().lat();
        points.lng = map.getCenter().lng();
        updateCoffeeShopWithLatLng(points);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  });
}

function updateCoffeeShopWithLatLng(points) {
  $.ajax({
    url: "action.php",
    method: "post",
    data: points,
    success: function (res) {
      console.log(res);
    },
  });
}

// Fungsi untuk menghitung jarak antara dua titik menggunakan formula Haversine
function haversine(lat1, lon1, lat2, lon2) {
  const toRadians = (deg) => deg * (Math.PI / 180);
  const R = 6371; // Radius bumi dalam km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Jarak dalam km
  return d;
}

// Fungsi untuk mengambil data dari database dan menghitung jarak antara dua titik
function calculateDistance() {
  $.ajax({
    url: "action.php",
    method: "get",
    dataType: "json",
    success: function (data) {
      // Mengambil data titik awal dari variabel global "cikarang"
      const lat1 = cikarang.lat;
      const lon1 = cikarang.lng;

      // Menghitung jarak antara titik awal dan setiap titik di database
      data.forEach(function (point) {
        const lat2 = point.lat;
        const lon2 = point.lng;
        const distance = haversine(lat1, lon1, lat2, lon2);
        console.log(point.name + ": " + distance.toFixed(2) + " km");
      });
    },
  });
}
