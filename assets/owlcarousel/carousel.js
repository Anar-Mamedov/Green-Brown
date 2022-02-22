$(function () {
  const nexticon = '<i class="fas fa-angle-right"></i>';
  const previcon = '<i class="fas fa-angle-left"></i>';

  $('.category-slayder').owlCarousel({
    nav: true,
    navText: [previcon, nexticon],
    dots: false,
    margin: 40,
    smartSpeed: 1000,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      900: { items: 4 },
      1000: { items: 9 },
      1200: { items: 9 },
      1500: { items: 9 },
    }
  });
  $('.card_slider').owlCarousel({
    nav: true,
    navText: [previcon, nexticon],
    dots: false,
    margin: 5,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      670: { items: 1 },
      900: { items: 2 },
      1020: { items: 2 },
      1200: { items: 3 },
      1400: { items: 4 },
      1700: { items: 5 },
    }
  });
  $('.music_slider').owlCarousel({
    nav: true,
    navText: [previcon, nexticon],
    dots: false,
    margin: 40,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      670: { items: 1 },
      900: { items: 2 },
      1020: { items: 2 },
      1200: { items: 3 },
      1400: { items: 3 },
      1700: { items: 3 },
    }
  });
  $('.card_section_slider').owlCarousel({
    nav: true,
    navText: [previcon, nexticon],
    dots: false,
    margin: 5,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      670: { items: 1 },
      900: { items: 1 },
      1730: { items: 2 },

    }
  });
  $('.blog_slider').owlCarousel({
    nav: true,
    navText: [previcon, nexticon],
    dots: false,
    margin: 40,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      670: { items: 1 },
      900: { items: 2 },
      1020: { items: 2 },
      1300: { items: 3 },
      1400: { items: 3 },
      1750: { items: 4 },
    }
  });
  $('.tv_slider').owlCarousel({
    nav: true,
    navText: [previcon, nexticon],
    dots: false,
    margin: 5,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      670: { items: 1 },
      900: { items: 2 },
      1020: { items: 2 },
      1300: { items: 3 },
      1400: { items: 3 },
      1750: { items: 4 },
    }
  });
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: false,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      1040: {
        items: 3
      },
      1740: {
        items: 5
      }
    }
  });
});

