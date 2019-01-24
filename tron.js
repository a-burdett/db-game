
var canvas = document.getElementById('canvas')

var ctx = canvas.getContext('2d');

window.addEventListener("keydown", keyListener)
setInterval(function() {
  playerOne.update()
  playerTwo.update()
  playerAI.update()
  playerOne.draw(ctx)
  playerTwo.draw(ctx)
  playerAI.draw(ctx)
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
      PlayerTwo.direction = 'D'
      break
  }
}

checkCollision(){
  for (var i = 0; i < coordinates.length; i++) {
    var x = coordinates[i];
    var y = coordinates[i+1];
    } 
  if (Player.position = coordinates) {
          this.ctx.fillStyle = "red";
          this.ctx.font = "30px serif";
          this.ctx.fillText('GAME OVER'); 
          this.ctx.fillText('SCORE: '+this.score); 
  } return true
}