




size(500,500);

var x = 50;
var y = 50;

var player = {x:20,y:20,w:50,h:50};
var speed = 3;
var right = 0;
var left = 0;
var down = 0;
var up = 0;
var walls = [{x: 0, y: 0, w: 20, h: 500},
             {x: 0, y: 0, w: 500, h: 20},
             {x: 480, y: 0, w: 20, h: 500},
             {x: 200, y: 100, w: 200, h: 20},
             {x: 480, y: 0, w: 20, h: 500},
             {x: 200, y: 300, w: 100, h: 20},
             {x: 0, y: 480, w: 500, h: 20}];
            
var star = [{x: 225, y: 225, w: 50, h:50}]

var draw = function() {
  noStroke();
  background(255,174,0);
  fill(0,0,255);
  
  for (var i = 0; i < 7; i = i + 1) {
    rect(walls[i].x, 
           walls[i].y,
           walls[i].w, 
           walls[i].h);
           
  }
  fill(255, 0, 0);
  rect(player.x, player.y, player.w, player.h);
  move(player);
  fill(246,255,0)
  for (var i = 0; i < 1; i = i + 1) {
    rect(star[i].x, 
           star[i].y,
           star[i].w, 
           star[i].h); }
  for (var i = 0; i < walls.length; i = i + 1) {
    if (collision(player, walls[i])) {
      fill(0,255,0);
      rect(225, 225, 50, 50);
    }
  }
  if (speed < 1) {
    speed = 1;
  }
  if (speed > 10) {
    speed = 10;
  }
  //textSize(size of text);
  //text(what you want to say, x position , y position)
  fill(0)
  textSize(30);
  text("Speed: " + speed, 350, 50);
};

var move = function(obj) {
    if (right == 1) {
    obj.x = obj.x + speed;
    for (var i = 0; i < walls.length; i++) {
      if (collision(obj,walls[i])) {
        while(collision(obj, walls[i]))
        obj.x = obj.x -1;
      }
    }
  }
  if (left == 1) {
    obj.x = obj.x - speed;
    for (var i = 0; i < walls.length; i++) {
      if (collision(obj,walls[i])) {
        while(collision(obj, walls[i]))
        obj.x = obj.x + 1;
      }
    }
  }
  if (down == 1) {
    obj.y = obj.y + speed;
    for (var i = 0; i < walls.length; i++) {
      if (collision(obj,walls[i])) {
        while(collision(obj, walls[i]))
        obj.y = obj.y -1;
      }
    }
  }
  if (up == 1) {
    obj.y = obj.y - speed;
    for (var i = 0; i < walls.length; i++) {
      if (collision(obj,walls[i])) {
        while(collision(obj, walls[i]))
        {
          obj.y = obj.y + 1;
        }
      }
    }
  }
}

var keyPressed = function() {
  if (keyCode == RIGHT) {
    right = 1
  }
  if (keyCode == DOWN) {
    down = 1;
  }
  if (keyCode == UP) {
    up = 1;
  }
  if (keyCode == LEFT) {
    left = 1;
  }
  if (keyCode == 83) {
    speed = speed - 1;
  }
  if (keyCode == 70) {
    speed = speed + 1;
  }
};

var keyReleased = function() {
  if (keyCode == DOWN) {
    down = 0
  }
  if (keyCode == RIGHT) {
    right = 0
  }
  if (keyCode == UP) {
    up = 0;
  }
  if (keyCode == LEFT) {
    left = 0;
  }
}
var collision = function(obj1, obj2) {

  if ( obj1.x + obj1.w > obj2.x &&
       obj1.x < obj2.x + obj2.w &&
       obj2.y + obj2.h > obj1.y &&
       obj2.y < obj1.y + obj1.h ) {
           return true;
  } else {
      return false;
  }

}
