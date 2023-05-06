import * as gfx from "../../Framework/gfx.js"
const cv = gfx.createCanvas(800,600);

let player = {
    x: 50,
    y: 100,
    vx: 0,
    vy: 0,
    sprite: "player.png"
}
const playerSprite = new Image();
playerSprite.src = player.sprite;

function Event(){
    window.addEventListener("keydown", (e)=>{
        switch( e.code){
            case "ArrowUp":
                player.vy = -1

        }
    
    })
}
Event();
function drawPlayer(){
    cv.ctx.drawImage(playerSprite, player.x, player.y);
}

function Update(){
    player.y += player.vy;
}

function Draw(){
    gfx.clearScreen(cv.ctx,cv.canvas);
    drawPlayer();
}

function Game(){
    Update();
    Draw();

    requestAnimationFrame(Game);
}
requestAnimationFrame(Game);