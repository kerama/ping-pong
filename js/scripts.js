//backend
var results = [];
var pingPong = function(h) {


  for (var t = 1; t < h; t += 1) {
    if ((t % 3) === 0) {
      results.push("Ping")
    } else if ((t % 5) === 0) {
      results.push("Pong")
    } else if ((t % 15) === 0) {
      results.push("Ping-Pong")
    } else {
      results.push(t)
    }

  }

  return results;

}


//this is the user-interface or front-end
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numberEntered").val());
    var results = pingPong(number);

    results.forEach(function(result) {

      $("#demo").append("<li>" + result + "</li>");
    });



    $(".out").show();
  });
});
