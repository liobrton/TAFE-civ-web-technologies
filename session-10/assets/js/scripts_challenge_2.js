function isValidEmail(email) {
  // Use expression operators, the match method, a regex and strings to validate the email
  // and a template literal containing a ternary operator to validate the email

  const validation = email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) !== null;

  const message = validation ? `The email '${email}' is valid.` : `The email '${email}' is not valid.`
  
  return message;
}

// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("invalidemail@.com"));
console.log(isValidEmail("no spaces@example.com"));
