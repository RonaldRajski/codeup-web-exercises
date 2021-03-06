"use strict";




// mapboxgl.accessToken = mapboxToken;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
//     center: [-98.4916, 29.4252] , // starting position [lng, lat]
//     zoom: 9,// starting zoom
//     interactive: true
// });


// $.get("http://api.openweathermap.org/data/2.5/forecast", {
//     APPID: openWeatherToken,
//     lat: 32.779167,
//     lon: -96.808891,
//     units: "imperial",
//     cnt: 40
//
//
//
// }).done(function(data){
//     const days = data.list.filter(e=>data.list.indexOf(e)%8===0);
//     console.log(days)
//     days.forEach(day=>{
//         makeCard(day)
//     })
// });


console.log('hello')

function makeCard(info){
    const wrapperCard = document.getElementById('wrapperCard')
    console.log(wrapperCard)
    const card = document.createElement("div");
    card.setAttribute('class', 'card m-2 bg-primary');
    const header = document.createElement('div');
    header.setAttribute('class', 'card-header');
    header.textContent= info.dt_txt.slice(0,10);
    const weath = document.createElement('ul');
    weath.setAttribute('class', 'list-group list-group-flush');
    const temp = document.createElement('li');
    temp.setAttribute('class', 'list-group list-group-flush');
    temp.innerHTML= info.main.temp_min +"°F/"+info.main.temp_max+"°F"+"<br>"+"<img src=http://openweathermap.org/img/w/"+info.weather[0].icon+".png width=\"50\" height=\"50\">";
    const descr = document.createElement('li');
    descr.setAttribute('class', 'list-group-item');
    descr.textContent = "Description: "+info.weather[0].description;
    const humidity = document.createElement('li');
    humidity.setAttribute('class', 'list-group-item');
    humidity.textContent = "Humidity: "+info.main.humidity;
    const wind = document.createElement('li');
    wind.setAttribute('class', 'list-group-item');
    wind.textContent = "Wind: "+info.wind.speed;
    const pressure = document.createElement('li');
    pressure.setAttribute('class', 'list-group-item');
    pressure.textContent = "Pressure: "+info.main.pressure;
    weath.appendChild(temp);
    weath.appendChild(descr)
    weath.appendChild(humidity);
    weath.appendChild(wind);
    weath.appendChild(pressure);
    card.appendChild(header);
    card.appendChild(weath);
    wrapperCard.appendChild(card);
}



