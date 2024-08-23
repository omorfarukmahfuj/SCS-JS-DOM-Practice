// First Way
/*
var form = document.querySelector("form");
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var h4 = document.querySelector("h4");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(input1.value, input2.value);
  if (input1.value === '' || input2.value === '') {
    h4.textContent = "error, some fields are blank.";
    h4.style.color = "red";
  }
  else {
    h4.textContent = "";
  }

})

 */

// Second Way
var form = document.querySelector("form");
var inputs = document.querySelectorAll("input[type='text']");
var h4 = document.querySelector("h4");
form.addEventListener("submit", function (events) {
  events.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
      h4.textContent = "error, some fields are blank";
      h4.style.color = "red";
      break;
    }
    else {
      h4.textContent = "";
    }
  }
})