
const API_key = `68bd909f84a7fee450327060eee62437`;

const loadTemp = () => {
    const cityName = document.getElementById('city-input').value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;
    
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
};

const displayTemp = city =>{
    console.log(city);
    document.getElementById('city-name').innerText= city.name;
    document.getElementById('temp').innerText = city.main.temp; 
    document.getElementById('condition').innerText = city.weather[0].main;

    //set weather icon
    const imgIcon = document.getElementById('weather-icon');
    const url = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
    imgIcon.setAttribute('src', url);
}