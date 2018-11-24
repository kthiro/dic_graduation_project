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