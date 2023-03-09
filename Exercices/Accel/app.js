import * as gfx from "../../Framework/gfx.js";
import * as mov from "../../Framework/mov.js";
import * as obj from "../../Framework/obj.js";

const cv = gfx.createCanvas(600,400);
let speed = 80;

const p1 = new obj.rectangle(10, 60, 10, 10);
const p2 = new obj.rectangle(400, 60, 10, 10);
const c1 = new obj.circle(p1.x, p1.y, 10);
const c2 = new obj.circle(p1.x, p1.y, 10);
const c3 = new obj.circle(p1.x, p1.y, 10);

let x1 = 100;
let y1 = 250;
let x2 = 400;
let y2 = 250;

function Update(progress){

    c1.x = mov.lin1(c1.x, p2.x + 5, 1, progress) ;
    c2.x = mov.lin2(c2.x, p2.x + 5, 2, 1);

    speed += 4;
    c3.x = mov.ease(c3.x , p2.x , speed);
} 

function Draw(){

    gfx.clearScreen(cv.ctx, cv.canvas)
    gfx.drawText("Test acceleration", 10, 18, 18,"red", cv.ctx);
    gfx.drawLine(p1.x, p1.y, p1.x, 250  , "red", cv.ctx);
    gfx.drawLine(p2.x, p2.y, p2.x, 250  , "red", cv.ctx);
    

    gfx.drawRect(p1.x, p1.y, p1.w, p1.h, "black", cv.ctx);
    gfx.drawRect(p2.x, p2.y, p2.w, p2.h, "black", cv.ctx);
    
    gfx.drawCircle(c1.x + 5, c1.y + 25, c1.r, "blue", cv.ctx);
    gfx.drawCircle(c2.x + 5, c2.y + 50, c2.r, "blue", cv.ctx);   
    gfx.drawCircle(c3.x + 5, c3.y + 75, c3.r, "blue", cv.ctx);   

}

function Game(timestamp){

    let progress = (timestamp - lastRender);
    Update(progress);
    Draw();

    lastRender = timestamp;

    requestAnimationFrame(Game);
}
let lastRender = 0;

requestAnimationFrame(Game);