let modal = document.getElementById("myModal");

let btn = document.getElementById("button");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){ modal.style.display = "block"};

span.onclick = function(){modal.style.display = "none"};

window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}