
// Counts created for setTime function to define format of text as 00:00:00
let secondCount =0;
let minuteCount =0;
let hourCount =0;

// inteval id set to stop/start counter
let intervalId;

//setTime define format of text as 00:00:00
function setTime(){
    const secondText = String(secondCount).padStart(2, '0');
    const minuteText = String(minuteCount).padStart(2, '0');
    const hourText = String(hourCount).padStart(2, '0');

       document.querySelector('.js-timer').innerHTML = `${hourText}:${minuteText}:${secondText}`; 
};
//counter start/stop

function timerStart(){
    document.querySelector('.js-button-start').innerHTML = 'STOP';

    if(intervalId){
        clearInterval(intervalId);
        intervalId = undefined;
        document.querySelector('.js-button-start').innerHTML = 'START';
        
    } else {
        intervalId = setInterval(()=>{
            
            secondCount++;
                 if(secondCount === 60){
                     secondCount = 0;
                     minuteCount++;
                 }
     
                  if(minuteCount === 60){
                     minuteCount = 0;
                     hourCount++;
                 }
                 
         setTime();
         },1000);
         
    }
    };

    let timerValues = [];

function splitTime() {
    const timerValue = document.querySelector('.js-timer').innerHTML;

    // Add the timer value to the array
    timerValues.push(timerValue);

    // Display the timer values in a container
    displayTimerValues();
    
    console.log('Timer value captured:', timerValue);
}

function displayTimerValues() {
    // Get the container element
    const container = document.getElementById('result');

    // Clear the container before adding updated values
    container.innerHTML = '';

    // Loop through the array and create a new element for each timer value
    timerValues.forEach((timerValue, index) => {
        const timerTextNode = document.createTextNode(`${index+1}. ${timerValue}`)
        document.getElementById('result').classList.add("result");

        const lineBreak = document.createElement('br');
        
        container.appendChild(timerTextNode);
        container.appendChild(lineBreak);
    });

}
    
function clearAll(){
    timerValues = [];
    document.getElementById('result').classList.remove("result");
    location.reload();
};