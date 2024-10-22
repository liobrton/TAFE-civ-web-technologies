// Challenge 3 Starter
// Create the class and use the constructor method
class UserObject {
  constructor(
    firstName,
    lastName,
    age,
    isStudent,
    street,
    city,
    zipcode,
    skills,
    socialProfiles,
    isEmployed
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isStudent = isStudent;
    this.address = { street, city, zipcode };
    this.skills = skills;
    this.socialProfiles = socialProfiles;
    this.isEmployed = isEmployed;
  }
}

// Create an instance of the ComplexObject class (hint: add the properties)
const userObjectInstance = new UserObject(
  "Eliot",
  "Barton",
  16,
  true,
  "123 Main St",
  "Perth",
  "6000",
  ["JavaScript", "HTML", "CSS"],
  {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  true
);

// Log the new instance of the object
console.log(userObjectInstance);
