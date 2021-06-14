let i = 0;
const text = "Front End Developer";
// const strText = text.textContent;
// const splitText = text.split("");
// console.log(splitText);
// text.textContent = "";
let input = document.getElementById("inputSpeed");
let speedCalc = parseInt(200 / input.value);

input.addEventListener('input', function (e) {
    speedCalc = parseInt(200 / e.target.value);
});

function textAnimation() {
    if (i == text.length) {
        i = 0;
    }
    if (i < text.length) {
        document.getElementById('fancy').innerText = text.slice(0, i + 1) + '_';
        i++;
        setTimeout(textAnimation, speedCalc)
    }
}

textAnimation();