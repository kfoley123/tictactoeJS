// board
//player turns X & O
//win scenarios
//trie scenario

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
    } else {
        e.target.innerHTML = "O";
        playerTurnX = true;
    }
}
