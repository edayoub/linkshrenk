var counter = 0;
var interval = setInterval(function() {
    counter++;
    $("#a").text(counter);
    if (counter == 10) {
        $("#circle").remove();
        $("#ab").css("display","block");
        clearInterval(interval);
    }
}, 1000);
