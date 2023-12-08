//Time in Riga

function updateRigaTime() {
  let rigaElement = document.querySelector("#riga");
  if (rigaElement) {
    let rigaDateElement = rigaElement.querySelector(".date");
    let rigaTimeElement = rigaElement.querySelector(".time");
    rigaDateElement.innerHTML = moment().format("MMM Do YYYY");
    rigaTimeElement.innerHTML = moment().tz("Europe/Riga").format("HH:mm:ss");
  }
}

updateRigaTime();
setInterval(updateRigaTime, 1000);

//Time in Portland
function updatePortlandTime() {
  let portlandElement = document.querySelector("#portland");
  if (portlandElement) {
    let portlandDateElement = portlandElement.querySelector(".date");
    let portlandTimeElement = portlandElement.querySelector(".time");
    portlandDateElement.innerHTML = moment().format("MMM Do YYYY");
    portlandTimeElement.innerHTML = moment()
      .tz("US/Pacific")
      .format("HH:mm:ss");
  }
}

updatePortlandTime();
setInterval(updatePortlandTime, 1000);

//Time in Tokyo
function updateTokyoTime() {
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    tokyoDateElement.innerHTML = moment().format("MMM Do YYYY");
    tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");
  }
}
updateTokyoTime();
setInterval(updateTokyoTime, 1000);

//City selection menu, display time when city is selected
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = document.getElementById("city-select");
  let citySelectedName = cityName.options[cityName.selectedIndex].text;
  let cityTime = moment().tz(cityTimeZone).format("HH:mm:ss");
  let cityDate = moment().tz(cityTimeZone).format("MMM Do YYYY");

  let cityDisplayElement = document.querySelector("#city-container");

  cityDisplayElement.innerHTML = ` <div class="cities">
              <div class="city-4">
                <h2 class="city-name">${citySelectedName}</h2>
                <div class="time">${cityTime}</div>
                <div class="date">${cityDate}</div>
              </div> <br />
              <a href="/">Go back to all cities</a>`;
  setInterval(updateEachSecond, 1000);
}
// Update 'select' time each second
function updateEachSecond() {
  let citySelectElement = document.querySelector("#city-select");
  let timeZoneValue = citySelectElement.value;
  let cityDisplayElement = document.querySelector("#city-container");
  let cityTimeElement = cityDisplayElement.querySelector(".time");
  cityTimeElement.innerHTML = moment().tz(timeZoneValue).format("HH:mm:ss");
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
