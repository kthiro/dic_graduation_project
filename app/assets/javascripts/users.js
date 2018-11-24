// $(document).on('turbolinks:load', $(function() {
$(document).ready($(function() {
  $("#password_validation").hide();
  $("#password").on("keydown keyup keypress change", function(){
    var password_length = $("#password").val().length;
    if (password_length >= 1 && password_length < 8) {
      $("#password_validation").show();
    } else {
      $("#password_validation").hide();
    };
  });
}));

$(document).ready($(function() {
  $("#password_confirmation_validation").hide();
  $("#password_confirmation").on("keydown keyup keypress change", function(){
    var password = $("#password").val();
    var password_confirmation = $("#password_confirmation").val();
    if (password == password_confirmation) {
      $("#password_confirmation_validation").hide();
    } else {
      $("#password_confirmation_validation").show();
    };
  });
}));

$(document).ready($(function() {
  sport_event_value = $("#sport_event").val();
  area_value = $("#area").val();
  introduction_value = $("#introduction").val();
  
  $("#sport_event").on('click', function(){
    if (sport_event_value == "未登録") {
      $(this).val("")
    };
  });
  
  $("#area").on('click', function(){
    if (area_value == "未登録") {
      $(this).val("")
    };
  });
  
  $("#introduction").on('click', function(){
    if (introduction_value == "未登録") {
      $(this).val("")
    };
  });
  
}));