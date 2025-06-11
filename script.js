const input = document.getElementById("user-input");
const submit = document.getElementById("user-submit");
const results = document.getElementById("results-container");
const APIKey = "384e15f6cfe26fa731cc10bbc1a2115c";
// Listens for the submit button to be clicked and assigns the value in textbox to cityName variable
submit.addEventListener('click', function(event){
    let cityName = input.value;
    console.log(cityName);
    getWeather(cityName);
})

// Sends fetch request using openweathermap API, calling displayWeather() if successful
async function getWeather(cityName) {
    try {
        apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`
        const response = await fetch(apiURL);
        if (response.ok != true) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        const badNameHTML = `<h2>The city could not be found, please check the spelling and try again</h2>`
        results.classList.add("results");
        results.innerHTML = badNameHTML;
    }
}

// Takes data from getWeather() and displays city name, temperature and weather description to the user
function displayWeather(data) {
    const name = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;

    const weatherHTML = `<h2>${name}</h2><p>The temperature outside is ${temp} degrees with ${description}`;
    results.classList.add("results");
    results.innerHTML = weatherHTML;
}
