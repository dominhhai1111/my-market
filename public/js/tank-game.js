var canvas = document.getElementById("myCanvas");
canvas.width = 0.9 * window.innerWidth ;
canvas.height = 0.85 * window.innerHeight ;
var context = canvas.getContext("2d");

var imgTankU = document.getElementById("tankU");
var imgTankR = document.getElementById("tankR");
var imgTankD = document.getElementById("tankD");
var imgTankL = document.getElementById("tankL");

var effectBlast01 = document.getElementById("effectBlast01");
var effectBlast02 = document.getElementById("effectBlast02");
var effectBlast03 = document.getElementById("effectBlast03");
var effectBlast04 = document.getElementById("effectBlast04");
var effectBlast05 = document.getElementById("effectBlast05");

window.addEventListener("keydown", function (event) {
    if (event.code == "ArrowRight") {
        tank.moveRight();
    } else if (event.code == "ArrowLeft") {
        tank.moveLeft();
    } else if (event.code == "ArrowUp") {
        tank.moveUp();
    } else if (event.code == "ArrowDown") {
        tank.moveDown();
    } else if (event.code == "Space") {
        tank.fire();
    }
    console.log(event.code);
});

function Tank()
{
    this.tankImage = "";
    this.x = 50;
    this.y = 50;
    this.dx = 5;
    this.dy = 5;
    this.width = 100;
    this.height = 100;
    this.bullets = [];
    this.direction = +2;

    this.draw = function ()
    {
        context.drawImage(this.tankImage, this.x, this.y, this.width, this.height);
    };

    
    this.setTankImage = function (img)
    {
        this.tankImage = img;
    };
    
    this.moveUp = function ()
    {
        context.clearRect(this.x, this.y, this.width, this.height);
        this.y -= this.dy;
        this.direction = -1;
        tank.setTankImage(imgTankU);
        tank.draw();
    };

    this.moveRight = function ()
    {
        context.clearRect(this.x, this.y, this.width, this.height);
        this.x += this.dx;
        this.direction = +2;
        tank.setTankImage(imgTankR);
        tank.draw();
    };

    this.moveDown = function ()
    {
        context.clearRect(this.x, this.y, this.width, this.height);
        this.y += this.dy;
        this.direction = +1;
        tank.setTankImage(imgTankD);
        tank.draw();
    };

    this.moveLeft = function ()
    {
        context.clearRect(this.x, this.y, this.width, this.height);
        this.x -= this.dx;
        this.direction = -2;
        tank.setTankImage(imgTankL);
        tank.draw();
    };

    this.fire = function ()
    {
        switch (this.direction) {
            case -1: this.bullets.push(new Bullet(this.x + this.width/2, this.y, 5, this.direction)); break;
            case +1: this.bullets.push(new Bullet(this.x + this.width/2, this.y + this.height, 5, this.direction)); break;
            case -2: this.bullets.push(new Bullet(this.x, this.y + this.height/2, 5, this.direction)); break;
            case +2: this.bullets.push(new Bullet(this.x + this.width, this.y + this.height/2, 5, this.direction)); break;
        }
    };

    this.removeFire = function (i)
    {
        context.clearRect(this.bullets[i].x - this.bullets[i].r, this.bullets[i].y - this.bullets[i].r, 2 * this.bullets[i].r, 2 * this.bullets[i].r);
        var arr01 = this.bullets.slice(0, i);
        var arr02 = this.bullets.slice(i);
        arr02.shift();
        this.bullets = arr01.concat(arr02);
    };
}

function AutoTank(){
    this.tankImage = "";
    this.x = 50;
    this.y = 650;
    this.dx = 5;
    this.dy = 5;
    this.width = 100;
    this.height = 100;
    this.bullets = [];
    this.direction = +2;

    this.draw = function()
    {
        context.drawImage(this.tankImage, this.x, this.y, this.width, this.height);
    };

    this.setTankImage = function(img)
    {
        this.tankImage = img;
    };

    this.update = function()
    {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch (this.direction) {
            case -1: this.y -= this.dy; break;
            case +1: this.y += this.dy; break;
            case -2: this.x -= this.dx; break;
            case +2: this.x += this.dx; break;
        }
        this.draw();    
    };
}

function removeElementInArray(my_array, i)
{
    var arr01 = my_array.slice(0, i);
    var arr02 = my_array.slice(i);
    arr02.shift();
    my_array = arr01.concat(arr02);
    return my_array;
}

function Bullet(x, y, r, direction)
{
    this.x = x;
    this.y = y;
    this.dx = 10;
    this.dy = 10;
    this.r = r;
    this.direction = direction;

    this.draw = function ()
    {
        context.fillStyle = "yellow";
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    };

    this.update = function ()
    {
        context.clearRect(this.x - this.r, this.y - this.r, 2 * this.r, 2 * this.r);
        switch (this.direction) {
            case -1: this.y -= this.dy; break;
            case +1: this.y += this.dy; break;
            case -2: this.x -= this.dx; break;
            case +2: this.x += this.dx; break;
        }
        this.draw();
    };
}

function Block(x, y)
{
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;

    this.draw = function () {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.strokeStyle = "yellow";
        context.lineWidth = 2;
        context.strokeRect(this.x, this.y, this.width, this.height);
    };

    this.burn = function ()
    {
        context.clearRect(this.x, this, y, this.width, this.height);
    };
}

function removeBlock(i) {
    var block = blocks[i];
    context.clearRect(block.x-1, block.y-1 , block.width+2, block.height+2);
    blocks = removeElementInArray(blocks, i);
    console.log(blocks);
}

function BurnAnimation(x, y) {
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 150;
    this.images = [effectBlast01, effectBlast02, effectBlast03, effectBlast04, effectBlast05];
    this.currentImage = null;
    this.currentIndex = 0;
    this.repeat = 0;

    this.draw = function ()
    {
        context.drawImage(this.currentImage, this.x, this.y, this.width, this.height);
    };

    this.update = function () {
        if (this.currentIndex  <= 4 && this.repeat <= 15) {
            this.currentImage = this.images[this.currentIndex];
            this.currentIndex += 1;
            context.clearRect(this.x, this.y, this.width, this.height);
            this.draw();
        } else {
            context.clearRect(this.x, this.y, this.width, this.height);
        }
        if (this.currentIndex > 4) {
            this.currentIndex = 0;
            this.repeat ++;
        }
    }
}

function checkCollision(x1, x2, y1, y2, w1, w2, h1, h2) {
    if (x1 < (x2 + w2) && (x1 + w1) > x2 && y1 < (y2 + h2) && (y1 + h1) > y2) {
        return true;
    }
    return false;
}

function animate()
{
    requestAnimationFrame(animate);
    if (tank.bullets.length != 0) {
        for (var i = 0; i < tank.bullets.length; i++) {
            var isCollision = false;
            if (tank.bullets[i].x < 0 || tank.bullets[i].x > canvas.width ||
                tank.bullets[i].y < 0 || tank.bullets[i].y > canvas.height){
                tank.removeFire(i);
                break;
            }
            for (var j = 0; j < blocks.length; j++) {
                var block = blocks[j];
                if (checkCollision(tank.bullets[i].x, block.x, tank.bullets[i].y, block.y, tank.bullets[i].r, block.width, tank.bullets[i].r, block.height)) {
                    /*context.clearRect(block.x-1, block.y-1 , block.width+2, block.height+2);*/
                    console.log("fire");
                    burnAnimations.push(new BurnAnimation(block.x, block.y));
                    removeBlock(j);
                    tank.removeFire(i);
                    isCollision = true;
                    break;
                }
            }
            if (isCollision == false) {
                tank.bullets[i].update();
            }
        }
    }

    if (burnAnimations.length != 0) {
        for (var i = 0; i < burnAnimations.length; i++) {
            burnAnimations[i].update();
            if(burnAnimations[i].repeat > 15){
                context.clearRect(burnAnimations[i].x, burnAnimations[i].y, burnAnimations[i].width, burnAnimations[i].height);
                burnAnimations = removeElementInArray(burnAnimations, i);
            }
        }
    }

    autoTank.update();
}

var tank = new Tank();
tank.setTankImage(imgTankR);
tank.draw();

var autoTank = new AutoTank();
autoTank.setTankImage(imgTankR);
autoTank.draw();

var blocks = [];
var block1 = new Block(750, 50);
var block2 = new Block(750, 250);
blocks.push(block1);
blocks.push(block2);
console.log(blocks);
for (var i = 0; i < blocks.length; i++) {
    blocks[i].draw();
}

var burnAnimations = [];
animate();
