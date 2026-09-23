$('.dental-treat-owl').owlCarousel({
   loop: true,
   nav: true,
   navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
   dots: false,
   autoplay: true,
   responsive: {
      0: { items: 1},
      767: { items: 2 },
      992: { items: 3}
   },
   margin:20
});

// case studeis //
$('.our-case-owl').owlCarousel({
   loop: true,
   nav: true,
   navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
   dots: false,
   autoplay: true,
   autoplayHoverPause:true,
   responsive: {
      0: { items: 1 },
      767: { items: 1 },
      992: { items: 1 }
   },
   margin:40
});


$('.digital-bytes-owl').owlCarousel({
   loop: true,
   nav: true,
   navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
   dots: false,
   autoplay: true,
   responsive: {
      0: { items: 1 },
      767: { items: 2 },
      992: { items: 3 }
   },
   margin:30
});

$('.work-owl').owlCarousel({
   loop: true,
   nav: true,
   navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
   dots: false,
   autoplay: true,
   responsive: {
      0: { items: 1 },
      767: { items: 2 },
      992: { items: 3 }
   },
   margin:30
});
$('.testi-owl').owlCarousel({
   loop: true,
   nav: true,
   navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
   dots: false,
   autoplay: true,
   responsive: {
      0: { items: 1 },
      767: { items: 2 },
      992: { items: 2 }
   },
   margin:30
});

$('.gallery-inter-owl').owlCarousel({
   loop: true,
   nav: true,
   navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
   dots: false,
   autoplay: true,
   responsive: {
      0: { items: 1 },
      767: { items: 3 },
      992: { items: 1 }
   },
   margin:30
});

// conter count //
$('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
          
          //chnage count up speed here
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

//header fixed//
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".header-area-n").addClass("fixed");
    } else {
        $(".header-area-n").removeClass("fixed");
    }
});

// mobile header 
$('.megamenu-column-header').on('click', function(){
    $(this).toggleClass('active').parent().siblings().children().removeClass('active');
}); 