// function timeShower() {
//     var timeNow = new Date();

//     document.querySelector(".hours").textContent = timeNow.getHours();
//     document.querySelector(".minutes").textContent = timeNow.getMinutes();
//     document.querySelector(".seconds").textContent = timeNow.getSeconds();
// }
// timeShower()

// setInterval(function() {
//  timeShower();
// },1000)

//Second version

function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const meridium = hours>= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString  = `${hours}:${minutes}:${seconds} ${meridium}`;
    document.getElementById("clock").textContent = timeString
}
updateClock()
setInterval(updateClock, 1000);
