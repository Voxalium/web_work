///Structure
let myBody = document.querySelector("body").style;
let block = document.createElement("div");
let button = document.createElement("button");
let p = document.createElement("p");

let r = 0;
let g = 0;
let b = 0;
let text = document.createTextNode("R: " +r+" G: "+g+" B: " +b );

p.appendChild(text);
button.type = "button";
button.textContent = "Click!"
block.appendChild(button);
block.appendChild(p);
document.body.appendChild(block);

button.onclick = function(){
    r =  Math.floor(Math.random()*1000 % 255+0);
    g =  Math.floor(Math.random()*1000 % 255+0);
    b =  Math.floor(Math.random()*1000 % 255+0);
    
    myBody.backgroundColor = "rgb("+r+","+g+","+b+")";
    text.nodeValue = ("R: "+r+" G: "+g+" B: "+b+"");

    

}