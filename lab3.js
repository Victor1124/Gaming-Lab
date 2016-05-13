function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var x = 0;
    var y = 0;
    
   var ctx = canvas.getContext('2d');
    //call the drawChar(x,y) function here

  }
}

    
    
    
    function drawChar(x,y) {
    
    var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    
        
    //add a +x to each x coordinate
    //add a +y to each y coordinate
    ctx.fillStyle="purple";
    ctx.fillRect(25,25,100,100);
    
    ctx.fillStyle="red";
    ctx.fillRect(30+x, 30+y, 10, 10);
    ctx.fillRect(60+x, 30+y, 10, 10);
    
    ctx.fillStyle="blue";
    ctx.beginPath();
    ctx.moveTo(40+x, 40+y);
    ctx.lineTo(60+x, 40+y);
    ctx.lineTo(50+x, 60+y);
    ctx.fill();
  }
    }
