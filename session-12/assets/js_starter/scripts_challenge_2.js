// Challenge 2 Starter
// Initialise the arrays
let array1 = [1, 2, 3, 2];
let array2 = [4, 5, 6, 4];

// Use the spread operator to merge the two arrays

let merged_array = [...array1, ...array2];

// Use the Set object to remove duplicates
let no_duplicates = new Set(merged_array);
let no_duplicates_array = Array.from(no_duplicates); //creates array from iterable object

// Use array destructuring to assign the first three elements to variables
const [value1, value2, value3, ...others] = no_duplicates_array;

// Set the value of the output filed to be the second element of the unique array
let outputfield = document.getElementById("OutputField");
outputfield.innerHTML = `Second element of unique array: ${no_duplicates_array[1]}`;
