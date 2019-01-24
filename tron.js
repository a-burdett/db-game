

var canvas = document.getElementById('canvas')

var ctx = canvas.getContext('2d');

var coordinates = [];
var frameNumber = 0;
var playerOne = new Player(5,5,50,50)
var playerTwo = new Player(5,5,150,150)
// var playerAI = new Snake(5,5,300,300)

window.addEventListener("keydown", keyListener)
setInterval(function() {
  frameNumber++
  playerOne.update()
  playerTwo.update()

  if(frameNumber % 10 == 0) {
    var randomNumber = Math.floor(4 * Math.random())
    var direction = "down"

    var potentialX = 0
    var potentialY = 0
    switch(randomNumber) {
      case 0: 
        direction = "up"
        potentialY -= 2
      break;
      case 1: 
        direction = "down"
        potentialY += 2
      break;
      case 2: 
        direction = "left"
        potentialX -= 2
      break;
      case 3: 
        direction = "right"
        potentialX += 2
      break;
    }
    var collidedPositions = playerTwo.coordinates.filter(function(xAndY) {
      var potentialPositionX = playerTwo.x + potentialX
      var potentialPositionY = playerTwo.y + potentialY
      console.log(potentialPositionX, xAndY[0], potentialPositionX == xAndY[0], potentialPositionY, xAndY[1], potentialPositionY == xAndY[1])
      return xAndY[0] == potentialPositionX && xAndY[1] == potentialPositionY
    })
    console.log(collidedPositions)
    //console.log(playerTwo.x, playerTwo.y)
    playerTwo.direction = direction
  }

  // playerAI.update()
  playerOne.draw(ctx)
  playerTwo.draw(ctx)
  // playerAI.draw(ctx)
  // checkCollision()
  console.log('helooo')
},
1000/20)

function keyListener(e) {
  e.preventDefault() // stop default behaviour (scrolling)
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 38: // up
      playerOne.direction = 'up'
      break
      case 40: // down
      playerOne.direction = 'down'
      break
      case 37: // left
      playerOne.direction = 'left'
      break
      case 39: // right
      playerOne.direction = 'right'
      break
  }
  switch (e.keyCode) {
      case 87: // up
      playerTwo.direction = 'W'
      break
      case 83: // down
      playerTwo.direction = 'S'
      break
      case 65: // left
      playerTwo.direction = 'A'
      break
      case 68: // right
      playerTwo.direction = 'D'
      break
  }
 }

function checkCollision(Player,coordinates) {
  for (var i = 0; coordinates.length; i++) {
    if (playerOne.x == coordinates[0] && playerOne.y == coordinates[1]){
      console.log('collision')
    }
    else if (playerTwo.x == coordinates[0] && playerTwo.y == coordinates[1]){
      console.log('collision')
    }
    else return // continue along the path


  for (var i = 0; i < playerOne.coordinates.length; i++) {
    var x = playerOne.coordinates[i][0];
    var y = playerTwo.coordinates[i][0];
    } 
    if (
            // playerOne.coordinates[playerOne.coordinates.length] === playerTwo.coordinates[i] &&
            // playerOne.coordinates[playerOne.coordinates.length] === playerOne.coordinates[i]
    ) {
    }
    console.log('no colission')
  }

  // function checkCollision(x,y) {
  //   return playerOne.coordinates > playerTwo
