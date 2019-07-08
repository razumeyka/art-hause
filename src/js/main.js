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
	
	$(".menu-screen").stick_in_parent();
	
// languages
	
    $('.languages__item').click(function(e){ 
		$('.languages__item').removeClass('languages__item_active');
		$(this).toggleClass('languages__item_active'); 
    });	
	
// main-screen height
	
	function setHeiHeight() {
		$('.video-background').css({
			height: $(window).height() + 'px'
		});
	}
	
	if(window.innerWidth > 1366) {
		setHeiHeight(); 
	}

	$(window).resize(function(e){
		if(window.innerWidth > 1366) {
			setHeiHeight();
		}
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
	
	$('.news-item-page__slider').slick({
		infinite: true,
		slidesToShow: 4,
		responsive: [
			{
			  breakpoint: 1280,
			  settings: {
				slidesToShow: 3
			  }
			},
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
	
// product-slider
	
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: true,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 2
			  }
			},
		]
	});
	
// slider - only mobile

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
	
	function mobileOnlySlider2() {		
		$('.documents-screen__documents').slick({
			infinite: true,
			slidesToShow: 1,
		});
	}

	if(window.innerWidth < 768) {
		mobileOnlySlider2();
	}
	
	$(window).resize(function(e){
		if(window.innerWidth < 768) {
			if(!$('.documents-screen__documents').hasClass('slick-initialized')){
				mobileOnlySlider2();
			}

		}else{
			if($('.documents-screen__documents').hasClass('slick-initialized')){
				$('.documents-screen__documents').slick('unslick');
			}
		}
	});
	
	$('.img-text__img').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		arrows: false,
		autoplay: true,
    	autoplaySpeed: 1000
	});
	
	
	
// hidden text
	
    $(".production-page__more-info").slideUp(0);
    $(".button_up").click(function(event){
        event.preventDefault();
        $(this).closest('.wrapper').find('.production-page__more-info').slideDown(500);
		$(this).closest('.production-page__stage').find('.production-page__caption').addClass('active');
		$(this).addClass('active');
		var dest = $(this).attr('href'); 
		if(dest !== undefined && dest !== '') { 
			$('html').animate({ 
				scrollTop: $(dest).offset().top 
			}, 500 
			);
		}
		return false;
    });
	
    $(".button_down").click(function(event){
        event.preventDefault();
        $(this).closest('.production-page__more-info').slideUp(500);
		$(this).closest('.production-page__more-info').closest('.wrapper').find('.button_up').removeClass('active');
		$(this).closest('.production-page__stage').find('.production-page__caption').removeClass('active');
		$(this).addClass('active');
    });
	
    $(".plates__up-button").click(function(event){
        event.preventDefault();
        $(this).next('.plates__more-info').slideDown(500);
		$(this).addClass('active');
		$(this).parent().find('.plates__down-button').addClass('active');
    });
	
    $(".plates__down-button").click(function(event){
        event.preventDefault();
        $(this).prev('.plates__more-info').slideUp(500);
		$(this).removeClass('active');
		$(this).parent().find('.plates__up-button').removeClass('active');
    });
	
	
// mask
	
    $('input[type="tel"]').mask("8-999-999-99-99");

// 	GoogleMap
	
	var markerImage, marker;

	function initMap() {
		initialize();

		markerImage = new google.maps.MarkerImage(
			'../images/map-icon.png',
			new google.maps.Size(75, 95),
			new google.maps.Point(0, 0)
		);

		marker = new google.maps.Marker({
			icon: markerImage,
			position: {lat: 59.2092976, lng: 39.7832951},
			map: map,
			title:"Log Art House"
		});		
	}

	//инициализация карты в div "map"

	var map;
	function initialize() {
		map = new google.maps.Map(document.getElementById('map'), {
			disableDefaultUI: true,
			scrollwheel: false,
			center: {lat: 59.2092976, lng: 39.7832951},
			zoom: 12,
			styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#e6e6e6"},{"visibility":"on"}]}]
		});
	}
	
});	