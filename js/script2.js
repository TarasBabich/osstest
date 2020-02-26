$(window).scroll(function(event) {
        if($(this).scrollTop() > 90) {
        $(".scroll-mnu").slideDown();
        return false;
  	 		}
    		else {
        $(".scroll-mnu").slideUp();
   		 }
		}); 