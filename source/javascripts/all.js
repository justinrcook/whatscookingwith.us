// Only require the bootstrap javascript we need,
// see all avilable options in bootstrap-sprockets.js
//= require "bootstrap/affix"
//= require "bootstrap/button"
//= require "bootstrap/collapse"
//= require "bootstrap/dropdown"
//= require "bootstrap/transition"

// Affix for sticky nav
// - Wait for the header image to load since the header image will
// return zero sometimes on page load making the navbar jump to the
// top of the page immediately after scrolling.

function stikyfy_nav() {
  $(".nav-wrapper").height($("nav").height());

  $("nav").affix({
    offset: {
      top: $("nav").offset().top
    }
  });
}

// Stick the nav on load
$(window).bind("load", function() {
  stikyfy_nav();
});

// Restick the nav on window resize
$(window).resize(function() {
  stikyfy_nav();
});
