// Only require the bootstrap javascript we need,
// see all avilable options in bootstrap-sprockets.js
//= require "bootstrap/affix"
//= require "bootstrap/button"
//= require "bootstrap/collapse"
//= require "bootstrap/transition"

// Affix for sticky nav
// - Wait for the header image to load since the header image will
// return zero sometimes on page load making the navbar jump to the
// top of the page immediately after scrolling.

$(window).bind("load", function() {

  $(".nav-wrapper").height($("nav").height());

  $("nav").affix({
    offset: {
      top: $("nav").offset().top
    }
  });

});
