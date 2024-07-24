window.onscroll = function() {
    handleStickyNavbar();
  
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function handleStickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
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

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcn = document.querySelector('.toggle_btn i')
const dorpDownMenu = document.querySelector('.dropdown')
toggleBtn.onclick = function() {
    dorpDownMenu.classList.toggle('open')
    const isOpen = dorpDownMenu.classList.contains('open')
 

    toggleBtnIcn.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
dropDownMenu.addEventListener('transitionend', () => {
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcn.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
});
