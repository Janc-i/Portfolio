let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let box = document.querySelectorAll(".box");

let player1 = true;
let score = document.querySelector('.score');


//change player

box.forEach(function (each) {
  each.onclick = function () {
    if (player1 === true && each.innerText ==='') {
        
      each.innerText = "O";
      player1 = false;
    } else if (player1 ===false && each.innerText ==='') {
        
      each.innerText = "X";
      player1 = true;
    }
    evaluation();
   
 
    
  };
});



//evaluation
function evaluation() {

  

    //rows
  if (
    box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O") {
    score.innerText = "player 1 wins!";
    box1.style.color = 'green'
    box2.style.color = 'green'
    box3.style.color = 'green'
   
    
    
}
  if (
    box1.innerHTML === "X" && box2.innerHTML === "X" && box3.innerHTML === "X") {
        score.innerText = "player 2 wins!";
        box1.style.color = 'green'
        box2.style.color = 'green'
        box3.style.color = 'green'
  }
  if (
    box4.innerHTML === "O" && box5.innerHTML === "O" && box6.innerHTML === "O") {
        score.innerText = "player 1 wins!";
        box4.style.color = 'green'
        box5.style.color = 'green'
        box6.style.color = 'green'
  }
  if (
    box4.innerHTML === "X" && box5.innerHTML === "X" && box6.innerHTML === "X") {
        score.innerText = "player 2 wins!";
        box4.style.color = 'green'
        box5.style.color = 'green'
        box6.style.color = 'green'
    
  }
  if (
    box7.innerHTML === "O" && box8.innerHTML === "O" && box9.innerHTML === "O") {
        score.innerText = "player 1 wins!";
        box7.style.color = 'green'
        box8.style.color = 'green'
        box9.style.color = 'green'
  }
  if (
    box7.innerHTML === "X" && box8.innerHTML === "X" && box9.innerHTML === "X") {
        score.innerText = "player 2 wins!";
        box7.style.color = 'green'
        box8.style.color = 'green'
        box9.style.color = 'green'
  }

  //columns

  if (
    box1.innerHTML === "O" && box4.innerHTML === "O" && box7.innerHTML === "O") {
        score.innerText = "player 1 wins!";
        box1.style.color = 'green'
        box4.style.color = 'green'
        box7.style.color = 'green'
  }
  if (
    box1.innerHTML === "X" && box4.innerHTML === "X" && box7.innerHTML === "X") {
        score.innerText = "player 2 wins!";
        box1.style.color = 'green'
        box4.style.color = 'green'
        box7.style.color = 'green'
  }
  if (
    box2.innerHTML === "O" && box5.innerHTML === "O" && box8.innerHTML === "O") {
        score.innerText = "player 1 wins!";
        box2.style.color = 'green'
        box5.style.color = 'green'
        box8.style.color = 'green'
  }
  if (
    box2.innerHTML === "X" && box5.innerHTML === "X" && box8.innerHTML === "X") {
        score.innerText = "player 2 wins!";
        box2.style.color = 'green'
        box5.style.color = 'green'
        box8.style.color = 'green'
  }
  if (
    box3.innerHTML === "O" && box6.innerHTML === "O" && box9.innerHTML === "O") {
        score.innerText = "player 1 wins!";
        box3.style.color = 'green'
        box6.style.color = 'green'
        box9.style.color = 'green'

  }
  if (
    box3.innerHTML === "X" && box6.innerHTML === "X" && box9.innerHTML === "X") {
        score.innerText = "player 2 wins!";
        box3.style.color = 'green'
        box6.style.color = 'green'
        box9.style.color = 'green'

  }

  //diagonals

  if (
    box1.innerHTML === "O" && box5.innerHTML === "O" && box9.innerHTML === "O") {
        score.innerText = "player 1 wins!";
        box1.style.color = 'green'
        box5.style.color = 'green'
        box9.style.color = 'green'

  }
  if (
    box1.innerHTML === "X" && box5.innerHTML === "X" && box9.innerHTML === "X") {
        score.innerText = "player 2 wins!";
        box1.style.color = 'green'
        box5.style.color = 'green'
        box9.style.color = 'green'
  }
  if (
    box3.innerHTML === "O" && box5.innerHTML === "O" && box7.innerHTML === "O") {
        score.innerText = "player 1 wins!";
        box3.style.color = 'green'
        box5.style.color = 'green'
        box7.style.color = 'green'
  }

  if (
    box3.innerHTML === "X" && box5.innerHTML === "X" && box7.innerHTML === "X") {
        score.innerText = "player 2 wins!";
        box3.style.color = 'green'
        box5.style.color = 'green'
        box7.style.color = 'green'
  }


  //tie
box.forEach(function(each){
  if (box1.innerText!=='' && box2.innerText!=='' && box3.innerText!=='' && box4.innerText!=='' && box5.innerText!=='' && box6.innerText!=='' && box7.innerText!=='' && box8.innerText!=='' && box9.innerText!=='' && box1.style.color !=='green' && box2.style.color !=='green' && box3.style.color !=='green' && box4.style.color !=='green' && box5.style.color !=='green' && box6.style.color !=='green' && box7.style.color !=='green' && box8.style.color !=='green' && box9.style.color !=='green') {
    score.innerText ='tie'


  }
})
//dont continue to play when someone wins
  if (score.innerText==="player 1 wins!" || score.innerText==="player 2 wins!" || score.innerText==='tie') {
    box.forEach(function(each){
      each.onclick = function(){
        return
      }
    })
//create replay button when someone wins

    let replay = document.createElement('button')
    let main = document.querySelector('main')
    replay.classList.add('replay')
    main.appendChild(replay)
    replay.innerText = 'REPLAY'
    replay.onclick=function(){
      location.reload()
    }
  }

  
 
}






  



  
