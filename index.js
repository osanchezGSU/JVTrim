window.onscroll = function() {
    handleStickyNavbar();
    handleActiveState();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var about = document.getElementById("about-us");
var aboutUs = about.offsetTop;

function handleStickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function handleActiveState() {
    if (window.pageYOffset >= aboutUs - navbar.offsetHeight) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.service-card-container > .card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Check if it's a mobile device
                card.classList.toggle('is-flipped');
            }
        });
    });
});