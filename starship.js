var brush = document.getElementById("c")
var context = brush.getContext("2d");

document.addEventListener("keydown", onkeydown);

function drawBackground(){
    context.fillStyle = "#EEEEEE";
    context.fillRect(0, 0, 400, 400);
}

var x = 10;
var y = 10;
function drawSquare(){
    context.fillStyle = "#FF0000";
    context.fillRect(x, y, 20, 20);
}
    
function onkeydown(e){
    if (e.key === "ArrowLeft") {
        if (x > 0){
            x -= 5;
        }
    }
    //top
    else if (e.key === "ArrowUp") {
        if (y > 0){
            y -= 5;
        }
    }
    //right
    else if (e.key === "ArrowRight") {
        if (x < 380){
            x += 5;
        }
    }
    //bottom
    else if (e.key === "ArrowDown") {
        if (y < 380){
            y += 5;
        }
    }
    drawBackground();
    drawSquare();
}
drawBackground();
drawSquare();
