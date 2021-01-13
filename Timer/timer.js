let isRunning = false;
let sdegree = 0;
let mdegree = 0;
let hdegree = 0;
let fullTime;
let temp = fullTime;
let timerId;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let daysCount;
let secondCount;
let minuteCount;
let hourCount;
let requests = window.location.search.split('&').map((item) => {
  return item.split('=')[1];
});
document.getElementById('newRequest').style.display = 'none';

function setArrow(degree, item) 
{
  document.getElementById(item).style.transform = `rotate(${degree}deg)`;
}
function initialise()
{
  if(fullTime > 86400)
  {
    days = parseInt(fullTime / 86400);
  }
  else if(fullTime > 3600)
  {
    hours = parseInt(fullTime / 3600);
  }
  else if (fullTime > 60)
  {
    minutes = parseInt(fullTime / 60);
  }
  seconds = fullTime % 60;
  sdegree = 6 * (fullTime % 60) + 6;
  mdegree = 6 * (minutes % 60);
  hdegree = 30 * (hours % 12);
  secondCount = seconds;
  minuteCount = minutes;
  hourCount = hours;
  daysCount = days;
  document.getElementById('newRequest').style.display = 'none';
  startTimer();
}
function startTimer()
{
  isRunning = true;
  if (fullTime > 0) 
  {
    document.getElementById('timerSettings').innerHTML = setTime();
    document.title = setTime();
    setDegree(6);
    fullTime--;
    setArrow(sdegree, 'secondArrowImage');
    setArrow(mdegree, 'minuteArrowImage');
    setArrow(hdegree, 'hourArrowImage');
    timerId = setTimeout(startTimer, 1000);
    
  } 
  else 
  {
    isRunning = false;
    cancel();
    document.getElementById('newRequest').style.display = 'block';
  }
  function cancel()
  {
    fullTime = null;
    isRunning = false;
    document.getElementById('timerSettings').innerHTML = '00:00:00';
    document.title = '00:00:00';
    clearTimeout(timerId);
    setArrow(0, 'secondArrowImage');
    setArrow(0, 'minuteArrowImage');
    setArrow(0, 'hourArrowImage');
    notify();
  }
  function notify()
  {
    new Notification("Важное событие!", {
      body: "Время исчерпано!"
    });
  }
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
  fullTime = temp;
});
document.getElementById('btnCancel').addEventListener('click', () => {
    fullTime = null;
    isRunning = false;
    document.getElementById('timerSettings').innerHTML = "";
    document.title = '00:00:00';
    document.getElementById('seconds').value = "";
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
        if (window.location.search.includes('?')&&Number(document.getElementById('seconds').value===""))
        {
          fullTime = Number(requests[0]);
        }
        else
        fullTime = Number(document.getElementById('seconds').value);
        temp = fullTime;
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
  return `Дни: ${daysCount} и ${h}:${min}:${sec}`;
}