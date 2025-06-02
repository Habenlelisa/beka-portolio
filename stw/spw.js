const stw = document.getElementById("stw");
stw.value = "00:00.00";
let sec = 0;
let interval = null;
let lcounter = 1;
let previousmin = 0;
let previoussec = 0;
let min = 0;
let second = 0;
let canlap = false;
document.getElementById("start").addEventListener("click", function () {
  if (interval == null) {
    interval = setInterval(function () {
      sec++;
      canlap = true;
      min = String(Math.floor(sec / 6000)).padStart(2, 0);
      second = String((sec / 100).toFixed(2)).padStart(5, 0);
      stw.value = min + ":" + second;
    }, 10);
    document.getElementById("start").innerHTML =
      '<img src="/porfolio/stw/imgs/pause.jpg">';
  } else {
    canlap = false;
    clearInterval(interval);
    interval = null;
    document.getElementById("start").innerHTML =
      '<img src="/porfolio/stw/imgs/start.jpg">';
  }
});
document.getElementById("stop").addEventListener("click", function () {
  sec = 0;
  stw.value = "00:00.00";
});
let lastLapSec = 0;
document.getElementById("lap").addEventListener("click", function () {
  if (canlap == true) {
    let currentLapSec = sec - lastLapSec;
    lastLapSec = sec;

    let lapMin = String(Math.floor(currentLapSec / 6000)).padStart(2, "0");
    let lapSec = ((currentLapSec % 6000) / 100).toFixed(2).padStart(5, "0");

    const contain = document.getElementById("lapcontainer");
    const lap = document.createElement("p");

    lap.innerHTML =
      `${String(lcounter).padStart(2, "0")}` +
      "<span>____</span>" +
      "+" +
      `${lapMin}:${lapSec}` +
      "<span>_____________________</span>" +
      `${min}:${second}`;

    contain.appendChild(lap);
    lcounter++;
  }
});
