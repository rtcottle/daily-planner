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

var inputEl = "";
var $userInput = localStorage.setItem(
  "userEvent",
  JSON.stringify($(".description").value)
);
var retrieveUserInput = localStorage.getItem("userEvent");
var $saveEl = $(".saveBtn");

//retrieves user inputs
function renderInputs() {
  for (var j = 0; j < hours; j++) {
    $(".discription").append($userInput);
  }
}
renderInputs();

// sets the user input as an item in the local storage
function userItems(event) {
  for (var i = 0; i < hours[i]; i++) {
    event.$(".description").localStorage.setItem("item", $userInput);
  }
}

//adds function to each save button
$(".saveBtn").click($userInput, function () {
  console.log($userInput);
  userItems();
});

//set the time for 9-5 business hours
// var nine = {
//   hours[0]:
//     dayjs().set("hour", 9).set("minute", 00).set("second", 00),
// };
// console.log(nine);
// var ten = dayjs().set("hour", 10).set("minute", 00).set("second", 00);
// console.log(ten);
// var ten = dayjs().set("hour", 11).set("minute", 00).set("second", 00);
// console.log(ten);
// var eleven = dayjs().set("hour", 12).set("minute", 00).set("second", 00);
// console.log(eleven);
// var twelve = dayjs().set("hour", 13).set("minute", 00).set("second", 00);
// console.log(twelve);
// var one = dayjs().set("hour", 14).set("minute", 00).set("second", 00);
// console.log(one);
// var two = dayjs().set("hour", 15).set("minute", 00).set("second", 00);
// console.log(two);
// var three = dayjs().set("hour", 16).set("minute", 00).set("second", 00);
// console.log(three);
// var four = dayjs().set("hour", 17).set("minute", 00).set("second", 00);
// console.log(four);
// var five = dayjs().set("hour", 18).set("minute", 00).set("second", 00);
// console.log(five);

// var entry = document.querySelectorAll(".description").textContent;
// var saveBtn = document.querySelectorAll(".saveBtn");
// saveBtn.on("click", function () {
//   localStorage.setItem("input", entry);
// });
