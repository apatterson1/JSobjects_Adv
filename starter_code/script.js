//Task 1: Console the year in which the song "Beat it" was relased 
console.log(library.music.eighties.Michael_Jackson[0].year);

//Task 2: Console the name of the song Lady Gaga released in 2006 
console.log(library.music.two_thousands.Lady_Gaga[0].year);


$( document ).ready(function() {
//Task 3: Have the words "Rolling in the Deep" appear on the HTML page in a div tag.    
    $("#song").append(library.music.twenty_tens.Adele[0].song);
//Task 4: (project) Create a site that can display songs from an artist specified by a user search.

});

//Print Album name from Lady Gaga's in the mid 2000-2009 (ought)
console.log(library.music.two_thousands.Lady_Gaga[0].album);
