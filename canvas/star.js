/**
 * Created by sun-gah on 2017/5/13.
 */
var starObj = function() {
    this.x;
    this.y;

    this.ySpd;

    this.picNo;

    this.timer;

    this.beta;
}

starObj.prototype.init = function() {
    this.x = Math.random() * girlWidth + padLeft;
    this.y = Math.random() * girlHeight + padTop;

    this.ySpd = Math.random() * 0.6 - 0.3; //[0,2) [-1, 1)
    this.xSpd = Math.random() * 0.2 - 0.1; //[0,2) [-1, 1)

    this.picNo = Math.floor(Math.random() * 7);
    this.timer = 0;

    this.beta = Math.random() * Math.PI * 0.5;
}

starObj.prototype.update = function() {
    this.xSpd = Math.random() * 0.2 - 0.1; //[0,2) [-1, 1)
    this.x += this.xSpd;
    this.y += this.ySpd;

    if (this.x > (padLeft + girlWidth) || this.x < (padLeft - 10))
        this.init();
    else if (this.y > (padTop + girlHeight) || this.y < (padTop - 10))
        this.init();

    this.timer += deltaTime;
    if (this.timer > 30) {
        this.picNo += 1;
        this.picNo %= 7;
        this.timer = 0;
    }
}

starObj.prototype.draw = function() {
    this.beta += deltaTime * 0.005;
    ctx.save();
    ctx.globalAlpha = Math.sin(this.beta) * alive;
    console.log(alive);
    console.log(ctx.globalAlpha);
    ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
    ctx.restore();
}



function drawStars() {
    for (var i = 0; i < num; i++) {
        stars[i].update();
        stars[i].draw();
    }
}

function aliveUpdate() {
    if (switchy) {
        alive += 0.03;
        if (alive > 0.7) {
            alive = 0.7;
        }
    } else {
        alive -= 0.03;
        if (alive < 0) {
            alive = 0;
        }
    }
}