import * as gfx from "../../Framework/gfx.js";
import * as obj from "../../Framework/obj.js";

const cv = gfx.createCanvas(600,400);
const dialogueBox1 = new obj.rectangle(cv.canvas.width/2 - 250  , cv.canvas.height - 135, 500, 125);

//let t1 = new obj.text("Hello World");
let dial = ["Hello", "How are you ?"]
let i = 0;


gfx.drawRect(10,10,10,10,"black", cv.ctx);

function drawDialogue(text){
    
    gfx.drawRectObj(dialogueBox1, cv.ctx);
    gfx.drawText(text, dialogueBox1.x + 5, dialogueBox1.y + 20, 18, "white", cv.ctx)

}

document.body.addEventListener("keypress",(e) =>{
    if(e.code == "Space"){
        return i++;
    }
})

function Game(){
    requestAnimationFrame(Game);
    console.log(i);
    drawDialogue(dial[i]);

}
requestAnimationFrame(Game);