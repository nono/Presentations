$(function() {
    var time_per_slide = 60
    var timer = time_per_slide
    var running = false

    $("#slideInfo").after(' - <strong id="timerInfo"></strong>')

    $(".content").live("showoff:show", function(event) {
        if ( $(event.target).hasClass("techdays") ) {
            $("#footer").hide()
            running = false
        } else {
            $("#footer").show()
            $("#timerInfo").text(timerStatus(timer = time_per_slide));
            running = true
        }
    })

    function timerStatus(seconds) {
        var minutes = Math.floor(seconds / 60)
        var seconds = seconds % 60
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    }

    setInterval(function() {
        if (running) {
            if (timer-- <= 0) { nextStep() }
            $("#timerInfo").text(timerStatus(timer));
        }
    }, 1000)
})
