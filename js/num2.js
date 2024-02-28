const btnEl = document.querySelector(".btn");
const boxEl = document.querySelector(".box");
const timer = 30 * 1000;

function removeColor() {
    boxEl.style.backgroundColor = "red";

};

function mesaggeAlert() {
    alert("Час закінчений");
    btnEl.style.display = "block";
    boxEl.style.backgroundColor = "white";
};

btnEl.addEventListener("click", () => {
    btnEl.style.display = "none";   
    setTimeout(removeColor, 20 * 1000);
    setTimeout(mesaggeAlert, timer);
});