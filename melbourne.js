//show/hide the main menu when nav icon clicked/tapped on mobile view
$("#navIcon").click(function(event){
  $("#mainMenu ul").toggle();
});

/*remove inline style from #mainMenu ul if window width > 800px on window resize event
prevents inline style from over-riding CSS style rules in @media query*/
$(window).resize(function() {
  if($(window).width() >= 800) {
    //if($("#mainMenu ul").attr("style") === "display: none;" || $("#mainMenu ul").attr("style") === "display: block;")
        $("#mainMenu ul").removeAttr("style");
  }
});//end window resize event




console.log("melbourne.js has loaded and run");
