var randomX = Math.floor(math.random() * 10 ) //outputs an integer between 0-9, for 1-10 do +1 
var randomY = Math.floor(math.random() * 10 ) //outputs an integer between 0-9, for 1-10 do +1
[[x,y],[x,y]]

function checkCD(x, y, arr) {
  if (x >= 0 && x <= 9 && y >= 0 && y <= 9) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i][0] === x && arr[i][1] === y) {
        return true //this means the coordinates are occupied, hence use in the check checkCD(x,y,arr) === false!
      }
    }  
    //if the script got to this point it means the CD are both viable and don't exist in the array
    return false
  }
  else {return true }   
}



