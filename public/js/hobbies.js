//     //Acquire the id of the user that is logged in, and use it in the code below to 
//     //pull details for the appropriate user.
//     $.get("/api/allUsers", function(data){
//         if (data.message){
//             //  tell the user they're not logged in
//         }
//         else {
//             console.log(data);
//             //Pull and display subd1 details from database
//             $("#subdiscipline1").text(data.subdiscipline1);
//             $("#subd1hours").text(data.subD1Hours);
//             //Pull and display subd2 details from database
//             $("#subdiscipline2").text(data.subdiscipline2);
//             $("#subd2hours").text(data.subD2Hours);
//             //Pull and display subd2 details from database
//             $("#subdiscipline3").text(data.subdiscipline3);
//             $("#subd3hours").text(data.subD3Hours);
//         }

        


// //     });

let timerSeconds = 0;
//Timers
let intervalArr = [null,null,null,null,null];
//Listen for click event on any start button, and start that specific timer when clicked.
$(".start").on("click",function(){
    console.log($(this).attr("data-type"));
    let whichOne = $(this).attr("data-type")
    console.log("Timer started.");
    if(intervalArr[whichOne]===null){
    intervalArr[whichOne] = setInterval(function(){
        count(whichOne);
    }, 1000);
    console.log(intervalArr[whichOne]);
    }
})
//Listen for click event on any stop button, and stop that specific timer when clicked.
$(".stop").on("click", function() {
    console.log($(this).attr("data-type"));
    let whichOneStop = ($(this).attr("data-type"));
    // logStopTime();
    logTime(whichOneStop)
    clearInterval(intervalArr[whichOneStop]);
    reset();
});

var time = [0,0,0,0,0];

function reset(){
    $(".timer").text("00:00");
};

function count(i) {

    time[i]++;
    timerSeconds = time[i];
    console.log(i);
    var converted = timeConverter(time[i]);
    $("#timer-"+i).text(converted);
}

function timeConverter(t) {
    var hours = Math.floor(t / 60 / 60);
    var minutes = hours - Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    if (hours === 0) {
        minutes = "00"
    } else if (hours < 10) {
        hours = "0" + hours;
    }
    return hours + ":" + minutes + ":" + seconds;
  };


function logTime(habit_id) {
    var timeLog = {
        habitID: habit_id, 
        seconds: timerSeconds
    }
    $.post("api/timeLog", timeLog);
}

// function getIds() {
//     $.get()
// }
