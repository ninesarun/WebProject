var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function hexClock(){
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (hours.length < 2){
        hours = '0' + hours;
    }
    if (minutes.length < 2){
        minutes = '0' + minutes;
    }
    if (seconds.length < 2){
        seconds = '0' + seconds;
    }
    var hexColorstr = '#' + hours + minutes + seconds;
    var clockStr = hours + ' : ' + minutes + ' . ' + seconds;

    document.body.style.backgroundColor = hexColorstr;

    clock.textContent = clockStr;
    hexColor.textContent = hexColorstr;
}

hexClock();
setInterval(hexClock, 1000);