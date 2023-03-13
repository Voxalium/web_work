export{name, rectCol, circleCol};

const name = "col";

function rectCol(x1,y1,w1,h1,x2,y2,w2,h2){
    this.x1 = x1;
    this.y1 = y1;
    this.w1 = w1;
    this.h1 = h1;
    this.x2 = x2;
    this.y2 = y2;
    this.w2 = w2;
    this.h2 = h2;

    if(
        x1 < x2 + w2 &&
        x1 + w1 > x2 &&
        y1 < y2 + h2 &&
        h1 + y1 > y2)
        {
            return true;
        }
}

function circleCol(c1, c2){
    let dx = c1.x - c2.x;
    let dy = c1.y - c2.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    if( distance < c1.r + c2.r){
        return true;
    }
}