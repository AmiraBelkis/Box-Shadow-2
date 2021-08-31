let selectors = document.getElementsByClassName('selector');
for (let i = 0; i < selectors.length - 2; i++) {
    selectors[i].addEventListener('mouseenter', () => selectors[i].children[1].style = 'display:block');
    selectors[i].addEventListener('mouseleave', () => selectors[i].childNodes[3].style = 'display:none');
}
let val = document.getElementsByClassName('val');
let x, y, Blur, spread, opacity, boxColor, shadowColor;
/*-------------X--------------*/
function X() {
    document.documentElement.style.setProperty("--x", x + "px");
    x = document.getElementById("x").value;
    val[0].innerHTML = x;

}
/*-------------Y--------------*/
function Y() {
    y = document.getElementById("y").value;
    document.documentElement.style.setProperty("--y", y + "px");
    val[1].innerHTML = y;
}
/*-------------blur--------------*/
function shadowBlur() {
    Blur = document.getElementById("blur").value;
    document.documentElement.style.setProperty("--blur", Blur + "px");
    val[3].innerHTML = Blur;

}

/*-------------spread--------------*/
function Spread() {
    spread = document.getElementById("spread").value;
    document.documentElement.style.setProperty("--spread", spread + "px");
    val[2].innerHTML = spread;

}

/*-------------opacity--------------*/
function Opacity() {
    val[4].innerHTML = opacity;
    opacity = document.getElementById("opacity").value;
    document.documentElement.style.setProperty("--opacity", opacity);

}

/*-------------box color--------------*/
function BoxColor() {
    boxColor = document.getElementById("boxColorPicker").value;
    document.documentElement.style.setProperty("--boxColor", boxColor);

}

/*-------------shadow color--------------*/
function ShadowColor() {
    shadowColor = document.getElementById("shadowColorPicker").value;
    document.documentElement.style.setProperty("--shadowColor", shadowColor);

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