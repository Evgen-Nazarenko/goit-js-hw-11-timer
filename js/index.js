const daysID = document.getElementById("days");
const hoursID = document.getElementById("hours");
const minutesID = document.getElementById("minutes");
const secondsID = document.getElementById("seconds");

const newYears = "1 Jan 2022";
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 24;
  const seconds = Math.floor(totalSeconds) % 60;

  daysID.innerHTML = days;
  hoursID.innerHTML = hours;
  minutesID.innerHTML = minutes;
  secondsID.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);
