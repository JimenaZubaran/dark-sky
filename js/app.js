const firsAjax = function(){
  let url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f3bb13682f3285657291957ce37baad4/42.3601,-71.0589"; 
  fetch(url).then(response => {
response.json().then(json =>{
    weather(json)
    })
  }) 
};

firsAjax()

const weather = json =>{
console.log(json);
let weatherContainer = document.getElementById("weather-container");
let weatherContainerWeek = document.getElementById("weather-container-week");

let template =`
<div>${json.currently.temperature}</div>
<div>${json.currently.humidity}</div>
<div>${json.currently.pressure}</div>
<div>${json.currently.uvIndex}</div>
<a class="waves-effect waves-light btn modal-trigger" data-name="" href="view.html">Clima de la semana</a>
`;
weatherContainer.innerHTML = template;

let templateForecast = json.daily.data;
console.log(templateForecast)
templateForecast.forEach(day => {
    console.log(day)


   let currentDay = `
    <div> Day: ${unixDateToCurrentDate(day.time)}</div>
    <div> Icon: ${day.icon}</div>
    <div> Hight Temperature:${day.temperatureHigh}</div>
    <div> Min temperature: ${day.temperatureMin}</div>
    <br>
    `;
    weatherContainerWeek.insertAdjacentHTML("beforeEnd",currentDay) 
}); 
};

const  unixDateToCurrentDate = unixnumber =>{
    //new - constructor
console.log(new Date(unixnumber * 1000).toLocaleString("es-Mx", {weekday:"short"}));
    return new Date(unixnumber * 1000).toLocaleString("es-Mx", {weekday:"long"});
}



/*
//dark sky
function weatherInfo(lat, lng){
    console.log(lat, lng);
    $.ajax({
      url:`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f3bb13682f3285657291957ce37baad4/${lat},${lng}`
    }).done(getWeather)
  }


// google 
function getLocation(item){
    console.log(item);
    let results = item.results[0];
    let location = results.geometry.location
    let lat = location.lat;
    let lng = location.lng;
    console.log(location);
    console.log(results, lat, lng);
    weatherInfo(lat, lng)
  }
  const form = $("#search-form");
  form.submit(function(e){
    e.preventDefault();
    let cityId =$("#city");
    let cityValue = cityId.val();
    console.log(cityValue);
    $.ajax({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${cityValue}&key=AIzaSyAgXOp-4JiH_7FCPWMgcBaPG2g9hg3WoSg`
    }).done(getLocation)
  })
*/

    /*let day = document.getElementById("day");
    let icon = document.getElementById("icon");
    let higtTemperatureay = document.getElementById("higt-temperature");
    let minTemperature = document.getElementById("min-temperature");
    
    day.innerHTML = unixDateToCurrentDate(day.time);
    icon.innerHTML = day.icon;
    higtTemperatureay,innerHTML = day.temperatureHigh
    minTemperature.innerHTML = day.temperatureMin;*/

//${unixDateToCurrentDate(day.time)}