// Only require the bootstrap javascript we need,
// see all avilable options in bootstrap-sprockets.js
//= require "bootstrap/affix"
//= require "bootstrap/button"
//= require "bootstrap/collapse"
//= require "bootstrap/transition"

// Affix for sticky nav
// Keep the sticky nav from jumping: http://stackoverflow.com/a/13151016

$(function() {
  $(".nav-wrapper").height($("nav").height());

  $("nav").affix({
    offset: {
      top: $("nav").offset().top
    }
  });
});
