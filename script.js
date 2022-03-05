//Tic tac toe game
//needs to have a gameboard/3x3 grid
//when selected empty space takes either x or o
//when three in a row x or o wins

let playerTurn = "X";

const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const buttonThree = document.querySelector(".buttonThree");

const buttonFour = document.querySelector(".buttonFour");
const buttonFive = document.querySelector(".buttonFive");
const buttonSix = document.querySelector(".buttonSix");

const buttonSeven = document.querySelector(".buttonSeven");
const buttonEight = document.querySelector(".buttonEight");
const buttonNine = document.querySelector(".buttonNine");

buttonOne.addEventListener("click", (e) => {
    fillSpace(e);
    console.log(e);
});

buttonTwo.addEventListener("click", (e) => {
    fillSpace(e);
});

buttonThree.addEventListener("click", (e) => {
    fillSpace(e);
});

buttonFour.addEventListener("click", (e) => {
    fillSpace(e);
});

buttonFive.addEventListener("click", (e) => {
    fillSpace(e);
});

buttonSix.addEventListener("click", (e) => {
    fillSpace(e);
});

buttonSeven.addEventListener("click", (e) => {
    fillSpace(e);
});

buttonEight.addEventListener("click", (e) => {
    fillSpace(e);
});

buttonNine.addEventListener("click", (e) => {
    fillSpace(e);
});

function fillSpace(button) {
    if (button.target.innerHTML === "_") {
        if (playerTurn === "X") {
            button.target.innerHTML = "X";
            playerTurn = "O";
        } else {
            button.target.innerHTML = "O";
            playerTurn = "X";
        }
    }
}
