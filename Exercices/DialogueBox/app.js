import * as gfx from "../../Framework/gfx.js";
import * as obj from "../../Framework/obj.js";

const cv = gfx.createCanvas(600,400);
const dialogueBox1 = new obj.rectangle(cv.canvas.width/2 - 250  , cv.canvas.height - 135, 500, 125);

const t1 = new obj.text("Hello World");

gfx.drawRect(10,10,10,10,"black", cv.ctx);

function drawDialogue(text){
    
    gfx.drawRectObj(dialogueBox1, cv.ctx);
    gfx.drawText(text.txt, dialogueBox1.x + 5, dialogueBox1.y + 20, 18, "white", cv.ctx)

}


drawDialogue(t1);