$(function() {

	$(".mouse-icon").click(function() {
		$("html,body").animate({
			scrollTop:$(".main-content--advantages").offset().top
		},800)
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
    offset:'30%'
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
});