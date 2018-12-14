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
})

});

// Add event listeners to the submit and delete buttons
//$submitBtn.on("click", handleFormSubmit);
//$exampleList.on("click", ".delete", handleDeleteBtnClick);
