var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var newLink1 = "./images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var newLink2 = "./images/dice" + randomNumber2 + ".png";

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

dice1.setAttribute("src", newLink1);
dice2.setAttribute("src", newLink2);

var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  title.innerHTML = "🚩Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  title.innerHTML = "Player 2 Wins🚩";
} else {
  title.innerHTML = "Draw!";
}
