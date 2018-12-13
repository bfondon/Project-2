$("#sign_in").click(function (e) {
  e.preventDefault();

  var password = $("#pass_us").val();
  var confPass = $("#conf_pass_us").val();
  console.log(password);
  console.log(confPass);
  if (password !== confPass) {
    password = "";
    confPass = "";
    $("#conf_pass_us").append("<p> please check your password! </p>");
    return;
  }

  $.post("/api/signup", {
    email: $("#email_us").val(),
    password: $("#pass_us").val()
  }).then(function () {
    console.log("submitted");
  }).catch(function (err) {
    $("#conf_pass_us").append("<p>" + err + "</p>");
  });
}


);