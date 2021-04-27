// Reverses a this.content
function reverse(str) {
  return Array.from(str).reverse().join("");
}




// Return an array of the username and domain for a standard email address
function emailParts(email) {
  let lowerCaseEmail = email.toLowerCase();
  return lowerCaseEmail.split("@")
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Makes the phrase LOUDER.
  this.louder = function() {
    return this.content.toUpperCase();
  }

  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }
}
