$(function(){
  $("nav").click(function(){
    $("ul").slideUp();
  });

  $('.menu-icon').click(function(){
	    $("header").toggleClass('open');
	    $("nav").slideToggle(500);
	});
});
