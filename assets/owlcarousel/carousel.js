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
        0:{items:1},
        600:{items:3},
        900:{items:4},
        1000:{items:5},
        1200:{items:6},
        1500:{items:8},
    }
    });
});