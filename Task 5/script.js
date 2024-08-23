var h3 = document.querySelector("h3");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var interval;
start.addEventListener("click", function () {
  var count = 0;
  interval = setInterval(() => {
    h3.textContent = count;
    count++;
  }, 1000);
})

stop.addEventListener("click", function () {
  clearInterval(interval);
})