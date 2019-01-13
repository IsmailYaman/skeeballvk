let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    // let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    //met forloop laat de volgende slide zien en verwijderd de vorige slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // slides[slideIndex-1].style.display = "block";
}


function collapse() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

