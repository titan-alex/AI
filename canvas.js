// class Canvas{
//     constructor(x, y, width, height){
//         const canvas = document.querySelector('canvas');

//         this.x =x;
//         this.y = y;
//         canvas.width = 300;
//         canvas.height = 700;
//     }
//     draw(ctx){
//         ctx.beginPath();
//         ctx.moveTo(this.left, this.top);
//         ctx.lineTo(this.left, this.bottom);
//         ctx.moveTo(this.x + this.angle * Math.cos(this.theta), 
//         this.y + this.angle * Math.sin(this.theta));
//         ctx.lineTo(this.left, this.bottom);
//         ctx.stroke();
//     }   
// }