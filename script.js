//Tic tac toe game
//needs to have a gameboard/3x3 grid
//when selected empty space takes either x or o
//when three in a row x or o wins

let playerTurn = "X";

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", fillSpace);
});

//this is how it would look all written out

// const buttonOne = document.querySelector(".buttonOne");
// const buttonTwo = document.querySelector(".buttonTwo");
// const buttonThree = document.querySelector(".buttonThree");

// const buttonFour = document.querySelector(".buttonFour");
// const buttonFive = document.querySelector(".buttonFive");
// const buttonSix = document.querySelector(".buttonSix");

// const buttonSeven = document.querySelector(".buttonSeven");
// const buttonEight = document.querySelector(".buttonEight");
// const buttonNine = document.querySelector(".buttonNine");

// buttonOne.addEventListener("click", (e) => {
//     fillSpace(e);
// });

// buttonTwo.addEventListener("click", (e) => {
//     fillSpace(e);
// });

// buttonThree.addEventListener("click", (e) => {
//     fillSpace(e);
// });

// buttonFour.addEventListener("click", (e) => {
//     fillSpace(e);
// });

// buttonFive.addEventListener("click", (e) => {
//     fillSpace(e);
// });

// buttonSix.addEventListener("click", (e) => {
//     fillSpace(e);
// });

// buttonSeven.addEventListener("click", (e) => {
//     fillSpace(e);
// });

// buttonEight.addEventListener("click", (e) => {
//     fillSpace(e);
// });

// buttonNine.addEventListener("click", (e) => {
//     fillSpace(e);
// });

function fillSpace(button) {
    if (button.target.innerHTML === "_") {
        if (playerTurn === "X") {
            button.target.innerHTML = "X";
            playerTurn = "O";
            checkForWin();
        } else {
            button.target.innerHTML = "O";
            playerTurn = "X";
            checkForWin();
        }
    }
}

function checkForWin() {
    if (
        buttons[0].innerHTML === buttons[1].innerHTML &&
        buttons[1].innerHTML === buttons[2].innerHTML &&
        buttons[0].innerHTML !== "_"
    ) {
        youWin();
    }
    if (
        buttons[3].innerHTML === buttons[4].innerHTML &&
        buttons[4].innerHTML === buttons[5].innerHTML &&
        buttons[3].innerHTML !== "_"
    ) {
        youWin();
    }
    if (
        buttons[6].innerHTML === buttons[7].innerHTML &&
        buttons[7].innerHTML === buttons[8].innerHTML &&
        buttons[6].innerHTML !== "_"
    ) {
        youWin();
    }
    if (
        buttons[0].innerHTML === buttons[3].innerHTML &&
        buttons[3].innerHTML === buttons[6].innerHTML &&
        buttons[0].innerHTML !== "_"
    ) {
        youWin();
    }
    if (
        buttons[1].innerHTML === buttons[4].innerHTML &&
        buttons[4].innerHTML === buttons[7].innerHTML &&
        buttons[1].innerHTML !== "_"
    ) {
        youWin();
    }
    if (
        buttons[2].innerHTML === buttons[5].innerHTML &&
        buttons[5].innerHTML === buttons[8].innerHTML &&
        buttons[2].innerHTML !== "_"
    ) {
        youWin();
    }
    if (
        buttons[2].innerHTML === buttons[4].innerHTML &&
        buttons[4].innerHTML === buttons[6].innerHTML &&
        buttons[2].innerHTML !== "_"
    ) {
        youWin();
    }
    if (
        buttons[0].innerHTML === buttons[4].innerHTML &&
        buttons[4].innerHTML === buttons[8].innerHTML &&
        buttons[0].innerHTML !== "_"
    ) {
        youWin();
    }
}

function youWin() {
    alert("YOU WIN!");
}
