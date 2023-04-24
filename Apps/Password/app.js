
const input = document.getElementById("input");
const button = document.getElementById("genButton");
const nbChar = document.getElementById("nbChar");

const char = ['a','b','c','d','e',
              'f','g','h','i','j',
              'k','l','m','n','o',
              'p','q','r','s','t',
              'u','v','w','x','y',
              'z','A','B','C','D',
              'E','F','G','H','I',
              'J','K','L','M','N',
              'O','P','Q','R','S',
              'T','U','V','W','X',
              'Y','Z','0','1','2',
              '3','4','5','6','7',
              '8','9'];
let password = [];
let size = 6;

nbChar.onchange = ()=>{
    size = nbChar.value;
} 

function rng(){
    return Math.floor(Math.random()*char.length+1);
}

function generatePassword(){
    for(let i = 0; i != size; i++){

        password.push(char[rng()]);
    }
}

button.onclick = ()=>{
    generatePassword();
    input.value = password.join("");
    password = [];
}
