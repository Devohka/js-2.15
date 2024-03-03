const btnEl = document.querySelector(".btn");
const title = document.querySelector(".title-minut");
const boxEl = document.querySelector(".box");
const timer = 30 * 1000;
let num = 0;


function removeColor() {
    boxEl.style.backgroundColor = "red";

};

function sum() {
    
    let tim = num++;
    title.textContent = tim;
};

function mesaggeAlert() {
    alert("Час закінчений");
    btnEl.style.display = "block";
    boxEl.style.backgroundColor = "white";
};

btnEl.addEventListener("click", () => {
    
    setInterval(sum, 1000);
    btnEl.style.display = "none";   
    setTimeout(removeColor, 20 * 1000);
    setTimeout(mesaggeAlert, timer);
});