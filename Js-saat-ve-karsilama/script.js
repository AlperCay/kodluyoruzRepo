let userName = prompt("Lütfen adınızı giriniz");
let greeting = "";
let getHour = new Date().getHours();


if (getHour > 6 && getHour < 18) {
    greeting = "İyi günler";
    document.getElementById("main").classList.add("day");
  } else {
    greeting = "İyi geceler";
    document.getElementById("main").classList.add("night");
}
document.querySelector("h1").innerHTML = userName
  ? `${greeting} ${userName}`
  : `${greeting}
   ziyaretçi`;

function startTime() {
  const currentTime = new Date();
  document.querySelector("p").innerHTML =
    currentTime.toLocaleTimeString("tr-TR", {hour12: false});
  setTimeout(startTime, 1000);
}
startTime();