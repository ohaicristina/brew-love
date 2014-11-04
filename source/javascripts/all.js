//= require jquery
//= require_tree .
//= require jquery.smoothState.js

$(document).ready(function () {
  console.log("Testing123");

  $(function() {
    $('.menu-button').click(function() {
      // Calling a function in case you want to expand upon this.
      toggleNav();
    });
  });

  function toggleNav() {
    if ($('.offcanvas-menu').hasClass('show-nav')) {
      $('.offcanvas-menu').removeClass('show-nav');
    } else {
      $('.offcanvas-menu').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
  }
});
