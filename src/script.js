const { Notification } = require("electron");

function onButtonClicked() {
    var clock = document.getElementById('clock');
    window.ipcSend('resize-window','hi');
    document.getElementById("mainframe").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    document.getElementById('settingsDiv').hidden=true;
    document.getElementById('buttonStart').textContent = "Stop"
    var duration = document.getElementById('durationSlider').value * 60;
    x = setInterval(function(){
        if (duration == 0) {
            clearInterval(x);
            var settingsDiv = document.getElementById('settingsDiv').hidden=false;
            document.getElementById('buttonStart').textContent = "Start";
            window.ipcSend('restore-window','hi');
            new window.Notification('Timer Done');
            clock.textContent = "DONE";
            return 
        }
        duration -=1;
        var min = Math.floor(duration/60);
        var sec = String(duration % 60).padStart(2,'0');
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
    document.getElementById("clock").textContent=`${sliderValue}:00`;
}
