const url = "http://localhost:3000/forecast/";
const reqForecast = new Request(url, {
  method: "GET",
});

export function fetchForecast(city) {
  return fetch(url + city)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Can't fetch forecast");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error("Problem with fetch:", err);
    });
}
