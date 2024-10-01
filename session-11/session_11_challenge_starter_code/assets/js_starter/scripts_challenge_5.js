// Challenge 5 Starter
const sidebar = document.querySelector(".sidebar");

function toggleSidebarContent() {
  // Your code goes here
  // check if sidebar list has children
  if (sidebar.hasChildNodes()) {
    // remove first child
    sidebar.removeChild(sidebar.firstChild);
    // create a <p> element
    const newElement = document.createElement("p");

    newElement.textContent = "AAAAAAAAAAAAAAAAAAAAAAAAAAA";
    // add it to the sidebar
    sidebar.appendChild(newElement);
  }
}

// Add a button to toggle the sidebar content
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Sidebar Content";
toggleButton.addEventListener("click", toggleSidebarContent);

// Append the button to the body
document.body.appendChild(toggleButton);
