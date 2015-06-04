
jQuery(window).bind('scroll', function (){
  var menuTop = $("#eng").offset().top;

  if ($(this).scrollTop() > menuTop){
    jQuery('#main-nav').addClass('navbar-fixed-top');
  } else {
    jQuery('#main-nav').removeClass('navbar-fixed-top');
  }
});

jQuery(document).ready(function($) {
  "use strict";
  $('#main-nav .nav').onePageNav({
    currentClass: 'active',
    scrollOffset: 69,
  });  
});

$(document).ready(function(){
   
  //.parallax(xPosition, speedFactor, outerHeight) options:
  //xPosition - Horizontal position of the element
  //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
  $('#top').parallax("50%", 0.05, true);
  //$('#testimonial').parallax("50%", 0.0, true);
  $('#download').parallax("50%", 0.05, false);
});

$(document).ready(function() {
    $(".fa-circle-thin,.fa-circle").parent().parent().parent().hover(function () {
        $(this).find("i").removeClass("fa fa-circle-thin");
        $(this).find("i").addClass("fa fa-circle")
    }, function () {
        $(this).find("i").removeClass("fa fa-circle");
        $(this).find("i").addClass("fa fa-circle-thin");
    })
});


$(document).ready(function() {
      $(".owl-carousel").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

    });

    jQuery(function( $ ){
          $('#download-app1').localScroll({
            duration:1200
          });
           $('#download-app2').localScroll({
            duration:1000
          });
        });
