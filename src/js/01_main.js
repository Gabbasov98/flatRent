function advantagesSlider() {
    var swiper = new Swiper('.advantages .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.advantages .swiper-button-next',
            prevEl: '.advantages .swiper-button-prev',
        },
    })
}

function gallery() {
    var swiper = new Swiper(".gallery .mySwiper", {
        spaceBetween: 7,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".gallery .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".gallery .swiper-button-next",
            prevEl: ".gallery .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

function collectionSlider() {
    var swiper = new Swiper('.collection2 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 32,
        navigation: {
            nextEl: '.collection2 .swiper-button-next',
            prevEl: '.collection2 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 3,
            },
        }
    })
}

$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });

    gallery()
    collectionSlider()
    if (window.innerWidth < 992) {
        advantagesSlider()
    }

    $(window).resize(function() {
        if (window.innerWidth < 992) {
            advantagesSlider()
        }
    })

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__mob").toggleClass("header__mob--active")
    })

    $(".scroll-up").click(function() {
        $("body,html").scrollTop(0);
    })
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".scroll-up").addClass("scroll-up--active")
        } else {
            $(".scroll-up").removeClass("scroll-up--active")
        }
    })


    // $('.video').parent().click(function() {
    //     if ($(this).children(".video").get(0).paused) {
    //         $(this).children(".video").get(0).play();
    //         $(this).children(".playpause").fadeOut();
    //     } else {
    //         $(this).children(".video").get(0).pause();
    //         $(this).children(".playpause").fadeIn();
    //     }
    // });
});