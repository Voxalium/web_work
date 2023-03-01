//Create Close Button
let nodeList = document.getElementsByTagName("li");
let i ;
for(i = 0; i < nodeList.length; i++)
{
    let closeButton = document.createElement("span");
    let icon = document.createTextNode("⨯")
    closeButton.className = "close";
    closeButton.appendChild(icon);
    nodeList[i].appendChild(closeButton);
}
//Close Logic
let close = document.getElementsByClassName("close");
for(i = 0; close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.remove();
    }
} 

function addTask(){

    let newTask = document.createElement("li");
    let taskInput = document.getElementById("taskInput").value;
    let t = document.createTextNode(taskInput);
    newTask.appendChild(t);
    if(!taskInput) {
        alert("Write a task !");
    }else{document.getElementById("taskList").appendChild(newTask)};    
    document.getElementById("taskInput").value="";

    let span = document.createElement("span");
    let txt = document.createTextNode("⨯");
    span.className = "close";
    span.appendChild(txt);
    newTask.appendChild(span);

    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.remove();
        }
    }
}
