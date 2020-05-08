
  $(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    autoplay: false,
    center: true,
    loop: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:3,
            nav: true
        }
    },
    navText: [
        '<span></span>',
        '<span></span>'
    ]
  });
});

$(document).resize(function(){
  $('.owl-carousel').owlCarousel({
    autoplay: false,
    center: true,
    loop: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:3,
            nav: true
        }
    },
    navText: [
        '<span></span>',
        '<span></span>'
    ]
  });
});