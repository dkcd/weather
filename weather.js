$(function() {
  var handleWeatherResponse = function(data) {
    // "data" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(data);

    // We also set a window-level variable so we can use it in the console,
    // by typing data
    window.data = data;
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "Currently it is <strong>" + data.currently.summary + " </strong>and the temperature is<strong> " + data.currently.apparentTemperature + " </strong>°F<br><br>" +
      " <strong>Day 1</strong> -<strong> " + data.daily.data[1].summary + " </strong>Minimum tempereature will be<strong> " + data.daily.data[1].temperatureMin + " </strong>°F. Maximum temperature will be<strong> " + data.daily.data[1].temperatureMax + " </strong>°F<br><br>" +
      " <strong>Day 2</strong> -<strong> " + data.daily.data[2].summary + " </strong>Minimum tempereature will be<strong> " + data.daily.data[2].temperatureMin + " </strong>°F. Maximum temperature will be<strong> " + data.daily.data[2].temperatureMax + " </strong>°F<br><br>" +
      " <strong>Day 3</strong> -<strong> " + data.daily.data[3].summary + " </strong>Minimum tempereature will be<strong> " + data.daily.data[3].temperatureMin + " </strong>°F. Maximum temperature will be<strong> " + data.daily.data[3].temperatureMax + " </strong>°F<br><br>";
    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML) 
    // and write it out to the page.
    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});