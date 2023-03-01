const terence = { 
    image: "terence.png",
    name: "Terence Truyens",
    job: "Developer/Musician",
    text: "I'm a developer and a musician"
}
const chris = { 
    image: "chris.png",
    name: "Christopher Truyens",
    job: "Artist/Mangaka",
    text: "I'm an artist and a mangaka"
}

let review = chris;



//-------------------STRUCTURE------------------------

//MAIN DIV
const mainDiv = document.createElement("div");
mainDiv.id = "mainDiv";
const h1 = document.createElement("h1");
h1.textContent = "Review";

//REVIEWDIV
const reviewDiv = document.createElement("div");
reviewDiv.id = "reviewDiv";

const photo = document.createElement("img");
photo.src = review.image;

const reviewName = document.createElement("h2");
reviewName.innerHTML = review.name;

const reviewJob = document.createElement("h3");
reviewJob.innerHTML = review.job;

const reviewText = document.createElement("p");
reviewText.innerHTML = review.text;
//CONTROL
const btnDiv = document.createElement("div");
const btnLeft = document.createElement("button");
btnLeft.innerHTML = "<"
const btnRight = document.createElement("button");
btnRight.innerHTML = ">"


//---------------------------------------------------
btnDiv.appendChild(btnLeft);
btnDiv.appendChild(btnRight);

reviewDiv.appendChild(photo);
reviewDiv.appendChild(reviewName);
reviewDiv.appendChild(reviewJob);
reviewDiv.appendChild(reviewText);
mainDiv.appendChild(btnDiv);

mainDiv.appendChild(h1);
mainDiv.appendChild(reviewDiv);
document.body.appendChild(mainDiv);

//-------------------LOGIC--------------------------

function change(){
    if(review === terence)
    {
        review = chris;
    }else review = terence;
   
    photo.src = review.image;
    reviewName.innerHTML = review.name;
    reviewJob.innerHTML = review.job;
    reviewText.innerHTML = review.text;
}

btnLeft.addEventListener("click", ()=> {change()},null);
btnRight.addEventListener("click", ()=> {change()},null);
