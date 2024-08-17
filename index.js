/*Landing Page On Load Animation*/
$(window).on("load", function(){
    $("#landing-page").addClass("animate");
    $(".logo-container > *").addClass("visible");
    $("dotlottie-player").addClass("visible");
});


/* Apply Fixed Position to NavBar */
var sticky = $("nav").offset().top;

$(window).scroll(function(){
    if (window.scrollY >= sticky) {
        $("nav").addClass("sticky")
        $(".dropdown-menu").addClass("sticky")
      } else {
        $("nav").removeClass("sticky");
        $(".dropdown-menu").removeClass("sticky")
      };
})

/* Menu Button Animation */
$(".ham-btn").on('click', function(){
    $(".ham-btn").toggleClass("active");
    $(".dropdown-menu").toggleClass("open");
});

/* Service Card Carousel */
const carousel = document.querySelector(".service-card-container");
const arrowsIcons = document.querySelectorAll(".button-container i");
const firstCard = carousel.querySelectorAll("div")[0];

let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;
let firstCardWidth = firstCard.clientWidth + 10;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
    arrowsIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowsIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowsIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const autoSlide = () => {
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    let firstCardWidth = firstCard.clientWidth + 10;
    let valDifference = firstCardWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft){
        return carousel.scrollLeft += positionDiff > firstCardWidth / 3 ? valDifference: -positionDiff
    }
    carousel.scrollLeft -= positionDiff > firstCardWidth / 3 ? valDifference: -positionDiff
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}



const dragging = (e) => {
    if (!isDragStart) return; // If not dragging, exit function
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX  || e.touches[0].pageX)- prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
carousel.addEventListener("mouseleave", dragStop);


/* Scroll Animation */

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const content = document.querySelector(".content");
const sections = content.querySelectorAll("section");
const serviceSection = content.querySelectorAll("#services");

sections.forEach(section => {
    let sectionTitle = section.querySelectorAll(".section-header");
    

    gsap.set(sectionTitle, {
        xPercent: -100,
        opacity: 0
        
    })
    gsap.to(sectionTitle, {
        scrollTrigger: {
            trigger: sectionTitle,
            start: 'top 75%',
            end: 'bottom 50%',
            markers: true,
            scrub: true
        },
        xPercent: 0,
        opacity: 1
    })
} );
let serviceTypes = serviceSection.querySelectorAll(".service-type");

serviceTypes.forEach(serviceType => {
    gsap.set(serviceType, {
        xPercent: 100,
        opacity: 0
    });
    
    gsap.to(serviceType, {
        scrollTrigger: {
            trigger: serviceType,
            start: 'top 75%',
            end: '110% 75%',
            markers: true,
            scrub: true
        },
        xPercent: 0,
        opacity: 1
    });
});





