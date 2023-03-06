export{name, linAccel};

const name = "acc";

function linAccel(p1, p2, start , end){
    if( p1 < p2 / 2)
    {
        p1+= start;
    }
    else if(p1 < p2) {
        p1+= end;
    }
    return p1;
}
