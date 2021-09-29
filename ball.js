function Ball() {
  this.ballSize = 20;
  this.x = random(width - this.ballSize);
  this.y = height / 2;
  this.speed = 2;
  this.ySpeed = this.speed;
  this.xSpeed = this.speed;

  this.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  this.show = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.ballSize);
  }

  this.bounce = function() {
    if(this.x >= width - this.ballSize / 2) {
      this.xSpeed = this.speed * -1;

    }else if(this.x < this.ballSize / 2) {
      this.xSpeed = this.speed;

    }
  }

  this.hit = function() {
    if(this.y === panelBottom.y - this.ballSize) {
      console.log(this.y)
      if(this.x >= panelBottom.x - panelBottom.panelWidth / 2 && this.x <= panelBottom.x + panelBottom.panelWidth / 2) {
        this.ySpeed = this.speed * -1;
        if(this.speed < 4) {
            this.speed++;
        }
        
      }
    } else if(this.y === panelTop.y + panelTop.panelHeight) {
        if(this.x >= panelTop.x - panelTop.panelWidth / 2 && this.x <= panelTop.x + panelTop.panelWidth / 2) {
          this.ySpeed = this.speed;
          if(this.speed < 4) {
            this.speed++;
          }
      }
    }
  }

  this.death = function() {
    if(this.y >= height - this.ballSize / 2) {
      this.x = random(width - this.ballSize / 2);
      this.y = 200;
      this.xSpeed = this.speed;
      this.ySpeed = this.speed;
      scoreTop++;

    } else if(this.y <= this.ballSize / 2) {
      this.x = random(width - this.ballSize / 2);
      this.y = 200;
      this.xSpeed = this.speed;
      this.ySpeed = this.speed;
      scoreBottom++;
    }
  }
}