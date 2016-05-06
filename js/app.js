$(document).ready(function() {

    var symbol = "X"
    var player = "1"
    var begin = "Tap a square to begin"


  $(document).on("click", ".square", function() {
    $(this).html("<span>"+ symbol+"</span>");
    if(symbol === "X") {
      symbol = "O"
    } else {
      symbol = "X"
    }
  });

  $(document).on("click", ".square", function() {
    $("#role").html("<span>Turn: player "+ player+"</span>");
    if(symbol === "X") {
      player = "1"
    } else {
      player = "2"
    }
  });

  $(document).on("click", "#reset", function() {
    $(".square").html("&nbsp;");
    $("#role").html("Tap a square to begin");
  });




});
