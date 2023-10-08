$(document).ready(function() {

    $(function() {
        $(".date-picker").datepicker();
    });

    // MOBILE-NAVIGATION-LIST

    $('.navigation-list').clone().appendTo('.mobile-menu-body');

    $('.hamburger').on('click', function() {
        if (!$('.mobile-menu').hasClass('mobile-view')) {
            $('.mobile-menu').addClass('mobile-view');
        } else {
            $('.mobile-menu').removeClass('mobile-view');
        }
    });

    $('#menu-close').on('click', function() {
        $('.mobile-menu').removeClass('mobile-view');
    });

    // SCROLL JS

    // $('.scroller').mCustomScrollbar();

    // STICKY NAVBAR

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.bottom-row').addClass('sticky');
            $('.bottom-row').css('transition-duration', '0.5s');
        } else {
            $('.bottom-row').removeClass('sticky');
            $('.bottom-row').css('transition-duration', '0.5s');
        }
    });


    // Select Picker

    $(function() {
        $('.selectpicker').selectpicker();
    });


    // WOW JS

    new WOW().init();

    // VIDEO SLIDER CENTER

    $('.video-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    // Product Slider JS

    $('.testimonial-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    // Product Slider JS

    $('.news-slider').slick({
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    // PRODUCT-SHOP-DETAIL SLIDER JS


    // VIDEOS SLIDER END

    // NUMBER COUNTER

    $(document).ready(function() {
        $('.num-in span').click(function() {
            var $input = $(this).parents('.num-block').find('input.in-num');
            if ($(this).hasClass('minus')) {
                var count = parseFloat($input.val()) - 1;
                count = count < 1 ? 1 : count;
                if (count < 2) {
                    $(this).addClass('dis');
                } else {
                    $(this).removeClass('dis');
                }
                $input.val(count);
            } else {
                var count = parseFloat($input.val()) + 1
                $input.val(count);
                if (count > 1) {
                    $(this).parents('.num-block').find(('.minus')).removeClass('dis');
                }
            }
            $input.change();
            return false;
        });

    });

    //   PRICE RANGE START

    var lowerSlider = document.querySelector('#lower');
    var upperSlider = document.querySelector('#upper');

    document.querySelector('#two').value = upperSlider.value;
    document.querySelector('#one').value = lowerSlider.value;

    var lowerVal = parseInt(lowerSlider.value);
    var upperVal = parseInt(upperSlider.value);

    upperSlider.oninput = function() {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

        if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;
            if (lowerVal == lowerSlider.min) {
                upperSlider.value = 4;
            }
        }
        document.querySelector('#two').value = this.value
    };

    lowerSlider.oninput = function() {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;
            if (upperVal == upperSlider.max) {
                lowerSlider.value = parseInt(upperSlider.max) - 4;
            }
        }
        document.querySelector('#one').value = this.value
    };

    //   PRICE RANGE END
});



// COLOR MODE CSS START
let darkmood = document.querySelector("#darkmood")
darkmood.onclick = () => {
    if (darkmood.classList.contains('fa-moon-o')) {
        darkmood.classList.replace('fa-moon-o', 'fa-sun-o')
        document.body.classList.add('color')
    }
    else {
        darkmood.classList.replace('fa-sun-o', 'fa-moon-o')
        document.body.classList.remove('color')
    }
}

let FirstIndex = 0;
function autoSlid() {
    setTimeout(autoSlid, 4000)
    let pics;
    const img = document.querySelectorAll('figure')
    for (pics = 0; pics < img.length; pics++) {
        img[pics].style.display = "none"
    }
    FirstIndex++;
    if (FirstIndex > img.length) {
        FirstIndex = 1
    }
    img[FirstIndex - 1].style.display = "block"
}
autoSlid()
// COLOR MODE CSS END

// SCROLL SCRIPT START
const mainSec = document.querySelector('.header')
const FooterElement = document.querySelector('.footer')
const ScrollTops = document.createElement("div")
ScrollTops.classList.add("scroll_style")
ScrollTops.innerHTML =`<i class="fa fa-arrow-up  arrow_icon"></i>`
FooterElement.after(ScrollTops);

const scrollElement = ()=> {
    mainSec.scrollIntoView({behavior:"smooth"});
};

ScrollTops.addEventListener("click" ,scrollElement);
// SCROLL SCRIPT END


// FORM SCRIPT START
const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');

const loginpopup = document.querySelector('.login_popup');
const closedIcon = document.querySelector('.closed_icon');

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active')
});


loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active')
});

loginpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
});

closedIcon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
})
// FORM SCRIPT END