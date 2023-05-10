import * as vframe from "../../Framework/vframe.js"
//------------------------CANVAS-----------------------
const cv = vframe.gfx.createCanvas(600,400);
//-----------------------------------------------------
//------------------------GAMELOOP---------------------

function Update(){
    checkCol();
    pipeCol();
    moveBird();
    if(isGameOver){
       window.location.reload();
    }
    pipe.x = pipe.x - pipe.vx;
    if(pipe.x <= 0){
        pipe.x = cv.canvas.width - pipe.w;
        pipe.h = rdmPipeY();
        pipe.vx += 0.3;
        score++;
    }

}
 
function Draw(){
    vframe.gfx.clearScreen(cv.ctx, cv.canvas);
    vframe.gfx.drawRectO(birdRect, "black", cv.ctx);
    drawPipes();
    drawScore();
}

function Game(){
    Update()
    Draw()
    requestAnimationFrame(Game);
}
requestAnimationFrame(Game);

//------------------------GLOBAL-----------------------
let isGameOver = false;
let score = 0;

//-----------------------------------------------------
//------------------------BIRD-------------------------
const bird = {
    x: 92 ,
    y: 100,
    vy: 3,
    w: 32,
    h: 32,
    flap: false
}
const birdRect = new vframe.obj.rectangle(bird.x, bird.y, bird.w, bird.h);

//------------------------PIPE-------------------------

const pipe = {
    x: cv.canvas.width,
    y: 0,
    vx: 3,
    w: 32,
    h: 100,
    gap: 92,
    out: false
}
const pipeRect = new vframe.obj.rectangle(pipe.x, pipe.y, pipe.w, pipe.h);
function rdmPipeY(){
    return Math.random() * ((cv.canvas.height - pipe.gap) - (0 + pipe.gap) + (0 + pipe.gap));
} 
function drawPipes(){

    //top
    vframe.gfx.drawRect(pipe.x, pipe.y            , pipe.w, pipe.h, "green", cv.ctx);

    //bot
    vframe.gfx.drawRect(pipe.x, pipe.h + pipe.gap , pipe.w, cv.canvas.height, "green", cv.ctx);

}
//-----------------------------------------------------
//------------------------SCORE------------------------
function drawScore(){
    vframe.gfx.drawText("SCORE: " + score, 10, 20, 15,"black", cv.ctx );
}

//-----------------------------------------------------

//------------------------CONTROL----------------------

document.body.addEventListener("keydown", (e)=>{
    if(e.code == "Space") bird.flap = true;
}, false);

document.body.addEventListener("keyup", (e)=>{
    if(e.code == "Space") bird.flap = false; 
}, false);

function moveBird(){
    birdRect.y += bird.vy;

    if(bird.flap){
        bird.vy = -1
        birdRect.y +=  bird.vy;
    }
    else{
        bird.vy = 1
        bird.y = bird.y + bird.vy;
        bird.vy += 0.5;
    }
}

function checkCol(){
    if(birdRect.y + birdRect.h >= cv.canvas.height || birdRect.y <= 0 )   isGameOver = true;
}

function pipeCol(){
    if(vframe.col.rectCol(birdRect.x, birdRect.y, birdRect.w, birdRect.h, pipe.x, pipe.y, pipe.w, pipe.h) || vframe.col.rectCol(birdRect.x, birdRect.y, birdRect.w, birdRect.h, pipe.x, pipe.h + pipe.gap, pipe.w, cv.canvas.height)){
        isGameOver = true;
    } 
 
}
