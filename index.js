var sticky = $("nav").offset().top;

$(window).scroll(function(){
    if (window.scrollY >= sticky) {
        $("nav").addClass("sticky")
      } else {
        $("nav").removeClass("sticky");
      }
})