var counterDown = $("#counter-down");
        
counterDown.counter({
    autoStart: false,
    countFrom: localStorage.count ? localStorage.count : 200,
    countTo: 1,
    runOnce: true,
    duration: 10800000,
    easing: "easeOutCubic"
});

counterDown.counter("start");

if (!localStorage.count) {
    localStorage.setItem('count', 200)
}

setInterval(function () {
    if(localStorage.count > 1){
        localStorage.count = Number(localStorage.count) - 1
    }
}, 20000);