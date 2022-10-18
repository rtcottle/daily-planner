/*
TODO: color-coded for past, present, future (in CSS)
//IDEA: make the textarea assigned to the date in the "hour" section.
TODO: events can be saved 
TODO: once saved, recalled upon refresh (local storage)
*/

var now = dayjs().format("dddd, MMMM D, YYYY h:mmA");
console.log(now);
var current = document.getElementById("currentDay");

current.textContent = now;
var setTime = dayjs().set("hour", 9);
var businessHours = setTime++;
console.log(setTime);
console.log(businessHours);

var hours = [
  document.getElementById("hour-9"),
  document.getElementById("hour-10"),
  document.getElementById("hour-11"),
  document.getElementById("hour-12"),
  document.getElementById("hour-1"),
  document.getElementById("hour-2"),
  document.getElementById("hour-3"),
  document.getElementById("hour-4"),
  document.getElementById("hour-5"),
];

var events = {
  hour9: hours[0].value,
  // hour10: hours[1].value,
  // hour11: hours[2].value,
  // hour12: hours[3].value,
  // hour1: hours[4].value,
  // hour2: hours[5].value,
  // hour3: hours[6].value,
  // hour4: hours[7].value,
  // hour5: hours[8].value,
};

console.log(events);

// var retrieveUserInput = localStorage.getItem("userEvent");
var $saveEl = $(".saveBtn");

//adds function to each save button, sets local storage
$(".saveBtn").click(function () {
  localStorage.setItem("Event", JSON.stringify(events));
  // userItems();
  renderInputs();
  console.log(events);
});

//retrieves user inputs
function renderInputs() {
  var lastEvent = JSON.parse(localStorage.getItem("Event"));
  if (lastEvent !== null) {
    events = $(".description").val();
    // $(".description").value = events;
    console.log(events);
  }
}

// sets the user input as an item in the local storage
// function userItems(event) {
//   for (var i = 0; i < hours[this]; i++) {
//     event.localStorage.setItem($userInput);
//   }
// }
