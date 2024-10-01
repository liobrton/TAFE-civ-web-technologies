// Challenge 4 Starter
const eventLinks = document.querySelectorAll("[data-event]"); //finds all elements that have the data-event attribute
// [ ] is the attribute selector

function logEvent(eventDetails) {
  //code goes here
}

for (const [eventDetails] of eventLinks.entries()) {
  //[eventDetails] is the index, the first item in eventLinks.entries()
  console.log(`${eventLinks[eventDetails].innerHTML.toUpperCase()}`);
  // innerHTML attribute grabs the text on the inside??
}
