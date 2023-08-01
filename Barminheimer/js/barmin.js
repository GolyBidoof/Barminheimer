let canvas;
let ctx;
let barminImage;
let shouldDrawBarminImage = false;

const initCanvas = () => {
    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    barminImage = new Image();
    barminImage.onload = function () {
        shouldDrawBarminImage = true;
        ctx.drawImage(barminImage, (canvas.width - 720) / 2, 0);
    };
    barminImage.src = '../images/barminheimer.png';
    drawCanvas();
}

const updateCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCanvas();
}

const drawCanvas = () => {
    ctx.fillStyle = '#30AA67';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (shouldDrawBarminImage) {
        ctx.drawImage(barminImage, (window.innerWidth - 720) / 2, 0);
    }

}

document.addEventListener('DOMContentLoaded', initCanvas);
window.addEventListener('resize', updateCanvasSize);

setInterval(renderClock, 1000);
