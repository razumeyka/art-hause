@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/jquery.maskedinput.js')
@@include('./lib/jquery.viewportchecker.js')
@@include('./lib/slick.js')
@@include('./lib/jquery.sticky-kit.js')

$(document).ready(function(){
	
// mobile_menu
    
    $('.burger').click( function() { 
        $('.menu-screen').slideToggle(300); 
        $('.burger').toggleClass( 'burger_active' ); 
    });
	
$(".menu-screen").stick_in_parent(
	
);
	
// languages
	
    $('.languages__item').click(function(e){ 
		$('.languages__item').removeClass('languages__item_active');
		$(this).toggleClass('languages__item_active'); 
    });	
	
	
// slick-slider
	
	$('.slick-team').slick({
		infinite: true,
		slidesToShow: 3,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1
			  }
			},
		]
	}); 
	
	$('.partners-mobile').slick({
		infinite: true,
		slidesToShow: 1
	}); 	
	
// slider


	function mobileOnlySlider() {
		$('.figures__wrapper').slick({
			infinite: true,
			slidesToShow: 1
		});
	}

	if(window.innerWidth < 1024) {
		mobileOnlySlider();
	}

	$(window).resize(function(e){
		if(window.innerWidth < 1024) {
			if(!$('.figures__wrapper').hasClass('slick-initialized')){
				mobileOnlySlider();
			}

		}else{
			if($('.figures__wrapper').hasClass('slick-initialized')){
				$('.figures__wrapper').slick('unslick');
			}
		}
	});

	
// catalog-list
	
    $('.catalog-list ul li ul').hide();
    $('.catalog-list ul li').click(function(e){ 
		e.preventDefault();
        $(this).find("ul").slideToggle(500);
    });
	
	$('.mobile-catalog').click( function() { 
        $('.catalog-list').slideToggle(300);
		if($('header .menu').is(':visible')) {
			$('header .menu').hide();
			$('.burger').removeClass( 'burger_active' ); 
		}
		if($('.search').is(':visible')) {
			$('.search').hide();
		}
    });
	
// search
    
    $('.mobile-search').click( function() { 
        $('.search').slideToggle(300); 
		if($('header .menu').is(':visible')) {
			$('header .menu').hide();
			$('.burger').removeClass( 'burger_active' ); 
		}
		if($('.catalog-list').is(':visible')) {
			$('.catalog-list').hide();
		}
    });
	
	
// 	favorite

    $('.plate__favorite').click(function(e){ 
		e.preventDefault();
		$(this).toggleClass('active'); 
    });
	
	
	
	
	
		
	
// 	radio-buttons

    $('.radio-button').click(function(){ 
		$('.slider-price__wrapper').css('margin-left','-'+$(this).index()+'00%'); 
    });
	
// 	slick-slider	
	
	$('.reviews__content').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		arrows: false,
		autoplay: true,
    	autoplaySpeed: 2000
	});
	
// animation   
     
	$('.plates__item').viewportChecker({
		classToAdd: 'plates__item_visible',
		offset: 100
	}); 
	
	$('.portfolio-screen__button-wr').viewportChecker({
		classToAdd: 'portfolio-screen__button-wr_visible',
		offset: 100
	}); 
	
	$('.steps__icon').viewportChecker({
		classToAdd: 'steps__icon_visible',
		offset: 100
	}); 
	
	$('.prices-screen__button-wr').viewportChecker({
		classToAdd: 'prices-screen__button-wr_visible',
		offset: 100
	}); 
	
	
// change photo
	
	$('.wpcf7-form').hover(function(){
		$('.team__photo').toggleClass('change');
	});
		
	var scrollInput = $('.wpcf7-form-control-wrap').offset().top;
	$(document).on('scroll', function() {
		if ( window.innerWidth < 768 ) {
			var scroll = $(document).scrollTop();
			var height = window.innerHeight;
			var sh = scroll + height;
			if (sh > scrollInput) {
				$('.team__photo').addClass('change');	
			}	else {
				$('.team__photo').removeClass('change');	
			}
		};
	});	
		
	
// info
	
	$('.calculator-item__icon').click(function(){
		if ( window.innerWidth < 1280 ) {
			var info = $(this).closest('.calculator-item__name-wr').find('.calculator-item__info');
			if ( info.hasClass("active") ) {
				$('.calculator-item__info').removeClass('active');
			} else {
				$('.calculator-item__info').removeClass('active');
				info.addClass('active');
			}
		}
	});
	
	$('.calculator-item__icon').hover(function(){
		if ( window.innerWidth > 1279 ) {
			var info = $(this).closest('.calculator-item__name-wr').find('.calculator-item__info');
			if ( info.hasClass("active") ) {
				$('.calculator-item__info').removeClass('active');
			} else {
				$('.calculator-item__info').removeClass('active');
				info.addClass('active');
			}
		}
	});
	
// accordion
	
    $('.accordion__answer').hide();
    $('.accordion__question').click(function(){
        $(this).next().slideToggle(500);
		$(this).toggleClass('accordion__question_active');
    });
		
// mask
	
    $('input[type="tel"]').mask("8-999-999-99-99");
	
}); 