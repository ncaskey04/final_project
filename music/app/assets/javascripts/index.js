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
  });
}

// function searchAlbum(id){
//  $.ajax({
//     type: 'GET',
//     url: 'https://api.spotify.com/v1/albums/' + id,
//     dataType: "json",
//   }).done(function(data) {
//     console.log(data);
//   });
// }




