const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,

  changeAge: function (newAge) {
    this.age = newAge;
  },

  changeAge2: (newAge) => {
    this.age = newAge;
  },
};

console.log(userObject.firstName); // Output: John
console.log(userObject.address.city); // Output: Anytown
console.log(userObject.skills[0]); // Output: JavaScript
console.log(userObject.socialProfiles.twitter); // Output: @johndoe

clone1 = { ...userObject };

userObject.changeAge2(50); // arrow function scoped to whole window so it can't reach for this.age, and can't change userObject age
console.log(userObject.age);
