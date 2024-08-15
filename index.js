/*Landing Page On Load Animation*/
$(window).on("load", function(){
    $("#landing-page").addClass("animate");
    $(".logo-container > *").addClass("visible");
    $("dotlottie-player").addClass("visible");
});

var sticky = $("nav").offset().top;

$(window).scroll(function(){
    if (window.scrollY >= sticky) {
        $("nav").addClass("sticky")
      } else {
        $("nav").removeClass("sticky");
      }
})
