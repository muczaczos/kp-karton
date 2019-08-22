"use strict";

function fadeIn(str, windowBottom) {
  $(str).each(function () {
    /* Check the location of each desired element */
    var objectBottom = $(this).offset().top + $(this).outerHeight();

    /* If the element is completely within bounds of the window, fade it in */
    if (objectBottom < windowBottom) { //object comes into view (scrolling down)
      if ($(this).css("opacity") == 0) { $(this).fadeTo(500, 1); }
    } else { //object goes out of view (scrolling up)
      if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
    }
  });
}

$(window).on("load", function () {
  $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();

    fadeIn(".apple-section", windowBottom);

    fadeIn(".service-section", windowBottom);

    fadeIn(".transport-section", windowBottom);


  }).scroll(); //invoke scroll-handler on page-load
});


jQuery(document).ready(function () {
  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function () {

  });

  jQuery('.right-margin__paragraph-down').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })
});


$(window).scroll(function () {

  // selectors
  var $window = $(window),
    $body = $('body'),
    $panel = $('.section-js'),
    $left = $('.left-margin__social-link'),
    $leftUp = $('.left-margin__paragraph-up'),
    $rightMail = $('.right-margin__icon'),
    $rightArrow = $('.right-margin__arrow'),
    $sideNav = $('.side-navigation__link');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 1.4);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });
      $left.removeClass(function (index, css) {
        return (css.match(/(^|\s)text-\S+/g) || []).join(' ');
      });
      $leftUp.removeClass(function (index, css) {
        return (css.match(/(^|\s)text-\S+/g) || []).join(' ');
      });
      $rightMail.removeClass(function (index, css) {
        return (css.match(/(^|\s)text-\S+/g) || []).join(' ');
      });
      $rightArrow.removeClass(function (index, css) {
        return (css.match(/(^|\s)text-\S+/g) || []).join(' ');
      });

      $sideNav.removeClass(function (index, css) {
        return (css.match(/(^|\s)text-\S+/g) || []).join(' ');
      });



      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
      $left.addClass('text-' + $(this).data('color'));
      $leftUp.addClass('text-' + $(this).data('color'));
      $rightMail.addClass('text-' + $(this).data('color'));
      $rightArrow.addClass('text-' + $(this).data('color'));
      $sideNav.addClass('text-' + $(this).data('color'));

    }
  });

}).scroll();


$(document).ready(function () {

  'use strict';

  var c, currentScrollTop = 0,
    navbar = $('.navigation');
  document.getElementById('item-1').style.transform = 'translateX(70px)';
  document.getElementById('item-2').style.transform = 'translateX(70px)';
  document.getElementById('item-3').style.transform = 'translateX(75px)';
  document.getElementById('item-4').style.transform = 'translateX(75px)';
  $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();

    currentScrollTop = a;



    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");
      document.getElementById('item-1').style.transform = 'translateX(-5px)';
      document.getElementById('item-2').style.transform = 'translateX(-5px)';
      document.getElementById('item-3').style.transform = 'translateX(-5px)';
      document.getElementById('item-4').style.transform = 'translateX(-5px)';


    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
      document.getElementById('item-1').style.transform = 'translateX(70px)';
      document.getElementById('item-2').style.transform = 'translateX(70px)';
      document.getElementById('item-3').style.transform = 'translateX(75px)';
      document.getElementById('item-4').style.transform = 'translateX(75px)';


    }

    c = currentScrollTop;
  });

});

$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});

