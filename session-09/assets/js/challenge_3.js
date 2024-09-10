// Generate 5 random numbers between 1 and 100
// Hint: be carful not to start at 0

const n1 = Math.floor(Math.random() * 101);
const n2 = Math.floor(Math.random() * 101);
const n3 = Math.floor(Math.random() * 101);
const n4 = Math.floor(Math.random() * 101);
const n5 = Math.floor(Math.random() * 101);

// Calculate the sum of the numbers

const n_sum = n1 + n2 + n3 + n4 + n5;

// Calculate the average of the numbers

const n_average = n_sum / 5;

// Calculate the square root of the average
// Hint: use the inbuild Math object method()

const n_sqrt = Math.sqrt(n_average);

// Calculate the largest number

const n_largest = Math.max(n1,n2,n3,n4,n5);

// Calculate the factorial of the largest number
// Hint: the factorial for 5 is 5*4*3*2*1
let n_factorial = 1;
for (let index = 1; index <= n_largest; index++) {
    n_factorial = n_factorial * index;
    n_factorial *= index;
}

// Display the results using template literals
// Hint: log them in the console.
console.log(n_factorial);
