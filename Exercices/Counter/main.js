//-----------------------STRUCTURE-------------------------

const div = document.createElement("div");
div.id = "mainDiv";

    const t = document.createTextNode("Counter");
    const h1 = document.createElement("h1");

    let value = 0;
    const p = document.createElement("p");
    p.innerHTML = value;

    const decreaseButton = document.createElement("button");
    const resetButton = document.createElement("button");
    const increaseButton = document.createElement("button");
    

    const divButton = document.createElement("div");
    divButton.id = "buttons";
    decreaseButton.textContent = "-";
    resetButton.textContent = "Reset";
    increaseButton.textContent = "+";

divButton.appendChild(decreaseButton);
divButton.appendChild(resetButton);
divButton.appendChild(increaseButton);
h1.appendChild(t);
div.appendChild(h1);
div.appendChild(p);
div.appendChild(divButton);
document.body.appendChild(div);

//----------------------------------------------------------

//-----------------------LOGIC------------------------------

decreaseButton.addEventListener("click", ()=> { value--   ; p.innerHTML = value},null);
resetButton.addEventListener("click",    ()=> { value = 0 ; p.innerHTML = value},null);
increaseButton.addEventListener("click", ()=> { value++   ; p.innerHTML = value},null);



