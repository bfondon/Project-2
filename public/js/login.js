$(document).ready(function () {
    //reference the form
    var loginForm = $("form.login");
    var emailInput = $("input#email");
    var passwordInput = $("#input#password");

    //check if email and pw when form submitted
    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log("click")
        var userdata = {
            email: emailInput.val(),
            password: passwordInput.val()
        };

        if (!userdata.email || !userdata.password) {
            return;
        }
        //login function if there is username and password & reset input vals
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function loginUser(email, password) {
        console.log("pre log in post request")
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(data){
            window.location.replace(data)
        }).catch(function(err){
            console.log(err)
        });
    }
});