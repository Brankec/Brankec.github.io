var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var speed = 1

window.onresize = resize
resize()

var pipeOneState = {
  x: (canvas.width),
  y: (0),
  width: (50),
  height: (100)
}

var pipeTwoState = {
  x: (canvas.width),
  y: (300),
  width: (50),
  height: (canvasHeight)
}

var pipeThreeState = {
  x: (canvas.width + 800),
  y: (0),
  width: (50),
  height: (100)
}

var pipeFourState = {
  x: (canvas.width + 800),
  y: (300),
  width: (50),
  height: (canvasHeight)
}

function updatePipes(progress) {
  if(pipeOneState.x <= 0 || pipeTwoState.x <= 0){
    pipeOneState.x = 1920
    pipeTwoState.x = 1920

    pipeOneState.height = randomNumber(50, 500)
    pipeTwoState.y = pipeOneState.height + randomNumber(100, 120)
  }
  if(pipeThreeState.x <= 0 || pipeFourState.x <= 0){
    pipeThreeState.x = 1920
    pipeFourState.x = 1920

    pipeThreeState.height = randomNumber(50, 500)
    pipeFourState.y = pipeThreeState.height + randomNumber(100, 120)
  }

  pipeOneState.x -= progress + speed
  pipeTwoState.x -= progress + speed
  pipeThreeState.x -= progress + speed
  pipeFourState.x -= progress + speed
}

function drawPipes() {
  ctx.fillStyle = 'green'
  ctx.fillRect(pipeOneState.x - 10, pipeOneState.y - 10, pipeOneState.width, pipeOneState.height)
  ctx.fillRect(pipeTwoState.x - 10, pipeTwoState.y - 10, pipeTwoState.width, pipeTwoState.height)
  ctx.fillRect(pipeThreeState.x - 10, pipeThreeState.y - 10, pipeThreeState.width, pipeThreeState.height)
  ctx.fillRect(pipeFourState.x - 10, pipeFourState.y - 10, pipeFourState.width, pipeFourState.height)
}
