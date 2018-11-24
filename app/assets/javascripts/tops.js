$(document).ready($(function() {
  var path = location.pathname;
  if (path == '/') {
    $("body").css('background-color', '#8EECA1');
    $(".card-body").hide();
    $(".card-header").on('click', function(){
      $(this).next(".card-body").slideToggle();
    });
  };
}));