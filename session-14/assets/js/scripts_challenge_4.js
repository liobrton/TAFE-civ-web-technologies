// Challenge 4 Starter
// Get the form element
const form = document.querySelector("#save-me");

// localStorage prefix
let prefix = "autosave_";

/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler(event) {
    // save the field to a variable in local storage
    let field = event.target; // grabs the field you were typing in from the even listener

    // returns if there is no id, because we need to use the id to grab from the field
    if (!field.id) return;

    // save field to storage
    localStorage.setItem(prefix + field.id, field.value);
}

/**
 * Clear all of the saved fields from storage
 */
function clearStorage() {
    // get all the IDs
    let fields = form.elements;
    // add the prefix to them
    // remove the data
    for (let field of fields) {
        localStorage.removeItem(prefix + field.id);
    }
}

/**
 * Load saved data from localStorage
 */
function loadSaved() {
    // get fields in the form

    // add prefixes

    for (let field of fields) {
        //get the saved value
        let saved = localStorage.getItem(prefix + field.id);
        // if theres no saved value, go to next iteration
        if (!saved) continue;
        // make the value of the field the saved data
        field.value = saved;
    }
}

// Load saved data from localStorage
loadSaved();

// Listen for DOM events
// input - typing
form.addEventListener("input", inputHandler);

// submitting - clear storage when submitting the form
form.addEventListener("submit", clearStorage);
