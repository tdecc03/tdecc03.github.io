$(function(){
  $(".menu-icon").click(function(){
      $("nav").toggleClass("open");
	    $("nav").slideToggle(500);
      if($("nav").hasClass("open")){
        $(".set").hide();
        $(".reset").show();
      } else {
        $(".set").show();
        $(".reset").hide();
      }
	});

  var topBtn = $("#top-btn");
  topBtn.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.click(function(){
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });

  $(".skill").hover(function(){
    $(this).find("p").slideDown();
  }, function(){
    $(this).find("p").slideUp();
  });
});
