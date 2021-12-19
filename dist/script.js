
var y;

function onButtonClicked() {
    var clock = document.getElementById('clock');
    var settingsDiv = document.getElementById('settings').hidden=true;
    var duration = document.getElementById('durationSlider').value * 60;
    x = setInterval(function(){
        if (duration == 0) {
            clearInterval(x);
        }
        duration -=1;
        var min = Math.floor(duration/60);
        var sec = duration % 60;
        clock.textContent = `${min}:${sec}`;
    },1000);
}

var x;

function onButtonPause() {
    if (document.getElementById('buttonPause').textContent == "Pause" ){
        clearInterval(x);
    } 
}

function updateSliderText() {
    var sliderValue = document.getElementById("durationSlider").value;
    document.getElementById("durationText").textContent=sliderValue;
}
