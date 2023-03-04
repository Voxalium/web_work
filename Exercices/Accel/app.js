import * as gfx from "../../Framework/gfx.js";

const cv = gfx.createCanvas(600,400);
gfx.drawRect(10,10,10,10,"black", cv.ctx);
gfx.drawText("Hello", 50,50, 18,"red", cv.ctx);
