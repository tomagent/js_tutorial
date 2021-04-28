// Adds `reverse` to all strings
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
}

String.prototype.blank = function blank() {
  return /^\s*$/g.test(this)
}

Array.prototype.last = function last() {
  return this.slice(-1)[0];
}
