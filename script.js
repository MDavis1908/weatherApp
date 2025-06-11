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

async function getWeather(cityName) {
    try {
        apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`
        console.log(apiURL);
        const response = await fetch(apiURL);
        if (response.ok != true) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {

    }
}

function displayWeather() {
    const name = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;


}
