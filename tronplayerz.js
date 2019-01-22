

class Player {
  constructor(width,height,initialX, initialY, speed) {
    this.width = width
    this.height = height
    this.x = initialX // centre of the movement 
    this.y = initialY // centre of the movement
    this.speed = 1
    this.direction = 'right'
    // this.direction
    //this.img = new Image()
    //this.img.src = " // db train image"
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x,this.y)
    ctx.rotate(this.angle);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, 5, 5);
    //ctx.drawImage(this.img,-this.width/2, 0, this.width,200)
    //ctx.drawImage(this.img,-this.width/2,-this.height/2,this.width,this.height)
    ctx.restore()
  }


update() {
  
  if (this.direction === 'right') {
    this.x += 2

  }
  if (this.direction === 'left') {
    this.x -= 2

  }
  if (this.direction === 'down') {
    this.y += 2

  }
  if (this.direction === 'up') {
    this.y -= 2

  }

  // if (direction === "down")
  // this.y += 5
  // this.speed += 1

  // if (direction === "left")
  // this.x -= 5
  // this.speed += 1

  // if (direction === "right")
  // this.x += 5
  // this.speed += 1
}

// if (position < 0) {
//   speed = speed++
// }
// set direction and save 
//update
// set interval 
// if right increase x position by 2 


}

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
  //   }
    
