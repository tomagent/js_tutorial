// Reverses a string
function reverse(str) {
  return Array.from(str).reverse().join("");
}

// Returns true for a palindrome, false otherwise
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Return an array of the username and domain for a standard email address
function emailParts(email) {
  let lowerCaseEmail = email.toLowerCase();
  return lowerCaseEmail.split("@")
}
