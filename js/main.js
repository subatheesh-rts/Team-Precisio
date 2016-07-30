
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


if ($(window).width()<550) {
  // $('.nav').hide();
  // $('.menu-button').show();
  // $('.nav-li li').css("display","list-item");
  //
  // $('.menu-button').click(function(){
  //   $(".top-bar").addClass("top-bar-black");
  //   $('.nav-box').toggle();
  // });
  // $(".nav-li a").click(function(){$('.nav-box').toggle();});
  // $('.event-container').hide();
  $('.row').removeClass('row');
  $('.add').addClass('row');
  $('.columns').removeClass('three').addClass('six')
  // setInt
}

var winHeight = $(window).height();
var topbarHeight = $('.topbar').height();


$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topbarHeight+1
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

var scroll_changes = function(){
  var winScroll = $(this).scrollTop(),
      topbar= $(".topbar"),
      homeHeight = $(".image-slider").height(),
      activeNav = $(".nav-active"),
      aboutHeight = $(".about-us").height(),
      gameHeight = $(".game-of-numbers").height(),
      carsHeight = $(".cars").height(),
      // teamHeight = $(".team-container").height(),
      // eventGridHeight = $(".event-container").height(),
      // eventContentHeight = $(".event-content").height(),
      totalEventScrollHeight = homeHeight+aboutHeight+100+gameHeight-topbarHeight;


// console.log($(".event-content"));

  if(winScroll >= 2){topbar.addClass("topbar-black");$("a[href$='home']").addClass("nav-active");}
  else if(winScroll < 2){
    topbar.removeClass("topbar-black");$("a[href$='home']").removeClass("nav-active");
    // if ($(window).width()<550) {
    //   $(".nav-box").css("display","none");
    // }
}

  if((homeHeight-topbarHeight) <= winScroll){
      // topBar.addClass("top-bar-black");
      activeNav.removeClass("nav-active");
      $("a[href$='home']").removeClass("nav-active");
      $("a[href$='about-us']").addClass("nav-active");
  }
  else if ((homeHeight-topbarHeight) > winScroll){
    // topBar.removeClass("top-bar-black");
    $("a[href$='about-us']").removeClass("nav-active");
  }

  if((homeHeight+aboutHeight-topbarHeight ) <= winScroll){
    activeNav.removeClass("nav-active");
    $("a[href$='about-us']").removeClass("nav-active");
    // $("a[href$='cars']").addClass("nav-active");
  }
  if((homeHeight+aboutHeight-topbarHeight+gameHeight) <= winScroll){
    activeNav.removeClass("nav-active");
    $("a[href$='about-us']").removeClass("nav-active");
    $("a[href$='cars']").addClass("nav-active");
  }
  else if((homeHeight+aboutHeight-topbarHeight+gameHeight ) > winScroll){
    $("a[href$='cars']").removeClass("nav-active");
  }
  if((homeHeight+aboutHeight-topbarHeight+gameHeight+carsHeight) <= winScroll){
    activeNav.removeClass("nav-active");
    $("a[href$='cars']").removeClass("nav-active");
    $("a[href$='contact-us']").addClass("nav-active");
  }
  else if((homeHeight+aboutHeight-topbarHeight+gameHeight+carsHeight) > winScroll){
    $("a[href$='contact-us']").removeClass("nav-active");
  }
}
scroll_changes();

$(window).scroll(scroll_changes);

// $(".game-of-numbers").css("min-height",winHeight-topbarHeight);
$(".circle").css("height",$(".circle").width());
$(".image-zoom").css("height",winHeight);
imageHeight=$(".image").height();
imageWidth=$(".image").width();
carHeight=$(".car").height();
carWidth=$(".car").width();
$(".imag").css("height",carHeight);
$(".imag").css("width",carWidth);

$(".car").click(function(){
  classArray= $(this).attr('class').split('-');
  switch(classArray[1]){
    case '1' : $(".image").html("<img class='img' src='img/car1.jpg'/>");
             $(".desc").html();
             break;
    case '2' : $(".image").html("<img class='img' src='img/car2.jpg'/>");
             $(".desc").html();
             break;
    case '3' : $(".image").html("<img class='img' src='img/car3.jpg'/>");
             $(".desc").html();
             break;
    case '4' : $(".image").html("<img class='img' src='img/car4.jpg'/>");
             $(".desc").html();
             break;
  }
  $(".image-zoom").fadeIn(200);
  $("body").addClass("fixed");
});

$(".close-image").click(function(){
  $(".image-zoom").hide();
  $("body").removeClass("fixed");
});
$(".image-container").click(function(){});
$(".overlay").click(function(){
  $(".image-zoom").hide();
  $("body").removeClass("fixed");
});
var homescreen = function(){
  $('.loader-overlay').hide();
  $(document).ready(function(){
    $(".loader").slideUp(1000);
    $("body").removeClass("fixed");
    var url = window.location.href;
    var urlsplit= url.split("#");
    switch(urlsplit[1]){
      case "home":$("html, body").delay(1000).animate({ scrollTop: $('.home').offset().top }, 1000);
                  break;
      case "about-us":$("html, body").delay(1000).animate({ scrollTop: $('.about-us').offset().top-100 }, 1000);
                      break;
      case "cars":$("html, body").delay(1000).animate({ scrollTop: $('.cars').offset().top-100 }, 1000);
                  break;
    }
  });
}
setTimeout(homescreen,6000);
