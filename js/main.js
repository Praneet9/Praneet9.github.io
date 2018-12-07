var overlay = document.getElementById("loader");

        window.addEventListener('load', function () {
            setTimeout(function () {

                overlay.style.display = 'none';
                document.getElementById("body").style.display = 'inline';
                let time = 0;
                ScrollReveal().reveal('.reveal', { distance: '100px', origin: 'bottom', delay: 200, interval: 50 });
                ScrollReveal().reveal('#hi_img', { distance: '100px', origin: 'bottom', delay: time += 100 });
                ScrollReveal().reveal('#name', { distance: '100px', origin: 'bottom', delay: time += 100 });
                ScrollReveal().reveal('#developer', { distance: '100px', origin: 'bottom', delay: 800 });
                ScrollReveal().reveal('#myDescription', { distance: '100px', origin: 'bottom', delay: time += 100 });
                ScrollReveal().reveal('#dwresume', { distance: '100px', origin: 'bottom', delay: time += 100 });
                ScrollReveal().reveal('.navtitle', { distance: '100px', origin: 'left', delay: 100 });
                ScrollReveal().reveal('.navlinks', { distance: '100px', origin: 'right', delay: 100 });
                ScrollReveal().reveal('.skills', { distance: '100px', origin: 'bottom', delay: 200, interval: 50 });
                ScrollReveal().reveal('#about_card', { distance: '100px', origin: 'left', delay: 400 });
                ScrollReveal().reveal('#interested', { distance: '100px', origin: 'top', delay: 400 });
                ScrollReveal().reveal('#hire_header', { distance: '100px', origin: 'bottom', delay: 200 });
                ScrollReveal().reveal('#hiremesvg', { distance: '100px', origin: 'bottom', delay: 200 });
                ScrollReveal().reveal('#myemail', { distance: '100px', origin: 'bottom', delay: 200 });
            }, 1000);
        })
