var [hours, minutes, seconds] = [0, 0, 0];
var timer;
var display = document.getElementById("time");
var isStart = false;
  

function incrementation() {
  seconds++;
  if (seconds == 60) {
    {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        seconds = 0;
        hours++;
        if (hours == 24) {
          hours = 0;
        }
        }
      }
    }

  var hh  = hours<10? "0" + hours : hours;
  var mm  = minutes<10? "0" + minutes : minutes;
  var ss  = seconds<10? "0" + seconds : seconds;
  
  display.innerHTML = hh + ":" + mm + ":" + ss;
}


  
function start() {
if (isStart == false)
{
  isStart =true;
timer = setInterval(incrementation, 1000);
}
}

function reset(){
  isStart = false;
   clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  display.innerHTML = "00:00:00";
}

function stop(){
  isStart = false;
  clearInterval(timer);
}