// Challenge 4 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Find the index of the number 5 in the array
const index_of_number = numbers.findIndex((item) => item === NUMBER);
// if 5 is not present, findIndex() will return -1

// If the number 5 is found in the array
if (numbers.includes(NUMBER)) {
  // Console log each number in the array up to and including 5
  numbers.forEach((element) => {
    element <= 5 ? console.log(element) : "";
  });
  // I don't like that I can't break out of the loop (normal loop works best probably), but for this purpose it is fine.
} else {
  console.log(`The number ${NUMBER} is not in the array.`);
}
