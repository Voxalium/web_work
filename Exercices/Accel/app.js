import * as gfx from "../../Framework/gfx.js";

const cv = gfx.createCanvas(600,400);


function Update(){

    c1.x = linAccel(c1.x, p2.x , 1, 2);
    c2.x = linAccel(c2.x, p2.x , 2, 1);
} 

function Draw(){
    gfx.clearScreen(cv.ctx, cv.canvas)
    gfx.drawText("Test acceleration", 10,18, 18,"red", cv.ctx);

    gfx.drawRect(p1.x, p1.y, p1.w, p1.h, "black", cv.ctx);
    gfx.drawRect(p2.x, p2.y, p2.w, p2.h, "black", cv.ctx);
    
    gfx.drawCircle(c1.x + 5, c1.y + 25, c1.r,  cv.ctx);
    gfx.drawCircle(c2.x + 5, c2.y + 50, c2.r,  cv.ctx);   

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

function linAccel(p1, p2, start , end){
    if( p1 < p2 / 2)
    {
        p1+= start;
    }
    else if(p1 < p2) {
        p1+= end;
    }
    return p1;
}

