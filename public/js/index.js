// function sign_up(){
//   var inputs = document.querySelectorAll(".input_form_sign");
//   document.querySelectorAll(".ul_tabs > li")[0].className=""; 
//   document.querySelectorAll(".ul_tabs > li")[1].className="active"; 
  
//   for(var i = 0; i < inputs.length ; i++ ) {
//     if(i == 2 ){

//     }else{  
//       document.querySelectorAll(".input_form_sign")[i].className = "input_form_sign d_block";
//     }
//   } 
  
//   setTimeout( function(){
//     for(var d = 0; d < inputs.length ; d++ ) {
//       document.querySelectorAll(".input_form_sign")[d].className = "input_form_sign d_block active_inp";  
//     }


//   },100 );
//   document.querySelector(".link_forgot_pass").style.opacity = "0";
//   document.querySelector(".link_forgot_pass").style.top = "-5px";
//   document.querySelector(".btn_sign").innerHTML = "SIGN UP";    
//   setTimeout(function(){
 
//   },500);
//   setTimeout(function(){
//     document.querySelector(".link_forgot_pass").className = "link_forgot_pass d_none";
//   },450);

// }



// function sign_in(){
//   var inputs = document.querySelectorAll(".input_form_sign");
//   document.querySelectorAll(".ul_tabs > li")[0].className = "active"; 
//   document.querySelectorAll(".ul_tabs > li")[1].className = ""; 
  
//   for(var i = 0; i < inputs.length ; i++ ) {
//     switch(i) {
//     case 1:
//       console.log(inputs[i].name);
//       break;
//     case 2:
//       console.log(inputs[i].name);
//     default: 
//       document.querySelectorAll(".input_form_sign")[i].className = "input_form_sign d_block";
//     }
//   } 

//   setTimeout( function(){
//     for(var d = 0; d < inputs.length ; d++ ) {
//       switch(d) {
//       case 1:
//         console.log(inputs[d].name);
//         break;
//       case 2:
//         console.log(inputs[d].name);

//       default:
//         document.querySelectorAll(".input_form_sign")[d].className = "input_form_sign d_block";  
//         document.querySelectorAll(".input_form_sign")[2].className = "input_form_sign d_block active_inp";  

//       }
//     }
//   },100 );

//   setTimeout(function(){
//     document.querySelector(".link_forgot_pass").className = "link_forgot_pass d_block";

//   },500);

//   setTimeout(function(){

//     document.querySelector(".link_forgot_pass").style.opacity = "1";
//     document.querySelector(".link_forgot_pass").style.top = "5px";
    

//     for(var d = 0; d < inputs.length ; d++ ) {

//       switch(d) {
//       case 1:
//         console.log(inputs[d].name);
//         break;
//       case 2:
//         console.log(inputs[d].name);

//         break;
//       default:
//         document.querySelectorAll(".input_form_sign")[d].className = "input_form_sign";  
//       }
//     }
//   },1500);
//   document.querySelector(".btn_sign").innerHTML = "SIGN IN";    
// }


// window.onload =function(){
//   document.querySelector(".cont_centrar").className = "cont_centrar cent_active";

// };

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
})

});