//= require jquery
//= require_tree .
//= require jquery.smoothState.js

$(document).ready(function () {
  console.log("Testing123");
  listBeers();

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

  function listBeers() {
    apiString = "data/beerStyles.json";

    $.getJSON(apiString, function(data) {
      beers = data.beers;
      $(".characteristic p").remove();
      $.each(beers, function(i) {
        $(".lagers").append('<li class="menu-item-box">' + data.beers[i].name + '</li>');
      });
      $.each(beers, function(i) {
        $("#history").append("<p>" + data.beers[0].history + "</p>");
        $("#color").append("<p>" + data.beers[0].color + "</p>");
        $("#flavor").append("<p>" + data.beers[0].flavor + "</p>");
        $("#hops").append("<p>" + data.beers[0].hops + "</p>");
        $("#malt").append("<p>" + data.beers[0].malt + "</p>");
      });
        // $(".recommendations").append("<li>" + data.beers[0].reccomendation + "</li>");

      });
    

    // .done(function(data) {
    //   $("li").each(function(i) {
    //     if ($(this).attr("data-score") >= 0.8) {
    //       $(this).addClass("redcircle");
    //     }
    //     else {
    //       $(this).addClass("bluetext");
    //     }
    //   })
    // });
  }
});
