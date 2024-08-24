var h3 = document.querySelector("h3");
var progress = document.querySelector("#progress");
var count = 0;

var interval = setInterval(() => {
  if (count === 100) {
    clearInterval(interval);
    h3.style.display = "block"
  }
  count++;
  progress.style.width = count + "%";
}, 50);