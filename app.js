const days_c =  document.getElementById('days');
const hours_c =  document.getElementById('hours');
const mins_c =  document.getElementById('mins');
const secs_c =  document.getElementById('sec');

const newYear = '1 Jan 2022';

function countdown() {

    const newYearDate  = new Date(newYear);
    const currentDate  = new Date();
     
    const second = ( newYearDate - currentDate ) / 1000;

    const days   = Math.floor( second / 46400 ); 
    const hours  = Math.floor( second / 3600 ) % 24;
    const mins   = Math.floor( second / 60 ) % 60;
    const sec    = Math.floor( second % 60 );


    //assign date value into dom
    days_c.innerHTML = dateFormat(days);
    hours_c.innerHTML = dateFormat(hours);
    mins_c.innerHTML = dateFormat(mins);
    secs_c.innerHTML = dateFormat(sec);
    
}

function dateFormat(time){
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);