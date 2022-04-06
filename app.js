const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const min = document.querySelector(".min");
const sec = document.querySelector("span");
const start = document.querySelector(".start");
const pause = document.querySelector(".stop");
const reset = document.querySelector(".reset");
let seconds = 0, minutes = 0;
let timerRef = document.querySelector(".timer");
let interval = null;

start.addEventListener("click", () => {
    if (interval !== null) {
        clearInterval(interval);
    }
    interval = setInterval(displayTimer, 1000);
});

pause.addEventListener("click", () => {
    clearInterval(interval);
})

reset.addEventListener("click", () => {
    clearInterval(interval);
    seconds = 0, minutes = 0;
    timerRef.innerHTML = "00 : 00";
});

function displayTimer() {
    seconds += 1;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timerRef.innerHTML = `${m} : ${s}`;
}
