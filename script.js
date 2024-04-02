
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


// Get all elements with the class "image-cover"
const imageCovers = document.querySelectorAll('.image-cover');

// Iterate over each image-cover element
imageCovers.forEach(imageCover => {
    // Add event listeners for mouseenter and mouseleave events
    imageCover.addEventListener('mouseenter', function() {
        // Change opacity of img and p elements when mouse enters image-cover
        const img = this.querySelector('img');
        const p = this.querySelector('p');
        img.style.opacity = 0.3;
        p.style.opacity = 1;
    });

    imageCover.addEventListener('mouseleave', function() {
        // Reset opacity when mouse leaves image-cover
        const img = this.querySelector('img');
        const p = this.querySelector('p');
        img.style.opacity = 1;
        p.style.opacity = 0;
    });
});


