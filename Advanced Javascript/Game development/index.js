const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

startScreen.addEventListener('click', start);

let keys = {ArrowUp : false, ArrowDown : false, ArrowLeft : false, ArrowRight: false}; 

let player = {speed : 5, score: 0};

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


function keyDown(e){
    e.preventDefault();
    keys[e.key] = true;

}

function keyUp(e){
    e.preventDefault();
    keys[e.key] = false;
    
}

function gamePlay(){
    
    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();
    

    if(player.start){
        moveLines();
        
        if(keys.ArrowUp && player.y > (road.top + 50)){player.y -= player.speed}
        if(keys.ArrowDown && player.y < (road.bottom - 50)){player.y += player.speed}
        if(keys.ArrowRight && player.x < (road.width - 50)){player.x += player.speed}
        if(keys.ArrowLeft && player.x > 0){player.x -= player.speed}
        
        car.style.top = player.y + "px"; 
        car.style.left = player.x + "px";
        
        
        
        
        window.requestAnimationFrame(gamePlay);
        score.innerText = player.score++;
        moveEnemy(car);
        // console.log(player.score++);

    }
}

function moveLines(){
    let lines = document.querySelectorAll('.lines');
    lines.forEach(function(item){

        if(item.y >= 700){
            item.y -= 750;
        }

        item.y += player.speed;
        item.style.top = item.y + "px";
    })
    
}
        

function start(){
    gameArea.classList.remove('hide');
    startScreen.classList.add("hide");
    player.start = true;
    player.score = 0;
    
    for(x = 0; x < 5; x++){
        let roadLine = document.createElement('div');
        roadLine.setAttribute('class', 'lines');
        roadLine.y = (x*150);
        roadLine.style.top  = roadLine.y + "px";
        gameArea.appendChild(roadLine);
    }
    
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    
    gameArea.appendChild(car);
    
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    
    // console.log("Top position: " + car.offsetTop);
    // console.log("Left Position: " + car.offsetLeft);
    
    for(x = 0; x < 3; x++){
        let enemyCar = document.createElement('div');
        enemyCar.setAttribute('class', 'enemy');
        enemyCar.y = ((x+1) * 350) * -1;
        
        enemyCar.style.top  = enemyCar.y + "px";
        enemyCar.style.background = 'blue'; 
        enemyCar.style.left = Math.floor(Math.random() * 350) + "px";
        gameArea.appendChild(enemyCar);
    }
    
    window.requestAnimationFrame(gamePlay);
}

function isCollide(a, b){
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();
    return !((aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || 
            (aRect.right < bRect.left) || (aRect.left > bRect.right));

}

function moveEnemy(car){
    let enemy = document.querySelectorAll('.enemy');
    enemy.forEach(function(item){

        if(isCollide(car, item)){
            console.log("Boom Hit");
        }

        if(item.y >= 750){
            item.y = -300;
            item.style.left = Math.floor(Math.random() * 350) + "px"; 
        }

        item.y += player.speed;
        item.style.top = item.y + "px";
    })
    
}