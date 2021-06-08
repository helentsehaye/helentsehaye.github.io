$(function(){
    $("#submit").click(function(){
        $.get("http://localhost:8030")
        .done(addhtml)
        .fail(err);
    });
    function addhtml(data){

    }
    function err(){
        console.log("error");
    }

})
    
        
