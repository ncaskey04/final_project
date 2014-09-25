$(document).ready(function() {
  var latLong = [];
  $('#form').on('submit',  function(e) {
  e.preventDefault();
  alert("Form submitted");
  var album = $('#searchTerm').val();
  var results = getResult(album);
        // $('#searchAlbum').on('submit'),
        // searchAlbum("0sNOF9WDwhWunNAHPD3Baj");

<<<<<<< HEAD
function getResult(search){
$.ajax({
    type: 'GET',
    url: 'https://api.spotify.com/v1/' + 'search?q=name&type=album,track',
    dataType: "json",
  }).done(function(data) {
    console.log(data);
    for (i = 0; i < data.albums.items.length; i ++){
      var album = data.albums.items[i];
      for (j=0; j < album.available_markets.length; j++){
        var market = album.available_markets[j];
      }
    }
    // looop thru albums
        // loop thru album country codes
            // getLatLng for country code
            // put on map
  });
}

var getLatLong = function(market){
  for (var i = 0; i < countries.length; i++){
    var iso2Code = countries[i].iso2Code;
    var latitude = countries[i].latitude;
    var longitude = countries[i].longitude;
    if (iso2Code === market){
      return {lat: latitude, lon: longitude};
    } else {
      console.log("This is not a valid market");
=======


        function getResult(search){
          $.ajax({
            type: 'GET',
            url: 'https://api.spotify.com/v1/' + 'search?q=name&type=album,track',
            dataType: "json",
          }).done(function(data) {
            console.log(data);
            for (i = 0; i < data.albums.items.length; i ++){
              var album = data.albums.items[i];
              for (j=0; j < album.available_markets.length; j++){
                var market = album.available_markets[j];
              }
              getLatLong(market);
            }
          });
        }

        var getLatLong = function(market){
          for (var i = 0; i < countries.length; i++){
            var iso2Code = countries[i].iso2Code;
            var latitude = countries[i].latitude;
            var longitude = countries[i].longitude;
            if (iso2Code == market){
              latLong.push({lng: longitude, lat: latitude});
            } else {
              console.log("This is not a valid market");
            }
          }
          console.log(latLong);
        mapMarkers(latLong);
      };

      function mapMarkers (latlong) {
        for(var i = 0; i < latLong.length; i++ ){
          var arr =[];
          for (var key in latLong[i]) {
            if (latLong[i].hasOwnProperty(key)) {
              arr.push(latLong[i][key]);
              }
            }

          var marker = L.mapbox.featureLayer({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: arr
            },
            properties: {
              title: 'Hello world!',
              'marker-color': '#f86767'
            }
          }).addTo(map);

      // Iterate over the featureLayer we've called "marker"
      // and open its popup instead of clicking to trigger it.
        marker.eachLayer(function(m) {
          m.openPopup();
        });


>>>>>>> 8b6c3258390a54e3bd5e4c0fd0a278b4d50eaeb4
    }
  }
});
});






