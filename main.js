const canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d");
const line = new Road(canvas.width / 2, canvas.height /2, canvas.width );
const car = new Car(660, 400, 30, 50);

animate();

function animate() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0,0, 800, 800)
    ctx.save();
    car.move();
    line.draw(ctx);

    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}
