//Time in Riga

function updateRigaTime() {
  let rigaElement = document.querySelector("#riga");
  let rigaDateElement = rigaElement.querySelector(".date");
  let rigaTimeElement = rigaElement.querySelector(".time");
  rigaDateElement.innerHTML = moment().format("MMM Do YYYY");
  rigaTimeElement.innerHTML = moment().tz("Europe/Riga").format("HH:mm:ss");
}

updateRigaTime();
setInterval(updateRigaTime, 1000);

//Time in Portland
function updatePortlandTime() {
  let portlandElement = document.querySelector("#portland");
  let portlandDateElement = portlandElement.querySelector(".date");
  let portlandTimeElement = portlandElement.querySelector(".time");
  portlandDateElement.innerHTML = moment().format("MMM Do YYYY");
  portlandTimeElement.innerHTML = moment().tz("US/Pacific").format("HH:mm:ss");
}
updatePortlandTime();
setInterval(updatePortlandTime, 1000);

//Time in Tokyo
function updateTokyoTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoDateElement.innerHTML = moment().format("MMM Do YYYY");
  tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");
}
updateTokyoTime();
setInterval(updateTokyoTime, 1000);
