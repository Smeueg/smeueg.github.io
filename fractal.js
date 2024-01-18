let canvas = document.getElementById("canvas");
let canvasContext = canvas.getContext("2d");
canvasContext.strokeStyle = "#fe8019";
let max_angle = Math.PI;
let angle = Math.PI / 6;

function update(event) {
		canvasContext.clearRect(0, 0, canvas.width, canvas.height);
		canvasContext.beginPath();
		angle = event.clientX / canvas.width * max_angle;
		branch(canvas.width / 2, canvas.height, canvas.height / 5, 0, 8);
		canvasContext.closePath();
}

function branch(x, y, len, deg, step) {
		if (step === 0) { return; }
		let x_end = x - Math.cos(deg + Math.PI / 2) * len;
		let y_end = y - Math.sin(deg + Math.PI / 2) * len;
		canvasContext.moveTo(x, y);
		canvasContext.lineTo(x_end, y_end);
		branch(x_end, y_end, len * 0.67, deg - angle, step - 1)
		branch(x_end, y_end, len * 0.67, deg + angle, step - 1)
		canvasContext.stroke();
}
