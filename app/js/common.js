$(function() {

	$('#my-menu').mmenu({
		extensions:[ 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right' ],
		navbar: {
			title: '<img src="../img/logo-1.svg" alt="Салон красоты Смитлер">'
		},
	});

	var api = $('#my-menu').data('mmenu');

	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});

	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

// выравнивание высоты окон в меню 2
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
		},100);
	});
// end

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
// выравнивание высоты окон в 2-м меню
	$('.carousel-services-content').equalHeights();

	// function onResize() {
	// 	$('.carousel-services-content').equalHeights();
	// }onResize();

	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		})
	}carouselService();

	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	// function onResize() {
	// 	$('.carousel-services-content').equalHeights();
	// }onResize();
	// window.onresize = function() {onResize()};

});








