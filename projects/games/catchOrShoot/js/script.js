let game = document.getElementById("game")
let player = document.getElementById("player")
//let playerPosX = parseInt(getComputedStyle(player).getPropertyValue('left'))
let playerPosY = parseInt(getComputedStyle(player).getPropertyValue('top'))
let scoreDisplay = document.getElementById('score')
let scoreDisplay2 = document.getElementById('score2')
let replay = document.querySelector('.replay')
let replayButton = document.querySelector('.replayButton')
let replayScore = document.querySelector('.replayScore')
let score = 0
let score2 = 0
let density = 3
let speed = 2
let speed2 = 100
let time = 60



//create obstacle

    


function rain () {

    let obstacle = document.createElement("div")
    obstacle.setAttribute('class', 'obstacles')
    let obstPosX = parseInt(getComputedStyle(obstacle).getPropertyValue('left'))



    //random color of an obstacle
    let color1 = Math.floor(Math.random()*256)
    let color2 = Math.floor(Math.random()*256)
    let color3 = Math.floor(Math.random()*256)
    let randomObstColor = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')'
    obstacle.style.backgroundColor = randomObstColor

    //random score in an obstacle
    let randomScore = Math.ceil(Math.random()*9)
    obstacle.innerText = randomScore

    //random position of an obstacle
    let randomObstPosX = Math.floor(Math.random()*450+70)
    obstPosX = randomObstPosX
    obstacle.style.left = obstPosX + 'px'



    //PLAY
    function play(){
    game.appendChild(obstacle)
    } 

    play()

    


    //fall obstacle
    let obstPosY = parseInt(getComputedStyle(obstacle).getPropertyValue('top'))


    setInterval(function() {
        
            obstPosY = obstPosY + speed
            obstacle.style.top = obstPosY + 'px'
            if (obstPosY >575) {
                obstacle.remove()
            }

    //collision with player


    let obstacleLeft = parseInt(obstacle.style.left)
    let obstacleTop = parseInt(obstacle.style.top)
    let playerLeft = parseInt(player.style.left)
    if(obstacleLeft > playerLeft -25+1 && obstacleLeft < playerLeft + 100-1 && obstPosY === playerPosY -25){
        score = score + randomScore
        
    //change color of player on collision with obstacles  
        setTimeout(() => {
            player.style.backgroundColor = 'red'
            
            }, 100);
            
            player.style.backgroundColor = 'white'
            obstacle.remove()
            scoreDisplay.innerText = score
            
        }
            
        
    },1000/speed2)

}


let interval = setInterval(function() {
    rain()
},1000/density)


document.onmousemove = function(event){
    
    
    let playerLeft = parseInt(getComputedStyle(player).getPropertyValue('left'))
    
    let x = event.clientX
    let y = event.clientY
    
   
             if(x>=0 && x<=500) {
            
            player.style.left = x+'px'
            
        }

  
        //create weapon
        
        
        document.onclick = function(e) {
            

            let bullet = document.createElement('div')
            bullet.setAttribute('class', 'bullet')
            game.appendChild(bullet)
            
            let moveBullet = setInterval(function (){
                
                let bulletBottom = parseInt(getComputedStyle(bullet).getPropertyValue('bottom'))
                let bulletTop = parseInt(getComputedStyle(bullet).getPropertyValue('top'))
                let bulletLeft = parseInt(getComputedStyle(bullet).getPropertyValue('left'))
                let obstacle = document.getElementsByClassName('obstacles')
                
                
                for(let i = 0; i<obstacle.length;i++) {
                    
                    if (parseInt(obstacle[i].style.top) > bulletTop && bulletLeft >= parseInt(obstacle[i].style.left) - 10 && bulletLeft < parseInt(obstacle[i].style.left) + 25 ){
                        
                        score2 = score2 + parseInt(obstacle[i].innerText)
                        scoreDisplay2.innerText = score2
                        
                        obstacle[i].remove()

                        
                        
                        
                    }
                }

            
                
                bullet.style.left = playerLeft + 45 + 'px'
                bullet.style.bottom = bulletBottom + 5 + 'px'

                if(bulletTop ===0){
                    bullet.remove()

                }

            


            },5)
            
            
            
        }

        


        




}



//COUNTDOWN

function countdown() {
    let seconds = time;
    function tick() {
      let counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds >= 0.01) {
        setTimeout(tick, 1000);
      } else {
        replay.classList.remove('hide')
        replayScore.innerText = parseInt(score+score2)
        game.innerHTML = ''
        game.style.cursor='pointer'
        clearInterval(interval)
        
       
        
        
        replayButton.onclick = function(){
            location.reload()
        }
      }
    }
    tick();
  }
 countdown();



















    
    

