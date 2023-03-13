import * as gfx from "../../Framework/gfx.js";
import * as obj from "../../Framework/obj.js";
import * as inp from "../../Framework/inp.js";
import * as col from "../../Framework/col.js";

const cv = gfx.createCanvas(600,400);

const cursor  = new obj.circle(10,10,5);
const target  = new obj.circle(10,10,50);

let lastRender = 0;

let checkCol = true;
let click = true;

function Update(progress){
    checkCol = col.circleCol(cursor, target);
    if(click && checkCol){
        target.x = randomTargetPos(cv.canvas, target.r).x;
        target.y = randomTargetPos(cv.canvas, target.r).y;
    }
    if(checkCol) console.log("col");

}

function Draw(){
    gfx.clearScreen(cv.ctx, cv.canvas);

    drawTarget();
    
    drawCursor();
}

function Event(){
    cv.canvas.addEventListener("mousedown", (e)=>{
        inp.getMousePos(cv.canvas,e);
        click = true;
    })

    cv.canvas.addEventListener("mousemove", (e)=>{
       cursor.x = inp.getMousePos(cv.canvas,e).x;
       cursor.y = inp.getMousePos(cv.canvas,e).y;
    })
}
Event();


function Game(timestamp){
    let progress = (timestamp - lastRender);
    Update(progress);
    Draw();

    lastRender = progress;
    requestAnimationFrame(Game);    
}

requestAnimationFrame(Game);

function drawCursor(){
    gfx.drawCircle(cursor.x, cursor.y, cursor.r, "red", "no-fill", cv.ctx);
}
function drawTarget(){
    click = false;
    gfx.drawCircle(target.x, target.y, target.r, "black", "fill", cv.ctx);
}

function randomTargetPos(canvas, r){
    let x = Math.floor(Math.random() * ((canvas.width-r) - r ) + r);
    let y = Math.floor(Math.random() * ((canvas.height-r) - r) + r); 
    return{
        x: x,
        y: y
    }
}


