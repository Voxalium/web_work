export{name, createCanvas, clearScreen, drawRect, drawCircle, drawText, drawLine};

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
        ctx: ctx,
        canvas: canvas
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
    }
}

function drawCircle(x, y , r, color, ctx ){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke();

    return{
        x: x,
        y: y,
        r: r
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

function drawLine(x1, y1, x2, y2, color, ctx){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

