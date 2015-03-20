//= require 'bootstrap'
//= require_tree .


// Affix for sticky nav
$('nav').affix({
  offset: {
    top: $('header').height()
  }
});
