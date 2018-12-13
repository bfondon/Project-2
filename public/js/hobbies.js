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
$("#start-1").on("click", startTimer);
$("#stop-1").on("click", stopTimer);

var time = 0;

function reset(){
    time = 0;
    $("#timer-1").text("00:00");
};

function startTimer() {
    console.log("Timer started.");
    intervalId = setInterval(count, 1000);
};

function stopTimer() {
    console.log("Timer stopped.");
    clearInterval(intervalId);
};

function count() {

    time++;
    var converted = timeConverter(time);
    $("#timer-1").text(converted);
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