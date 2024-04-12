
// For Auto type on home page
var typed = new Typed(".Auto-Type",{
    strings:["","I'm a Developer."," I'm a Coder.","I'm a Freelancer.","I'm a Designer.","I'm a Gamer."],
    showCursor: false,
    typeSpeed:100,
    backSpeed:100,
    loop:true
});


document.body.addEventListener("keydown" , (ev) => {
  
    if(ev.key == "ArrowRight"){
      $("#flipbook").turn("next");
    }

    if(ev.key == "ArrowLeft"){
      $("#flipbook").turn("previous");
    }
  })


let index = -2;
  // Iterate over each page div
  $('.flipbook > div').each(function () {
    index++;
    // Check if the page has content and doesn't have the specified ID
    if ($(this).hasClass('table-contents') || $(this).hasClass('For-All-Projects')) {
      // Assign page number dynamically
      $(this).append('<span class="page-number">' + (index) + '</span>');
    }
  });
  








