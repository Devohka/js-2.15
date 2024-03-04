const title = document.querySelector(".title-hors");
const btnEl = document.querySelector(".btn-hors");
let hors = 3600 * 1000;
let timeSet = 0;

function mesagge() {
    alert("залишилось менше половини часу");
};

function minTitle() {
    let timerSet = timeSet + 60;
    title.textContent = timerSet;
};

function mesaggeAlert() {
    alert("Час закінчений");
    btnEl.style.display = "block";

};



btnEl.addEventListener("click", () => {
    btnEl.style.display = "none";
    const timer = hors / 2;
    setTimeout(mesagge, timer);
    setTimeout(mesaggeAlert, hors);
    setInterval(minTitle, 60 * 1000);
});
