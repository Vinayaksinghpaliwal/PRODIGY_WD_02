let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startStopBtn').innerText = 'Start';
  } else {
    timer = setInterval(updateDisplay, 1000);
    isRunning = true;
    document.getElementById('startStopBtn').innerText = 'Stop';
  }
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const displayHours = hours < 10 ? `0${hours}` : hours;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  document.getElementById('display').innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('display').innerText = '00:00:00';
  document.getElementById('startStopBtn').innerText = 'Start';
}
