//FreeCodeCamp Regular Expressions 
//RegEx: Match all numbers

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;