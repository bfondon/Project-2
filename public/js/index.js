$(document).on("click","#submit_signup",function(event){
  event.preventDefault()
  //debugger;
  console.log("click");
  var body = {
    name: $("#name_signup").val(),
    email: $("#email_signup").val(),
    password: $("#password_signup").val()
}
  $.post("/api/signup", body).then(function () {
    console.log("submitted")
    window.location.replace("/dashboard")
})

});

$(document).on("click","#login_submit",function(event){
  event.preventDefault()
  //debugger;
  console.log("click");
  var body = {
    email: $("#email").val(),
    password: $("#password").val()
}
  $.post("/api/login", body).then(function () {
    console.log("submitted")
    window.location.replace("/dashboard")
}).catch(function() {
  console.log("login failed")
})

});

