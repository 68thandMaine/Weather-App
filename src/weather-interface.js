$(document).ready(function() {
  $('#weatherLocation').click(function(){
    let today = new Date();
    let city = $("#location").val();
    $("#location").val("");
    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=08d8f0feb4e2d502d633a314986f4813`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("Get", url, true);
    request.send();

    const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`It will be ${response.main.temp} Kelvin today.`);
      $('.showWeather').text(`The weather for ${today.toDateString()} calls for  ${response.weather[0].main}.`)
    }
  });
});
