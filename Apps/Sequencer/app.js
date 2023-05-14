const tempoButton = document.getElementById("tempoButton");
let value = tempoButton.style.left
console.log(value); 
const tempoInput = document.createElement("input");
tempoInput.style.width = "30px";

let tempo = 135;

tempoButton.textContent = tempo;

function Play(){

}

function Stop(){

}

tempoButton.onmousedown = ()=>{

    tempoButton.appendChild(tempoInput);
    tempoInput.onkeydown = (e)=>{
        if(e.key === "Enter" && tempoInput.value >= 60 && tempoInput.value <= 300){
            tempo = tempoInput.value;
            tempoButton.textContent = tempo;
            tempoInput.remove();
        }
    }
}
    



    


