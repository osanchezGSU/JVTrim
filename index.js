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

/* Service Carousel */
/* Gallery Carousel */
const carousels = document.querySelectorAll(".service-card-container");
const arrowsIcons = document.querySelectorAll(".carousel-btn");

let isDragStart = false;
let prevPageX, prevScrollLeft, positionDiff;
const firstCardWidth = carousels[0].querySelector(".service-card").clientWidth + 10;
const imgWidth = carousels[2].querySelector("img").clientWidth;


const showHideIcons = (carousel) => {
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    if(carousel == carousels[0]){
        arrowsIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
        arrowsIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
    }
    else if(carousel == carousels[1]){
        arrowsIcons[2].style.display = carousel.scrollLeft === 0 ? "none" : "block";
        arrowsIcons[3].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
    }
    else if(carousel == carousels[2]){
        arrowsIcons[4].style.display = carousel.scrollLeft === 0 ? "none" : "block";
        arrowsIcons[5].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
    }
};

arrowsIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
        let carousel;
        if (icon == arrowsIcons[0]){
            carousels[0].scrollLeft += -firstCardWidth;
            carousel = carousels[0];
        }
        else if(icon == arrowsIcons[1]){
            carousels[0].scrollLeft += firstCardWidth;
            carousel = carousels[0];
        }
        else if(icon == arrowsIcons[2]){
            carousels[1].scrollLeft += -firstCardWidth;
            carousel = carousels[1];
        }
        else if(icon == arrowsIcons[3]){
            carousels[1].scrollLeft += firstCardWidth;
            carousel = carousels[1];
        }
        else if(icon == arrowsIcons[4]){
            carousels[2].scrollLeft += -imgWidth;
            carousel = carousels[2];
        }
        else if(icon == arrowsIcons[5]){
            carousels[2].scrollLeft += imgWidth;
            carousel = carousels[2];
        }


        setTimeout(() => showHideIcons(carousel), 60);
    });
});


const autoSlide = (carousel) => {
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft === scrollWidth) return;
    positionDiff = Math.abs(positionDiff);
    const valDifference = (carousel == carousels[2] ? imgWidth : firstCardWidth) - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        carousel.scrollLeft += positionDiff > firstCardWidth / 2 ? valDifference : -positionDiff;
    } else {
        carousel.scrollLeft -= positionDiff > firstCardWidth / 2 ? valDifference : -positionDiff;
    }
    showHideIcons(carousel);
};

const dragStart = (carousel) => (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
};

const dragging = (carousel) => (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons(carousel);
};

const dragStop = (carousel) => () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    autoSlide(carousel);
};

// Assign event listeners to all carousels
carousels.forEach(carousel => {
    carousel.addEventListener("mousedown", dragStart(carousel));
    carousel.addEventListener("touchstart", dragStart(carousel));
    carousel.addEventListener("mousemove", dragging(carousel));
    carousel.addEventListener("touchmove", dragging(carousel));
    carousel.addEventListener("mouseup", dragStop(carousel));
    carousel.addEventListener("touchend", dragStop(carousel));
    carousel.addEventListener("mouseleave", dragStop(carousel));
});

// Initialize
carousels.forEach(carousel => {
    showHideIcons(carousel);
});






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
        yPercent: -100,
        opacity: 0
        
    })
    gsap.to(sectionTitle, {
        scrollTrigger: {
            trigger: sectionTitle,
            start: 'top 75%',
            end: 'bottom 50%',
            markers: false,
            scrub: true
        },
        yPercent: 0,
        opacity: 1
    })
} );

const backgroundImage = document.querySelector(".background-image");
const bgSpeed = backgroundImage.getAttribute('data-speed');
const landingPage = document.getElementById("landing-page");
const landingPageContent = document.querySelector(".logo-container");
const pcSpeed = landingPageContent.getAttribute('data-speed');
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: landingPage,
        start: 'top top',
        scrub: true,
        markers: true
    }
});

tl.to(backgroundImage, {
    y: 20 * bgSpeed,
    duration: 2
})
tl.to(landingPageContent, {
    y: 20 * pcSpeed,
    duration: 2
})
