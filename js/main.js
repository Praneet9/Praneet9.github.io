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

function changeMode() {
    var toggle = document.getElementById('toggle-mode');
    var toggle_img = toggle.children[0]
    var toggle_span = toggle.children[1]
    if (toggle_span.className === 'dark-mode') {
        var found = true
        while (found == true) {
            var dark_mode = document.getElementsByClassName('dark-mode')
            if (dark_mode.length == 0) {
                found = false;
            }
            for (var idx = 0; idx < dark_mode.length; idx++) {
                dark_mode[idx].classList.replace('dark-mode', 'light-mode');
            }
        }
        found = true;
        while (found == true) {
            var dark_mode = document.getElementsByClassName('btn-outline-light')
            if (dark_mode.length == 0) {
                found = false;
            }
            for (var idx = 0; idx < dark_mode.length; idx++) {
                dark_mode[idx].classList.replace('btn-outline-light', 'btn-outline-dark');
            }
        }
        var dark_mode = document.getElementsByTagName('body')
        dark_mode[0].classList.replace('dark-body', 'light-body');
        toggle_img.src = 'assets/moon.png'
        // toggle_span.innerHTML = 'Dark Mode'
    }
    else if (toggle_span.className === 'light-mode') {
        var found = true
        while (found == true) {
            var light_mode = document.getElementsByClassName('light-mode')
            if (light_mode.length == 0) {
                found = false;
            }
            for (var idx = 0; idx < light_mode.length; idx++) {
                light_mode[idx].classList.replace('light-mode', 'dark-mode');
            }
        }
        found = true;
        while (found == true) {
            var light_mode = document.getElementsByClassName('btn-outline-dark')
            if (light_mode.length == 0) {
                found = false;
            }
            for (var idx = 0; idx < light_mode.length; idx++) {
                light_mode[idx].classList.replace('btn-outline-dark', 'btn-outline-light');
            }
        }
        var light_mode = document.getElementsByTagName('body')
        light_mode[0].classList.replace('light-body', 'dark-body');
        toggle_img.src = 'assets/sun.png'
        // toggle_span.innerHTML = 'Light Mode'
    }
}

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$('.navtitle').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});
