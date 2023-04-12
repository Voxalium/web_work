let img = [
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
    "placeholder.jpg",
];

const y = [];
const n = []; 
let falseResponse = [];
let score = 0;

const container = document.getElementById("container");
const imgContainer = document.createElement("img");

/* const scoreElement = document.createElement("p"); */
/* scoreElement.innerHTML = "score : " + score; */
/* document.body.appendChild(scoreElement); */

const yes = document.getElementById("yes");
const no  = document.getElementById("no");
const h2  = document.getElementById("progression");

const result = document.createElement("button");
result.innerHTML = "Result";

const reload = document.createElement("button");
reload.innerHTML = "Reload";

let prog = 1;
h2.innerHTML = prog + "/20"

rng = Math.floor(Math.random()*20)
imgContainer.src = img[rng];

container.appendChild(imgContainer);
//console.log(img[rng]);

let i = 19;

function randomCard(){
    if(i != 0 && prog <20){
        img.splice(rng,1);
        rng = Math.floor(Math.random()*i)
        imgContainer.src = img[rng];
        i--;
        prog++;
        //console.log(img[rng]);
        //console.log(falseResponse);
        //console.log(score);
    }else{
        imgContainer.src = "";
        yes.remove() ;
        no.remove() ;
        document.body.appendChild(result);
    }

}
//console.log(img);
//console.log(falseResponse);
        
yes.onclick = function() {checkY() ; /* scoreElement.innerHTML = "score : " + score */  ; randomCard() ; h2.innerHTML = prog + "/20"; }; 
no.onclick  = function() {checkN(); /* scoreElement.innerHTML = "score : " + score */  ; randomCard() ; h2.innerHTML = prog + "/20"; };

function checkY(){
    if(y.includes(img[rng]) && prog <21){
        score++
    }
    else(falseResponse.push(img[rng]));

}

function checkN(){
    if(n.includes(img[rng]) && prog <21){
        score++
    }
    else(falseResponse.push(img[rng]));
}

result.onclick = ()=> {
    container.remove();
    result.remove();
    h2.innerHTML = "Score: " + score + "/20" + "<br/>" +  resultPhraseF();
    document.body.appendChild(reload);
    document.body.appendChild(document.createElement("br"));
    //console.log(falseResponse);

    falseResponse.forEach(function(el){
        let img = document.createElement("img");
        img.src = el;
        let txt = document.createElement("p");
        let br = document.createElement("p");
        br.innerHTML = "---------------------------"

        txt.innerHTML = reaveal(el);
        document.body.appendChild(img);
        document.body.appendChild(txt);
        document.body.appendChild(br);

        
    })
}

reload.onclick = () => location.reload();

function reaveal(i){
    if(n.includes(i)){
        return "no";
    }else return "yes";
}

