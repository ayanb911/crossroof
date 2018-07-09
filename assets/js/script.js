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

  //link scroll
  $("[data-target]").click(function(){
    var elementClass = "."+$(this).attr("data-target");
    $('html, body').animate({
      scrollTop: $(elementClass).offset().top - 88
    }, 1000);
  })

  //--PROJECT SLIDER START

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

  //auto click
  var slideDuration = $(".owl-carousel.project-names .project-name").length * 1000;
  var projectInterval = function(){
    $(".owl-carousel.project-names .owl-nav>.owl-next").click();
  }
  var initiateProjectInterval = setInterval(projectInterval, slideDuration)

  //pause on hover
  $(".home-projects").hover(function(){
    clearInterval(initiateProjectInterval);
  }, function(){
    initiateProjectInterval = setInterval(projectInterval, slideDuration);
  })

  //--PROJECT SLIDER END

  //--SERVICE SLIDER START
  $(".home-services .service-images.owl-carousel").owlCarousel({
    items:1,
    loop:true,
    mouseDrag: false,
    smartSpeed: 1000
  });
  $(".home-services .service-descs.owl-carousel").owlCarousel({
    items:1,
    loop:true,
    mouseDrag: false,
    smartSpeed: 1000
  });
  $(".home-services .service-names.owl-carousel").owlCarousel({
    items:1,
    loop:true,
    mouseDrag: false,
    smartSpeed: 1000
  });

  var serviceSlider = $(".service-images.owl-carousel, .service-descs.owl-carousel");
  $(".service-names.owl-carousel .owl-nav>.owl-next").click(function(){
    serviceSlider.trigger('next.owl.carousel');
  })
  $(".service-names.owl-carousel .owl-nav>.owl-prev").click(function(){
    serviceSlider.trigger('prev.owl.carousel');
  })

  //auto click
  var slideDuration = $(".service-names.owl-carousel .service-name").length * 1000;
  var serviceInterval = function(){
    $(".service-names.owl-carousel .owl-nav>.owl-next").click();
  }
  var initiateServiceInterval = setInterval(serviceInterval, slideDuration);

  //pause on hover
  $(".home-services").hover(function(){
    clearInterval(initiateServiceInterval);
  }, function(){
    initiateServiceInterval = setInterval(serviceInterval, slideDuration);
  })
})
