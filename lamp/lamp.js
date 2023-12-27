const paths =
[
    "lamp-off.jpg",
    "lamp-on.jpg"
];

const turn= document.getElementById("turn");
const lamp= document.getElementById("lamp");

turn.onclick = function() {

    if(lamp) {
        const currentSrc = lamp.src;
        const index  = paths.findIndex(path => currentSrc.includes(path));
        const toggledIndex  = 1 - index;
        const textButton = (toggledIndex  === 0) ? "TURN ON" : "TURN OFF";

        lamp.src = `images/${paths[toggledIndex]}`
        turn.textContent = textButton;
    }
}

lamp.onclick = function () {

    if(lamp) {
        lamp.src = "images/lamp-broken.jpg";
        turn.disabled = true;
        turn.style.opacity = "0.3";
        turn.style.cursor  = "none";
        turn.textContent = "BROKED";
    }
}