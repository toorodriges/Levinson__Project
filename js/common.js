





$(document).ready(function(){
$('.spoiler-body').hide();
$('.spoiler-title').click(function(){
    $(this).toggleClass('opened').toggleClass('closed').siblings().slideToggle();
    if($(this).hasClass('opened')) {
        $(this).html('Скрыть');
    }
    else {
        $(this).html('Подробнее');
    }
});
});


$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});




$(document).ready(function() {


 
  $("#owl-demo-1").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items : 1,
      loop: true,
       navText : ["","Далее"]
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

      var e = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;
    992 > e ? $(".owl-next , .owl-prev").html('<a href="#item-top" class="owl-next">далее</a>') : 
  
  $(".owl-dot").html('<a href="#item-top" class="owl-dot"></a>');
 
});

  $("#owl-demo ").owlCarousel({
  	  navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items : 1,
  });
$(function(){
		$('.big-menu').slicknav({
	label: 'меню',
	duration: 500,});
});



$(document).ready(function () {
	$('.big-menu > li > a, .slicknav_nav > li > a, .up-arrow > a, .owl-next, a.owl-dot').click(function () {
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top;

	$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});
});

new WOW().init();






