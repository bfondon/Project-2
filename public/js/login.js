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
  })
  
  });