// board
//player turns X & O
//win scenarios
//trie scenario

var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", placeMarker);
}

function placeMarker(e) {
    e.target.innerHTML = "X";
}
