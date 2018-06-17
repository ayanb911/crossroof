$(document).ready(function(){

  //header
  $(window).on("scroll", function(){
    var distanceToHeader = $(window).scrollTop() - ($(".home-banner").height() - 100);
    if(distanceToHeader >= 0){
      $(".banner-menu-wrapper").addClass("is-fixed");
    }
    else{
      $(".banner-menu-wrapper").removeClass("is-fixed");
    }
  })

  //scroll
  $("[data-target]").click(function(){
    var elementClass = "."+$(this).attr("data-target");
    $('html, body').animate({
      scrollTop: $(elementClass).offset().top - 88
    }, 1000);
  })

  //--project slider

  //border_color
  $(".project-img[data-border]").each(function(){
    var border_color = "2px solid "+$(this).attr("data-border");
    $(this).css("border", border_color);
  })


  //owl carousel
  $(".owl-carousel.project-images").owlCarousel({
    items:1,
    loop:true,
    stagePadding: 90,
    margin: 40,
    mouseDrag: false,
    smartSpeed: 1000
  });
  $(".owl-carousel.project-names").owlCarousel({
    items:5,
    center: true,
    loop:true,
    margin: 60,
    responsiveClass:true,
    navigation: true,
    mouseDrag: false,
    smartSpeed: 1000,
  });

  var projectImageSlider = $(".owl-carousel.project-images");
  var projectNameSlider = $(".owl-carousel.project-names");

  $(".owl-carousel.project-names .owl-nav>.owl-next").click(function(){
    projectImageSlider.trigger('next.owl.carousel');
  })
  $(".owl-carousel.project-names .owl-nav>.owl-prev").click(function(){
    projectImageSlider.trigger('prev.owl.carousel');
  })

  $('.owl-carousel').on('changed.owl.carousel', function(event) {
    console.log(event);
  });

})
