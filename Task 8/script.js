var people = document.querySelector(".people");
var input = document.querySelector("input");
var data = [
  { name: "Justin", src: "https://images.pexels.com/photos/4110929/pexels-photo-4110929.jpeg" },

  { name: "Jeremy", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },

  { name: "Simon", src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },

  { name: "Nitin", src: "https://images.pexels.com/photos/4052800/pexels-photo-4052800.jpeg" },

  { name: "Nill", src: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" },

  { name: "Andrew", src: "https://images.pexels.com/photos/3221010/pexels-photo-3221010.jpeg" },

  { name: "Jeffrey", src: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg" },

  { name: "Nicholas", src: "https://images.pexels.com/photos/2770600/pexels-photo-2770600.jpeg" },
]

var persons = "";
data.forEach(function (elem) {
  persons += `<div class="person">
    <div class="img">
      <img
        src="${elem.src}">
    </div>
    <h4>${elem.name}</h4>
  </div>`
})

people.innerHTML = persons;

input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  })

  var newPersons = "";
  matching.forEach(function (elem) {
    newPersons += `<div class="person">
    <div class="img">
      <img
        src="${elem.src}">
    </div>
    <h4>${elem.name}</h4>
  </div>`
  })

  people.innerHTML = newPersons;
})