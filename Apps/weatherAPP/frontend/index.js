import { fetchForecast } from "./api.js";

const meteo = document.querySelector("#meteo");
const city = document.querySelector("#city");
const forecast = document.querySelector("#forecast");
const current = document.querySelector("#current");
const condition = document.querySelector(".condition");
const form = document.querySelector("#city-form");
const input = document.querySelector("#city-input");

function setData(json, location, time, temp, wind, hum, text, icon) {
  location.innerText = `${json.location.name}, ${json.location.region}, ${json.location.country}`;
  time.innerText = `${json.location.localtime}`;
  temp.innerText = `${json.current.temp_c} °C`;
  wind.innerText = `Vent: ${json.current.wind_kph} km/h ${json.current.wind_dir}`;
  hum.innerText = `Humidité: ${json.current.humidity} %`;
  text.innerText = `${json.forecast.forecastday[0].day.condition.text} `;
  icon.src = `${json.forecast.forecastday[0].day.condition.icon} `;
}

function setForecast(json, date, temp, text, icon, i) {
  date.innerText = `${json.forecast.forecastday[i].date}`;
  temp.innerText = `${json.forecast.forecastday[i].day.avgtemp_c} °C`;
  text.innerText = `${json.forecast.forecastday[i].day.condition.text} `;
  icon.src = `${json.forecast.forecastday[i].day.condition.icon} `;
}

function createCurrent(json) {
  const location = document.createElement("h2");
  city.id = "city-name";
  const time = document.createElement("h3");
  time.id = "city-time";
  const temp = document.createElement("p");
  temp.className = "temperature";
  const wind = document.createElement("p");
  wind.className = "wind";
  const hum = document.createElement("p");
  hum.className = "humidity";
  const text = document.createElement("p");
  text.className = "text";
  const icon = document.createElement("img");
  icon.className = "icon";

  setData(json, location, time, temp, wind, hum, text, icon);

  city.append(location, time);
  meteo.append(temp, wind, hum);
  condition.append(text, icon);
}

function createForecast(json) {
  for (let i = 1; i < 3; i++) {
    const block = document.createElement("section");
    block.className = "block";

    const date = document.createElement("p");
    date.id = "city-time";
    const temp = document.createElement("p");
    temp.className = "temperature";
    const text = document.createElement("p");
    text.className = "text";
    const icon = document.createElement("img");
    icon.className = "icon";

    setForecast(json, date, temp, text, icon, i);
    block.append(date, temp, text, icon);
    forecast.append(block);
  }
}

function reset() {
  forecast.innerHTML = "";
  const title = document.createElement("h4");
  title.innerText = "Prévision :";
  forecast.append(title);

  city.innerHTML = "";
  meteo.innerHTML = "";
  condition.innerHTML = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const error = document.createElement("p");
  error.id = "error";

  reset();

  fetchForecast(input.value)
    .then((data) => {
      createCurrent(data);
      createForecast(data);
    })
    .catch((err) => {
      console.error("Error fetch: ", err);
    });
});
