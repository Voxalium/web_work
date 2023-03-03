
const name = "gfx";

function clearScreen(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    ctx.clearRect(0,0, canvas.width, canvas.height);

}

function drawRect(x, y, w, h, color, ctx){
    
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);    
    
    return{
        x: x,
        y: y,
        w: w,
        h: h,
        color: color
    }
};

function drawText(str, x, y, color, ctx){
    this.str = str;
    this.x = x;
    this.y = y;
    this.color = color;
    this.ctx = ctx;
    ctx.fillStyle = color;
    ctx.fillText(str,x,y);
}

export{name, clearScreen, drawRect, drawText};
