function Panel(x, y) {
  this.x = x;
  this.y = y;
  this.panelWidth = 100;
  this.panelHeight = 20;
  this.panelSpeed;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.panelWidth, this.panelHeight);
  }

  this.dir = function(speed) {
    this.panelSpeed = speed;
    this.x += speed;
    this.x = constrain(this.x, this.panelWidth / 2, width - this.panelWidth / 2);
  }
}