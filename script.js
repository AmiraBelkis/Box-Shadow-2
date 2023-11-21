let selectors = document.getElementsByClassName('selector');
for (let i = 0; i < selectors.length - 2; i++) {
    selectors[i].addEventListener('mouseenter', () => selectors[i].children[1].style = 'display:block');
    selectors[i].addEventListener('mouseleave', () => selectors[i].childNodes[3].style = 'display:none');
}
let val = document.getElementsByClassName('val');
let x = 0,
    y = 0,
    Blur = 0,
    spread = 0,
    boxColor, shadowColor = '#000000';
/*-------------X--------------*/
function X() {
    document.documentElement.style.setProperty("--x", x + "px");
    x = document.getElementById("x").value;
    val[0].innerHTML = x;
    ChangeTxt();


}
/*-------------Y--------------*/
function Y() {
    y = document.getElementById("y").value;
    document.documentElement.style.setProperty("--y", y + "px");
    val[1].innerHTML = y;
    ChangeTxt();

}
/*-------------blur--------------*/
function shadowBlur() {
    Blur = document.getElementById("blur").value;
    document.documentElement.style.setProperty("--blur", Blur + "px");
    val[3].innerHTML = Blur;
    ChangeTxt();


}

/*-------------spread--------------*/
function Spread() {
    spread = document.getElementById("spread").value;
    document.documentElement.style.setProperty("--spread", spread + "px");
    val[2].innerHTML = spread;
    ChangeTxt();


}

/*-------------box color--------------*/
function BoxColor() {
    boxColor = document.getElementById("boxColorPicker").value;
    document.documentElement.style.setProperty("--boxColor", boxColor);
    ChangeTxt();


}

/*-------------shadow color--------------*/
function ShadowColor() {
    shadowColor = document.getElementById("shadowColorPicker").value;
    document.documentElement.style.setProperty("--shadowColor", shadowColor);
    ChangeTxt();

}

/*------------Change text area---------*/
function ChangeTxt() {
    let element = document.getElementsByTagName("textarea")[0];
    element.value = `box-Shadow: ${x}px ${y}px ${Blur}px ${spread}px  ${shadowColor};`;

}
/*------------Copy Css Code----------*/
function copy() {
    let element = document.createElement("textarea");
    element.value = `box-shadow: ${x}px ${y}px ${Blur}px ${spread}px  ${shadowColor};`;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert('Style was copied')
}