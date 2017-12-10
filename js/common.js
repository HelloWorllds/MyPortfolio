$(document).ready(function() {
	//resize function
		function wResize() {
			$('.main').css('height', $(window).height());
		}

		if ($(window).width() >= 1280) {
			wResize();
		}

		$(window).resize(function() {
			if ($(window).width() >= 1280) {
				wResize();
			}
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

	//slills
		$('.skills-item').each(function() {
			var _this = $(this);
			var percent = _this.data('percent');
			var spanPer = _this.find('.skills-item__percent');
			var overlay = _this.find('.skills-item__overlay');
			
			spanPer.text(percent.toString() + '%');

			overlay.css('height', percent + '%');

			if (percent == 50) {
				_this.css('width', '120px');
				_this.css('height', '120px');
			} else if (percent > 50) {
				var size = 100 + (percent * percent / 100);
				_this.css('width', size + 'px');
				_this.css('height', size + 'px');
			} else {
				var size = 115 - (percent * percent / 100);
				_this.css('width', size + 'px');
				_this.css('height', size + 'px');
			}
		});

	$(window).on('load', function() {
		var preloader = $('.preloader-container');
        var spinner = preloader.find('.preloader');
    
    	$('.main').css('opacity', '1');
	    spinner.css('opacity', '0');
	});
});

$(window).load(function() {
	$('.header h2').delay(450).animated('fadeInDown', 'fadeOut');
	$('.header h1').delay(450).animated('flipInY', 'fadeOut');
	$('.header h3').delay(450).animated('fadeInRight', 'fadeOut');
});