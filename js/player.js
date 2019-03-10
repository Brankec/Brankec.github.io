var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var gravity = 0.5
var hasJumped = false
var velocityY = 0
var flappyjump = new Audio('./res/flappyjump.wav');
var flappyhit = new Audio('./res/flappyhit.wav');
var flappyfall = new Audio('./res/flappyfall.wav');

var playerState = {
  x: (canvasWidth / 10),
  y: (canvasHeight / 5),
  width: (50),
  height: (50),
  pressedKeys: {
    up: false,
    down: false
  }
}

var keyMap = {
  87: 'up',
  83: 'down'
}

function checkForCollision(){
  if(isCollision(playerState.x, playerState.y, playerState.width, playerState.height, pipeOneState.x, pipeOneState.y, pipeOneState.width, pipeOneState.height) ||
     isCollision(playerState.x, playerState.y, playerState.width, playerState.height, pipeTwoState.x, pipeTwoState.y, pipeTwoState.width, pipeTwoState.height) ||
     isCollision(playerState.x, playerState.y, playerState.width, playerState.height, pipeThreeState.x, pipeThreeState.y, pipeThreeState.width, pipeThreeState.height) ||
     isCollision(playerState.x, playerState.y, playerState.width, playerState.height, pipeFourState.x, pipeFourState.y, pipeFourState.width, pipeFourState.height) ||
     isCollision(playerState.x, playerState.y, playerState.width, playerState.height, floorState.x, floorState.y, floorState.width, floorState.height)){
    flappyhit.play()

    flappyhit.addEventListener('ended', function() {
      flappyfall.play()
      fall = true
    }, false);
    return true
  }
  else {
    false
  }
}

function keydown(event) {
  var key = keyMap[event.keyCode]
  playerState.pressedKeys[key] = true
}
function keyup(event) {
  var key = keyMap[event.keyCode]
  playerState.pressedKeys[key] = false

  if(playerState.pressedKeys[key] === false){
    hasJumped = false
  }
}

function updatePlayer(progress) {
  velocityY += gravity
  if(playerState.pressedKeys.up && !hasJumped) {
    velocityY = -10
    flappyjump.play();
    hasJumped = true
  }
  //if(playerState.pressedKeys.down) {
  //  playerState.y += progress
  //}
  if(checkForCollision()){
    gameOver = true
  }
  else{
    playerState.y += velocityY
  }
}

function drawPlayer() {
  ctx.fillStyle = 'yellow'
  ctx.fillRect(playerState.x, playerState.y, playerState.width, playerState.height)
}

window.addEventListener("keydown", keydown, false)
window.addEventListener("keyup", keyup, true)
