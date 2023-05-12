const tempoButton = document.getElementById("tempoButton");

let tempo = 135;

tempoButton.textContent = tempo;

function Play(){

}

function Stop(){

}

function IncreaseTempo(){
    return tempo++;
}

function DecreaseTempo(){
    return tempo--;
}

tempoButton.addEventListener("click", ()=>{
    tempo = IncreaseTempo();
    
});
