import * as gfx from "../../Framework/gfx.js";

const canvas = document.createElement("canvas");
canvas.style.backgroundColor = "grey";
canvas.width = 600;
canvas.height = 600;
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
document.body.style.textAlign = "center";

let rect1 = gfx.drawRect(10,10,10,10,"black", ctx);

