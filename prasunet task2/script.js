/*let milliseconds = 0, seconds = 0, minutes = 0,hours = 0;
let timeshow = document.getElementById('clock')
let timer;

document.getElementById('start').onclick = function(){
    timer = setInterval(updtaetime,10)
}

function updtaetime(){
    milliseconds = milliseconds+10;
    if(milliseconds == 1000){
        seconds = seconds+1;
        milliseconds = 0;
        if(seconds == 60){
            minutes = minutes+1;
            seconds = 0;
            if(minutes == 60){
                hours = hours+1;
                minutes = 0;
            }
        }
    }

    let h,m,s,ms;
    if(hours < 10){
        h = '0'+hours
    }
    else{
        h = hours
    }

    if(minutes < 10){
        m = '0'+minutes
    }
    else{
        m = minutes
    }

    if(seconds < 10){
        s = '0'+seconds
    }
    else{
        s = seconds
    }

    if(milliseconds < 10){
        ms = '0'+milliseconds
    }
    else if(milliseconds < 100){
        ms = '00'+milliseconds
    } 
    else {
        ms = milliseconds
    }

    timeshow.innerHTML = '${h} : ${m} : ${s} : ${ms}'
}*/

let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let lapCounter = 1;
let timeshow = document.getElementById('clock');
let list = document.getElementById('laplist');
let timer;

document.getElementById('start').onclick = function() {
    timer = setInterval(updatetime, 10);
}

function updatetime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        seconds += 1;
        milliseconds = 0;
        if (seconds === 60) {
            minutes += 1;
            seconds = 0;
            if (minutes === 60) {
                hours += 1;
                minutes = 0;
            }
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

    timeshow.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("pause").onclick = function(){
    clearInterval(timer)
}

document.getElementById("reset").onclick = function(){
    clearInterval(timer)
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    list.innerHTML = '';
    lapCounter = 1;
    timeshow.innerHTML = "00 : 00 : 00 : 000";
}

document.getElementById("lap").onclick = function(){
    const lapTime = timeshow.innerHTML;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    list.appendChild(lapItem);
    lapCounter++;
}