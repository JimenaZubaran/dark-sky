const form = $("#search-form");

let weatherContainer = $("#weather-container");

function getWeather(weather){
  console.log(weather);
  let currently = weather.currently;
  let temperature = currently.temperature;
  let humidity = currently.humidity;
  let pressure = currently.pressure;
  let uvIndex = currently.uvIndex;
  console.log(temperature);
  console.log( humidity);
  console.log(pressure);
  console.log(uvIndex);

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
