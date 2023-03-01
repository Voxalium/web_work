addEventListener("DOMContentLoaded", ()=>{
    
    const mainDiv = document.createElement("div");
    mainDiv.id = "mainDiv";
    
    const container = document.createElement("div");
    container.id = "container";
    
    txt = document.createTextNode("");
    mainDiv.appendChild(container);
    document.body.appendChild(mainDiv);
    
    function showTime(){
        var date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        h = (h < 10) ? "0" + h : h ; 
        m = (m < 10) ? "0" + m : m ;
        s = (s < 10) ? "0" + s : s ; 

        container.innerHTML =  h + " : " + m + " : " + s;
        setTimeout(showTime,1000);
        
    }
    showTime();
})

