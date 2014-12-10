//= require jquery
//= require jquery.smoothState.js
//= require handlebars-v2.0.0.js
//= require_tree .

$(document).ready(function () {
  console.log("Testing123");
  listBeers();
  toggleOffCanvas();



  //Active class toggle
  $(function() {
    $('.water-col').click(function() {
      toggleWaterActive();
    });
  });

  function toggleWaterActive() {
    var $waterh3 = $('.water-col h3').click(function(){
      $waterh3.removeClass('water-active');
      $(this).addClass('water-active');
    });
  }

  //Off-canvas toggles
  function toggleOffCanvas() {
    $('.show-offcanvas').click(function() {
      if($(this).is('#lager-trigger')) {
        showLagerOffCanvas();
      }
      else if($(this).is('#ale-trigger')) {
        showAleOffCanvas();
      }
      else if($(this).is('#hybrid-trigger')) {
        showHybridOffCanvas();
      }
      else {
        console.log('xtrigger');
      };
    });

    $('.x-trigger').click(function() {
      if($('.offcanvas-menu').hasClass('show-nav')) {
        $('.offcanvas-menu').removeClass('show-nav');
        $('body').css('overflow', 'auto');
      };
    });

  }

  function showLagerOffCanvas() {
      $('#lager-offcanvas-menu').addClass('show-nav');
      $('body').css('overflow', 'hidden');
  }

  function showAleOffCanvas() {
      $('#ale-offcanvas-menu').addClass('show-nav');
      $('body').css('overflow', 'hidden');
  }

  function showHybridOffCanvas() {
      $('#hybrid-offcanvas-menu').addClass('show-nav');
      $('body').css('overflow', 'hidden');
  }


  //Beer Menu Function
  function listBeers() {
    apiString = "data/beerStyles.json";

    $.getJSON(apiString, function(data) {
      beers = data.beers;
      $(".characteristic p").remove();

      $.each(beers, function(i) {
        $(".lagers").append('<a class="beer-link" href="#"  id="link"><li class="menu-item-box">' + data.beers[i].name + '</li></a>');
      });

      $.each(beers, function(b) {
        $("#history").append("<p>" + data.beers[b].history + "</p>");
        $("#color").append("<p>" + data.beers[b].color + "</p>");
        $("#flavor").append("<p>" + data.beers[b].flavor + "</p>");
        $("#hops").append("<p>" + data.beers[b].hops + "</p>");
        $("#malt").append("<p>" + data.beers[b].malt + "</p>");
        // $(".recommendations").append("<li>" + data.beers[0].reccomendation + "</li>");
      });
      $('#link').click(function() {
        window.history.pushState('obj', 'newtitle', '/belgian');
        return false;
      });

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

  //Handlbars

  //Render water properties template
  $(function() {

    var source = $("#water-template").html();
    var template = Handlebars.compile(source);
    var data = waterData;
    $("#water-information").html(template(data));
  });

});
