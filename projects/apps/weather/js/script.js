//weekday
let weekday = document.querySelector(".weekday");

//date
let date = document.querySelector(".date");

//temperature section
let temperature = document.querySelector("#temperature");
let tempContainer = document.querySelector(".temperature");
let tempUnit = document.querySelector(".temperature").querySelector(".unit");
let weatherIcon = document.querySelector(".icon");
let cloudness = document.querySelector(".cloudness");

//min,max,uv,wind
let min = document.querySelector(".min").querySelector(".value");
let max = document.querySelector(".max").querySelector(".value");
let uvIndex = document.querySelector(".uv-index").querySelector(".value");
let wind = document.querySelector(".wind").querySelector(".value");

let latitude, longitude;

//request GPS location
function getGeolocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}

function fetchdata(latitude, longitude) {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weathercode,surface_pressure,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max&current_weather=true&timezone=auto`;

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error("Error:", error);
    });
}

function handleGeolocationError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}

// Usage
getGeolocation()
  .then((position) => {
    latitude = position.coords.latitude.toFixed(2);
    longitude = position.coords.longitude.toFixed(2);

    return fetchdata(latitude, longitude);
  })
  .then((data) => {
    // Handle the weather data

    //change euro units to us units
    tempContainer.addEventListener("click", function () {
      if (tempUnit.innerHTML === "°C") {
        temperature.innerHTML = Math.round(
          (temperature.innerHTML * 9) / 5 + 32
        );
        tempUnit.innerHTML = "°F";

        min.innerHTML = Math.round((min.innerHTML * 9) / 5 + 32);
        min.nextElementSibling.innerHTML = " °F";
        max.innerHTML = Math.round((max.innerHTML * 9) / 5 + 32);
        max.nextElementSibling.innerHTML = " °F";

        wind.innerHTML = (wind.innerHTML * 0.621371).toFixed(1);
        wind.nextElementSibling.innerHTML = " mph";

        //forecast unit change
        forecastTemperatures.forEach(function (forecastTemperature) {
          forecastTemperature.querySelector(".value").innerHTML = Math.round(
            (forecastTemperature.querySelector(".value").innerHTML * 9) / 5 + 32
          );
          forecastTemperature.querySelector(".unit").innerHTML = " °F";
        });
      } else {
        temperature.innerHTML = Math.round(data.current_weather.temperature);
        tempUnit.innerHTML = "°C";

        min.innerHTML = Math.round(data.daily.temperature_2m_min[0]);
        min.nextElementSibling.innerHTML = " °C";
        max.innerHTML = Math.round(data.daily.temperature_2m_max[0]);
        max.nextElementSibling.innerHTML = " °C";

        wind.innerHTML = data.current_weather.windspeed.toFixed(1);
        wind.nextElementSibling.innerHTML = " km/h";

        //forecast unit change
        forecastTemperatures.forEach(function (forecastTemperature, index) {
          forecastTemperature.querySelector(".value").innerHTML = Math.round(
            data.daily.temperature_2m_max[index + 1]
          );
          forecastTemperature.querySelector(".unit").innerHTML = " °C";
        });
      }
    });

    //weekday

    let dateX = new Date();
    let weekdayX = dateX.getDay();

    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Get the weekday name based on the index
    let weekdayName = weekdays[weekdayX];

    weekday.innerHTML = weekdayName;

    //date
    let dateString = data.current_weather.time;
    let today = new Date(dateString);
    let options = { month: "long", day: "numeric", year: "numeric" };
    let formattedDate = today.toLocaleDateString("en-US", options);
    date.innerHTML = formattedDate;

    //temperature
    temperature.innerHTML = Math.round(data.current_weather.temperature);

    //min
    min.innerHTML = Math.round(data.daily.temperature_2m_min[0]);

    //max
    max.innerHTML = Math.round(data.daily.temperature_2m_max[0]);

    //uv-index
    uvIndex.innerHTML = Math.round(data.daily.uv_index_max[0]);

    //wind
    wind.innerHTML = data.current_weather.windspeed;

    //icon and description of the weather
    let weathercode = data.current_weather.weathercode;

    switch (weathercode) {
      case 0:
        cloudness.innerHTML = "Clear sky";
        weatherIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        break;
      case 1:
        cloudness.innerHTML = "Mainly clear";
        weatherIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        break;
      case 2:
        cloudness.innerHTML = "Partly cloudy";
        weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
        break;
      case 3:
        cloudness.innerHTML = "Overcast";
        weatherIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
        break;
      case 45:
      case 48:
        cloudness.innerHTML = "Foggy";
        weatherIcon.innerHTML = '<i class="fa-solid fa-smog"></i>';
        break;
      case 51:
      case 53:
      case 55:
        cloudness.innerHTML = "Drizzle";
        weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>';
        break;
      case 56:
      case 57:
        cloudness.innerHTML = "Freezing drizzle";
        weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>';
        break;
      case 61:
        cloudness.innerHTML = "Slight rain";
        weatherIcon.innerHTML =
          '<i class="fa-solid fa-cloud-showers-heavy"></i>';
        break;
      case 63:
        cloudness.innerHTML = "Moderate rain";
        weatherIcon.innerHTML =
          '<i class="fa-solid fa-cloud-showers-heavy"></i>';

        break;
      case 65:
        cloudness.innerHTML = "Heavy rain";
        weatherIcon.innerHTML =
          '<i class="fa-solid fa-cloud-showers-heavy"></i>';

        break;
      case 66:
        cloudness.innerHTML = "Light freezing rain";
        weatherIcon.innerHTML =
          '<i class="fa-solid fa-cloud-showers-heavy"></i>';

        break;
      case 67:
        cloudness.innerHTML = "Heavy freezing rain";
        weatherIcon.innerHTML =
          '<i class="fa-solid fa-cloud-showers-heavy"></i>';

        break;
      case 71:
        cloudness.innerHTML = "Slight snow";
        weatherIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
        break;
      case 73:
        cloudness.innerHTML = "Moderate snow";
        weatherIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
        break;
      case 75:
        cloudness.innerHTML = "Heavy snow";
        weatherIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
        break;
      case 77:
        cloudness.innerHTML = "Snow grains";
        weatherIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
        break;
      case 80:
        cloudness.innerHTML = "Slight rain showers";
        weatherIcon.innerHTML =
          '<i class="fa-solid fa-cloud-showers-heavy"></i>';
        break;
      case 81:
        cloudness.innerHTML = "Moderate rain showers";
        weatherIcon.innerHTML =
          '<i class="fa-solid fa-cloud-showers-heavy"></i>';
        break;
      case 82:
        cloudness.innerHTML = "Violent rain showers";
        weatherIcon.innerHTML =
          '<i class="fa-solid fa-cloud-showers-heavy"></i>';
        break;
      case 85:
        cloudness.innerHTML = "Slight snow showers";
        weatherIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
        break;
      case 86:
        cloudness.innerHTML = "Heavy snow showers";
        weatherIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
        break;
      case 95:
        cloudness.innerHTML = "Thunderstorm";
        weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>';
        break;
      case 96:
        cloudness.innerHTML = "Thunderstorm/slight hail";
        weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>';

        break;
      case 99:
        cloudness.innerHTML = "Thunderstorm/heavy hail";
        weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>';

        break;
    }

    //FORECAST
    let forecastIcons = document.querySelectorAll(".forecast-icon");
    let forecastWeekdays = document.querySelectorAll(".forecast-weekday");
    let forecastTemperatures = document.querySelectorAll(
      ".forecast-temperature"
    );
    //forecast temp
    forecastTemperatures.forEach(function (forecastTemperature, index) {
      forecastTemperature.querySelector(".value").innerHTML = Math.round(
        data.daily.temperature_2m_max[index + 1]
      );
    });

    //forecast weekdays
    forecastWeekdays.forEach(function (forecastWeekday) {
      if (weekdayX < 6) {
        weekdayX = weekdayX + 1;
      } else {
        weekdayX = 0;
      }
      switch (weekdayX) {
        case 0:
          forecastWeekday.innerHTML = "Sun";
          break;
        case 1:
          forecastWeekday.innerHTML = "Mon";
          break;
        case 2:
          forecastWeekday.innerHTML = "Tue";
          break;
        case 3:
          forecastWeekday.innerHTML = "Wed";
          break;
        case 4:
          forecastWeekday.innerHTML = "Thu";
          break;
        case 5:
          forecastWeekday.innerHTML = "Fri";
          break;
        case 6:
          forecastWeekday.innerHTML = "Sat";
          break;
        default:
          forecastWeekday.innerHTML = "Error";
      }
    });

    //forecast icons
    forecastIcons.forEach(function (forecastIcon, index) {
      let weathercode = data.daily.weathercode[index + 1];
      switch (weathercode) {
        case 0:
          forecastIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
          break;
        case 1:
          forecastIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
          break;
        case 2:
          forecastIcon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
          break;
        case 3:
          forecastIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
          break;
        case 45:
        case 48:
          forecastIcon.innerHTML = '<i class="fa-solid fa-smog"></i>';
          break;
        case 51:
        case 53:
        case 55:
          forecastIcon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>';
          break;
        case 56:
        case 57:
          forecastIcon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>';
          break;
        case 61:
          forecastIcon.innerHTML =
            '<i class="fa-solid fa-cloud-showers-heavy"></i>';
          break;
        case 63:
          forecastIcon.innerHTML =
            '<i class="fa-solid fa-cloud-showers-heavy"></i>';
          break;
        case 65:
          forecastIcon.innerHTML =
            '<i class="fa-solid fa-cloud-showers-heavy"></i>';
          break;
        case 66:
          forecastIcon.innerHTML =
            '<i class="fa-solid fa-cloud-showers-heavy"></i>';
          break;
        case 67:
          forecastIcon.innerHTML =
            '<i class="fa-solid fa-cloud-showers-heavy"></i>';
          break;
        case 71:
          forecastIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
          break;
        case 73:
          forecastIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
          break;
        case 75:
          forecastIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
          break;
        case 77:
          forecastIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
          break;
        case 80:
          forecastIcon.innerHTML =
            '<i class="fa-solid fa-cloud-showers-heavy"></i>';
          break;
        case 81:
          forecastIcon.innerHTML =
            '<i class="fa-solid fa-cloud-showers-heavy"></i>';
          break;
        case 82:
          forecastIcon.innerHTML =
            '<i class="fa-solid fa-cloud-showers-heavy"></i>';
          break;
        case 85:
          forecastIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
          break;
        case 86:
          forecastIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
          break;
        case 95:
          forecastIcon.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>';
          break;
        case 96:
          forecastIcon.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>';
          break;
        case 99:
          forecastIcon.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>';
          break;
      }
    });

    console.log(data);
  })
  .catch((error) => {
    handleGeolocationError(error);
  });
