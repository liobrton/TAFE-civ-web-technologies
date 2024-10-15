// Challenge 3 Starter
function safeDivide(a, b) {
  try {
    // if b is 0 throw error with user friendly msg
    if (b === 0) {
      throw new Error("division by 0 is illegal what are you doing");
    }

    const result = a / b;

    return result;
  } catch (error) {
    console.error(`An unexpected error occurred: ${error.message}`);
  }
}

console.log(safeDivide(10, 0)); // Expected Output: "An error occurred: Division by zero is not allowed."
console.log(safeDivide(10, 2)); // Expected Output: 5
