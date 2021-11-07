
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.disabled = true;


startBtn.addEventListener('click', startColor);
stopBtn.addEventListener('click', stopColor);

let timerId;

function startColor(e) {
    timerId = setInterval(changeColor, 1000); 
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopColor (e) {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}


function changeColor() {
    document.querySelector('body').style.backgroundColor = getRandomHexColor();
}

export function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

