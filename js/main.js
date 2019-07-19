var overlay = document.getElementById("loader");

overlay.style.display = 'none';
document.getElementById("body").style.display = 'inline';
var time = 0;
var animate = ScrollReveal()
animate.reveal('.reveal', { distance: '100px', origin: 'bottom', delay: 200, interval: 50 });
animate.reveal('#hi_img', { distance: '100px', origin: 'bottom', delay: time += 100 });
animate.reveal('#name', { distance: '100px', origin: 'bottom', delay: time += 100 });
animate.reveal('#developer', { distance: '100px', origin: 'bottom', delay: 800 });
animate.reveal('#myDescription', { distance: '100px', origin: 'bottom', delay: time += 100 });
animate.reveal('#dwresume', { distance: '100px', origin: 'bottom', delay: time += 100 });
// animate.reveal('.navtitle', { distance: '100px', origin: 'left', delay: 100 });
// animate.reveal('.navlinks', { distance: '100px', origin: 'right', delay: 100 });
animate.reveal('.skills', { distance: '100px', origin: 'bottom', delay: 200, interval: 50 });
animate.reveal('#owl-carousel', { distance: '100px', origin: 'left', delay: 400 });
animate.reveal('#project_carousel', { distance: '100px', origin: 'left', delay: 400 });
animate.reveal('#about_card', { distance: '100px', origin: 'left', delay: 400 });
animate.reveal('#interested', { distance: '100px', origin: 'top', delay: 400 });
animate.reveal('#hire_header', { distance: '100px', origin: 'bottom', delay: 200 });
animate.reveal('#hiremesvg', { distance: '100px', origin: 'bottom', delay: 200 });
animate.reveal('#myemail', { distance: '100px', origin: 'bottom', delay: 200 });

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

var carouselEl = $('.owl-carousel');

$(".next-btn").click(function () {
    carouselEl.trigger('next.owl.carousel');
});

$(".prev-btn").click(function () {
    carouselEl.trigger('prev.owl.carousel');
});