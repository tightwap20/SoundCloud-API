// function findMusicByTag(tag)
// {
// SC.initialize({
//     client_id: '795b1eb8bc30f90032b1968b49583224'
// });
// SC.get('/tracks',{tags: tag},
//     function(tracks)
//     {
//         console.log(tracks);
//     });
//}
  // SC.get('/tracks/293', function(track) {
  //       SC.oEmbed(track.permalink_url, document.getElementById('playerEmbed'));
  // });
$(document).ready(function() {
   
   //When an li is clicked this function is thrown
   $(".genre li").click(function() {
     $(this).siblings().hide('slow');      //hides the unclicked li's
     var genre = ($(this).text());         //sets genre equal to the the clicked li's text
     console.log(genre);                   //logs the li text that was clicked
     $(this).data('clicked', true);        // sets the clicked 
     
     if ($(".genre li").data('clicked')) {  //if the button is clicked, then run the below javascript
       $.ajax({
 	       dataType: "json",
  		   type: "GET",
  		   url: "http://api.soundcloud.com/tracks.json",
  		   data: { client_id: "795b1eb8bc30f90032b1968b49583224", genres: genre }  //will pass variable clicked on to genre as well as tags
	      })

       .done(function( tracks ) {
  		   //console.dir(tracks[1].id);
  		   for (var i = 0; i < tracks.length; i++) {
    		   console.log(tracks[1].id);
    		   console.log(tracks[1].title);
  		    }
        });
      }
    });
});