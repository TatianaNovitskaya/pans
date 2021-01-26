$(document).ready(function () {


    function tomorowDate() {
        var d = new Date();
        var mm = d.getMonth()+1;
        var dd = d.getDate()+1;
        var yy = d.getFullYear();
var tomorrowDay = roundZero(dd) + "."+ roundZero(mm) +"."+ yy;
        var currentDay = document.querySelectorAll('.js__tomorrow');
        currentDay.forEach(function(item){
            item.innerHTML = tomorrowDay;
        });

    }
    tomorowDate();

    function roundZero(num){
        return num < 10 ? "0"+num : num;
    }

});
$(document).ready(function () {
    // $("[data-fancybox]").fancybox({
    //     loop: true
    // });


    var $window = $(window),
        win_height_padded = $window.height() * 1.1;
    if (window.innerWidth > 480) {
        $window.on('scroll', revealOnScroll);
    } else {
        $(".block_animated:not(.block_show)").each(function () {
            $(this).addClass('block_show');
        });
    }

    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() / 1.2;

        $(".block_animated:not(.block_show)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded >= offsetTop) {
                $this.addClass('block_show');
            }
        });
    }

    if (window.innerWidth > 480) {
        revealOnScroll();
    }


    svg4everybody();


});



$ (document).ready (function () {
    var topMenu = $ (".header__menu"),
        topMenuHeight = $ ('.header').outerHeight (),
        menuItems = $('.js__scroll__to');

    // menuItems.on ('click',function (e) {
    //     e.preventDefault ();
    //     var $this = $ (this);
    //     var dataHref = $this.attr ("data-header");
    //     var offsetTop = (($ ('.' + dataHref).offset ().top)-50);
    //     if(window.innerWidth > 480){
    //         offsetTop = (($ ('.' + dataHref).offset ().top)/1.1);
    //     }
    //     $ ('html, body').stop ().animate ({
    //
    //         scrollTop: offsetTop
    //     }, 900);
    //     changeClassHeader (offsetTop);
    // });
    menuItems.on ('click',function (e) {
        e.preventDefault ();

        var $this = $ (this);
        var dataHref = $this.attr ("data-header");
        var offsetTop = $ ('.' + dataHref).offset ().top;
        $ ('html, body').stop ().animate ({

            scrollTop: offsetTop
        }, 900);
        changeClassHeader (offsetTop);
    });
    document.addEventListener ("mousewheel", onWheel);
    function onWheel (e) {
        changeClassHeader ($ (window).scrollTop ());
        changeClassOnScroll ()
    }
    $(window).on("keypress", onPress);
    function onPress (e) {
        changeClassHeader ($ (window).scrollTop ());
        changeClassOnScroll ()
    }

    changeClassHeader ($ (window).scrollTop ());
    function setActiveClassHeader (currentName, state) {
        $ ('.header a.active').removeClass ('active');
        state = state || false;
        if (state) {
            $ ('[data-header="' + currentName + '"]').addClass ('active');
        } else {
            currentName.addClass ('active');
        }
    }

    function changeClassHeader (offsetTop) {
        if (offsetTop > 0) {
            $ ('.header').addClass ('header_scroll');
        } else {
            $ ('.header').removeClass ('header_scroll');
        }
    }

    function changeClassOnScroll () {
        $ ('section').each (function () {
            var currentElement = $ (this).offset ().top;
            if (currentElement <= $ (window).scrollTop () && currentElement + $ (this).height () >= $ (window).scrollTop ()) {
                var currentClass = $ (this).attr ('class');
                setActiveClassHeader (currentClass, true)
            }
        });
    }


});


document.addEventListener("DOMContentLoaded", function () {
    sliderInit.init()
});

var sliderInit = {
    init: function () {
        this.reviewSlider();
    },

    reviewSlider: function () {
        var reviewSlider = new Swiper('.review__slider .swiper-container', {
            speed: 400,
            spaceBetween: 10,
            loop: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.review__button-next',
                prevEl: '.review__button-prev',
            },

        });

    },

};
