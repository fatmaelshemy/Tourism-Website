   // Testimonials carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items:5,
        margin:10,
        loop:true,
        touchDrag:true,
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
       nav : false,
        responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }

});
});

$(document).ready(function () {
    let navbar = $(".navbar");
    if ($(window).scrollTop() > 0) {
        navbar.css({"background": "white"});
    } else {
        navbar.css({"background": "transparent"});
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            navbar.css({"background": "white"});
        } else {
            navbar.css({"background": ""});
        }
    });
});
  function toggleScroll() {
      let body1 =document.body;
        if (body.style.overflow === 'hidden') 
        {
            body.style.overflow = '';
        } 
        else {
            body.style.overflow = 'hidden';
        }
    }
    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('main-nav');
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 0);
      });