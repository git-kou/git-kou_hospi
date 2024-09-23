$(function() {
  
        $('.han').click(function() {
          $('.nav_media').toggleClass('nav_media_active');
          $(this).toggleClass('active');
          $('.back').toggleClass('back_black');
        });

        $('.list_media a').click(function() {
          $('.nav_media').removeClass('nav_media_active');
          $('.han').removeClass('active');
          $('.back').removeClass('back_black');
        });

        $(window).resize(function () {
          if(window.matchMedia("(min-width:601px)").matches) {
            $('.nav_media').removeClass('nav_media_active');
            $('.han').removeClass('active');
            $('.back').removeClass('back_black');
          };
      });

  $(window).scroll(function(){

		      $('.touin_text,.touin_img,.syoukai_text,.syoukai_img').each(function(){
			    var pos = $(this).offset().top;
		    	var scr = $(window).scrollTop();
			    var win = $(window).height();
			    if (scr > pos - win + 100){
				  $(this).addClass('scr_y');
			    }else{
          $(this).removeClass('scr_y');
          };
		    });

    });
});