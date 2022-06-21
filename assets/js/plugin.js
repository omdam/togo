/********************************
 *
 * lazy load  *
 *
 ********************************/

function lazyLoad() {
    const images = document.querySelectorAll(".lazy-omd");

    const optionsLazyLoad = {
        //  rootMargin: '-50px',
        // threshold: 1
    };

    const imageObserver = new IntersectionObserver(function (enteries) {
        enteries.forEach(function (entery) {
            if (!entery.isIntersecting) {
                return;
            } else {
                preloadImage(entery.target);
                imageObserver.unobserve(entery.target);
            }
        });
    }, optionsLazyLoad);

    images.forEach(function (image) {
        imageObserver.observe(image);
    });
}

function preloadImage(img) {
    img.src = img.getAttribute("data-src");
    img.onload = function () {
        img.parentElement.classList.remove("loading-omd");
        img.parentElement.classList.add("loaded-omd");
        img.parentElement.parentElement.classList.add("lazy-head-om");
    };
}

jQuery(document).ready(function ($) {
    /********************************
     *
     *-scroll to the section  *
     *
     ********************************/

    $(".nav-list-om > li > a").click(function (e) {
        e.preventDefault();

        let section_id = $(this).attr("href");

        $("html, body").animate(
            {
                scrollTop: $(section_id).offset().top,
            },
            2000
        );
    });

    /********************************
     *
     *-slider-om  *
     *
     ********************************/
    new Swiper(".home_our_branches_ .swiper-container", {
        spaceBetween: 16,
        slidesPerView: 3,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".home_our_branches_ .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".home_our_branches_ .swiper-button-next",
            prevEl: ".home_our_branches_ .swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    /********************************
     *
     *-slider-om  *
     *
     ********************************/
    new Swiper(".home_how_app_work__ .swiper-container", {
        spaceBetween: 16,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".home_how_app_work__ .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".home_how_app_work__ .swiper-button-next",
            prevEl: ".home_how_app_work__ .swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });

    /********************************
     *
     * tabs block for main singin form  *
     *
     ********************************/

    $(".ss-activate-tab-om").on("click", function (e) {
        e.preventDefault();

        let target_id = $(this).data("form-tab");

        $(target_id).siblings().removeClass("active-om").hide();
        $(target_id).fadeIn().addClass("active-om");
    });

    /********************************
     *
     * show password  *
     *
     ********************************/
    $(".show-password-button-om").on("click", function (e) {
        e.preventDefault();

        if ($(this).parent().find("input").attr("type") == "text") {
            $(this).parent().find("input").attr("type", "password");
            $(this).removeClass("show-om");
        } else {
            $(this).parent().find("input").attr("type", "text");
            $(this).addClass("show-om");
        }
    });

    /********************************
     *
     * footer colapsed in small sizes *
     *
     ********************************/
    //
    if ($(window).width() <= 991) {
        $(".collapse-head-om").on("click", function (e) {
            e.preventDefault();

            $(".collapse-head-om")
                .not(this)
                .parent()
                .find(".list-collapse-om")
                .slideUp();
            $(this)
                .parent()
                .find(".list-collapse-om")
                .slideToggle({
                    queue: false,
                    complete: function () {
                        $(".list-collapse-om").each(function () {
                            if ($(this).css("display") == "none") {
                                $(this).parent().removeClass("active");
                            } else {
                                $(this).parent().addClass("active");
                            }
                        });
                    },
                });
        });
    }

    /********************************
     *
     * menu active and close button  *
     *
     ********************************/
    // nav men activation
    $("#menu-butt-activ-om").on("click", function (e) {
        e.preventDefault();

        $("#navbar-menu-om").addClass("active-menu");
        $(".overlay").addClass("active");
        $("body").addClass("overflow-body");
    });

    // nav men close
    $(".close-butt-om , .overlay ").on("click", function (e) {
        e.preventDefault();
        $("#navbar-menu-om").removeClass("active-menu");
        $(".overlay").removeClass("active");

        $("body").removeClass("overflow-body");
    });

    /********************************
     *
     * sticky navbar *
     *
     ********************************/
    // asign height to the header
    var headerHeight = $("header").outerHeight();
    // $("header").height(headerHeight);

    var lastScroll = 0;
    $(document).on("scroll", function () {
        var currentScroll = $(this).scrollTop();

        // scroll down
        if (currentScroll < lastScroll && currentScroll > headerHeight + 100) {
            // add class avtive menu
            // if ($(".fixed-header-warper").hasClass("not-active-menu-om")) {
            $(".fixed-header-warper").addClass("active-menu-om");
            $(".fixed-header-warper").removeClass("not-active-menu-om");
            // }
            // console.log("move up");
        } else if (
            currentScroll > lastScroll &&
            currentScroll > headerHeight + 100
        ) {
            // scroll up
            // remove class avtive menu
            if ($(".fixed-header-warper").hasClass("active-menu-om")) {
                $(".fixed-header-warper").removeClass("active-menu-om");
                $(".fixed-header-warper").addClass("not-active-menu-om");
            }
            // $("#search-button-activation-om").removeClass("search-is-active");
            // $("#search-form-act-om").addClass("not-active").removeClass("active");
        } else {
            $(".fixed-header-warper").removeClass("active-menu-om");
            $(".fixed-header-warper").removeClass("not-active-menu-om");
        }
        lastScroll = currentScroll;
    });

    $(".input_file__ ").on("change", function (e) {
        let fileName = " ";
        let elementToTakeFileVal = $(this)
            .closest(".parent___group__")
            .find(".file_name__");

        if (e.target.files[0]) {
            fileName = e.target.files[0].name;
            elementToTakeFileVal.addClass("active");
        } else {
            elementToTakeFileVal.removeClass("active");
        }

        elementToTakeFileVal.text(fileName);
    });

    lazyLoad();
});
