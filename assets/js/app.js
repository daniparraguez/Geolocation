    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: -33.534255099999996, lng: -70.7752498},
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
    map: map
    });
  };

    var funcionError = function(error) {
      alert("No has permitido usar tu ubicación maldito engendro");
    }
}


