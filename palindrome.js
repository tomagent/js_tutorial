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

  this.processor = function(string) {
  return this.string.toLowerCase();
​  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
   return this.processor(this.content);
 }

  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
   return this.processedContent() === reverse(this.processedContent());
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
