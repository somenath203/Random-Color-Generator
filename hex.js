const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorText = document.querySelector('.color');
const button = document.querySelector('#btn');

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}

button.addEventListener('click', function () {

    let hexColor = "#";

    for (let i = 0; i <= 5; i++) {
        hexColor += hex[randomNumber()];
    }

    colorText.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});