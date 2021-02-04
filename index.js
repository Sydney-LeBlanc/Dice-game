function rollDice() {
  randomNumber = Math.ceil(Math.random() * 6);
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber + ".png");
  randomNumber2 = Math.ceil(Math.random() * 6);
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  document.querySelector("button").innerHTML = "Roll Again";
}

document.querySelector("button").addEventListener("click", rollDice);