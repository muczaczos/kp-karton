"use strict";

function fadeIn(str, windowBottom) {
    $(str).each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
  }

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();

      fadeIn(".apple-section", windowBottom);

      fadeIn(".service-section", windowBottom);

      fadeIn(".transport-section", windowBottom);

      fadeIn(".footer", windowBottom);

    }).scroll(); //invoke scroll-handler on page-load
  });


	jQuery(document).ready(function() {
		var offset = 220;
		var duration = 500;
		jQuery(window).scroll(function() {
			
		});
 
		jQuery('.right-margin__paragraph-down').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
	});