var main = function () {
  "use strict";

  $(".home").click(function() {
		$("html, body").animate({
			scrollTop: $(".homepage").offset().top
		}, 1000);
	});

	$(".over-mij").click(function() {
		$("html, body").animate({
			scrollTop: $(".website").offset().top
		}, 1000);
	});

	$(".portfolio").click(function() {
		$("html, body").animate({
			scrollTop: $(".website").offset().top
		}, 1000);
	});

	$(".contact").click(function() {
		$("html, body").animate({
			scrollTop: $("footer").offset().top
		}, 1000);
	});

	$(".naar-boven").click(function() {
		$("html, body").animate({
			scrollTop: $(".homepage").offset().top
		}, 1000);
	});
}

$("document").ready(main);