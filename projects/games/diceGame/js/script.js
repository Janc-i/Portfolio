let rollButton = document.querySelector(".roll");
let holdButton = document.querySelector(".hold");
let newGameButton = document.querySelector(".newGame");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let dice = document.querySelector(".dice");
let totalScore1 = document.querySelector(".totalScore1").lastElementChild;
let totalScore2 = document.querySelector(".totalScore2").lastElementChild;
let currentScore1 = document.querySelector(".currentScore1").lastElementChild;
let currentScore2 = document.querySelector(".currentScore2").lastElementChild;
let randomNumber;
let player1 = true;
let currentScore;
let totalScore;
let winner1 = document.querySelector(".winner1");
let winner2 = document.querySelector(".winner2");
let rulesButton = document.querySelector(".rulesButton");
let hide = document.querySelector(".hide");

function playerCheck() {
  if (player1 === true) {
    currentScore = currentScore1;
    totalScore = totalScore1;
    left.style.backgroundColor = "rgba(102, 255, 51, 0.2)";
    right.style.backgroundColor = "transparent";
  } else if (player1 === false) {
    currentScore = currentScore2;
    totalScore = totalScore2;
    left.style.backgroundColor = "transparent";
    right.style.backgroundColor = "rgba(102, 255, 51, 0.2)";
  }
}

playerCheck();
function roll() {
  let interval = setInterval(() => {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = `<img src="img/${randomNumber}.jpg" alt=""></img>`;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    addCurrentScore();
    playerCheck();
  }, 1000);
}

function hold() {
  totalScore.innerText =
    Number(totalScore.innerText) + Number(currentScore.innerText);
  currentScore.innerText = "0";
  evaluation();
  changePlayer();
  playerCheck();
}

function addCurrentScore() {
  if (randomNumber !== 1) {
    currentScore.innerText = Number(currentScore.innerText) + randomNumber;
  } else {
    currentScore.innerText = "0";

    changePlayer();
  }
}

function changePlayer() {
  if (player1 === true) {
    player1 = false;
  } else {
    player1 = true;
  }
}

function evaluation() {
  if (Number(totalScore1.innerText) >= 21) {
    winner1.innerText = "WINNER!";
    changePlayer();
    playerCheck();
    rollButton.remove();
    holdButton.remove();
  } else if (Number(totalScore2.innerText) >= 21) {
    winner2.innerText = "WINNER!";
    changePlayer();
    playerCheck();
    rollButton.remove();
    holdButton.remove();
  }
}

function newGame() {
  location.reload();
}

rulesButton.onclick = function () {
  if (hide.classList.contains("hide")) {
    hide.classList.remove("hide");
    rulesButton.innerText = "hide rules";
  } else {
    hide.classList.add("hide");
    rulesButton.innerText = "show rules";
  }
};
