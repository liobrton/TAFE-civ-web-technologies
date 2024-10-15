// Challenge 2 Starter
// Event listener for the body to handle events bubbling up
document.body.addEventListener("click", function (event) {
  if (event.target.id === "button1") {
    // starting in the button, bubbling up means the body 'hears' the event
    // then grabbing target means its getting the element that was actually clicked,
    // even though the the whole body of the document is referenced
    console.log(`Clicked ${event.target.id}`);
    event.target.textContent = "Clicked!";
  } else if (event.target.id == "button2") {
    console.log(`Clicked ${event.target.id}`);
    alert("CLICKED THE ONE YOURE MEANT TO HOVER OVER");
  } else if (event.target.id == "button3") {
    console.log(`Clicked ${event.target.id}`);
  } else {
    console.log("You clicked somewhere else on the page");
  }
});
