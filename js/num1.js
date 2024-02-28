
let hors = 3600 * 1000;

function mesagge() {
    alert("залишилось менше половини часу");
};

const timer = hors / 2;

setTimeout(mesagge, timer);
