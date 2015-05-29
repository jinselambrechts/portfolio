var main = function () {
  "use strict";

	$(".overmijknop").click(function() {
		$("html, body").animate({
			scrollTop: $(".overmij").offset().top
		}, 1000);
	});

	$(".portfolioknop").click(function() {
		$("html, body").animate({
			scrollTop: $(".portfolio").offset().top
		}, 1000);
	});

	$(".contactknop").click(function() {
		$("html, body").animate({
			scrollTop: $("footer").offset().top
		}, 1000);
	});

	$(".naarbovenknop").click(function() {
		$("html, body").animate({
			scrollTop: $(".homepage").offset().top
		}, 1000);
	});

	$(".naaronderknop").click(function() {
		$("html, body").animate({
			scrollTop: $(".overmij").offset().top
		}, 1000);
	});

	$(".naaronderknop2").click(function() {
		$("html, body").animate({
			scrollTop: $(".portfolio").offset().top
		}, 1000);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()) {
			$(".naarbovenknop").fadeIn();
		}
		else {
			$("naarbovenknop").fadeOut();
		}
	});

}

$("document").ready(main);
