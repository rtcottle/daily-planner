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
  hour10: $("#10").val(),
  hour11: $("#11").val(),
  hour12: $("#12").val(),
  hour1: $("#1").val(),
  hour2: $("#2").val(),
  hour3: $("#3").val(),
  hour4: $("#4").val(),
  hour5: $("#5").val(),
};

// var retrieveUserInput = localStorage.getItem("userEvent");
var $saveEl = $(".saveBtn");

renderInputs();
changeColors();

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
});

//retrieves user inputs
function renderInputs() {
  ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"].forEach(
    (e) => {
      var removeLastTwo = e.slice(0, -2);
      var time = JSON.parse(localStorage.getItem(e));
      var timeEl = $("#" + removeLastTwo);
      console.log(timeEl);
      timeEl.text(time);
      console.log(time);
    }
  );
}

function changeColors() {
  ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"].forEach(
    (e) => {
      var removeLastTwo = e.slice(0, -2);
      var timeEl = $("#" + removeLastTwo);
      console.log(timeEl);
    }
  );
}

// (events.hour9 = localStorage.getItem("9AM")),
//   (events.hour10 = JSON.parse(localStorage.getItem("10AM"))),
//   (events.hour11 = JSON.parse(localStorage.getItem("11AM"))),
//   (events.hour12 = JSON.parse(localStorage.getItem("12PM"))),
//   (events.hour1 = JSON.parse(localStorage.getItem("1PM"))),
//   (events.hour2 = JSON.parse(localStorage.getItem("2PM"))),
//   (events.hour3 = JSON.parse(localStorage.getItem("3PM"))),
//   (events.hour4 = JSON.parse(localStorage.getItem("4PM"))),
//   (events.hour5 = JSON.parse(localStorage.getItem("5PM"))),
// $(".description").value = events;
// console.log(events);
// }

// sets the user input as an item in the local storage
// function userItems(event) {
//   for (var i = 0; i < hours[this]; i++) {
//     event.localStorage.setItem($userInput);
//   }
// }

// HINT: take current time, same array (AM/PM) use conditional inside a function.
