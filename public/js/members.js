$(document).ready(function(){
    $.get("/api/user_data", function(data){
        console.log(data, data.name)
        $(".user-name").text(data.name)
    });
});