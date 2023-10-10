/* Iteration 4: Make the Canvas App Functional */
const buttonGround = document.getElementById("button-ground");
const imgGround = document.getElementById("ground");

buttonGround.oninput = () => {
    imgGround.style.fill = buttonGround.value;
}

const buttonSky = document.getElementById("button-sky");
const imgSky = document.getElementById("sky");

buttonSky.oninput = () => {
    imgSky.style.fill = buttonSky.value;
}

const buttonBody = document.getElementById("button-body");
const imgBody = document.getElementById("body");

buttonBody.oninput = () => {
    imgBody.style.fill = buttonBody.value;
}

const buttonEars = document.getElementById("button-ears");
const imgEars = document.getElementById("ears");

buttonEars.oninput = () => {
    imgEars.style.fill = buttonEars.value;
}

const buttonCheeks = document.getElementById("button-cheeks");
const imgCheeks = document.getElementById("cheeks");

buttonCheeks.oninput = () => {
    imgCheeks.style.fill = buttonCheeks.value;
}
