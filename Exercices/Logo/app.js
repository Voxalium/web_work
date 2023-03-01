addEventListener("DOMContentLoaded", ()=>{
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 480;

    
    const ctx = canvas.getContext("2d");
    
    let factorevalue = 1;
    let fontFamily = "65px 'Impact', sans-serif";
    
    const scaleSlider =  document.createElement("input");
    scaleSlider.id = "slide";
    scaleSlider.type="range",
    scaleSlider.min = 0;
    scaleSlider.max = 100;    
    scaleSlider.value = 100;
    scaleSlider.onchange = ()=> {changeScale(scaleSlider.value)};
    scaleSlider.step = 10;
  
   
    document.body.appendChild(canvas);
    document.body.appendChild(scaleSlider);
    
    
   
    ctx.font = fontFamily;
    
   

    function logo(){
        let offsetY = 80;
        ctx.restore();
        ctx.save();
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.scale(factorevalue, factorevalue);
        ctx.fillText("HTML", 70,60);
        ctx.translate(0, offsetY);
        ctx.fillStyle = "#E34C26";
      
        ctx.beginPath();
        ctx.moveTo(39,250);
        ctx.lineTo(17,0);
        ctx.lineTo(262,0);
        ctx.lineTo(239,250);
        ctx.lineTo(139,278);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#F06529";
        ctx.beginPath();
        ctx.moveTo(139,257);
        ctx.lineTo(220,234);
        ctx.lineTo(239,20);
        ctx.lineTo(139,20);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#EBEBEB';
        ctx.beginPath();
        ctx.moveTo(139,113);
        ctx.lineTo(98,113);
        ctx.lineTo(96,82);
        ctx.lineTo(139,82);
        ctx.lineTo(139,51);
        ctx.lineTo(62,51);
        ctx.lineTo(70,144);
        ctx.lineTo(139,144);
        ctx.closePath();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(139,193);
        ctx.lineTo(105,184);
        ctx.lineTo(103,159);
        ctx.lineTo(72,159);
        ctx.lineTo(76,207);
        ctx.lineTo(139,225);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle ="#FFFFFF";
        ctx.beginPath();
        ctx.moveTo(139,113);
        ctx.lineTo(139,144);
        ctx.lineTo(177,144);
        ctx.lineTo(173,184);
        ctx.lineTo(139,193);
        ctx.lineTo(139,225);
        ctx.lineTo(202,207);
        ctx.lineTo(210,113);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(139,51);
        ctx.lineTo(139,82);
        ctx.lineTo(213,82);
        ctx.lineTo(216,51);
        ctx.closePath();
        ctx.fill();


    }
    function changeScale(val){
        this.val = val
        factorevalue = this.val / 100;
        logo();
    }
    changeScale();
})