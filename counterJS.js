const buttonIncrease = document.getElementById("buttonIncrease");
const buttonDecrease = document.getElementById("buttonDecrease");
const buttonReset = document.getElementById("buttonReset");
const number = document.getElementById("number");
let count = 0;

buttonIncrease.onclick = function increase(){
    count++;
    number.textContent = count;
};

buttonDecrease.onclick = function decrease(){
    if (count == 0) {
        count = 0;
    } else {
        count--;
        number.textContent = count;
    }
};

buttonReset.onclick = function reset(){
    count = 0;
    number.textContent = count;
};