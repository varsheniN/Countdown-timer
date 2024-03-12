
const targetdate=new Date('2024-12-31T23:59:59');
   
function updateCountdown(){
    const currentTime = new Date();
  const diff = targetdate - currentTime;
    const days=Math.floor(diff/(1000*60*60*24));
    const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((diff%(1000*60*60))/(1000*60));
    const seconds=Math.floor((diff%(1000*60))/1000);

    document.getElementById("days").innerText=days;
    document.getElementById("hours").innerText=hours;
    document.getElementById("minutes").innerText=minutes;
    document.getElementById("seconds").innerText=seconds;
    if(diff<0){
        clearInterval(interval);
        document.getElementById("timer").innerText="Today is a last day of year 2024!";
    }
}
const interval=setInterval(updateCountdown,1000);