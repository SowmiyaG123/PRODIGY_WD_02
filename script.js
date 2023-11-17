
var hours = 0;
var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var timer;
var ctr=0;
var time_ele = document.getElementsByClassName("time")[0];
var l1 = document.getElementById("lap1");
var l2 = document.getElementById("lap2");
var l3 = document.getElementById("lap3");
var l4 = document.getElementById("lap4");
var l5 = document.getElementById("lap5");
lap_btn.addEventListener("click", lap);
var stop = "stop"
function start() {
    timer = setInterval(() => {
        miliseconds++
        if (miliseconds > 100) {
            seconds++
            miliseconds = 0
        }
        if (seconds > 60) {
            minutes++
            seconds = 0
        }
        if (minutes > 60) {
            hours++
            minutes = 0
        }
        document.getElementById("watch").innerHTML = `${hours}:${minutes}:${seconds}:${miliseconds}`
    }, 10)
}
function Reset() {
    location.reload()
}
function del() {
    if (stop == "stop") {
        clearInterval(timer)
        stop = "start"
        document.getElementById("icon").className = "fa fa-play"
    }
    else {
        start()
        stop = "stop"
        document.getElementById("icon").className = "fa fa-pause"
    }
}
function lap() {
    ctr++;
    if(ctr%5==1)
        l1.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;
    if (ctr%5==2)
        l2.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;
    if (ctr%5==3)
        l3.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;
    if (ctr%5==4)
        l4.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;
    if (ctr%5==0)
        l5.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;

}

