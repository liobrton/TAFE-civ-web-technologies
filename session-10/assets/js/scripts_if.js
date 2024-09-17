function isValidEmail(email) {
  // Initialise a variable to store feedback
  let feedback = "";

  // Check for basic email format
  // hint: email.match()
  const matches_regex = email.match(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  );
  if (!matches_regex) {
    feedback += "Does not match the basic email format 'someone@example.com; ";
  }

  // Check for spaces in the email
  // hint: use includes()
  const includes_spaces = email.includes(" ");
  if (includes_spaces) {
    feedback += "Includes whitespace; ";
  }

  // Check for the "@" symbol
  // hint: use includes()
  const includes_at_symbol = email.includes("@");
  if (!includes_at_symbol) {
    feedback += "Does not include the '@' symbol; ";
  }

  // Check for multiple "@" symbols
  // hint: use split()
  // hint: count the number of parts using .length
  const splitted_email = email.split("@");
  const includes_multiple_at_symbols = splitted_email.length > 2 ? true : false;
  if (includes_multiple_at_symbols) {
    feedback += "Includes more than 1 '@' symbol; ";
  }

  // Check for "@." sequence
  // hint: use includes()
  const includes_at_dot_sequence = email.includes("@.");
  if (includes_at_dot_sequence) {
    feedback += "Includes invalid sequence '@.; ";
  }

  // Check for "@" at the start or end
  // hint: use startsWith(), endsWith() & the or comparison opertor ||
  const starts_with_at = email.startsWith("@");
  const ends_with_at = email.endsWith("@");
  if (starts_with_at || ends_with_at) {
    feedback += "'@' symbol in invalid position; ";
  }

  // Determine the final validation result & return the feedback messgae
  if (feedback === "") {
    // return a valid message
    return `The email ${email} is valid.`;
  } else {
    // return aan invalid message use=ing template literals
    return `The email ${email} is not valid. Reason: ${feedback}`;
  }
}

// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("invalid email@.com"));
console.log(isValidEmail("no spaces@example.com"));
console.log(isValidEmail("bademail@.com"));
console.log(isValidEmail("@invalid.com"));
console.log(isValidEmail("extra@@invalid.com"));
