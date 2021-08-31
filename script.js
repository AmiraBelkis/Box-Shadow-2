let selectors = document.getElementsByClassName('selector');
for (let i = 0; i < selectors.length - 2; i++) {
    selectors[i].addEventListener('mouseenter', () => selectors[i].children[1].style = 'display:block');
    selectors[i].addEventListener('mouseleave', () => selectors[i].childNodes[3].style = 'display:none');
}
let inputs = document.querySelectorAll(".input");
let x, y, Blur, spread, opacity, boxColor, shadowColor;
/*--------------*/
function start() {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    Blur = document.getElementById("blur").value;
    spread = document.getElementById("spread").value;
    opacity = document.getElementById("opacity").value;
    boxColor = document.getElementById("boxColorPicker").value;
    shadowColor = document.getElementById("shadowColorPicker").value;
    //-------------------------------------------
    document.documentElement.style.setProperty("--x", x + "px");
    document.documentElement.style.setProperty("--y", y + "px");
    document.documentElement.style.setProperty("--blur", Blur + "px");
    document.documentElement.style.setProperty("--spread", spread + "px");
    document.documentElement.style.setProperty("--opacity", opacity);
    document.documentElement.style.setProperty("--boxColor", boxColor);
    document.documentElement.style.setProperty("--shadowColor", shadowColor);
    //-------------------------------------------
}
/*--------*/
function copy() {
    let element = document.createElement("textarea");
    element.value = `box-Shadow: ${x}px ${y}px ${Blur}px ${color};`;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
}
/*---------------*/
function ChngColor() {
    let boxColor = document.getElementById("Box-color").value;
    document.documentElement.style.setProperty("--color2", boxColor);
}