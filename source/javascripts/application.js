//= require bootstrap/
//= require_tree .

$(document).ready(function () {
  $("nav li a").click(function(event) {
    // check if window is small enough so dropdown is created
    $(".navbar-collapse").removeClass("in").addClass("collapse");
  });
});