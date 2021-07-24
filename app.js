const target='1 jan 2022';

const daysElement = document.getElementById("days"); 
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secondsElement = document.getElementById("seconds");

function countdown(){
    const targetDate=new Date(target);
    const currentDate=new Date();

    const totalSeconds=(targetDate - currentDate) / 1000;
    const days=Math.floor(totalSeconds / 3600 /24);
    const hours=Math.floor(totalSeconds / 3600) % 24;
    const mins=Math.floor(totalSeconds /60)%60 ; 
    const seconds=Math.floor(totalSeconds) % 60;
    // console.log(totalSeconds)

    if(totalSeconds<1){
        console.log("true");
        clearInterval(interval);
    }

    daysElement.innerHTML = days;
    hoursElement.innerHTML = format(hours);
    minsElement.innerHTML = format(mins);
    secondsElement.innerHTML = format(seconds);

}

function format(time){
    return time < 10 ? (`0${time}`) : time;

}
countdown();
var interval = setInterval(countdown, 1000);


// setTimeout(function(){
//     clearInterval(interval);
// },targetDate)

