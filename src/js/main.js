$(document).ready(function () {
    $('.news-item__slider').slick({
        infinity: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        centerMode: true,
        prevArrow: $('.news-item__btns-carousel .arrow-prev'),
        nextArrow: $('.news-item__btns-carousel .arrow-next'),
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    dots: true,
                }
            }
        ]
    })
    $('.news-item__recomendation').slick({
        infinity: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        // mobileFirst: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
            // {
            //     breakpoint: 768,
            //     settings: "unslick",
            // },
            // {
            //     breakpoint: 0,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         dots: true,
            //     }
            // }
        ]
    })
    $('.catalog__slider').slick({
        infinity: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        centerMode: true,
        prevArrow: $('.catalog__btns-carousel .arrow-prev'),
        nextArrow: $('.catalog__btns-carousel .arrow-next'),
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    dots: true,
                }
            }
        ]
    })
    $('.item-cart__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.item-cart__nav'
    });

    $('.item-cart__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.item-cart__for',
        dots: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                }
            }
        ]
    });
})

$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() <= '767') {
            $('.about__list-partners').slick({
                rows: 2,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
            })
        } else {
            $('.about__list-partners').slick('unslick');
        }
    }).trigger('resize');
})

// tabs
$(document).ready(function () {
    $('.tabs-container__tabs').on('click', 'a:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs-container').find('div.tabs-container__item').removeClass('active').eq($(this).index()).addClass('active');
    });
})

$(document).ready(function () {
    $('.tabs-container__item-name-product-order a').on('click', function () {
        $(this).next().slideToggle();
    })
})

// order next
$(document).ready(function () {
    $('.btn-next--1').on('click', function () {
        $('.order-content').removeClass('active');
        $('.order-content--2').addClass('active');
    })
    $('.btn-next--2').on('click', function () {
        $('.order-content').removeClass('active');
        $('.order-content--3').addClass('active');
    })
    $('.btn-prev--2').on('click', function () {
        $('.order-content').removeClass('active');
        $('.order-content--1').addClass('active');
    })
})

// filter
$(document).ready(function () {
    $('.click-show').on('click', function () {
        $('.click-show').removeClass('active');
        $('.click-show').next().slideUp();
        $(this).next().slideDown();
        $(this).addClass('active');
    })
})

// mobile-menu
$(document).ready(function () {
    $('#burger').on('click', function () {
        $('.mobile-menu').toggleClass('active');
        $('.menu-categoryes').removeClass('active');
    })
})

// menu filter
$(document).ready(function () {
    $('#all-categoryes').on('click', function () {
        $('.menu-filter').addClass('active');
    })
    $('.drop1').on('click', function () {
        $('.menu-filter').removeClass('active');
    })
})

$(document).ready(function () {
    $('.menu-categoryes a.title').on('click', function () {
        $('.menu-categoryes').removeClass('active');
        $('.menu-filter').addClass('active');
    })
    $('.drop2').on('click', function () {
        $('.menu-categoryes').removeClass('active');
    })
})

$(document).ready(function () {
    $('#menu-filter').on('click', function () {
        $('.menu-filter').removeClass('active');
        $('.menu-categoryes').addClass('active');
    })
})

$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// delete row order
$(document).ready(function () {
    $('.delete-row').on('click', function () {
        $(this).parent().remove();
    })
})

// catalog main item resize
// $(document).ready(function () {
//     $('.catalog-main__row li').each(function () {
//         if ($(window).width() >= 1025) {
//             $('.catalog-main__row li:nth-child(-n+3)').addClass('item--big')

//         }
//     })
// })
$(document).ready(function () {


    $(window).resize(function () {

        const points = [
            {
                point: 1025,
                big: 3,
                low: 5
            },
            {
                point: 769,
                big: 2,
                low: 4
            },
            {
                point: 0,
                big: 0,
                low: 0
            }
        ]

        const currentWidth = $(document).width()

        const pointIndex = points.findIndex(function (item) {
            if (currentWidth >= item.point) return true;
            return false;
        });

        const { big, low } = points[pointIndex]

        $('.catalog-main__row li').removeClass('item-big')

        var numberLi = 0
        $('.catalog-main__row li').each(function () {
            if (numberLi < big) {
                $(this).addClass('item-big')
            }
            if (numberLi >= (big + low - 1)) {
                numberLi = -1;
            }
            numberLi++
        })

    }).trigger('resize')
})