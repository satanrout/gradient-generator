let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("body");
let gradientvalue = document.querySelector("h3")


function setColor1() {
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    gradientvalue.textContent = body.style.background + ";"
}


color1.addEventListener("input", setColor1);

color2.addEventListener("input", setColor1);
