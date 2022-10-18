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

//targets the entire div with hour and description
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

//targets the descriptions objects for each hour.
var entries = [
  $("#9"),
  $("#10"),
  $("#11"),
  $("#12"),
  $("#1"),
  $("#2"),
  $("#3"),
  $("#4"),
  $("#5"),
];

var events = {
  hour9: $("#9").val(),
  hour10: hours[1].value,
  hour11: hours[2].value,
  hour12: hours[3].value,
  hour1: hours[4].value,
  hour2: hours[5].value,
  hour3: hours[6].value,
  hour4: hours[7].value,
  hour5: hours[8].value,
};

console.log(events);

// var retrieveUserInput = localStorage.getItem("userEvent");
var $saveEl = $(".saveBtn");

//adds function to each save button, sets local storage
$(".saveBtn").click(function () {
  console.log($(this).siblings(".description").val());
  localStorage.setItem(
    $(this).siblings(".hour").text(),
    JSON.stringify($(this).siblings(".description").val())
  );
  // userItems();

  //TODO: google js/Jquery
  //upon clicking save, grab value of ID associated with time block, that will be name/key of 1st argument of .setItem
  //grab value of text area, assign that as second argument of .setItem (don't forget JSON.stringify).
  //(line 63) save to storage.

  // renderInputs();
});

//retrieves user inputs - - s
function renderInputs() {
  var lastEvent = JSON.parse(localStorage.getItem("Event"));
  if (lastEvent !== null) {
    events.hour9 = getItem("9AM");
    events.hour10 = $(".description").val();
    events.hour11 = $(".description").val();
    events.hour12 = $(".description").val();
    events.hour1 = $(".description").val();
    events.hour2 = $(".description").val();
    events.hour3 = $(".description").val();
    events.hour4 = $(".description").val();
    events.hour5 = $(".description").val();
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
