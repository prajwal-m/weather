const weather = (function() {
  function displayData(weatherObj) {
    $(".icon").addClass("display-block");
    console.log(weatherObj);
    const cityField = document.querySelector(".city"),
      weatherField = document.querySelector(".weather-condition"),
      temperatureField = document.querySelector(".temperature"),
      humidityField = document.querySelector(".humidity"),
      pressureField = document.querySelector(".pressure"),
      windField = document.querySelector(".wind-speed");

    cityField.textContent = weatherObj.city + "-" + weatherObj.country;
    weatherField.textContent = weatherObj.weatherCondition;
    temperatureField.textContent = weatherObj.temperature;
    humidityField.textContent = weatherObj.humidity;
    pressureField.textContent = weatherObj.pressure;
    windField.textContent = weatherObj.windSpeed;
  }

  function handleData(data) {
    const iconData =
      "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $(".icon").attr("src", iconData);

    const weatherData = {
      temperature: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      weatherCondition: data.weather[0].main,
      city: data.name,
      country: data.sys.country
    };

    displayData(weatherData);
  }

  function getData() {
    var city = $("#city").val();

    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric" +
        "&APPID=dd0a35b369a8e78de9c760a313ef7b00",
      type: "GET",
      dataType: "jsonp",
      success: function(data) {
        handleData(data);
      }
    });
  }

  return {
    getData: getData
  };
})();

(function() {
  document
    .querySelector("#submitLocation")
    .addEventListener("click", weather.getData);
})();
