const form = $("#search-form");

let weatherContainer = $("#weather-container");

function getWeather(weather){
  console.log(weather);
  let weatherTemplate = " ";
  let currently = weather.currently;
  let temperature = currently.temperature;
  let humidity = currently.humidity;
  let pressure = currently.pressure;
  let uvIndex = currently.uvIndex;
  console.log(temperature);
  console.log( humidity);
  console.log(pressure);
  console.log(uvIndex);
  weatherTemplate += `
  <div class="col m4">
        <div class="col m12">
          <div class="card">
            <div class="card-image">
              <img src="https://lintvwkbn.files.wordpress.com/2016/03/youngstown-ohio-weather-forecast-cloudy-7.jpg">
            </div>
            <div class="card-content">
              <h4> Temperatura: ${temperature}</h4>
              <h4> Humedad: ${humidity}</h4>
              <h4> Presión: ${pressure}</h4>
              <h4>Rayos Uv: ${uvIndex}</h4>
            </div>
          </div>
          <a class="waves-effect waves-light btn modal-trigger" data-name="" href="#modal1">Clima de la semana</a>
        </div>
      </div>
  `
  weatherContainer.append(weatherTemplate);
}


function weatherInfo(lat, lng){
  console.log(lat, lng);
  $.ajax({
    url:`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f3bb13682f3285657291957ce37baad4/${lat},${lng}`
  }).done(getWeather)
}


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

form.submit(function(e){
  e.preventDefault();
  let cityId =$("#city");
  let cityValue = cityId.val();
  console.log(cityValue);
  $.ajax({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${cityValue}&key=AIzaSyAgXOp-4JiH_7FCPWMgcBaPG2g9hg3WoSg`
  }).done(getLocation)
})
