$(document).ready(function(){
  $(window).on("scroll", function(){
    var distanceToHeader = $(window).scrollTop() - ($(".home-banner").height() - 100);
    console.log(distanceToHeader);
    if(distanceToHeader >= 0){
      $(".banner-menu-wrapper").addClass("is-fixed");
    }
    else{
      $(".banner-menu-wrapper").removeClass("is-fixed");
    }
  })
})
