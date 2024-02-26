import * as p from "./params.js";

/**
 * Create a canvas
 * @returns {Array} CV & CTX
 */
export const createCanvas = () => {
    const CV = document.querySelector("canvas");
    CV.width = p.WIDTH;
    CV.height = p.HEIGHT;

    const CTX = CV.getContext("2d");
    CTX.fillStyle = p.BG_COLOR;
    CTX.fillRect(0, 0, CV.width, CV.height);
    return [CV, CTX];
};
