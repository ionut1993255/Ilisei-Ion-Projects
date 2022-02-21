"use strict";

const btnCheck = document.querySelector(".check");
const btnReset = document.querySelector(".reset");
const randomNumber = document.querySelector(".number");

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

btnCheck.addEventListener("click", function() {
    const number = Math.trunc(Math.random() * 30) + 1;

    if (number % 2 === 0) {
        displayMessage(`Number ${number} is even!`);
        randomNumber.textContent = number;
        randomNumber.style.color = "red";
    } else {
        displayMessage(`Number ${number} is odd!`);
        randomNumber.textContent = number;
        randomNumber.style.color = "blue";
    }
});

btnReset.addEventListener("click", function() {
    randomNumber.textContent = "?";
    randomNumber.style.color = "#112A46";
    displayMessage(`Please press the button "Check!"`);
});