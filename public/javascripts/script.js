$("#b1").click(function(){
    $("#b1").toggle( function() {
        $("#b2").css({ 'display' : 'none'});
    }, function () {
        $("#b2").css({ 'display' : 'inline-flex'});
    });
});
$(b3).click(function () {
    params=$("#site").val();
    if(params.length!=0) {
        $("#site").val("");
        $.ajax({
            url: '/',
            data: {str: params},
            type: 'post',
            success: function (data) {
                var site="https://linkshrenk.eu-gb.mybluemix.net/"+data.id;
                $("#va").text(site);
                $("#lin").css("display","block");
            }
        })
    }
});