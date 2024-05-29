var canvas = document.getElementById("canvas");
var toolbar = document.getElementById("toolbar");
var context = canvas.getContext("2d");

var canvasOffsetX = canvas.offsetLeft;
var canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

var isPainting = false;
var lineWidth = 5;
var startX;
var startY;

function toolbarClick(e){
    if(e.target.id == "clear"){
        context.clearRect(0,0,canvas.width,canvas.height);
    }
}

function change(e){
    if(e.target.id == "stroke"){
        context.strokeStyle = e.target.value;
    }
    if(e.target.id == "linewidth"){
        lineWidth = e.target.value;
    }
}

function draw(e){
    if(!isPainting){
        return;
    }

    context.lineWidth = lineWidth;
    
    context.lineCap = "round";
    context.lineTo(e.clientX-canvasOffsetX,e.clientY);
    context.stroke();
    
}

function startDrawing(){
    context.beginPath();
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
}

function stopDrawing(){
    isPainting = false;
    context.stroke();
    context.biginPath();
}

canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mousedown",startDrawing);
canvas.addEventListener("mouseup",stopDrawing);

toolbar.addEventListener("click",toolbarClick);
toolbar.addEventListener("change",change);
