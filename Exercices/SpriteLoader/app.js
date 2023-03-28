import * as gfx from "../../Framework/gfx.js";
import { rectangle, sprite } from "../../Framework/obj.js";
const cv = gfx.createCanvas(600, 400);

const spr = new sprite(10,10, "sprite.png");
const player  = gfx.createSprite(spr);

const r1 = new rectangle(150,50,50,50);


function Draw(){
    
    gfx.clearScreen(cv.ctx, cv.canvas);
    gfx.drawSprite(player,cv.ctx);
    gfx.drawRect(r1, "black", cv.ctx);
}

function Update(){
    
}

function Game(){
    Update();
    Draw();
    requestAnimationFrame(Game)
}
requestAnimationFrame(Game);





