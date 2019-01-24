

// class Snake{
//   constructor(width,height,initialX, initialY, speed) {
//     this.x = x
//     this.y = y
//     this.width = width
//     this.height = height
//     this.speed = 1
//     this.direction = 'right'
//     this.alive = true
//     this.position = coordinates
//     this.score = score
//     }
//   draw(ctx) {
//     ctx.save();
//     ctx.translate(this.x,this.y)
//     ctx.rotate(this.angle);
//     ctx.fillStyle = "#000080";
//     ctx.fillRect(this.x, this.y, 5, 5);
//     //ctx.drawImage(this.img,-this.width/2, 0, this.width,200)
//     //ctx.drawImage(this.img,-this.width/2,-this.height/2,this.width,this.height)
//     ctx.restore()
//    }
  
//   }  
//   function snakeAI(){
//   var this.Snake = new Snake(5,5,300,300,1)
//   var this.Snake.x = $(window).x() - 50; // two dim array
//   var this.Snake.y = $(window).y() - 50; // two dim array

//   var directionX = Math.floor(Math.random() * x);
//   var directionY = Math.floor(Math.random() * y);
//   // return [movementNS,movementEW]; 
// }


// }

  // human players

class Player {
  constructor(width,height,initialX, initialY, speed) {
    this.width = width;
    this.height = height;
    this.x = initialX; // centre of the movement 
    this.y = initialY; // centre of the movement
    this.speed = 1;
    this.direction = 'right';
    this.alive = true;
    this.coordinates = [];
    this.oldCoordinates = [];
    this.score = 0;
    // this.direction
    //this.img = new Image()
    //this.img.src = " // db train image"
  }
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x,this.y)
      ctx.rotate(this.angle);
      ctx.fillStyle="#0095DD"
      ctx.fillRect(this.x, this.y, 3, 3);
      //ctx.drawImage(this.img,-this.width/2, 0, this.width,200)
      //ctx.drawImage(this.img,-this.width/2,-this.height/2,this.width,this.height)
      ctx.restore()
  }

update() {
    if (this.direction === 'right') {
      this.x += 2
      this.coordinates.push([this.x, this.y]);
  }
    if (this.direction === 'left') {
      this.x -= 2
      this.coordinates.push([this.x, this.y]);
  }
    if (this.direction === 'down') {
      this.y += 2
      this.coordinates.push([this.x, this.y]);
  }
   if (this.direction === 'up') {
      this.y -= 2
      this.coordinates.push([this.x, this.y]);
  }
  // player two right 
    if (this.direction === 'D') {
      this.x += 2
      this.coordinates.push([this.x, this.y]);
    }
    if (this.direction === 'A') {
      this.x -= 2
      this.coordinates.push([this.x, this.y]);
    }
    if (this.direction === 'S') {
      this.y += 2
      this.coordinates.push([this.x, this.y]);
    }
    if (this.direction === 'W') {
      this.y -= 2
      this.coordinates.push([this.x, this.y]);
    } 
    // console.log("CORDINATES", this.coordinates)
  }
}
// AI player execution
// how would i print number of moves to the screen
// how would i print the score


  // loop through coordinates and if it hasnt gone over the path, then you execute  snakeAI()
     
  // set direction

  // thing.draw(ctx)
  // for loop 


  // function tronAI(twoDimArray) {
  //   var height = twoDimArray.length
  //   var width = twoDimArray[0].length
  //   var yK, xK;
  //   for (var y = 0; y < height; y++) {
  //   for (var x = 0; x < width; x++) {
  //   if (twoDimArray[y][x] === 'K') {
  //   xK = x
  //   yK = y
  //   }


class Coins {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.width = canvas.width;
      this.height = canvas.height;
      this.obstacleWidth = Math.floor(Math.random() *  120) + 70;
      this.positionX = Math.floor(Math.random() * (this.width -130)) + 50;
      this.positionY = 0;
    }
    update() {
      this.positionY += 6;
    }
    drawCoins() {
      this.ctx.fillStyle = "purple";
      this.ctx.fillRect(this.positionX, this.positionY, this.obstacleWidth, 35);
    }
  }  