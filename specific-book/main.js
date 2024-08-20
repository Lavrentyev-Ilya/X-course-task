const plusButton = document.querySelector(".countPlus");
const minusButton = document.querySelector(".countMinus");
const arrowButton = document.querySelectorAll(".countArrow");
let inputValue = document.querySelector(".countNum");
const bookPrice = document.querySelector(".priceNum");
let totalNumber = document.querySelector(".totalNum");

document.addEventListener("DOMContentLoaded", function () {
    totalNumber.innerHTML = inputValue.value * bookPrice.innerHTML;
});

inputValue.addEventListener("change", function () {
    validateInput();
    changeTotalPrice();
});
inputValue.addEventListener("keyup", function (event) {
    if (event.key === "ArrowUp" || event.keyCode === 38) {
        inputValue.value++;
        validateInput();
        changeTotalPrice();
    }
    if (event.key === "ArrowDown" || event.keyCode === 40) {
        inputValue.value--;
        validateInput();
        changeTotalPrice();
    }
});
for (let i = 0; i < arrowButton.length; i++) {
    arrowButton[i].addEventListener("click", function () {
        arrowClick(arrowButton[i]);
        if (inputValue.value <= 0) {
            inputValue.value = 1;
        }
        changeTotalPrice();
    });
}
function arrowClick(arrow) {
    if (arrow.dataset.arrow == "plus" && inputValue.value < 42) {
        inputValue.value++;
    } else if (arrow.dataset.arrow == "minus" && inputValue.value > 0) {
        inputValue.value--;
    }
}
function changeTotalPrice() {
    totalNumber.innerHTML = inputValue.value * bookPrice.innerHTML;
}

function validateInput() {
    if (inputValue.value <= 0) {
        inputValue.value = 1;
    }
    if (inputValue.value > 42) {
        inputValue.value = 42;
    }
}
