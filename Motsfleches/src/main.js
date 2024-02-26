import { createCanvas } from "./draw.js";

const INIT = () => {
    const CANVAS = createCanvas();
};

const DRAW = () => {};

const UPDATE = () => {};

const GAME = () => {
    UPDATE();
    DRAW();
};

INIT();
GAME();
