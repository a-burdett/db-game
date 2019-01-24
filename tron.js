

var canvas = document.getElementById('canvas')

var ctx = canvas.getContext('2d');

var coordinates = [];

var playerOne = new Player(5,5,50,50)
var playerTwo = new Player(5,5,150,150)


window.addEventListener("keydown", keyListener)
setInterval(function() {
  playerOne.update()
  playerTwo.update()
  // playerAI.update()
  playerOne.draw(ctx)
  playerTwo.draw(ctx)
  // playerAI.draw(ctx)
  checkCollision()
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

function checkCollision() {

if(playerOne.coordinates.length < 3) return 


  for (var i = 0; i < playerOne.coordinates.length; i++) {
    var x = playerOne.coordinates[i][0];
    var y = playerTwo.coordinates[i][0];
    } 
    if (
            playerOne.coordinates === playerTwo.coordinates
            // playerOne.coordinates[playerOne.coordinates.length] === playerTwo.coordinates[i] &&
            // playerOne.coordinates[playerOne.coordinates.length] === playerOne.coordinates[i]
    ) {
      console.log('collision')
    }
    console.log('no colission')
  }