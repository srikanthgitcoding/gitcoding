$(document).ready(function() {

    // Executes when the HTML document is loaded and the DOM is ready
    alert("Document is ready");
});

// .load() method deprecated from jQuery 1.8 onward
$(window).on("load", function() {

     // Executes when complete page is fully loaded, including
     // all frames, objects and images
     alert("Window is loaded");
});

// The ready event occurs after the HTML document has been loaded, while the onload event occurs later, 
// when all content (e.g. images) also has been loaded.

// The onload event is a standard event in the DOM, while the ready event is specific to jQuery. 
// The purpose of the ready event is that it should occur as early as 
// possible after the document has loaded, so that code that adds functionality to 
// the elements in the page doesn't have to wait for all content to load.