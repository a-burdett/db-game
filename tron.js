
var canvas = document.getElementById('canvas')

var ctx = canvas.getContext('2d');

var playerOne = new Player(5,5,50,50)
// var playerOne = new Player(5,5,50,50)
// var playerOne = new Player(5,5,50,50)
// var playerOne = new Player(5,5,50,50)


window.addEventListener("keydown", keyListener)
setInterval(function() {
  playerOne.update()
  playerOne.draw(ctx)

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
}

if position < 800

// direction 
// if direction x is true then we will add x 