var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var dice1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice2 = "images/dice" + randomNumber2 + ".png";

console.log(dice1);

document.querySelector(".img1").setAttribute("src", dice1);

document.querySelector(".img2").setAttribute("src", dice2);

var diceHeader = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    diceHeader.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    diceHeader.innerHTML = "Player 2 Wins! 🚩";
} else {
    diceHeader.innerHTML = "Draw!";
}