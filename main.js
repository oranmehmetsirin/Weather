const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");

btn.addEventListener( "click" , () => {
    const cityName = cityInput.value

    getData(cityName)

} )

function getData(name){

    const API = "82bb35976234fbb763001c1623167e44";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric`;

    fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        const {name, sys:{country}, main: {temp, feels_like, humidity}, weather: [{description}], wind:{speed}} = data;

        const city = document.querySelector(".city")
        const temperature = document.querySelector(".temp")
        const hum = document.querySelector(".humidity")
        const wind = document.querySelector(".wind")
        const weatherDesc = document.querySelector(".weather")
        const feeling = document.querySelector(".feeling")
        console.log(city, temperature, hum, wind, weatherDesc, feeling)

        
        city.textContent = `${name}, ${country}`;
        temperature.innerText = `${temp.toFixed(0)}°`;
        hum.textContent = `Humidity: ${humidity}%`;
        wind.innerHTML = `Wind: ${speed}Km/h`;
        weatherDesc.innerHTML = `<i>${description.toUpperCase()}</i>`;
        feeling.textContent = `Feels Like : ${feels_like.toFixed(0)}`;
    })
    .catch(err => console.log(err))
    cityInput.value = "";
    cityInput.focus();
};