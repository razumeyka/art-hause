@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/jquery.maskedinput.js')
@@include('./lib/jquery.viewportchecker.js')
@@include('./lib/slick.js')
@@include('./lib/jquery.sticky-kit.js')

$(document).ready(function(){
	
// mobile_menu
    
    $('.burger').click( function() { 
        $('.menu-screen').slideToggle(500); 
		if ($('.burger').hasClass('burger_active')) {
			setTimeout(function() {
				$('.burger').removeClass( 'burger_active' );
			}, 600);
			return;
		} else {
			$('.burger').addClass('burger_active');
		}
    });
	
// main-screen height
	
	function setHeiHeight() {
		$('.home .main-screen .video-background').css({
			height: $(window).height() + 100 + 'px'
		});
	}
	
	if(window.innerWidth > 1366) {
		setHeiHeight(); 
	} else {
		$('.home .main-screen .video-background').css({
			height: '0px'
		});
	}

	$(window).resize(function(){
		if(window.innerWidth > 1366) {
			setHeiHeight();
		} else {
			$('.home .main-screen .video-background').css({
				height: '0px'
			});
		}
	});
	$(window).resize();
	
	
// 	carousel

    $('.partners-page__buttons .button').click(function(e){ 
		e.preventDefault();
		$('.partners-page__buttons .button').removeClass('active');
		$('.slider-partners__wrapper').css('margin-left','-'+$(this).index()+'00%'); 
		$(this).addClass('active'); 
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
	
	$('.production-page .img-text__img').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		arrows: false,
		autoplay: true,
    	autoplaySpeed: 3000
	});
	
// input[type="file"]

	$('input[type="file"]').change(function(){
		if($(this).val()==''){
			$(this).next().find('.file__text').html('');
			return;
			}
		//console.log(.files);
		var ar=[];
		for (var i = 0; i < $(this)[0].files.length; i++) {
			ar.push($(this)[0].files[i].name);
		}
		$(this).next().find('.file__text').html(ar.join(', '));
	});
	
	
// hidden text
	
    $(".production-page__more-info").slideUp(0);
    $(".button_up").click(function(event){
        event.preventDefault();
        $(this).closest('.wrapper').find('.production-page__more-info').slideDown(500);
		$(this).addClass('active');
    });
	
    $(".button_down").click(function(event){
        event.preventDefault();
        $(this).closest('.production-page__more-info').slideUp(500);
		$(this).closest('.production-page__more-info').closest('.wrapper').find('.button_up').removeClass('active');
		$(this).addClass('active');
    });
	
	$(".plates__more-info").hide();
	$(".products-page .plates__plate").hover(function(){
        $(this).find('.plates__text').find('.plates__description').find('.plates__more-info').slideToggle(500);
		$(this).find('.plates__text').toggleClass('active');
    });
	
	
    $(".plates__up-button").click(function(event){
        event.preventDefault();
        $(this).next('.plates__more-info').slideDown(300);
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
	
});	


// popup-dialogues
var clickPopupForm = function(e){
    //$.fancybox.defaults.touch = false;
	$('#popup-form-src').html(
		'<div class="header__content flex_between">' +
			'<div class="header__center-block">' +
				'<a href="/" class="logo logo_small"></a>' +
			'</div>' +
		'</div>' +
		'<iframe class="form-iframe form-iframe_footer" src="' + $(this).data('src') + '" width="100%" height="' + ($(this).data('height') || 550) + '" align="center" style="border:none; overflow:hidden;" scrolling="no" onload="adjustIframeHeightOnLoad(this)"></iframe>'
	);
	$.fancybox.open([
		{
			src  : '#popup-form-src',
			type : 'inline',
			opts : {
				touch: false,
			}
		},
	], {
		loop : false
	});
}
var adjustIframeHeightOnLoad = function (t) {
    try {
        $(t).css('height', t.contentWindow.document.body.scrollHeight + 50 + "px");
    } catch (e){}
}
$(document).ready(function(){// начальная привязка кнопок
    try{$('*[data-popupform]').unbind().click(clickPopupForm);}catch(e){}
});
$(window).resize(function(){// перепривязка кнопок в слайдерах - не придумал ни чего лучше, так как сам slick на таймауте работает
    setTimeout(
        "try{$('*[data-popupform]').unbind().click(clickPopupForm);}catch(e){}",
        100
    );
});


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