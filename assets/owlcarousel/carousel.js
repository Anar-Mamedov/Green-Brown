$(function (){
    const nexticon = '<i class="fas fa-angle-right"></i>';
    const previcon = '<i class="fas fa-angle-left"></i>';

    $('.category-slayder').owlCarousel({
        nav: true,
        navText: [previcon, nexticon],
        dots: false,
        margin: 5,
        smartSpeed: 1000,
        responsive:{
        0:{items:2},
        600:{items:3},
        900:{items:4},
        1000:{items:9},
        1200:{items:9},
        1500:{items:9},
    }
    });
    $('.card_slider').owlCarousel({
        nav: true,
        navText: [previcon, nexticon],
        dots: false,
        margin: 5,
        smartSpeed: 1000,
        responsive:{
        0:{items:1},
        670:{items:1},
        900:{items:2},
        1020:{items:2},
        1200:{items:3},
        1400:{items:4},
        1700:{items:5},
    }
    });
});