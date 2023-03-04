export{name, createCanvas, clearScreen, drawRect, drawText};

const name = "gfx";

function createCanvas(w, h){    
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    document.body.style.textAlign = "center";

    canvas.style.backgroundColor = "grey";
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d");

    return{
        ctx: ctx
    }
}

function clearScreen(ctx, canvas){
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
        color: color,
        ctx: ctx
    }
}

function drawText(str, x, y, s, color, ctx){
    ctx.font = "bold " + s +"px" + " serif";
    ctx.fillStyle = color;
    ctx.fillText(str,x,y);

    return{
        str: str,
        x: x,
        y: y,
    }
}

