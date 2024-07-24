window.onscroll = function() {
    handleStickyNavbar();
  
};
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcn = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown')

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function handleStickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        dropDownMenu.classList.add("sticky-dropdown");
        
    } else {
        navbar.classList.remove("sticky");
        dropDownMenu.classList.remove("sticky-dropdown");
        
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


toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
 

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
