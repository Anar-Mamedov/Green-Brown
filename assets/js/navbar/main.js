$(document).ready(function () {

    $('#Blog__BlogCarousel').owlCarousel({
        // items: 3,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 5000,
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
        },
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            768: {
                items: 2,
                nav: false,
            },
            1200: {
                items: 3,
                nav: true,
                loop: false,
            },
        },
        singleItem: true,
        nav: true,
    });

    var e, t, o, n, a, s, i;
    for ($('#Header__BlogCarousel').owlCarousel({
        items: 4,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
    }),
             $('header').addClass('header-fix'),
             // $('[data-toggle="tooltip"]').tooltip(),
             window.addEventListener('load', function () {
                 var e = document.getElementsByClassName('needs-validation');
                 Array.prototype.filter.call(e, function (e) {
                     e.addEventListener('submit', function (t) {
                         !1 === e.checkValidity() &&
                         (t.preventDefault(), t.stopPropagation()), e.classList.add(
                             'was-validated');
                     }, !1);
                 });
             }, !1), e = document.getElementsByClassName('penta-select'), t = 0; t <
         e.length; t++) {
        for (n = e[t].getElementsByTagName(
            'select')[0], (a = document.createElement('DIV')).setAttribute(
            'class',
            'select-selected'), a.innerHTML = n.options[n.selectedIndex].innerHTML, e[t].appendChild(
            a), (s = document.createElement('DIV')).setAttribute('class',
            'select-items select-hide'), o = 1; o <
             n.length; o++) (i = document.createElement(
            'DIV')).innerHTML = n.options[o].innerHTML, i.addEventListener(
            'click',
            function (e) {
                var t, o, n, a, s;
                for (a = this.parentNode.parentNode.getElementsByTagName(
                    'select')[0], s = this.parentNode.previousSibling, o = 0; o <
                     a.length; o++)
                    if (a.options[o].innerHTML == this.innerHTML) {
                        for (a.selectedIndex = o, s.innerHTML = this.innerHTML, t = this.parentNode.getElementsByClassName(
                            'same-as-selected'), n = 0; n <
                             t.length; n++) t[n].removeAttribute('class');
                        this.setAttribute('class', 'same-as-selected');
                        break;
                    }
                s.click();
            }), s.appendChild(i);
        e[t].appendChild(s), a.addEventListener('click', function (e) {
            e.stopPropagation(), d(this), this.nextSibling.classList.toggle(
                'select-hide'), this.classList.toggle('select-arrow-active');
        });
    }

    function d(e) {
        var t, o, n, a = [];
        for (t = document.getElementsByClassName(
            'select-items'), o = document.getElementsByClassName(
            'select-selected'), n = 0; n < o.length; n++) e == o[n] ?
            a.push(n) :
            o[n].classList.remove('select-arrow-active');
        for (n = 0; n < t.length; n++) a.indexOf(n) &&
        t[n].classList.add('select-hide');
    }

    document.addEventListener('click', d);
    var l = !1;
    $('ul.ull').hover(function () {
        l = !0;
    }, function () {
        l = !1;
    }), $('.penta-dropdown').hover(function () {
        $('.penta-dropdown-content', this).stop(!0, !0).animate({
            top: '0px',
        }, l ? 0 : 250), $('#bg-penta').stop(!0, !0).delay(50).show('fade', 'bg-penta-show', 300), $('#header .field-1 a > svg').delay(50).css('fill', 'black'), $('#header .field-2 a').addClass('hoverable'), $(this).children('a').addClass('active');
    }, function () {
        $('.penta-dropdown-content', this).stop(!0, !0).animate({
            top: '-1000px',
        }, l ? 0 : 250), $('#bg-penta').stop(!0, !0).delay(50).hide('fade', 'bg-penta-show', 300), $('#header .field-1 a > svg').delay(50).css('fill', 'white'), $('#header .field-2 a').removeClass('hoverable'), $(this).children('a').removeClass('active');
    }), $('.penta-dropdown-2').hover(function () {
        $('.corporate-dropdown', this).stop(!0, !0).delay(50).show('blind', 300), $('#bg-penta').stop(!0, !0).delay(50).show('fade', 'bg-penta-show', 300), $(this).children('a').addClass('active');
    }, function () {
        $('.corporate-dropdown', this).stop(!0, !0).delay(50).hide('blind', 300), $('#bg-penta').stop(!0, !0).delay(50).hide('fade', 'bg-penta-show', 300), $(this).children('a').removeClass('active');
    }), $('.get-a-quick-order').on('click', function () {
        $('body').stop(!0).toggleClass('overflow-hidden'), $(
            '.get-a-quick-order-popup').stop(!0, !0).toggle('fade', 300);
        $('body,html').animate({
            scrollTop: 0,
        }, 500);

    }), $('.popup-bg').on('click', function () {
        /* Eğer, iletişim formunda arkaya basınca kapanması istyorsak bu kodu aktif edebiliriz. */
        /*$("body").stop(!0).removeClass("overflow-hidden"), $(".get-a-quick-order-popup").stop(!0, !0).hide("fade", 300)*/
    }), $('.get-a-quick-order-popup .close').on('click', function () {
        $('body').stop(!0).removeClass('overflow-hidden'), $(
            '.get-a-quick-order-popup').stop(!0, !0).hide('fade', 300);
    }), document.querySelectorAll('.origin-center').forEach(e => {
        let t = e.getBBox(),
            o = t.x,
            n = t.y,
            a = o + t.width / 2 + 'px ' + (n + t.height / 2) + 'px';
        e.style.setProperty('transform-origin', a);
    }), document.querySelectorAll('.origin-left').forEach(e => {
        let t = e.getBBox(),
            o = t.x,
            n = t.y,
            a = (t.width, t.height, o + 'px ' + n + 'px');
        e.style.setProperty('transform-origin', a);
    });
}), $(document).on('keyup', function (e) {
    27 == e.keyCode && ($('body').stop(!0).removeClass('overflow-hidden'), $(
        '.get-a-quick-order-popup').hide('fade', 300));
}), $(window).scroll(function () {
    //$(window).scrollTop() >= 100 ? $("header").addClass("header-fixed") : $("header").removeClass("header-fixed")
});
var prevScrollpos = window.pageYOffset;


window.onscroll = function () {
    if (window.pageYOffset > 500) {
        var e = window.pageYOffset;
        var position = '0';

        document.getElementById('header').style.top = prevScrollpos > e ? position + 'px' : '-100px';
        if (document.getElementsByTagName('body')[0].classList.contains('header_fixed') && e > prevScrollpos) {
            document.getElementsByTagName('body')[0].classList.remove('header_fixed');
        } else if (!document.getElementsByTagName('body')[0].classList.contains('header_fixed') && prevScrollpos > e) {
            document.getElementsByTagName('body')[0].classList.add('header_fixed');
        }
        prevScrollpos = e;
    } else if ($('#topbar').length && window.pageYOffset >= $('#topbar').height()) {
        document.getElementById('header').style.top = '0px';
    } else if (window.pageYOffset < 50 && $('#topbar').length) {
        document.getElementById('header').style.top = $('#topbar').height().toString() + 'px';
    }
}, $('.site-select .check-btn').on('click', function () {
    var e = $('.responsive-detect-input').val();
    e.indexOf('http') >= 0 ? ($('.responsive-detect-iframe').attr('src', e), console.log('1', e)) : ($('.responsive-detect-iframe').attr('src', 'https://' + e), console.log('2', 'https://' + e));
}), $(window).scroll(function () {
    $(this).scrollTop() >= 50 ? $('#return-to-top').fadeIn(200) : $(
        '#return-to-top').fadeOut(200);
}), $(function () {
    $('#return-to-top').click(function () {

        $('body,html').animate({
            scrollTop: 0,
        }, 500);
    });
}), $('#WhatWeDid_Comments').owlCarousel({
    items: 1,
    autoplay: !0,
    autoplayTimeout: 3e3,
    dots: !0,
    pagination: !0,
}), AOS.init();


jQuery(function ($) {
    $(window).scroll(function () {
        if (100 <= $(window).scrollTop())
            $('#header.header-fix').css('background', 'rgba(0, 0, 0, 0.7)');
        else
            $('#header.header-fix').css('background', 'rgba(0, 0, 0, 0.0)');
    });
});

jQuery(function ($) {
    setTimeout(function () {
        if ($(window).scrollTop() == 1) $(window).scrollTop(0);
    }, 1000);
});
