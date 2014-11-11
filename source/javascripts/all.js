//= require jquery
//= require_tree .
//= require jquery.smoothState.js

$(document).ready(function () {
  console.log("Testing123");

  $(function() {
    $('.show-offcanvas').click(function() {
      toggleNav();
    });
  });

  function toggleNav() {
    if ($('.offcanvas-menu').hasClass('show-nav')) {
      $('.offcanvas-menu').removeClass('show-nav');
      $('body').css('overflow', 'auto');
    } else {
      $('.offcanvas-menu').addClass('show-nav');
      $('body').css('overflow', 'hidden');
    }
  }
});
