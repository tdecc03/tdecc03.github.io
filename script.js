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
});
