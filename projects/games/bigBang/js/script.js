let btnP1 = document.getElementsByClassName("btnP1");
let btnP2 = document.getElementsByClassName("btnP2");
let actionP1 = document.querySelector(".actionP1");
let actionP2 = document.querySelector(".actionP2");

let buttonsP1 = document.querySelector(".buttonsP1");
let buttonsP2 = document.querySelector(".buttonsP2");

let btnP1rock = document.getElementById("btnP1rock");
let btnP1paper = document.getElementById("btnP1paper");
let btnP1scissors = document.getElementById("btnP1scissors");
let btnP1lizard = document.getElementById("btnP1lizard");
let btnP1spock = document.getElementById("btnP1spock");

let btnP2rock = document.getElementById("btnP2rock");
let btnP2paper = document.getElementById("btnP2paper");
let btnP2scissors = document.getElementById("btnP2scissors");
let btnP2lizard = document.getElementById("btnP2lizard");
let btnP2spock = document.getElementById("btnP2spock");

let footer = document.querySelector(".footer");
let scoreP1 = document.getElementById("scoreP1");
let scoreP2 = document.getElementById("scoreP2");

let defaultP1btn = document.getElementById("defaultP1btn");
let defaultP2btn = document.getElementById("defaultP2btn");

let infoP1 = document.querySelector(".infoP1");
let infoP2 = document.querySelector(".infoP2");

let rajPhoto = document.querySelector(".infoP1").querySelectorAll("img");
let sheldonPhoto = document.querySelector(".infoP2").querySelectorAll("img");

let rajGifHappy = document
  .querySelector(".raj-gif-happy")
  .querySelectorAll("div");
let rajGifSad = document.querySelector(".raj-gif-sad").querySelectorAll("div");
let sheldonGifHappy = document
  .querySelector(".sheldon-gif-happy")
  .querySelectorAll("div");
let sheldonGifSad = document
  .querySelector(".sheldon-gif-sad")
  .querySelectorAll("div");

//

//PLAYER APPEND BUTTON
let totalP1 = 0;
let totalP2 = 0;
for (let i = 0; i < btnP1.length; i++) {
  btnP1[i].onclick = function () {
    actionP1.innerHTML = "";
    actionP2.innerHTML = "";
    actionP1
      .appendChild(defaultP1btn)
      .setAttribute("class", "btnP1 rotate-left");
    actionP2
      .appendChild(defaultP2btn)
      .setAttribute("class", "btnP2 rotate-right");
    infoP1.innerHTML = "";
    infoP1.appendChild(rajPhoto[0]);
    infoP2.innerHTML = "";
    infoP2.appendChild(sheldonPhoto[0]);
    footer.innerHTML = "";

    setTimeout(play, 900);

    function play() {
      actionP1.innerHTML = "";
      let P1choiceValue = actionP1
        .appendChild(btnP1[i].cloneNode(true))
        .getAttribute("value");

      //CPU APPEND RANDOM
      let random = Math.floor(Math.random() * 5);
      actionP2.innerHTML = "";
      let P2choiceValue = actionP2
        .appendChild(btnP2[random].cloneNode(true))
        .getAttribute("value");

      //EVALUATION
      let p1win;
      let tie;

      if (P1choiceValue === P2choiceValue) {
        footer.innerHTML = "tie";
        footer.style = "color: grey";
        tie = true;
      } else if (P1choiceValue === "ROCK" && P2choiceValue === "PAPER") {
        footer.innerHTML = "you lost - paper covers rock";
        footer.style = "color: red";
        p1win = false;
      } else if (P1choiceValue === "ROCK" && P2choiceValue === "SCISSORS") {
        footer.innerHTML = "you won - rock crushes scissors";
        footer.style = "color: green";
        p1win = true;
      } else if (P1choiceValue === "ROCK" && P2choiceValue === "LIZARD") {
        footer.innerHTML = "you won - rock crushes lizard";
        footer.style = "color: green";
        p1win = true;
      } else if (P1choiceValue === "ROCK" && P2choiceValue === "SPOCK") {
        footer.innerHTML = "you lost - Spock vaporizes rock";
        footer.style = "color: red";
        p1win = false;
      } else if (P1choiceValue === "PAPER" && P2choiceValue === "ROCK") {
        footer.innerHTML = "you won - paper covers rock";
        footer.style = "color: green";
        p1win = true;
      } else if (P1choiceValue === "PAPER" && P2choiceValue === "SCISSORS") {
        footer.innerHTML = "you lost - scissors cuts paper";
        footer.style = "color: red";
        p1win = false;
      } else if (P1choiceValue === "PAPER" && P2choiceValue === "LIZARD") {
        footer.innerHTML = "you lost - lizard eats paper";
        footer.style = "color: red";
        p1win = false;
      } else if (P1choiceValue === "PAPER" && P2choiceValue === "SPOCK") {
        footer.innerHTML = "you won - paper disproves Spock";
        footer.style = "color: green";
        p1win = true;
      } else if (P1choiceValue === "SCISSORS" && P2choiceValue === "ROCK") {
        footer.innerHTML = "you lost - rock crushes scissors";
        footer.style = "color: red";
        p1win = false;
      } else if (P1choiceValue === "SCISSORS" && P2choiceValue === "PAPER") {
        footer.innerHTML = "you won - scissors cuts paper";
        footer.style = "color: green";
        p1win = true;
      } else if (P1choiceValue === "SCISSORS" && P2choiceValue === "LIZARD") {
        footer.innerHTML = "you won - scissors decapitates lizard";
        footer.style = "color: green";
        p1win = true;
      } else if (P1choiceValue === "SCISSORS" && P2choiceValue === "SPOCK") {
        footer.innerHTML = "you lost - Spock smashes scissors";
        footer.style = "color: red";
        p1win = false;
      } else if (P1choiceValue === "LIZARD" && P2choiceValue === "ROCK") {
        footer.innerHTML = "you lost - rock crushes lizard";
        footer.style = "color: red";
        p1win = false;
      } else if (P1choiceValue === "LIZARD" && P2choiceValue === "PAPER") {
        footer.innerHTML = "you won - lizard eats paper";
        footer.style = "color: green";
        p1win = true;
      } else if (P1choiceValue === "LIZARD" && P2choiceValue === "SCISSORS") {
        footer.innerHTML = "you lost - scissors decapitates lizard";
        footer.style = "color: red";
        p1win = false;
      } else if (P1choiceValue === "LIZARD" && P2choiceValue === "SPOCK") {
        footer.innerHTML = "you won - lizard poisons Spock";
        footer.style = "color: green";
        p1win = true;
      } else if (P1choiceValue === "SPOCK" && P2choiceValue === "ROCK") {
        footer.innerHTML = "you won - Spock vaporizes rock";
        footer.style = "color: green";
        p1win = true;
      } else if (P1choiceValue === "SPOCK" && P2choiceValue === "PAPER") {
        footer.innerHTML = "you lost - paper disproves Spock";
        footer.style = "color: red";
        p1win = false;
      } else if (P1choiceValue === "SPOCK" && P2choiceValue === "SCISSORS") {
        footer.innerHTML = "you won - Spock smashes scissors";
        footer.style = "color: green";
        p1win = true;
      } else if (P1choiceValue === "SPOCK" && P2choiceValue === "LIZARD") {
        footer.innerHTML = "you lost - lizard poisons Spock";
        footer.style = "color: red";
        p1win = false;
      }

      if (p1win === true) {
        let randomRajHappy = Math.floor(Math.random() * rajGifHappy.length);
        let randomSheldonSad = Math.floor(Math.random() * sheldonGifSad.length);
        totalP1 = totalP1 + 1;
        scoreP1.innerHTML = totalP1;

        infoP1.innerHTML = "";
        infoP2.innerHTML = "";

        infoP1.appendChild(rajPhoto[0]);
        infoP1.appendChild(rajGifHappy[randomRajHappy]);

        infoP2.appendChild(sheldonPhoto[0]);
        infoP2.appendChild(sheldonGifSad[randomSheldonSad]);
      } else if (p1win === false) {
        let randomRajSad = Math.floor(Math.random() * rajGifSad.length);
        let randomSheldonHappy = Math.floor(
          Math.random() * sheldonGifHappy.length
        );

        totalP2 = totalP2 + 1;
        scoreP2.innerHTML = totalP2;

        infoP1.innerHTML = "";
        infoP2.innerHTML = "";

        infoP1.appendChild(rajPhoto[0]);
        infoP1.appendChild(rajGifSad[randomRajSad]);

        infoP2.appendChild(sheldonPhoto[0]);
        infoP2.appendChild(sheldonGifHappy[randomSheldonHappy]);
      } else if (tie === true) {
        infoP1.innerHTML = "";
        infoP2.innerHTML = "";
        infoP1.appendChild(rajPhoto[0]);
        infoP2.appendChild(sheldonPhoto[0]);
      }

      //ENDGAME

      if (scoreP1.innerHTML == "10") {
        buttonsP1.innerHTML = "";
        buttonsP2.innerHTML = "";
        scoreP1.style.border = "2px solid green";

        setTimeout(() => {
          footer.innerHTML = "YOU WON THE GAME!";
          actionP1.innerHTML = "";
          actionP2.innerHTML = "";

          let again = footer.appendChild(document.createElement("button"));
          again.setAttribute("class", "buttonsP1 btnP1 again");
          again.innerText = " PLAY AGAIN?";
          again.onclick = function () {
            location.reload();
          };
        }, 2000);
      } else if (scoreP2.innerHTML == "10") {
        buttonsP1.innerHTML = "";
        buttonsP2.innerHTML = "";
        scoreP2.style.border = "2px solid green";

        setTimeout(() => {
          footer.innerHTML = "YOU LOST THE GAME";
          actionP1.innerHTML = "";
          actionP2.innerHTML = "";

          let again = footer.appendChild(document.createElement("button"));
          again.setAttribute("class", "buttonsP1 btnP1 again");
          again.innerText = " PLAY AGAIN?";
          again.onclick = function () {
            location.reload();
          };
        }, 2000);
      }
    }
  };
}
