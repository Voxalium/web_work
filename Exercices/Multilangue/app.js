const home    = document.getElementById("home");
const contact = document.getElementById("contact");
const gallery = document.getElementById("gallery");
const welcome = document.getElementById("h1_welcome");
const options = document.getElementById("h1_options");
const selector= document.getElementById("langSelect");




selector.addEventListener("change", ()=>{changeLang()});

function changeLang(){
    if(selector.value === "en"){
        home.innerHTML    = "Home";
        gallery.innerHTML = "Gallery";
        welcome.innerHTML = "Welcome";
        options.innerHTML = "Select your option";
    }else{
        home.innerHTML    = "Accueil";
        gallery.innerHTML = "Gallerie";
        welcome.innerHTML = "Bienvenue";
        options.innerHTML = "Selectionnez votre option";
    }
}