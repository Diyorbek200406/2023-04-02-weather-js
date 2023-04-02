const form = document.getElementById("change-location");
const card = document.getElementById("card");
const details = document.getElementById("details");
const weatherIcon = document.getElementById("weather-icon");
const overlay = document.getElementById("overlay");
form.city.focus();
//loader
function loader(state) {
  if (state) {
    overlay.classList.remove("d-none");
    console.log("ishladi");
  } else {
    overlay.classList.add("d-none");
    console.log("IShlamadi");
  }
}
// updateUI

const updateUI = (weather) => {
  details.innerHTML = `
    <h5 class="mb-3">${weather.name} , ${weather.sys.country}</h5>
    <p class="mb-3">${weather.weather[0].main}</p>
    <div class="mb-3 display-4">
        <span>${Math.round(weather.main.temp)} </span>
        <span>&deg;C</span>
    </div>
  `;
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
  weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
};
// get weather function
const getWeather = async (city) => {
  const data = await getData(city);
  return data;
};
// get location
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = form.city.value.trim();
  form.reset();
  getWeather(cityName).then((data) => updateUI(data));
});
