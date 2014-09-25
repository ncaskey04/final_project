$(document).ready(function() {
  var latLong = [];
  $('#form').on('submit',  function(e) {
    e.preventDefault();
    alert("Form submitted");
    var album = $('#searchTerm').val();
    var results = getResult(album);

    function getResult(search){
      $.ajax({
        type: 'GET',
        url: 'https://api.spotify.com/v1/' + 'search?q=name&type=album,track',
        dataType: "json",
      }).done(function(data) {
        //console.log(data);
        for (i = 0; i < data.albums.items.length; i ++){
          var album = data.albums.items[i];
          for (j=0; j < album.available_markets.length; j++){
            var market = album.available_markets[j];
            var coord = getLatLong(market);
            if (coord) {
              var marker = L.mapbox.featureLayer({
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [coord.lng, coord.lat]
                },
                properties: {
                  title: album.name,
                  'marker-color': '#f86767'
                }
              }).addTo(map);
              // marker.eachLayer(function(m) {
              //   m.openPopup();
              // });
            }
          }
        }
      });
    }

    var getLatLong = function(market){
      for (var i = 0; i < countries.length; i++){
        var iso2Code = countries[i].iso2Code;
        var latitude = countries[i].latitude;
        var longitude = countries[i].longitude;
        if (iso2Code == market){
          return {lng: longitude, lat: latitude};
        }
      }
      console.log("This is not a valid market", market);
    };
  });
});

      // function mapMarkers (latlong) {
      //   for(var i = 0; i < latLong.length; i++ ){
      //     var arr =[];
      //     for (var key in latLong[i]) {
      //       if (latLong[i].hasOwnProperty(key)) {
      //         arr.push(latLong[i][key]);
      //         }
      //       }

      //     var marker = L.mapbox.featureLayer({
      //       type: 'Feature',
      //       geometry: {
      //         type: 'Point',
      //         coordinates: arr
      //       },
      //       properties: {
      //         title: 'Hello world!',
      //         'marker-color': '#f86767'
      //       }
      //     }).addTo(map);

      // Iterate over the featureLayer we've called "marker"
      // and open its popup instead of clicking to trigger it.