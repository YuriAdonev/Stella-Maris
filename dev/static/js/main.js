$(document).ready(function () {
    svg4everybody({});
		toggleAccordion();
	
		if ($('body').hasClass('home-page')) {
			var slideItems = [];

			$('.header-slider').each(function () {
				slideItems = $(this).find('.header-slider__item');
			})

			$('.header-count__summ .summ').html(slideItems.length);

			var interleaveOffset = 0.7;

			var swiperOptions = {
				loop: true,
				speed: 1000,
				watchSlidesProgress: true,
				mousewheelControl: true,
				keyboardControl: true,
				navigation: {
					nextEl: ".header-slider-arrow-btn-right",
					prevEl: ".header-slider-arrow-btn-left"
				},
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.width * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".slide-inner").style.transform =
								"translate3d(" + innerTranslate + "px, 0, 0)";
						}      
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".slide-inner").style.transition =
								speed + "ms";
						}
					},
					init: function() {
						var headerBg = document.querySelectorAll('.header__over'),
								headerBgOpacity = 0;

						window.addEventListener('scroll', headerBgScroll, false);

						function headerBgScroll() {
							if (window.scrollY > 30) {
								for (var i =0; i <headerBg.length; i++) {
									headerBg[i].style.opacity = ((window.scrollY - 30) / (headerBg[0].clientHeight / 100 )) / 100;

									if (window.scrollY >= headerBg[0].clientHeight || window.scrollY == 0 ) {
										headerBg[i].style.opacity = 0;
									}
								}
							} else {
                for (var i =0; i <headerBg.length; i++) {
										headerBg[i].style.opacity = 0;
								}
              }
						};
					}
				}
			};

			var swiperMain = new Swiper(".header-slider", swiperOptions);
			
			$('.header-count__current').html(swiperMain.realIndex + 1);
			
			swiperMain.on('slideChange', function () {
				$('.header-count__current').html(swiperMain.realIndex + 1);
			});
			
			
		}
});

//var currentSlide = 0;
//
//function showSlide (slideId) {
//	var slideNumbers = [];
//		slideTitles = [],
//		slideTexts = [];
//
//	$('.slider-pagination-no-wrap').each(function () {
//		slideNumbers = $(this).find('.slider-pagination-no');
//	})
//	$('#ho-slider-title-top-wrap').each(function () {
//		slideTitles = $(this).find('.ho-slider-title-top');
//	})
//	$('#ho-slider-txt-wrap').each(function () {
//		slideTexts = $(this).find('.ho-slider-txt');
//	})
//	for(var i=0; i < slideNumbers.length; i++) {
//		$(slideNumbers[i]).removeClass('first');
//		$(slideTitles[i]).removeClass('first');
//		$(slideTexts[i]).removeClass('first');
//	}
//	
//	if(slideId >= slideNumbers.length) {
//		slideId = (slideNumbers.length - 1);
//	}
//	if(slideId < 0) {
//		slideId = 0;
//	}
//
//	$(slideNumbers[slideId]).addClass('first');
//	$(slideTitles[slideId]).addClass('first');
//	$(slideTexts[slideId]).addClass('first');
//	currentSlide = slideId;
//}
//
//showSlide(currentSlide);
//
//$('#ho-slider-arrow-btn-left').click(function(){
//	currentSlide--;
//	showSlide(currentSlide);
//});
//$('#ho-slider-arrow-btn-right').click(function(){
//	currentSlide++;
//	showSlide(currentSlide);
//});

$('.cc-window__close_btn').click(function() {
		$('.cc-window').addClass('disable');
});

$('.menu__btn').click(function(){
		$('.main-menu').toggleClass('active');
		$('body').toggleClass('no-scroll');
});
$('.menu-close').click(function(){
		$('.main-menu').toggleClass('active');
		$('body').toggleClass('no-scroll');
});

$(".anim-title").animated("fadeInLeft");
$(".anim-title-bg").animatedNew();

$('.specialists__items').slick({
		infinite: true,
		dots: false,
		arrows: true,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1
});

function toggleAccordion() {
	$('.js-accordion').each(function () {
		var items = $(this).find('.js-accordion-item');
		var itemsNotActive = items.not('.active');
		items.find('a.active').click(function () {
			return false;
		});
		var contents = itemsNotActive.find('.js-accordion-item-content');
		contents.slideUp();
		$(this).find('.js-accordion-item-link').click(function () {
			var parent = $(this).parents('.js-accordion-item');
			var parentSiblings = parent.siblings('.js-accordion-item');
			parentSiblings.find('.js-accordion-item-content').slideUp();
			parentSiblings.removeClass('active');
			parent.find('.js-accordion-item-content').slideToggle();
			parent.toggleClass('active');
		});
	});
}
