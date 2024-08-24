var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var homeText = document.querySelector("#homeText");
var aboutText = document.querySelector("#aboutText");
var contactText = document.querySelector("#contactText");
var h3 = document.querySelectorAll("h3");

function displayAllTextNone() {
  h3.forEach(function (h3) {
    h3.style.display = "none";
  })
}

homeText.style.display = "block";

home.addEventListener("click", function () {
  displayAllTextNone();
  homeText.style.display = "block";
})

about.addEventListener("click", function () {
  displayAllTextNone();
  aboutText.style.display = "block";
})

contact.addEventListener("click", function () {
  displayAllTextNone();
  contactText.style.display = "block";
})