// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

let number = 5;

// Check if the array includes the number 5
if (numbers.includes(5)) {
  // If true, filter out numbers less than 5
  let filtered = numbers.filter((item) => item >= 5);
  console.log(filtered);

  // Then square each number in the resulting array
  let mapped = filtered.map((item) => item ** 2);

  // Output the final array
  console.log(`Final array: ${mapped}.`);
} else {
  // Output a message if the number 5 is not in the array
  console.log("There is not a 5 in the array.");
}
