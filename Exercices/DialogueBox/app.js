import * as gfx from "../../Framework/gfx.js";
import * as obj from "../../Framework/obj.js";

const cv = gfx.createCanvas(600,400);
const dialogueBox1 = new obj.rectangle(cv.canvas.width/2 - 250  , cv.canvas.height - 135, 500, 125);

//let t1 = new obj.text("Hello World");
let dial = ["Hello", "How are you ?"]
let i = 0;

let vx = 0;
let vy = 0;

let sqr = new obj.rectangle(10,10,10,10);

function drawDialogue(text){
    gfx.drawRectObj(dialogueBox1, cv.ctx);
    gfx.drawText(text, dialogueBox1.x + 5, dialogueBox1.y + 20, 18, "white", cv.ctx)
}

document.body.addEventListener("keypress",(e) =>{
    if(e.code == "Space"){
        return i++;
    }
})

function Draw(){
    gfx.clearScreen(cv.ctx, cv.canvas);
    gfx.drawRect(sqr.x, sqr.y, sqr.w, sqr.h,"black", cv.ctx);
}

function Update(){
    move();
}

function Game(){
    Update();
    Draw();
    drawDialogue(dial[i]);
    requestAnimationFrame(Game);
}
requestAnimationFrame(Game);

function move(){
    document.body.addEventListener("keypress", (e) =>{
        if(     e.code == "KeyW") vy = -1; 
        else if(e.code == "KeyS") vy =  1;
        else if(e.code == "KeyA") vx = -1;
        else if(e.code == "KeyD") vx =  1;})
    document.body.addEventListener("keyup", (e) =>{
        if(     e.code == "KeyW") vy =  0; 
        else if(e.code == "KeyS") vy =  0;
        else if(e.code == "KeyA") vx =  0;
        else if(e.code == "KeyD") vx =  0;})

    sqr.x += vx;
    sqr.y += vy;
}