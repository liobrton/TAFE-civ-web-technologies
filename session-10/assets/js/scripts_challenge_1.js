function isValidEmail(email) {
  // Use expression operators, the match method, a regex and strings to validate the email
  
  // if it matches the regex template
  // return true
  // else return false

  const validation = email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) !== null;
  return validation;
}

// Test cases
console.log(isValidEmail("john@example.com")); // Should return true
console.log(isValidEmail("invalidemail@.com")); // Should return false
console.log(isValidEmail("no spaces@example.com")); // Should return true
