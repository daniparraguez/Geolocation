    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: -33.534255099999996, lng: -70.7752498},
          mapTypeId: 'hybrid'
        });



    function buscar() {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    };
  };

      document.getElementById("encuentrame").addEventListener("click", buscar);
      var latitud, longitud;

    var funcionExito = function(posicion) {
      latitud = posicion.coords.latitude;
      longitud = posicion.coords.longitude;

    var miUbicacion = new google.maps.Marker({
    position: {lat:latitud, lng:longitud},
    map: map,
    icon: "http://www.raileurope.ca/squelettes/img/services/VEL.png"
    });
  };

  map.setTilt(45);
  map.setCenter({lat:latitud, lng:longitud});

    var funcionError = function(error) {
      alert("No has permitido usar tu ubicación maldito engendro");
    }
}


