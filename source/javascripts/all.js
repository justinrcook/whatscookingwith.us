//= require 'bootstrap'
//= require_tree .

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
