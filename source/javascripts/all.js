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

  function updateApi() {
    apiString = "../data/beerStyles.json";

    $.getJSON(apiString, function(data) {

      beers = data.beers;
      $(".artists li").remove();

      $.each(artists, function(i) {
        $(".artists").append("<li data-score='" + data.response.artists[i].hotttnesss + "'>" + data.response.artists[i].name + "</li>");
        //$(".artists").append("<li>" + data.response.artists[i].hotttnesss + "</li>");
      });
    })

    .done(function(data) {
      $("li").each(function(i) {

        if ($(this).attr("data-score") >= 0.8) {
          $(this).addClass("redcircle");
        }

        else {
          $(this).addClass("bluetext");
        }


      })
    });

  }

  $("input").on({

    change: function() {
      inputGenre = $(this).val();
      updateApi();
    }

  });


});
