$(document).ready(function () {
    svg4everybody({});
		toggleAccordion();
});

var currentSlide = 0;

function showSlide (slideId) {
	var slideNumbers = [];
		slideTitles = [],
		slideTexts = [];

	$('.slider-pagination-no-wrap').each(function () {
		slideNumbers = $(this).find('.slider-pagination-no');
	})
	$('#ho-slider-title-top-wrap').each(function () {
		slideTitles = $(this).find('.ho-slider-title-top');
	})
	$('#ho-slider-txt-wrap').each(function () {
		slideTexts = $(this).find('.ho-slider-txt');
	})
	for(var i=0; i < slideNumbers.length; i++) {
		$(slideNumbers[i]).removeClass('first');
		$(slideTitles[i]).removeClass('first');
		$(slideTexts[i]).removeClass('first');
	}
	
	if(slideId >= slideNumbers.length) {
		slideId = (slideNumbers.length - 1);
	}
	if(slideId < 0) {
		slideId = 0;
	}

	$(slideNumbers[slideId]).addClass('first');
	$(slideTitles[slideId]).addClass('first');
	$(slideTexts[slideId]).addClass('first');
	currentSlide = slideId;
}

showSlide(currentSlide);

$('#ho-slider-arrow-btn-left').click(function(){
	currentSlide--;
	showSlide(currentSlide);
});
$('#ho-slider-arrow-btn-right').click(function(){
	currentSlide++;
	showSlide(currentSlide);
});


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
