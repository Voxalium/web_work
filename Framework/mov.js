export function lin1(p1, p2, speed, progress){
    if(p1 < p2)
    {
        p1+= (speed * progress) * 0.1;        
    }
    return p1;
}

export function lin2(p1, p2, speed1 , speed2){
    if( p1 < p2 / 2)
    {
        p1+= speed1;
    }
    else if(p1 < p2) {
        p1+= speed2;
    }
    return p1;
}

export function ease(p1,p2, x){
    x = x / 10;
    if(p1 < p2 ){
        return (1 - Math.cos((x * Math.PI)/ 100)) * p2; 
    }else return p1;

}
