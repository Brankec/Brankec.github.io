var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

window.onresize = resize
resize()

var floorState = {
  x: (0),
  y: (canvas.height - 20),
  width: (canvas.width),
  height: (20)
}

function updateFloor(progress) {

}

function drawFloor() {
  ctx.fillStyle = 'red'
  ctx.fillRect(floorState.x, floorState.y, floorState.width, floorState.height)
}
