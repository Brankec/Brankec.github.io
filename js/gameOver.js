var fall = false

function updateGameOver(){
  if(fall) {
    velocityY += gravity
    playerState.y += velocityY
  }
}
