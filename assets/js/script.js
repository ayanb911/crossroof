$(document).ready(function(){

  //header button
  var slideElem = $("a.is-header-cta .btn-options .wrapper");
  var slideItems = slideElem.find("span");
  var itemLimit = $(slideItems).length;
  var slideLength = "";
  var i = 1;
  setInterval(function(){
    slideLength = slideElem.attr("data-slidelength");
    slideElem.css("transform", "translateY(-"+ slideLength +"px)");
    if((i+1) <= itemLimit){
        slideElem.attr("data-slidelength", parseInt(slideLength)+36);
    }
    else{
      slideElem.attr("data-slidelength", 36);
      slideElem.css("transform", "translateY(0px)");
      i=0;
    }
    //console.log(i, slideLength);
    i++;
  }, 1200)

  //header logo
  $(window).on("scroll", function(){
    var distanceToHeader = $(window).scrollTop() - ($(".home-banner").height() - 100);
    if(distanceToHeader >= 0){
      $(".banner-menu-wrapper").addClass("is-fixed");
    }
    else{
      $(".banner-menu-wrapper").removeClass("is-fixed");
    }
  })

  //header background for mobile
  $(".home-banner").css("max-height", $(window).height()+"px");

  //link scroll
  $("[data-target]").click(function(){
    var elementClass = "."+$(this).attr("data-target");
    $('html, body').animate({
      scrollTop: $(elementClass).offset().top - 88
    }, 1000);
  })

  //mobile owl carousel for experience
  if($(window).width()<=1198.88){
    $(".home-experience .content").addClass("owl-carousel");
  }

  //--PROJECT SLIDER START
  $(".home-experience .content.owl-carousel").owlCarousel({
    items:3,
    startPosition: 2,
    center: true,
    stagePadding: 90,
    margin: 90,
    mouseDrag: false,
    smartSpeed: 1000
  });
})
