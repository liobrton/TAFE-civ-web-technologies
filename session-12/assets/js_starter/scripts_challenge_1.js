// Challenge 1 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Use the pop() method to remove the last element from the array
popped = numbers.pop();
console.log(popped);

// Use the unshift() method to add the last element to the beginning of the array
numbers.unshift(popped);
console.log(`unshift = ${numbers}`);

// Use the slice() method to exclude the first 3 elements and return a new array
let new_numbers = numbers.slice(3, numbers.length);
console.log(new_numbers);

// Set the value of the outputfield inner html to the new array
let outputfield = document.getElementById("OutputField");
outputfield.innerHTML = new_numbers;
