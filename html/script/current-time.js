
function currentTime(){
    let time = new Date();

    let year = time.getFullYear();
    let month = time.getMonth() +1;
    let day = time.getDate();
    let hours = String(time.getHours()).padStart(2, '0');
    let minutes = String(time.getMinutes()).padStart(2, '0');
    let seconds = String(time.getSeconds()).padStart(2, '0');
    console.log(time)
    
    document.querySelector('.js-year').innerHTML = year;
    document.querySelector('.js-month').innerHTML = month;
    document.querySelector('.js-day').innerHTML = day;
    document.querySelector('.js-time').innerHTML = `${hours}:${minutes}:${seconds}`;
};

setInterval(()=>{
    currentTime();
    
},1000);