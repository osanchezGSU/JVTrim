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

let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.nav-link-grow-up');

 sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-link-grow-up [href*=' + id + ']').classList.add('active');            })
        }
    });


    function updateAboutUsContent(query) {
        let text = query.matches ? "At JV Trim, we are proud to be a Georgia-based company specializing in premium trim work and carpentry services. Our dedicated team of highly skilled carpenters brings years of experience and a commitment to excellence to every project. Serving Metro Atlanta and its surrounding counties, we take pride in delivering top-notch craftsmanship and personalized solutions tailored to our clients' unique needs." :
        "Georgia-based, JV Trim specializes in premium trim work and carpentry. Our experienced carpenters ensure excellence in every project. Serving Metro Atlanta and nearby areas, we offer top-notch craftsmanship and personalized solutions.";            
        document.querySelector('.about-us-content p').textContent = text;
    }
    function updateContactContent(query) {
        let text = query.matches ? "We're here to answer any questions you have about our services. Whether you need a quote, have a project in mind, or just want to learn more, we'd love to hear from you. Reach out to us and let's create something amazing together!" :
        "Have questions? Need a quote or have a project in mind? Contact us and let's create something amazing together!";
        
        document.querySelector('.contact-message p').textContent = text;
    }
    let query = window.matchMedia("(min-width: 600px)");
    updateAboutUsContent(query); // Initial check
    updateContactContent(query);
    query.addEventListener('change', (e) => updateAboutUsContent(e)); 
    query.addEventListener('change', (e) => updateContactContent(e)); 
