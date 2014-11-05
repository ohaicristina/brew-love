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
    } else {
      $('.offcanvas-menu').addClass('show-nav');
    }

    if ($('#site-wrapper').hasClass('show-nav')) {
      $('#site-wrapper').removeClass('show-nav');
    } else {
      $('#site-wrapper').addClass('show-nav');
    }
  }
});
