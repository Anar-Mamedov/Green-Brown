function openURL(url) {
    window.location.href = url;
}
function targetURL(url) {
    window.open(url,"_blank");
    /*window.open.href = url;*/
}
function printDiv() {
    /*var printContents = document.getElementById(divName).innerHTML;*/
    var originalContents = document.body.innerHTML;
    var printContents = $(".container-area").html();
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
var body = $("html, body");
var windowWidth = 1024; /* Sabit Ekran Genişliği */
var windowHeight = 768; /* Sabit Ekran Yüksekliği */
$(document).ready(function() {
    windowWidth = $(window).width(); /* Ekran Genişliği */
    windowHeight = $(window).height(); /* Ekran Yüksekliği */
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.collapsible').collapsible();
    $('.tabs').tabs({ 'swipeable':true });
    $("input[type='tel']").mask("+99 999 999 9999");
    $('.materialize-textarea').characterCounter();
    $(".fancybox").fancybox({
        prevEffect: 'elastic',
        nextEffect: 'elastic',
        padding: 0,
        helpers: {
            title: {type: 'inside'}
        }
    });
    $(".fancybox-clip").fancybox({
        width : 800,
        height : 450,        
        padding: 0,
        type : 'iframe'
    });
    $(".fancybox-menu").fancybox({
        padding: 0,
        type : 'iframe',
        smallBtn : 'inline'
    });
    /*$('.question-btn').on('click', function() {
        body.animate({scrollTop: $(".bottom-form-area").offset().top}, 1000, 'swing');
    });
    $(".scroll-up").on("click", function() {
        body.stop().animate({scrollTop:body.offset().top}, 1000, 'swing');
    });*/
    $(".slider").owlCarousel({
        items:1,
        loop: true,
        center: true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplayHoverPause:true,
        smartSpeed:700,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $('.news-slider').owlCarousel({
        loop: true,
        margin: 28,
        center: false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:500,
        dots: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            /*0:{ 
                margin:0,
                center: true,
                items:1
            },*/
            0:{
                margin:15,
                items:2
            },
            992:{
                items:3
            }
        }
    });
    $('.concepts-slider').owlCarousel({
        loop: true,
        margin: 28,
        center: false,
        autoplay:false,
        autoplayTimeout:5000,
        smartSpeed:500,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{ 
                margin:0,
                center: true,
                autoplay:true,
                items:1
            },
            768:{
                margin:15,
                items:2
            },
            992:{
                items:3
            }
        }
    });
    $(".bottom-concepts-slider").owlCarousel({
        items:1,
        loop: true,
        center: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:500,
        animateOut: 'fadeOut',
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $(".gallery-slider").owlCarousel({
        items:1,
        loop: true,
        center: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:500,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});