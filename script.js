let selectors = document.getElementsByClassName('selector');
for (let i = 0; i < selectors.length - 2; i++) {
    try {
        selectors[i].addEventListener('mouseenter', () => selectors[i].children[1].style = 'display:block');
        selectors[i].addEventListener('mouseleave', () => selectors[i].childNodes[3].style = 'display:none');

    } catch (error) {
        console.log(i);
    }
}

function showRange(element) {
    // ;
    console.log('show Range');
}

function hideRange(element) {
    console.log('hide range');

}
let inputs = document.querySelectorAll(".input");
let x, y, Blur, color, spread, opacity;
/*--------------*/
function start() {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    Blur = document.getElementById("blur").value;
    color = document.getElementById("color").value;
    document.documentElement.style.setProperty("--color", color);
    if (x > 0 || x < 0)
        document.documentElement.style.setProperty("--x", x + "px");
    if (y > 0 || y < 0)
        document.documentElement.style.setProperty("--y", y + "px");
    if (Blur > 0)
        document.documentElement.style.setProperty("--blur", Blur + "px");
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