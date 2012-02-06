$(function() {
  var time_per_slide = 59;
  var timer = time_per_slide;

  $('<div id="timerInfo" />')
    .css({ "z-index": "999", "position": "absolute", "top": "0", "left": "10px" })
    .appendTo("#main");

  function nextSlide() {
    Slideshow.navigateDown();
    timer = time_per_slide;
  }

  function timerStatus(seconds) {
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds % 60;
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  setInterval(function() {
    if (timer-- == 0) { nextSlide() }
    $("#timerInfo").text(timerStatus(timer));
  }, 1000);
})
