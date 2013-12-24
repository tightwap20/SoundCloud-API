  // SC.get('/tracks/293', function(track) {
  //       SC.oEmbed(track.permalink_url, document.getElementById('playerEmbed'));
  // });
$(document).ready(function() 
{
 var tagArray = []; 
 $(".tags li").click(function()
 {
  var tag = ($(this).text());
  tagArray.push(tag);
  $(this).siblings().hide('slow');
  console.log(tagArray);//console.log(tag);
 });

   //When an li is clicked this function is thrown
   //var genreTwo = [];
   $(".genre li").click(function() 
   {
     $(this).siblings().hide('slow');      //hides the unclicked li's
     var genre = ($(this).text());         //sets genre equal to the the clicked li's text
     //genreTwo.push(genre);
     //console.log(genreTwo);                   //logs the li text that was clicked
   

   //var tagsArray;
   $(".findMusic").click(function()
   {
      for (var i = 0; i < tagArray.length; ++i) 
      {
      if (tagArray.length == 1) 
      {
        var tagsArray = tagArray[i];
        console.log(tagsArray);
      }
      else if (tagArray.length > 1) 
      {
        var tagsArray = tagArray[i].concat( " " +  tagArray[i - 1]);
        console.log(tagsArray);
      }
    }
     $.ajax
     ({
 	      dataType: "json",
  		  type: "GET",
  		  url: "http://api.soundcloud.com/tracks.json",
  		  data:
        { 
          tags: tagsArray,
          //q: tagsArray,
          client_id: "795b1eb8bc30f90032b1968b49583224", 
          genres: genre,
          //tags: 
        }  //will pass variable clicked on to genre as well as tags
	   })

      .done(function(tracks)
      {
  		  for (var j = 0; j < 5; j++) 
        {
    		  console.log(tracks[j].id);
    		  console.log(tracks[j].title);
          console.log(tracks[j].tag_list);
          console.log(tracks[j].genre);
  		  }
          $(function()
          {
            $playerContainer = $('#player');
            trackUrl = 'http://api.soundcloud.com/tracks/' + tracks[1].id;
            $.getJSON('http://soundcloud.com/oembed?format=js&url=' + trackUrl + '&iframe=true&auto_play=true&callback=?', function(response)
              {
                $playerContainer.html(response.html);
              });
          });
        });
      });
    });
});