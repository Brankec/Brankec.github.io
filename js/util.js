function randomNumber(from, to) {
  return Math.floor(Math.random() * to) + from;
}

function isCollision(xPlayer, yPlayer, widthPlayer, heightPlayer, xPipe, yPipe, widthPipe, heightPipe){

  var playerLeft = xPlayer
  var playerRight = xPlayer + widthPlayer
  var playerTop = yPlayer
  var playerBottom = yPlayer + heightPlayer

  var BlockLeft = xPipe
  var BlockRight = xPipe + widthPipe
  var BlockTop = yPipe
  var BlockBottom = yPipe + heightPipe

  if (playerRight > BlockLeft &&
    playerLeft < BlockRight &&
    playerBottom > BlockTop &&
    playerTop < BlockBottom)
  {
    if (playerRight >= BlockLeft && playerLeft <= BlockLeft)  //Left side of the Block
    {
      return true
    }

    if (playerLeft <= BlockRight && playerRight >= BlockRight)   //Right side of the block
    {
      return true
    }
  }
  else{
    return false
  }

  if (playerRight > BlockLeft &&
    playerLeft < BlockRight &&
    playerBottom > BlockTop &&
    playerTop < BlockBottom)
  {
    if (playerTop < BlockBottom && playerBottom > BlockBottom)    //Bottom side of the block
    {
      return true
    }

    if (playerBottom > BlockTop && playerTop < BlockTop)    //Top side of the block
    {
      return true
    }
  }
  else{
    return false
  }
}

