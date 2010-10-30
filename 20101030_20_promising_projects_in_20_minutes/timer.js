$(function() {
    var time_per_slide = 55
    var timer = time_per_slide

    $("#slideInfo").after(' - <strong id="timerInfo"></strong>')

    function nextSlide() {
        nextStep()
        timer = time_per_slide
    }

    function timerStatus(seconds) {
        var minutes = Math.floor(seconds / 60)
        var seconds = seconds % 60
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    }

    setInterval(function() {
        if (timer-- == 0) { nextSlide() }
        $("#timerInfo").text(timerStatus(timer));
    }, 1000)
})
