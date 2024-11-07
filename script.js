let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

const stopwatchDisplay = document.getElementById("stopwatch");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");

function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

function updateStopwatchDisplay() {
    stopwatchDisplay.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function startStopwatch() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        updateStopwatchDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateStopwatchDisplay();
    lapsContainer.innerHTML = ""; // Clear lap records
}

function recordLap() {
    const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    const lapItem = document.createElement("li");
    lapItem.innerText = `Lap: ${lapTime}`;
    lapsContainer.appendChild(lapItem);
}

startButton.addEventListener("click", () => {
    stopStopwatch();
    startStopwatch();
});

stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);
lapButton.addEventListener("click", recordLap);
