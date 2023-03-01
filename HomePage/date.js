function showTime(){
        
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();


    hour = (hour < 10) ? "0" + hour : hour ; 
    minute = (minute < 10) ? "0" + minute : minute ;
    second = (second < 10) ? "0" + second : second ; 

    switch(day){
        case 0: day = "Dimanche";
        break;

        case 1: day = "Lundi";
        break;

        case 2: day = "Mardi";
        break;

        case 3: day = "Mercredi";
        break;

        case 4: day = "Jeudi";
        break;

        case 5: day = "Vendredi";
        break;

        case 6: day = "Samedi";
        break;
    }
    switch(month){
        case 0: month ="Janvier";
        break;
        case 1: month ="Février";
        break;
        case 2: month ="Mars";
        break;
        case 3: month ="Avril";
        break;
        case 4: month ="Mai";
        break;
        case 5: month ="Juin";
        break;
        case 6: month ="Juillet";
        break;
        case 7: month ="Août";
        break;
        case 8: month ="Septembre";
        break;
        case 9: month ="Octobre";
        break;
        case 10: month ="Novembre";
        break;
        case 11: month ="Décembre";
        break;
       

    }

    return [hour + " : " + minute,  date =  day + "\n" + date.getDate() + "\n" + month + "\n" + year];
    
}