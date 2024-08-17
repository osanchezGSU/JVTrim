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
// const carousel = document.querySelectorAll(".service-card-container")[0];
// const carouselCustomCarpentry = document.querySelectorAll(".service-card-container")[1];
// const arrowsIcons = document.querySelectorAll(".button-container i");
// const firstCard = carousel.querySelectorAll("div")[0];

// let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;
// let firstCardWidth = firstCard.clientWidth + 10;
// let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

// const showHideIcons = () => {
//     arrowsIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowsIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
// }

// arrowsIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
//         setTimeout(() => showHideIcons(), 60);
//     });
// });

// const autoSlide = (carousel) => {
//     if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
//     positionDiff = Math.abs(positionDiff);
//     let firstCardWidth = firstCard.clientWidth + 10;
//     let valDifference = firstCardWidth - positionDiff;

//     if(carousel.scrollLeft > prevScrollLeft){
//         return carousel.scrollLeft += positionDiff > firstCardWidth / 3 ? valDifference: -positionDiff
//     }
//     carousel.scrollLeft -= positionDiff > firstCardWidth / 3 ? valDifference: -positionDiff
// }

// const dragStart = (carousel) => (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }



// const dragging = (carousel) => (e) => {
//     if (!isDragStart) return; // If not dragging, exit function
//     e.preventDefault();
//     carousel.classList.add("dragging");
//     positionDiff = (e.pageX  || e.touches[0].pageX)- prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }

// const dragStop = (carousel) => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");
//     autoSlide();
// }

// autoSlide(carousel);
// autoSlide(carouselCustomCarpentry);

// carousel.addEventListener("mousedown", dragStart(carousel));
// carousel.addEventListener("touchstart", dragStart(carousel));
// carousel.addEventListener("mousedown", dragStart(carouselCustomCarpentry));
// carousel.addEventListener("touchstart", dragStart(carouselCustomCarpentry));

// carousel.addEventListener("mousemove", dragging(carousel));
// carousel.addEventListener("touchmove", dragging(carousel));
// carousel.addEventListener("mousemove", dragging(carouselCustomCarpentry));
// carousel.addEventListener("touchmove", dragging(carouselCustomCarpentry));

// carousel.addEventListener("mouseup", dragStop(carousel));
// carousel.addEventListener("touchend", dragStop(carousel));
// carousel.addEventListener("mouseleave", dragStop(carousel));
// carousel.addEventListener("mouseup", dragStop(carouselCustomCarpentry));
// carousel.addEventListener("touchend", dragStop(carouselCustomCarpentry));
// carousel.addEventListener("mouseleave", dragStop(carouselCustomCarpentry));

const carousels = document.querySelectorAll(".service-card-container");
const arrowsIcons = document.querySelectorAll(".button-container i");

let isDragStart = false;
let prevPageX, prevScrollLeft, positionDiff;
const firstCardWidth = carousels[0].querySelector("div").clientWidth + 10;

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

        setTimeout(() => showHideIcons(carousel), 60);
    });
});


const autoSlide = (carousel) => {
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft === scrollWidth) return;
    positionDiff = Math.abs(positionDiff);
    const valDifference = firstCardWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        carousel.scrollLeft += positionDiff > firstCardWidth / 3 ? valDifference : -positionDiff;
    } else {
        carousel.scrollLeft -= positionDiff > firstCardWidth / 3 ? valDifference : -positionDiff;
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

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0)

// const content = document.querySelector(".content");
// const sections = content.querySelectorAll("section");
// const serviceSection = content.querySelectorAll("#services");

// sections.forEach(section => {
//     let sectionTitle = section.querySelectorAll(".section-header");
    

//     gsap.set(sectionTitle, {
//         xPercent: -100,
//         opacity: 0
        
//     })
//     gsap.to(sectionTitle, {
//         scrollTrigger: {
//             trigger: sectionTitle,
//             start: 'top 75%',
//             end: 'bottom 50%',
//             markers: true,
//             scrub: true
//         },
//         xPercent: 0,
//         opacity: 1
//     })
// } );
// let serviceTypes = serviceSection.querySelectorAll(".service-type");

// serviceTypes.forEach(serviceType => {
//     gsap.set(serviceType, {
//         xPercent: 100,
//         opacity: 0
//     });
    
//     gsap.to(serviceType, {
//         scrollTrigger: {
//             trigger: serviceType,
//             start: 'top 75%',
//             end: '110% 75%',
//             markers: true,
//             scrub: true
//         },
//         xPercent: 0,
//         opacity: 1
//     });
// });





