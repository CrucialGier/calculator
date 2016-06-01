

var add = function() {
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  return number1 + number2;
};

var sub = function() {
  var number1 = parseInt($("#sub1").val());
  var number2 = parseInt($("#sub2").val());
  return number1 - number2;
};

var mult = function() {
  var number1 = parseInt($("#mult1").val());
  var number2 = parseInt($("#mult2").val());
  return number1 * number2;
};

var divide = function() {
  var number1 = parseInt($("#divide1").val());
  var number2 = parseInt($("#divide2").val());
  return number1 / number2;
};

$(document).ready(function(){

  $("form#add").submit(function(event) {
    event.preventDefault();
    $("h2#add-result").text(add()+" Enjoy your trip!").val();
    $("body").addClass("rainbow");
  });

  $("form#sub").submit(function(event) {
    event.preventDefault();
    $("h2#sub-result").text(sub()+" Enjoy your trip!").val();
    $("body").addClass("rainbow");
  });

  $("form#mult").submit(function(event) {
    event.preventDefault();
    $("h2#mult-result").text(mult()+" Enjoy your trip!").val();
    $("body").addClass("rainbow");
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    $("h2#divide-result").text(divide()+" Enjoy your trip!").val();
    $("body").addClass("rainbow");
  });

  $("#no-more").click(function(){
    $("body").removeClass();
  })


});
