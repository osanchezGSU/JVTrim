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
