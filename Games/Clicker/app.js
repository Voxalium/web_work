import * as gfx from "../../Framework/gfx.js";
import * as obj from "../../Framework/obj.js";
import * as inp from "../../Framework/inp.js";
const cv = gfx.createCanvas(600,400);

const cursor  = new obj.circle(10,10,10);

function Update(progress){
}

function Draw(){
    gfx.clearScreen(cv.ctx, cv.canvas);
    drawCursor();

}

function Event(){
    cv.canvas.addEventListener("mousedown", (e)=>{
        inp.getMousePos(cv.canvas,e);
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

let lastRender = 0;
requestAnimationFrame(Game);

function drawCursor(){
    gfx.drawCircle(cursor.x, cursor.y, cursor.r, "red", cv.ctx);
}


