let isRunning = false;
let sdegree = 0;
let mdegree = 0;
let hdegree = 0;
let params = window.location.search.split('&').map((item) => {
    return item.split('=')[1];
  });
let currentValue;
let previousValue = currentValue;
let temp = currentValue;
let timerId;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let daysCount;
let secondCount;
let minuteCount;
let hourCount;
document.getElementById('modal').style.display = 'none';
function setArrow(degree, item) 
{
  document.getElementById(item).style.transform = `rotate(${degree}deg)`;
}
function initialise()
{
  if(currentValue > 86400)
  {
    days = parseInt(currentValue / 86400);
  }
  else if(currentValue > 3600)
  {
    hours = parseInt(currentValue / 3600);
  }
  else if (currentValue > 60)
  {
    minutes = parseInt(currentValue / 60);
  }
  seconds = currentValue % 60;
  sdegree = 6 * (currentValue % 60) + 6;
  mdegree = 6 * (minutes % 60);
  hdegree = 30 * (hours % 12);
  secondCount = seconds;
  minuteCount = minutes;
  hourCount = hours;
  daysCount = days;
  document.getElementById('modal').style.display = 'none';
  startTimer();
}
document.getElementById('btnRestart').addEventListener('click', () => {
  clearTimeout(timerId);
  sdegree = 0;
  mdegree = 0;
  hdegree = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  days = 0;
initialise();
currentValue = temp;
});
document.getElementById('btnCancel').addEventListener('click', () => {
  currentValue = null;
    isRunning = false;
    document.getElementById('timer').innerHTML = "";
    document.title = '00:00:00';
    document.getElementById('time').value = "";
    clearTimeout(timerId);
    setArrow(0, 'secondArrowImage');
    setArrow(0, 'minuteArrowImage');
    setArrow(0, 'hourArrowImage');
});
document.getElementById('btnPause').addEventListener('click', () => {
  if (isRunning)
  {
    isRunning = false;
    document.getElementById('btnPause').textContent = "Продолжить";
    clearTimeout(timerId);
  }
  else
  {
    isRunning = true;
    document.getElementById('btnPause').textContent = "Пауза";
    startTimer();
  }
});
document.getElementById('btnStart').addEventListener('click', () => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted' && isRunning === false)
       {
        if (window.location.search.includes('?')&&Number(document.getElementById('time').value===""))
        {
          currentValue = Number(params[0]);
        }
        else
        currentValue = Number(document.getElementById('time').value);
        temp = currentValue;
        initialise();
      }
    });
  });
function setDegree(degree)
{
  if(secondCount - 1 < 0)
  {
    secondCount = 60;
    if(minuteCount -1 <0)
      {
        minuteCount = 60;
        if(hourCount -1 <0)
          {
            hourCount = 24;
            if (daysCount - 1 < 0)
            {
              daysCount= 365;
            }
            daysCount --;
          }
        hourCount--;
      }
    minuteCount --;
  }
  if(Math.abs(sdegree - degree)>360)
  {
    sdegree = 0;
      if(Math.abs(mdegree- degree)>360)
      {
        mdegree = 0;
        if(Math.abs(hdegree - 30)>360)
        {
          hdegree = 0;
        }
        hdegree -= 30;
      }
    mdegree -= 6;
  }
  sdegree -= degree;
  secondCount --;
}
function setTime()
{
  let sec;
  let min;
  let h;
  if(secondCount<10)
  {
    sec = `0${secondCount}`;
  }
  else
  sec = secondCount;
  if(minuteCount<10)
  {
    min = `0${minuteCount}`;
  }
  else
  min = minuteCount;
  if(hourCount<10)
  {
    h = `0${hourCount}`;
  }
  else
  h = hourCount;
  return `${daysCount}day(s) and ${h}:${min}:${sec}`;
}
function startTimer()
{
  isRunning = true;
  if (currentValue > 0) 
  {
    document.getElementById('timer').innerHTML = setTime();
    document.title = setTime();
    setDegree(6);
    currentValue--;
    setArrow(sdegree, 'secondArrowImage');
    setArrow(mdegree, 'minuteArrowImage');
    setArrow(hdegree, 'hourArrowImage');
    timerId = setTimeout(startTimer, 1000);
    
  } 
  else 
  {
    isRunning = false;
    cancel();
    document.getElementById('modal').style.display = 'block';
  }
  function cancel()
  {
    currentValue = null;
    isRunning = false;
    document.getElementById('timer').innerHTML = '00:00:00';
    document.title = '00:00:00';
    clearTimeout(timerId);
    setArrow(0, 'secondArrowImage');
    setArrow(0, 'minuteArrowImage');
    setArrow(0, 'hourArrowImage');
    notify();
  }
  function notify()
  {
    new Notification(params[1], {
      body: "It's time to work.",
      icon: 'https://img.icons8.com/windows/32/000000/sms--v2.png',
    });
  }
}