/* nav has no drop shadow until content scrolls underneath */
function navBarDropShadow() {
  'use strict';
  $(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
      $('.navbar').css({
        'box-shadow': 'none',
        '-moz-box-shadow': 'none',
        '-webkit-box-shadow': 'none'
      });
    } else {
      $('.navbar').css({
        'box-shadow': '0 2px 5px rgba(0,0,0,0.26)',
        '-moz-box-shadow': '0 2px 5px rgba(0,0,0,0.26)',
        '-webkit-box-shadow': '0 2px 5px rgba(0,0,0,0.26)'
      });
    }
  });
}

$(document).ready(function() {
  'use strict';
//  $.material.init();
  navBarDropShadow();

});
