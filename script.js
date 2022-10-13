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
