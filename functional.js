let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string
//    Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-")
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// Urls functional version
function functionalUrls(elements) {
  return elements.map( element => urlify(element));
}

console.log(functionalUrls(states));

// simples: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element){
    if (element.split(/\s+/).length === 1) {
      singles.push(element)
    }
  });
  return singles;
}
console.log(imperativeSingles(states))

// Returns true or false if the element is composed of one word
function isOneWord(string){
  return string.split(/\s+/).length === 1
}

// simples: Filter version
function functionalSingles(elements){
  return elements.filter( element => isOneWord(element));
}
console.log(functionalSingles(states))

let numbers = [1,2,3,4,5,6,7,8,9,10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n){
    total += n;
  })
  return total;
}
console.log(imperativeSum(numbers));

// sum: functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, state) => {
                            lengths[state] = element.length;
                            return lengths;
                          }, {});
}
console.log(functionalLengths(states));

function functionalLengths(elements) { return elements.reduce((lengths, element) => lengths[element] = element.length; return lengths; }, {});
