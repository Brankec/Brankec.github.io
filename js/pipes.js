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

pipeOneState.height = randomNumber(50, 500)
pipeTwoState.y = pipeOneState.height + randomNumber(120, 150)
pipeThreeState.height = randomNumber(50, 500)
pipeFourState.y = pipeThreeState.height + randomNumber(120, 150)

function updatePipes(progress) {
  if(pipeOneState.x <= 0 || pipeTwoState.x <= 0){
    pipeOneState.x = 1920
    pipeTwoState.x = 1920

    pipeOneState.height = randomNumber(50, 500)
    pipeTwoState.y = pipeOneState.height + randomNumber(120, 150)
  }
  if(pipeThreeState.x <= 0 || pipeFourState.x <= 0){
    pipeThreeState.x = 1920
    pipeFourState.x = 1920

    pipeThreeState.height = randomNumber(50, 500)
    pipeFourState.y = pipeThreeState.height + randomNumber(120, 150)
  }

  pipeOneState.x -= progress + speed
  pipeTwoState.x -= progress + speed
  pipeThreeState.x -= progress + speed
  pipeFourState.x -= progress + speed
}

function drawPipes() {
  ctx.fillStyle = 'green'
  ctx.fillRect(pipeOneState.x, pipeOneState.y, pipeOneState.width, pipeOneState.height)
  ctx.fillRect(pipeTwoState.x, pipeTwoState.y , pipeTwoState.width, pipeTwoState.height)
  ctx.fillRect(pipeThreeState.x, pipeThreeState.y, pipeThreeState.width, pipeThreeState.height)
  ctx.fillRect(pipeFourState.x, pipeFourState.y, pipeFourState.width, pipeFourState.height)
}
