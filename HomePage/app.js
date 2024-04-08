addEventListener("DOMContentLoaded", () => {
  document.body.style.background = "url(img/wall.webp)";

  //BACKGROUND

  //TIME
  const dateContainer = document.getElementById("date");
  const time = document.createElement("div");
  const dateTxt = document.createElement("div");

  dateContainer.appendChild(dateTxt);
  dateContainer.appendChild(time);

  function setTime() {
    let timeF = showTime();
    time.innerHTML = timeF[0];
    dateTxt.innerHTML = timeF[1];
    timeF = setTimeout(setTime, 1000);
  }
  setTime();
});
