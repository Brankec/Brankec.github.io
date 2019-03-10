var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var canvasWidth
var canvasHeight
var gameOver = false

var resize = function() {
  canvasWidth = window.screen.availWidth
  canvasHeight = window.screen.availWidth / 3
  canvas.width = canvasWidth
  canvas.height = canvasHeight
}

window.onresize = resize
resize()

function update(progress) {
  if(!gameOver) {
    updatePipes(progress)
    updateFloor()
    updatePlayer(progress)
  }
  else{
    updateGameOver()
  }
}

function draw() {
  drawPipes()
  drawFloor()
  drawPlayer()
}

function clear() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
}

function loop(timestamp) {
  var progress = (timestamp - lastRender)

  update(progress)
  clear()
  draw()

  lastRender = timestamp
  window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)
