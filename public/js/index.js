$(document).on("click","#submit",function(event){
  event.preventDefault()
  //debugger;
  console.log("click");
  var body = {
    name: $("#name").val(),
    email: $("#email").val(),
    password: $("#password").val()
}
  $.post("/api/signup", body).then(function () {
    console.log("submitted")
    window.location.replace("/members")
})

});