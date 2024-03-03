const title = document.querySelector(".title-hors");
let hors = 3600 * 1000;
let timeSet = 0;

function mesagge() {
    alert("залишилось менше половини часу");
};

function minTitle() {
    let timerSet = timeSet + (60 * 1000);
    title.textContent = timerSet;
};

const timer = hors / 2;

setTimeout(mesagge, timer);
setInterval(minTitle, 60 * 1000);