//= require bootstrap/
//= require_tree .

$(document).ready(function () {
  // Collapse navbar after clicking on a link in mobile.
  $("nav li a").click(function(event) {
    // check if window is small enough so dropdown is created
    $(".navbar-collapse").removeClass("in").addClass("collapse");
  });


  //---------------------------------------
  // Offset scrollspy with fixed navbar
  // - http://stackoverflow.com/questions/17879846/boostrap-scrollspy-offset-on-a-fixed-navbar-does-not-work
  // Height based on the height of the navbar
  var offsetHeight = 81;

  $('body').scrollspy({
    offset: offsetHeight
  });

  $('nav li a').click(function(event) {
    var scrollPos = $('body > .container').find($(this).attr('href')).offset().top - (offsetHeight - 1);

    $('body,html').animate({
      scrollTop: scrollPos
    }, 500, function () {
      $(".btn-navbar").click();
    });

    return false;
  });
});