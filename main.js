var mouseEvent = "empty";
var currentPositionOfMouseX, currentPositionOfMouseY;
var canvas, ctx, color, widthOfLine, radius;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
widthOfLine = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";

    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;

    console.log("Posição atual das coordenadas x e y= ");
    console.log("x  = " + currentPositionOfMouseX + " y = " + currentPositionOfMouseY);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    canvas.addEventListener("mousemove", my_mousemove);
    canvas.addEventListener("mouseup", my_mouseup);
    canvas.addEventListener("mouseleave", my_mouseleave);
}

function my_mousemove(e) {
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Posição atual das coordenadas x e y= ");
        console.log("x  = " + currentPositionOfMouseX + " y = " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function my_mouseup() {
    mouseEvent = "mouseUp";
    canvas.removeEventListener("mousemove", my_mousemove);
    canvas.removeEventListener("mouseup", my_mouseup);
    canvas.removeEventListener("mouseleave", my_mouseleave);
}

function my_mouseleave() {
    mouseEvent = "mouseLeave";
    canvas.removeEventListener("mousemove", my_mousemove);
    canvas.removeEventListener("mouseup", my_mouseup);
    canvas.removeEventListener("mouseleave", my_mouseleave);
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
