// Challenge 2 Starter
const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
};

// Deep clone the complexObject three times using the spread operator for shallow cloning
clone1 = { ...userObject };
clone2 = { ...userObject };
clone3 = JSON.parse(JSON.stringify(userObject));

// Store the cloned objects in an array
let cloneArray = [clone1, clone2, clone3];
console.log(cloneArray);

// Sort the array of cloned objects based on the 'age' property in ascending order
cloneArray.sort((a, b) => a.age - b.age);

// Log the sorted array to the console
console.log(cloneArray);
