//= require jquery
//= reqire waypoints.min.js
//= require smooth-scroll.js
//= require jquery.smoothState.js
//= require handlebars-v2.0.0.js
//= require_tree .

$(document).ready(function () {
  listBeers();
  toggleOffCanvas();
  affixNav();
  smoothScroll.init();

  //Water Active class toggle on click
  $(function() {
    $('.water-col').click(function() {
      toggleWaterActive();
    });
  });

  // Affix ingredient nav
  function affixNav() {
    var navHeight = $('#ingredients-nav').outerHeight();

    $(window).scroll(function(){
      var navTop = $(window).scrollTop();

      if (navTop > 435) {
        $('#ingredients-nav').addClass('affix');
      }
      else {
        $('#ingredients-nav').removeClass('affix');
      }
    });

    $('.landing').waypoint(function() {
      $('#water-ing').removeClass('water-active');
      $('#malt-ing').removeClass('malt-active');
      $('#hops-ing').removeClass('hops-active');
      $('#yeast-ing').removeClass('yeast-active');
    });

    $('.water').waypoint(function() {
      $('#water-ing').addClass('water-active');
      $('#malt-ing').removeClass('malt-active');
      $('#hops-ing').removeClass('hops-active');
      $('#yeast-ing').removeClass('yeast-active');
    },
    {
      offset: navHeight
    });

    $('.malt').waypoint(function() {
      $('#water-ing').removeClass('water-active');
      $('#malt-ing').addClass('malt-active');
      $('#hops-ing').removeClass('hops-active');
      $('#yeast-ing').removeClass('yeast-active');
    },
    {
      offset: navHeight
    });

    $('.hops').waypoint(function() {
      $('#water-ing').removeClass('water-active');
      $('#malt-ing').removeClass('malt-active');
      $('#hops-ing').addClass('hops-active');
      $('#yeast-ing').removeClass('yeast-active');
    },
    {
      offset: navHeight
    });

    $('.yeast').waypoint(function() {
      $('#water-ing').removeClass('water-active');
      $('#malt-ing').removeClass('malt-active');
      $('#hops-ing').removeClass('hops-active');
      $('#yeast-ing').addClass('yeast-active');
    },
    {
      offset: navHeight
    });
  }


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
        var currentName =  data.beers[i].name;
        var currentID = data.beers[i].id;

        $(".lagers").append('<a class="beer-link" href="#'+ currentName + '" id="'+ currentID + '"><li class="menu-item-box">' + data.beers[currentID].name + '</li></a>');
      });

      $('.beer-link').click(function() {
        var currentArrayID = $(this).attr('id');
        $(".characteristic p").remove();
        $(".characteristic li").remove();


        $("#history").append("<p>" + data.beers[currentArrayID].history + "</p>");
        $("#color").append("<p>" + data.beers[currentArrayID].color + "</p>");
        $("#flavor").append("<p>" + data.beers[currentArrayID].flavor + "</p>");
        $("#hops").append("<p>" + data.beers[currentArrayID].hops + "</p>");
        $("#malt").append("<p>" + data.beers[currentArrayID].malt + "</p>");
        $(".recommendations").append("<li>" + data.beers[currentArrayID].recommendation + "</li>");
      });

      // $('.beer-link').click(function() {
      //   var currentID = $(this).attr('id');
      //
      //   window.history.pushState('obj', 'newtitle', currentID);
      //   return false;
      // });

    });
  }



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
  //Handlbars

  //Render water properties template
  $(function() {

    var source = $("#water-template").html();
    var template = Handlebars.compile(source);
    var data = waterData;
    $("#water-information").html(template(data));
  });
 });
