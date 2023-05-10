export function rectColO(r1, r2){
    if(
        r1.x < r2.x + r2.w &&
        r1.x + r1.w > r2.x &&
        r1.y < r2.y + r2.h &&
        r1.h + r1.y > r2.y)
        {
            return true;
        }
        else return false;
}
export function rectCol(x1,y1,w1,h1,x2,y2,w2,h2){
    if(
        x1 < x2 + w2 &&
        x1 + w1 > x2 &&
        y1 < y2 + h2 &&
        h1 + y1 > y2)
        {
            return true;
        }
        else return false;
}

export function circleCol(c1, c2){
    let dx = c1.x - c2.x;
    let dy = c1.y - c2.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    if( distance < c1.r + c2.r){
        return true;
    }else return false;
}