let img = [];

const container = document.getElementById("container");
let imgContainer = document.createElement("img");

rng = Math.floor(Math.random()*20) 
imgContainer.src = img[rng];

container.appendChild(imgContainer);

console.log(rng);

