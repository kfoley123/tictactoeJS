// board
//player turns X & O
//win scenarios

let playerTurnX = true;

var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", placeMarker);
}

function placeMarker(e) {
    if (playerTurnX == true) {
        e.target.innerHTML = "X";
        playerTurnX = false;
        checkForWin(buttons);
    } else {
        e.target.innerHTML = "O";
        playerTurnX = true;
        checkForWin(buttons);
    }
}

function checkForWin(buttonsArray) {
    if (
        buttonsArray[0].innerHTML == buttonsArray[1].innerHTML &&
        buttonsArray[2].innerHTML == buttonsArray[0].innerHTML
    ) {
        alert("WIN");
    }
}
