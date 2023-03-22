import * as gfx from "../../Framework/gfx.js";
import * as obj from "../../Framework/obj.js";
import * as col from "../../Framework/col.js";
import data from './dial.json' assert {type: 'json'};

const cv = gfx.createCanvas(600,400);
const dialogueBox1 = new obj.rectangle(cv.canvas.width/2 - 250  , cv.canvas.height - 135, 500, 125);
let sqr = new obj.rectangle(10,10,10,10);
let pnj = new obj.rectangle(100, 200, 50 ,50);

let i = 0;
let EOL = false;
let col1 = false;
let spaceKey = false;

let vx = 0;
let vy = 0;

function Draw(){
    gfx.clearScreen(cv.ctx, cv.canvas);
    gfx.drawRect(sqr, "black", cv.ctx);
    gfx.drawRect(pnj, "blue" ,cv.ctx);

    if(col1){
        if(Object.keys(data)[i] > "end"){
            gfx.drawDialogue(data[Object.keys(data)[i]], dialogueBox1,cv.ctx);
        }else EOL = true;

    }
}

function Update(){
    move();
    col1 = col.rectCol(sqr, pnj);
}

function Game(){
    Update();
    Draw();
    requestAnimationFrame(Game);
}
requestAnimationFrame(Game);

function move(){
    document.body.addEventListener("keypress", (e) =>{
        if(     e.code == "KeyW") vy = -1; 
        else if(e.code == "KeyS") vy =  1;
        else if(e.code == "KeyA") vx = -1;
        else if(e.code == "KeyD") vx =  1;
        if(e.code == "Space") spaceKey = true;
        })
    document.body.addEventListener("keyup", (e) =>{
        if(     e.code == "KeyW") vy =  0; 
        else if(e.code == "KeyS") vy =  0;
        else if(e.code == "KeyA") vx =  0;
        else if(e.code == "KeyD") vx =  0;
        else if(e.code == "Space") spaceKey = false;
       })

    sqr.x += vx;
    sqr.y += vy;
     
}

