export function createCanvas(w, h, c = "grey"){    
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    document.body.style.textAlign = "center";

    canvas.style.backgroundColor = c;
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d");

    return{
        ctx: ctx,
        canvas: canvas
    }
}

export function clearScreen(ctx, canvas){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

export function createSprite(sprite){
    const img = new Image();
    img.src = sprite.img;
    return img;
}

export function createTileMap(tileMap){
    const img = new Image();
    img.src = tileMap.img;
    return img;
}



export function drawDialogue(text, dialogueBox, ctx){
    drawRect(dialogueBox, "black", ctx);
    drawText(text, dialogueBox.x + 5, dialogueBox.y + 20, 18, "white", ctx)
}
//-------------------------------DRAW SHAPE-------------------------------------------
export function drawRectO(rect, col,  ctx){
    ctx.fillStyle = col;
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
}

export function drawRect(ctx,x,y,w,h,col="black"){
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w, h);
}

export function drawCircle(x, y , r, color, fill, ctx ){
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    if(fill == "fill"){
        ctx.fill();
        ctx.stroke();
        
    }
    if(fill == "no-fill"){
        ctx.stroke();
    }
    
    return{
        x: x,
        y: y,
        r: r
    }
}

export function drawLine(x1, y1, x2, y2, color, ctx){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

export function drawLineO(line, color, ctx){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x2, line.y2);
    ctx.stroke();
}


export function drawVector2(vector2, color, ctx){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(vector2.x1, vector2.y1);
    ctx.lineTo(vector2.x2, vector2.y2);
    ctx.stroke();
}

export function drawText(ctx, str, x, y, size = "24", color="black"){
    ctx.font = "bold " + size +"px" + " serif";
    ctx.fillStyle = color;
    ctx.fillText(str,x,y);
    
    return{
        str: str,
        x: x,
        y: y,
    }
}

export function drawSprite(sprite, ctx){
    ctx.drawImage(sprite, sprite.x, sprite.y);
}

export function drawTileMap(tileMap, ctx){
    ctx.drawImage(tileMap, tileMap.x, tileMap.y);
    
}