$(document).ready(function() {
  $('weatherLocation').click(function(){
    let city = $("location").val();
    $("#location").val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=portland,us&appid=08d8f0feb4e2d502d633a314986f4813`

      type: `GET`,
      data: {
        format: `json`
      },
      success: function(response){
        $(".showHumidity").text(`The humidity in${city} is ${response.main.humidity}%`);
        $("showTemp").text(`The temperature in Kelivns is ${response.main.temp}%`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
