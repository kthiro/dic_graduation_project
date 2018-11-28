$(document).ready(function(){
  $("#notification").hide()
  $("#all_unread_messages").hover(function(){
    $("#notification").show();
  }, function(){
    $("#notification").hide();
  });
});