var css = document.querySelector("h3"),
    color1 = document.querySelector(".color1"),
    color2 = document.querySelector(".color2"),
    body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "radial-gradient( "
        + color1.value
        + ", "
        + color2.value
        + ")";

        css.textContent = body.style.background + ";"; //adds the css text to h3
}

/* color1.addEventListener("input", () => {
    setGradient();
})
color2.addEventListener("input", () => {
    setGradient();
})
 */

color1.addEventListener("input", setGradient); //callbacks and dont need "() for functions"

color2.addEventListener("input", setGradient);

