let canvas = document.getElementById("canvas");
let canvasContext = canvas.getContext("2d");

let max_angle = Math.PI;
let angle = Math.PI / 6;

canvas.height = Math.min(window.screen.height, window.screen.width) * 2 / 3;
canvas.width = canvas.height;
canvasContext.strokeStyle = "#fe8019";

function drawFirstBranch() {
		canvasContext.clearRect(0, 0, canvas.width, canvas.height);
		canvasContext.beginPath();
		drawBranch(canvas.width / 2, canvas.height, canvas.height / 3, 0, 12);
		canvasContext.stroke()
		canvasContext.closePath();
}

function drawBranch(x, y, len, deg, step) {
		if (step === 0) { return; }
		let x_end = x - Math.cos(deg + Math.PI / 2) * len;
		let y_end = y - Math.sin(deg + Math.PI / 2) * len;
		canvasContext.moveTo(x, y);
		canvasContext.lineTo(x_end, y_end);
		drawBranch(x_end, y_end, len * 0.67, deg - angle, step - 1)
		drawBranch(x_end, y_end, len * 0.67, deg + angle, step - 1)
}

document.getElementById("degSlider").oninput = function() {
		angle = this.value / 100 * Math.PI;
		drawFirstBranch();
}

drawFirstBranch()
