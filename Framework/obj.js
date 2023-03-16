export {name, circle, rectangle, vector2, text};

const name = "obj";

class circle{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

class rectangle{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

class vector2{
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
}

class text{
    constructor(txt){
        this.txt = txt;
    }
}