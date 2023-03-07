import * as gfx from "../../Framework/gfx.js";
import * as acc from "../../Framework/accel.js";

const cv = gfx.createCanvas(600,400);

function Update(){

    c1.x = acc.lin1(c1.x, p2.x,3);
    c2.x = acc.lin2(c2.x, p2.x, 2, 1);


    c3.speed += 4;
    c3.x = acc.ease(c3.x , p2.x, c3.speed) ;
    
} 

function Draw(){
    gfx.clearScreen(cv.ctx, cv.canvas)
    gfx.drawText("Test acceleration", 10,18, 18,"red", cv.ctx);

    gfx.drawRect(p1.x, p1.y, p1.w, p1.h, "black", cv.ctx);
    gfx.drawRect(p2.x, p2.y, p2.w, p2.h, "black", cv.ctx);
    
    gfx.drawCircle(c1.x + 5, c1.y + 25, c1.r,  cv.ctx);
    gfx.drawCircle(c2.x + 5, c2.y + 50, c2.r,  cv.ctx);   
    gfx.drawCircle(c3.x + 5, c3.y + 75, c3.r,  cv.ctx);   

}

function Game(){
    Update();
    Draw();

    requestAnimationFrame(Game);
}

requestAnimationFrame(Game);

const p1 = {
    x: 10,
    y: 60,
    w: 10,
    h: 10
}
const p2 = {
    x: 400,
    y: 60,
    w: 10,
    h: 10
}
const c1 = {
    x: p1.x,
    y: p1.y,
    r: 10
}
const c2 = {
    x: p1.x,
    y: p1.y,
    r: 10
}
const c3 = {
    x: p1.x,
    y: p1.y,
    r: 10,
    speed: 0
}


