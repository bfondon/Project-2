$(document).ready(function(){
    $.get("/api/user_data", function(data){
        console.log(data)
        $(".user-name").text(data.email)
    })
})