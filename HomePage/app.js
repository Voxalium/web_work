

addEventListener("DOMContentLoaded",() =>{

    const wiki = document.getElementById("wiki");
    const BGCOLOR = "rgba(0,0,0,0.5)"
    
    // document.body.style.background= "url(https://picsum.photos/3840/2160) no-repeat center center fixed "
    document.body.style.background = "url(img/wall.png)";
    document.body.style.backgroundSize = "cover";
    
    //BACKGROUND
    

    //TIME
    const dateContainer = document.getElementById("date");
    const time = document.createElement("div");
    const dateTxt = document.createElement("div");

    dateContainer.appendChild(dateTxt);
    dateContainer.appendChild(time);


    function setTime()
    {
    let timeF = showTime();
    time.innerHTML =  timeF[0];
    dateTxt.innerHTML = timeF[1];
    timeF = setTimeout(setTime,1000);
    }
    setTime();
    
    const requestBar = document.getElementById("requestBar");

    const links = document.getElementById("links");

});