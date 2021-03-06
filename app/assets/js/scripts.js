$(function() {

	$(".mouse-icon").click(function() {
		$("html,body").animate({
			scrollTop:$(".main-content--advantages").offset().top
		},800)
	});
$(".main-head__toggle-menu").click(function() {
  $(this).toggleClass("on");
  $(".main-nav__hamburger").slideToggle();
  return false;
});


    
 $({blurRadius: 5}).animate({blurRadius: 0}, {
	duration: 1500,
	easing: 'swing',
	step: function() {
		$(".lines").css({
			"-webkit-filter": "blur("+this.blurRadius+"px)",
			"filter": "blur("+this.blurRadius+"px)"
		});
	}
},{
    offset:'70%'
});
var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
$(".lines").each(function() {
	var tcount = $(this).data("count");
	$(this).animateNumber({ number: tcount,
		easing: 'easeInQuad',
		"font-size": "40px",
		numberStep: comma_separator_number_step},
		2000);
});


	$(".main-content__partners__carousel__partners").owlCarousel({
		loop:true,
		margin:150,
		// nav:true,
		autoplay:true,
		autoplayTimeout:1000,
		 responsive:{
				0:{
					items:1,
					},
			520:{
				items:1,
						},
			560:{
					items:2,
					},
		 
			768:{
		items:2,
						},
		992:{
			items:3,
	},
			1200:{
			items:4,
			}
	}
});
$(".main-content--carousel-eq").owlCarousel({
		loop:true,
		margin:150,
		 nav:false,
		 autoplay:true,
		 autoplayTimeout:1000,
		 responsive:{
				0:{
					items:1,
					},
		520:{
				items:1,
						},
			560:{
					items:2,
					},
		 
			768:{
		items:2,
						},
		992:{
			items:3,
	},
			1200:{
			items:4,
			}
	}
	});




$('.item__vertical__img-svg').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

	});
	$('.item__vertical__img-svg--partners').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

	});
});
