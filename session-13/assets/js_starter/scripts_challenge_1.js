// Challenge 1 Starter
// Event listener for button 1
// click event listener changes the button's text to 'Clicked!' when it's clicked

// get the button
const click_button = document.getElementById("button1");

// create the function to be executed
function clickedText(event) {
  this.textContent = "Clicked!";
}

// attach event handler
click_button.addEventListener("click", clickedText);

// Event listener for button 2
// a mouseover event listener displays an alert when the mouse is hovered over the button
const hover_button = document.getElementById("button2");

function displayAlert(event) {
  console.log("hello world!");
  alert("Congrats for hovering over the button i guess");
}

hover_button.addEventListener("mouseover", displayAlert);

// Event listener for button 3
// a double-click event listener logs a message to the console when the button is double clicked

function logMessage(event) {
  console.log("Logging message, you double clicked on the button!");
}
document.getElementById("button3").addEventListener("dblclick", logMessage);
