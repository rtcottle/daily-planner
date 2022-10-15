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
  document.getElementById("9"),
  document.getElementById("10"),
  document.getElementById("11"),
  document.getElementById("12"),
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
  document.getElementById("5"),
];

var inputEl = "";
var test = document.querySelectorAll(".description");
var retrieve = localStorage.getItem("test");
var save = document.querySelectorAll(".saveBtn");

function userInput() {
  test.value = inputEl;
}

for (var i = 0; i < test.value; i++) {
  test[i].addEventListener("click", userInput, false);
}

// save.addEventListener("click", function () {
//   console.log("hi");
//   //   localStorage.setItem("input", test.value);
//   //   console.log(test);
//   userInput();
// });

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
