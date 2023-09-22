function displayTemperature(response) {
  console.log(response);
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector(".description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
}

let now = new Date();
let currentDate = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let date = now.getDate();
let hours = now.getHours();

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentDate.innerHTML = `${day} ${hours}:${minutes} <br/> ${month} ${date}`;

let apiKey = "c8a5e25887f10t1o4fc6a4fb7b8c3bcf";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Amsterdam}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
