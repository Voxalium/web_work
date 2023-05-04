import * as gfx from "../../Framework/gfx.js"
import * as obj from "../../Framework/obj.js";

const cv = gfx.createCanvas(600,400);

const atlas = new obj.tileMap(0,0,"tilemapTest32.png");
const tm = gfx.createTileMap(atlas)
tm.onload = ()=>{
    gfx.drawTileMap(tm , cv.ctx); 
    for(let c = 0; c < map.cols; c++){
        for(let r =0; r < map.rows; r++){
            const tile = map.getTile(c, r);
    
            if( tile !== 0){
                cv.ctx.drawImage(tm, (tile) * map.tsize, 0,
                map.tsize, map.tsize, c * map.tsize,
                r * map.tsize, map.tsize, map.tsize);
            }
        }
    }
}

const map = {
    cols: 8,
    rows: 8,
    tsize: 32,
    tiles: [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 0, 0,
        0, 0, 2, 2, 2, 2, 0, 0,
        0, 0, 3, 3, 3, 3, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 2, 3, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
    ],
    getTile(col, row){
        return this.tiles[row * map.cols + col];
    },
};

let gridC ={
    x: 0,
    y: 0,
    size: 32,
    offset: 0
}

let gridR ={
    x: 0,
    y: 0,
    size: 32,
    offset: 0
}
for(let c = 0; c < 16; c++){
    gfx.drawLine(gridC.x, gridC.y, cv.canvas.width, gridC.offset, "black", cv.ctx);
    gridC.y += gridC.size;
    gridC.offset += gridC.size;
}

for(let c = 0; c < 20; c++){
    gfx.drawLine(gridR.x, gridR.y, gridR.offset, cv.canvas.height, "black", cv.ctx);
    gridR.x+= gridR.size;
    gridR.offset += gridR.size;
}
