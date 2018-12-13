jQuery(document).ready(function($){
	//hide the subtle gradient layer (.pricing-list > li::after) when pricing table has been scrolled to the end (mobile version only)
	checkScrolling($('.pricing-body'));
	$(window).on('resize', function(){
		window.requestAnimationFrame(function(){
            checkScrolling($('.pricing-body'));
        });
	});
	$('.pricing-body').on('scroll', function(){ 
		var selected = $(this);
		window.requestAnimationFrame(function(){
            checkScrolling(selected);
        });
	});

	function checkScrolling(tables){
		tables.each(function(){
			var table= $(this),
				totalTableWidth = parseInt(table.children('.pricing-features').width()),
		 		tableViewport = parseInt(table.width());
			if( table.scrollLeft() >= totalTableWidth - tableViewport -1 ) {
				table.parent('li').addClass('is-ended');
			} else {
				table.parent('li').removeClass('is-ended');
			}
		})
    }
});

//Listen for click event on start/stop timers.
let intervalArr = [null,null,null,null,null];

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

$(".stop").on("click", function() {
    console.log($(this).attr("data-type"));
    let whichOneStop = ($(this).attr("data-type"));
    clearInterval(whichOneStop);
    reset();
});

var time = [0,0,0,0,0];

function reset(){
    $(".timer").text("00:00");
};

function count(i) {

    time[i]++;
    console.log(i);
    var converted = timeConverter(time[i]);
    $("#timer-"+i).text(converted);
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
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
  
    return minutes + ":" + seconds;
  };