jQuery(document).ready(function($){
  //hide the subtle gradient layer (.discipline-list > li::after) when discipline table has been scrolled to the end (mobile version only)
  checkScrolling($(".discipline-body"));
  $(window).on("resize", function(){
    window.requestAnimationFrame(function(){checkScrolling($(".discipline-body"));});
  });
  $(".discipline-body").on("scroll", function(){ 
    var selected = $(this);
    window.requestAnimationFrame(function(){checkScrolling(selected);});
  });

  function checkScrolling(tables){
    tables.each(function(){
      var table= $(this),
        totalTableWidth = parseInt(table.children(".discipline-features").width()),
		 		tableViewport = parseInt(table.width());
      if( table.scrollLeft() >= totalTableWidth - tableViewport -1 ) {
        table.parent("li").addClass("is-ended");
      } else {
        table.parent("li").removeClass("is-ended");
      }
    });
  }
  }
 

