class Road {
  constructor(x, y, width, laneCount = 3) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.laneCount = laneCount;
    this.angle = 360;
 

    this.left = x - width / 2;
    this.right = x + width / 2;

    const infinity = 700;
    this.top = -infinity;
    this.bottom = infinity;

    const topLeft = { x: this.left, y: this.top };
    const topRight = { x: this.right, y: this.top };
    const bottomLeft = { x: this.left, y: this.bottom };
    const bottomRight = { x: this.right, y: this.bottom };

    this.borders = [
      [topLeft, bottomLeft],
      [topRight, bottomRight],
    ];
  }

  draw(ctx) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.save();
    ctx.scale(1, 1);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.angle, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.angle / 4, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.angle / 1.2, 0, Math.PI * 2, false);
    ctx.setLineDash([20, 20]);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.angle / 1.56, 0, Math.PI * 2, false);
    ctx.setLineDash([20, 20]);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.angle / 2.2, 0, Math.PI * 2, false);
    ctx.setLineDash([20, 20]);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.angle / 4, 0, Math.PI * 2, false);
    ctx.setLineDash([20, 20]);
    ctx.stroke();
    ctx.closePath();

  ctx.restore();
    
  }
}