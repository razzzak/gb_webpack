//import { howlFunc } from "./howler.js";

const timeInput = document.getElementById("time");
const divTimer = document.getElementById("timer");
const btnStart = document.querySelector(".btnstart");
const btnStop = document.querySelector(".btnstop");

function Start() {
  btnStart.style.display = "none";
  btnStop.style.display = "block";
  timeMinut = parseInt(timeInput.value) * 60;

  timer = setInterval(function () {
    seconds = timeMinut % 60;
    minutes = (timeMinut / 60) % 60;
    if (timeMinut <= 0) {
      clearInterval(timer);
    } else {
      let strTimer = `${Math.trunc(minutes)}:${seconds}`;
      divTimer.innerHTML = strTimer;
    }
    --timeMinut;
  }, 1000);
}

function Stop() {
  btnStart.style.display = "block";
  btnStop.style.display = "none";
  clearInterval(timer);
}
