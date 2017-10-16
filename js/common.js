$(document).ready(function() {
	//resize function
		function wResize() {
			$('.main').css('height', $(window).height());
		};

		wResize();

		$(window).resize(function() {
			wResize()
		});

	//menu icon events
		$('.menu-icon').click(function() {
			$('.menu-icon').toggleClass('menu-icon_active');
			$('.menu').toggleClass('menu_active');
			$('.main-container').toggleClass('main-container_active');
			$('.main-container__item').removeClass('main-container__item_active');
			$('.menu__menu-name').removeClass('menu__menu-name_active');
			$('.menu__menu-pic').removeClass('menu__menu-pic_active');
		});

	//SVG Fallback
		if(!Modernizr.svg) {
			$("img[src*='svg']").attr("src", function() {
				return $(this).attr("src").replace(".svg", ".png");
			});
		};

	//main container events
		$('.menu .menu__item').each(function() {
			var _this = $(this);
			var btnName = _this.find('.menu__menu-name').text();
			var contHeader = $('.main-container__header').text();

			_this.click(function() {
				$('.menu__menu-name').removeClass('menu__menu-name_active');
				$('.menu__menu-pic').removeClass('menu__menu-pic_active');
				_this.find('.menu__menu-name').addClass('menu__menu-name_active');
				_this.find('.menu__menu-pic').addClass('menu__menu-pic_active');
				switch(btnName.toLowerCase()) {
					case 'about':
						$('.main-container__item').removeClass('main-container__item_active');
						$('.main-container__item_' +  btnName.toLowerCase()).addClass('main-container__item_active');
						break;
					case 'expirience':
						$('.main-container__item').removeClass('main-container__item_active');
						$('.main-container__item_' +  btnName.toLowerCase()).addClass('main-container__item_active');
						break;
					case 'skills':
						$('.main-container__item').removeClass('main-container__item_active');
						$('.main-container__item_' +  btnName.toLowerCase()).addClass('main-container__item_active');
						break;
					case 'portfolio':
						$('.main-container__item').removeClass('main-container__item_active');
						$('.main-container__item_' +  btnName.toLowerCase()).addClass('main-container__item_active');
						break;
					case 'contacts':
						$('.main-container__item').removeClass('main-container__item_active');
						$('.main-container__item_' +  btnName.toLowerCase()).addClass('main-container__item_active');
						break;
					default:
						$('.main-container__item_' +  btnName.toLowerCase()).removeClass('main-container__item_active');
				}
			});
		});
});

// $(window).load(function() {
// 	$(".top_header").animated("fadeInDown", "fadeOut");
// 	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
// 	$(".profi_right").animated("fadeInRight", "fadeOut");
// 	$(".s_profi form").animated("zoomIn", "fadeOut");
// });