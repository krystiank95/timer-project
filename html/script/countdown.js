// parameter to display in page
let secondCount = 0;
let minuteCount = 0;
let hourCount = 0;


//setTime define format of text as 00:00:00

function setTime(){
    const secondText = String(secondCount).padStart(2, '0');
    const minuteText = String(minuteCount).padStart(2, '0');
    const hourText = String(hourCount).padStart(2, '0');
    document.querySelector('.js-counter').innerHTML = `${hourText}:${minuteText}:${secondText}`; 
};

// allow enter the begining value of countdown (i have no idea why i didn't use input LOCO)
function editableMenu(){
    document.querySelector('.js-counter').contentEditable = 'true';
    document.querySelector('.js-counter').innerHTML = '';
    document.querySelector('.js-counter').classList.remove("counter");
    document.querySelector('.js-counter').classList.add("countdownstart");
};
 
//pattern for input
let inputPattern = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][1-9]|[1-4][0-9]$/

//save input and split the correct values
function saveInput(){
    let input = document.querySelector('.js-counter').textContent;
    let [hours, minutes, seconds] = input.split(':').map(Number);
        
    if(!inputPattern.test(input)){
        alert('invalid input');
        document.querySelector('.start-cd').disabled= true;
    }else{ 
        document.querySelector('.start-cd').disabled= false;
        document.querySelector('.start-cd').classList.add("start-css");
        document.querySelector('.start-cd').classList.remove("inactive-css");}

    hourCount = hours;
    minuteCount = minutes;
    secondCount = seconds;
    console.log('Input is valid. Updated countdown values:', hourCount, minuteCount, secondCount);

};

    let intervalId2;

function countDown(){
    document.querySelector('.start-cd').innerHTML = 'STOP';

    if(intervalId2){
        clearInterval(intervalId2);
        intervalId2 = undefined;
        document.querySelector('.start-cd').innerHTML = 'START';
        
    } else {
         intervalId2 = setInterval(()=>{
            secondCount--;
            console.log(secondCount, minuteCount)
         if(secondCount < 0){
            secondCount = 59;
            minuteCount --;
            }
        if(minuteCount <0){
            minuteCount = 59;
            hourCount --;
        }
        if(secondCount <= 0 && minuteCount <= 0 && hourCount <= 0){
            clearInterval(intervalId2);
            intervalId2 = undefined;
            alert('done');
            document.querySelector('.js-counter').classList.add("counter");
            document.querySelector('.js-counter').classList.remove("countdownstart");
        }
    setTime();
    },1000);
    }};

    //location reload clear all content (not the best solution - but works for now)
    function clearAll(){
        location.reload();
    }

