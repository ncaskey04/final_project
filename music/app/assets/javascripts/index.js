$(document).ready(function() {

    $('#form').on('submit',  function(e) {
        e.preventDefault();
        alert("Form submitted");
        var album = $('#searchTerm').val();
        var results = getResult(album);
        // $('#searchAlbum').on('submit'),
        // searchAlbum("0sNOF9WDwhWunNAHPD3Baj");
  });
});




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
    }
  }
};

// function searchAlbum(id){
//  $.ajax({
//    type: 'GET',
//    url: 'https://api.spotify.com/v1/albums/' + id,
//    dataType: "json",
//  }).done(function(data) {
//    console.log(data);
//  });
// }