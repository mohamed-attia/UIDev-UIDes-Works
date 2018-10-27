/*global $, jquery, alert*/
$(document).ready(function () {
    
    "use strict";
    
     $("html").niceScroll();
    
	$('.carousel').carousel({
      
		interval: 5000
	});
	
	//show color option div when click on gear
	$(".gear-check").click(function () {
        
	$(".color-option").fadeToggle();
	
	});
	//change theme color on click
	var coloLi = $(".color-option ul li");
	coloLi
	.eq(0).css("backgroundColor", "#e41b17").end()
	.eq(1).css("backgroundColor", "#e426d5").end()
	.eq(2).css("backgroundColor", "#009aff").end()
	.eq(3).css("backgroundColor", "#ffd500");
	
	coloLi.click(function() {
        
	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
        
	});
});

//loading screen
$(window).load(function () {
//show scroll
	$("body").css("overflow", "auto");
//loading elements
	$(".over-loading .spinner").fadeOut(3000,function (){
        
	$(this).parent().fadeOut(3000,function (){
        
	$(this).remove();
        
	});
	});
});

/*
$(window).load(function()
{
$(".over-loading,.over-loading, .spinners").fadeOut(2000);
});
*/
