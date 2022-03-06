let hour = document.getElementById("hour") ;
let minute = document.getElementById("minute") ;
let second = document.getElementById("second") ;
let start = document.getElementById("start") ;
let stop = document.getElementById("stop") ;
let reset = document.getElementById("reset") ;

let hours = 00 ;
let minutes = 00 ;
let seconds = 00;

let hour0 = 0 ;
let minute0 = 0 ;
let second0 = 0 ;

function stopWatch(){
  seconds++ ;
  if (seconds === 60) {
    minutes++ ;
    seconds = 0 ;
    if (minutes === 60) {
      hours ++ ;
    }
  }
  
  if (seconds<10) {
    second0 = "0" + seconds ;
  } else {
    second0 = seconds ;
  }
  
  if (minutes<10) {
    minute0 = "0" + minutes ;
  } else {
    minute0 = minutes ;
  }
  
  if (hours<10) {
    hour0 = "0" + hours ;
  } else {
    hour0 = hours ;
  }
  
  hour.innerHTML = hour0 ;
  minute.innerHTML = minute0 ;  
  second.innerText = second0 ;
}

let interval ;
let status = "stop" ;

start.addEventListener ("click", function() {
  if (status === "stop") {
    interval = setInterval(stopWatch,1000) ;
    status = "start" ;
  }
} , false) ;

stop.addEventListener ("click", function() {
  clearInterval(interval) ;
  status = "stop" ;
} , false) ;

reset.addEventListener ("click", function() {
  clearInterval(interval) ;
  hours = 0 ;
  minutes = 0 ;
  seconds = 0 ;
  hour.innerHTML = "00" ;
  minute.innerHTML = "00" ;  
  second.innerText = "00" ;
  status = "stop" ;
} , false) ;

