export function getMousePos(canvas, e){
    let r = canvas.getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;
    return{
        x: x,
        y: y
    }
}