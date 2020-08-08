document.addEventListener('DOMContentLoaded', function () {

	// sliders
	////////////////////////////////////////////////////////////////////

	// header
	var helpers = {
		addZeros: function (n) {
			return (n < 10) ?  n : '' + n;
		}
	};

	function sliderInit() {
		let $slider = $('.slick-hero');
		$slider.each(function () {
			let $sliderParent = $(this).parent();
			$(this).slick({
				slidesToShow: 1,
				dots: false,
				prevArrow: $('.slick-hero__btns .arrow-prev'),
				nextArrow: $('.slick-hero__btns .arrow-next'),
				autoplay: false,
				pauseOnFocus: false,
				pauseOnHover: false,
				// centerMode: true,
			});

			if ($(this).find('.item').length > 1) {
				$(this).siblings('.slides-numbers').show();
			}

			$(this).on('afterChange', function (event, slick, currentSlide) {
				$sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
			});

			let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
			$sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

		});
	};
	sliderInit();
})